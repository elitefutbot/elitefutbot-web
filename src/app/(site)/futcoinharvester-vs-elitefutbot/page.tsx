import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futCoinHarvesterData } from "@/data/competitors/futcoinharvester";

export const metadata: Metadata = {
  title: {
    absolute: "FUT Coin Harvester vs Elite FUT SNIPER: 2026 Review",
  },
  description:
    "FUT Coin Harvester vs Elite FUT SNIPER: compare desktop macro risks, laggy searches, and Elite's sub-20ms local Chrome extension with AI SBC solver.",
  keywords: [
    "fut coin harvester",
    "fut coin harvester review",
    "futcoinharvester",
    "fut coin harvester vs elite fut sniper",
    "fut coin harvester alternative",
    "ea fc 26 autobuyer",
    "ea fc 27 sniping bot",
    "cloud autobuyer ban risk",
    "best ea fc trading bot 2026",
    "ai sbc solver chrome extension",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futcoinharvester-vs-elitefutbot" },
  openGraph: {
    title: "FUT Coin Harvester vs Elite FUT SNIPER: 2026 Review",
    description:
      "FUT Coin Harvester vs Elite FUT SNIPER: compare desktop macro risks, laggy searches, and Elite's sub-20ms local Chrome extension with AI SBC solver.",
    url: "https://www.elitefutbot.com/futcoinharvester-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Coin Harvester vs Elite FUT SNIPER: 2026 Review",
    description:
      "FUT Coin Harvester vs Elite FUT SNIPER: compare desktop macro risks, laggy searches, and Elite's sub-20ms local Chrome extension with AI SBC solver.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futCoinHarvesterData} />;
}
