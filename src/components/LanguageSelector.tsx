"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, ChevronDown, Check } from "lucide-react";

interface LanguageOption {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

const LANGUAGES: LanguageOption[] = [
  { code: "en", name: "English", nativeName: "English", flag: "🇬🇧" },
  { code: "es", name: "Spanish", nativeName: "Español", flag: "🇪🇸" },
  { code: "pt", name: "Portuguese", nativeName: "Português", flag: "🇧🇷" },
  { code: "fr", name: "French", nativeName: "Français", flag: "🇫🇷" },
  { code: "de", name: "German", nativeName: "Deutsch", flag: "🇩🇪" },
];

// Explicit list of pages that have translations
const TRANSLATED_SUBPATHS = [
  "",
  "/fc27-fut-snipe-bot",
  "/fc27-fut-sniping-bot-autobuyer-features",
];

export default function LanguageSelector({ className = "" }: { className?: string }) {
  const pathname = usePathname() || "/";
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Determine current active locale from pathname
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];
  const isLocalePrefix = ["es", "pt", "fr", "de"].includes(firstSegment);
  const currentLocaleCode = isLocalePrefix ? firstSegment : "en";
  const currentLanguage = LANGUAGES.find((l) => l.code === currentLocaleCode) || LANGUAGES[0];

  // Base path without the locale prefix (e.g. "" for root, or "/fc27-fut-snipe-bot")
  const rawSubpath = isLocalePrefix
    ? `/${segments.slice(1).join("/")}`
    : pathname;

  const normalizedSubpath = rawSubpath === "/" ? "" : rawSubpath;
  const isTranslatablePage = TRANSLATED_SUBPATHS.includes(normalizedSubpath);

  // Build target URL for a given language
  const getTargetUrl = (langCode: string) => {
    // If the current page isn't translated, fallback to that language's homepage
    const targetSubpath = isTranslatablePage ? normalizedSubpath : "";

    if (langCode === "en") {
      return targetSubpath || "/";
    }
    return `/${langCode}${targetSubpath}`;
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
        aria-label="Select Language"
      >
        <span className="text-sm leading-none">{currentLanguage.flag}</span>
        <span className="uppercase font-mono font-bold text-xs">{currentLanguage.code}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180 text-primary" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-xl bg-[#121212]/95 backdrop-blur-xl border border-white/15 shadow-2xl py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 border-b border-white/5 flex items-center gap-1.5">
            <Globe className="w-3 h-3 text-primary" />
            <span>Select Region / Language</span>
          </div>

          <div className="py-1">
            {LANGUAGES.map((lang) => {
              const isActive = lang.code === currentLocaleCode;
              const targetUrl = getTargetUrl(lang.code);

              return (
                <Link
                  key={lang.code}
                  href={targetUrl}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-3 py-2 text-xs transition-colors hover:bg-white/10 ${
                    isActive ? "text-primary font-bold bg-primary/5" : "text-gray-300 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base leading-none">{lang.flag}</span>
                    <span>{lang.nativeName}</span>
                  </div>
                  {isActive && <Check className="w-3.5 h-3.5 text-primary" />}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
