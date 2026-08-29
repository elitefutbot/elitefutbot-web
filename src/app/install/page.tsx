import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Install Guide",
  description:
    "How to install Elite FUT SNIPER in Chrome and start auto-sniping on the EA FC Ultimate Team Web App transfer market.",
  alternates: { canonical: "/install" },
};

const steps = [
  {
    step: "01",
    title: "Log in to your account",
    body: "Elite FUT SNIPER needs an account to run — it's what your 7-day free trial and license are tied to. Create one (or log in if you already have one) before downloading the extension.",
    links: [
      { href: "/register", label: "Create Account" },
      { href: "/login", label: "Log In" },
    ],
  },
  {
    step: "02",
    title: "Download the extension",
    body: "Grab the packaged .zip from your dashboard once you're logged in.",
  },
  {
    step: "03",
    title: "Enable Developer Mode",
    body: 'Open chrome://extensions, and toggle "Developer mode" in the top-right corner.',
  },
  {
    step: "04",
    title: "Load the unpacked extension",
    body: 'Click "Load unpacked" and select the unzipped folder. Elite FUT SNIPER will appear in your extensions list.',
  },
  {
    step: "05",
    title: "Pin it and open the Side Panel",
    body: "Pin Elite FUT SNIPER to your toolbar, open the EA FC Ultimate Team Web App, then launch the Side Panel to configure your first snipe.",
  },
];

export default function InstallPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="font-display text-6xl tracking-tight mb-4">
        Install <span className="bg-primary text-dark px-[0.06em] rounded-[0.06em] box-decoration-clone">Elite FUT SNIPER</span>
      </h1>
      <p className="text-gray-400 mb-16 max-w-xl">
        Try it free for 7 days, and setup takes about two minutes.
      </p>

      <ol className="space-y-10">
        {steps.map((s) => (
          <li key={s.step} className="flex gap-6">
            <span className="font-display text-4xl inline-block shrink-0 w-fit bg-primary text-dark px-[0.06em] rounded-[0.06em] box-decoration-clone">
              {s.step}
            </span>
            <div>
              <h2 className="font-bold text-xl mb-2">{s.title}</h2>
              <p className="text-sm text-gray-400 leading-relaxed">{s.body}</p>
              {s.links ? (
                <div className="flex flex-wrap gap-3 mt-4">
                  {s.links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="px-5 py-2 rounded-full bg-primary text-dark font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-16 p-6 rounded-2xl bg-surface border border-white/10">
        <p className="text-sm text-gray-400 leading-relaxed">
          Need the full technical setup, including build commands and
          configuration options? See the project README for build steps and
          environment variables.
        </p>
      </div>

      <div className="mt-12 flex flex-wrap gap-4">
        <Link
          href="/#features"
          className="px-8 py-4 rounded-full border border-white/20 bg-surface text-white font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-colors"
        >
          Explore Features
        </Link>
        <Link
          href="/#faq"
          className="px-8 py-4 rounded-full border border-white/20 bg-surface text-white font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-colors"
        >
          Read the FAQ
        </Link>
      </div>
    </main>
  );
}
