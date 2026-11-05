import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { sniperBotItaliaData } from "@/data/competitors/sniperbotitalia";

export const metadata: Metadata = {
  title: {
    absolute: "SniperBot Italia vs Elite FUT SNIPER: 2026 Review",
  },
  description:
    "SniperBot Italia vs Elite FUT SNIPER: compare an Italian-language bot at €29.98 with Elite's €19.90/year extension, auto bidding and free trial.",
  keywords: [
    "sniperbot italia",
    "sniperbotitalia",
    "sniperbot italia recensione",
    "sniperbotitalia.it",
    "sniperbot italia vs elite fut sniper",
    "sniperbot fc 27",
    "ea fc 27 autobuyer",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/sniperbotitalia-vs-elitefutbot" },
  openGraph: {
    title: "SniperBot Italia vs Elite FUT SNIPER: 2026 Review",
    description:
      "SniperBot Italia vs Elite FUT SNIPER: compare an Italian-language bot at €29.98 with Elite's €19.90/year extension, auto bidding and free trial.",
    url: "https://www.elitefutbot.com/sniperbotitalia-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SniperBot Italia vs Elite FUT SNIPER: 2026 Review",
    description:
      "SniperBot Italia vs Elite FUT SNIPER: compare an Italian-language bot at €29.98 with Elite's €19.90/year extension, auto bidding and free trial.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={sniperBotItaliaData} />;
}
