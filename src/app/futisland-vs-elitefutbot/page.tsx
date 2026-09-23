import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futIslandData } from "@/data/competitors/futisland";

export const metadata: Metadata = {
  title: {
    absolute: "FUT ISLAND vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FUTIsland vs Elite FUT SNIPER review: audit Discord paywalls, outdated filters, and Elite's unified 20ms Chrome Side Panel with neural AI SBC solver.",
  keywords: [
    "fut island",
    "fut island sniping bot",
    "futisland",
    "futisland review",
    "fut island vs elite fut sniper",
    "fut island alternative",
    "ea fc 26 autobuyer",
    "ea fc 27 sniping bot",
    "best ea fc trading bot 2026",
    "ai sbc solver chrome extension",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futisland-vs-elitefutbot" },
  openGraph: {
    title: "FUT ISLAND vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTIsland vs Elite FUT SNIPER review: audit Discord paywalls, outdated filters, and Elite's unified 20ms Chrome Side Panel with neural AI SBC solver.",
    url: "https://www.elitefutbot.com/futisland-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT ISLAND vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTIsland vs Elite FUT SNIPER review: audit Discord paywalls, outdated filters, and Elite's unified 20ms Chrome Side Panel with neural AI SBC solver.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futIslandData} />;
}
