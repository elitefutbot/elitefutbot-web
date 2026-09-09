import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futHunterData } from "@/data/competitors/futhunter";

export const metadata: Metadata = {
  title: "FUT Hunter vs Elite FUT SNIPER (2026 Review): Coin Farm Risks, RAM Bloat & Speed",
  description:
    "FUT Hunter vs Elite FUT SNIPER comparison. Real audit of futhunter.com Windows .NET requirement, 15B+ coin API liquidation hazards, proxy costs, and sub-20ms personal club protection for EA FC 26 & FC 27.",
  keywords: [
    "fut hunter",
    "fut hunter review",
    "futhunter.com",
    "fut hunter bot",
    "fut hunter ban",
    "is fut hunter safe",
    "fut hunter vs elite fut sniper",
    "ea fc 26 sniping bot",
    "ea fc 27 autobuyer",
    "fut hunter api sell",
    "fut hunter pricing",
    "fut hunter download",
  ],
  alternates: { canonical: "https://elitefutbot.com/futhunter-vs-elitefutbot" },
  openGraph: {
    title: "FUT Hunter vs Elite FUT SNIPER (2026 Review): Coin Farm Risks, RAM Bloat & Speed",
    description:
      "FUT Hunter vs Elite FUT SNIPER comparison. Real audit of futhunter.com Windows .NET requirement, 15B+ coin API liquidation hazards, proxy costs, and sub-20ms personal club protection for EA FC 26 & FC 27.",
    url: "https://elitefutbot.com/futhunter-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Hunter vs Elite FUT SNIPER (2026 Review): Coin Farm Risks, RAM Bloat & Speed",
    description:
      "FUT Hunter vs Elite FUT SNIPER comparison. Real audit of futhunter.com Windows .NET requirement, 15B+ coin API liquidation hazards, proxy costs, and sub-20ms personal club protection for EA FC 26 & FC 27.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futHunterData} />;
}
