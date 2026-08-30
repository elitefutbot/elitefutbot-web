"use client";

import { useEffect, useState } from "react";
import { authFetch } from "./authClient";
import { getAccessToken } from "./tokenStorage";
import { subscribeToRefresh } from "@/lib/firebase/refreshBus";

export type BotStatus = "idle" | "running" | "stopped";

export interface RecentPurchase {
  name: string;
  price: number;
  tradeId: string | number | null;
  at: string;
}

export interface AccountStats {
  purchases: number;
  profits: number;
  isPaid: boolean;
  createdAt: string;
  isTrialActive: boolean;
  hasAccess: boolean;
  botStatus: BotStatus;
  activeFilters: Record<string, unknown> | null;
  lastSnipeAt: string | null;
  lastSeenAt: string | null;
  runningSince: string | null;
  recentPurchases: RecentPurchase[];
  referralCode: string;
  referralConversions: number;
}

// This is the fallback path — the FCM push is meant to be the primary
// freshness signal, triggering an early re-fetch. This 60s poll just
// guarantees the dashboard is never more than a minute stale even if a
// push is missed entirely.
const POLL_INTERVAL_MS = 60000;

// Fetches live account/trial state from GET /api/users/stats, which is
// fresher than the snapshot tokenStorage.getUser() persisted at login time
// (a long-lived session shouldn't keep showing day-1 trial numbers).
export function useAccountStats(): AccountStats | null {
  const [stats, setStats] = useState<AccountStats | null>(null);

  useEffect(() => {
    if (!getAccessToken()) return;

    let cancelled = false;

    async function load() {
      if (!getAccessToken()) return;
      const res = await authFetch("/api/users/stats");
      if (!res.ok || cancelled) return;
      const data = (await res.json()) as AccountStats;
      if (!cancelled) setStats(data);
    }

    load();
    const intervalId = window.setInterval(load, POLL_INTERVAL_MS);
    // An FCM push (foreground or relayed from the service worker) triggers
    // an immediate re-fetch instead of waiting for the next poll.
    const unsubscribe = subscribeToRefresh(load);

    return () => {
      cancelled = true;
      window.clearInterval(intervalId);
      unsubscribe();
    };
  }, []);

  return stats;
}
