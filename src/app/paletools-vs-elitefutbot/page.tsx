import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { palEToolsData } from "@/data/competitors/paletools";

export const metadata: Metadata = {
  title: {
    absolute: "Paletools vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "Paletools vs Elite FUT SNIPER review: audit manual hotkey delay, rapid keypress soft bans, and Elite's autonomous sub-20ms Chrome bot with AI solver.",
  keywords: [
    "paletools",
    "paletools review",
    "paletools vs elite fut sniper",
    "paletools autobuyer",
    "paletools ban risk",
    "paletools alternative",
    "ea fc 26 autonomous bot",
    "ea fc 27 sniping bot",
    "best ea fc autobuyer 2026",
    "ai sbc solver extension",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/paletools-vs-elitefutbot" },
  openGraph: {
    title: "Paletools vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "Paletools vs Elite FUT SNIPER review: audit manual hotkey delay, rapid keypress soft bans, and Elite's autonomous sub-20ms Chrome bot with AI solver.",
    url: "https://www.elitefutbot.com/paletools-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paletools vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "Paletools vs Elite FUT SNIPER review: audit manual hotkey delay, rapid keypress soft bans, and Elite's autonomous sub-20ms Chrome bot with AI solver.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={palEToolsData} />;
}
