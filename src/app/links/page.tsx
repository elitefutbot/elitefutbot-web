import type { Metadata } from "next";
import LinksDirectoryClient from "./LinksDirectoryClient";

export const metadata: Metadata = {
  title: "Site Directory & Route Catalog | Elite FUT SNIPER",
  description:
    "Internal master directory of all 60 pages and routes on the Elite FUT SNIPER website. Explore tools, SBC solvers, trading intel, and competitor comparisons.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "none",
      "max-snippet": -1,
    },
  },
};

export default function LinksPage() {
  return <LinksDirectoryClient />;
}
