import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futCloudData } from "@/data/competitors/futcloud";

export const metadata: Metadata = {
  title: {
    absolute: "FUTCloud vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FUTCloud vs Elite FUT SNIPER review: compare cloud server queues, shared IP ban risks, and Elite's 100% local sub-20ms Chrome extension with AI solver.",
  keywords: [
    "futcloud",
    "fut cloud",
    "futcloud review",
    "futcloud vs elite fut sniper",
    "cloud fut autobuyer",
    "ea fc 26 cloud bot",
    "ea fc 27 autobuyer",
    "best ea fc trading bot 2026",
    "futcloud alternative",
    "zero ban fut sniper",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futcloud-vs-elitefutbot" },
  openGraph: {
    title: "FUTCloud vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTCloud vs Elite FUT SNIPER review: compare cloud server queues, shared IP ban risks, and Elite's 100% local sub-20ms Chrome extension with AI solver.",
    url: "https://www.elitefutbot.com/futcloud-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUTCloud vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTCloud vs Elite FUT SNIPER review: compare cloud server queues, shared IP ban risks, and Elite's 100% local sub-20ms Chrome extension with AI solver.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futCloudData} />;
}
