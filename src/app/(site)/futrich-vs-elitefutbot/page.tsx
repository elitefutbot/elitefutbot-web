import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futRichData } from "@/data/competitors/futrich";

export const metadata: Metadata = {
  title: {
    absolute: "FUTRich vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FUTRich vs Elite FUT SNIPER: compare FUTRich's €14.99 to €79.99 plans and 5-day trial with Elite's €19.90/year Chrome extension.",
  keywords: [
    "futrich",
    "futrich review",
    "futrich pricing",
    "futrich free trial",
    "futrich vs elite fut sniper",
    "fut sniping bot",
    "ea fc 27 autobuyer",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futrich-vs-elitefutbot" },
  openGraph: {
    title: "FUTRich vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTRich vs Elite FUT SNIPER: compare FUTRich's €14.99 to €79.99 plans and 5-day trial with Elite's €19.90/year Chrome extension.",
    url: "https://www.elitefutbot.com/futrich-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUTRich vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTRich vs Elite FUT SNIPER: compare FUTRich's €14.99 to €79.99 plans and 5-day trial with Elite's €19.90/year Chrome extension.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futRichData} />;
}
