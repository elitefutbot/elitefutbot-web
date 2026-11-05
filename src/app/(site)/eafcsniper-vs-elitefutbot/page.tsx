import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { eafcSniperData } from "@/data/competitors/eafcsniper";

export const metadata: Metadata = {
  title: {
    absolute: "EAFC Sniper vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "EAFC Sniper vs Elite FUT SNIPER: compare a $19 to $37.99 FC 26 tool with a 24-hour trial to Elite's €19.90/year FC 27 and FC 26 extension.",
  keywords: [
    "eafc sniper",
    "eafcsniper",
    "futsnipe",
    "eafc sniper review",
    "eafc sniper price",
    "eafc sniper vs elite fut sniper",
    "ea fc 27 autobuyer",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/eafcsniper-vs-elitefutbot" },
  openGraph: {
    title: "EAFC Sniper vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "EAFC Sniper vs Elite FUT SNIPER: compare a $19 to $37.99 FC 26 tool with a 24-hour trial to Elite's €19.90/year FC 27 and FC 26 extension.",
    url: "https://www.elitefutbot.com/eafcsniper-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EAFC Sniper vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "EAFC Sniper vs Elite FUT SNIPER: compare a $19 to $37.99 FC 26 tool with a 24-hour trial to Elite's €19.90/year FC 27 and FC 26 extension.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={eafcSniperData} />;
}
