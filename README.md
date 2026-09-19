# Multi-niche SEO sites

Three **separate** websites. Unrelated niches stay on their own domains so one weak vertical cannot drag the others.

| Folder | Working name | Niche | Status |
| --- | --- | --- | --- |
| `01-ai-tools` | Kiln | AI tools directory + SaaS comparisons | Build first |
| `02-jobs` | Rolepaper | Third-party jobs aggregator (tech + electrical) | Build second |
| `03-gaming-deals` | Floor Price | Gaming / gadget verified deals | Research now, build later |

Each folder has a `research/` directory with keywords, IA, and the content plan. Applications are Next.js App Router (TypeScript, SSR/ISR) so custom domains can go to **Vercel** when you buy them. InfinityFree is only a fallback and is a poor fit for AdSense crawlers.

## Dynamic jobs (no visitor-side scraping)

The visitor’s browser **cannot** legally or reliably scrape Indeed, LinkedIn, or Glassdoor. Those sites block CORS and forbid scraping in their terms. Option 1 is already in `02-jobs`: our Next.js server fetches **public job APIs** (Remote OK, Himalayas, Arbeitnow) and the page refreshes listings on each visit (cached a few minutes). That does **not** need a VPS.

Use a VPS later only if you want 24/7 polling of many company Greenhouse/Lever boards beyond what these APIs cover.
