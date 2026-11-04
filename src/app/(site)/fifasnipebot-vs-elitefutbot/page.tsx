import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { fifaSnipeBotData } from "@/data/competitors/fifasnipebot";

export const metadata: Metadata = {
  title: {
    absolute: "FIFA Snipe Bot vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FIFA Snipe Bot vs Elite FUT SNIPER review: audit legacy FIFA scripts, DOM polling delays, and Elite's sub-20ms Chrome extension with AI SBC solver.",
  keywords: [
    "fifa snipe bot",
    "fifasnipebot",
    "fifa snipe bot review",
    "fifa sniping bot github",
    "fifa snipe bot vs elite fut sniper",
    "legacy fifa autobuyer",
    "ea fc 26 sniping bot",
    "ea fc 27 autobuyer",
    "fifa bot ban risk",
    "is fifa snipe bot safe",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/fifasnipebot-vs-elitefutbot" },
  openGraph: {
    title: "FIFA Snipe Bot vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FIFA Snipe Bot vs Elite FUT SNIPER review: audit legacy FIFA scripts, DOM polling delays, and Elite's sub-20ms Chrome extension with AI SBC solver.",
    url: "https://www.elitefutbot.com/fifasnipebot-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FIFA Snipe Bot vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FIFA Snipe Bot vs Elite FUT SNIPER review: audit legacy FIFA scripts, DOM polling delays, and Elite's sub-20ms Chrome extension with AI SBC solver.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={fifaSnipeBotData} />;
}
