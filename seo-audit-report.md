# SEO Audit — elitefutbot.com

- **Date:** 2026-11-02
- **Scope:** `elitefutbot-web` at `159956c` (main = origin/main), audited as a local production build (`next build && next start`, port 3100) plus live checks on https://www.elitefutbot.com
- **Method:** claude-seo v2.5.0 (`agentic_check`, `render_page`, PSI wrapper), a full crawl of all 102 sitemap URLs + 7 extra routes, source review, and lab Core Web Vitals in Playwright Chromium (mobile viewport, 4× CPU throttle)
- **Business type:** SaaS / digital product (Chrome extension, subscription license), 11 locales

## Executive summary

| | Before fixes | After fixes (local) |
|---|---|---|
| **SEO Health Score** | **71 / 100** | **~75 / 100** |
| Pages with unsupported 4.9★ / 1,420-review markup | 75 | 0 |
| Internal links to 404 (`/pricing`) | 11 pages | 0 |
| Noindex URLs in sitemap | 1 | 0 |
| Inbound internal links to localized pages (min / avg) | 0 / 1.4 | 10 / 34.9 |
| Localized responses with correct language signal in raw HTTP | 0 / 33 | 33 / 33 |

The technical foundation is strong. Every indexable page server-renders 400–4,500 words, canonicals are self-referencing and correct on 107/107 pages, hreflang is complete and reciprocal on all 34 localized URLs, robots.txt is deliberate about AI crawlers, unknown URLs return real 404s, and lab CWV are good. The main risks were in structured data (a rating claim with no visible support) and in how the localized pages were linked and language-tagged.

### Top issues
1. **Critical:** AggregateRating 4.9★ / 1,420 reviews in JSON-LD on 75 pages, never shown on any page and contradicting the homepage's 5.0★ / 8 (**fixed**, with your approval)
2. **High:** 11 comparison pages link to `/pricing`, which returns 404 (**fixed**)
3. **High:** the 33 localized URLs had 0–2 crawlable inbound links, because the language menu's `<a>` tags only existed after a click (**fixed**)
4. **High:** localized pages server-render `<html lang="en">`; only client JS corrects it (**mitigated** with a `Content-Language` header; full fix is Medium M1)
5. **High:** `/volt-velocity` is `noindex` but listed in the sitemap (**fixed**)

### Top quick wins (remaining)
1. Remove the duplicate hardcoded `<meta>` tags in the root layout (M4, ~10 lines)
2. Drop `shippingDetails`, `hasMerchantReturnPolicy` and the dead `SearchAction` from the site-wide schema (M5)
3. Use real `lastmod` dates in the sitemap instead of "now" for every URL (M6)
4. Add a `> summary` blockquote to `llms.txt` (M11)
5. Redirect `elitefutbot-web.vercel.app` to www at the Vercel domain level (M10)

## Category scores

| Category | Weight | Before | After | Notes |
|---|---|---|---|---|
| Technical SEO | 22% | 78 | 85 | Crawl and indexing solid; fixes cover broken links, sitemap hygiene and language signals |
| Content Quality (E-E-A-T) | 23% | 62 | 62 | Lots of content, weak attribution and substantiation (unchanged: these are copy/claim decisions) |
| On-Page SEO | 20% | 75 | 76 | English meta is good; localized titles and descriptions often too long |
| Schema / Structured Data | 10% | 45 | 70 | Rich coverage; unsupported rating removed; cleanup remains |
| Performance (CWV) | 10% | 85 | 85 | Lab only; PSI/CrUX field data unavailable (rate-limited without API key) |
| AI Search Readiness | 10% | 78 | 80 | AI crawlers allowed, llms.txt valid, SSR content; entity story inconsistent |
| Images | 5% | 85 | 85 | All `<img>` have alt; mostly `next/image` |

---

## Technical SEO

