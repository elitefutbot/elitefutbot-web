"use client";

import { useRouter } from "next/navigation";
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
      className="font-mono text-[10px] text-primary/80 font-bold uppercase tracking-widest hover:text-primary transition-colors"
    >
      Sign Out
    </button>
  );
}
