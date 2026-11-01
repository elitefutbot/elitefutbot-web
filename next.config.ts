import type { NextConfig } from "next";
import path from "path";
import { ACTIVE_ROUTED_LOCALES } from "./src/data/locales/registry";

const BACKEND_API_URL =
  process.env.BACKEND_API_URL ?? "https://elitefutbot-backend-three.vercel.app";

// The single root layout server-renders <html lang="en"> for every route, so
// localized pages only get their real language after client JS runs. Send the
// correct Content-Language header so non-rendering crawlers (Bing/Copilot, AI
// search fetchers) see the right language in the raw response.
const localeLanguageHeaders = ACTIVE_ROUTED_LOCALES.flatMap((locale) =>
  [`/${locale.prefix}`, `/${locale.prefix}/:path*`].map((source) => ({
    source,
    headers: [{ key: "Content-Language", value: locale.hreflang }],
  }))
);

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${BACKEND_API_URL}/api/:path*`,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 85],
    minimumCacheTTL: 31536000,
  },
  turbopack: {
    root: __dirname,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          // Framing-only CSP (modern equivalent of X-Frame-Options). Deliberately
          // no script-src etc. — a full policy would risk breaking GA, Clarity,
          // YouTube embeds and Firebase.
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'self'",
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=()',
          },
        ],
      },
      {
        source: '/(.*)\\.(webp|png|jpg|jpeg|svg|ico|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      ...localeLanguageHeaders,
    ];
  },
  async redirects() {
    return [
      // There is no /pricing route; pricing lives in the homepage #pricing
      // section. Catch old/external links instead of serving a 404.
      {
        source: "/pricing",
        destination: "/#pricing",
        permanent: true,
      },
      {
        source: "/support",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/socials",
        destination: "/bio",
        permanent: true,
      },
      {
        source: "/linktree",
        destination: "/bio",
        permanent: true,
      },
      {
        source: "/guide/linking-club",
        destination: "/",
        permanent: true,
      },
      {
        source: "/ai-sbc-solver/engineering",
        destination: "/ai-sbc-solver",
        permanent: true,
      },
      {
        source: "/ai-sbc-solver/tactical",
        destination: "/ai-sbc-solver",
        permanent: true,
      },
      {
        source: "/ai-sbc-solver/command",
        destination: "/ai-sbc-solver",
        permanent: true,
      },
      {
        source: "/fc27-fut-sniping-bout-utobuyer-features",
        destination: "/fc27-fut-sniping-bot-autobuyer-features",
        permanent: true,
      },
      {
        source: "/fc26enhancer-vs-elitefutbot",
        destination: "/fcenhancer-vs-elitefutbot",
        permanent: true,
      },
      {
        source: "/futsnipe-vs-elitefutbot",
        destination: "/eafcsniper-vs-elitefutbot",
        permanent: true,
      },
      {
        source: "/futinatorplus-vs-elitefutbot",
        destination: "/futinator-vs-elitefutbot",
        permanent: true,
      },
      {
        source: "/paledroid-vs-elitefutbot",
        destination: "/paletools-vs-elitefutbot",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

