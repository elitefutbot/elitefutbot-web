"use client";

import { useState } from "react";
import { Check, Copy, Gift, Sparkles, TrendingUp } from "lucide-react";

function buildReferralLink(referralCode: string): string {
  if (typeof window === "undefined") {
    return `https://www.elitefutbot.com/r/${referralCode}`;
  }
  return `${window.location.origin}/r/${referralCode}`;
}

export function AffiliateLinkCard({
  referralCode,
  referralConversions,
}: {
  referralCode: string | undefined;
  referralConversions: number | undefined;
}) {
  const [copied, setCopied] = useState(false);

  if (!referralCode) return null;

  const link = buildReferralLink(referralCode);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="glass-card relative overflow-hidden p-6 sm:p-7 border border-primary/25 shadow-[0_4px_24px_rgba(0,0,0,0.2)] bg-gradient-to-br from-surface via-surface to-primary/5">
      {/* Header with 50% Profit Share badge */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2.5">
          <div className="size-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0">
            <Gift className="size-4" />
          </div>
          <div>
            <h2 className="font-display text-xl tracking-tight text-white flex items-center gap-2">
              Invite Friends & Earn
            </h2>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 border border-primary/40 text-primary font-mono text-[10px] font-black uppercase tracking-widest shadow-sm">
          <Sparkles className="size-3" /> 50% Profit Share
        </span>
      </div>

      <p className="text-sm text-gray-300 mb-5 leading-relaxed">
        Share your personal link — earn a{" "}
        <strong className="text-primary font-bold">50% profit share</strong> for
        each license sale purchased through your referral.
      </p>

      {/* Copy link input and button */}
      <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap mb-4">
        <div className="flex-1 min-w-0 px-4 py-3 rounded-xl bg-dark/80 border border-white/10 font-mono text-xs sm:text-sm text-white select-all flex items-center justify-between">
          <span className="truncate">{link}</span>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className={`shrink-0 flex items-center gap-2 px-5 py-3 rounded-xl font-black text-xs uppercase tracking-wider transition-all shadow-md ${
            copied
              ? "bg-emerald-500 text-dark scale-95"
              : "bg-primary text-dark hover:scale-105"
          }`}
        >
          {copied ? (
            <>
              <Check className="size-4" /> Copied!
            </>
          ) : (
            <>
              <Copy className="size-4" /> Copy Link
            </>
          )}
        </button>
      </div>

      {/* Referral Stats and Profit Share Details */}
      <div className="flex items-center justify-between gap-3 flex-wrap pt-3 border-t border-white/5 text-xs text-gray-400">
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 font-mono text-xs text-white font-semibold">
            {referralConversions ?? 0}{" "}
            {referralConversions === 1 ? "Referral" : "Referrals"} Converted
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-primary font-medium text-xs">
          <TrendingUp className="size-3.5" />
          <span>50% profit share for each sale</span>
        </div>
      </div>
    </div>
  );
}
