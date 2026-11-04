import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futGgData } from "@/data/competitors/futgg";

export const metadata: Metadata = {
  title: {
    absolute: "FUT.GG vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FUT.GG vs Elite FUT SNIPER review: audit manual web database limits, lack of bot automation, and Elite's 20ms live Chrome autobuyer with AI solver.",
  keywords: [
    "fut.gg",
    "fut gg",
    "futgg review",
    "fut gg vs elite fut sniper",
    "fut gg alternative",
    "ea fc 26 sniping bot",
    "ea fc 27 autobuyer",
    "best ea fc trading bot 2026",
    "ai sbc solver extension",
    "fut price database vs sniper",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futgg-vs-elitefutbot" },
  openGraph: {
    title: "FUT.GG vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUT.GG vs Elite FUT SNIPER review: audit manual web database limits, lack of bot automation, and Elite's 20ms live Chrome autobuyer with AI solver.",
    url: "https://www.elitefutbot.com/futgg-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT.GG vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUT.GG vs Elite FUT SNIPER review: audit manual web database limits, lack of bot automation, and Elite's 20ms live Chrome autobuyer with AI solver.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futGgData} />;
}
