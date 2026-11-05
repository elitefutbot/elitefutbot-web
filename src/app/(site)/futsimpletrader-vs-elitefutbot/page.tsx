import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futSimpleTraderData } from "@/data/competitors/futsimpletrader";

export const metadata: Metadata = {
  title: {
    absolute: "FUT Simple Trader vs Elite FUT SNIPER: 2026 Review",
  },
  description:
    "FUT Simple Trader vs Elite FUT SNIPER: compare Pro and Premium tiers (€89 to €119 + VAT a year) with Elite's €19.90/year sniping extension.",
  keywords: [
    "fut simple trader",
    "futsimpletrader",
    "fut simple trader review",
    "fut simple trader pricing",
    "fut simple trader vs elite fut sniper",
    "ea fc 27 sniping bot",
    "ea fc 27 autobuyer",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futsimpletrader-vs-elitefutbot" },
  openGraph: {
    title: "FUT Simple Trader vs Elite FUT SNIPER: 2026 Review",
    description:
      "FUT Simple Trader vs Elite FUT SNIPER: compare Pro and Premium tiers (€89 to €119 + VAT a year) with Elite's €19.90/year sniping extension.",
    url: "https://www.elitefutbot.com/futsimpletrader-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Simple Trader vs Elite FUT SNIPER: 2026 Review",
    description:
      "FUT Simple Trader vs Elite FUT SNIPER: compare Pro and Premium tiers (€89 to €119 + VAT a year) with Elite's €19.90/year sniping extension.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futSimpleTraderData} />;
}
