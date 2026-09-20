import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { snipeSenseiData } from "@/data/competitors/snipesensei";

export const metadata: Metadata = {
  title: "Snipe Sensei vs Elite FUT SNIPER (2026 Review): TikTok Bot vs 20ms AI Sniper",
  description:
    "Snipe Sensei vs Elite FUT SNIPER comparison. Real audit of snipesensei.com £24.99 ($32.50) email script, mechanical DOM delays, alt-account ban risks, and sub-20ms Side Panel HUD for EA FC 26 & FC 27.",
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
    title: "Snipe Sensei vs Elite FUT SNIPER (2026 Review): TikTok Bot vs 20ms AI Sniper",
    description:
      "Snipe Sensei vs Elite FUT SNIPER comparison. Real audit of snipesensei.com £24.99 ($32.50) email script, mechanical DOM delays, alt-account ban risks, and sub-20ms Side Panel HUD for EA FC 26 & FC 27.",
    url: "https://www.elitefutbot.com/snipesensei-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Snipe Sensei vs Elite FUT SNIPER (2026 Review): TikTok Bot vs 20ms AI Sniper",
    description:
      "Snipe Sensei vs Elite FUT SNIPER comparison. Real audit of snipesensei.com £24.99 ($32.50) email script, mechanical DOM delays, alt-account ban risks, and sub-20ms Side Panel HUD for EA FC 26 & FC 27.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={snipeSenseiData} />;
}
