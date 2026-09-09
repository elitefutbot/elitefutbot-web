import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { palEToolsData } from "@/data/competitors/paletools";

export const metadata: Metadata = {
  title: "Paletools vs Elite FUT SNIPER (2026 Review): Manual Hotkeys vs 20ms Autonomous Bot",
  description:
    "Paletools vs Elite FUT SNIPER comparison. Real audit of manual hotkey latency (400ms+), rapid keypress soft bans, lack of AI SBC auto-buy, and Elite's autonomous sub-20ms Chrome Side Panel with AI solver.",
  keywords: [
    "paletools",
    "paletools review",
    "paletools vs elite fut sniper",
    "paletools autobuyer",
    "paletools ban risk",
    "paletools alternative",
    "ea fc 26 autonomous bot",
    "ea fc 27 sniping bot",
    "best ea fc autobuyer 2026",
    "ai sbc solver extension",
  ],
  alternates: { canonical: "https://elitefutbot.com/paletools-vs-elitefutbot" },
  openGraph: {
    title: "Paletools vs Elite FUT SNIPER (2026 Review): Manual Hotkeys vs 20ms Autonomous Bot",
    description:
      "Paletools vs Elite FUT SNIPER comparison. Real audit of manual hotkey latency (400ms+), rapid keypress soft bans, lack of AI SBC auto-buy, and Elite's autonomous sub-20ms Chrome Side Panel with AI solver.",
    url: "https://elitefutbot.com/paletools-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paletools vs Elite FUT SNIPER (2026 Review): Manual Hotkeys vs 20ms Autonomous Bot",
    description:
      "Paletools vs Elite FUT SNIPER comparison. Real audit of manual hotkey latency (400ms+), rapid keypress soft bans, lack of AI SBC auto-buy, and Elite's autonomous sub-20ms Chrome Side Panel with AI solver.",
    images: ["https://elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={palEToolsData} />;
}
