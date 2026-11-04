import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { fc27AutoTraderData } from "@/data/competitors/fc27autotrader";

export const metadata: Metadata = {
  title: {
    absolute: "FC27 Auto Trader vs Elite FUT SNIPER: 2026 Review",
  },
  description:
    "FC27 Auto Trader vs Elite FUT SNIPER review: compare linear delay soft bans, webhook risks, and Elite's sub-20ms Chrome Side Panel with AI solver.",
  keywords: [
    "fc27 auto trader",
    "fc 27 auto trader",
    "fc27 auto trader review",
    "data menu fc27 auto trader",
    "fc27 auto trader vs elite fut sniper",
    "fc27 auto trader alternative",
    "ea fc 27 autobuyer",
    "ea fc 27 sniping bot",
    "best ea fc trading bot 2026",
    "ai sbc solver chrome extension",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/fc27autotrader-vs-elitefutbot" },
  openGraph: {
    title: "FC27 Auto Trader vs Elite FUT SNIPER: 2026 Review",
    description:
      "FC27 Auto Trader vs Elite FUT SNIPER review: compare linear delay soft bans, webhook risks, and Elite's sub-20ms Chrome Side Panel with AI solver.",
    url: "https://www.elitefutbot.com/fc27autotrader-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FC27 Auto Trader vs Elite FUT SNIPER: 2026 Review",
    description:
      "FC27 Auto Trader vs Elite FUT SNIPER review: compare linear delay soft bans, webhook risks, and Elite's sub-20ms Chrome Side Panel with AI solver.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={fc27AutoTraderData} />;
}
