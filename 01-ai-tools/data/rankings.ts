import type { Ranking } from "@/lib/types";

export const rankings: Ranking[] = [
  {
    slug: "ai-coding-tools",
    title: "Best AI coding tools",
    keyword: "best AI coding tools",
    intro:
      "There is no single best coding copilot. There is an editor (Cursor or Windsurf), a cheap plugin (GitHub Copilot), and a terminal agent (Claude Code or Aider). We ranked the stack we would actually pay for on a product team in Sep 2026, not a leaderboard of Twitter demos. Cracked IDEs are not listed. If a site offers “Cursor Pro free,” close it.",
    toolSlugs: ["cursor", "claude-code", "github-copilot", "windsurf", "aider", "v0"],
    criteria: [
      "Does it touch a real git repo",
      "Can a full-time developer live in it for a week",
      "Is pricing a seat, a credit pool, or BYO key",
      "Last verified against a public page in Sep 2026",
    ],
  },
  {
    slug: "chatgpt-alternatives",
    title: "Best ChatGPT alternatives",
    keyword: "ChatGPT alternatives",
    intro:
      "ChatGPT alternatives only matter if they win a job ChatGPT is average at. Claude wins long writing. Gemini wins Google files. Perplexity wins citations. Grok wins “what did the internet just say.” DeepSeek wins the invoice if policy allows it. None of them replace Cursor for code.",
    toolSlugs: ["claude", "gemini", "perplexity", "microsoft-copilot", "grok", "deepseek"],
    criteria: [
      "A job ChatGPT is only okay at",
      "A public pricing page",
      "No fake “ChatGPT Plus free” clones",
    ],
  },
  {
    slug: "ai-image-generators",
    title: "Best AI image generators",
    keyword: "best AI image generators",
    intro:
      "Still images, not video. Midjourney for taste, Firefly for commercial Adobe work, FLUX for builders, Leonardo for a web UI, PhotoRoom for catalog cutouts. We skip every “unlimited free Midjourney” scraper.",
    toolSlugs: ["midjourney", "adobe-firefly", "flux", "leonardo", "photoroom"],
    criteria: [
      "Can you pay the vendor",
      "Is there a license a client might accept",
      "Last verified Sep 2026",
    ],
  },
  {
    slug: "ai-writing-tools",
    title: "Best AI writing tools",
    keyword: "best AI writing tools",
    intro:
      "Writing tools are three products: a model (Claude/ChatGPT), a checker (Grammarly), and a content platform (Jasper, Notion). Mixing them into one numbered list is how you get sludge. This page is the map.",
    toolSlugs: ["claude", "chatgpt", "grammarly", "notion-ai", "jasper"],
    criteria: [
      "Who edits the final sentence",
      "Where the text already lives",
      "Whether you need seats or one account",
    ],
  },
  {
    slug: "ai-video-tools",
    title: "Best AI video tools",
    keyword: "best AI video generators",
    intro:
      "AI video is credits, duration caps, and disappointment if you expected a feature film. Runway is the mature bench. Kling is the rotating demo king. Descript is the editor for talking-head footage. We will never list pirate stream aggregators.",
    toolSlugs: ["runway", "kling", "descript"],
    criteria: [
      "Public commercial site",
      "Credit or minute limits disclosed",
      "No piracy, no cam rips",
    ],
  },
  {
    slug: "free-ai-tools",
    title: "Best free AI tools",
    keyword: "best free AI tools",
    intro:
      "Free means a usable daily quota, not a stolen password. This list is ChatGPT/Gemini/Claude free tiers, NotebookLM, Aider, Cline, Hugging Face, and PhotoRoom’s basic cutout. Midjourney is not free. Cursor Hobby is a trial, not a career.",
    toolSlugs: ["chatgpt", "gemini", "notebooklm", "aider", "cline", "huggingface", "photoroom"],
    criteria: [
      "A legitimate free surface",
      "No cracked licenses",
      "Clear upgrade path",
    ],
  },
  {
    slug: "ai-agents",
    title: "Best AI agents",
    keyword: "best AI agents",
    intro:
      "An agent is a loop with tools, not a chat that says it will book your flights. Claude Code and Cline are coding agents. n8n is a workflow you can inspect. Lindy is hosted busywork. Zapier agents sit on a task meter. We do not list autonomous trading bots.",
    toolSlugs: ["claude-code", "cline", "n8n", "lindy", "zapier"],
    criteria: [
      "Can it take an action besides talking",
      "Can you see the steps",
      "Is there a kill switch",
    ],
  },
  {
    slug: "ai-for-students",
    title: "Best AI tools for students",
    keyword: "best AI tools for students",
    intro:
      "Students need citations, PDF brains, and a writing checker, not a ghostwriter for take-home exams. NotebookLM, Perplexity, Grammarly, and Gemini’s free tier are the honest stack. Replit helps if the laptop is weak. We will not help you cheat. Your school’s policy wins.",
    toolSlugs: ["notebooklm", "perplexity", "grammarly", "gemini", "replit-agent"],
    criteria: [
      "Free or cheap",
      "Sources or documents you can point at",
      "Works on a modest laptop or in the browser",
    ],
  },
];

export function getRanking(slug: string) {
  return rankings.find((item) => item.slug === slug);
}
