"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBag,
  Clock,
  TrendingUp,
  CalendarDays,
  SlidersHorizontal,
  Puzzle,
  ArrowRight,
  Activity,
  Trophy,
  PlayCircle,
  Headphones,
  Mail,
  MessageSquare,
} from "lucide-react";
import { AffiliateLinkCard } from "@/components/AffiliateLinkCard";
import { AuthGuard } from "@/components/AuthGuard";
import { SignOutButton } from "@/components/SignOutButton";
import { DownloadExtensionButton } from "@/components/DownloadExtensionButton";
import { LicenseKeyModal } from "@/components/LicenseKeyModal";
import { getUser } from "@/lib/auth/tokenStorage";
import { useAccountStats, type AccountStats } from "@/lib/auth/useAccountStats";
import { useLeaderboard } from "@/lib/auth/useLeaderboard";
import { type LeaderboardEntry } from "@/lib/auth/authClient";
import { setUpPushNotifications } from "@/lib/firebase/messaging";
import { emitRefresh } from "@/lib/firebase/refreshBus";
import {
  computeTrialDaysLeft,
  MAX_TRIAL_DAYS,
  TRIAL_LENGTH_DAYS,
} from "@/lib/trial";
import {
  addMobileAccess,
  type CheckoutResult,
  consumeBuyIntent,
  formatEuro,
  isSubscriptionLive,
  MOBILE_PRICE_EUR,
  MOBILE_PRICE_LABEL,
  mobileProrationEstimate,
  openBillingPortal,
  peekBuyIntent,
  PRO_PRICE_EUR,
  PRO_PRICE_LABEL,
  type Purchase,
  startCheckout,
} from "@/lib/payments";

const DAY_MS = 24 * 60 * 60 * 1000;
// Highlight the auto-renew prompt once a license is this close to expiring.
const RENEW_WARNING_DAYS = 30;
// The backend can only anchor a renewal within a year of the expiry date,
// and below two days left it charges today instead of on the expiry date.
const MAX_RENEW_AHEAD_DAYS = 365;
const MIN_FREE_RENEW_DAYS = 2;
// After returning from Stripe, re-check this often (and for this long)
// while the webhook activates the license.
const ACTIVATION_POLL_MS = 3000;
const ACTIVATION_TIMEOUT_MS = 45000;

type PaymentReturn = "activating" | "activated" | "delayed" | "cancelled";

// Mirrors User.isLicenseActive() on the backend: isPaid stays true after a
// license runs out, so the expiry has to be checked too.
function getLicenseState(isPaid: boolean, expiresAt: string | null) {
  const msLeft = expiresAt ? new Date(expiresAt).getTime() - Date.now() : null;
  const active = isPaid && (msLeft === null || msLeft > 0);
  return {
    active,
    expired: isPaid && !active,
    daysLeft: msLeft === null ? null : Math.max(0, Math.ceil(msLeft / DAY_MS)),
  };
}

// Stripe sends buyers back to /dashboard?payment=success|cancelled. Only
// rendered client-side (behind AuthGuard), so reading the URL here is safe.
function readPaymentReturn(): PaymentReturn | null {
  const payment = new URLSearchParams(window.location.search).get("payment");
  if (payment === "success") return "activating";
  if (payment === "cancelled") return "cancelled";
  return null;
}

function readPurchase(): Purchase {
  const purchase = new URLSearchParams(window.location.search).get("purchase");
  return purchase === "renew" || purchase === "mobile" ? purchase : "pro";
}

type BillingAction = "checkout" | "mobile" | "portal";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

interface BotActiveFilters {
  minPrice?: string;
  maxPrice?: string;
  maxRating?: string;
  cardRating?: string;
  exactRatingMode?: boolean;
  maxPurchasesPerSearch?: string;
  actionDelayValue?: string;
  activeTab?: "safe" | "caution" | "risky";
}

function formatNumeric(value: string | undefined): string | null {
  if (!value) return null;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed.toLocaleString() : value;
}

function buildFilterChips(
  activeFilters: Record<string, unknown> | null | undefined,
): { label: string; value: string }[] {
  const f = (activeFilters ?? {}) as BotActiveFilters;
  const chips: { label: string; value: string }[] = [];

  const minPrice = formatNumeric(f.minPrice);
  if (minPrice) chips.push({ label: "Min Price", value: minPrice });

  const maxPrice = formatNumeric(f.maxPrice);
  if (maxPrice) chips.push({ label: "Max Price", value: maxPrice });

  if (f.exactRatingMode && f.cardRating) {
    chips.push({ label: "Exact Rating", value: f.cardRating });
  } else {
    if (f.maxRating) chips.push({ label: "Max Rating", value: f.maxRating });
    if (f.cardRating) chips.push({ label: "Card Rating", value: f.cardRating });
  }

  if (f.maxPurchasesPerSearch) {
    chips.push({
      label: "Purchase Cap",
      value: `${f.maxPurchasesPerSearch} / search`,
    });
  }

  if (f.actionDelayValue) {
    chips.push({ label: "Action Delay", value: `${f.actionDelayValue} ms` });
  }

  return chips;
}

