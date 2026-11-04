import { NextResponse } from 'next/server';
import {
  BASE_URL,
  ACTIVE_LOCALES,
  TRANSLATED_SUBPATHS,
  getHreflangAlternates,
  getLocaleUrl,
} from '@/data/locales/registry';
import { SITEMAP_LASTMOD } from '@/data/sitemap-lastmod';

export const dynamic = 'force-static';
export const revalidate = 86400; // 24 hours

interface SitemapEntry {
  /** Absolute URL, written exactly as the page's canonical URL. */
  url: string;
  /** Real date of the last significant content change (see sitemap-lastmod.ts). */
  lastModified?: string;
  /** hreflang code -> absolute URL, only for pages that really exist per language. */
  alternates?: Record<string, string>;
}

/**
 * English-only pages. Pages translated into other languages come from the
 * locale registry below (TRANSLATED_SUBPATHS x ACTIVE_LOCALES).
 *
 * After adding a page here, run `npm run sitemap:lastmod` so it gets a date.
 * /volt-velocity is intentionally excluded: it is noindex, and a noindex URL
 * in a sitemap sends Google conflicting signals.
 */
const STATIC_PATHS = [
  "/sbc-solver",
  "/ai-sbc-solver",
  "/tools/tax-calculator",
  "/tools/sniping-guide",
  "/tools/comparison-guide",
  "/fcautobuyer-vs-elitefutbot",
  "/eafcsnipingbot-vs-elitefutbot",
  "/remx-vs-elitefutbot",
  "/abfut-vs-elitefutbot",
  "/futeasy-vs-elitefutbot",
  "/bakers-bot-vs-elitefutbot",
  "/futsimpletrader-vs-elitefutbot",
  "/futearn-vs-elitefutbot",
  "/futsniper-vs-elitefutbot",
  "/futsnipingbot-vs-elitefutbot",
  "/futinator-vs-elitefutbot",
  "/futbotmanager-vs-elitefutbot",
  "/futmania-vs-elitefutbot",
  "/futcoinbuddy-vs-elitefutbot",
  "/futhunter-vs-elitefutbot",
  "/futultimatesniper-vs-elitefutbot",
  "/futdroid-vs-elitefutbot",
  "/steviessniper-vs-elitefutbot",
  "/futrich-vs-elitefutbot",
  "/futlocker-vs-elitefutbot",
  "/futtbot-vs-elitefutbot",
  "/fifasnipebot-vs-elitefutbot",
  "/fc26snipingbot-vs-elitefutbot",
  "/easyfutweb-vs-elitefutbot",
  "/futmaker-vs-elitefutbot",
  "/snipesensei-vs-elitefutbot",
  "/futsniperweb-vs-elitefutbot",
  "/easysbc-vs-elitefutbot",
  "/paletools-vs-elitefutbot",
  "/futgg-vs-elitefutbot",
  "/futsnipingbot24-vs-elitefutbot",
  "/futgenie-vs-elitefutbot",
  "/exesniper-vs-elitefutbot",
  "/futbotclub-vs-elitefutbot",
  "/shortfuts-vs-elitefutbot",
  "/futcloud-vs-elitefutbot",
  "/futmillionaire-vs-elitefutbot",
  "/futstarz-vs-elitefutbot",
  "/utsniper-vs-elitefutbot",
  "/sniperbotitalia-vs-elitefutbot",
  "/eafcsniper-vs-elitefutbot",
  "/fcenhancer-vs-elitefutbot",
  "/futtradebuddy-vs-elitefutbot",
  "/futfun-vs-elitefutbot",
  "/futcoinharvester-vs-elitefutbot",
  "/futautobuyer-vs-elitefutbot",
  "/lenabot-vs-elitefutbot",
  "/magicbuyer-vs-elitefutbot",
  "/raven-vs-elitefutbot",
  "/fc27autotrader-vs-elitefutbot",
  "/futisland-vs-elitefutbot",
  "/nokafut-vs-elitefutbot",
  "/cheatas-vs-elitefutbot",
  "/fccopilot-vs-elitefutbot",
  "/blog",
  "/article/tactical-intel",
  "/affiliate",
  "/bakers-bot-developer",
  "/contact",
  "/bio",
  "/install",
  "/fut-sniping-bot-free-trial",
  "/referral",
  "/terms",
  "/privacy",
];

/**
 * Canonical form of a URL: the bare homepage has no trailing slash, matching
 * the <link rel="canonical"> and hreflang tags in the page <head>.
 */
function canonical(url: string): string {
  return url === `${BASE_URL}/` ? BASE_URL : url;
}

function pathOf(url: string): string {
  return url.replace(BASE_URL, '') || '/';
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function GET() {
  const entries: SitemapEntry[] = [];

  // Translated pages: one entry per language, each carrying the full hreflang set.
  for (const subpath of TRANSLATED_SUBPATHS) {
    const alternates = Object.fromEntries(
      Object.entries(getHreflangAlternates(subpath)).map(([lang, href]) => [lang, canonical(href)]),
    );
    for (const locale of ACTIVE_LOCALES) {
      const url = canonical(getLocaleUrl(locale.prefix, subpath));
      entries.push({ url, lastModified: SITEMAP_LASTMOD[pathOf(url)], alternates });
    }
  }

  // English-only pages: no hreflang (they have no translated versions).
  for (const path of STATIC_PATHS) {
    entries.push({ url: `${BASE_URL}${path}`, lastModified: SITEMAP_LASTMOD[path] });
  }

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>\n';
  xml +=
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

  for (const entry of entries) {
    xml += '  <url>\n';
    xml += `    <loc>${escapeXml(entry.url)}</loc>\n`;
    if (entry.alternates) {
      for (const [lang, href] of Object.entries(entry.alternates)) {
        xml += `    <xhtml:link rel="alternate" hreflang="${lang}" href="${escapeXml(href)}" />\n`;
      }
    }
    // <lastmod> is left out when unknown: no date is better than a wrong one.
    if (entry.lastModified) {
      xml += `    <lastmod>${entry.lastModified}</lastmod>\n`;
    }
    xml += '  </url>\n';
  }

  xml += '</urlset>';

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400',
    },
  });
}
