# Rolepaper — Site 2 research and content plan

Working name: **Rolepaper**. We are not the employer. Every listing is a third-party posting with an outbound apply URL, an employer name, a posted date, and an expiry rule.

## Dynamic listings (read this)

**The visitor’s browser cannot scrape Indeed, LinkedIn, or Glassdoor.** Those sites block CORS and forbid scraping. A page that tried to “use the user’s computer” to harvest those boards would fail in the browser and would violate their terms.

### Option 1 (built in this folder, no VPS)

Our **Next.js server** fetches public, documented feeds:

- Remote OK JSON: `https://remoteok.com/api` (credit Remote OK with a follow link)
- Himalayas Jobs API: `https://himalayas.app/jobs/api` (cursor pagination)
- Arbeitnow Job Board API: `https://www.arbeitnow.com/api/job-board-api`

The visitor’s browser only talks to `/api/jobs/live` on our domain. Listings refresh on visit, cached about five minutes. Stale jobs (expired or older than 30 days) are dropped. Target: **100 live tech/engineering rows** on `/jobs`.

This is the same pattern that works on **Vercel** after you buy a domain. No InfinityFree PHP cron required.

### Option 2 (VPS, only if Option 1 is not enough)

Rent a small VPS to poll **company ATS JSON** (Greenhouse `boards/{slug}/jobs`, Lever postings) on a schedule, store in Postgres, and expire rows. Still do not scrape LinkedIn/Indeed. n8n on that VPS is a reasonable worker. Use this later if you want Pakistan/Dubai coverage the public APIs under-serve.

### What we will not do

- Headless Chrome on the visitor’s PC against Indeed
- Thin city doorway pages
- Brand keywords as primary targets (“Indeed jobs”, “LinkedIn jobs”)
- Electrician-near-me local-service intent

## Keyword strategy (Phase 1)

Do not bet SEO on bare “jobs” or “remote jobs.” Those belong to Indeed, LinkedIn, Glassdoor, and Google for Jobs.

| Cluster | Example pages | Notes |
| --- | --- | --- |
| Software roles | `/software-jobs`, `/frontend-developer-jobs` | Core |
| AI/ML/data | `/machine-learning-jobs`, `/data-engineer-jobs` | Rising CPC |
| Electrical | `/electrical-engineer-jobs` | Supporting pillar, not the head term |
| Geo (supporting) | `/locations/lahore`, `/locations/dubai` | Unique copy, not doorway spam |
| Career (Ads) | `/career/cv`, `/career/interview-questions` | Better AdSense inventory than listing pages |
| Remote/entry | `/remote-jobs`, `/entry-level-jobs` | Filters on the live feed |

## IA

- `/` hub
- `/jobs` live 100
- `/job/[id]` JobPosting JSON-LD, expire if stale
- `/software-jobs`, role hubs
- `/engineering-jobs`, electrical
- `/remote-jobs`, `/entry-level-jobs`
- `/locations/[geo]`
- `/career/[slug]`
- `/sources` attribution

## Phase 1 content

About 40 unique hub intros (150–300 words) plus 8 career essays. Listings themselves come from the live APIs, not a handmade scrape of 100 frozen rows.
