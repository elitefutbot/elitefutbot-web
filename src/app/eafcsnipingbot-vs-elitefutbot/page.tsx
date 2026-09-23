import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { eafcSnipingBotData } from "@/data/competitors/eafcsnipingbot";

export const metadata: Metadata = {
  title: {
    absolute: "EAFC Sniping Bot vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "EAFC Sniping Bot vs Elite FUT SNIPER review: compare 12-hour trials, legacy DOM injection lag, sub-20ms WebSocket execution, and AI SBC solving.",
  keywords: [
    "eafc sniping bot",
    "eafc sniping bot review",
    "eafcsnipingbot.com",
    "eafc sniping bot vs elite fut sniper",
    "ea fc 27 sniping bot",
    "ea fc 27 autobuyer",
    "fut 27 autobuyer",
    "best fc 27 trading bot",
    "ai sbc solver extension",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/eafcsnipingbot-vs-elitefutbot" },
  openGraph: {
    title: "EAFC Sniping Bot vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "EAFC Sniping Bot vs Elite FUT SNIPER review: compare 12-hour trials, legacy DOM injection lag, sub-20ms WebSocket execution, and AI SBC solving.",
    url: "https://www.elitefutbot.com/eafcsnipingbot-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EAFC Sniping Bot vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "EAFC Sniping Bot vs Elite FUT SNIPER review: compare 12-hour trials, legacy DOM injection lag, sub-20ms WebSocket execution, and AI SBC solving.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={eafcSnipingBotData} />;
}
