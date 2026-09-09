import type { NextConfig } from "next";
import path from "path";

const BACKEND_API_URL =
  process.env.BACKEND_API_URL ?? "https://elitefutbot-backend-three.vercel.app";

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
    ];
  },
  async redirects() {
    return [
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
    ];
  },
};

export default nextConfig;

