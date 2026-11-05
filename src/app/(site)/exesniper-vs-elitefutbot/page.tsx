import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { exeSniperData } from "@/data/competitors/exesniper";

export const metadata: Metadata = {
  title: {
    absolute: "ExeSniper vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "ExeSniper vs Elite FUT SNIPER: both are Chrome extensions. Compare free and premium tools, pricing clarity, auto bidding and Elite's free 2-day trial.",
  keywords: [
    "exesniper",
    "exe sniper",
    "exesniper review",
    "exesniper vs elite fut sniper",
    "exesniper premium",
    "ea fc sniping bot chrome extension",
    "best ea fc sniping bot 2026",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/exesniper-vs-elitefutbot" },
  openGraph: {
    title: "ExeSniper vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "ExeSniper vs Elite FUT SNIPER: both are Chrome extensions. Compare free and premium tools, pricing clarity, auto bidding and Elite's free 2-day trial.",
    url: "https://www.elitefutbot.com/exesniper-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ExeSniper vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "ExeSniper vs Elite FUT SNIPER: both are Chrome extensions. Compare free and premium tools, pricing clarity, auto bidding and Elite's free 2-day trial.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={exeSniperData} />;
}
