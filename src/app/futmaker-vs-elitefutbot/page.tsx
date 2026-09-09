import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futMakerData } from "@/data/competitors/futmaker";

export const metadata: Metadata = {
  title: "FUT Maker vs Elite FUT SNIPER (2026 Review): Desktop Client vs Chrome Extension",
  description:
    "FUT Maker vs Elite FUT SNIPER comparison. Real audit of heavy 1.2GB RAM Electron desktop bloat, high 100ms+ latency, Windows-only locks, and Elite's ultralight 20ms Chrome Side Panel with AI SBC solver.",
  keywords: [
    "fut maker",
    "futmaker",
    "fut maker review",
    "fut maker vs elite fut sniper",
    "futmaker bot",
    "ea fc desktop autobuyer",
    "fifa desktop bot",
    "ea fc 26 sniping bot mac",
    "fut maker ban risk",
    "best ea fc sniping bot 2026",
  ],
  alternates: { canonical: "https://elitefutbot.com/futmaker-vs-elitefutbot" },
  openGraph: {
    title: "FUT Maker vs Elite FUT SNIPER (2026 Review): Desktop Client vs Chrome Extension",
    description:
      "FUT Maker vs Elite FUT SNIPER comparison. Real audit of heavy 1.2GB RAM Electron desktop bloat, high 100ms+ latency, Windows-only locks, and Elite's ultralight 20ms Chrome Side Panel with AI SBC solver.",
    url: "https://elitefutbot.com/futmaker-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Maker vs Elite FUT SNIPER (2026 Review): Desktop Client vs Chrome Extension",
    description:
      "FUT Maker vs Elite FUT SNIPER comparison. Real audit of heavy 1.2GB RAM Electron desktop bloat, high 100ms+ latency, Windows-only locks, and Elite's ultralight 20ms Chrome Side Panel with AI SBC solver.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futMakerData} />;
}
