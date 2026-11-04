import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { eafcSniperData } from "@/data/competitors/eafcsniper";

export const metadata: Metadata = {
  title: {
    absolute: "EAFC Sniper vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "EAFC Sniper vs Elite FUT SNIPER review: audit seasonal re-buy fees, overlay banners, script lag, and Elite's 20ms Chrome Side Panel with AI solver.",
  keywords: [
    "eafc sniper",
    "eafcsniper",
    "futsnipe",
    "store futsnipe",
    "eafc sniper review",
    "eafc sniper vs elite fut sniper",
    "eafc sniper alternative",
    "ea fc 26 sniping bot",
    "ea fc 27 autobuyer",
    "best ea fc trading bot 2026",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/eafcsniper-vs-elitefutbot" },
  openGraph: {
    title: "EAFC Sniper vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "EAFC Sniper vs Elite FUT SNIPER review: audit seasonal re-buy fees, overlay banners, script lag, and Elite's 20ms Chrome Side Panel with AI solver.",
    url: "https://www.elitefutbot.com/eafcsniper-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EAFC Sniper vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "EAFC Sniper vs Elite FUT SNIPER review: audit seasonal re-buy fees, overlay banners, script lag, and Elite's 20ms Chrome Side Panel with AI solver.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={eafcSniperData} />;
}
