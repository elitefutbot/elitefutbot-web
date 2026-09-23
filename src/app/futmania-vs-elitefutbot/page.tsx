import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futManiaData } from "@/data/competitors/futmania";

export const metadata: Metadata = {
  title: {
    absolute: "FUTMania vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FUTMania vs Elite FUT SNIPER review: compare 30%–50% coin commission fees, security risks, and Elite's zero-commission 20ms Chrome extension with AI.",
  keywords: [
    "futmania",
    "futmania review",
    "futmania.gg",
    "futmania bot",
    "futmania autobuyer",
    "futmania ban",
    "is futmania safe",
    "futmania commission",
    "futmania vs elite fut sniper",
    "ea fc 26 sniping bot",
    "ea fc 27 autobuyer",
    "ai sbc solver",
    "fut sniping bot 0 commission",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futmania-vs-elitefutbot" },
  openGraph: {
    title: "FUTMania vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTMania vs Elite FUT SNIPER review: compare 30%–50% coin commission fees, security risks, and Elite's zero-commission 20ms Chrome extension with AI.",
    url: "https://www.elitefutbot.com/futmania-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUTMania vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTMania vs Elite FUT SNIPER review: compare 30%–50% coin commission fees, security risks, and Elite's zero-commission 20ms Chrome extension with AI.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futManiaData} />;
}
