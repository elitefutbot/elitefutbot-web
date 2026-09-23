import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futLockerData } from "@/data/competitors/futlocker";

export const metadata: Metadata = {
  title: {
    absolute: "FUT Locker vs Elite FUT SNIPER: 2026 Review & Comparison",
  },
  description:
    "FUTLocker vs Elite FUT SNIPER review: compare cloud proxy delays, password sharing risks, and Elite's local 20ms Chrome extension with AI SBC solver.",
  keywords: [
    "fut locker",
    "futlocker",
    "fut locker review",
    "futlocker.com",
    "fut locker trading signals",
    "fut locker vs elite fut sniper",
    "ea fc 26 trading signals",
    "ea fc 27 autobuyer",
    "fut trading alerts discord",
    "fifa sniping bot vs signals",
    "fut locker pricing",
  ],
  alternates: { canonical: "https://www.elitefutbot.com/futlocker-vs-elitefutbot" },
  openGraph: {
    title: "FUT Locker vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTLocker vs Elite FUT SNIPER review: compare cloud proxy delays, password sharing risks, and Elite's local 20ms Chrome extension with AI SBC solver.",
    url: "https://www.elitefutbot.com/futlocker-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Locker vs Elite FUT SNIPER: 2026 Review & Comparison",
    description:
      "FUTLocker vs Elite FUT SNIPER review: compare cloud proxy delays, password sharing risks, and Elite's local 20ms Chrome extension with AI SBC solver.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futLockerData} />;
}
