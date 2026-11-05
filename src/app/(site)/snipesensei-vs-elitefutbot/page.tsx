import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { snipeSenseiData } from "@/data/competitors/snipesensei";

export const metadata: Metadata = {
  title: {
    absolute: "Snipe Sensei vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "Snipe Sensei vs Elite FUT SNIPER: compare a one-time £24.99 license with a €19.90/year Chrome extension, auto bidding and a free 2-day trial.",
  keywords: [
    "snipe sensei",
    "snipesensei",
    "snipe sensei review",
    "snipesensei.com",
    "snipe sensei vs elite fut sniper",
    "snipe sensei pricing",
    "ea fc 27 autobuyer",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/snipesensei-vs-elitefutbot" },
  openGraph: {
    title: "Snipe Sensei vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "Snipe Sensei vs Elite FUT SNIPER: compare a one-time £24.99 license with a €19.90/year Chrome extension, auto bidding and a free 2-day trial.",
    url: "https://www.elitefutbot.com/snipesensei-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Snipe Sensei vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "Snipe Sensei vs Elite FUT SNIPER: compare a one-time £24.99 license with a €19.90/year Chrome extension, auto bidding and a free 2-day trial.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={snipeSenseiData} />;
}
