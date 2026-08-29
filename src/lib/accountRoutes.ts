// Routes that render their own full-bleed chrome (no marketing nav/footer).
// Shared by SiteNav/SiteFooter so the exclusion list can't drift between them.
// /referral and /install intentionally keep the marketing nav/footer — only
// the bare auth forms and the dashboard go fully chrome-free.
const ACCOUNT_ROUTE_PREFIXES = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
  "/dashboard",
] as const;

export function isAccountRoute(pathname: string | null): boolean {
  if (!pathname) return false;
  return ACCOUNT_ROUTE_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}
