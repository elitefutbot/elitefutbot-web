import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futMakerData } from "@/data/competitors/futmaker";

export const metadata: Metadata = {
  title: {
    absolute: "FUT Maker vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FUTmaker vs Elite FUT SNIPER: a Russian-language Windows transfer bot with a coin-based trial compared with Elite's Chrome extension.",
  keywords: [
    "futmaker",
    "fut maker",
    "futmaker review",
    "futmaker.com",
    "futmaker vs elite fut sniper",
    "ea fc 27 transfer bot",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futmaker-vs-elitefutbot" },
  openGraph: {
    title: "FUT Maker vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTmaker vs Elite FUT SNIPER: a Russian-language Windows transfer bot with a coin-based trial compared with Elite's Chrome extension.",
    url: "https://www.elitefutbot.com/futmaker-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Maker vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTmaker vs Elite FUT SNIPER: a Russian-language Windows transfer bot with a coin-based trial compared with Elite's Chrome extension.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futMakerData} />;
}
