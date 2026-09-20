"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { isAccountRoute } from "@/lib/accountRoutes";
import { hasSession } from "@/lib/auth/authClient";
import LanguageSelector from "@/components/LanguageSelector";

import { isValidLocale, getLocaleData } from "@/data/locales";

// Moved out of app/layout.tsx (content below is otherwise unchanged) so
// account routes (login/dashboard/etc.) can render their own chrome instead
// of this marketing nav.
export default function SiteNav() {
  const pathname = usePathname() || "/";
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

  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];
  const isLocalePrefix = isValidLocale(firstSegment);
  const dict = isLocalePrefix ? getLocaleData(firstSegment) : null;

  const homeHref = isLocalePrefix ? `/${firstSegment}` : "/";
  const featuresHref = isLocalePrefix ? `/${firstSegment}#features` : "/#features";
  const pricingHref = isLocalePrefix ? `/${firstSegment}#pricing` : "/#pricing";
  const reviewsHref = isLocalePrefix ? `/${firstSegment}#reviews` : "/#reviews";

  const featuresLabel = dict ? dict.nav.features : "Features";
  const pricingLabel = dict ? dict.nav.pricing : "Pricing";
  const reviewsLabel = dict ? dict.nav.reviews : "Reviews";

  const authHref = isLoggedIn ? "/dashboard" : "/register";
  const authLabel = isLoggedIn
    ? (dict ? dict.nav.dashboard : "Dashboard")
    : (dict ? dict.nav.signUp : "Sign Up");

  return (
    <nav className="sticky top-0 z-50 bg-dark/85 backdrop-blur-xl border-b border-white/5 supports-[backdrop-filter]:bg-dark/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href={homeHref} className="flex items-center gap-2.5 group">
            <Image src="/logo-elite.png" alt="Elite FUT SNIPER Logo" width={40} height={40} priority className="w-10 h-10 object-contain transition-transform group-hover:scale-105" />
            <span className="text-lg font-black tracking-tighter uppercase text-white">
              Elite FUT <span className="text-primary">SNIPER</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-xs font-semibold text-gray-300">
            <Link className="hover:text-primary transition-colors py-2.5 px-3 rounded-lg hover:bg-white/5 inline-flex items-center min-h-[44px]" href={featuresHref}>{featuresLabel}</Link>
            <Link className="hover:text-primary transition-colors py-2.5 px-3 rounded-lg hover:bg-white/5 inline-flex items-center min-h-[44px]" href={pricingHref}>{pricingLabel}</Link>
            <Link className="hover:text-primary transition-colors py-2.5 px-3 rounded-lg hover:bg-white/5 inline-flex items-center min-h-[44px]" href={reviewsHref}>{reviewsLabel}</Link>
            <Link
              href="https://discord.gg/Rkb9nF6WG6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join our Discord community"
              className="w-10 h-10 rounded-full border border-white/10 hover:border-[#5865F2]/40 hover:bg-[#5865F2]/10 text-gray-300 hover:text-[#5865F2] transition-all flex items-center justify-center"
            >
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.078.078 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </Link>
            <LanguageSelector />
            <Link className="bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary px-4 py-2.5 rounded-full font-bold transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(204,255,0,0.1)] min-h-[44px]" href={authHref}>
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              {authLabel}
            </Link>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSelector />
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex items-center justify-center w-11 h-11 rounded-lg text-gray-300 hover:text-primary hover:bg-white/5 transition-colors"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div id="mobile-nav-menu" className="md:hidden border-t border-white/5 bg-dark/95 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-1 text-sm font-semibold text-gray-300">
            <Link className="py-3 px-3 rounded-lg hover:bg-white/5 hover:text-primary transition-colors" href={featuresHref} onClick={() => setMenuOpen(false)}>{featuresLabel}</Link>
            <Link className="py-3 px-3 rounded-lg hover:bg-white/5 hover:text-primary transition-colors" href={pricingHref} onClick={() => setMenuOpen(false)}>{pricingLabel}</Link>
            <Link className="py-3 px-3 rounded-lg hover:bg-white/5 hover:text-primary transition-colors" href={reviewsHref} onClick={() => setMenuOpen(false)}>{reviewsLabel}</Link>
            <Link
              className="py-3 px-3 rounded-lg hover:bg-white/5 hover:text-[#5865F2] transition-colors flex items-center gap-2"
              href="https://discord.gg/Rkb9nF6WG6"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.078.078 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Discord
            </Link>
            <div className="pt-2 border-t border-white/5 mt-1">
              <Link className="w-full bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(204,255,0,0.1)]" href={authHref} onClick={() => setMenuOpen(false)}>
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                {authLabel}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
