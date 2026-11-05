import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { utSniperData } from "@/data/competitors/utsniper";

export const metadata: Metadata = {
  title: {
    absolute: "UTSniper vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "UTSniper vs Elite FUT SNIPER: compare a 1-week trial, Standard and Gold tiers and SBC solver with Elite's €19.90/year extension.",
  keywords: [
    "utsniper",
    "ut sniper",
    "utsniper review",
    "utsniper pricing",
    "utsniper vs elite fut sniper",
    "utsniper free trial",
    "ea fc 27 autobuyer",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/utsniper-vs-elitefutbot" },
  openGraph: {
    title: "UTSniper vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "UTSniper vs Elite FUT SNIPER: compare a 1-week trial, Standard and Gold tiers and SBC solver with Elite's €19.90/year extension.",
    url: "https://www.elitefutbot.com/utsniper-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "UTSniper vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "UTSniper vs Elite FUT SNIPER: compare a 1-week trial, Standard and Gold tiers and SBC solver with Elite's €19.90/year extension.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={utSniperData} />;
}
