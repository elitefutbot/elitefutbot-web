import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futUltimateSniperData } from "@/data/competitors/futultimatesniper";

export const metadata: Metadata = {
  title: {
    absolute: "FUT Ultimate Sniper vs Elite FUT SNIPER: 2026 Review",
  },
  description:
    "FUT Ultimate Sniper vs Elite FUT SNIPER: compare developer zip sideloading, 3500ms delay throttles, and Elite's 20ms Chrome Store bot with AI.",
  keywords: [
    "fut ultimate sniper",
    "fut ultimate sniper review",
    "futultimatesniper.app",
    "fut ultimate sniper download",
    "fut ultimate sniper zip",
    "fut ultimate sniper developer mode",
    "fut ultimate sniper chrome extension",
    "is fut ultimate sniper safe",
    "fut ultimate sniper vs elite fut sniper",
    "ea fc 26 sniping bot",
    "ea fc 27 autobuyer",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futultimatesniper-vs-elitefutbot" },
  openGraph: {
    title: "FUT Ultimate Sniper vs Elite FUT SNIPER: 2026 Review",
    description:
      "FUT Ultimate Sniper vs Elite FUT SNIPER: compare developer zip sideloading, 3500ms delay throttles, and Elite's 20ms Chrome Store bot with AI.",
    url: "https://www.elitefutbot.com/futultimatesniper-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Ultimate Sniper vs Elite FUT SNIPER: 2026 Review",
    description:
      "FUT Ultimate Sniper vs Elite FUT SNIPER: compare developer zip sideloading, 3500ms delay throttles, and Elite's 20ms Chrome Store bot with AI.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futUltimateSniperData} />;
}
