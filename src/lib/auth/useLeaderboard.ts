"use client";

import { useEffect, useState } from "react";
import { fetchLeaderboard, type LeaderboardResponse } from "./authClient";
import { getAccessToken } from "./tokenStorage";
import { subscribeToRefresh } from "@/lib/firebase/refreshBus";

const POLL_INTERVAL_MS = 60000;

export function useLeaderboard(): LeaderboardResponse | null {
  const [data, setData] = useState<LeaderboardResponse | null>(null);

  useEffect(() => {
    if (!getAccessToken()) return;

    let cancelled = false;

    async function load() {
      if (!getAccessToken()) return;
      const res = await fetchLeaderboard();
      if (res && !cancelled) {
        setData(res);
      }
    }

    load();
    const intervalId = window.setInterval(load, POLL_INTERVAL_MS);
    const unsubscribe = subscribeToRefresh(load);

    return () => {
      cancelled = true;
      window.clearInterval(intervalId);
      unsubscribe();
    };
  }, []);

  return data;
}
