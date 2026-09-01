export type SupportedLocale = "es" | "pt" | "fr" | "de";

export interface LocaleMeta {
  code: SupportedLocale;
  name: string;
  nativeName: string;
  flag: string;
  ogLocale: string;
  currencySymbol: string;
}

export interface PageMeta {
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
}

export interface HomeFeatureModule {
  num: string;
  title: string;
  badge?: string;
  badgeColor?: string;
  tagline: string;
  description: string;
  iconName?: string;
  highlights?: string[];
  specs?: string[];
  isFeatured?: boolean;
}

export interface ComparisonRow {
  feature: string;
  elite: string;
  cloud?: string;
  typical?: boolean;
  manual?: string;
  highlight?: boolean;
}

export interface HowItWorksStep {
  num: string;
  title: string;
  desc: string;
  badge: string;
  iconName?: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface TrustHighlight {
  label: string;
  title: string;
  desc: string;
}

export interface OutperformPoint {
  title: string;
  desc: string;
  iconName: string;
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
  home: {
    meta: PageMeta;
    creatorBadge: {
      originalCreator: string;
      byDeveloper: string;
      freeBeta: string;
      slotsFilled: string;
    };
    hero: {
      titleLine1: string;
      titleHighlight: string;
      titleHighlight2: string;
      titleLine3: string;
      description: string;
      ctaPricing: string;
      ctaDemo: string;
      stats: {
        antiBan: string;
        localExtension: string;
        provenLegacy: string;
      };
      proof: {
        snipeProfitBadge: string;
        snipeProfitValue: string;
        yamalBadge: string;
      };
    };
    outperform: {
      title: string;
      titleHighlight: string;
      subtitle: string;
      humanization: {
        badge: string;
        title: string;
        description: string;
        highlights: string[];
        stealthStatus: string;
        safeBadge: string;
        protectionLabel: string;
      };
      cards: Array<{
        title: string;
        description: string;
        iconName: string;
        badge?: string;
      }>;
      viewAllFeaturesCta: string;
    };
    comparison: {
      title: string;
      titleHighlight: string;
      subtitle: string;
      col1: string;
      col2: string;
      col3: string;
      goldStandard: string;
      rows: Array<{
        feature: string;
        elite: boolean;
        typical: boolean;
      }>;
    };
    pricing: {
      title: string;
      titleHighlight: string;
      subtitle: string;
      freeCard: {
        title: string;
        price: string;
        period: string;
        desc: string;
        features: string[];
        cta: string;
      };
      proCard: {
        badge: string;
        title: string;
        price: string;
        originalPrice: string;
        guarantee: string;
        spotsLeft: string;
        soldText: string;
        nextPrice: string;
        featuresHeader: string;
        features: Array<{ text: string; subtext?: string; isSoon?: boolean }>;
        cta: string;
      };
    };
    reviews: {
      badge: string;
      title: string;
      titleHighlight: string;
      subtitle: string;
      items: Array<{
        user: string;
        badge: string;
        badgeColor: string;
        img: string;
        alt: string;
      }>;
      discordCta: string;
      githubCta: string;
    };
    faqs: {
      badge: string;
      title: string;
      titleHighlight: string;
      subtitle: string;
      items: FaqItem[];
    };
    ctaBottom1: {
      title: string;
      titleHighlight: string;
      subtitle: string;
      button: string;
      disclaimer: string;
    };
    ctaBottom2: {
      title: string;
      titleHighlight: string;
      subtitle: string;
      subtitleHighlight: string;
      button: string;
    };
  };
  snipeBot: {
    meta: PageMeta;
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
      demoTitle: string;
      demoBadge: string;
    };
    featuresHeading: {
      badge: string;
      title: string;
      titleHighlight: string;
      subtitle: string;
    };
    features: HomeFeatureModule[];
    comparison: {
      badge: string;
      title: string;
      titleHighlight: string;
      subtitle: string;
      col1: string;
      col2: string;
      col3: string;
      col4: string;
      rows: ComparisonRow[];
      competitorLinkText: string;
    };
    howItWorks: {
      badge: string;
      title: string;
      titleHighlight: string;
      subtitle: string;
      steps: HowItWorksStep[];
    };
    article: {
      badge: string;
      season: string;
      title: string;
      titleHighlight: string;
      paragraphs: string[];
      ctaPrimary: string;
      ctaSecondary: string;
    };
    faqs: {
      badge: string;
      title: string;
      titleHighlight: string;
      subtitle: string;
      items: FaqItem[];
    };
    cta: {
      badge: string;
      title: string;
      titleHighlight: string;
      subtitle: string;
      button: string;
      discord: string;
      perks: string[];
    };
  };
  featuresPage: {
    meta: PageMeta;
    hero: {
      eyebrow: string;
      titleLine1: string;
      titleHighlight: string;
      titleLine2: string;
      directAnswerSnippet: string;
      ctaPrimary: string;
      ctaSecondary: string;
      trustHighlights: TrustHighlight[];
    };
    featuresHeading: {
      badge: string;
      title: string;
      subtitle: string;
    };
    features: HomeFeatureModule[];
    humanizationDeepDive: {
      badge: string;
      title: string;
      titleHighlight: string;
      description: string;
      bezierTitle: string;
      bezierDesc: string;
      jitterTitle: string;
      jitterDesc: string;
      safetyRecordLabel: string;
      bansCount: string;
      verifiedBadge: string;
      testSessionDesc: string;
    };
    outperform: {
      badge: string;
      title: string;
      subtitle: string;
      col1: string;
      col2: string;
      col3: string;
      rows: ComparisonRow[];
      points: OutperformPoint[];
    };
    roadmap: {
      badge: string;
      title: string;
      description: string;
      status: string;
      licenseBadge: string;
      licenseTitle: string;
      licenseDesc: string;
    };
    faqs: {
      badge: string;
      title: string;
      items: FaqItem[];
    };
    cta: {
      title: string;
      titleHighlight: string;
      subtitle: string;
      button: string;
      discord: string;
      disclaimer: string;
    };
  };
}
