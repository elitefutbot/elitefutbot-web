import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futGgData } from "@/data/competitors/futgg";

export const metadata: Metadata = {
  title: {
    absolute: "FUT.GG vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FUT.GG vs Elite FUT SNIPER: a player database and SBC site compared with an automated transfer market trading extension at €19.90/year.",
  keywords: [
    "fut.gg",
    "futgg",
    "fut gg",
    "fut.gg review",
    "fut.gg vs elite fut sniper",
    "fut.gg sbc",
    "ea fc 27 tools",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futgg-vs-elitefutbot" },
  openGraph: {
    title: "FUT.GG vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUT.GG vs Elite FUT SNIPER: a player database and SBC site compared with an automated transfer market trading extension at €19.90/year.",
    url: "https://www.elitefutbot.com/futgg-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT.GG vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUT.GG vs Elite FUT SNIPER: a player database and SBC site compared with an automated transfer market trading extension at €19.90/year.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futGgData} />;
}
