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
