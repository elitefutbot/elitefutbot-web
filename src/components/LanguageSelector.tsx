"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, ChevronDown, Check } from "lucide-react";

import {
  ACTIVE_LOCALES,
  ACTIVE_LOCALE_PREFIXES,
  TRANSLATED_SUBPATHS,
  LocaleEntry,
} from "@/data/locales/registry";

function CountryFlag({ code, className = "w-4 h-3" }: { code: string; className?: string }) {
  const baseClass = `inline-block shrink-0 rounded-[2px] shadow-sm overflow-hidden ${className}`;
  switch (code) {
    case "en":
      return (
        <svg viewBox="0 0 60 30" className={baseClass} aria-hidden="true">
          <clipPath id="uk-clip">
            <path d="M0,0 v30 h60 v-30 z" />
          </clipPath>
          <g clipPath="url(#uk-clip)">
            <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
            <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
          </g>
        </svg>
      );
    case "de":
      return (
        <svg viewBox="0 0 5 3" className={baseClass} aria-hidden="true">
          <rect width="5" height="3" fill="#000" />
          <rect width="5" height="2" y="1" fill="#D00" />
          <rect width="5" height="1" y="2" fill="#FFCE00" />
        </svg>
      );
    case "es":
      return (
        <svg viewBox="0 0 750 500" className={baseClass} aria-hidden="true">
          <rect width="750" height="500" fill="#c60b1e" />
          <rect width="750" height="250" y="125" fill="#ffc400" />
        </svg>
      );
    case "es-mx":
      return (
        <svg viewBox="0 0 3 2" className={baseClass} aria-hidden="true">
          <rect width="1" height="2" x="0" fill="#006847" />
          <rect width="1" height="2" x="1" fill="#fff" />
          <rect width="1" height="2" x="2" fill="#ce1126" />
          <circle cx="1.5" cy="1" r="0.28" fill="#664b2c" />
        </svg>
      );
    case "pt":
      return (
        <svg viewBox="0 0 20 14" className={baseClass} aria-hidden="true">
          <rect width="20" height="14" fill="#009b3a" />
          <polygon points="10,1.8 18.2,7 10,12.2 1.8,7" fill="#fedf00" />
          <circle cx="10" cy="7" r="3" fill="#002776" />
        </svg>
      );
    case "pt-pt":
      return (
        <svg viewBox="0 0 600 400" className={baseClass} aria-hidden="true">
          <rect width="600" height="400" fill="#ff0000" />
          <rect width="240" height="400" fill="#006600" />
          <circle cx="240" cy="200" r="80" fill="#ffff00" />
          <circle cx="240" cy="200" r="50" fill="#ff0000" />
        </svg>
      );
    case "fr":
      return (
        <svg viewBox="0 0 3 2" className={baseClass} aria-hidden="true">
          <rect width="1" height="2" x="0" fill="#002395" />
          <rect width="1" height="2" x="1" fill="#fff" />
          <rect width="1" height="2" x="2" fill="#ED2939" />
        </svg>
      );
    case "pl":
      return (
        <svg viewBox="0 0 8 5" className={baseClass} aria-hidden="true">
          <rect width="8" height="5" fill="#dc143c" />
          <rect width="8" height="2.5" fill="#fff" />
        </svg>
      );
    case "it":
      return (
        <svg viewBox="0 0 3 2" className={baseClass} aria-hidden="true">
          <rect width="1" height="2" x="0" fill="#009246" />
          <rect width="1" height="2" x="1" fill="#fff" />
          <rect width="1" height="2" x="2" fill="#ce2b37" />
        </svg>
      );
    case "tr":
      return (
        <svg viewBox="0 0 30 20" className={baseClass} aria-hidden="true">
          <rect width="30" height="20" fill="#E30A17" />
          <circle cx="10.5" cy="10" r="5" fill="#fff" />
          <circle cx="11.8" cy="10" r="4" fill="#E30A17" />
          <polygon points="15.5,10 18.5,11 16.7,8.5 16.7,11.5 18.5,9" fill="#fff" />
        </svg>
      );
    case "ar":
      return (
        <svg viewBox="0 0 30 20" className={baseClass} aria-hidden="true">
          <rect width="30" height="20" fill="#006C35" />
          <rect x="7" y="13" width="16" height="1.5" rx="0.75" fill="#fff" />
          <rect x="8" y="7" width="14" height="3.5" rx="1" fill="#fff" opacity="0.85" />
        </svg>
      );
    default:
      return null;
  }
}

export default function LanguageSelector({ className = "" }: { className?: string }) {
  const pathname = usePathname() || "/";
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Determine current active locale from pathname
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];
  const isLocalePrefix = ACTIVE_LOCALE_PREFIXES.includes(firstSegment);
  const currentLocaleCode = isLocalePrefix ? firstSegment : "en";
  const currentLanguage =
    ACTIVE_LOCALES.find((l) => (l.prefix || l.id) === currentLocaleCode) || ACTIVE_LOCALES[0];

  // Base path without the locale prefix (e.g. "" for root, or "/fc27-fut-snipe-bot")
  const rawSubpath = isLocalePrefix
    ? `/${segments.slice(1).join("/")}`
    : pathname;

  const normalizedSubpath = rawSubpath === "/" ? "" : rawSubpath;
  const isTranslatablePage = (TRANSLATED_SUBPATHS as readonly string[]).includes(normalizedSubpath);

  // Build target URL for a given language
  const getTargetUrl = (locale: LocaleEntry) => {
    // If the current page isn't translated, fallback to that language's homepage
    const targetSubpath = isTranslatablePage ? normalizedSubpath : "";

    if (!locale.prefix) {
      return targetSubpath || "/";
    }
    return `/${locale.prefix}${targetSubpath}`;
  };

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`relative inline-block text-left ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-gray-300 hover:text-white transition-all focus:outline-none focus:ring-1 focus:ring-primary/50 min-h-[38px]"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={`Select Language: ${currentLanguage.name} (${currentLanguage.id.toUpperCase()})`}
      >
        <CountryFlag code={currentLanguage.id} className="w-4 h-3" />
        <span className="uppercase font-mono font-bold text-xs">{currentLanguage.id}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180 text-primary" : ""}`} />
      </button>

      {/* Always rendered (toggled with `hidden`) so the localized URLs exist as
          real <a href> links in the server HTML — otherwise crawlers never see
          internal links to the translated pages. */}
      <div
        hidden={!isOpen}
        className="absolute right-0 mt-2 w-48 rounded-xl bg-[#121212]/95 backdrop-blur-xl border border-white/15 shadow-2xl py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150"
      >
          <div className="px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 border-b border-white/5 flex items-center gap-1.5">
            <Globe className="w-3 h-3 text-primary" />
            <span>Select Region / Language</span>
          </div>

          <div className="py-1">
            {ACTIVE_LOCALES.map((lang) => {
              const langKey = lang.prefix || lang.id;
              const isActive = langKey === currentLocaleCode;
              const targetUrl = getTargetUrl(lang);

              return (
                <Link
                  key={lang.id}
                  href={targetUrl}
                  hrefLang={lang.hreflang}
                  lang={lang.hreflang}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-3 py-2 text-xs transition-colors hover:bg-white/10 ${
                    isActive ? "text-primary font-bold bg-primary/5" : "text-gray-300 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <CountryFlag code={lang.id} className="w-4.5 h-3.5" />
                    <span>{lang.nativeName}</span>
                  </div>
                  {isActive && <Check className="w-3.5 h-3.5 text-primary" />}
                </Link>
              );
            })}
          </div>
      </div>
    </div>
  );
}
