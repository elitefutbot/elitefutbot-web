import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { fcAutoBuyerData } from "@/data/competitors/fcautobuyer";

export const metadata: Metadata = {
  title: {
    absolute: "FC AutoBuyer vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FC AutoBuyer vs Elite FUT SNIPER review: compare open beta keys, ban safety limits, sub-20ms WebSocket speed, and integrated AI SBC solving.",
  keywords: [
    "fc autobuyer",
    "fc autobuyer review",
    "fc autobuyer vs elite fut sniper",
    "fc autobuyer free beta",
    "fcautobuyer.com",
    "ea fc 27 autobuyer",
    "ea fc 27 sniping bot",
    "fc 27 web app bot",
    "best ea fc autobuyer 2026",
    "ai sbc solver extension",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/fcautobuyer-vs-elitefutbot" },
  openGraph: {
    title: "FC AutoBuyer vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FC AutoBuyer vs Elite FUT SNIPER review: compare open beta keys, ban safety limits, sub-20ms WebSocket speed, and integrated AI SBC solving.",
    url: "https://www.elitefutbot.com/fcautobuyer-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FC AutoBuyer vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FC AutoBuyer vs Elite FUT SNIPER review: compare open beta keys, ban safety limits, sub-20ms WebSocket speed, and integrated AI SBC solving.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={fcAutoBuyerData} />;
}
