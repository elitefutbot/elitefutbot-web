import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futSimpleTraderData } from "@/data/competitors/futsimpletrader";

export const metadata: Metadata = {
  title: {
    absolute: "FUT Simple Trader vs Elite FUT SNIPER: 2026 Review",
  },
  description:
    "FUT Simple Trader vs Elite FUT SNIPER review: compare ban risks, pricing checks, external UI, and Elite's sub-20ms Chrome extension with AI solver.",
  keywords: [
    "fut simple trader",
    "futsimpletrader",
    "futsimpletrader.com",
    "fut simple trader review",
    "fut simple trader ban",
    "fut simple trader autobuyer",
    "futsimpletrader vs elite fut sniper",
    "is fut simple trader safe fc 26",
    "fc 26 sniping bot",
    "fc 27 autobuyer",
    "ai sbc solver",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futsimpletrader-vs-elitefutbot" },
  openGraph: {
    title: "FUT Simple Trader vs Elite FUT SNIPER: 2026 Review",
    description:
      "FUT Simple Trader vs Elite FUT SNIPER review: compare ban risks, pricing checks, external UI, and Elite's sub-20ms Chrome extension with AI solver.",
    url: "https://www.elitefutbot.com/futsimpletrader-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Simple Trader vs Elite FUT SNIPER: 2026 Review",
    description:
      "FUT Simple Trader vs Elite FUT SNIPER review: compare ban risks, pricing checks, external UI, and Elite's sub-20ms Chrome extension with AI solver.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futSimpleTraderData} />;
}
