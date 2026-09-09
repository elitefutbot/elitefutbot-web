import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futGgData } from "@/data/competitors/futgg";

export const metadata: Metadata = {
  title: "FUT.GG vs Elite FUT SNIPER (2026 Review): Passive Database vs 20ms Sniping Bot",
  description:
    "FUT.GG vs Elite FUT SNIPER comparison. Real audit of passive card database limits, community template price-fixing, manual alt-tab lag, and Elite's autonomous 20ms market sniper with AI SBC solver.",
  keywords: [
    "fut.gg",
    "fut gg",
    "futgg review",
    "fut gg vs elite fut sniper",
    "fut gg alternative",
    "ea fc 26 sniping bot",
    "ea fc 27 autobuyer",
    "best ea fc trading bot 2026",
    "ai sbc solver extension",
    "fut price database vs sniper",
  ],
  alternates: { canonical: "https://elitefutbot.com/futgg-vs-elitefutbot" },
  openGraph: {
    title: "FUT.GG vs Elite FUT SNIPER (2026 Review): Passive Database vs 20ms Sniping Bot",
    description:
      "FUT.GG vs Elite FUT SNIPER comparison. Real audit of passive card database limits, community template price-fixing, manual alt-tab lag, and Elite's autonomous 20ms market sniper with AI SBC solver.",
    url: "https://elitefutbot.com/futgg-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT.GG vs Elite FUT SNIPER (2026 Review): Passive Database vs 20ms Sniping Bot",
    description:
      "FUT.GG vs Elite FUT SNIPER comparison. Real audit of passive card database limits, community template price-fixing, manual alt-tab lag, and Elite's autonomous 20ms market sniper with AI SBC solver.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futGgData} />;
}
