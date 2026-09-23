import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { magicBuyerData } from "@/data/competitors/magicbuyer";

export const metadata: Metadata = {
  title: {
    absolute: "MagicBuyer vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "MagicBuyer vs Elite FUT SNIPER review: compare Tampermonkey thread locking, soft ban warnings, and Elite's sub-20ms Chrome Side Panel with AI solver.",
  keywords: [
    "magicbuyer",
    "magicbuyer ut",
    "magicbuyer review",
    "magicbuyer vs elite fut sniper",
    "magicbuyer alternative",
    "ea fc 26 autobuyer",
    "ea fc 27 sniping bot",
    "tampermonkey fut autobuyer",
    "best ea fc trading bot 2026",
    "ai sbc solver chrome extension",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/magicbuyer-vs-elitefutbot" },
  openGraph: {
    title: "MagicBuyer vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "MagicBuyer vs Elite FUT SNIPER review: compare Tampermonkey thread locking, soft ban warnings, and Elite's sub-20ms Chrome Side Panel with AI solver.",
    url: "https://www.elitefutbot.com/magicbuyer-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MagicBuyer vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "MagicBuyer vs Elite FUT SNIPER review: compare Tampermonkey thread locking, soft ban warnings, and Elite's sub-20ms Chrome Side Panel with AI solver.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={magicBuyerData} />;
}
