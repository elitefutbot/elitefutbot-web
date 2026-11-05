import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futStarzData } from "@/data/competitors/futstarz";

export const metadata: Metadata = {
  title: {
    absolute: "FutStarz vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FutStarz vs Elite FUT SNIPER: compare a cloud bot with a 4-day trial (Premium from €12.99/month) with Elite's €19.90/year Chrome extension.",
  keywords: [
    "futstarz",
    "fut starz",
    "futstarz review",
    "futstarz.com",
    "futstarz pricing",
    "futstarz vs elite fut sniper",
    "ea fc 27 autobuyer",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futstarz-vs-elitefutbot" },
  openGraph: {
    title: "FutStarz vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FutStarz vs Elite FUT SNIPER: compare a cloud bot with a 4-day trial (Premium from €12.99/month) with Elite's €19.90/year Chrome extension.",
    url: "https://www.elitefutbot.com/futstarz-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FutStarz vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FutStarz vs Elite FUT SNIPER: compare a cloud bot with a 4-day trial (Premium from €12.99/month) with Elite's €19.90/year Chrome extension.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futStarzData} />;
}
