import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futStarzData } from "@/data/competitors/futstarz";

export const metadata: Metadata = {
  title: {
    absolute: "FutStarz vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FutStarz vs Elite FUT SNIPER review: compare cloud queue delays, token exposure, datacenter bans, and Elite's local 20ms Chrome Side Panel with AI.",
  keywords: [
    "futstarz",
    "fut starz",
    "futstarz review",
    "futstarz vs elite fut sniper",
    "futstarz alternative",
    "cloud fut autobuyer",
    "ea fc 26 proxy bot",
    "ea fc 27 autobuyer",
    "best ea fc trading bot 2026",
    "zero ban fut sniper",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futstarz-vs-elitefutbot" },
  openGraph: {
    title: "FutStarz vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FutStarz vs Elite FUT SNIPER review: compare cloud queue delays, token exposure, datacenter bans, and Elite's local 20ms Chrome Side Panel with AI.",
    url: "https://www.elitefutbot.com/futstarz-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FutStarz vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FutStarz vs Elite FUT SNIPER review: compare cloud queue delays, token exposure, datacenter bans, and Elite's local 20ms Chrome Side Panel with AI.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futStarzData} />;
}
