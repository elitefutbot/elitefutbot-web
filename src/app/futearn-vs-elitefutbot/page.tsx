import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futEarnData } from "@/data/competitors/futearn";

export const metadata: Metadata = {
  title: {
    absolute: "FUTEarn vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FUTEarn vs Elite FUT SNIPER review: compare high subscription costs, manual trading filters, and Elite's sub-20ms Chrome extension with AI SBC solver.",
  keywords: [
    "futearn",
    "futearn review",
    "futearn.com",
    "futearn bot",
    "futearn autobuyer",
    "futearn ban",
    "is futearn safe",
    "futearn vs elite fut sniper",
    "cloud fut autobuyer",
    "ea fc 26 sniping bot",
    "ea fc 27 autobuyer",
    "ai sbc solver",
    "fut sniping bot 0 ban",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futearn-vs-elitefutbot" },
  openGraph: {
    title: "FUTEarn vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTEarn vs Elite FUT SNIPER review: compare high subscription costs, manual trading filters, and Elite's sub-20ms Chrome extension with AI SBC solver.",
    url: "https://www.elitefutbot.com/futearn-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUTEarn vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTEarn vs Elite FUT SNIPER review: compare high subscription costs, manual trading filters, and Elite's sub-20ms Chrome extension with AI SBC solver.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futEarnData} />;
}
