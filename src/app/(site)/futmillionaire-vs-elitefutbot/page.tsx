import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futMillionaireData } from "@/data/competitors/futmillionaire";

export const metadata: Metadata = {
  title: {
    absolute: "FUTMillionaire vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FUTMillionaire vs Elite FUT SNIPER review: audit 850MB desktop software, recurring monthly fees, and Elite's lightweight 20ms Chrome Side Panel with AI.",
  keywords: [
    "futmillionaire",
    "fut millionaire",
    "futmillionaire review",
    "futmillionaire vs elite fut sniper",
    "futmillionaire trading center",
    "futmillionaire alternative",
    "ea fc 26 desktop bot",
    "ea fc 27 autobuyer",
    "best ea fc trading bot 2026",
    "in browser fut sniper",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futmillionaire-vs-elitefutbot" },
  openGraph: {
    title: "FUTMillionaire vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTMillionaire vs Elite FUT SNIPER review: audit 850MB desktop software, recurring monthly fees, and Elite's lightweight 20ms Chrome Side Panel with AI.",
    url: "https://www.elitefutbot.com/futmillionaire-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUTMillionaire vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTMillionaire vs Elite FUT SNIPER review: audit 850MB desktop software, recurring monthly fees, and Elite's lightweight 20ms Chrome Side Panel with AI.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futMillionaireData} />;
}
