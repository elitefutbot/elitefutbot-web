import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { steviesSniperData } from "@/data/competitors/steviessniper";

export const metadata: Metadata = {
  title: {
    absolute: "Stevie's Sniper vs Elite FUT SNIPER: 2026 Review",
  },
  description:
    "Stevie's Sniper vs Elite FUT SNIPER review: audit £50 Gold filter paywalls, 2% ban rates, search caps, and Elite's sub-20ms Side Panel with AI.",
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
  alternates: { canonical: "https://www.elitefutbot.com/steviessniper-vs-elitefutbot" },
  openGraph: {
    title: "Stevie's Sniper vs Elite FUT SNIPER: 2026 Review",
    description:
      "Stevie's Sniper vs Elite FUT SNIPER review: audit £50 Gold filter paywalls, 2% ban rates, search caps, and Elite's sub-20ms Side Panel with AI.",
    url: "https://www.elitefutbot.com/steviessniper-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stevie's Sniper vs Elite FUT SNIPER: 2026 Review",
    description:
      "Stevie's Sniper vs Elite FUT SNIPER review: audit £50 Gold filter paywalls, 2% ban rates, search caps, and Elite's sub-20ms Side Panel with AI.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={steviesSniperData} />;
}
