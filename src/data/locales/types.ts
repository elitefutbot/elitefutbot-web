export type SupportedLocale = "es" | "pt" | "fr" | "de";

export interface LocaleMeta {
  code: SupportedLocale;
  name: string;
  nativeName: string;
  flag: string;
  ogLocale: string;
  currencySymbol: string;
}

export interface LocalizedPageMetadata {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
}

export interface LocalizedFeature {
  num: string;
  title: string;
  badge: string;
  badgeColor?: string;
  tagline: string;
  description: string;
  highlights: string[];
}

export interface LocalizedFAQ {
  q: string;
  a: string;
}

export interface LocalizedStep {
  num: string;
  title: string;
  desc: string;
  badge: string;
}

export interface LocalizedComparisonRow {
  feature: string;
  elite: string;
  cloud: string;
  manual: string;
}

export interface LocalizedHomepageData {
  meta: LocalizedPageMetadata;
  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    directAnswerSnippet: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: {
      speed: string;
      bans: string;
      solver: string;
      sandbox: string;
    };
  };
  featuresHeading: {
    badge: string;
    title: string;
    subtitle: string;
  };
  features: LocalizedFeature[];
  comparison: {
    badge: string;
    title: string;
    subtitle: string;
    rows: LocalizedComparisonRow[];
  };
  howItWorks: {
    badge: string;
    title: string;
    subtitle: string;
    steps: LocalizedStep[];
  };
  faqs: LocalizedFAQ[];
  cta: {
    badge: string;
    title: string;
    subtitle: string;
    button: string;
    discord: string;
    perks: string[];
  };
}

export interface LocalizedSnipeBotData {
  meta: LocalizedPageMetadata;
  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    directAnswerSnippet: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: {
      speed: string;
      bans: string;
      solver: string;
      sandbox: string;
    };
  };
  featuresHeading: {
    badge: string;
    title: string;
    subtitle: string;
  };
  features: LocalizedFeature[];
  comparison: {
    badge: string;
    title: string;
    subtitle: string;
    rows: LocalizedComparisonRow[];
  };
  howItWorks: {
    badge: string;
    title: string;
    subtitle: string;
    steps: LocalizedStep[];
  };
  article: {
    badge: string;
    season: string;
    title: string;
    paragraphs: string[];
    ctaPrimary: string;
    ctaSecondary: string;
  };
  faqs: LocalizedFAQ[];
  cta: {
    badge: string;
    title: string;
    subtitle: string;
    button: string;
    discord: string;
    perks: string[];
  };
}

export interface LocalizedAutobuyerFeaturesData {
  meta: LocalizedPageMetadata;
  hero: {
    badge: string;
    titleLine1: string;
    titleHighlight: string;
    directAnswerSnippet: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  featuresHeading: {
    badge: string;
    title: string;
    subtitle: string;
  };
  features: LocalizedFeature[];
  comparison: {
    badge: string;
    title: string;
    subtitle: string;
    rows: {
      feature: string;
      elite: string;
      cloud: string;
    }[];
  };
  faqs: LocalizedFAQ[];
  cta: {
    badge: string;
    title: string;
    subtitle: string;
    button: string;
    discord: string;
    perks: string[];
  };
}

export interface LocaleDictionary {
  locale: LocaleMeta;
  nav: {
    features: string;
    pricing: string;
    reviews: string;
    signUp: string;
    dashboard: string;
  };
  home: LocalizedHomepageData;
  snipeBot: LocalizedSnipeBotData;
  featuresPage: LocalizedAutobuyerFeaturesData;
}
