import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { lenaBotData } from "@/data/competitors/lenabot";

export const metadata: Metadata = {
  title: {
    absolute: "Lena Bot vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "Lena Bot vs Elite FUT SNIPER: console-farming software at $10 per console a month compared with Elite's €19.90/year Chrome extension.",
  keywords: [
    "lena bot",
    "lenabot",
    "lenabot.com",
    "lena bot review",
    "lena bot vs elite fut sniper",
    "ea fc console farming",
    "ea fc 27 autobuyer",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/lenabot-vs-elitefutbot" },
  openGraph: {
    title: "Lena Bot vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "Lena Bot vs Elite FUT SNIPER: console-farming software at $10 per console a month compared with Elite's €19.90/year Chrome extension.",
    url: "https://www.elitefutbot.com/lenabot-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lena Bot vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "Lena Bot vs Elite FUT SNIPER: console-farming software at $10 per console a month compared with Elite's €19.90/year Chrome extension.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={lenaBotData} />;
}
