import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futCoinBuddyData } from "@/data/competitors/futcoinbuddy";

export const metadata: Metadata = {
  title: "Futcoinbuddy vs Elite FUT SNIPER (2026 Review): Dead Domain, Ban Risks & Speed",
  description:
    "Honest Futcoinbuddy vs Elite FUT SNIPER review. Real data on futcoinbuddy.com dead domain infrastructure, 115 users, location tracking disclosures, and sub-20ms sniping for FC 26 & FC 27.",
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
  alternates: { canonical: "https://elitefutbot.com/futcoinbuddy-vs-elitefutbot" },
  openGraph: {
    title: "Futcoinbuddy vs Elite FUT SNIPER (2026 Review): Dead Domain, Ban Risks & Speed",
    description:
      "Honest Futcoinbuddy vs Elite FUT SNIPER review. Real data on futcoinbuddy.com dead domain infrastructure, 115 users, location tracking disclosures, and sub-20ms sniping for FC 26 & FC 27.",
    url: "https://elitefutbot.com/futcoinbuddy-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Futcoinbuddy vs Elite FUT SNIPER (2026 Review): Dead Domain, Ban Risks & Speed",
    description:
      "Honest Futcoinbuddy vs Elite FUT SNIPER review. Real data on futcoinbuddy.com dead domain infrastructure, 115 users, location tracking disclosures, and sub-20ms sniping for FC 26 & FC 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futCoinBuddyData} />;
}