// The extension heartbeats every 20s while running — anything older than a
// few missed beats means the bot isn't actually connected/running anymore,
// regardless of what botStatus last said (e.g. side panel closed without a
// clean stop).
const STALE_THRESHOLD_MS = 90000;

function getBotStatusDisplay(stats: AccountStats | null): {
  label: string;
  isLive: boolean;
} {
  if (!stats) return { label: "Unknown", isLive: false };

  const isStale =
    !stats.lastSeenAt ||
    Date.now() - new Date(stats.lastSeenAt).getTime() > STALE_THRESHOLD_MS;

  if (isStale) return { label: "Offline", isLive: false };
  if (stats.botStatus === "running") return { label: "Running", isLive: true };
  return { label: "Idle", isLive: false };
}

function formatTimeAgo(iso: string): string {
  const diffMs = Date.now() - new Date(iso).getTime();
  const minutes = Math.floor(diffMs / 60000);
  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

function formatDuration(ms: number): string {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const pad = (n: number) => String(n).padStart(2, "0");
  return hours > 0
    ? `${hours}:${pad(minutes)}:${pad(seconds)}`
    : `${pad(minutes)}:${pad(seconds)}`;
}

// Ticks once a second while the bot is actually running, computing elapsed
// time from the server-stamped runningSince rather than trusting anything
// client-side — the dashboard could load mid-session, long after the bot
// actually started.
function useElapsedTime(
  runningSince: string | null | undefined,
  isRunning: boolean,
): string {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    if (!isRunning || !runningSince) return;
    const intervalId = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(intervalId);
  }, [isRunning, runningSince]);

  if (!isRunning || !runningSince) return "—";
  return formatDuration(now - new Date(runningSince).getTime());
}

const medals: Record<number, string> = { 1: "🥇", 2: "🥈", 3: "🥉" };

const tierStyles: Record<number, string> = {
  1: "bg-amber-400/10 border-amber-400/40",
  2: "bg-slate-400/10 border-slate-400/40",
  3: "bg-orange-500/10 border-orange-500/40",
};

const tierRing: Record<number, string> = {
  1: "ring-2 ring-amber-400/60",
  2: "ring-2 ring-slate-400/60",
  3: "ring-2 ring-orange-500/60",
};

export default function DashboardPage() {
  return (
    <AuthGuard>
      <DashboardContent />
    </AuthGuard>
  );
}

