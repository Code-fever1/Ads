# Kiln (`kiln.toolfolio.page`)

Independent, human-verified AI tools directory built with Next.js App Router, TypeScript, and static build-time generation (SSG). Part of the Toolfolio network (`toolfolio.page`).

> **Pre-launch verification status (25 Nov 2026):** 22 of 37 tools have verified pricing as of `2026-11-25`. The remaining 15 tools (`cursor`, `lindy`, `microsoft-copilot`, `v0`, `lovable`, `adobe-firefly`, `flux`, `leonardo`, `kling`, `elevenlabs`, `descript`, `otter`, `notion-ai`, `gamma`, `huggingface`) are intentionally marked `priceUsdPerMonth: null` (`"Check official pricing"`, or pay-as-you-go API for `flux`) pending manual browser verification. Never publish unverified figures as verified.

## Running Locally

Requires Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Verification Commands

```bash
npx tsc --noEmit
npm run lint
npm run build
npm run freshness
```

## Architecture & Content Model

All pages use build-time static generation (`export const dynamic = "force-static"`) with zero database, zero auth, and zero ISR revalidation writes.

- **Tools**: `data/tools/<slug>.json` (one JSON file per tool) imported statically in `data/tools.ts`
- **Categories**: `data/categories.json` equivalent in `data/categories.ts` (10 categories + FAQs)
- **Comparisons**: `data/comparisons.ts` (2-way and 3-way comparisons with verdict boxes & FAQs)
- **Best-Of Lists**: `data/rankings.ts` (curated shortlists with per-tool verdicts & FAQs)
- **Guides**: `data/guides.ts` (editorial notes and structured long-form guides)
- **Config / Placeholders**: `lib/site.ts` (`GA4_MEASUREMENT_ID`, `GOOGLE_SITE_VERIFICATION`, `CONTACT_EMAIL`, `NEWSLETTER_URL`)

## How to Add a Tool

1. Create `data/tools/<slug>.json` matching the `Tool` interface in `lib/types.ts` (lowercase hyphenated slug, non-empty `skipIf`, `>= 2` valid `alternatives`, `>= 3` `keyFeatures`, `>= 1` `limitations`, `pricingTiers` with `priceUsdPerMonth: null` if unknown, `affiliateUrl: null` unless joined, and today's ISO `lastVerified`).
2. Import and add the new JSON file to the `tools` array in `data/tools.ts`.
3. Run `npx tsc --noEmit && npm run build` to verify types and static generation, then commit and redeploy.

## How to Add a Comparison

1. Add a new entry to `comparisons` in `data/comparisons.ts` with `tools` (2 or 3 tool slugs), `verdict`, `picks`, `updatedDate`, `>= 6` comparison `rows`, and `3–5` `faqs`.
2. Ensure every slug in `tools` exists in `data/tools/`.
3. Run `npx tsc --noEmit && npm run build` and redeploy.

## Freshness Process

Kiln never scrapes vendor pricing pages automatically (scraping breaks and misses nuances like credit pools or regional tiers).

1. Run `npm run freshness` locally (reads `data/tools/*.json` with zero network calls; prints a table of tools older than 30 days and exits non-zero if any tool is >60 days old).
2. Monthly, open each stale tool's official vendor pricing page by hand.
3. Update `pricingTiers`, `hasFreeTier`, `freeTierNote`, `priceBand`, and `lastVerified` in `data/tools/<slug>.json`.
4. Commit, push, and let Vercel rebuild the static site.
5. In the UI, any tool whose `lastVerified` is >45 days old automatically displays an amber `"re-check on the official site before paying"` warning via `components/VerifiedDate.tsx`.

## Vercel Deployment & Custom Domain

1. Push the repository to GitHub and import the `01-ai-tools` root directory into Vercel as a Next.js project (framework preset: **Next.js**; build command: `npm run build`; no environment variables are required for the site to build).
2. In Vercel **Project Settings → Domains**, add `kiln.toolfolio.page` and configure the DNS record Vercel displays at your domain registrar (typically a `CNAME` pointing `kiln` to `cname.vercel-dns.com` — copy the exact value shown in Vercel's UI rather than assuming it).
3. Keep the apex domain `toolfolio.page` pointed at the existing `00-hub` Vercel project (do not modify it as part of Kiln deploys).
4. Verify the live deployment loads cleanly, then set `NEXT_PUBLIC_GA4_MEASUREMENT_ID` and `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in Vercel Environment Variables (or update the fallback constants in `lib/site.ts`) and redeploy.
5. Submit `https://kiln.toolfolio.page/sitemap.xml` in Google Search Console.
