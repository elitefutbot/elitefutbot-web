export interface CompetitorData {
  slug: string;
  competitorName: string;
  competitorType: "cloud" | "local" | "extension" | "web-app" | "userscript" | "desktop-app" | "database" | "discord-alerts";
  tagline: string;
  summaryPassage?: string; // 40-60 word GEO/AEO direct answer passage
  verdict: string;
  publishedDate: string;
  modifiedDate: string;
  fc27SupportNote: string;
  
  competitorOverview?: string;
  competitorPros?: string[];
  competitorCons?: string[];
  elitePros?: string[];
  idealFor?: {
    competitor: string;
    elite: string;
  };
  architectureDeepDive?: {
    title: string;
    explanation: string;
  };
  pricingComparison?: {
    competitorPricing: string;
    elitePricing: string;
    difference: string;
  };

  // Developer Origin Story Callout (e.g. 5 years developing Baker's Bot)
  developerOriginNote?: {
    headline: string;
    badge: string;
    text: string;
    linkUrl: string;
    linkText: string;
  };

  // Real Issues & Community Complaints (e.g. Bans, Outdated UI, Stale Codebase)
  communityIssuesAudit?: {
    headline: string;
    subheadline: string;
    issues: {
      title: string;
      badge: string;
      severity: "high" | "critical" | "warning";
      competitorFlaw: string;
      eliteSolution: string;
    }[];
  };

  // Real Teardown of Competitor's 12 Advertised Features vs Elite
  advertisedFeaturesAudit?: {
    headline: string;
    subheadline: string;
    features: {
      advertisedName: string;
      competitorReality: string;
      eliteAdvantage: string;
    }[];
  };

  // UI / Ergonomics Teardown (Injected Floating Buttons vs Docked Chrome Side Panel HUD)
  uiComparison?: {
    headline: string;
    subheadline: string;
    competitorUi: {
      title: string;
      badge: string;
      description: string;
      drawbacks: string[];
    };
    eliteUi: {
      title: string;
      badge: string;
      description: string;
      benefits: string[];
    };
  };

  // Detailed Pricing Teardown
  pricingTeardown?: {
    headline: string;
    subheadline: string;
    competitorModel: {
      title: string;
      price: string;
      hiddenCosts: string[];
    };
    eliteModel: {
      title: string;
      price: string;
      inclusions: string[];
    };
    summary: string;
  };

  keyStatistics: {
    label: string;
    value: string;
    source?: string;
  }[];

  citations: {
    label: string;
    url: string;
  }[];

  comparisonRows: {
    feature: string;
    elite: string | boolean;
    competitor: string | boolean;
    winner: "elite" | "competitor" | "tie";
  }[];

  faqs: { question: string; answer: string }[];
  reviewQuotes: { text: string; author: string; platform: string }[];
}
