import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { eafcSniperData } from "@/data/competitors/eafcsniper";

export const metadata: Metadata = {
  title: "EAFC Sniper vs Elite FUT SNIPER (2026 Review): Seasonal Re-Buys vs 20ms AI Bot",
  description:
    "EAFC Sniper vs Elite FUT SNIPER comparison. Real technical audit of title-locked seasonal re-buy fees ($35–$45), screen overlay banners, 50ms–100ms script lag, and Elite's unified 365-day 20ms Chrome Side Panel with AI SBC solver.",
  keywords: [
    "eafc sniper",
    "eafcsniper",
    "futsnipe",
    "store futsnipe",
    "eafc sniper review",
    "eafc sniper vs elite fut sniper",
    "eafc sniper alternative",
    "ea fc 26 sniping bot",
    "ea fc 27 autobuyer",
    "best ea fc trading bot 2026",
  ],
  alternates: { canonical: "https://elitefutbot.com/eafcsniper-vs-elitefutbot" },
  openGraph: {
    title: "EAFC Sniper vs Elite FUT SNIPER (2026 Review): Seasonal Re-Buys vs 20ms AI Bot",
    description:
      "EAFC Sniper vs Elite FUT SNIPER comparison. Real technical audit of title-locked seasonal re-buy fees ($35–$45), screen overlay banners, 50ms–100ms script lag, and Elite's unified 365-day 20ms Chrome Side Panel with AI SBC solver.",
    url: "https://elitefutbot.com/eafcsniper-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EAFC Sniper vs Elite FUT SNIPER (2026 Review): Seasonal Re-Buys vs 20ms AI Bot",
    description:
      "EAFC Sniper vs Elite FUT SNIPER comparison. Real technical audit of title-locked seasonal re-buy fees ($35–$45), screen overlay banners, 50ms–100ms script lag, and Elite's unified 365-day 20ms Chrome Side Panel with AI SBC solver.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={eafcSniperData} />;
}
