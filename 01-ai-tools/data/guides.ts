import type { Guide } from "@/lib/types";

export const guides: Guide[] = [
  {
    slug: "how-we-evaluate",
    title: "How Kiln evaluates a tool",
    date: "2026-09-19",
    summary: "A short method so “best of” pages are not shuffled adjectives.",
    body: [
      "We only list a product with a public website, a way to pay or a real open-source repo, and a job a person could finish this week. That bar kills cracked software, keygens, and most “1000 AI tools” dumps.",
      "Each profile has a last-verified date. That date means a human opened the vendor’s pricing or product page, not that we ran a 40-person lab. If a page 404s or the company shuts down, the slug is marked sunset and pulled from rankings.",
      "We write a skip-if line. Tools that are “best for everyone” are marketing. Claude is the wrong pick if you live in Google Docs. Copilot is the wrong pick if you want an AI-native editor.",
      "Comparisons use tables with jobs, not IQ scores. Model leaderboards move weekly. Workflows do not.",
    ],
  },
  {
    slug: "pricing-traps-2026",
    title: "AI tool pricing traps in 2026",
    date: "2026-09-18",
    summary: "The $20 seat is rarely the invoice.",
    body: [
      "Most flagship assistants and AI IDEs advertise a number near $20 a month. The invoice is usage: credits, characters, video seconds, Max tiers, Ultra plans. A ranking that only prints the sticker is out of date the week credits change.",
      "GitHub Copilot’s individual Pro band is still the cheap on-ramp, but credits and Business seats exist. Cursor Pro includes a pool, then charges like an API. Claude Code is “included” until you live in Max.",
      "Automation is worse. Zapier tasks and n8n executions can beat any chatbot bill. Count the runs.",
      "We date every price band. Re-open the vendor page before you buy. Affiliates do not change that sentence.",
    ],
  },
  {
    slug: "when-not-to-use-ai-for-code",
    title: "When not to use an AI coding tool",
    date: "2026-09-17",
    summary: "Agents are not a substitute for a test, a review, or a secret scanner.",
    body: [
      "Do not let an agent near production secrets, production data dumps, or a repo you do not understand well enough to review. If you cannot read the diff, you cannot ship the diff.",
      "Skip agents for one-line CSS. Tab completion is enough. Save Claude Code for migrations you can describe.",
      "Regulated medical or financial advice in app copy is still on you. Kiln will not rank tools as doctors or brokers.",
      "If the “tool” is a cracked IDE, you are not saving $20. You are installing malware.",
    ],
  },
  {
    slug: "last-verified",
    title: "What last verified means",
    date: "2026-09-19",
    summary: "A date on every tool page, and what happens when it goes stale.",
    body: [
      "Last verified is the day we opened the vendor site or docs. It is not a lab test and it is not a partnership.",
      "Rankings should not include a tool whose date is older than 120 days without a re-check. That rule is how we avoid becoming a ghost town of 2024 logos.",
      "You can submit a correction on /submit. We still review by hand. There is no instant pay-for-placement.",
    ],
  },
  {
    slug: "ads-and-affiliates",
    title: "Ads, affiliates, and what we will not sell",
    date: "2026-09-19",
    summary: "How Kiln plans to pay for hosting without turning into a doorway farm.",
    body: [
      "When a custom domain is live, comparison and guide pages are the natural home for Google AdSense. Tool pages keep one outbound CTA so the listing still works.",
      "Affiliate links, if added later, will be labeled. Recurring SaaS commissions are a better fit than fake coupons.",
      "We will not sell cracked software, miracle health, or “guaranteed jobs.” Those verticals live on other people’s AdSense bans.",
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((item) => item.slug === slug);
}
