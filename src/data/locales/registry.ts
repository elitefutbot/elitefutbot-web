/**
 * Centralized Locale Registry for Multilingual SEO
 * 
 * Strict Compliance with Google Search Central Guidelines:
 * - Language codes: ISO 639-1 (e.g. "en", "es", "de", "fr", "it", "tr", "pl", "ar")
 * - Region codes: ISO 3166-1 Alpha 2 (e.g. "es-MX", "pt-BR", "pt-PT")
 * - NO invalid codes (e.g. "es-419" is forbidden by Google hreflang syntax)
 * - Reciprocal bidirectional links: all active versions list each other + x-default
 * - Translation scope: strictly bounded to the 3 target pages
 */

export const BASE_URL = 'https://www.elitefutbot.com';

/** The 3 pages that have full multi-language translations */
export const TRANSLATED_SUBPATHS = [
  "",
  "/fc27-fut-snipe-bot",
  "/fc27-fut-sniping-bot-autobuyer-features",
] as const;

export type TranslatedSubpath = (typeof TRANSLATED_SUBPATHS)[number];

export interface LocaleEntry {
  /** Internal unique identifier */
  id: string;
  /** Route prefix in URL (e.g. "" for English root, "es", "de", "pt-br", etc.) */
  prefix: string;
  /** Valid Google hreflang code (ISO 639-1 + optional ISO 3166-1 Alpha 2) */
  hreflang: string;
  /** Optional generic language code alias (e.g. "pt" as global catchall for "pt-BR") */
  altHreflang?: string;
  /** English display name */
  name: string;
  /** Native display name */
  nativeName: string;
  /** Flag emoji */
  flag: string;
  /** OpenGraph locale tag */
  ogLocale: string;
  /** Text layout direction */
  direction: "ltr" | "rtl";
  /** Primary currency symbol */
  currencySymbol: string;
  /** Whether the full translation dictionary is active and deployed */
  status: "active" | "pending";
  /** Is this the default fallback (English)? */
  isDefault?: boolean;
}

export const ALL_LOCALES: LocaleEntry[] = [
  {
    id: "en",
    prefix: "",
    hreflang: "en",
    name: "English (Worldwide)",
    nativeName: "English",
    flag: "🇬🇧",
    ogLocale: "en_US",
    direction: "ltr",
    currencySymbol: "$",
    status: "active",
    isDefault: true,
  },
  {
    id: "de",
    prefix: "de",
    hreflang: "de",
    name: "German",
    nativeName: "Deutsch",
    flag: "🇩🇪",
    ogLocale: "de_DE",
    direction: "ltr",
    currencySymbol: "€",
    status: "active",
  },
  {
    id: "es",
    prefix: "es",
    hreflang: "es",
    name: "Spanish (Global / Spain)",
    nativeName: "Español",
    flag: "🇪🇸",
    ogLocale: "es_ES",
    direction: "ltr",
    currencySymbol: "€",
    status: "active",
  },
  {
    id: "es-mx",
    prefix: "es-mx",
    hreflang: "es-MX",
    name: "Mexican Spanish",
    nativeName: "Español (México)",
    flag: "🇲🇽",
    ogLocale: "es_MX",
    direction: "ltr",
    currencySymbol: "$",
    status: "active",
  },
  {
    id: "pt",
    prefix: "pt",
    hreflang: "pt-BR",
    altHreflang: "pt",
    name: "Brazilian Portuguese",
    nativeName: "Português (Brasil)",
    flag: "🇧🇷",
    ogLocale: "pt_BR",
    direction: "ltr",
    currencySymbol: "R$",
    status: "active",
  },
  {
    id: "pt-pt",
    prefix: "pt-pt",
    hreflang: "pt-PT",
    name: "European Portuguese (Portugal)",
    nativeName: "Português (Portugal)",
    flag: "🇵🇹",
    ogLocale: "pt_PT",
    direction: "ltr",
    currencySymbol: "€",
    status: "active",
  },
  {
    id: "fr",
    prefix: "fr",
    hreflang: "fr",
    name: "French",
    nativeName: "Français",
    flag: "🇫🇷",
    ogLocale: "fr_FR",
    direction: "ltr",
    currencySymbol: "€",
    status: "active",
  },
  {
    id: "pl",
    prefix: "pl",
    hreflang: "pl",
    name: "Polish",
    nativeName: "Polski",
    flag: "🇵🇱",
    ogLocale: "pl_PL",
    direction: "ltr",
    currencySymbol: "zł",
    status: "active",
  },
  {
    id: "it",
    prefix: "it",
    hreflang: "it",
    name: "Italian",
    nativeName: "Italiano",
    flag: "🇮🇹",
    ogLocale: "it_IT",
    direction: "ltr",
    currencySymbol: "€",
    status: "active",
  },
  {
    id: "tr",
    prefix: "tr",
    hreflang: "tr",
    name: "Turkish",
    nativeName: "Türkçe",
    flag: "🇹🇷",
    ogLocale: "tr_TR",
    direction: "ltr",
    currencySymbol: "₺",
    status: "active",
  },
  {
    id: "ar",
    prefix: "ar",
    hreflang: "ar",
    name: "Arabic",
    nativeName: "العربية",
    flag: "🇸🇦",
    ogLocale: "ar_SA",
    direction: "rtl",
    currencySymbol: "$",
    status: "active",
  },

];

