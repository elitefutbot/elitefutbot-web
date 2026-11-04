import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Support",
  description: "Get in touch with the Elite FUT SNIPER team. Discord support, technical help, and general inquiries for our EA FC sniping bot.",
  keywords: "contact elite fut bot, fut snipe bot support, ea fc autobuyer help",
  alternates: {
    canonical: "https://www.elitefutbot.com/contact",
  },
  openGraph: {
    title: "Contact Support | Elite FUT SNIPER",
    description: "Get in touch with the Elite FUT SNIPER team. Discord support, technical help, and general inquiries for our EA FC sniping bot.",
    url: "https://www.elitefutbot.com/contact",
    siteName: "Elite FUT SNIPER",
    type: "website",
    images: [{ url: "https://www.elitefutbot.com/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Support | Elite FUT SNIPER",
    description: "Get in touch with the Elite FUT SNIPER team. Discord support, technical help, and general inquiries for our EA FC sniping bot.",
    images: ["https://www.elitefutbot.com/og-image.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
