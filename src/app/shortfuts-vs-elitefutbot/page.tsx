import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { shortFutsData } from "@/data/competitors/shortfuts";

export const metadata: Metadata = {
  title: "Shortfuts vs Elite FUT SNIPER (2026 Review): Manual Hotkeys vs Autonomous 20ms Bot",
  description:
    "Shortfuts vs Elite FUT SNIPER comparison. Real audit of manual keybind mashing, human reaction delay (500ms+), rapid soft bans, and Elite's fully autonomous 20ms Chrome Side Panel with AI SBC solver.",
  keywords: [
    "shortfuts",
    "short futs",
    "shortfuts review",
    "shortfuts vs elite fut sniper",
    "shortfuts chrome extension",
    "ea fc 26 sniping bot",
    "ea fc 27 autobuyer",
    "best ea fc trading bot 2026",
    "shortfuts alternative",
    "autonomous fut autobuyer",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/shortfuts-vs-elitefutbot" },
  openGraph: {
    title: "Shortfuts vs Elite FUT SNIPER (2026 Review): Manual Hotkeys vs Autonomous 20ms Bot",
    description:
      "Shortfuts vs Elite FUT SNIPER comparison. Real audit of manual keybind mashing, human reaction delay (500ms+), rapid soft bans, and Elite's fully autonomous 20ms Chrome Side Panel with AI SBC solver.",
    url: "https://www.elitefutbot.com/shortfuts-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shortfuts vs Elite FUT SNIPER (2026 Review): Manual Hotkeys vs Autonomous 20ms Bot",
    description:
      "Shortfuts vs Elite FUT SNIPER comparison. Real audit of manual keybind mashing, human reaction delay (500ms+), rapid soft bans, and Elite's fully autonomous 20ms Chrome Side Panel with AI SBC solver.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={shortFutsData} />;
}
