import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { shortFutsData } from "@/data/competitors/shortfuts";

export const metadata: Metadata = {
  title: {
    absolute: "Shortfuts vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "shortfuts vs Elite FUT SNIPER: a keyboard-shortcut extension compared with an automated sniping, bidding and relisting extension.",
  keywords: [
    "shortfuts",
    "shortfuts review",
    "shortfuts fut",
    "shortfuts.com",
    "shortfuts vs elite fut sniper",
    "fut keyboard shortcuts",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/shortfuts-vs-elitefutbot" },
  openGraph: {
    title: "Shortfuts vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "shortfuts vs Elite FUT SNIPER: a keyboard-shortcut extension compared with an automated sniping, bidding and relisting extension.",
    url: "https://www.elitefutbot.com/shortfuts-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shortfuts vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "shortfuts vs Elite FUT SNIPER: a keyboard-shortcut extension compared with an automated sniping, bidding and relisting extension.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={shortFutsData} />;
}
