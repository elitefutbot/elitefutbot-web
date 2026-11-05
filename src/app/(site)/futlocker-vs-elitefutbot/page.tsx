import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futLockerData } from "@/data/competitors/futlocker";

export const metadata: Metadata = {
  title: {
    absolute: "FUT Locker vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FUT Locker vs Elite FUT SNIPER: a desktop coin-transfer bot compared with a Chrome extension that snipes, bids and relists. See pricing and trials.",
  keywords: [
    "fut locker",
    "futlocker",
    "fut locker review",
    "futlocker.com",
    "fut locker vs elite fut sniper",
    "fut locker pricing",
    "fut locker free trial",
    "ea fc 27 transfer bot",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futlocker-vs-elitefutbot" },
  openGraph: {
    title: "FUT Locker vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUT Locker vs Elite FUT SNIPER: a desktop coin-transfer bot compared with a Chrome extension that snipes, bids and relists. See pricing and trials.",
    url: "https://www.elitefutbot.com/futlocker-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Locker vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUT Locker vs Elite FUT SNIPER: a desktop coin-transfer bot compared with a Chrome extension that snipes, bids and relists. See pricing and trials.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futLockerData} />;
}
