import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Log In to Your Account",
  description: "Log in to your Elite FUT SNIPER account to manage your subscription and access the Web App sniping bot dashboard.",
  alternates: {
    canonical: "https://www.elitefutbot.com/login",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
