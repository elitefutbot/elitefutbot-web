"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAccessToken, getRefreshToken } from "@/lib/auth/tokenStorage";
import { refreshSession } from "@/lib/auth/authClient";

type Status = "checking" | "authenticated";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("checking");

  useEffect(() => {
    let cancelled = false;

    async function checkSession() {
      if (getAccessToken()) {
        if (!cancelled) setStatus("authenticated");
        return;
      }

      if (getRefreshToken()) {
        const refreshed = await refreshSession();
        if (cancelled) return;
        if (refreshed) {
          setStatus("authenticated");
          return;
        }
      }

      router.replace("/login");
    }

    checkSession();

    return () => {
      cancelled = true;
    };
  }, [router]);

  if (status !== "authenticated") {
    return (
      <div className="min-h-screen bg-dark text-white p-8 flex flex-col items-center justify-center">
        <h1 className="sr-only">Trader Dashboard</h1>
        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }
  return <>{children}</>;
}
