import type { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    slug: "assistants",
    title: "General assistants",
    headline: "Chat models you actually open every day",
    intro:
      "General assistants are the default tab: writing, light research, and first-pass code. Head terms like ChatGPT are owned by the vendors. These pages exist to map which assistant fits a work style, not to pretend we invented the category. We keep last-verified dates because pricing tiers and usage caps move every quarter.",
    faqs: [
      {
        question: "Which general AI assistant is best for most people?",
        answer:
          "ChatGPT is the most versatile all-rounder, Claude is stronger for long documents and careful prose editing, and Google Gemini wins if your files already live in Gmail and Drive.",
      },
      {
        question: "Do I need a paid $20/month plan to start?",
        answer:
          "No. ChatGPT, Claude, Gemini, Perplexity, and DeepSeek all offer usable free tiers. Upgrade only when peak-hour limits or context caps slow down daily work.",
      },
      {
        question: "Can a general assistant replace a coding IDE?",
        answer:
          "Not for multi-file repositories. Chat assistants handle single snippets well, but dedicated tools like Cursor or Claude Code understand your whole codebase and git diffs.",
      },
    ],
  },
  {
    slug: "coding",
    title: "Coding tools",
    headline: "Editors, agents, and autocomplete that touch real repos",
    intro:
      "Coding tools split into three shapes: plugins that live in an editor you already use, AI-native IDEs, and terminal agents that walk a whole repository. The useful question is not which logo is smartest on a leaderboard. It is whether you want tab completion, multi-file edits, or long unattended refactors. We exclude cracked IDEs and “unlimited Pro for free” mirrors.",
    faqs: [
      {
        question: "Should I pick Cursor, Windsurf, GitHub Copilot, or Claude Code?",
        answer:
          "Pick GitHub Copilot ($10/mo Pro baseline) if you stay in JetBrains or standard VS Code. Pick Cursor ($20/mo Pro baseline) for an AI-native editor with Tab and Composer, Windsurf to evaluate a free AI IDE quota, and Claude Code when you want a terminal agent for multi-file refactors.",
      },
      {
        question: "Are there genuinely free AI coding tools?",
        answer:
          "Yes. Aider and Cline are open-source and free to install (you pay only your own API provider bill), while GitHub Copilot, Cursor, Windsurf, and Hugging Face offer limited free tiers.",
      },
      {
        question: "Why do $20/month coding plans still run out of usage?",
        answer:
          "Most vendors include a monthly pool of fast or frontier requests rather than unlimited agent loops. Heavy agent sessions trigger credit overages or higher tiers like Ultra and Max.",
      },
    ],
  },
  {
    slug: "writing",
    title: "Writing and content",
    headline: "Drafting help that does not have to sound like a press release",
    intro:
      "Writing tools range from grammar checkers to full campaign generators. High-CPC ads love this cluster, which is exactly why thin scraped listicles exist. Each profile here states a job to be done (email, long essay, on-brand ads) and a failure mode (generic tone, hallucinated citations, medical claims). We do not rank tools for health or investment copy.",
    faqs: [
      {
        question: "Is Jasper worth it for a solo writer?",
        answer:
          "Usually no. Jasper is priced and structured for marketing teams needing shared brand voices and seats. Solo writers typically get better prose per dollar from Claude or ChatGPT.",
      },
      {
        question: "When should I use Grammarly instead of Claude or ChatGPT?",
        answer:
          "Use Grammarly when you want an inline spelling and clarity checker inside email, browser forms, and docs without copying text into a separate chat window.",
      },
      {
        question: "Which AI writing tool keeps voice intact on long drafts?",
        answer:
          "Claude generally preserves tone and handles long 40-page briefs with less generic boilerplate than most consumer chatbots.",
      },
    ],
  },
  {
    slug: "image",
    title: "Image generation",
    headline: "Still pictures with a style you can defend in a client call",
    intro:
      "Image models differ more in taste, licensing, and control than in raw “quality” screenshots. Midjourney still leads on look for many art-directed jobs. Firefly and similar Adobe tools lead when the file has to live inside a commercial design stack. We flag tools that train on unclear licenses and we never list malware “prompt packs.”",
    faqs: [
      {
        question: "Which AI image tool is safest for commercial client work?",
        answer:
          "Adobe Firefly is built for Creative Cloud legal and licensing workflows, generating directly on Photoshop and Illustrator layers.",
      },
      {
        question: "Does Midjourney have a free tier?",
        answer:
          "No free plan exists—Midjourney starts on paid tiers (Basic $10/mo monthly, $8/mo annual). For free starter tokens, try Leonardo AI or local FLUX Klein weights.",
      },
      {
        question: "What is best for e-commerce product cutouts?",
        answer:
          "PhotoRoom focuses specifically on background removal and clean catalog SKU photos rather than prompt-driven illustration.",
      },
    ],
  },
  {
    slug: "video",
    title: "Video generation",
    headline: "Short clips, not a Hollywood studio in a browser tab",
    intro:
      "AI video is expensive, slow, and uneven. Rankings that dump twenty names without duration limits or watermark notes waste a budget. We cover tools that produce usable social and prototype clips, with a reminder that most vendors meter credits. Illegal stream aggregators and piracy downloaders are out of scope and will never appear here.",
    faqs: [
      {
        question: "Runway or Kling: which should I pick?",
        answer:
          "Pick Runway if you want a mature browser editor and predictable US-based invoicing. Try Kling if you want aggressive motion demos and are comfortable checking its regional terms.",
      },
      {
        question: "What if I edit talking-head videos or podcasts rather than generating clips?",
        answer:
          "Use Descript instead of Runway or Kling. Descript edits real recorded video and audio via its text transcript.",
      },
      {
        question: "Are AI video tools unlimited on entry plans?",
        answer:
          "No. Both Runway and Kling meter generation heavily through credits, clip durations, and resolution caps.",
      },
    ],
  },
  {
    slug: "audio",
    title: "Audio and voice",
    headline: "Speech, cleanup, and voiceover without a booth",
    intro:
      "Voice tools are useful for product demos, podcast cleanup, and localization. They are also a magnet for impersonation. We only list vendors with an obvious commercial site and we note cloning limits when the vendor publishes them. If a page promises celebrity voices or “undetectable” deepfakes, it does not belong in this directory.",
    faqs: [
      {
        question: "When should I pick ElevenLabs vs Descript?",
        answer:
          "Pick ElevenLabs when generating new synthetic voiceover or localization via TTS/API. Pick Descript when cleaning up and editing recorded podcasts or interviews.",
      },
      {
        question: "Is Otter.ai safe to join every client meeting?",
        answer:
          "Only if everyone in the call consents and company policy allows third-party recording bots. Otherwise check local policy first.",
      },
      {
        question: "How does ElevenLabs price voice generation?",
        answer:
          "By monthly character pools (with a non-commercial free tier)—check ElevenLabs' official pricing page before scaling, and cache generated audio rather than regenerating the same script repeatedly.",
      },
    ],
  },
  {
    slug: "productivity",
    title: "Docs, notes, and office",
    headline: "AI inside the documents you already keep",
    intro:
      "The winning productivity tools are not new chat windows. They sit in Notion, Office, Google Docs, or a notes app and shorten a step you already do. We compare them on where the data lives, whether the AI is a bolt-on, and whether the free tier is a demo or a real daily driver. Enterprise admin features get a sentence, not a fantasy.",
    faqs: [
      {
        question: "Is Notion AI worth moving my team into Notion?",
        answer:
          "No. Notion AI is valuable only if your wikis and specs already live in Notion. Buying Notion purely for its AI layer is backwards.",
      },
      {
        question: "What is the best free tool for studying uploaded PDFs?",
        answer:
          "NotebookLM is free with a Google account and keeps answers strictly grounded in the documents and sources you upload.",
      },
      {
        question: "How does Microsoft Copilot differ from GitHub Copilot?",
        answer:
          "They are separate products and separate SKUs. Microsoft Copilot sits in Word, Excel, and Outlook; GitHub Copilot sits in code editors.",
      },
    ],
  },
  {
    slug: "automation",
    title: "Agents and automation",
    headline: "Things that run after you close the laptop",
    intro:
      "Agents and no-code automations are the 2026 gold rush. Most of them fail on permissions, flaky websites, and silent cost overruns. Kiln lists tools that either expose the workflow (n8n, Zapier) or are honest about being a hosted agent. We skip “set and forget wealth bots” and anything that wants your bank login.",
    faqs: [
      {
        question: "Should I pick n8n or Zapier?",
        answer:
          "Pick n8n if you can self-host or want code nodes and execution-based pricing. Pick Zapier if a non-developer needs to connect obscure SaaS apps quickly.",
      },
      {
        question: "How is Lindy different from Zapier and n8n?",
        answer:
          "Lindy focuses on hosted no-code AI agent employees for email and CRM tasks rather than transparent step-by-step workflow graphs.",
      },
      {
        question: "What is the biggest hidden risk with AI automations?",
        answer:
          "Runaway task/execution bills and overly broad email or CRM permissions without a human approval step.",
      },
    ],
  },
  {
    slug: "research",
    title: "Research and search",
    headline: "Answers with sources you can open",
    intro:
      "Research tools earn a slot when they show citations or search a corpus you control (PDFs, Drive, the public web). Chat models that invent sources fail this category even if they are excellent writers. Pricing here is usually a Pro seat around the same $20 band as assistants, so the differentiator is retrieval, not the chat skin.",
    faqs: [
      {
        question: "Perplexity vs NotebookLM: what is the difference?",
        answer:
          "Perplexity searches and cites the live public web and academic papers. NotebookLM answers strictly from the private PDFs, docs, and notes you upload.",
      },
      {
        question: "Why use Perplexity instead of ChatGPT for research?",
        answer:
          "Perplexity is built around inline clickable citations and source filtering (web, academic, social), reducing hallucinated references.",
      },
      {
        question: "Where does Hugging Face fit in research?",
        answer:
          "Hugging Face is the open model and dataset hub where engineers inspect model cards, licenses, and weights rather than a consumer search engine.",
      },
    ],
  },
  {
    slug: "design",
    title: "Design and UI",
    headline: "Layout, prototypes, and production files",
    intro:
      "Design AI is useful when it emits something a designer can keep editing: Figma layers, a Framer page, a v0 component. Screenshot generators that cannot round-trip into a real file are toys. We keep this category small on purpose so it does not turn into a sticker pack mall.",
    faqs: [
      {
        question: "When should I use v0 vs Figma AI?",
        answer:
          "Use Figma AI if the deliverable must live as editable Figma layers inside a design system. Use v0 if you want React and Tailwind components ready for a Next.js repo.",
      },
      {
        question: "Is Gamma good enough for client pitch decks?",
        answer:
          "Gamma is fast for internal first-pass decks, but client-facing presentations still require manual editing, real numbers, and contrast checks.",
      },
      {
        question: "How does Lovable compare to v0 for UI?",
        answer:
          "v0 generates focused React/Tailwind components, whereas Lovable aims to scaffold an entire interactive web app prototype from chat prompts.",
      },
    ],
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
