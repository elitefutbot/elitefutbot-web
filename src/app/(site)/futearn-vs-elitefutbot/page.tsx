import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futEarnData } from "@/data/competitors/futearn";

export const metadata: Metadata = {
  title: {
    absolute: "FUTEarn vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FUTEarn vs Elite FUT SNIPER: a free cloud service that keeps 50% of profit compared with Elite's flat €19.90/year Chrome extension.",
  keywords: [
    "futearn",
    "fut earn",
    "futearn review",
    "futearn.com",
    "futearn 50% profit",
    "futearn vs elite fut sniper",
    "ea fc 27 autobuyer",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futearn-vs-elitefutbot" },
  openGraph: {
    title: "FUTEarn vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTEarn vs Elite FUT SNIPER: a free cloud service that keeps 50% of profit compared with Elite's flat €19.90/year Chrome extension.",
    url: "https://www.elitefutbot.com/futearn-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUTEarn vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTEarn vs Elite FUT SNIPER: a free cloud service that keeps 50% of profit compared with Elite's flat €19.90/year Chrome extension.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futEarnData} />;
}
