import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { fcEnhancerData } from "@/data/competitors/fcenhancer";

export const metadata: Metadata = {
  title: {
    absolute: "FC Enhancer vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FC27 Enhancer vs Elite FUT SNIPER: a 200,000-user SBC and shortcuts toolkit compared with an automated trading extension at €19.90/year.",
  keywords: [
    "fc enhancer",
    "fc27 enhancer",
    "fcenhancer",
    "fc enhancer review",
    "fc enhancer vs elite fut sniper",
    "ea fc 27 sbc solver",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/fcenhancer-vs-elitefutbot" },
  openGraph: {
    title: "FC Enhancer vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FC27 Enhancer vs Elite FUT SNIPER: a 200,000-user SBC and shortcuts toolkit compared with an automated trading extension at €19.90/year.",
    url: "https://www.elitefutbot.com/fcenhancer-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FC Enhancer vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FC27 Enhancer vs Elite FUT SNIPER: a 200,000-user SBC and shortcuts toolkit compared with an automated trading extension at €19.90/year.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={fcEnhancerData} />;
}
