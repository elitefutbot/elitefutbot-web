import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Choose a new password for your Elite FUT SNIPER account.",
  alternates: {
    canonical: "https://www.elitefutbot.com/reset-password",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ResetPasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
