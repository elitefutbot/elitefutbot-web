"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { register } from "@/lib/auth/authClient";
import {
  getReferralClickedAtFromCookie,
  getReferralCodeFromCookie,
} from "@/lib/referral/cookie";

const LICENSE_KEY_REGEX = /^[A-Z0-9]{8}(-[A-Z0-9]{8}){3}$/;

function formatLicenseKeyInput(raw: string): string {
  const chars = raw
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "")
    .slice(0, 32);
  return chars.match(/.{1,8}/g)?.join("-") ?? chars;
}

export default function RegisterPage() {
  const router = useRouter();
  const [licenseKey, setLicenseKey] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [referralCookie, setReferralCookie] = useState<{
    code: string;
    clickedAt: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const code = getReferralCodeFromCookie();
    if (!code) return;
    setReferralCode(code);
    const clickedAt = getReferralClickedAtFromCookie();
    if (clickedAt) setReferralCookie({ code, clickedAt });
  }, []);

  const handleLicenseKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLicenseKey(formatLicenseKeyInput(e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);
    const firstName = String(formData.get("firstName") ?? "").trim();
    const lastName = String(formData.get("lastName") ?? "").trim();
    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");

    if (licenseKey && !LICENSE_KEY_REGEX.test(licenseKey)) {
      setError(
        "License key must be in the format XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX.",
      );
      return;
    }

    const trimmedReferralCode = referralCode.trim();
    const referralClickedAt =
      referralCookie && referralCookie.code === trimmedReferralCode
        ? referralCookie.clickedAt
        : undefined;

    setLoading(true);
    const result = await register({
      firstName,
      lastName,
      email,
      password,
      licenseKey: licenseKey || undefined,
      referralCode: trimmedReferralCode || undefined,
      referralClickedAt,
    });
    setLoading(false);

    if (!result.ok) {
      setError(result.message);
      return;
    }

    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen bg-dark text-white font-sans flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm">
        <Link href="/" className="flex items-center justify-center gap-2.5 mb-10">
          <Image src="/logo-elite.png" alt="Elite FUT SNIPER Logo" width={32} height={32} priority className="w-8 h-8 object-contain" />
          <span className="text-lg font-black tracking-tighter uppercase text-white">
            Elite FUT <span className="text-primary">SNIPER</span>
          </span>
        </Link>

        <div className="glass-card p-8">
          <h1 className="font-display text-3xl tracking-tight mb-1">
            Create Account
          </h1>
          <p className="text-sm text-gray-400 mb-6">
            Create your account to start a 7-day free trial. Have a license
            key already? Add it below to activate Elite FUT SNIPER.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block font-mono text-[10px] text-primary/80 font-bold uppercase tracking-widest mb-2">
                  First Name
                </label>
                <input
                  name="firstName"
                  type="text"
                  required
                  placeholder="Lionel"
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-dark text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block font-mono text-[10px] text-primary/80 font-bold uppercase tracking-widest mb-2">
                  Last Name
                </label>
                <input
                  name="lastName"
                  type="text"
                  required
                  placeholder="Messi"
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-dark text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono text-[10px] text-primary/80 font-bold uppercase tracking-widest mb-2">
                Email
              </label>
              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-dark text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="block font-mono text-[10px] text-primary/80 font-bold uppercase tracking-widest mb-2">
                Password
              </label>
              <input
                name="password"
                type="password"
                required
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-dark text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="block font-mono text-[10px] text-primary/80 font-bold uppercase tracking-widest mb-2">
                License Key <span className="normal-case text-gray-500 font-normal">(optional)</span>
              </label>
              <input
                name="licenseKey"
                type="text"
                value={licenseKey}
                onChange={handleLicenseKeyChange}
                placeholder="XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX"
                maxLength={35}
                autoCapitalize="characters"
                autoCorrect="off"
                spellCheck={false}
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-dark text-white text-sm font-mono placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
              />
              <p className="text-xs text-gray-400 mt-2">
                Leave this blank to start a 7-day free trial instead.
              </p>
            </div>

            <div>
              <label className="block font-mono text-[10px] text-primary/80 font-bold uppercase tracking-widest mb-2">
                Referral ID <span className="normal-case text-gray-500 font-normal">(optional)</span>
              </label>
              <input
                name="referralCode"
                type="text"
                value={referralCode}
                onChange={(e) => setReferralCode(e.target.value)}
                placeholder="a30e16"
                className="w-full px-4 py-3 rounded-xl border border-white/10 bg-dark text-white text-sm font-mono placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            {error ? (
              <p role="alert" className="text-xs text-red-500">
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-full bg-primary text-dark font-black text-sm uppercase tracking-widest hover:scale-[1.02] transition-transform disabled:opacity-60 disabled:hover:scale-100"
            >
              {loading ? "Creating account…" : "Create Account"}
            </button>
          </form>

          <p className="text-xs text-gray-400 text-center mt-6">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary font-bold hover:text-primary/80 transition-colors"
            >
              Log in
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
