import { authFetch } from "@/lib/auth/authClient";

export const PRO_PRICE_LABEL = "€19.90";

// Buy buttons outside the dashboard link to `/dashboard?buy=1`. A logged-out
// visitor gets bounced through /login or /register first (both always land
// on /dashboard), so AuthGuard stashes the intent here and the dashboard
// picks it up after sign-in.
export const BUY_QUERY_PARAM = "buy";
const BUY_INTENT_KEY = "EliteFutBot_buy_intent";

export function rememberBuyIntent(): void {
  try {
    window.sessionStorage.setItem(BUY_INTENT_KEY, "1");
  } catch {
    // Storage unavailable (private mode etc.) — user can still click Buy.
  }
}

// True when the current visit asked to buy — via ?buy=1 or an intent saved
// before a login/register detour. Clears both so a reload doesn't reopen
// checkout.
export function consumeBuyIntent(): boolean {
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
  return fromStorage || fromQuery;
}

export type CheckoutResult = { ok: true } | { ok: false; message: string };

// Asks the backend for a Stripe Checkout URL tied to the signed-in account
// and navigates there. On success the page unloads, so callers only need to
// handle the error case.
export async function startCheckout(): Promise<CheckoutResult> {
  try {
    const res = await authFetch("/api/payments/checkout", { method: "POST" });
    const data = await res.json().catch(() => null);
    if (!res.ok || !data?.url) {
      return {
        ok: false,
        message: data?.message ?? "Could not start checkout. Please try again.",
      };
    }
    window.location.assign(data.url);
    return { ok: true };
  } catch {
    return {
      ok: false,
      message: "Couldn't reach the server. Check your connection and try again.",
    };
  }
}
