"use client";

import { useState } from "react";
import { Check, Copy, Users } from "lucide-react";
function buildReferralLink(referralCode: string): string {
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
    }
  };

  return (
    <div className="glass-card p-6">
      <div className="flex items-center gap-2 mb-1">
        <Users className="size-4 text-primary" />
        <h2 className="font-display text-xl tracking-tight text-white">Invite Friends</h2>
      </div>
      <p className="text-sm text-gray-400 mb-5">
        Share your link — friends who sign up through it are credited to
        you.
      </p>
      <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
        <code className="flex-1 min-w-0 truncate px-4 py-3 rounded-xl bg-surface border border-white/10 font-mono text-xs sm:text-sm text-white">
          {link}
        </code>
        <button
          type="button"
          onClick={handleCopy}
          className="shrink-0 flex items-center gap-1.5 px-4 py-3 rounded-xl bg-primary text-dark font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-transform"
        >
          {copied ? (
            <Check className="size-3.5" />
          ) : (
            <Copy className="size-3.5" />
          )}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <div className="mt-4">
        <span className="px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 font-mono text-[10px] text-primary font-bold uppercase tracking-widest">
          {referralConversions ?? 0}{" "}
          {referralConversions === 1 ? "Referral" : "Referrals"} Converted
        </span>
      </div>
    </div>
  );
}
