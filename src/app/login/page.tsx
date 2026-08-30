"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { login } from "@/lib/auth/authClient";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);
    const email = String(formData.get("email") ?? "");
    const password = String(formData.get("password") ?? "");

    setLoading(true);
    const result = await login(email, password);
    setLoading(false);

    if (!result.ok) {
      setError(result.message);
      return;
    }

    router.push("/dashboard");
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
          <h1 className="font-display text-3xl tracking-tight mb-1">Log In</h1>
          <p className="text-sm text-gray-400 mb-6">
            Access your dashboard and trial status.
          </p>

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
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block font-mono text-[10px] text-primary/80 font-bold uppercase tracking-widest">
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="font-mono text-[10px] text-gray-400 hover:text-primary transition-colors"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                name="password"
                type="password"
                required
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
              {loading ? "Logging in…" : "Log In"}
            </button>
          </form>

          <div className="mt-6 pt-5 border-t border-white/10 text-center">
            <div className="flex flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-sm text-gray-400">
              <span>New here?</span>
              <Link
                href="/register"
                className="inline-flex items-center gap-1 text-primary font-bold hover:text-primary/80 transition-colors"
              >
                Create an account
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <p className="text-xs text-gray-500 mt-1.5">
              Free 7-day trial, no license key required.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
