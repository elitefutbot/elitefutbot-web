import type { Metadata } from "next";
import { ReferralContent } from "./ReferralContent";

export const metadata: Metadata = {
  title: "Referral Program",
  description:
    "Invite friends to Elite FUT SNIPER with your personal referral link and get credit for every signup.",
  alternates: { canonical: "https://www.elitefutbot.com/referral" },
  openGraph: {
    title: "Referral Program | Elite FUT SNIPER",
    description:
      "Invite friends to Elite FUT SNIPER with your personal referral link and get credit for every signup.",
    url: "https://www.elitefutbot.com/referral",
    siteName: "Elite FUT SNIPER",
    type: "website",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Referral Program | Elite FUT SNIPER",
    description:
      "Invite friends to Elite FUT SNIPER with your personal referral link and get credit for every signup.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function ReferralPage() {
  return <ReferralContent />;
}
