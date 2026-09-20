import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futSnipingBot24Data } from "@/data/competitors/futsnipingbot24";

export const metadata: Metadata = {
  title: "FUT Sniping Bot 24 vs Elite FUT SNIPER (2026 Review): Abandoned Fork vs 20ms Engine",
  description:
    "FUT Sniping Bot 24 vs Elite FUT SNIPER comparison. Real audit of abandoned FC 24 codebases, selector rot, Manifest V2 Chrome blocking, and Elite's actively maintained sub-20ms engine with AI SBC solver.",
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
    title: "FUT Sniping Bot 24 vs Elite FUT SNIPER (2026 Review): Abandoned Fork vs 20ms Engine",
    description:
      "FUT Sniping Bot 24 vs Elite FUT SNIPER comparison. Real audit of abandoned FC 24 codebases, selector rot, Manifest V2 Chrome blocking, and Elite's actively maintained sub-20ms engine with AI SBC solver.",
    url: "https://www.elitefutbot.com/futsnipingbot24-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Sniping Bot 24 vs Elite FUT SNIPER (2026 Review): Abandoned Fork vs 20ms Engine",
    description:
      "FUT Sniping Bot 24 vs Elite FUT SNIPER comparison. Real audit of abandoned FC 24 codebases, selector rot, Manifest V2 Chrome blocking, and Elite's actively maintained sub-20ms engine with AI SBC solver.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futSnipingBot24Data} />;
}
