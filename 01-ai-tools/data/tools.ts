import type { Tool } from "@/lib/types";

import adobeFirefly from "./tools/adobe-firefly.json";
import aider from "./tools/aider.json";
import bolt from "./tools/bolt.json";
import chatgpt from "./tools/chatgpt.json";
import claudeCode from "./tools/claude-code.json";
import claude from "./tools/claude.json";
import cline from "./tools/cline.json";
import cursor from "./tools/cursor.json";
import deepseek from "./tools/deepseek.json";
import descript from "./tools/descript.json";
import elevenlabs from "./tools/elevenlabs.json";
import figmaAi from "./tools/figma-ai.json";
import flux from "./tools/flux.json";
import gamma from "./tools/gamma.json";
import gemini from "./tools/gemini.json";
import githubCopilot from "./tools/github-copilot.json";
import grammarly from "./tools/grammarly.json";
import grok from "./tools/grok.json";
import huggingface from "./tools/huggingface.json";
import jasper from "./tools/jasper.json";
import kling from "./tools/kling.json";
import leonardo from "./tools/leonardo.json";
import lindy from "./tools/lindy.json";
import lovable from "./tools/lovable.json";
import microsoftCopilot from "./tools/microsoft-copilot.json";
import midjourney from "./tools/midjourney.json";
import n8n from "./tools/n8n.json";
import notebooklm from "./tools/notebooklm.json";
import notionAi from "./tools/notion-ai.json";
import otter from "./tools/otter.json";
import perplexity from "./tools/perplexity.json";
import photoroom from "./tools/photoroom.json";
import replitAgent from "./tools/replit-agent.json";
import runway from "./tools/runway.json";
import v0 from "./tools/v0.json";
import windsurf from "./tools/windsurf.json";
import zapier from "./tools/zapier.json";

export const tools: Tool[] = [
  chatgpt,
  claude,
  gemini,
  perplexity,
  microsoftCopilot,
  grok,
  deepseek,
  notebooklm,
  cursor,
  githubCopilot,
  claudeCode,
  windsurf,
  v0,
  replitAgent,
  lovable,
  bolt,
  aider,
  cline,
  midjourney,
  adobeFirefly,
  flux,
  leonardo,
  photoroom,
  runway,
  kling,
  elevenlabs,
  descript,
  otter,
  notionAi,
  grammarly,
  jasper,
  gamma,
  n8n,
  zapier,
  lindy,
  huggingface,
  figmaAi,
] as Tool[];

const extraAliases: Record<string, string> = {
  "kagi-adjacent": "perplexity",
  "groq-hosted": "huggingface",
  "canva-magic": "photoroom",
  make: "zapier",
};

export function getTool(slug: string) {
  return tools.find((tool) => tool.slug === slug);
}

export function toolsInCategory(slug: string) {
  return tools.filter((tool) => tool.categories.includes(slug as Tool["categories"][number]));
}

export function resolveTool(slug: string) {
  return getTool(slug) ?? getTool(extraAliases[slug] ?? "");
}

export function getFeaturedTools() {
  return tools.filter((tool) => tool.featured);
}

export function getRecentlyVerifiedTools(limit = 6) {
  return [...tools]
    .sort((a, b) => b.lastVerified.localeCompare(a.lastVerified) || a.name.localeCompare(b.name))
    .slice(0, limit);
}
