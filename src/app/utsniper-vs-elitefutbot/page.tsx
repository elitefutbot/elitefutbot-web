import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { utSniperData } from "@/data/competitors/utsniper";

export const metadata: Metadata = {
  title: "UTSniper vs Elite FUT SNIPER (2026 Review): Linear Timers vs 20ms AI Bot",
  description:
    "UTSniper vs Elite FUT SNIPER comparison. Real technical audit of linear delay soft bans, floating screen overlays, DOM polling lag (60ms–110ms), and Elite's sub-20ms Chrome Side Panel bot with Gaussian jitter & AI SBC solver.",
  keywords: [
    "utsniper",
    "ut sniper",
    "utsniper review",
    "utsniper vs elite fut sniper",
    "utsniper alternative",
    "fut sniping extension",
    "ea fc 26 sniping bot",
    "ea fc 27 autobuyer",
    "best ea fc trading bot 2026",
    "gaussian jitter fut bot",
  ],
  alternates: { canonical: "https://elitefutbot.com/utsniper-vs-elitefutbot" },
  openGraph: {
    title: "UTSniper vs Elite FUT SNIPER (2026 Review): Linear Timers vs 20ms AI Bot",
    description:
      "UTSniper vs Elite FUT SNIPER comparison. Real technical audit of linear delay soft bans, floating screen overlays, DOM polling lag (60ms–110ms), and Elite's sub-20ms Chrome Side Panel bot with Gaussian jitter & AI SBC solver.",
    url: "https://elitefutbot.com/utsniper-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "UTSniper vs Elite FUT SNIPER (2026 Review): Linear Timers vs 20ms AI Bot",
    description:
      "UTSniper vs Elite FUT SNIPER comparison. Real technical audit of linear delay soft bans, floating screen overlays, DOM polling lag (60ms–110ms), and Elite's sub-20ms Chrome Side Panel bot with Gaussian jitter & AI SBC solver.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={utSniperData} />;
}
