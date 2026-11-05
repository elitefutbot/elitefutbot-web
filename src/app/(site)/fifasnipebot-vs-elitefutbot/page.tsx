import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { fifaSnipeBotData } from "@/data/competitors/fifasnipebot";

export const metadata: Metadata = {
  title: {
    absolute: "FIFA Snipe Bot vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FIFA snipe bot guide: five checks before you buy, and how Elite FUT SNIPER compares. fifasnipebot.com now redirects to Baker's Bot.",
  keywords: [
    "fifa snipe bot",
    "fifasnipebot",
    "fifasnipebot.com",
    "fifa snipe bot review",
    "fifa sniping bot",
    "ea fc snipe bot",
    "ea fc 27 autobuyer",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/fifasnipebot-vs-elitefutbot" },
  openGraph: {
    title: "FIFA Snipe Bot vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FIFA snipe bot guide: five checks before you buy, and how Elite FUT SNIPER compares. fifasnipebot.com now redirects to Baker's Bot.",
    url: "https://www.elitefutbot.com/fifasnipebot-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FIFA Snipe Bot vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FIFA snipe bot guide: five checks before you buy, and how Elite FUT SNIPER compares. fifasnipebot.com now redirects to Baker's Bot.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={fifaSnipeBotData} />;
}
