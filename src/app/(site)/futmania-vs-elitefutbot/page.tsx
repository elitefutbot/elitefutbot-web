import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futManiaData } from "@/data/competitors/futmania";

export const metadata: Metadata = {
  title: {
    absolute: "FUTMania vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FUTMania vs Elite FUT SNIPER: compare a commission-based cloud bot (30% to 50% of profit) with Elite's flat €19.90/year Chrome extension.",
  keywords: [
    "futmania",
    "fut mania",
    "futmania review",
    "futmania.gg",
    "futmania commission",
    "futmania vs elite fut sniper",
    "ea fc 27 autobuyer",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futmania-vs-elitefutbot" },
  openGraph: {
    title: "FUTMania vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTMania vs Elite FUT SNIPER: compare a commission-based cloud bot (30% to 50% of profit) with Elite's flat €19.90/year Chrome extension.",
    url: "https://www.elitefutbot.com/futmania-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUTMania vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTMania vs Elite FUT SNIPER: compare a commission-based cloud bot (30% to 50% of profit) with Elite's flat €19.90/year Chrome extension.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futManiaData} />;
}
