import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futMakerData } from "@/data/competitors/futmaker";

export const metadata: Metadata = {
  title: {
    absolute: "FUT Maker vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FUTMaker vs Elite FUT SNIPER review: compare desktop software friction, driver lag, and Elite's sub-20ms docked Chrome Side Panel with neural AI solver.",
  keywords: [
    "fut maker",
    "futmaker",
    "fut maker review",
    "fut maker vs elite fut sniper",
    "futmaker bot",
    "ea fc desktop autobuyer",
    "fifa desktop bot",
    "ea fc 26 sniping bot mac",
    "fut maker ban risk",
    "best ea fc sniping bot 2026",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futmaker-vs-elitefutbot" },
  openGraph: {
    title: "FUT Maker vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTMaker vs Elite FUT SNIPER review: compare desktop software friction, driver lag, and Elite's sub-20ms docked Chrome Side Panel with neural AI solver.",
    url: "https://www.elitefutbot.com/futmaker-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Maker vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTMaker vs Elite FUT SNIPER review: compare desktop software friction, driver lag, and Elite's sub-20ms docked Chrome Side Panel with neural AI solver.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futMakerData} />;
}
