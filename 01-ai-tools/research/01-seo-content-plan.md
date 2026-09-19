# Kiln — Site 1 research and content plan

Working name: **Kiln**. Positioning: we fire AI products against a real task, keep a last-verified date, and send people to the vendor. We are not the seller.

## Why this niche first

- Search demand is still rising for “best AI tool for X”, “X vs Y”, and “ChatGPT alternative”.
- Head brand terms (ChatGPT, Claude) are owned by the vendors. We rank for **use-case and comparison** queries.
- CPC on software/SaaS ads is high. Affiliate programs (Cursor, Notion, Jasper, Semrush-class tools) are often recurring.
- A directory with filters, comparison tables, and expiry of dead tools is actual utility, not a scrape.

## Primary keywords (Phase 1)

Intent: commercial investigation. Skip navigational “login” / “download cracked” queries.

| Cluster | Primary keyword | Supporting pages |
| --- | --- | --- |
| Hub | AI tools directory | `/`, `/categories/` |
| Coding | best AI coding tools | `/best/ai-coding-tools`, Cursor, Copilot, Claude Code, Windsurf |
| Assistants | ChatGPT alternatives | `/best/chatgpt-alternatives`, Claude, Gemini, Perplexity |
| Compare | ChatGPT vs Claude | `/compare/chatgpt-vs-claude` |
| Compare | Cursor vs GitHub Copilot | `/compare/cursor-vs-github-copilot` |
| Image | best AI image generators | `/best/ai-image-generators` |
| Video | best AI video generators | `/best/ai-video-tools` |
| Writing | best AI writing tools | `/best/ai-writing-tools` |
| Free | best free AI tools | `/best/free-ai-tools` |
| Agents | best AI agents | `/best/ai-agents` |
| Students | best AI tools for students | `/best/ai-for-students` |
| Automation | n8n vs Zapier | `/compare/n8n-vs-zapier` |

## Information architecture

- `/` — curated index, not a dump of every tool
- `/categories/` and `/categories/[slug]`
- `/tools/[slug]` — profile with pricing bands, last verified, outbound site, affiliate if labeled
- `/best/[use-case]` — ranked list with unique intro (200–400 words)
- `/compare/[a]-vs-[b]` — table + when to pick each
- `/blog/` — experience-led notes, not rewritten vendor blogs
- `/submit/` — vendor/user submit (manual review)
- `/methodology/` — how we evaluate
- `/disclosure/` — ads + affiliates

## What we will not publish

- Cracked software, keygens, “free premium login”
- Medical diagnosis, investment advice, insurance
- Thin pages that only repeat the vendor homepage

## Phase 1 page set (built in this repo)

About 40 tool profiles, 10 categories, 8 “best of” pages, 8 comparisons, 5 editorial pages. Unique copy lives in `src` data files and is rendered with last-verified dates.

## Monetisation

- AdSense on `/best/*`, `/compare/*`, `/blog/*`, category hubs
- Affiliates on tool profiles (labeled)
- Tool profile pages stay readable: one outbound CTA, not a wall of ads

## Last-verified rule

Every tool page shows a date. If a pricing URL 404s or a product shuts down, the listing is marked `sunset` and dropped from “best of” tables.
