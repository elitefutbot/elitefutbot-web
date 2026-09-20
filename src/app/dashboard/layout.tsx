import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trader Dashboard",
  description: "Manage your Elite FUT SNIPER sniping sessions, live profit tracking, and account licenses.",
  alternates: {
    canonical: "https://www.elitefutbot.com/dashboard",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
