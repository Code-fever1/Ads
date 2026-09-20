# SEO & Site Record Ledger

Read this file **before** adding a site folder, a public page, AdSense tags, or a sitemap. Update the matching site section **after** the work ships.

Copy working patterns from `01-ai-tools` (Kiln). Do not invent a second SEO stack.

## Must never do

- Mix niches on one subdomain (no jobs on Kiln, no AI tools on Rolepaper).
- Add `kiln.toolfolio.page` or `rolepaper.toolfolio.page` as extra AdSense **sites**. One property: **toolfolio.page**.
- Put `ads.txt` on a subdomain. Apex only: `https://toolfolio.page/ads.txt`. Subdomain `ads.txt` 404 is expected.
- Set `alternates.canonical: "/"` in `app/layout.tsx`. That canonicalizes every URL to the homepage. Each page sets its own canonical via `pageMeta`.
- Inflate hub metrics. Kiln has **37** tool profiles. Rolepaper caps the live board at **100** software/ML jobs. Electrical is a supporting filter, not a full inventory.
- Turn on Auto ads until AdSense status is **Ready**.
- Chase head terms: `jobs`, `job search`, `Indeed`, `ChatGPT` login, `electrician near me`.

## New folder / new site blueprint

Folder names stay `NN-niche` (`04-…` next). Each site is its own Vercel project + Name.com CNAME to `cname.vercel-dns.com`.

Duplicate from Kiln, then change names/domains:

1. `lib/site.ts` — `name`, `domain`, `description`.
2. `lib/seo.ts` — `pageMeta()` with per-page `canonical`, Open Graph, Twitter.
3. `app/layout.tsx` — `metadataBase`, title template, **no** layout canonical. Raw AdSense tag in `<head>`:
   `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5974580626732926`
4. Footer on every page: Privacy `https://toolfolio.page/privacy` and Ads `https://toolfolio.page/disclosure`.
5. `lib/jsonld.ts` + `JsonLd` — `Organization`, `WebSite`, `BreadcrumbList`, `ItemList`, plus niche type (`SoftwareApplication`, `JobPosting`, later `Offer`/`Product`).
6. `app/robots.ts` — copy the `aiCrawlers` allow-list from `01-ai-tools/app/robots.ts`. Disallow `/api/`.
7. `app/sitemap.ts` — absolute `https://{subdomain}.toolfolio.page` URLs for every indexable path.
8. `app/llms.txt/route.ts` — short purpose + “do not use this site for …” boundaries. Google ignores it; other engines may not.
9. `app/opengraph-image.tsx` — site-specific OG image.
10. Semantic HTML: `<time dateTime>`, visible “we are not the vendor/employer”, answer-first H1/H2. Tables on desktop, cards on small screens.
11. After deploy: add a section below, tick what shipped, leave Search Console boxes unchecked until the user submits them.
12. **Search Console Indexing Protocol**: After adding the property and submitting `/sitemap.xml`, wait for status to flip to **Success**. Then manually request indexing for the homepage and 1–2 top pillar URLs via URL Inspection to seed Googlebot crawl pipelines immediately.

## AdSense (network-wide)

| Item | Value |
| --- | --- |
| Publisher | `ca-pub-5974580626732926` |
| ads.txt | `google.com, pub-5974580626732926, DIRECT, f08c47fec0942fa0` at apex only |
| Privacy | `https://toolfolio.page/privacy` |
| CMP site name | **Toolfolio** (not Kiln) |
| Subdomains | Same snippet is enough; they inherit the apex site |

## Query targeting (honest)

**Kiln** — mid-tail tool queries: `best AI coding tools`, `ChatGPT vs Claude`, `ChatGPT alternatives`, named tool reviews. Not navigational `ChatGPT`.

**Rolepaper** — mid-tail role queries: `remote software jobs`, `frontend developer jobs`, `machine learning jobs`. Electrical hub exists but public feeds are thin. Not `jobs`, Indeed, or electrician-near-me. Google for Jobs may pick `/job/[id]` after `JobPosting` is indexed.

**Hub** — brand/house only. It is not a ranking site.

---

## 1. Apex — toolfolio.page (`00-hub`)

- **Niche**: Publisher hub
- **Live**: yes
- **Shipped**: metadata/`pageMeta`, Organization + WebSite JSON-LD, robots + AI crawlers, sitemap, `/llms.txt`, AdSense in `<head>`, **ads.txt**, `/privacy`, `/disclosure`, hub metrics match live inventory (37 tools, up to 100 jobs), intent pills hit real slugs (`/categories/coding`, `/frontend-developer-jobs`)
- **Search Console**:
  - [x] URL-prefix property: `https://toolfolio.page`
  - [x] Sitemap submitted: `https://toolfolio.page/sitemap.xml` — **Status: SUCCESS** (20 Sep 2026)
  - [ ] Domain property `toolfolio.page` (covers all subdomains) — still a Search Console UI action
  - [x] Seed page indexing requested:
    - `https://toolfolio.page/` (Homepage)

## 2. Kiln — kiln.toolfolio.page (`01-ai-tools`)

- **Niche**: AI tools directory
- **Live**: yes
- **Shipped**: `pageMeta` + canonicals, SoftwareApplication / ItemList / Article / Breadcrumb, OG/Twitter + `opengraph-image`, robots, sitemap, `/feed.xml`, `/llms.txt`, AdSense, Privacy + Ads footer, default title **Kiln · AI tools directory**, 301s `/compare/cursor-vs-claude` → `/compare/cursor-vs-claude-code` and `/categories/code` → `/categories/coding`
- **Search Console**:
  - [x] URL-prefix property: `https://kiln.toolfolio.page`
  - [x] Sitemap submitted: `https://kiln.toolfolio.page/sitemap.xml` — **Status: SUCCESS** (20 Sep 2026)
  - [x] Seed pages indexing requested:
    - `https://kiln.toolfolio.page/` (Homepage)
    - `https://kiln.toolfolio.page/tools` (Full interactive catalog)
    - `https://kiln.toolfolio.page/best/ai-coding-tools` (Top ranking guide)

## 3. Rolepaper — rolepaper.toolfolio.page (`02-jobs`)

- **Niche**: Software jobs aggregator (electrical/embedded is a supporting filter when feeds match)
- **Live**: yes
- **Shipped**: `pageMeta` + canonicals, JobPosting / ItemList / Article / Breadcrumb, OG/Twitter + `opengraph-image`, robots, sitemap (includes live `/job/[id]`), `/feed.xml`, `/llms.txt`, AdSense, Privacy + Ads footer, software-first titles, 301 `/electrical-jobs` → `/electrical-engineer-jobs`
- **Search Console**:
  - [x] URL-prefix property: `https://rolepaper.toolfolio.page`
  - [x] Sitemap submitted: `https://rolepaper.toolfolio.page/sitemap.xml` — **Status: SUCCESS** (20 Sep 2026)
  - [x] Seed pages indexing requested:
    - `https://rolepaper.toolfolio.page/` (Homepage)
    - `https://rolepaper.toolfolio.page/jobs` (Live classifieds board)
    - `https://rolepaper.toolfolio.page/remote-jobs` (Top remote role hub)

## 4. Floor Price — TBD (`03-gaming-deals`)

- **Niche**: Gaming / gadget deals
- **Status**: Research only — do not deploy until unique pages exist
- **Shipped**: none (follow blueprint; schema `Offer`/`Product`; still no extra AdSense site; still no ads.txt on the subdomain)
- **Search Console**: pending live URL
