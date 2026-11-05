import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futSniperWebData } from "@/data/competitors/futsniperweb";

export const metadata: Metadata = {
  title: {
    absolute: "FUT Sniper Web vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FutSniperWeb vs Elite FUT SNIPER: compare a 3-day trial, cloud dashboard and Auto DME with Elite's €19.90/year extension and auto bidder.",
  keywords: [
    "futsniperweb",
    "fut sniper web",
    "futsniperweb review",
    "futsniperweb.com.br",
    "futsniperweb vs elite fut sniper",
    "ea fc 27 autobuyer",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futsniperweb-vs-elitefutbot" },
  openGraph: {
    title: "FUT Sniper Web vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FutSniperWeb vs Elite FUT SNIPER: compare a 3-day trial, cloud dashboard and Auto DME with Elite's €19.90/year extension and auto bidder.",
    url: "https://www.elitefutbot.com/futsniperweb-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Sniper Web vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FutSniperWeb vs Elite FUT SNIPER: compare a 3-day trial, cloud dashboard and Auto DME with Elite's €19.90/year extension and auto bidder.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futSniperWebData} />;
}