function DashboardContent() {
  const user = getUser();
  const stats = useAccountStats();
  const leaderboardData = useLeaderboard();
  const [upgradeModalOpen, setUpgradeModalOpen] = useState(false);
  const [billingPending, setBillingPending] = useState<BillingAction | null>(null);
  const [checkoutError, setCheckoutError] = useState("");
  const [withMobile, setWithMobile] = useState(false);
  const [paymentReturn, setPaymentReturn] = useState<PaymentReturn | null>(
    readPaymentReturn,
  );
  const [purchase, setPurchase] = useState<Purchase>(readPurchase);
  // Came from a buy button by way of login/register: point at Subscribe.
  const [highlightSubscribe] = useState(
    () => peekBuyIntent() === "after-sign-in",
  );

  // Runs a billing call. A Stripe redirect unloads the page; a change the
  // backend applied to the existing subscription instead (no checkout) is
  // waited for the same way as a return from Stripe.
  const runBilling = useCallback(
    async (
      action: BillingAction,
      call: () => Promise<CheckoutResult>,
      appliedAs?: Purchase,
    ) => {
      setBillingPending(action);
      setCheckoutError("");
      const result = await call();
      if (!result.ok) {
        setCheckoutError(result.message);
        setBillingPending(null);
      } else if (!result.redirected) {
        setBillingPending(null);
        if (appliedAs) {
          setPurchase(appliedAs);
          setPaymentReturn("activating");
          emitRefresh();
        }
      }
    },
    [],
  );

  // Best-effort: request notification permission and register this
  // browser's FCM token so bot-status/purchase updates land as an
  // immediate refresh signal instead of waiting for the 60s poll.
  useEffect(() => {
    void setUpPushNotifications();
  }, []);

  // Drop ?payment=… once read so a reload doesn't replay the message, and
  // honour ?buy=1 from buy buttons elsewhere on the site: straight to
  // checkout when already signed in, otherwise just point at Subscribe.
  useEffect(() => {
    const url = new URL(window.location.href);
    if (url.searchParams.has("payment")) {
      url.searchParams.delete("payment");
      url.searchParams.delete("purchase");
      window.history.replaceState(null, "", url.pathname + url.search + url.hash);
    }
    if (consumeBuyIntent() === "direct") {
      void startCheckout().then((result) => {
        if (!result.ok) {
          setCheckoutError(result.message);
        } else if (!result.redirected) {
          setPurchase("renew");
          setPaymentReturn("activating");
          emitRefresh();
        }
      });
    }
  }, []);

  const displayName = user?.name ?? "there";
  const createdAt = stats?.createdAt ?? user?.createdAt;
  const isPaid = stats?.isPaid ?? user?.isPaid ?? false;
  const licenseExpiresAt = stats?.licenseExpiresAt ?? null;
  const {
    active: licenseActive,
    expired: licenseExpired,
    daysLeft: licenseDaysLeft,
  } = getLicenseState(isPaid, licenseExpiresAt);
  const renewSoon =
    licenseActive &&
    licenseDaysLeft !== null &&
    licenseDaysLeft <= RENEW_WARNING_DAYS;

  const subscriptionStatus = stats?.subscriptionStatus ?? null;
  const subscriptionCancelAt = stats?.subscriptionCancelAt ?? null;
  const autoRenewOn = isSubscriptionLive(subscriptionStatus) && !subscriptionCancelAt;
  const paymentFailed = subscriptionStatus === "past_due";
  const hasMobileAccess = stats?.hasMobileAccess ?? false;
  const mobileAccessExpiresAt = stats?.mobileAccessExpiresAt ?? null;
  const mobileAddonAvailable = stats?.mobileAddonAvailable ?? false;
  const renewalTotal = PRO_PRICE_EUR + (hasMobileAccess ? MOBILE_PRICE_EUR : 0);
  // Existing Pro (Dodo, Gumroad, one-time Stripe, or a cancelled
  // subscription) that won't renew on its own yet.
  const canTurnOnAutoRenew =
    licenseActive &&
    !autoRenewOn &&
    licenseDaysLeft !== null &&
    licenseDaysLeft <= MAX_RENEW_AHEAD_DAYS;
  const freeAutoRenew =
    licenseDaysLeft !== null && licenseDaysLeft >= MIN_FREE_RENEW_DAYS;
  const mobileEstimate = mobileProrationEstimate(licenseExpiresAt);
  const canAddMobile =
    licenseActive &&
    mobileAddonAvailable &&
    !hasMobileAccess &&
    mobileEstimate !== null &&
    licenseDaysLeft !== null &&
    licenseDaysLeft <= MAX_RENEW_AHEAD_DAYS &&
    (isSubscriptionLive(subscriptionStatus) || licenseDaysLeft >= MIN_FREE_RENEW_DAYS);

  const beginCheckout = () =>
    void runBilling(
      "checkout",
      () => startCheckout({ mobile: !licenseActive && withMobile && mobileAddonAvailable }),
      "renew",
    );
  const beginAddMobile = () => void runBilling("mobile", addMobileAccess, "mobile");
  const beginManage = () => void runBilling("portal", openBillingPortal);

  // The webhook usually lands within a second or two of the redirect, but
  // poll briefly instead of waiting for the regular 60s refresh. What
  // counts as done depends on what was bought.
  const purchaseDone =
    purchase === "renew"
      ? autoRenewOn
      : purchase === "mobile"
        ? hasMobileAccess
        : licenseActive;
  const paymentNotice: PaymentReturn | null =
    (paymentReturn === "activating" || paymentReturn === "delayed") &&
    purchaseDone
      ? "activated"
      : paymentReturn;
  useEffect(() => {
    if (paymentReturn !== "activating" || purchaseDone) return;
    const intervalId = window.setInterval(emitRefresh, ACTIVATION_POLL_MS);
    const timeoutId = window.setTimeout(
      () => setPaymentReturn("delayed"),
      ACTIVATION_TIMEOUT_MS,
    );
    return () => {
      window.clearInterval(intervalId);
      window.clearTimeout(timeoutId);
    };
  }, [paymentReturn, purchaseDone]);
  const isDuplicateTrial = stats?.isDuplicateTrial ?? user?.isDuplicateTrial ?? false;
  const totalTrialDays = isDuplicateTrial
    ? 0
    : Math.min(
        stats?.trialDays ?? user?.trialDays ?? TRIAL_LENGTH_DAYS,
        MAX_TRIAL_DAYS,
      );
  const daysLeft =
    createdAt && !isDuplicateTrial
      ? Math.min(computeTrialDaysLeft(createdAt, totalTrialDays), totalTrialDays)
      : 0;
  const trialProgress =
    totalTrialDays > 0 ? Math.round((daysLeft / totalTrialDays) * 100) : 0;

  const botStatusDisplay = getBotStatusDisplay(stats);
  const filters = buildFilterChips(stats?.activeFilters);
  const activeTab = (stats?.activeFilters as { activeTab?: string } | null)
    ?.activeTab;
  const recentActivity = [...(stats?.recentPurchases ?? [])].reverse();
  const elapsedTime = useElapsedTime(
    stats?.runningSince,
    botStatusDisplay.isLive,
  );

  const userProfit = stats?.profits ?? 0;
  const rawList = leaderboardData?.leaderboard;
  const defaultList: LeaderboardEntry[] = [
    { rank: 1, name: "GoldRush_23", profit: 6840000 },
    { rank: 2, name: "SnipeKing", profit: 5920000 },
    { rank: 3, name: "FUTGrinder", profit: 5180000 },
    { rank: 4, name: "MarketMaverick", profit: 3420000 },
    { rank: 5, name: "CoinFarmer99", profit: 2890000 },
    { rank: 6, name: "ShadowTrader", profit: 1950000 },
  ];

  const list = rawList && rawList.length > 0 ? rawList : defaultList;
  const userRank = leaderboardData?.userRank;
  const isUserInTopList = list.some((r) => r.isYou);
  const maxProfit = Math.max(
    1,
    ...list.map((r) => r.profit),
    userRank?.profit ?? userProfit,
  );

  const sessionStats = [
    {
      label: "Cards Bought",
      value: stats ? String(stats.purchases) : "—",
      icon: ShoppingBag,
    },
    { label: "Time Running", value: elapsedTime, icon: Clock },
    {
      label: "Profit Made",
      value: stats ? stats.profits.toLocaleString() : "—",
      icon: TrendingUp,
    },
    {
      label: "Days Left",
      value: licenseActive
        ? licenseDaysLeft === null
          ? "∞"
          : String(licenseDaysLeft)
        : licenseExpired
          ? "0"
          : String(daysLeft),
      icon: CalendarDays,
    },
  ];

  return (
    <div className="min-h-screen bg-dark text-white font-sans">
      <nav className="sticky top-0 z-50 bg-dark/85 backdrop-blur-xl border-b border-white/5 supports-[backdrop-filter]:bg-dark/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-3">
            <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
              <Image src="/logo-elite.png" alt="Elite FUT SNIPER Logo" width={40} height={40} priority className="w-10 h-10 object-contain transition-transform group-hover:scale-105" />
              <span className="text-lg font-black tracking-tighter uppercase text-white">
                Elite FUT <span className="text-primary">SNIPER</span>
              </span>
            </Link>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="h-9 flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full pl-1.5 pr-3">
                <span className="size-6 rounded-full bg-primary/20 grid place-items-center font-display text-xs text-primary shrink-0">
                  {displayName.charAt(0)}
                </span>
                <span className="font-mono text-[10px] text-primary font-bold uppercase tracking-widest hidden sm:inline">
                  {displayName}
                </span>
              </div>
              <SignOutButton />
            </div>
          </div>
        </div>
      </nav>

      <main className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="absolute top-0 right-0 -z-0 size-[420px] rounded-full bg-primary/[0.08] blur-[130px] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
          <div className="space-y-8">
            {/* Extension usage guide */}
            <a
              href="https://www.elitefutbot.com/install#video-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 rounded-2xl bg-primary/10 border border-primary/30 hover:border-primary/60 hover:bg-primary/15 transition-colors"
            >
              <span className="size-11 rounded-xl bg-primary/20 border border-primary/30 grid place-items-center shrink-0 group-hover:scale-110 transition-transform">
                <PlayCircle className="size-6 text-primary" />
              </span>
              <span className="flex-1 min-w-0">
                <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
                  New here? Start here
                </span>
                <span className="block text-sm font-bold text-white">
                  Watch the Full Video Walkthrough to set up the extension and start sniping
                </span>
              </span>
              <ArrowRight className="size-5 text-primary shrink-0 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Return from Stripe Checkout */}
            {paymentNotice && (
              <div
                role="status"
                className={`p-4 rounded-2xl border text-sm font-bold ${
                  paymentNotice === "activated"
                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                    : paymentNotice === "cancelled"
                      ? "bg-white/5 border-white/15 text-gray-300"
                      : "bg-primary/10 border-primary/30 text-primary"
                }`}
              >
                {paymentNotice === "activating" && (
                  <span className="flex items-center gap-3">
                    <span className="size-4 border-2 border-primary border-t-transparent rounded-full animate-spin shrink-0" />
                    {purchase === "renew"
                      ? "Turning on auto-renew…"
                      : purchase === "mobile"
                        ? "Payment received — activating Mobile App Access…"
                        : "Payment received — activating your Pro access…"}
                  </span>
                )}
                {paymentNotice === "activated" &&
                  (purchase === "renew"
                    ? `✅ Auto-renew is on — nothing charged today.${
                        licenseExpiresAt
                          ? ` Next charge ${formatEuro(renewalTotal)} on ${formatDate(licenseExpiresAt)}.`
                          : ""
                      }`
                    : purchase === "mobile"
                      ? `✅ Mobile App Access is active${
                          mobileAccessExpiresAt ? ` until ${formatDate(mobileAccessExpiresAt)}` : ""
                        }. Thank you!`
                      : `✅ Payment successful — Pro is active${
                          licenseExpiresAt ? ` until ${formatDate(licenseExpiresAt)}` : ""
                        } and renews yearly. Thank you!`)}
                {paymentNotice === "delayed" && (
                  <>
                    Stripe confirmed your checkout, but activation is taking
                    longer than usual. Refresh this page in a minute — if it
                    still isn&apos;t active, email{" "}
                    <a href="mailto:support@elitefutbot.com" className="underline">
                      support@elitefutbot.com
                    </a>
                    .
                  </>
                )}
                {paymentNotice === "cancelled" &&
                  "Checkout cancelled — you haven't been charged."}
              </div>
            )}

            {/* Plan banner */}
            <div className={`bg-card relative overflow-hidden p-6 md:p-8 rounded-2xl border ${isDuplicateTrial && !licenseActive ? "border-red-500/40 shadow-[0_4px_24px_rgba(239,68,68,0.15)]" : "border-primary/30 shadow-[0_4px_24px_rgba(0,0,0,0.2)]"}`}>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex-1">
                  <span className={`font-mono text-[10px] font-bold uppercase tracking-widest ${(isDuplicateTrial && !licenseActive) || licenseExpired ? "text-red-400" : "text-primary"}`}>
                    {licenseActive
                      ? "Elite FUT SNIPER Pro"
                      : licenseExpired
                        ? "Pro License Expired"
                        : isDuplicateTrial
                          ? "Previous Trial Detected"
                          : `${totalTrialDays}-Day Free Trial`}
                  </span>
                  <h1 className="font-display text-3xl tracking-tight mt-1 mb-3">
                    {licenseActive ? (
                      "You have full access"
                    ) : licenseExpired ? (
                      "Your Pro license has expired"
                    ) : isDuplicateTrial ? (
                      <>
                        <span className="bg-red-500 text-white px-[0.06em] rounded-[0.06em] box-decoration-clone">0 days</span> left
                        in your trial
                      </>
                    ) : (
                      <>
                        <span className="bg-primary text-dark px-[0.06em] rounded-[0.06em] box-decoration-clone">{daysLeft} days</span> left
                        in your trial
                      </>
                    )}
                  </h1>
                  {licenseActive ? (
                    <div className="mt-2 space-y-1 text-xs">
                      {licenseExpiresAt &&
                        (autoRenewOn ? (
                          <p className="text-gray-400">
                            Pro · renews on {formatDate(licenseExpiresAt)} for{" "}
                            {formatEuro(renewalTotal)}/year
                          </p>
                        ) : (
                          <p className={renewSoon ? "text-amber-400 font-bold" : "text-gray-400"}>
                            {renewSoon ? "⚠️ " : ""}
                            Pro until {formatDate(licenseExpiresAt)} ·{" "}
                            {licenseDaysLeft} {licenseDaysLeft === 1 ? "day" : "days"} left
                            {canTurnOnAutoRenew &&
                              (renewSoon
                                ? " — turn on auto-renew to keep your access."
                                : " · auto-renew is off")}
                          </p>
                        ))}
                      {paymentFailed && (
                        <p className="text-red-400 font-bold">
                          Your last renewal payment failed — update your card
                          under Manage subscription to keep Pro.
                        </p>
                      )}
                      {hasMobileAccess ? (
                        <p className="text-emerald-300">
                          📱 Mobile App Access
                          {mobileAccessExpiresAt
                            ? ` · until ${formatDate(mobileAccessExpiresAt)}`
                            : ""}
                        </p>
                      ) : (
                        mobileAddonAvailable && (
                          <p className="text-gray-500">📱 Mobile App Access · not active</p>
                        )
                      )}
                    </div>
                  ) : licenseExpired ? (
                    <p className="text-xs text-red-400 mt-2">
                      Your license ended on {formatDate(licenseExpiresAt!)}. Renew for {PRO_PRICE_LABEL} — renews yearly, cancel anytime.
                    </p>
                  ) : isDuplicateTrial ? (
                    <p className="text-xs text-red-400 mt-2">
                      We detected that a free trial was already used on this device. Upgrade to Pro below to unlock full bot access.
                    </p>
                  ) : !isPaid ? (
                    <div className="w-full max-w-sm h-2 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary transition-all"
                        style={{ width: `${trialProgress}%` }}
                      />
                    </div>
                  ) : null}
                </div>
                <div className="shrink-0 w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <DownloadExtensionButton className="w-full sm:w-auto justify-center" />
                  {!licenseActive && (
                    <button
                      type="button"
                      onClick={beginCheckout}
                      disabled={billingPending !== null}
                      className={`w-full sm:w-auto px-6 py-3 rounded-full bg-primary text-dark font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_0_rgba(204,255,0,0)] hover:shadow-[0_0_35px_rgba(204,255,0,0.35)] disabled:opacity-60 disabled:hover:scale-100 ${
                        highlightSubscribe
                          ? "ring-2 ring-primary ring-offset-2 ring-offset-dark animate-pulse hover:animate-none"
                          : ""
                      }`}
                    >
                      {billingPending === "checkout"
                        ? "Opening checkout…"
                        : isPaid
                          ? `Renew · ${PRO_PRICE_LABEL}`
                          : `Subscribe · ${PRO_PRICE_LABEL}`}
                    </button>
                  )}
                  {canTurnOnAutoRenew && (
                    <button
                      type="button"
                      onClick={beginCheckout}
                      disabled={billingPending !== null}
                      title={`${formatEuro(PRO_PRICE_EUR)}/year from ${formatDate(licenseExpiresAt!)}. Cancel anytime.`}
                      className={`w-full sm:w-auto px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest transition-transform disabled:opacity-60 ${
                        renewSoon
                          ? "bg-primary text-dark hover:scale-105 hover:shadow-[0_0_35px_rgba(204,255,0,0.35)] disabled:hover:scale-100"
                          : "border border-primary/40 text-primary hover:bg-primary/10"
                      }`}
                    >
                      {billingPending === "checkout"
                        ? "Opening…"
                        : `Turn on auto-renew · ${
                            freeAutoRenew ? "€0" : formatEuro(PRO_PRICE_EUR)
                          } today`}
                    </button>
                  )}
                </div>
              </div>
              {(checkoutError ||
                !licenseActive ||
                canAddMobile ||
                subscriptionStatus) && (
                <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3 text-xs">
                  {checkoutError && (
                    <p className="text-red-400 sm:mr-auto">{checkoutError}</p>
                  )}
                  {!licenseActive && !checkoutError && (
                    <span className="text-gray-500 sm:mr-auto">
                      Renews yearly · cancel anytime
                    </span>
                  )}
                  {!licenseActive && mobileAddonAvailable && (
                    <label className="flex items-center gap-2 text-gray-300 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={withMobile}
                        onChange={(e) => setWithMobile(e.target.checked)}
                        className="size-4 accent-[#CCFF00]"
                      />
                      Add Mobile App Access · +{MOBILE_PRICE_LABEL}
                    </label>
                  )}
                  {canAddMobile && (
                    <button
                      type="button"
                      onClick={beginAddMobile}
                      disabled={billingPending !== null}
                      title={`${MOBILE_PRICE_LABEL}, prorated to ${formatDate(licenseExpiresAt!)}. Works while Pro is active.`}
                      className="px-4 py-2 rounded-full border border-primary/40 text-primary font-bold hover:bg-primary/10 disabled:opacity-60"
                    >
                      {billingPending === "mobile"
                        ? "Adding…"
                        : `📱 Add Mobile App Access · ≈${formatEuro(mobileEstimate!)} today`}
                    </button>
                  )}
                  {subscriptionStatus && (
                    <button
                      type="button"
                      onClick={beginManage}
                      disabled={billingPending !== null}
                      className="text-gray-400 hover:text-white underline underline-offset-2 disabled:opacity-60"
                    >
                      {billingPending === "portal" ? "Opening…" : "Manage subscription"}
                    </button>
                  )}
                  {!licenseActive && (
                    <button
                      type="button"
                      onClick={() => setUpgradeModalOpen(true)}
                      className="text-gray-400 hover:text-white underline underline-offset-2"
                    >
                      Have a license key?
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Installation & Community Support Section — Visible to all users */}
            <div className="relative overflow-hidden p-5 sm:p-6 rounded-2xl bg-card border border-white/10 hover:border-primary/30 transition-colors">
              <div className="absolute top-0 right-0 -z-0 size-[260px] rounded-full bg-primary/[0.04] blur-[80px] pointer-events-none" />
              <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
                <div className="flex items-start sm:items-center gap-4">
                  <div className="size-11 sm:size-12 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center shrink-0">
                    <Headphones className="size-5 sm:size-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-primary">
                        Support &amp; Community
                      </span>
                      <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        24/7 Available
                      </span>
                    </div>
                    <h2 className="text-base sm:text-lg font-bold text-white mt-1">
                      Need help installing or configuring your bot?
                    </h2>
                    <p className="text-xs text-gray-400 mt-0.5 max-w-xl">
                      Get direct setup guidance, troubleshooting, and daily sniping filters from our team and Discord community.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full lg:w-auto shrink-0">
                  <a
                    href="https://discord.gg/Rkb9nF6WG6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(88,101,242,0.25)] hover:shadow-[0_0_25px_rgba(88,101,242,0.4)]"
                  >
                    <MessageSquare className="size-4 shrink-0" />
                    <span>Join Discord Server</span>
                  </a>
                  <a
                    href="mailto:support@elitefutbot.com"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    <Mail className="size-4 text-gray-300 shrink-0" />
                    <span>Email Support</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Session stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sessionStats.map((s) => (
                <div
                  key={s.label}
                  className="group p-5 rounded-2xl bg-card border border-white/10 hover:border-primary/40 transition-colors"
                >
                  <div className="size-9 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <s.icon className="size-4 text-primary" />
                  </div>
                  <div className="font-display text-3xl leading-none mb-2">
                    {s.value}
                  </div>
                  <div className="text-[11px] text-primary font-bold uppercase tracking-widest">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <AffiliateLinkCard
              referralCode={
                stats?.referralCode ??
                (process.env.NODE_ENV === "development"
                  ? "ELITE-VIP-DEV"
                  : undefined)
              }
              referralConversions={
                stats?.referralConversions ??
                (process.env.NODE_ENV === "development" ? 3 : undefined)
              }
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Bot status */}
              <div className="lg:col-span-4 p-6 rounded-2xl bg-card border border-white/10">
                <div className="flex items-center gap-2 mb-5">
                  <Activity className="size-4 text-primary" />
                  <h2 className="font-display text-xl tracking-tight">
                    Bot Status
                  </h2>
                </div>
                <div
                  className={`flex items-center gap-2 mb-5 px-4 py-3 rounded-xl border ${
                    botStatusDisplay.isLive
                      ? "bg-primary/10 border-primary/20"
                      : "bg-surface border-white/10"
                  }`}
                >
                  <span className="relative flex h-2 w-2">
                    {botStatusDisplay.isLive && (
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    )}
                    <span
                      className={`relative inline-flex rounded-full h-2 w-2 ${
                        botStatusDisplay.isLive ? "bg-primary" : "bg-gray-500"
                      }`}
                    />
                  </span>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest">
                    {botStatusDisplay.label}
                  </span>
                </div>
                <div className="flex gap-2">
                  {(["safe", "caution", "risky"] as const).map((tab) => (
                    <span
                      key={tab}
                      className={
                        activeTab === tab
                          ? "px-3 py-1.5 rounded-full bg-primary text-dark font-mono text-[10px] font-bold uppercase tracking-widest"
                          : "px-3 py-1.5 rounded-full border border-white/10 text-gray-400 font-mono text-[10px] uppercase tracking-widest"
                      }
                    >
                      {tab}
                    </span>
                  ))}
                </div>
              </div>

              {/* Filter configuration */}
              <div className="bg-card lg:col-span-8 p-6 rounded-2xl border border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
                <div className="flex items-center gap-2 mb-5">
                  <SlidersHorizontal className="size-4 text-primary" />
                  <h2 className="font-display text-xl tracking-tight">
                    Active Filters
                  </h2>
                </div>
                {filters.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                    {filters.map((f) => (
                      <div
                        key={f.label}
                        className="p-3 rounded-xl bg-surface border border-white/10"
                      >
                        <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">
                          {f.label}
                        </div>
                        <div className="font-mono text-sm font-bold text-primary">
                          {f.value}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-400">
                    No filters yet — start the bot to see your active search
                    criteria here.
                  </p>
                )}
              </div>
            </div>

            {/* Recent activity */}
            <div className="p-6 rounded-2xl bg-card border border-white/10">
              <h2 className="font-display text-xl tracking-tight mb-5">
                Recent Snipes
              </h2>
              {recentActivity.length > 0 ? (
                <div className="divide-y divide-white/10">
                  {recentActivity.map((a) => (
                    <div
                      key={`${a.at}-${a.tradeId ?? a.name}`}
                      className="flex flex-wrap items-center justify-between gap-3 py-4 hover:bg-surface -mx-3 px-3 rounded-lg transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="size-8 rounded-full bg-primary/10 border border-primary/20 grid place-items-center font-display text-xs text-primary shrink-0">
                          {a.name.charAt(0)}
                        </span>
                        <span className="font-bold text-sm">{a.name}</span>
                      </div>
                      <span className="text-gray-400 font-mono text-xs">
                        Bought:{" "}
                        <strong className="text-white">
                          {a.price.toLocaleString()}
                        </strong>
                      </span>
                      <span className="text-gray-400 font-mono text-[10px] uppercase tracking-widest">
                        {formatTimeAgo(a.at)}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-400">
                  No purchases yet — run the bot to see recent snipes here.
                </p>
              )}
            </div>

            {/* Extension connection status */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 rounded-2xl bg-card border border-white/10">
              <div className="flex items-center gap-3">
                <div className="size-9 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center">
                  <Puzzle className="size-4 text-primary" />
                </div>
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-widest block">
                    Elite FUT SNIPER Extension
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] text-gray-400 mt-0.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
                    </span>
                    Connected
                  </span>
                </div>
              </div>
              <Link
                href="/install"
                className="group flex items-center gap-1 font-mono text-xs text-primary font-bold uppercase tracking-widest hover:text-primary/80 transition-colors"
              >
                Reinstall / Update
                <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Leaderboard */}
          <aside className="lg:sticky lg:top-24 p-6 rounded-2xl bg-card border border-white/10">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <Trophy className="size-4 text-primary" />
                <h2 className="font-display text-xl tracking-tight">
                  Top Snipers
                </h2>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 font-mono text-[9px] text-primary font-bold uppercase tracking-widest">
                This Week
              </span>
            </div>

            <div className="space-y-2">
              {list.map((row) => {
                const barWidth = Math.max(
                  10,
                  Math.min(100, Math.round((row.profit / maxProfit) * 100)),
                );
                const isTopThree = row.rank <= 3;

                return (
                  <div
                    key={`${row.rank}-${row.name}`}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-colors ${
                      row.isYou
                        ? "bg-primary/10 border-primary/30 shadow-[0_0_15px_rgba(209,250,75,0.1)]"
                        : isTopThree
                          ? tierStyles[row.rank]
                          : "border-transparent hover:bg-surface"
                    }`}
                  >
                    <span className="w-6 shrink-0 text-center font-display text-xl leading-none">
                      {medals[row.rank] ?? (
                        <span className="text-sm text-gray-400 font-mono">
                          {row.rank}
                        </span>
                      )}
                    </span>
                    <span
                      className={`size-9 rounded-full bg-primary/10 border border-primary/20 grid place-items-center font-display text-xs text-primary shrink-0 ${
                        tierRing[row.rank] ?? ""
                      }`}
                    >
                      {row.name.charAt(0)}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-sm font-bold truncate">
                          {row.isYou ? "You" : row.name}
                        </span>
                        <span className="font-mono text-[11px] text-primary font-bold shrink-0">
                          {row.profit.toLocaleString()}
                        </span>
                      </div>
                      <div className="h-1 rounded-full bg-white/10 overflow-hidden mt-1.5">
                        <div
                          className="h-full rounded-full bg-primary transition-all duration-500"
                          style={{ width: `${barWidth}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}

              {!isUserInTopList && userRank ? (
                <>
                  <div className="my-2 border-t border-white/5 pt-2 flex items-center justify-between text-[10px] font-mono text-gray-400 uppercase tracking-widest px-1">
                    <span>Your Standing</span>
                    <span>Rank #{userRank.rank}</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl border bg-primary/10 border-primary/30 shadow-[0_0_15px_rgba(209,250,75,0.1)]">
                    <span className="w-6 shrink-0 text-center font-display text-sm text-primary font-bold font-mono">
                      #{userRank.rank}
                    </span>
                    <span className="size-9 rounded-full bg-primary/20 border border-primary/40 grid place-items-center font-display text-xs text-primary shrink-0">
                      Y
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-sm font-bold text-primary">You</span>
                        <span className="font-mono text-[11px] text-primary font-bold shrink-0">
                          {(userRank.profit || userProfit).toLocaleString()}
                        </span>
                      </div>
                      <div className="h-1 rounded-full bg-white/10 overflow-hidden mt-1.5">
                        <div
                          className="h-full rounded-full bg-primary transition-all duration-500"
                          style={{
                            width: `${Math.max(10, Math.min(100, Math.round(((userRank.profit || userProfit) / maxProfit) * 100)))}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
            <p className="font-mono text-[10px] text-gray-400 uppercase tracking-widest mt-4 text-center">
              {leaderboardData?.weeklyResetText ?? "Resets weekly"}
            </p>
          </aside>
        </div>
      </main>

      <LicenseKeyModal
        open={upgradeModalOpen}
        onOpenChange={setUpgradeModalOpen}
      />
    </div>
  );
}
