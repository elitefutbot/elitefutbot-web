import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { fcEnhancerData } from "@/data/competitors/fcenhancer";

export const metadata: Metadata = {
  title: {
    absolute: "FC Enhancer vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FC Enhancer vs Elite FUT SNIPER comparison: audit UI overlay clogs, click lag, and Elite's sub-20ms docked Chrome Side Panel with neural AI SBC solver.",
  keywords: [
    "fc enhancer",
    "fc26 enhancer",
    "fc 26 enhancer",
    "fc26 enhancer review",
    "fc enhancer review",
    "fut enhancer",
    "futnext fc enhancer",
    "fc enhancer vs elite fut sniper",
    "fc26 enhancer vs elite fut sniper",
    "fc enhancer alternative",
    "ea fc 26 sniping bot",
    "ea fc 27 autobuyer",
    "best ea fc trading bot 2026",
    "ai sbc solver chrome extension",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/fcenhancer-vs-elitefutbot" },
  openGraph: {
    title: "FC Enhancer vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FC Enhancer vs Elite FUT SNIPER comparison: audit UI overlay clogs, click lag, and Elite's sub-20ms docked Chrome Side Panel with neural AI SBC solver.",
    url: "https://www.elitefutbot.com/fcenhancer-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FC Enhancer vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FC Enhancer vs Elite FUT SNIPER comparison: audit UI overlay clogs, click lag, and Elite's sub-20ms docked Chrome Side Panel with neural AI SBC solver.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={fcEnhancerData} />;
}
