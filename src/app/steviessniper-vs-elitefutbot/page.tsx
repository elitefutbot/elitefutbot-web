import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { steviesSniperData } from "@/data/competitors/steviessniper";

export const metadata: Metadata = {
  title: "Stevie's Sniper vs Elite FUT SNIPER (2026 Review): Paywalled Filters & Ban Risks",
  description:
    "Stevie's Sniper vs Elite FUT SNIPER comparison. Real audit of steviessniper.com £50 Gold filter paywall, admitted 2% ban rate, season-long market lockouts, 4,500 daily search cap, and sub-20ms Side Panel HUD for EA FC 26 & FC 27.",
  keywords: [
    "stevies sniper",
    "stevie's sniper",
    "stevies sniper review",
    "steviessniper.com",
    "stevies sniper ban",
    "is stevies sniper safe",
    "stevies sniper vs elite fut sniper",
    "ea fc 26 sniping bot",
    "ea fc 27 autobuyer",
    "stevies sniper filters",
    "stevies sniper pricing",
    "stevies sniper silver gold tier",
  ],
  alternates: { canonical: "https://elitefutbot.com/steviessniper-vs-elitefutbot" },
  openGraph: {
    title: "Stevie's Sniper vs Elite FUT SNIPER (2026 Review): Paywalled Filters & Ban Risks",
    description:
      "Stevie's Sniper vs Elite FUT SNIPER comparison. Real audit of steviessniper.com £50 Gold filter paywall, admitted 2% ban rate, season-long market lockouts, 4,500 daily search cap, and sub-20ms Side Panel HUD for EA FC 26 & FC 27.",
    url: "https://elitefutbot.com/steviessniper-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stevie's Sniper vs Elite FUT SNIPER (2026 Review): Paywalled Filters & Ban Risks",
    description:
      "Stevie's Sniper vs Elite FUT SNIPER comparison. Real audit of steviessniper.com £50 Gold filter paywall, admitted 2% ban rate, season-long market lockouts, 4,500 daily search cap, and sub-20ms Side Panel HUD for EA FC 26 & FC 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={steviesSniperData} />;
}
