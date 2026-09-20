import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Support",
  description: "Get in touch with the Elite FUT SNIPER team. Discord support, technical help, and general inquiries for our EA FC sniping bot.",
  keywords: "contact elite fut bot, fut snipe bot support, ea fc autobuyer help",
  alternates: {
    canonical: "https://www.elitefutbot.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