**What works**
- Apex → www is a single 308 hop, HTTPS with HSTS (`max-age=63072000`)
- `robots.txt` (`src/app/robots.ts`) allows search and AI crawlers, disallows `/api/`, `/dashboard`, `/forgot-password`, `/reset-password`, and declares the sitemap
- All 102 sitemap URLs return 200 with a self-referencing canonical; `/en` and unknown paths return a real 404
- Static/SSG rendering for every marketing page (`next build` route table); 2,481 words available without JS on the homepage (agentic_check)
- Security headers: nosniff, SAMEORIGIN, `frame-ancestors`, Referrer-Policy, Permissions-Policy

**Findings**

| Sev | Finding | Evidence | Files |
|---|---|---|---|
| High | Broken internal link to `/pricing` (404 locally and in prod) | 11 comparison pages; `/pricing` → 404 | `src/data/competitors/{cheatas,fc27autotrader,fccopilot,futautobuyer,futcoinharvester,futfun,futisland,lenabot,magicbuyer,nokafut,raven}.ts` (`developerOriginNote.linkUrl`), `next.config.ts` |
| High | Noindex URL submitted in sitemap | `/volt-velocity` has `robots: {index:false}` but is listed in the sitemap → GSC "Submitted URL marked noindex" | `src/app/sitemap.xml/route.ts` |
| High | Localized pages are effectively orphaned | Language-menu links rendered only when open (`{isOpen && …}`), so 6 localized URLs had 0 inbound `<a>` links and the rest 1–2 | `src/components/LanguageSelector.tsx` |
| High | Wrong language in raw HTML for 33 localized URLs | Single root layout hardcodes `<html lang="en">`; `SetDocumentLang` fixes it only via inline JS, which Bing (Copilot/ChatGPT search index) and non-rendering AI fetchers may not run | `src/app/layout.tsx`, `src/components/SetDocumentLang.tsx`, `next.config.ts` |
| Medium | `lastmod` is the request/build time for every URL | All 102 entries share one timestamp, so Google learns to ignore `lastmod` | `src/app/sitemap.xml/route.ts` |
| Medium | Production also served on `elitefutbot-web.vercel.app` (200) | Canonical points to www, so impact is contained, but it is a duplicate host | Vercel project → Domains (or a host-based redirect in `next.config.ts`) |
| Medium | Nested `<main>` landmarks | Root layout wraps pages in `<main>`, and 14 pages render their own `<main>` (e.g. `/blog`, comparison pages) | `src/app/layout.tsx`, `src/components/CompetitorComparisonPage.tsx`, `src/app/blog/page.tsx`, … |
| Low | `http://elitefutbot.com` → `https://elitefutbot.com` → `https://www.` is 2 hops | curl | Vercel domain config |
| Low | HSTS lacks `includeSubDomains; preload` | response headers | Vercel / `next.config.ts` |

## Content quality and E-E-A-T

**What works:** comparison pages are long (2,500–4,500 words) and not near-duplicates (8-gram overlap between pages is ~20%). The homepage shows 8 attributed reviews (with screenshots and named reviewers) that match its Review markup, and the install and sniping guides are substantial.

| Sev | Finding | Evidence | Files |
|---|---|---|---|
| Medium | Inconsistent founder/origin story (entity confusion for Google and LLMs) | Homepage hero: "original lead developer behind **Jokers FUTSnipe Bot**"; `llms.txt` and `/bakers-bot-developer`: former lead dev of **FIFASniping Bot / Baker's Bot** | `src/app/page.tsx`, `public/llms.txt`, `src/app/bakers-bot-developer/page.tsx` — **needs your decision; not changed** |
| Medium | Heavy unverifiable superlatives | "#1", "world's fastest and safest", "0 bans across 14,000+ sessions", "sub-20ms" across pages, meta descriptions and `llms.txt`, with no methodology/source page | site-wide; `public/llms.txt` — **marketing claims; not changed**. Recommend a public "how we measure" page to substantiate them |
| Medium | No named human author | `Article.author` is "Elite FUT SNIPER Engineering Team" or the Organization; there is no About/team page | `src/components/CompetitorComparisonPage.tsx`, `src/app/tools/sniping-guide/page.tsx`, `src/app/article/tactical-intel/page.tsx` |
| Medium | Blog hub is thin | `/blog` has 429 words; all 5 cards link to the single article `/article/tactical-intel` | `src/app/blog/page.tsx` |
| Low | Short utility pages | `/bio` 442, `/contact` 443, `/referral` 396 words (fine for their purpose) | — |

