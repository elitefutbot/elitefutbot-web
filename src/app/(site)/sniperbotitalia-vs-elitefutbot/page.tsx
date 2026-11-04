import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { sniperBotItaliaData } from "@/data/competitors/sniperbotitalia";

export const metadata: Metadata = {
  title: {
    absolute: "SniperBot Italia vs Elite FUT SNIPER: 2026 Review",
  },
  description:
    "SniperBot Italia vs Elite FUT SNIPER review: audit unverified Telegram scripts, locale crashes, and Elite's universal 20ms Chrome bot with AI solver.",
  keywords: [
    "sniperbot italia",
    "sniper bot italia",
    "sniperbot italia recensione",
    "sniperbot italia vs elite fut sniper",
    "sniperbot italia alternative",
    "bot compravendita fifa",
    "ea fc 26 bot compravendita",
    "ea fc 27 autobuyer",
    "best ea fc trading bot 2026",
    "universal fut sniping bot",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/sniperbotitalia-vs-elitefutbot" },
  openGraph: {
    title: "SniperBot Italia vs Elite FUT SNIPER: 2026 Review",
    description:
      "SniperBot Italia vs Elite FUT SNIPER review: audit unverified Telegram scripts, locale crashes, and Elite's universal 20ms Chrome bot with AI solver.",
    url: "https://www.elitefutbot.com/sniperbotitalia-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SniperBot Italia vs Elite FUT SNIPER: 2026 Review",
    description:
      "SniperBot Italia vs Elite FUT SNIPER review: audit unverified Telegram scripts, locale crashes, and Elite's universal 20ms Chrome bot with AI solver.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={sniperBotItaliaData} />;
}
