import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { remxData } from "@/data/competitors/remx";

export const metadata: Metadata = {
  title: {
    absolute: "RemX Sniping Bot vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "RemX vs Elite FUT SNIPER review: compare paywalled VIP filter groups, Shopify upsells, sub-20ms Chrome speed, and all-in-one AI SBC solving.",
  keywords: [
    "remx sniping bot",
    "remx bot review",
    "snipingboteafc.com",
    "remx vs elite fut sniper",
    "remx ea fc 27 autobuyer",
    "remx trading tips",
    "ea fc 27 sniping bot",
    "best ea fc autobuyer 2026",
    "ai sbc solver extension",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/remx-vs-elitefutbot" },
  openGraph: {
    title: "RemX Sniping Bot vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "RemX vs Elite FUT SNIPER review: compare paywalled VIP filter groups, Shopify upsells, sub-20ms Chrome speed, and all-in-one AI SBC solving.",
    url: "https://www.elitefutbot.com/remx-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RemX Sniping Bot vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "RemX vs Elite FUT SNIPER review: compare paywalled VIP filter groups, Shopify upsells, sub-20ms Chrome speed, and all-in-one AI SBC solving.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={remxData} />;
}
