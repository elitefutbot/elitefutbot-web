import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { steviesSniperData } from "@/data/competitors/steviessniper";

export const metadata: Metadata = {
  title: {
    absolute: "Stevie's Sniper vs Elite FUT SNIPER: 2026 Review",
  },
  description:
    "Stevie's Sniper vs Elite FUT SNIPER: compare one-time Silver (£29) and Gold (£69) licenses with Elite's €19.90/year extension and free trial.",
  keywords: [
    "stevies sniper",
    "steviessniper",
    "steviessniper.com",
    "stevie's sniper review",
    "stevie's sniper price",
    "stevie's sniper vs elite fut sniper",
    "ea fc 27 autobuyer",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/steviessniper-vs-elitefutbot" },
  openGraph: {
    title: "Stevie's Sniper vs Elite FUT SNIPER: 2026 Review",
    description:
      "Stevie's Sniper vs Elite FUT SNIPER: compare one-time Silver (£29) and Gold (£69) licenses with Elite's €19.90/year extension and free trial.",
    url: "https://www.elitefutbot.com/steviessniper-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stevie's Sniper vs Elite FUT SNIPER: 2026 Review",
    description:
      "Stevie's Sniper vs Elite FUT SNIPER: compare one-time Silver (£29) and Gold (£69) licenses with Elite's €19.90/year extension and free trial.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={steviesSniperData} />;
}
