"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { resetPassword } from "@/lib/auth/authClient";

function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token") ?? "";

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);
    const password = String(formData.get("password") ?? "");
    const confirmPassword = String(formData.get("confirmPassword") ?? "");

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords don't match.");
      return;
    }

    setLoading(true);
    const result = await resetPassword(token, password);
    setLoading(false);

    if (!result.ok) {
      setError(result.message);
      return;
    }

    setDone(true);
  };

  return (
    <div className="glass-card p-8">
      <h1 className="font-display text-3xl tracking-tight mb-1">
        Reset Password
      </h1>
      <p className="text-sm text-gray-400 mb-6">
        Choose a new password for your account.
      </p>

      {!token ? (
        <p role="alert" className="text-xs text-red-500">
          This reset link is missing its token. Request a new one from the{" "}
          <Link href="/forgot-password" className="underline">
            forgot password
          </Link>{" "}
          page.
        </p>
      ) : done ? (
        <div className="space-y-4">
          <p className="text-sm text-white">
            Your password has been reset. You can now log in.
          </p>
          <button
            type="button"
            onClick={() => router.push("/login")}
            className="w-full py-3.5 rounded-full bg-primary text-dark font-black text-sm uppercase tracking-widest hover:scale-[1.02] transition-transform"
          >
            Go to Log In
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-mono text-[10px] text-primary/80 font-bold uppercase tracking-widest mb-2">
              New Password
            </label>
            <input
              name="password"
              type="password"
              required
              minLength={8}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-white/10 bg-dark text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="block font-mono text-[10px] text-primary/80 font-bold uppercase tracking-widest mb-2">
              Confirm Password
            </label>
            <input
              name="confirmPassword"
              type="password"
              required
              minLength={8}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-white/10 bg-dark text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
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
            {loading ? "Resetting…" : "Reset Password"}
          </button>
        </form>
      )}
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen bg-dark text-white font-sans flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <Link href="/" className="flex items-center justify-center gap-2.5 mb-10">
          <Image src="/logo-elite.png" alt="Elite FUT SNIPER Logo" width={32} height={32} priority className="w-8 h-8 object-contain" />
          <span className="text-lg font-black tracking-tighter uppercase text-white">
            Elite FUT <span className="text-primary">SNIPER</span>
          </span>
        </Link>

        <Suspense fallback={null}>
          <ResetPasswordForm />
        </Suspense>
      </div>
    </div>
  );
}
