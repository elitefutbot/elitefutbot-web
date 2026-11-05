import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { fc27AutoTraderData } from "@/data/competitors/fc27autotrader";

export const metadata: Metadata = {
  title: {
    absolute: "FC27 Auto Trader vs Elite FUT SNIPER: 2026 Review",
  },
  description:
    "FC27 Auto Trader vs Elite FUT SNIPER: compare a small store-listed sniping bot with Elite's €19.90/year extension, auto bidder and free trial.",
  keywords: [
    "fc27 auto trader",
    "fc27autotrader",
    "fc27 auto trader review",
    "fc27 auto trader vs elite fut sniper",
    "ea fc 27 autobuyer",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/fc27autotrader-vs-elitefutbot" },
  openGraph: {
    title: "FC27 Auto Trader vs Elite FUT SNIPER: 2026 Review",
    description:
      "FC27 Auto Trader vs Elite FUT SNIPER: compare a small store-listed sniping bot with Elite's €19.90/year extension, auto bidder and free trial.",
    url: "https://www.elitefutbot.com/fc27autotrader-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FC27 Auto Trader vs Elite FUT SNIPER: 2026 Review",
    description:
      "FC27 Auto Trader vs Elite FUT SNIPER: compare a small store-listed sniping bot with Elite's €19.90/year extension, auto bidder and free trial.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={fc27AutoTraderData} />;
}
