import type { Guide } from "@/lib/types";

export const guides: Guide[] = [
  {
    slug: "how-to-choose-an-ai-coding-tool",
    title: "How to Choose an AI Coding Tool",
    date: "2026-11-25",
    updatedDate: "2026-11-25",
    summary:
      "A practical decision framework—editor fork vs plugin vs terminal agent vs browser builder—so you buy for your workflow instead of benchmark hype.",
    body: [
      "Picking an AI coding tool in 2026 fails most often when developers shop by model leaderboard screenshots instead of interface shape. Every major coding tool can call frontier models now. What separates them is where the tool sits in your workflow, how much of your repository it can see, and what happens when an edit spans six files instead of one line.",
      "Before paying for a seat or migrating extensions, classify your work into one of four shapes: inline autocomplete inside an existing IDE, an AI-native editor fork, a terminal repository agent, or a browser-based prompt-to-app builder.",
    ],
    sections: [
      {
        heading: "1. Start with the four tool shapes",
        paragraphs: [
          "Almost every legitimate AI coding product falls into one of four categories. Trying to force a browser app generator to maintain a production backend, or expecting an inline autocomplete plugin to execute a twenty-file migration, creates frustration fast.",
        ],
        table: {
          headers: ["Shape", "Examples", "Best job", "Main trade-off"],
          rows: [
            ["IDE Plugin", "GitHub Copilot, Cline", "Inline completions in VS Code or JetBrains", "Less holistic repo UI than an AI-native fork"],
            ["AI-Native IDE", "Cursor, Windsurf", "Daily feature work, Tab predict, visual multi-file Composer", "Requires adopting a VS Code fork; credit pools on heavy agents"],
            ["Terminal Agent", "Claude Code, Aider", "Cross-repo refactors, migrations, test-driven bug hunts", "No inline autocomplete; you must read diffs carefully"],
            ["Browser Builder", "Lovable, Bolt.new, Replit Agent, v0", "Spiking MVPs, UI components, zero-setup prototypes", "Token meters bite; code should move to Git early"],
          ],
        },
      },
      {
        heading: "2. Ask four filtering questions before you pay",
        paragraphs: [
          "You can narrow the field to one or two candidates in five minutes by answering four operational questions honestly.",
        ],
        bullets: [
          "Can you leave your current editor? If your team relies on JetBrains (IntelliJ, PyCharm, WebStorm) or Xcode, Cursor and Windsurf are off the table for inline editing. Start with GitHub Copilot for keystrokes and add Claude Code or Aider in the terminal.",
          "Who signs off on procurement and data retention? Corporate engineering teams already billed through GitHub Enterprise clear Copilot Business much faster than a standalone startup IDE.",
          "Do you have a test suite? Terminal agents like Claude Code and Aider shine when they can run `npm test` or `pytest` and iterate on failures. Without tests or typechecks, autonomous edits become risky.",
          "Are you building a prototype or maintaining a product? Founders validating screens can move faster in Lovable, Bolt.new, or v0—as long as they export the repo to Git once the concept works.",
        ],
      },
      {
        heading: "3. Match the tool to your stage and budget",
        paragraphs: [
          "Most solo developers end up in one of three sensible setups depending on budget and codebase size. Resist stacking overlapping subscriptions unless each tool owns a distinct surface.",
          "On a $0 software subscription budget, install Cline inside VS Code or Aider in your terminal and plug in your own API key with a hard $10–$20 monthly spend cap. You pay exact provider token costs with zero middleman markup.",
          "Around $10/month, GitHub Copilot Pro remains the most economical mainstream paid tier for inline completions and light chat inside existing IDEs. Around $20/month, choose between Cursor Pro (if you want the sharpest AI-native editor) or Claude Pro (if you want Claude's web workspace plus Claude Code in the terminal).",
          "At ~$40/month, the Cursor Pro + Claude Pro pairing is the honest senior-engineer stack: Cursor handles active file editing and Tab prediction, while Claude Code handles multi-file migrations and deep debugging loops.",
        ],
      },
      {
        heading: "4. Red flags to skip immediately",
        paragraphs: [
          "Never install cracked IDE builds, third-party 'unlimited Pro' proxy extensions, or unverified keygens. Every major legitimate vendor already offers either a free starter tier (Copilot, Cursor Hobby, Windsurf, Bolt.new) or an open-source BYO-key option (Aider, Cline).",
          "Finally, check when the tool's pricing was last verified. Usage pools and credit multipliers shift quarterly—confirm the live vendor pricing page before standardizing a team.",
        ],
      },
    ],
  },
  {
    slug: "ai-coding-tools-pricing-explained",
    title: "AI Coding Tools Pricing Explained",
    date: "2026-11-25",
    updatedDate: "2026-11-25",
    summary:
      "Why a '$20/month' coding plan is rarely a flat $20 invoice: usage pools, fast vs slow queues, frontier model multipliers, and BYO-key math.",
    body: [
      "Open the pricing page of almost any flagship AI coding tool in 2026 and you will see a friendly $20/month Pro tier (or $10/month for GitHub Copilot Pro). Many developers assume that works like Netflix: pay $20 once, run agents all month, and forget the bill.",
      "In practice, AI inference has real marginal GPU cost per token. Every vendor solves that economics problem with pools, credits, rate caps, or higher escalation tiers. Understanding those mechanics before you commit prevents surprise mid-sprint slowdowns or unexpected overage charges.",
    ],
    sections: [
      {
        heading: "1. What 'included usage' actually buys",
        paragraphs: [
          "An AI coding subscription generally bundles two very different workloads: cheap inline autocomplete (small context, fast small models) and expensive agentic loops (large repository context, frontier reasoning models, repeated tool calls).",
          "Autocomplete is cheap enough that vendors rarely throttle normal typing. Agentic sessions—where the tool reads twenty files, runs tests, hits an error, and loops five times—consume tens of thousands of input tokens on every turn. That is why a single afternoon of unattended agent work can burn through a week's worth of a flat $20 subscription pool.",
        ],
      },
      {
        heading: "2. The four pricing models in the market",
        paragraphs: [
          "Across Kiln's verified catalog, coding tools use four distinct billing patterns, each with its own failure mode:",
        ],
        table: {
          headers: ["Billing Pattern", "Representative Tools", "How it behaves under heavy use"],
          rows: [
            ["Seat + Included Pool", "Cursor Pro (~$20), Windsurf Pro (~$20)", "Predictable up to the pool limit, then slows down or bills usage overages / Ultra"],
            ["Low Base Seat + Credits", "GitHub Copilot Pro (~$10)", "Cheap base seat for standard completions; premium models draw from monthly credits"],
            ["Bundled Consumer + Agent Tier", "Claude Code (Claude Pro ~$20)", "Shared usage limits across web chat and terminal agent; heavy users escalate to Max"],
            ["Free Tool + BYO API Key", "Aider, Cline", "$0 tool fee; you pay raw Anthropic/OpenAI/OpenRouter token invoices directly"],
          ],
        },
      },
      {
        heading: "3. Why agent loops multiply your real token spend",
        paragraphs: [
          "When you send one chat message, you pay for your prompt plus the reply. When an agent runs ten steps to fix a failing test suite, it re-sends the growing conversation history, file contents, and terminal stderr on every step. A single task can quietly process 300,000+ tokens.",
          "Browser builders like Lovable, Bolt.new, and v0 feel this constraint even faster because each visual tweak re-evaluates generated components. Watching credits evaporate while asking a browser bot to nudge padding by 4 pixels is a classic budget leak.",
        ],
      },
      {
        heading: "4. Five habits that cut your monthly bill in half",
        paragraphs: [
          "You do not need an Ultra or Max tier on day one if you match the model cost to the size of the task:",
        ],
        bullets: [
          "Use Tab autocomplete and small inline edits for routine code instead of firing a full agent chat for a two-line CSS change.",
          "Start fresh agent threads per task. Carrying a 60-turn conversation into an unrelated bug forces the model to re-read stale context on every turn.",
          "Keep generated prototypes short-lived in browser builders. Export to Git as soon as the layout works and finish details in a local editor.",
          "Pair one $10–$20 seat with an open-source BYO-key tool (Aider or Cline) for occasional heavy sprints, with a hard spend cap set on your API dashboard.",
          "Always check the vendor's current pricing page before upgrading—model multipliers and pool sizes change faster than annual blog posts.",
        ],
      },
    ],
  },
  {
    slug: "free-ai-tools-that-are-actually-free",
    title: "Free AI Tools That Are Actually Free",
    date: "2026-11-25",
    updatedDate: "2026-11-25",
    summary:
      "How to tell an ongoing free tier from a 7-day trial, what limits to inspect before adopting a tool, and a realistic $0 AI stack.",
    body: [
      "Searching for 'free AI tools' usually lands you on SEO listicles mixing genuinely free products with 7-day trials, $10-minimum subscriptions, and shady 'cracked Pro' download links. That wastes time and puts bad software on your machine.",
      "At Kiln, a tool only qualifies as having a usable free tier when a person can register with zero credit card and complete real work on an ongoing basis—or install an open-source tool with no vendor subscription.",
    ],
    sections: [
      {
        heading: "1. Three honest kinds of 'free'",
        paragraphs: [
          "Before building a workflow around a free AI product, check which of the three legitimate free structures it uses:",
        ],
        bullets: [
          "Ongoing freemium quotas: Products like ChatGPT, Google Gemini, Perplexity, NotebookLM, Grammarly, and PhotoRoom give real recurring daily or monthly allowances at $0. You trade speed during peak hours or batch exports for zero cost.",
          "Free starter trials / limited hobby tiers: Tools like Cursor Hobby, Windsurf Free, Bolt.new, and Kling give enough starter credits or monthly completions to evaluate the interface—useful for testing, tight for daily full-time work.",
          "Open-source / self-hosted / BYO-key: Aider, Cline, n8n Community Edition, and open FLUX weights cost $0 in software licensing. You pay only for raw API tokens or your own hardware/VPS.",
        ],
      },
      {
        heading: "2. What to verify before you rely on a free tier",
        paragraphs: [
          "Free tiers can change overnight. Before embedding a free tool into schoolwork, freelance delivery, or team operations, run a quick four-point check:",
        ],
        table: {
          headers: ["Check", "Why it matters", "Example from Kiln catalog"],
          rows: [
            ["Credit card required?", "A trial asking for billing up front is not a free tier", "Skip 'free' offers that force card entry for starter access"],
            ["Recurring vs one-time credits", "One-time sign-up credits vanish after week one", "Leonardo AI refreshes daily tokens; Kling trial credits are starter-only"],
            ["Commercial export & watermark rules", "Free image/video outputs often bar commercial use", "ElevenLabs free tier is non-commercial; PhotoRoom Pro gates batch exports"],
            ["Training & data privacy terms", "Free tiers frequently train on prompts by default", "Check Workspace/opt-out settings before pasting client docs"],
          ],
        },
      },
      {
        heading: "3. A realistic $0 AI stack that actually works",
        paragraphs: [
          "You do not need five $20 subscriptions to be productive. Across Kiln's catalog, a practical zero-subscription stack covers almost every common workflow cleanly:",
        ],
        bullets: [
          "Research & PDFs: NotebookLM (free with Google) for private PDFs and lecture notes, plus Perplexity's free tier for cited web lookups.",
          "General drafting & proofreading: ChatGPT or Claude free tiers for first drafts, paired with Grammarly's free browser checker for inline typo cleanup.",
          "Coding: GitHub Copilot's free tier inside VS Code for everyday completions, or Aider/Cline if you run local models or pay a few dollars directly on an API key.",
          "Automation & open models: Self-hosted n8n on an existing server for predictable workflows, and Hugging Face for inspecting open weights.",
        ],
      },
      {
        heading: "4. What is never worth trusting",
        paragraphs: [
          "Any site promising 'free Midjourney unlimited,' 'cracked Cursor Pro,' or 'shared Claude Max cookies' is either credential theft, malware, or a broken scraper that will die next week. Stick to verified vendor free tiers and open-source repositories.",
        ],
      },
    ],
  },
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
      "Listings older than 45 days show a clear amber warning reminding readers to double-check the vendor's official pricing page before paying.",
      "You can submit a correction on /submit. We still review by hand. There is no instant pay-for-placement.",
    ],
  },
  {
    slug: "ads-and-affiliates",
    title: "Affiliate links, sponsorships, and editorial standards",
    date: "2026-09-19",
    updatedDate: "2026-11-25",
    summary: "How Kiln plans to sustain the directory without compromising editorial verdicts.",
    body: [
      "Editorial integrity comes first. Kiln currently runs with zero display advertising so pages stay fast, readable, and free of ad-network clutter.",
      "When Kiln uses affiliate links for tools we genuinely recommend, every affiliate link is explicitly labeled and marked rel='nofollow sponsored'. Affiliate status never changes a ranking, a price check, or a skip-if warning.",
      "Any future paid or featured placement will be clearly labeled 'Sponsored' and will never alter our editorial verdict. We strictly refuse to list deceptive subscription traps, low-effort prompt wrappers, or unverified claims.",
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((item) => item.slug === slug);
}
