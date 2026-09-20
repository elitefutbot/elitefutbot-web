import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futMillionaireData } from "@/data/competitors/futmillionaire";

export const metadata: Metadata = {
  title: "FUTMillionaire vs Elite FUT SNIPER (2026 Review): Desktop App vs 20ms Bot",
  description:
    "FUTMillionaire vs Elite FUT SNIPER comparison. Real technical audit of 850MB desktop software, $22.90/mo recurring fees, WebDriver lag (120ms+), and Elite's <40MB in-browser 20ms Chrome Side Panel with AI SBC solver.",
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
    title: "FUTMillionaire vs Elite FUT SNIPER (2026 Review): Desktop App vs 20ms Bot",
    description:
      "FUTMillionaire vs Elite FUT SNIPER comparison. Real technical audit of 850MB desktop software, $22.90/mo recurring fees, WebDriver lag (120ms+), and Elite's <40MB in-browser 20ms Chrome Side Panel with AI SBC solver.",
    url: "https://www.elitefutbot.com/futmillionaire-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUTMillionaire vs Elite FUT SNIPER (2026 Review): Desktop App vs 20ms Bot",
    description:
      "FUTMillionaire vs Elite FUT SNIPER comparison. Real technical audit of 850MB desktop software, $22.90/mo recurring fees, WebDriver lag (120ms+), and Elite's <40MB in-browser 20ms Chrome Side Panel with AI SBC solver.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futMillionaireData} />;
}
