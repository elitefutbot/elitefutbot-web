"use client";

import { useEffect, useState } from "react";
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
import { computeTrialDaysLeft, TRIAL_LENGTH_DAYS } from "@/lib/trial";

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

  // Best-effort: request notification permission and register this
  // browser's FCM token so bot-status/purchase updates land as an
  // immediate refresh signal instead of waiting for the 60s poll.
  useEffect(() => {
    void setUpPushNotifications();
  }, []);

  const displayName = user?.name ?? "there";
  const createdAt = stats?.createdAt ?? user?.createdAt;
  const isPaid = stats?.isPaid ?? user?.isPaid ?? false;
  const isDuplicateTrial = stats?.isDuplicateTrial ?? user?.isDuplicateTrial ?? false;
  const totalTrialDays = isDuplicateTrial
    ? 0
    : Math.min(
        stats?.trialDays ?? user?.trialDays ?? TRIAL_LENGTH_DAYS,
        TRIAL_LENGTH_DAYS,
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
      value: isPaid ? "—" : String(daysLeft),
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

            {/* Trial banner */}
            <div className={`bg-card relative overflow-hidden p-6 md:p-8 rounded-2xl border ${isDuplicateTrial ? "border-red-500/40 shadow-[0_4px_24px_rgba(239,68,68,0.15)]" : "border-primary/30 shadow-[0_4px_24px_rgba(0,0,0,0.2)]"}`}>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex-1">
                  <span className={`font-mono text-[10px] font-bold uppercase tracking-widest ${isDuplicateTrial ? "text-red-400" : "text-primary"}`}>
                    {isPaid
                      ? "Elite FUT SNIPER Pro"
                      : isDuplicateTrial
                        ? "Previous Trial Detected"
                        : `${totalTrialDays}-Day Free Trial`}
                  </span>
                  <h1 className="font-display text-3xl tracking-tight mt-1 mb-3">
                    {isPaid ? (
                      "You have full access"
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
                  {isDuplicateTrial ? (
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
                  {!isPaid && (
                    <button
                      type="button"
                      onClick={() => setUpgradeModalOpen(true)}
                      className="w-full sm:w-auto px-6 py-3 rounded-full bg-primary text-dark font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_0_rgba(204,255,0,0)] hover:shadow-[0_0_35px_rgba(204,255,0,0.35)]"
                    >
                      Upgrade Now
                    </button>
                  )}
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
              referralCode={stats?.referralCode}
              referralConversions={stats?.referralConversions}
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
