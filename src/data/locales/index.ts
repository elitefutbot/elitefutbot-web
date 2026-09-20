import { enLocale } from "./en";
import { esLocale } from "./es";
import { ptLocale } from "./pt";
import { frLocale } from "./fr";
import { deLocale } from "./de";
import { itLocale } from "./it";
import { trLocale } from "./tr";
import { plLocale } from "./pl";
import { esMxLocale } from "./es-mx";
import { ptPtLocale } from "./pt-pt";
import { arLocale } from "./ar";
import type { LocaleDictionary, SupportedLocale, LocaleMeta } from "./types";
import { ACTIVE_LOCALE_PREFIXES } from "./registry";

export * from "./types";
export * from "./registry";
export {
  enLocale,
  esLocale,
  ptLocale,
  frLocale,
  deLocale,
  itLocale,
  trLocale,
  plLocale,
  esMxLocale,
  ptPtLocale,
  arLocale,
};

export const SUPPORTED_LOCALES: SupportedLocale[] = ACTIVE_LOCALE_PREFIXES as SupportedLocale[];

export const LOCALE_METAS: Record<string, LocaleMeta> = {
  en: enLocale.locale,
  es: esLocale.locale,
  "es-mx": esMxLocale.locale,
  pt: ptLocale.locale,
  "pt-pt": ptPtLocale.locale,
  fr: frLocale.locale,
  de: deLocale.locale,
  it: itLocale.locale,
  tr: trLocale.locale,
  pl: plLocale.locale,
  ar: arLocale.locale,
};

const DICTIONARIES: Record<string, LocaleDictionary> = {
  en: enLocale,
  es: esLocale,
  "es-mx": esMxLocale,
  pt: ptLocale,
  "pt-pt": ptPtLocale,
  fr: frLocale,
  de: deLocale,
  it: itLocale,
  tr: trLocale,
  pl: plLocale,
  ar: arLocale,
};


export function isValidLocale(locale: string): locale is SupportedLocale {
  return SUPPORTED_LOCALES.includes(locale as SupportedLocale);
}

export function getLocaleData(locale: string): LocaleDictionary {
  if (DICTIONARIES[locale]) {
    return DICTIONARIES[locale];
  }
  return enLocale; // Fallback to English master dictionary
}
