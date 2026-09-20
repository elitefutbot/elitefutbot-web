import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futEarnData } from "@/data/competitors/futearn";

export const metadata: Metadata = {
  title: "FUTEarn vs Elite FUT SNIPER (2026 Review): Cloud Bot Ban Risks, 50% Profit Cut & Speed",
  description:
    "Honest FUTEarn vs Elite FUT SNIPER review. Real data on cloud password risks, 50% profit tax, datacenter IP bans, and sub-20ms local sniping for FC 26 & FC 27.",
  keywords: [
    "futearn",
    "futearn review",
    "futearn.com",
    "futearn bot",
    "futearn autobuyer",
    "futearn ban",
    "is futearn safe",
    "futearn vs elite fut sniper",
    "cloud fut autobuyer",
    "ea fc 26 sniping bot",
    "ea fc 27 autobuyer",
    "ai sbc solver",
    "fut sniping bot 0 ban",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futearn-vs-elitefutbot" },
  openGraph: {
    title: "FUTEarn vs Elite FUT SNIPER (2026 Review): Cloud Bot Ban Risks, 50% Profit Cut & Speed",
    description:
      "Honest FUTEarn vs Elite FUT SNIPER review. Real data on cloud password risks, 50% profit tax, datacenter IP bans, and sub-20ms local sniping for FC 26 & FC 27.",
    url: "https://www.elitefutbot.com/futearn-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUTEarn vs Elite FUT SNIPER (2026 Review): Cloud Bot Ban Risks, 50% Profit Cut & Speed",
    description:
      "Honest FUTEarn vs Elite FUT SNIPER review. Real data on cloud password risks, 50% profit tax, datacenter IP bans, and sub-20ms local sniping for FC 26 & FC 27.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futEarnData} />;
}
