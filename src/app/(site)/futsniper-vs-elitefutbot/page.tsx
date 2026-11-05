import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futSniperData } from "@/data/competitors/futsniper";

export const metadata: Metadata = {
  title: {
    absolute: "FUT Sniper vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FUTSniper and FUT SNIPER BOT vs Elite FUT SNIPER: compare futsniper.online ($4.99+/month, 3-day trial) and futsniperbot.com (24h free) with Elite.",
  keywords: [
    "futsniper",
    "fut sniper",
    "futsniper review",
    "futsniper.online",
    "futsniperbot.com",
    "fut sniper bot",
    "futsniper pricing",
    "futsniper vs elite fut sniper",
    "ea fc 27 autobuyer",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futsniper-vs-elitefutbot" },
  openGraph: {
    title: "FUT Sniper vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTSniper and FUT SNIPER BOT vs Elite FUT SNIPER: compare futsniper.online ($4.99+/month, 3-day trial) and futsniperbot.com (24h free) with Elite.",
    url: "https://www.elitefutbot.com/futsniper-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Sniper vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTSniper and FUT SNIPER BOT vs Elite FUT SNIPER: compare futsniper.online ($4.99+/month, 3-day trial) and futsniperbot.com (24h free) with Elite.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futSniperData} />;
}
