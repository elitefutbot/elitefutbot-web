import type { Metadata } from "next";
import CompetitorComparisonPage from "@/components/CompetitorComparisonPage";
import { futLockerData } from "@/data/competitors/futlocker";

export const metadata: Metadata = {
  title: "FUT Locker vs Elite FUT SNIPER (2026 Review): Signals vs 20ms Sniping",
  description:
    "FUT Locker vs Elite FUT SNIPER comparison. Real audit of futlocker.com $240–$360/yr signal subscriptions, 15–45s notification delays, datacenter cloud bot risks, and sub-20ms Side Panel HUD for EA FC 26 & FC 27.",
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
    title: "FUT Locker vs Elite FUT SNIPER (2026 Review): Signals vs 20ms Sniping",
    description:
      "FUT Locker vs Elite FUT SNIPER comparison. Real audit of futlocker.com $240–$360/yr signal subscriptions, 15–45s notification delays, datacenter cloud bot risks, and sub-20ms Side Panel HUD for EA FC 26 & FC 27.",
    url: "https://www.elitefutbot.com/futlocker-vs-elitefutbot",
    siteName: "Elite FUT SNIPER",
    type: "article",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FUT Locker vs Elite FUT SNIPER (2026 Review): Signals vs 20ms Sniping",
    description:
      "FUT Locker vs Elite FUT SNIPER comparison. Real audit of futlocker.com $240–$360/yr signal subscriptions, 15–45s notification delays, datacenter cloud bot risks, and sub-20ms Side Panel HUD for EA FC 26 & FC 27.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function Page() {
  return <CompetitorComparisonPage data={futLockerData} />;
}
