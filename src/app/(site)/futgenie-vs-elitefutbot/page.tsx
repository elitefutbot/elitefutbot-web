import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futGenieData } from "@/data/competitors/futgenie";

export const metadata: Metadata = {
  title: {
    absolute: "FUT Genie vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FUTGenie vs Elite FUT SNIPER: FUTGenie solves SBCs and opens packs, Elite snipes, bids and relists. Compare features, pricing and trials.",
  keywords: [
    "fut genie",
    "futgenie",
    "fut genie review",
    "fut genie vs elite fut sniper",
    "futgenie sbc solver",
    "futgenie pricing",
    "ea fc 27 autobuyer",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futgenie-vs-elitefutbot" },
  openGraph: {
    title: "FUT Genie vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTGenie vs Elite FUT SNIPER: FUTGenie solves SBCs and opens packs, Elite snipes, bids and relists. Compare features, pricing and trials.",
    url: "https://www.elitefutbot.com/futgenie-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Genie vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTGenie vs Elite FUT SNIPER: FUTGenie solves SBCs and opens packs, Elite snipes, bids and relists. Compare features, pricing and trials.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futGenieData} />;
}
