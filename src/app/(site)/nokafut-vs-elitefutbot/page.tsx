import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { nokaFutData } from "@/data/competitors/nokafut";

export const metadata: Metadata = {
  title: {
    absolute: "NokaFut vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "NokaFut vs Elite FUT SNIPER: a free toolkit with paid tiers (from €5.99/month) compared with Elite's €19.90/year sniping extension.",
  keywords: [
    "nokafut",
    "noka fut",
    "nokafut review",
    "nokafut premium",
    "nokafut vs elite fut sniper",
    "nokafut sbc solver",
    "ea fc 27 tools",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/nokafut-vs-elitefutbot" },
  openGraph: {
    title: "NokaFut vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "NokaFut vs Elite FUT SNIPER: a free toolkit with paid tiers (from €5.99/month) compared with Elite's €19.90/year sniping extension.",
    url: "https://www.elitefutbot.com/nokafut-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NokaFut vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "NokaFut vs Elite FUT SNIPER: a free toolkit with paid tiers (from €5.99/month) compared with Elite's €19.90/year sniping extension.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={nokaFutData} />;
}
