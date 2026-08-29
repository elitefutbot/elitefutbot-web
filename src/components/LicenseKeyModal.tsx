"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { authFetch } from "@/lib/auth/authClient";
import { emitRefresh } from "@/lib/firebase/refreshBus";

const GUMROAD_PRODUCT_URL = "https://futbotelite.gumroad.com/l/elitebotfc";

export function LicenseKeyModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [licenseKey, setLicenseKey] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!licenseKey.trim()) {
      setError("Enter your license key");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const res = await authFetch("/api/users/license", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ licenseKey: licenseKey.trim() }),
      });
      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setError(data?.message ?? "Couldn't activate that key. Try again.");
        return;
      }

      // Dashboard stats (isPaid/hasAccess) are fetched from the server, not
      // held here — trigger the same refresh path FCM pushes use.
      emitRefresh();
      setLicenseKey("");
      onOpenChange(false);
    } catch {
      setError("Couldn't reach the server. Check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card border-white/10">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl tracking-tight text-white">
            Activate your license
          </DialogTitle>
          <DialogDescription>
            Paste the license key from your Gumroad purchase confirmation
            email.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            autoFocus
            value={licenseKey}
            onChange={(e) => setLicenseKey(e.target.value)}
            placeholder="XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX"
            className="w-full px-4 py-3 rounded-xl bg-surface border border-white/10 font-mono text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/40"
          />

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="w-full px-6 py-3 rounded-full bg-primary text-dark font-black text-xs uppercase tracking-widest hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:hover:scale-100"
          >
            {submitting ? "Activating..." : "Activate"}
          </button>
        </form>

        <a
          href={GUMROAD_PRODUCT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1 text-sm text-gray-400 hover:text-primary transition-colors"
        >
          Don&apos;t have a license key? Get one on Gumroad
          <ArrowUpRight className="size-3.5" />
        </a>
      </DialogContent>
    </Dialog>
  );
}
