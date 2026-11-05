import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futCoinBuddyData } from "@/data/competitors/futcoinbuddy";

export const metadata: Metadata = {
  title: {
    absolute: "Futcoinbuddy vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "Futcoinbuddy vs Elite FUT SNIPER: the Futcoinbuddy store listing was removed in September 2026. Compare with Elite's available €19.90/year extension.",
  keywords: [
    "futcoinbuddy",
    "fut coin buddy",
    "futcoinbuddy review",
    "futcoinbuddy chrome extension",
    "futcoinbuddy vs elite fut sniper",
    "ea fc 27 autobuyer",
  ],
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.elitefutbot.com/futcoinbuddy-vs-elitefutbot" },
  openGraph: {
    title: "Futcoinbuddy vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "Futcoinbuddy vs Elite FUT SNIPER: the Futcoinbuddy store listing was removed in September 2026. Compare with Elite's available €19.90/year extension.",
    url: "https://www.elitefutbot.com/futcoinbuddy-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Futcoinbuddy vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "Futcoinbuddy vs Elite FUT SNIPER: the Futcoinbuddy store listing was removed in September 2026. Compare with Elite's available €19.90/year extension.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futCoinBuddyData} />;
}
