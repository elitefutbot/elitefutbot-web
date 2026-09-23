import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { snipeSenseiData } from "@/data/competitors/snipesensei";

export const metadata: Metadata = {
  title: {
    absolute: "Snipe Sensei vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "Snipe Sensei vs Elite FUT SNIPER review: compare £24.99 email script fees, DOM delays, ban risks, and Elite's sub-20ms Side Panel HUD with AI solver.",
  keywords: [
    "snipe sensei",
    "snipesensei",
    "snipe sensei review",
    "snipesensei.com",
    "snipe sensei bot",
    "snipe sensei tiktok",
    "is snipe sensei safe",
    "snipe sensei ban",
    "snipe sensei vs elite fut sniper",
    "ea fc 26 sniping bot",
    "ea fc 27 autobuyer",
    "snipe sensei pricing",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/snipesensei-vs-elitefutbot" },
  openGraph: {
    title: "Snipe Sensei vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "Snipe Sensei vs Elite FUT SNIPER review: compare £24.99 email script fees, DOM delays, ban risks, and Elite's sub-20ms Side Panel HUD with AI solver.",
    url: "https://www.elitefutbot.com/snipesensei-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Snipe Sensei vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "Snipe Sensei vs Elite FUT SNIPER review: compare £24.99 email script fees, DOM delays, ban risks, and Elite's sub-20ms Side Panel HUD with AI solver.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={snipeSenseiData} />;
}
