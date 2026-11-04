import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futSnipingBot24Data } from "@/data/competitors/futsnipingbot24";

export const metadata: Metadata = {
  title: {
    absolute: "FUT Sniping Bot 24 vs Elite FUT SNIPER: 2026 Review",
  },
  description:
    "FUT Sniping Bot 24 vs Elite FUT SNIPER: audit abandoned FC 24 codebases, Manifest V2 blocks, and Elite's active 20ms Chrome engine with AI solver.",
  keywords: [
    "fut sniping bot 24",
    "futsnipingbot24",
    "fut sniping bot 24 review",
    "fut sniping bot 24 vs elite fut sniper",
    "fc 24 autobuyer github",
    "ea fc 26 sniping bot",
    "ea fc 27 autobuyer",
    "abandoned fut bot",
    "best ea fc sniping bot 2026",
    "manifest v3 fifa autobuyer",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futsnipingbot24-vs-elitefutbot" },
  openGraph: {
    title: "FUT Sniping Bot 24 vs Elite FUT SNIPER: 2026 Review",
    description:
      "FUT Sniping Bot 24 vs Elite FUT SNIPER: audit abandoned FC 24 codebases, Manifest V2 blocks, and Elite's active 20ms Chrome engine with AI solver.",
    url: "https://www.elitefutbot.com/futsnipingbot24-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Sniping Bot 24 vs Elite FUT SNIPER: 2026 Review",
    description:
      "FUT Sniping Bot 24 vs Elite FUT SNIPER: audit abandoned FC 24 codebases, Manifest V2 blocks, and Elite's active 20ms Chrome engine with AI solver.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futSnipingBot24Data} />;
}
