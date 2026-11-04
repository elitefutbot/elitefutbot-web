import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { ravenData } from "@/data/competitors/raven";

export const metadata: Metadata = {
  title: {
    absolute: "Raven vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "Raven vs Elite FUT SNIPER review: compare abandoned GitHub scripts, linear delay soft bans, and Elite's sub-20ms Chrome Side Panel with neural AI.",
  keywords: [
    "raven for fifa",
    "raven fifa autobuyer",
    "raven bot",
    "raven vs elite fut sniper",
    "raven alternative",
    "ea fc 26 autobuyer",
    "ea fc 27 sniping bot",
    "tampermonkey fifa script",
    "best ea fc trading bot 2026",
    "ai sbc solver chrome extension",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/raven-vs-elitefutbot" },
  openGraph: {
    title: "Raven vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "Raven vs Elite FUT SNIPER review: compare abandoned GitHub scripts, linear delay soft bans, and Elite's sub-20ms Chrome Side Panel with neural AI.",
    url: "https://www.elitefutbot.com/raven-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raven vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "Raven vs Elite FUT SNIPER review: compare abandoned GitHub scripts, linear delay soft bans, and Elite's sub-20ms Chrome Side Panel with neural AI.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={ravenData} />;
}
