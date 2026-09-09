import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { ravenData } from "@/data/competitors/raven";

export const metadata: Metadata = {
  title: "Raven vs Elite FUT SNIPER (2026 Review): Tampermonkey Script vs 20ms AI Bot",
  description:
    "Raven (Raven for FIFA) vs Elite FUT SNIPER comparison. Real technical audit of abandoned GitHub script selector rot, linear delay soft bans, 70ms–140ms click lag, and Elite's sub-20ms Chrome Side Panel with neural AI SBC solver.",
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
  alternates: { canonical: "https://elitefutbot.com/raven-vs-elitefutbot" },
  openGraph: {
    title: "Raven vs Elite FUT SNIPER (2026 Review): Tampermonkey Script vs 20ms AI Bot",
    description:
      "Raven (Raven for FIFA) vs Elite FUT SNIPER comparison. Real technical audit of abandoned GitHub script selector rot, linear delay soft bans, 70ms–140ms click lag, and Elite's sub-20ms Chrome Side Panel with neural AI SBC solver.",
    url: "https://elitefutbot.com/raven-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Raven vs Elite FUT SNIPER (2026 Review): Tampermonkey Script vs 20ms AI Bot",
    description:
      "Raven (Raven for FIFA) vs Elite FUT SNIPER comparison. Real technical audit of abandoned GitHub script selector rot, linear delay soft bans, 70ms–140ms click lag, and Elite's sub-20ms Chrome Side Panel with neural AI SBC solver.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={ravenData} />;
}
