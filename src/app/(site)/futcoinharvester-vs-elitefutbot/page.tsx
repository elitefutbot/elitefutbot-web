import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futCoinHarvesterData } from "@/data/competitors/futcoinharvester";

export const metadata: Metadata = {
  title: {
    absolute: "FUT Coin Harvester vs Elite FUT SNIPER: 2026 Review",
  },
  description:
    "FUT Coin Harvester vs Elite FUT SNIPER: a Windows trading bot compared with a Chrome extension. See pricing, trials, bidding and relisting.",
  keywords: [
    "fut coin harvester",
    "futcoinharvester",
    "fut coin harvester review",
    "futcoinharvester.com",
    "fut coin harvester vs elite fut sniper",
    "fut coin harvester pricing",
    "ea fc 27 autobuyer",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futcoinharvester-vs-elitefutbot" },
  openGraph: {
    title: "FUT Coin Harvester vs Elite FUT SNIPER: 2026 Review",
    description:
      "FUT Coin Harvester vs Elite FUT SNIPER: a Windows trading bot compared with a Chrome extension. See pricing, trials, bidding and relisting.",
    url: "https://www.elitefutbot.com/futcoinharvester-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Coin Harvester vs Elite FUT SNIPER: 2026 Review",
    description:
      "FUT Coin Harvester vs Elite FUT SNIPER: a Windows trading bot compared with a Chrome extension. See pricing, trials, bidding and relisting.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futCoinHarvesterData} />;
}
