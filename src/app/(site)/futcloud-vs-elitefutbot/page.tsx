import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futCloudData } from "@/data/competitors/futcloud";

export const metadata: Metadata = {
  title: {
    absolute: "FUTCloud vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FUTCLOUD vs Elite FUT SNIPER: compare a free cloud bot with a 50/50 profit split to Elite's flat €19.90/year Chrome extension.",
  keywords: [
    "futcloud",
    "fut cloud",
    "futcloud review",
    "futcloud.com",
    "futcloud 50/50",
    "futcloud vs elite fut sniper",
    "ea fc 27 autobuyer",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futcloud-vs-elitefutbot" },
  openGraph: {
    title: "FUTCloud vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTCLOUD vs Elite FUT SNIPER: compare a free cloud bot with a 50/50 profit split to Elite's flat €19.90/year Chrome extension.",
    url: "https://www.elitefutbot.com/futcloud-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUTCloud vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTCLOUD vs Elite FUT SNIPER: compare a free cloud bot with a 50/50 profit split to Elite's flat €19.90/year Chrome extension.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futCloudData} />;
}
