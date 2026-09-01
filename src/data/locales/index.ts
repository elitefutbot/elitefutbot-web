import { esLocale } from "./es";
import { ptLocale } from "./pt";
import { frLocale } from "./fr";
import { deLocale } from "./de";
import type { LocaleDictionary, SupportedLocale, LocaleMeta } from "./types";

export * from "./types";

export const SUPPORTED_LOCALES: SupportedLocale[] = ["es", "pt", "fr", "de"];

export const LOCALE_METAS: Record<SupportedLocale, LocaleMeta> = {
  es: esLocale.locale,
  pt: ptLocale.locale,
  fr: frLocale.locale,
  de: deLocale.locale,
};

const DICTIONARIES: Record<SupportedLocale, LocaleDictionary> = {
  es: esLocale,
  pt: ptLocale,
  fr: frLocale,
  de: deLocale,
};

export function isValidLocale(locale: string): locale is SupportedLocale {
  return SUPPORTED_LOCALES.includes(locale as SupportedLocale);
}

export function getLocaleData(locale: string): LocaleDictionary {
  if (isValidLocale(locale)) {
    return DICTIONARIES[locale];
  }
  return DICTIONARIES.es; // Fallback
}
