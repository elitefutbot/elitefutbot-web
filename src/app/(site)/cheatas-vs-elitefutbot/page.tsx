import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { cheatAsData } from "@/data/competitors/cheatas";

export const metadata: Metadata = {
  title: {
    absolute: "Cheat.as vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "Cheat.as vs Elite FUT SNIPER: compare a $20/month cheat-software bundle with Elite's focused €19.90/year transfer market extension.",
  keywords: [
    "cheat.as",
    "cheatas",
    "cheat.as review",
    "cheat.as fc 27",
    "cheat.as vs elite fut sniper",
    "ea fc 27 bot",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/cheatas-vs-elitefutbot" },
  openGraph: {
    title: "Cheat.as vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "Cheat.as vs Elite FUT SNIPER: compare a $20/month cheat-software bundle with Elite's focused €19.90/year transfer market extension.",
    url: "https://www.elitefutbot.com/cheatas-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cheat.as vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "Cheat.as vs Elite FUT SNIPER: compare a $20/month cheat-software bundle with Elite's focused €19.90/year transfer market extension.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={cheatAsData} />;
}
