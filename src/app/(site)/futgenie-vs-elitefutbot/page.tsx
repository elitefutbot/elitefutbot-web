import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futGenieData } from "@/data/competitors/futgenie";

export const metadata: Metadata = {
  title: {
    absolute: "FUT Genie vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FUTGenie vs Elite FUT SNIPER review: compare manual price lookups, lack of auto-buy, and Elite's autonomous sub-20ms Chrome extension with AI solver.",
  keywords: [
    "fut genie",
    "futgenie",
    "fut genie review",
    "fut genie vs elite fut sniper",
    "futbin price overlay extension",
    "ea fc 26 sniping bot",
    "ea fc 27 autobuyer",
    "best ea fc trading bot 2026",
    "fut price badge overlay",
    "ai sbc solver chrome extension",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futgenie-vs-elitefutbot" },
  openGraph: {
    title: "FUT Genie vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTGenie vs Elite FUT SNIPER review: compare manual price lookups, lack of auto-buy, and Elite's autonomous sub-20ms Chrome extension with AI solver.",
    url: "https://www.elitefutbot.com/futgenie-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Genie vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTGenie vs Elite FUT SNIPER review: compare manual price lookups, lack of auto-buy, and Elite's autonomous sub-20ms Chrome extension with AI solver.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futGenieData} />;
}
