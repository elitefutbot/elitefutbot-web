"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle2, Share2, UserPlus } from "lucide-react";
import { AffiliateLinkCard } from "@/components/AffiliateLinkCard";
import { getAccessToken } from "@/lib/auth/tokenStorage";
import { useAccountStats } from "@/lib/auth/useAccountStats";

const steps = [
  {
    icon: Share2,
    title: "Share your link",
    body: "Copy your personal referral link and share it with friends, Discord groups, and fellow snipers.",
  },
  {
    icon: UserPlus,
    title: "They sign up",
    body: "When someone creates an account through your link, they are permanently attached to your profile.",
  },
  {
    icon: CheckCircle2,
    title: "Earn 50% Profit Share",
    body: "Receive a massive 50% profit share on every Pro license sale made through your referral link.",
  },
];

export function ReferralContent() {
  // Read localStorage only after mount, matching AuthGuard's approach —
  // reading it during the initial render would mismatch the server-rendered
  // (always logged-out) HTML and trigger a hydration error.
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setIsLoggedIn(!!getAccessToken());
  }, []);

  const stats = useAccountStats();

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-mono font-bold uppercase tracking-wider mb-4">
        ⚡ 50% Lifetime Commission
      </div>
      <h1 className="font-display text-6xl tracking-tight mb-4">
        Invite Friends, <span className="bg-primary text-dark px-[0.06em] rounded-[0.06em] box-decoration-clone">Earn 50%</span> Profit Share
      </h1>
      <p className="text-gray-400 mb-16 max-w-xl text-base leading-relaxed">
        Every Elite FUT SNIPER user gets a personal referral link. Share it with friends and fellow FC snipers to earn a 50% profit share on every license purchase.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
        {steps.map((s, i) => (
          <div
            key={s.title}
            className="p-6 rounded-2xl bg-surface border border-white/10"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="size-8 rounded-full bg-primary/10 border border-primary/20 grid place-items-center font-display text-sm text-primary shrink-0">
                {i + 1}
              </span>
              <s.icon className="size-4 text-primary" />
            </div>
            <h2 className="font-bold text-base mb-2">{s.title}</h2>
            <p className="text-sm text-gray-400 leading-relaxed">{s.body}</p>
          </div>
        ))}
      </div>

      {isLoggedIn ? (
        <AffiliateLinkCard
          referralCode={stats?.referralCode}
          referralConversions={stats?.referralConversions}
        />
      ) : (
        <div className="p-8 rounded-2xl bg-surface border border-white/10 text-center">
          <h2 className="font-display text-2xl tracking-tight mb-2">
            Get Your Link
          </h2>
          <p className="text-sm text-gray-400 mb-6 max-w-sm mx-auto">
            Log in to see your personal referral link, or create an account to
            get one.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/login"
              className="px-6 py-3 rounded-full border border-white/10 text-white font-bold text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition-colors"
            >
              Log In
            </Link>
            <Link
              href="/register"
              className="px-6 py-3 rounded-full bg-primary text-dark font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform"
            >
              Create Account
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
