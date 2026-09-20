import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { nokaFutData } from "@/data/competitors/nokafut";

export const metadata: Metadata = {
  title: "NokaFut vs Elite FUT SNIPER (2026 Review): NOLTOK Hotkeys vs 20ms AI Bot",
  description:
    "NokaFut (NOKA FUT FC 25/26) vs Elite FUT SNIPER comparison. Technical audit of 'NOLTOK' hotkeys, in-DOM latency, 80ms–150ms delays, and Elite's sub-20ms Chrome Side Panel with neural AI SBC solver.",
  keywords: [
    "nokafut",
    "noka fut",
    "noltok method",
    "nokafut review",
    "noka fut vs elite fut sniper",
    "nokafut alternative",
    "ea fc 26 autobuyer",
    "ea fc 27 sniping bot",
    "best ea fc trading bot 2026",
    "ai sbc solver chrome extension",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/nokafut-vs-elitefutbot" },
  openGraph: {
    title: "NokaFut vs Elite FUT SNIPER (2026 Review): NOLTOK Hotkeys vs 20ms AI Bot",
    description:
      "NokaFut (NOKA FUT FC 25/26) vs Elite FUT SNIPER comparison. Technical audit of 'NOLTOK' hotkeys, in-DOM latency, 80ms–150ms delays, and Elite's sub-20ms Chrome Side Panel with neural AI SBC solver.",
    url: "https://www.elitefutbot.com/nokafut-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NokaFut vs Elite FUT SNIPER (2026 Review): NOLTOK Hotkeys vs 20ms AI Bot",
    description:
      "NokaFut (NOKA FUT FC 25/26) vs Elite FUT SNIPER comparison. Technical audit of 'NOLTOK' hotkeys, in-DOM latency, 80ms–150ms delays, and Elite's sub-20ms Chrome Side Panel with neural AI SBC solver.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={nokaFutData} />;
}
