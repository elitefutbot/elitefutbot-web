import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futTradeBuddyData } from "@/data/competitors/futtradebuddy";

export const metadata: Metadata = {
  title: "FUT Trade Buddy vs Elite FUT SNIPER (2026 Review): Bidding Tool vs 20ms AI Bot",
  description:
    "FUT Trade Buddy vs Elite FUT SNIPER comparison. Real technical audit of linear delay soft bans, single-filter bidding limitations, 70ms–110ms click lag, and Elite's sub-20ms Chrome Side Panel with neural AI SBC solver.",
  keywords: [
    "fut trade buddy",
    "fut trade buddy review",
    "futtradebuddy",
    "fut trade buddy chrome extension",
    "fut trade buddy vs elite fut sniper",
    "fut trade buddy alternative",
    "ea fc 26 autobuyer",
    "ea fc 27 sniping bot",
    "best ea fc trading bot 2026",
    "ai sbc solver chrome extension",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futtradebuddy-vs-elitefutbot" },
  openGraph: {
    title: "FUT Trade Buddy vs Elite FUT SNIPER (2026 Review): Bidding Tool vs 20ms AI Bot",
    description:
      "FUT Trade Buddy vs Elite FUT SNIPER comparison. Real technical audit of linear delay soft bans, single-filter bidding limitations, 70ms–110ms click lag, and Elite's sub-20ms Chrome Side Panel with neural AI SBC solver.",
    url: "https://www.elitefutbot.com/futtradebuddy-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Trade Buddy vs Elite FUT SNIPER (2026 Review): Bidding Tool vs 20ms AI Bot",
    description:
      "FUT Trade Buddy vs Elite FUT SNIPER comparison. Real technical audit of linear delay soft bans, single-filter bidding limitations, 70ms–110ms click lag, and Elite's sub-20ms Chrome Side Panel with neural AI SBC solver.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futTradeBuddyData} />;
}