## On-page SEO

**What works:** English titles (30–65 chars), descriptions, single H1 and OG/Twitter tags on every page. No duplicate English titles.

| Sev | Finding | Evidence | Files |
|---|---|---|---|
| Medium | Localized feature/guide titles and descriptions too long | 20 pages: titles 66–84 chars, descriptions 167–195 chars (e.g. `/fr/fc27-fut-snipe-bot` 84 / 195) | `src/data/locales/{de,es,es-mx,fr,it,pl,pt,pt-pt,tr,ar}.ts` (`fc27*.meta`) — copy, **not changed** |
| Medium | `/de`, `/fr`, `/ar` home titles are the English title, identical to `/` | "EA FC 27 FUT Sniping Bot & Autobuyer \| Elite FUT Sniper" ×4 | `src/data/locales/{de,fr,ar}.ts` (`home.meta.title`) — copy, **not changed** |
| Medium | Duplicate `<head>` tags site-wide | 2× `og:image`, 2× `twitter:card`, 2× `msvalidate.01`, 2× `yandex-verification` on every page (hardcoded tags plus the Metadata API). Harmless today because every page uses the same OG image, but any per-page OG image would conflict | `src/app/layout.tsx` (hardcoded `<meta>` in `<head>`) |
| Low | es/es-mx and pt/pt-pt share titles and descriptions | Expected for same-language regional variants; hreflang disambiguates | `src/data/locales/*` |

## Schema and structured data

**What works:** Organization, WebSite, SoftwareApplication+Offer, BreadcrumbList, FAQPage, Article, HowTo, VideoObject, ProfilePage and CollectionPage are all present, and all JSON-LD parses.

| Sev | Finding | Evidence | Files |
|---|---|---|---|
| **Critical** | AggregateRating 4.9★ from 1,420 reviews with no visible on-page support | On 75 pages (54 comparisons, 10 localized homes, 11 `fc27-fut-snipe-bot` variants). Never appears in page text; conflicts with homepage 5.0★/8 for the same product. Violates Google's review-snippet guidelines; manual-action risk | `src/components/CompetitorComparisonPage.tsx`, `src/app/[locale]/page.tsx`, `src/app/[locale]/fc27-fut-snipe-bot/page.tsx`, `src/app/fc27-fut-snipe-bot/page.tsx` |
| Medium | Site-wide SoftwareApplication carries physical-goods fields | `shippingDetails` (US only) and `MerchantReturnNotPermitted` on a digital license | `src/app/layout.tsx` |
| Medium | Multiple conflicting SoftwareApplication nodes per page | Layout node (`#software`, OS "Web, Windows, macOS") plus page node (no `@id` on comparisons, OS "…ChromeOS, Linux"); 5 different `operatingSystem` strings site-wide | `src/app/layout.tsx`, `src/components/CompetitorComparisonPage.tsx`, `src/app/[locale]/*` |
| Medium | `WebSite.potentialAction` SearchAction targets `/?q=` | The site has no search; Google retired the sitelinks search box (Nov 2024) | `src/app/layout.tsx` |
| Low | HowTo and FAQPage no longer earn rich results for this site type | Harmless; keep only if useful for AI parsing | various |

## Performance (lab)