/** Currently active languages with full dictionaries deployed */
export const ACTIVE_LOCALES = ALL_LOCALES.filter((l) => l.status === "active");

/** Locales that use subpath prefixes in the app directory (excluding root English) */
export const ACTIVE_ROUTED_LOCALES = ACTIVE_LOCALES.filter((l) => l.prefix !== "");

/** Route prefixes for matching in middleware/components e.g. ["es", "pt", "fr", "de"] */
export const ACTIVE_LOCALE_PREFIXES = ACTIVE_ROUTED_LOCALES.map((l) => l.prefix);

/**
 * Returns a fully qualified URL for a given locale prefix and translatable subpath.
 * e.g. getLocaleUrl("", "/fc27-fut-snipe-bot") -> "https://www.elitefutbot.com/fc27-fut-snipe-bot"
 * e.g. getLocaleUrl("es", "/fc27-fut-snipe-bot") -> "https://www.elitefutbot.com/es/fc27-fut-snipe-bot"
 */
export function getLocaleUrl(prefix: string, subpath: string = ""): string {
  const cleanSubpath = subpath === "/" ? "" : subpath;
  if (!prefix) {
    return `${BASE_URL}${cleanSubpath || "/"}`;
  }
  return `${BASE_URL}/${prefix}${cleanSubpath}`;
}

/**
 * Generates the full reciprocal `alternates.languages` map for Google hreflang.
 * Strictly lists:
 * - "x-default": English URL
 * - "en": English URL
 * - Every active locale's valid hreflang code -> localized URL
 *
 * Only accepts TRANSLATED_SUBPATHS: emitting alternates for an English-only
 * page points Google at /<locale>/... URLs that 404.
 */
export function getHreflangAlternates(subpath: TranslatedSubpath = ""): Record<string, string> {
  const alternates: Record<string, string> = {
    "x-default": getLocaleUrl("", subpath),
  };

  for (const locale of ACTIVE_LOCALES) {
    const url = getLocaleUrl(locale.prefix, subpath);
    alternates[locale.hreflang] = url;
    if (locale.altHreflang) {
      alternates[locale.altHreflang] = url;
    }
  }

  return alternates;
}

/**
 * Helper to check if a pathname segment is a valid active locale prefix.
 */
export function isValidLocalePrefix(prefix: string): boolean {
  return ACTIVE_LOCALE_PREFIXES.includes(prefix);
}

/**
 * Lookup a LocaleEntry by its prefix or ID.
 */
export function getLocaleEntry(prefixOrId: string): LocaleEntry | undefined {
  return ALL_LOCALES.find(
    (l) => l.prefix === prefixOrId || l.id === prefixOrId || l.hreflang === prefixOrId
  );
}
