"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { isAccountRoute } from "@/lib/accountRoutes";
import { hasSession } from "@/lib/auth/authClient";

// Moved out of app/layout.tsx (content below is otherwise unchanged) so
// account routes (login/dashboard/etc.) can render their own chrome instead
// of this marketing nav.
export default function SiteNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Re-checked on every navigation (not just on mount) since this nav is
  // part of the persistent layout and doesn't remount after a login redirect
  // — reading it in an effect (not during render) avoids a hydration
  // mismatch against the always-logged-out server-rendered HTML.
  useEffect(() => {
    setIsLoggedIn(hasSession());
  }, [pathname]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  if (isAccountRoute(pathname)) return null;

  const authHref = isLoggedIn ? "/dashboard" : "/register";
  const authLabel = isLoggedIn ? "Dashboard" : "Sign Up";

  return (
    <nav className="sticky top-0 z-50 bg-dark/85 backdrop-blur-xl border-b border-white/5 supports-[backdrop-filter]:bg-dark/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image src="/logo-elite.png" alt="Elite FUT SNIPER Logo" width={40} height={40} priority className="w-10 h-10 object-contain transition-transform group-hover:scale-105" />
            <span className="text-lg font-black tracking-tighter uppercase text-white">
              Elite FUT <span className="text-primary">SNIPER</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-6 text-xs font-semibold text-gray-300">
            <Link className="hover:text-primary transition-colors py-2.5 px-3 rounded-lg hover:bg-white/5 inline-flex items-center min-h-[44px]" href="/#features">Features</Link>
            <Link className="hover:text-primary transition-colors py-2.5 px-3 rounded-lg hover:bg-white/5 inline-flex items-center min-h-[44px]" href="/#pricing">Pricing</Link>
            <Link className="hover:text-primary transition-colors py-2.5 px-3 rounded-lg hover:bg-white/5 inline-flex items-center min-h-[44px]" href="/#reviews">Reviews</Link>
            <Link className="bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary px-4 py-2.5 rounded-full font-bold transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(204,255,0,0.1)] min-h-[44px]" href={authHref}>
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              {authLabel}
            </Link>
          </div>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-gray-300 hover:text-primary hover:bg-white/5 transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div id="mobile-nav-menu" className="md:hidden border-t border-white/5 bg-dark/95 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-1 text-sm font-semibold text-gray-300">
            <Link className="py-3 px-3 rounded-lg hover:bg-white/5 hover:text-primary transition-colors" href="/#features" onClick={() => setMenuOpen(false)}>Features</Link>
            <Link className="py-3 px-3 rounded-lg hover:bg-white/5 hover:text-primary transition-colors" href="/#pricing" onClick={() => setMenuOpen(false)}>Pricing</Link>
            <Link className="py-3 px-3 rounded-lg hover:bg-white/5 hover:text-primary transition-colors" href="/#reviews" onClick={() => setMenuOpen(false)}>Reviews</Link>
            <Link
              className="mt-2 bg-primary/10 border border-primary/30 text-primary px-4 py-3 rounded-full font-bold flex items-center justify-center gap-2"
              href={authHref}
              onClick={() => setMenuOpen(false)}
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              {authLabel}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
