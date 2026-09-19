import type { Comparison } from "@/lib/types";

export const comparisons: Comparison[] = [
  {
    slug: "chatgpt-vs-claude",
    title: "ChatGPT vs Claude",
    a: "chatgpt",
    b: "claude",
    intro:
      "This is the comparison people actually search after they leave the free tab. ChatGPT is the generalist with more consumer surfaces. Claude is the one we hand a 40-page brief. Neither one is a coding IDE. If your query was “which AI is best,” you are asking the wrong question. Ask which files you will paste.",
    pickA: "Pick ChatGPT when you want one account for writing, images, light analysis, and a product that your client has already heard of.",
    pickB: "Pick Claude when the job is long, careful, or about to become a Claude Code session in the terminal.",
    rows: [
      { label: "Default job", a: "General assistant", b: "Professional writing and long context" },
      { label: "Coding shape", a: "Chat plus sandbox", b: "Chat plus Claude Code agent" },
      { label: "Citations", a: "Better than it used to be, still not Perplexity", b: "Not the research product" },
      { label: "Price band", a: "Plus around $20/mo", b: "Pro around $20/mo, Max if you burn agents" },
      { label: "Skip when", a: "You live in Google Workspace", b: "You want consumer image toys first" },
    ],
  },
  {
    slug: "cursor-vs-github-copilot",
    title: "Cursor vs GitHub Copilot",
    a: "cursor",
    b: "github-copilot",
    intro:
      "Individual Pro pricing is the trap. Copilot is often half the seat cost of Cursor and lives in the editor you already use. Cursor is the editor. If your team will not leave VS Code or JetBrains, Copilot wins the rollout. If you want Composer and repo agents as the main surface, pay for Cursor.",
    pickA: "Pick Cursor for daily product work where multi-file edits are the point.",
    pickB: "Pick Copilot for the cheapest serious assistant, GitHub-native teams, and JetBrains users.",
    rows: [
      { label: "Shape", a: "AI-native IDE (VS Code fork)", b: "Plugin in existing IDEs" },
      { label: "Individual price band", a: "Pro around $20/mo", b: "Pro around $10/mo plus credits" },
      { label: "Enterprise story", a: "Growing, still a new editor", b: "Default if you already bought GitHub" },
      { label: "Tab completion", a: "Excellent, aggressive", b: "Excellent, familiar" },
      { label: "Agents", a: "First-class in the product", b: "Present, not the whole identity" },
    ],
  },
  {
    slug: "cursor-vs-claude-code",
    title: "Cursor vs Claude Code",
    a: "cursor",
    b: "claude-code",
    intro:
      "These two are not substitutes. Cursor is where your caret lives. Claude Code is a terminal agent you point at a repo. Plenty of people pay for both. The $40 stack (Cursor Pro plus Claude Pro) is a more honest recommendation than a fake winner.",
    pickA: "Pick Cursor when you want speed in the file, Tab, and Composer.",
    pickB: "Pick Claude Code when the task is a migration, a bug hunt, or an architecture pass you can describe in a paragraph.",
    rows: [
      { label: "Interface", a: "Editor", b: "Terminal agent" },
      { label: "Best duration", a: "Seconds to minutes", b: "Minutes to an hour" },
      { label: "Cost surprise", a: "Included pool, then usage", b: "Pro bundle, then Max" },
      { label: "Git", a: "Normal editor git", b: "Agent-proposed diffs you must read" },
      { label: "Onboarding", a: "Looks like VS Code", b: "Looks like a CLI you have to trust" },
    ],
  },
  {
    slug: "midjourney-vs-adobe-firefly",
    title: "Midjourney vs Adobe Firefly",
    a: "midjourney",
    b: "adobe-firefly",
    intro:
      "Taste versus paperwork. Midjourney still wins a lot of “does this look like a campaign” tests. Firefly wins when the file has to open in Photoshop and Legal asks how the model was trained. There is no free Midjourney worth using. Firefly credits hide inside Creative Cloud.",
    pickA: "Pick Midjourney for style-led stills and concept art.",
    pickB: "Pick Firefly when the deliverable is a PSD, an Illustrator file, or a brand-safe pipeline.",
    rows: [
      { label: "Look", a: "Often more distinctive", b: "Safer, more Adobe-native" },
      { label: "License story", a: "Read current terms per plan", b: "Built for Creative Cloud commercial use" },
      { label: "Round-trip", a: "Image out, then you rebuild", b: "Generative fill on real layers" },
      { label: "Free plan", a: "No", b: "Credits inside Adobe plans" },
      { label: "Video", a: "Not the job", b: "Not the job either. Use Runway." },
    ],
  },
  {
    slug: "perplexity-vs-chatgpt",
    title: "Perplexity vs ChatGPT",
    a: "perplexity",
    b: "chatgpt",
    intro:
      "If the user needs links, Perplexity. If the user needs a draft, ChatGPT (or Claude). Mixing them in one “best AI” article is how directories become sludge. Both can search now. Only one is built as a research console.",
    pickA: "Pick Perplexity for briefings, shopping research, and anything you will cite.",
    pickB: "Pick ChatGPT for writing, analysis of a file you upload, and general errands.",
    rows: [
      { label: "Output", a: "Answer plus sources", b: "Answer plus whatever tools are on" },
      { label: "Corpus control", a: "Web, academic, social filters", b: "Weaker as a search product" },
      { label: "Writing", a: "Fine, not the point", b: "Strong" },
      { label: "Price band", a: "Pro around $20/mo", b: "Plus around $20/mo" },
      { label: "PDFs you own", a: "Possible, still second to NotebookLM", b: "Upload works; citations still shaky" },
    ],
  },
  {
    slug: "n8n-vs-zapier",
    title: "n8n vs Zapier",
    a: "n8n",
    b: "zapier",
    intro:
      "Zapier is the catalog. n8n is the tool you run when the catalog’s task meter starts to look like rent. Self-hosting n8n is the closest thing in this portfolio to a healthy VPS use: your workflows, your machine, still not scraping LinkedIn.",
    pickA: "Pick n8n if you can host or you want code nodes and execution pricing.",
    pickB: "Pick Zapier if a non-developer must ship today and the app is in the Zapier directory.",
    rows: [
      { label: "Who it is for", a: "Builders who will debug JSON", b: "Anyone who can fill a form" },
      { label: "Hosting", a: "Self-host or n8n Cloud", b: "Zapier Cloud" },
      { label: "Cost shape", a: "Executions or your VPS bill", b: "Tasks, premium apps" },
      { label: "App coverage", a: "Good, plus HTTP", b: "Best-in-class consumer catalog" },
      { label: "AI agents", a: "Nodes you can inspect", b: "Central/agents as a layer" },
    ],
  },
  {
    slug: "gemini-vs-chatgpt",
    title: "Gemini vs ChatGPT",
    a: "gemini",
    b: "chatgpt",
    intro:
      "The files decide this. If they are in Drive and Gmail, Gemini. If you want a vendor that is not Google and a broader plugin culture, ChatGPT. Image features bounce between them; do not freeze a 2025 screenshot into a 2026 article.",
    pickA: "Pick Gemini when Google Workspace is already the company.",
    pickB: "Pick ChatGPT when you want the default independent assistant.",
    rows: [
      { label: "Gravity", a: "Google account", b: "OpenAI account" },
      { label: "Docs and mail", a: "Native", b: "Uploads and integrations" },
      { label: "Coding IDE", a: "Not the reason to subscribe", b: "Still not Cursor" },
      { label: "Images", a: "Strong, bundled", b: "Strong, bundled" },
      { label: "Procurement", a: "Workspace admin", b: "ChatGPT Business/Enterprise" },
    ],
  },
  {
    slug: "windsurf-vs-cursor",
    title: "Windsurf vs Cursor",
    a: "windsurf",
    b: "cursor",
    intro:
      "Same species: AI-native IDEs near $20 Pro. Cursor is the habit of a lot of working developers. Windsurf is the one you try when the free quota matters, with a 2026 ownership change you should say out loud.",
    pickA: "Pick Windsurf to evaluate an AI IDE without paying first, and if you like its agent feel.",
    pickB: "Pick Cursor if you want the current default and a larger conversation around the editor.",
    rows: [
      { label: "Free tier", a: "Usable quota", b: "Hobby, limited" },
      { label: "Pro band", a: "Around $20/mo", b: "Around $20/mo" },
      { label: "Vendor", a: "Cognition (2026)", b: "AnySphere" },
      { label: "Risk", a: "Roadmap in transition", b: "Price and usage pools" },
      { label: "JetBrains", a: "Not the pitch", b: "Not the pitch. Use Copilot." },
    ],
  },
];

export function getComparison(slug: string) {
  return comparisons.find((item) => item.slug === slug);
}
