import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futHunterData } from "@/data/competitors/futhunter";

export const metadata: Metadata = {
  title: {
    absolute: "FUT Hunter vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FUTHunter vs Elite FUT SNIPER review: compare slow DOM macro delays, soft ban triggers, and Elite's sub-20ms Chrome Side Panel with neural AI solver.",
  keywords: [
    "fut hunter",
    "fut hunter review",
    "futhunter.com",
    "fut hunter bot",
    "fut hunter ban",
    "is fut hunter safe",
    "fut hunter vs elite fut sniper",
    "ea fc 26 sniping bot",
    "ea fc 27 autobuyer",
    "fut hunter api sell",
    "fut hunter pricing",
    "fut hunter download",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futhunter-vs-elitefutbot" },
  openGraph: {
    title: "FUT Hunter vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTHunter vs Elite FUT SNIPER review: compare slow DOM macro delays, soft ban triggers, and Elite's sub-20ms Chrome Side Panel with neural AI solver.",
    url: "https://www.elitefutbot.com/futhunter-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Hunter vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTHunter vs Elite FUT SNIPER review: compare slow DOM macro delays, soft ban triggers, and Elite's sub-20ms Chrome Side Panel with neural AI solver.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futHunterData} />;
}
