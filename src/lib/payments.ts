import { authFetch } from "@/lib/auth/authClient";
import {
  PRO_PRICE_EUR,
  MOBILE_PRICE_EUR,
  PRO_PRICE_LABEL,
  MOBILE_PRICE_LABEL,
} from "@/lib/pricing";

// Prices live in src/lib/pricing.ts; re-exported so existing imports keep working.
export { PRO_PRICE_EUR, MOBILE_PRICE_EUR, PRO_PRICE_LABEL, MOBILE_PRICE_LABEL };

// Subscription states in which Stripe still bills (past_due: retrying the
// card). Mirrors LIVE_STATUSES in the backend's paymentController.
const LIVE_SUBSCRIPTION_STATUSES = new Set(["active", "trialing", "past_due"]);

export function isSubscriptionLive(status: string | null | undefined): boolean {
  return Boolean(status && LIVE_SUBSCRIPTION_STATUSES.has(status));
}

export function formatEuro(amount: number): string {
  return `€${amount.toFixed(2)}`;
}

// What Stripe will charge today to add Mobile App Access: the yearly price
// prorated to the Pro renewal/expiry date. An estimate — Stripe's own
// proration is to the second.
export function mobileProrationEstimate(paidUntil: string | null): number | null {
  if (!paidUntil) return null;
  const days = (new Date(paidUntil).getTime() - Date.now()) / (24 * 60 * 60 * 1000);
  if (days <= 0) return null;
  return Math.max(0.5, Math.round((MOBILE_PRICE_EUR * Math.min(days, 365)) / 365 * 100) / 100);
}

// Buy buttons outside the dashboard link to `/dashboard?buy=1`. A logged-out
// visitor gets bounced through /login or /register first (both always land
// on /dashboard), so AuthGuard stashes the intent here and the dashboard
// picks it up after sign-in.
//
// Only a signed-in click goes straight to Stripe. After the sign-in detour
// the dashboard just points at Subscribe: a new account may well want its
// free trial first, and landing on a payment page right after registering
// reads as a forced paywall.
export const BUY_QUERY_PARAM = "buy";

export type BuyIntent = "direct" | "after-sign-in";
const BUY_INTENT_KEY = "EliteFutBot_buy_intent";

export function rememberBuyIntent(): void {
  try {
    window.sessionStorage.setItem(BUY_INTENT_KEY, "1");
  } catch {
    // Storage unavailable (private mode etc.) — user can still click Buy.
  }
}

// consumeBuyIntent()'s answer without clearing anything, so it's safe to
// call while rendering.
export function peekBuyIntent(): BuyIntent | null {
  if (new URLSearchParams(window.location.search).get(BUY_QUERY_PARAM) === "1") {
    return "direct";
  }
  try {
    if (window.sessionStorage.getItem(BUY_INTENT_KEY) === "1") return "after-sign-in";
  } catch {
    // ignore
  }
  return null;
}

// Whether the current visit asked to buy: "direct" via ?buy=1 while signed
// in, "after-sign-in" via an intent saved before a login/register detour.
// Clears both so a reload doesn't repeat it.
export function consumeBuyIntent(): BuyIntent | null {
  let fromStorage = false;
  try {
    fromStorage = window.sessionStorage.getItem(BUY_INTENT_KEY) === "1";
    window.sessionStorage.removeItem(BUY_INTENT_KEY);
  } catch {
    // ignore
  }
  const url = new URL(window.location.href);
  const fromQuery = url.searchParams.get(BUY_QUERY_PARAM) === "1";
  if (fromQuery) {
    url.searchParams.delete(BUY_QUERY_PARAM);
    window.history.replaceState(null, "", url.pathname + url.search + url.hash);
  }
  if (fromQuery) return "direct";
  return fromStorage ? "after-sign-in" : null;
}

// What a purchase was, carried back from Stripe as ?purchase=… (see the
// backend's sessionParams) so the dashboard knows what to wait for.
export type Purchase = "pro" | "renew" | "mobile";

export type CheckoutResult =
  // Stripe Checkout is opening; the page is unloading.
  | { ok: true; redirected: true }
  // Applied directly to the existing subscription, no checkout needed.
  | { ok: true; redirected: false }
  | { ok: false; message: string };

async function postPayment(
  path: string,
  body?: Record<string, unknown>,
): Promise<CheckoutResult> {
  try {
    const res = await authFetch(path, {
      method: "POST",
      ...(body && {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }),
    });
    const data = await res.json().catch(() => null);
    if (!res.ok) {
      return {
        ok: false,
        message: data?.message ?? "Something went wrong. Please try again.",
      };
    }
    if (data?.url) {
      window.location.assign(data.url);
      return { ok: true, redirected: true };
    }
    return { ok: true, redirected: false };
  } catch {
    return {
      ok: false,
      message: "Couldn't reach the server. Check your connection and try again.",
    };
  }
}

// Subscribe to Pro (optionally with Mobile), or — for an account that
// already has Pro — turn on auto-renew from its expiry date. The backend
// picks the right one; a Stripe Checkout URL is followed if it returns one.
export function startCheckout(
  options: { mobile?: boolean } = {},
): Promise<CheckoutResult> {
  return postPayment(
    "/api/payments/checkout",
    options.mobile ? { mobile: true } : undefined,
  );
}

// Add Mobile App Access on top of active Pro.
export function addMobileAccess(): Promise<CheckoutResult> {
  return postPayment("/api/payments/mobile");
}

// Stripe Customer Portal: card, invoices, cancellation.
export function openBillingPortal(): Promise<CheckoutResult> {
  return postPayment("/api/payments/portal");
}
