export const REFERRAL_COOKIE_NAME = "EliteFutBot_ref";
export const REFERRAL_CLICKED_AT_COOKIE_NAME = "EliteFutBot_ref_at";

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;

  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`));

  return match ? decodeURIComponent(match.split("=")[1]) : null;
}

export function getReferralCodeFromCookie(): string {
  return readCookie(REFERRAL_COOKIE_NAME) ?? "";
}

export function getReferralClickedAtFromCookie(): string | null {
  return readCookie(REFERRAL_CLICKED_AT_COOKIE_NAME);
}
