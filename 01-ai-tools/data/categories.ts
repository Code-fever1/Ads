import type { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    slug: "assistants",
    title: "General assistants",
    headline: "Chat models you actually open every day",
    intro:
      "General assistants are the default tab: writing, light research, and first-pass code. Head terms like ChatGPT are owned by the vendors. These pages exist to map which assistant fits a work style, not to pretend we invented the category. We keep last-verified dates because pricing tiers and usage caps move every quarter.",
  },
  {
    slug: "coding",
    title: "Coding tools",
    headline: "Editors, agents, and autocomplete that touch real repos",
    intro:
      "Coding tools split into three shapes: plugins that live in an editor you already use, AI-native IDEs, and terminal agents that walk a whole repository. The useful question is not which logo is smartest on a leaderboard. It is whether you want tab completion, multi-file edits, or long unattended refactors. We exclude cracked IDEs and “unlimited Pro for free” mirrors.",
  },
  {
    slug: "writing",
    title: "Writing and content",
    headline: "Drafting help that does not have to sound like a press release",
    intro:
      "Writing tools range from grammar checkers to full campaign generators. High-CPC ads love this cluster, which is exactly why thin scraped listicles exist. Each profile here states a job to be done (email, long essay, on-brand ads) and a failure mode (generic tone, hallucinated citations, medical claims). We do not rank tools for health or investment copy.",
  },
  {
    slug: "image",
    title: "Image generation",
    headline: "Still pictures with a style you can defend in a client call",
    intro:
      "Image models differ more in taste, licensing, and control than in raw “quality” screenshots. Midjourney still leads on look for many art-directed jobs. Firefly and similar Adobe tools lead when the file has to live inside a commercial design stack. We flag tools that train on unclear licenses and we never list malware “prompt packs.”",
  },
  {
    slug: "video",
    title: "Video generation",
    headline: "Short clips, not a Hollywood studio in a browser tab",
    intro:
      "AI video is expensive, slow, and uneven. Rankings that dump twenty names without duration limits or watermark notes waste a budget. We cover tools that produce usable social and prototype clips, with a reminder that most vendors meter credits. Illegal stream aggregators and piracy downloaders are out of scope and will never appear here.",
  },
  {
    slug: "audio",
    title: "Audio and voice",
    headline: "Speech, cleanup, and voiceover without a booth",
    intro:
      "Voice tools are useful for product demos, podcast cleanup, and localization. They are also a magnet for impersonation. We only list vendors with an obvious commercial site and we note cloning limits when the vendor publishes them. If a page promises celebrity voices or “undetectable” deepfakes, it does not belong in this directory.",
  },
  {
    slug: "productivity",
    title: "Docs, notes, and office",
    headline: "AI inside the documents you already keep",
    intro:
      "The winning productivity tools are not new chat windows. They sit in Notion, Office, Google Docs, or a notes app and shorten a step you already do. We compare them on where the data lives, whether the AI is a bolt-on, and whether the free tier is a demo or a real daily driver. Enterprise admin features get a sentence, not a fantasy.",
  },
  {
    slug: "automation",
    title: "Agents and automation",
    headline: "Things that run after you close the laptop",
    intro:
      "Agents and no-code automations are the 2026 gold rush. Most of them fail on permissions, flaky websites, and silent cost overruns. Kiln lists tools that either expose the workflow (n8n, Zapier) or are honest about being a hosted agent. We skip “set and forget wealth bots” and anything that wants your bank login.",
  },
  {
    slug: "research",
    title: "Research and search",
    headline: "Answers with sources you can open",
    intro:
      "Research tools earn a slot when they show citations or search a corpus you control (PDFs, Drive, the public web). Chat models that invent sources fail this category even if they are excellent writers. Pricing here is usually a Pro seat around the same $20 band as assistants, so the differentiator is retrieval, not the chat skin.",
  },
  {
    slug: "design",
    title: "Design and UI",
    headline: "Layout, prototypes, and production files",
    intro:
      "Design AI is useful when it emits something a designer can keep editing: Figma layers, a Framer page, a v0 component. Screenshot generators that cannot round-trip into a real file are toys. We keep this category small on purpose so it does not turn into a sticker pack mall.",
  },
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