Local production build, Playwright Chromium, 412×823 mobile, 4× CPU throttle. Localhost means TTFB and network are optimistic, and GA/Clarity don't load on localhost.

| Page | LCP | CLS | TBT | JS (gz) | Total |
|---|---|---|---|---|---|
| `/` | 1.6 s | 0 | 219 ms | 294 KB | 764 KB |
| `/fc27-fut-snipe-bot` | 0.74 s | 0 | 95 ms | 300 KB | 857 KB |
| `/futearn-vs-elitefutbot` | 0.62 s | 0 | 121 ms | 318 KB | 692 KB |
| `/tools/sniping-guide` | 0.71 s | 0 | 80 ms | 298 KB | 1.8 MB |
| `/de` | 0.68 s | 0 | 122 ms | 290 KB | 733 KB |

LCP is a text node on every page (good), CLS is 0, and analytics are deferred (Clarity on interaction/idle). Firebase loads only on `/dashboard`.

- **Low:** `/tools/sniping-guide` transfers 1.8 MB, mostly screenshots; check `sizes` on its `next/image` uses
- **Low:** the homepage renders `/snipe-guide-bot-advanced.png` twice through a raw `<img>` instead of `next/image` (`src/app/page.tsx`)
- **Gap:** PageSpeed Insights / CrUX returned "rate limit exceeded" without an API key. Add a key to `claude-seo` (or check Search Console → Core Web Vitals) for field INP/LCP

## AI search and agent readiness

From claude-seo `agentic_check` on production:
- **Pass:** content present without JS, robots.txt reachable, deliberate AI-crawler groups (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended), `llms.txt` valid per Lighthouse, real 404s
- **Info / optional:**
  - no `Content-Signal` line in robots.txt
  - no Markdown alternate (`/index.md` 404)
  - no `llms-full.txt`
  - `llms.txt` lacks the `> summary` blockquote and is 37 KB of mostly promotional copy
  - no WebMCP (not needed: the site has no forms beyond auth/contact)
