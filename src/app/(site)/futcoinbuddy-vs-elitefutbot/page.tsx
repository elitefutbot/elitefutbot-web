import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futCoinBuddyData } from "@/data/competitors/futcoinbuddy";

export const metadata: Metadata = {
  title: {
    absolute: "Futcoinbuddy vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FUTCoinBuddy vs Elite FUT SNIPER review: compare macro click lag, soft bans, and Elite's autonomous sub-20ms Chrome Side Panel with neural AI solver.",
  keywords: [
    "futcoinbuddy",
    "futcoinbuddy review",
    "futcoinbuddy chrome extension",
    "futcoinbuddy.com",
    "futcoinbuddy ban",
    "is futcoinbuddy safe",
    "futcoinbuddy vs elite fut sniper",
    "ea fc 26 sniping bot",
    "ea fc 27 autobuyer",
    "ai sbc solver",
    "futcoinbuddy download",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futcoinbuddy-vs-elitefutbot" },
  openGraph: {
    title: "Futcoinbuddy vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTCoinBuddy vs Elite FUT SNIPER review: compare macro click lag, soft bans, and Elite's autonomous sub-20ms Chrome Side Panel with neural AI solver.",
    url: "https://www.elitefutbot.com/futcoinbuddy-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Futcoinbuddy vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTCoinBuddy vs Elite FUT SNIPER review: compare macro click lag, soft bans, and Elite's autonomous sub-20ms Chrome Side Panel with neural AI solver.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futCoinBuddyData} />;
}
