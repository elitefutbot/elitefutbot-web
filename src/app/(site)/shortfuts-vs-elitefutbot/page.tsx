import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { shortFutsData } from "@/data/competitors/shortfuts";

export const metadata: Metadata = {
  title: {
    absolute: "Shortfuts vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "Shortfuts vs Elite FUT SNIPER review: compare manual keybind mashing, human reaction delay, and Elite's autonomous 20ms Chrome Side Panel with AI.",
  keywords: [
    "shortfuts",
    "short futs",
    "shortfuts review",
    "shortfuts vs elite fut sniper",
    "shortfuts chrome extension",
    "ea fc 26 sniping bot",
    "ea fc 27 autobuyer",
    "best ea fc trading bot 2026",
    "shortfuts alternative",
    "autonomous fut autobuyer",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/shortfuts-vs-elitefutbot" },
  openGraph: {
    title: "Shortfuts vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "Shortfuts vs Elite FUT SNIPER review: compare manual keybind mashing, human reaction delay, and Elite's autonomous 20ms Chrome Side Panel with AI.",
    url: "https://www.elitefutbot.com/shortfuts-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shortfuts vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "Shortfuts vs Elite FUT SNIPER review: compare manual keybind mashing, human reaction delay, and Elite's autonomous 20ms Chrome Side Panel with AI.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={shortFutsData} />;
}
