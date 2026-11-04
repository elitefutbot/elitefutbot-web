"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { forgotPassword } from "@/lib/auth/authClient";

export default function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("email") ?? "");

    setLoading(true);
    const result = await forgotPassword(email);
    setLoading(false);

    if (!result.ok) {
      setError(result.message);
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-dark text-white font-sans flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <Link href="/" className="flex items-center justify-center gap-2.5 mb-10">
          <Image src="/logo-elite.png" alt="Elite FUT SNIPER Logo" width={32} height={32} priority className="w-8 h-8 object-contain" />
          <span className="text-lg font-black tracking-tighter uppercase text-white">
            Elite FUT <span className="text-primary">SNIPER</span>
          </span>
        </Link>

        <div className="glass-card p-8">
          <h1 className="font-display text-3xl tracking-tight mb-1">
            Forgot Password
          </h1>
          <p className="text-sm text-gray-400 mb-6">
            Enter your account email and we&apos;ll send you a link to reset
            your password.
          </p>

          {submitted ? (
            <p className="text-sm text-white">
              If an account exists for that email, check your inbox for a reset
              link. It expires in 1 hour.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
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
                {loading ? "Sending…" : "Send Reset Link"}
              </button>
            </form>
          )}

          <p className="text-xs text-gray-400 text-center mt-6">
            Remembered your password?{" "}
            <Link
              href="/login"
              className="text-primary font-bold hover:text-primary/80 transition-colors"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
