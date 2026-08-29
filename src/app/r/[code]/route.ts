import { NextRequest, NextResponse } from "next/server";
import {
  REFERRAL_CLICKED_AT_COOKIE_NAME,
  REFERRAL_COOKIE_NAME,
} from "@/lib/referral/cookie";

const REFERRAL_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 14;

// Server-side only — this route runs on the server, so it calls the backend
// directly rather than through the /api/* rewrite proxy (which exists to
// keep the backend URL out of the public client bundle).
const BACKEND_API_URL =
  process.env.BACKEND_API_URL ?? "http://localhost:5000";

async function isValidReferralCode(code: string): Promise<boolean> {
  try {
    const res = await fetch(
      `${BACKEND_API_URL}/api/auth/referral/${encodeURIComponent(code)}`,
    );
    if (!res.ok) return false;
    const data = (await res.json()) as { valid: boolean };
    return data.valid === true;
  } catch {
    return false;
  }
}


export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ code: string }> },
) {
  const { code } = await params;
  const response = NextResponse.redirect(new URL("/", request.url));

  if (code && (await isValidReferralCode(code))) {
    const cookieOptions = {
      maxAge: REFERRAL_COOKIE_MAX_AGE_SECONDS,
      path: "/",
      sameSite: "lax" as const,
    };
    response.cookies.set(REFERRAL_COOKIE_NAME, code, cookieOptions);
    response.cookies.set(
      REFERRAL_CLICKED_AT_COOKIE_NAME,
      new Date().toISOString(),
      cookieOptions,
    );
  }

  return response;
}
