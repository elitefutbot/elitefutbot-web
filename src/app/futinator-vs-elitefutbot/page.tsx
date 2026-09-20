import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futinatorData } from "@/data/competitors/futinator";

export const metadata: Metadata = {
  title: "Futinator vs Elite FUT SNIPER (2026 Review): Real Pricing, Ban Risks & Speed",
  description:
    "Honest Futinator vs Elite FUT SNIPER review. Real data on futinator.com 54 € annual re-tax, admitted transfer market soft-bans, retro grey modal clutter, and sub-20ms sniping for FC 26 & FC 27.",
  keywords: [
    "futinator",
    "futinator review",
    "futinator.com",
    "futinator plus",
    "futinator autobuyer",
    "futinator ban",
    "is futinator safe",
    "futinator vs elite fut sniper",
    "futinator pricing",
    "ea fc 26 sniping bot",
    "ea fc 27 autobuyer",
    "ai sbc solver",
    "futinator extension",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futinator-vs-elitefutbot" },
  openGraph: {
    title: "Futinator vs Elite FUT SNIPER (2026 Review): Real Pricing, Ban Risks & Speed",
    description:
      "Honest Futinator vs Elite FUT SNIPER review. Real data on futinator.com 54 € annual re-tax, admitted transfer market soft-bans, retro grey modal clutter, and sub-20ms sniping for FC 26 & FC 27.",
    url: "https://www.elitefutbot.com/futinator-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Futinator vs Elite FUT SNIPER (2026 Review): Real Pricing, Ban Risks & Speed",
    description:
      "Honest Futinator vs Elite FUT SNIPER review. Real data on futinator.com 54 € annual re-tax, admitted transfer market soft-bans, retro grey modal clutter, and sub-20ms sniping for FC 26 & FC 27.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futinatorData} />;
}
