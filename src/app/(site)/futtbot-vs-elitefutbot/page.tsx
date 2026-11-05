import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futtBotData } from "@/data/competitors/futtbot";

export const metadata: Metadata = {
  title: {
    absolute: "Futtbot vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "Futtbot vs Elite FUT SNIPER: compare plans (from €7.49 a month), SBC solver, the free trial and Elite's €19.90/year Chrome extension.",
  keywords: [
    "futtbot",
    "futtbot review",
    "futtbot price",
    "futtbot plans",
    "futtbot vs elite fut sniper",
    "ea fc 26 sniping bot",
    "ea fc 27 autobuyer",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futtbot-vs-elitefutbot" },
  openGraph: {
    title: "Futtbot vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "Futtbot vs Elite FUT SNIPER: compare plans (from €7.49 a month), SBC solver, the free trial and Elite's €19.90/year Chrome extension.",
    url: "https://www.elitefutbot.com/futtbot-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Futtbot vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "Futtbot vs Elite FUT SNIPER: compare plans (from €7.49 a month), SBC solver, the free trial and Elite's €19.90/year Chrome extension.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futtBotData} />;
}
