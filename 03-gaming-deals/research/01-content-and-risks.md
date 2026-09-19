# Floor Price — Site 3 research (build later)

Working name: **Floor Price**. Separate domain. Do not merge into Kiln or Rolepaper.

## Pick one vertical when you build

1. **Gaming deals / historical lows** (matches interest; store affiliates usually beat AdSense RPM)
2. **Tech gadgets + verified deals**

Both are aggregator sites: we are not the store. We link out.

## What this site must never be

- Pirate streams, cam rips, “free movies”
- Game cracks, keygens, ROM warehouses
- Thin coupon scrapes and 10,000 city doorways

Those patterns kill AdSense and can take a whole Google account with them.

## Phase 1 IA (when you open this folder for real)

- `/` verified lows this week
- `/game/[slug]` or `/product/[slug]`
- `/store/[merchant]`
- `/deals` with last-checked timestamps
- `/method` how a “historical low” is computed

## Content before code

Write 20 unique buying guides (e.g. “Steam deck accessories that actually change the machine”) before mass-importing prices. Price rows can be dynamic later via official store APIs or affiliate feeds. Browser-side scraping of Amazon/Steam storefronts has the same CORS and terms problem as job boards.

## Dynamic prices

- **Option 1:** official affiliate APIs (Amazon PA-API, selected game stores) from Next.js route handlers on Vercel
- **Option 2:** VPS worker if you must poll many stores on a schedule

Do not ask the visitor’s browser to scrape store HTML.

## Build order

After Kiln has a custom domain and AdSense is in motion, and Rolepaper’s live feed is stable. Empty deal shells are worse than a delayed launch.