- **Medium:** the entity inconsistency (Jokers vs FIFASniping/Baker's Bot) and the unsubstantiated superlatives are the biggest drag on AI citation, because LLMs down-weight claims they can't corroborate. Files: `public/llms.txt`, `src/app/page.tsx`.

## Images

All `<img>` elements on crawled pages have `alt` text, and review screenshots carry descriptive alts that quote the review. Assets are served through `next/image` (AVIF/WebP, 1-year cache) except the raw `<img>` noted above.

---

## Prioritized fix list

### Critical
| # | Fix | Files | Status |
|---|---|---|---|
| C1 | Remove unsupported AggregateRating (4.9 / 1,420) | `src/components/CompetitorComparisonPage.tsx`, `src/app/[locale]/page.tsx`, `src/app/[locale]/fc27-fut-snipe-bot/page.tsx`, `src/app/fc27-fut-snipe-bot/page.tsx` | ✅ Fixed (owner-approved). Homepage 5.0★/8 kept because those reviews are visible |

### High
| # | Fix | Files | Status |
|---|---|---|---|
| H1 | Repoint `/pricing` links to `/#pricing`; add permanent `/pricing → /#pricing` redirect | 11 × `src/data/competitors/*.ts`, `next.config.ts` | ✅ Fixed |
| H2 | Remove noindex `/volt-velocity` from the sitemap | `src/app/sitemap.xml/route.ts` | ✅ Fixed |
| H3 | Render language-menu links in the server HTML (toggle with `hidden`), add `hrefLang`/`lang` on each link | `src/components/LanguageSelector.tsx` | ✅ Fixed |
| H4 | Correct language signal for localized pages: `Content-Language` header per locale prefix (from the locale registry); `SetDocumentLang` now sets the BCP 47 tag (`pt-BR`, `es-MX`, `pt-PT`) instead of the URL prefix | `next.config.ts`, `src/components/SetDocumentLang.tsx` | ✅ Mitigated. Full fix is M1 |

### Medium
| # | Fix | Files |
|---|---|---|
| M1 | Server-render the right `<html lang>`: split into two root layouts (`app/(site)/layout.tsx` for English, `app/[locale]/layout.tsx` with `lang`/`dir` from the registry). Needs moving routes into a route group, a `global-not-found`, and keeping `favicon.ico`/metadata files at the app root | `src/app/layout.tsx`, new `src/app/[locale]/layout.tsx`, `src/app/(site)/**` |
| M2 | Shorten localized `fc27*` titles (≤60) and descriptions (≤160) — *copy, needs your sign-off* | `src/data/locales/*.ts` |
| M3 | Translate `/de`, `/fr`, `/ar` home titles — *copy, needs your sign-off* | `src/data/locales/{de,fr,ar}.ts` |
| M4 | Delete the hardcoded `og:image*`, `twitter:card/image/site`, `msvalidate.01`, `yandex-verification` tags (already emitted by `metadata`; move `twitter.site` into `metadata`) | `src/app/layout.tsx` |
| M5 | Clean site-wide schema: drop `shippingDetails`/`hasMerchantReturnPolicy`, drop the SearchAction, unify `operatingSystem`, and give page-level SoftwareApplication nodes the shared `@id` | `src/app/layout.tsx`, `src/components/CompetitorComparisonPage.tsx`, `src/app/[locale]/*/page.tsx` |
| M6 | Real per-URL `lastmod` (constants or git commit dates) | `src/app/sitemap.xml/route.ts` |
| M7 | Reconcile the founder/origin story across homepage, `/bakers-bot-developer` and `llms.txt` — *claims, needs your decision* | `src/app/page.tsx`, `src/app/bakers-bot-developer/page.tsx`, `public/llms.txt` |
| M8 | Add named author/Person schema and an About page; link authors from Article markup | `src/components/CompetitorComparisonPage.tsx`, `src/app/tools/sniping-guide/page.tsx`, new `src/app/about/page.tsx` |
| M9 | Substantiate or soften superlatives ("#1", "0 bans / 14,000+ sessions", "sub-20ms") with a methodology page — *claims, needs your decision* | site-wide, `public/llms.txt` |
| M10 | 308 `elitefutbot-web.vercel.app` → www | Vercel Domains settings |
| M11 | `llms.txt`: add a `> summary` blockquote, trim to facts plus links; optionally add `llms-full.txt` | `public/llms.txt` |
| M12 | Make `/blog` a real hub (distinct articles) or fold it into `/tools/sniping-guide` | `src/app/blog/page.tsx` |
| M13 | One `<main>` per page | `src/app/layout.tsx` + 14 pages rendering `<main>` |

### Low
- Add `Content-Signal` to robots groups (`src/app/robots.ts`)
- HSTS `includeSubDomains; preload`
- Collapse the http→https→www double hop
- Raw `<img>` on homepage → `next/image` (`src/app/page.tsx`)
- Image weight on `/tools/sniping-guide`
- Drop HowTo markup if not used

## Verification performed (local, port 3100)
- `tsc --noEmit` clean; `eslint` on changed files: 0 errors (1 existing warning: unused `path` import in `next.config.ts`); `next build` succeeds
- Re-crawled all 109 URLs: same 107 × 200 / 2 × 404 as before; 0 pages with the 4.9 rating; 0 links to `/pricing`; localized inbound links min 10 / avg 35 (was 0 / 1.4)
- `GET /pricing` → 308 `/#pricing`; `/de` → `Content-Language: de`, `/pt` → `pt-BR`, `/es-mx/…` → `es-MX`, English pages have no header
- Playwright: language dropdown hidden on load, opens on click, closes on outside click

Critical and High fixes ship in branch `gb-seo-fix-structured-data-links-hreflang` (PR into `main`); not deployed until merged.
