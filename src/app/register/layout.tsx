import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Your Account",
  description: "Create an Elite FUT SNIPER account to start sniping FC 27 and FC 26 cards at sub-20ms speeds.",
  alternates: {
    canonical: "https://www.elitefutbot.com/register",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
