import type { Metadata } from "next";
import { ReferralContent } from "./ReferralContent";

export const metadata: Metadata = {
  title: "Referral Program",
  description:
    "Invite friends to Elite FUT SNIPER with your personal referral link and get credit for every signup.",
  alternates: { canonical: "/referral" },
};

export default function ReferralPage() {
  return <ReferralContent />;
}
