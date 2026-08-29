"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { logout } from "@/lib/auth/authClient";

export function SignOutButton() {
  const router = useRouter();

  const handleClick = async () => {
    await logout();
    router.push("/login");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      title="Sign out"
      className="shrink-0 size-9 sm:h-9 sm:w-auto sm:px-3 inline-flex items-center justify-center gap-1.5 rounded-full text-gray-400 hover:text-primary hover:bg-white/5 transition-colors"
    >
      <LogOut className="size-4" />
      <span className="hidden sm:inline font-mono text-[10px] font-bold uppercase tracking-widest">
        Sign Out
      </span>
    </button>
  );
}
