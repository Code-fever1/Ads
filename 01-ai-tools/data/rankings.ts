import type { Ranking } from "@/lib/types";

export const rankings: Ranking[] = [
  {
    slug: "ai-coding-tools",
    title: "Best AI coding tools",
    keyword: "best AI coding tools",
    updatedDate: "2026-11-25",
    intro:
      "There is no single best coding copilot. There is an editor (Cursor or Windsurf), a cheap plugin (GitHub Copilot), and a terminal agent (Claude Code or Aider). We ranked the stack we would actually pay for on a product team, not a leaderboard of Twitter demos. Cracked IDEs are not listed. If a site offers “Cursor Pro free,” close it.",
    toolSlugs: ["cursor", "claude-code", "github-copilot", "windsurf", "aider", "v0"],
    criteria: [
      "Does it touch a real git repo",
      "Can a full-time developer live in it for a week",
      "Is pricing a seat, a credit pool, or BYO key",
      "Verified against a public vendor page (Sep 2026 baseline — check vendor site before buying)",
    ],
    toolVerdicts: {
      cursor:
        "Still the strongest everyday AI-native editor. Fast Tab prediction and Composer multi-file edits make it the default pick for solo builders and VS Code teams, though heavy agent usage exceeds the ~$20/mo Pro pool.",
      "claude-code":
        "The terminal agent you bring in for messy migrations, test-driven debugging, and multi-file architecture passes. Pairs cleanly with Cursor or any existing editor via the ~$20/mo Claude Pro bundle.",
      "github-copilot":
        "The lowest-friction plugin for teams already paying for GitHub or working inside JetBrains IDEs. At ~$10/mo Pro baseline, it delivers solid autocomplete without forcing an editor switch.",
      windsurf:
        "A capable AI-native VS Code fork with a friendlier free starter quota than Cursor. Worth evaluating first if you want to test an AI IDE before paying, though its 2026 move under Cognition keeps the roadmap in transition.",
      aider:
        "Open-source terminal pair programming with zero subscription lock-in and clean automatic git commits. You bring your own API key and pay exact provider rates.",
      v0:
        "Not a general repo agent, yet unmatched when you need React, Tailwind, and shadcn components quickly for a Next.js project.",
    },
    faqs: [
      {
        question: "What is the best overall AI coding tool in 2026?",
        answer:
          "For most full-time web and product developers, Cursor Pro (~$20/mo baseline) is the best all-around daily editor, often paired with Claude Code in the terminal for larger refactors.",
      },
      {
        question: "What is the best budget AI coding option?",
        answer:
          "GitHub Copilot Pro (~$10/mo baseline) is the cheapest mainstream paid plugin, while Aider and Cline are free open-source tools where you pay only your own API token usage.",
      },
      {
        question: "Should JetBrains developers switch to Cursor?",
        answer:
          "Usually no—stay in JetBrains with GitHub Copilot for inline completions and run Claude Code or Aider in the terminal for multi-file tasks.",
      },
    ],
  },
  {
    slug: "ai-tools-for-developers",
    title: "Best AI tools for developers",
    keyword: "best AI tools for developers",
    updatedDate: "2026-11-25",
    intro:
      "Writing code is only half of shipping software. Developers also generate UI components, research documentation with citations, wire webhook automations, and pull open model weights. This list covers the full practical developer stack rather than repeating only code editors.",
    toolSlugs: [
      "cursor",
      "claude-code",
      "github-copilot",
      "v0",
      "aider",
      "cline",
      "perplexity",
      "n8n",
      "huggingface",
    ],
    criteria: [
      "Fits real git, CLI, or self-hosted developer workflows",
      "Transparent pricing or open-source licensing",
      "Solves a distinct engineering job (IDE, CLI agent, UI, docs search, automation, open weights)",
    ],
    toolVerdicts: {
      cursor:
        "Primary daily editor for fast Tab completion and Composer multi-file edits inside a familiar VS Code shell.",
      "claude-code":
        "Terminal agent for cross-repo refactors, migrations, and autonomous test-fix loops alongside any editor.",
      "github-copilot":
        "Best low-cost plugin (~$10/mo Pro baseline) when staying in JetBrains, Xcode, or corporate GitHub orgs.",
      v0:
        "Fastest way to turn rough layout ideas into editable React, Tailwind, and shadcn components for Next.js apps.",
      aider:
        "Open-source CLI pair programmer that keeps clean git history and lets you route tasks to cheap or frontier APIs.",
      cline:
        "Autonomous VS Code extension using your own API keys so you see exact token costs instead of hidden credit pools.",
      perplexity:
        "Replaces piles of search tabs when verifying library changes, error messages, or API docs with direct source links.",
      n8n:
        "Self-hostable workflow and AI-node automation engine with real JavaScript/Python code steps and no per-task Zapier tax.",
      huggingface:
        "Essential infrastructure hub for inspecting open model weights, licenses, datasets, and quick Space demos.",
    },
    faqs: [
      {
        question: "Which two tools give developers the biggest productivity jump?",
        answer:
          "An AI-capable editor or plugin (Cursor or GitHub Copilot) paired with a sourced research engine (Perplexity) covers both code generation and fast doc lookup.",
      },
      {
        question: "Why are n8n and Hugging Face on a developer list?",
        answer:
          "Developers rarely stop at writing app code—n8n handles self-hosted background automations and LLM pipelines, while Hugging Face is where open models and licenses live.",
      },
      {
        question: "How do I keep AI developer tool costs predictable?",
        answer:
          "Pair one ~$10–$20 editor seat with BYO-key tools like Aider or Cline capped at a hard spend limit on your API provider dashboard.",
      },
    ],
  },
  {
    slug: "chatgpt-alternatives",
    title: "Best ChatGPT alternatives",
    keyword: "ChatGPT alternatives",
    updatedDate: "2026-11-25",
    intro:
      "ChatGPT alternatives only matter if they win a job ChatGPT is average at. Claude wins long writing. Gemini wins Google files. Perplexity wins citations. Grok wins “what did the internet just say.” DeepSeek wins the API invoice if policy allows it. None of them replace Cursor for code.",
    toolSlugs: ["claude", "gemini", "perplexity", "microsoft-copilot", "grok", "deepseek"],
    criteria: [
      "Wins a specific job ChatGPT is only okay at",
      "Has a public pricing page",
      "No fake “ChatGPT Plus free” clones",
    ],
    toolVerdicts: {
      claude:
        "The best ChatGPT alternative for long documents, thoughtful editing, and developers who also want Claude Code.",
      gemini:
        "The obvious switch if your mail, spreadsheets, and docs live inside Google Workspace and Drive.",
      perplexity:
        "Better than ChatGPT whenever your primary need is sourced research with clickable citations.",
      "microsoft-copilot":
        "Makes sense inside organizations already standardized on Word, Excel, Outlook, and Teams.",
      grok:
        "Useful mainly if you already subscribe to X Premium and want quick context on recent social chatter.",
      deepseek:
        "Compelling free chat and aggressive API pricing, provided your security and data-residency rules permit a China-based provider.",
    },
    faqs: [
      {
        question: "What is the closest all-round alternative to ChatGPT Plus?",
        answer:
          "Claude Pro (~$20/mo baseline) is the top all-round alternative for writing, reasoning, and coding, while Gemini fits Google-heavy workflows best.",
      },
      {
        question: "Which ChatGPT alternative is best for cited facts?",
        answer:
          "Perplexity is built specifically around live web and academic retrieval with inline links.",
      },
      {
        question: "Are any of these completely free?",
        answer:
          "All six offer free consumer entry tiers with usage limits; DeepSeek and Google Gemini are particularly accessible at the free tier.",
      },
    ],
  },
  {
    slug: "ai-image-generators",
    title: "Best AI image generators",
    keyword: "best AI image generators",
    updatedDate: "2026-11-25",
    intro:
      "Still images, not video. Midjourney for taste, Firefly for commercial Adobe work, FLUX for builders, Leonardo for a web UI, PhotoRoom for catalog cutouts. We skip every “unlimited free Midjourney” scraper.",
    toolSlugs: ["midjourney", "adobe-firefly", "flux", "leonardo", "photoroom"],
    criteria: [
      "Transparent vendor licensing and billing",
      "Practical output for real design or product jobs",
      "Verified Sep 2026 baseline (check vendor site before buying)",
    ],
    toolVerdicts: {
      midjourney:
        "Remains the aesthetic leader for art-directed stills and concept exploration, starting around $10/mo with no meaningful free tier.",
      "adobe-firefly":
        "Wins for agency and commercial brand teams needing Generative Fill on real Photoshop layers and clear IP documentation.",
      flux:
        "The developer-friendly model family from Black Forest Labs, available via usage APIs or open local weights for select variants.",
      leonardo:
        "Approachable web studio offering daily free tokens and multi-model choice for concept sheets before committing to a paid plan.",
      photoroom:
        "Purpose-built for e-commerce sellers who need clean background removal and consistent product catalog photos.",
    },
    faqs: [
      {
        question: "What is the best AI image generator overall?",
        answer:
          "Midjourney wins on artistic taste and lighting, while Adobe Firefly wins for commercial Creative Cloud production.",
      },
      {
        question: "Which AI image generator has a real free tier?",
        answer:
          "Leonardo AI provides daily free tokens, PhotoRoom offers free basic cutouts, and select FLUX weights can run free locally if you own a capable GPU.",
      },
      {
        question: "Can I use AI-generated images commercially?",
        answer:
          "Yes on paid plans for most tools here, though Adobe Firefly carries the strongest enterprise indemnification story. Always read the vendor's current plan terms.",
      },
    ],
  },
  {
    slug: "ai-writing-tools",
    title: "Best AI writing tools",
    keyword: "best AI writing tools",
    updatedDate: "2026-11-25",
    intro:
      "Writing tools are three products: a model (Claude/ChatGPT), a checker (Grammarly), and a content platform (Jasper, Notion). Mixing them into one numbered list is how you get sludge. This page is the map.",
    toolSlugs: ["claude", "chatgpt", "grammarly", "notion-ai", "jasper"],
    criteria: [
      "Who edits the final sentence",
      "Where the text already lives",
      "Whether you need team seats or one personal account",
    ],
    toolVerdicts: {
      claude:
        "Best drafting and editing partner for essays, technical specs, and nuanced prose that avoids stiff boilerplate.",
      chatgpt:
        "Strong generalist writer bundled with data analysis, web search, and custom instructions for mixed daily tasks.",
      grammarly:
        "The practical inline grammar and clarity layer across email and browser text boxes—especially strong for non-native English writers.",
      "notion-ai":
        "Only worth it if your team's docs and wikis already live inside Notion; strong for summarizing internal specs.",
      jasper:
        "A B2B marketing campaign platform priced above $20 assistants—worthwhile for coordinated brand teams, overkill for solo writers.",
    },
    faqs: [
      {
        question: "Should a solo writer pay for Jasper or Claude?",
        answer:
          "Claude Pro (~$20/mo baseline) gives stronger raw writing quality at a much lower price than Jasper's team-oriented plans.",
      },
      {
        question: "Do I still need Grammarly if I use Claude or ChatGPT?",
        answer:
          "Grammarly works inline everywhere you type (Gmail, Slack, web forms) without copying text into a separate chat tab, making it complementary rather than redundant.",
      },
      {
        question: "Which writing tool is free to start?",
        answer:
          "Claude, ChatGPT, and Grammarly all offer usable free tiers; Notion AI and Jasper are paid products.",
      },
    ],
  },
  {
    slug: "ai-video-tools",
    title: "Best AI video tools",
    keyword: "best AI video generators",
    updatedDate: "2026-11-25",
    intro:
      "AI video is credits, duration caps, and disappointment if you expected a feature film. Runway is the mature bench. Kling is the rotating demo king. Descript is the editor for talking-head footage. We will never list pirate stream aggregators.",
    toolSlugs: ["runway", "kling", "descript"],
    criteria: [
      "Public commercial site",
      "Credit or minute limits disclosed",
      "No piracy, no cam rips",
    ],
    toolVerdicts: {
      runway:
        "The established generative video workbench with reliable US billing, camera controls, and clear commercial export rules.",
      kling:
        "Often leads short-clip motion benchmarks with free trial credits, though its editing suite is thinner and data-residency terms merit review.",
      descript:
        "The practical pick for podcasters and educators editing real recorded video by deleting words in a transcript.",
    },
    faqs: [
      {
        question: "Which AI video tool is best for YouTube talking-head edits?",
        answer:
          "Descript—it lets you cut filler words, clean mic audio, and trim recorded clips directly from the text transcript.",
      },
      {
        question: "Which is better for generating B-roll clips from prompts?",
        answer:
          "Runway offers the most mature studio controls and invoicing; Kling is worth testing via its free trial credits for motion-heavy shots.",
      },
      {
        question: "Why are there only three tools on this video list?",
        answer:
          "Kiln only lists video tools we verified with clear commercial sites and honest credit boundaries rather than padding the table with thin wrappers.",
      },
    ],
  },
  {
    slug: "free-ai-tools",
    title: "Best free AI tools",
    keyword: "best free AI tools",
    updatedDate: "2026-11-25",
    intro:
      "Free means a usable daily quota, not a stolen password. This list is ChatGPT/Gemini/NotebookLM free tiers, open-source Aider and Cline, Hugging Face, and PhotoRoom’s basic cutout. Midjourney is not free. Cursor Hobby is a trial, not a career.",
    toolSlugs: ["chatgpt", "gemini", "notebooklm", "aider", "cline", "huggingface", "photoroom"],
    criteria: [
      "A legitimate, ongoing free surface",
      "No cracked licenses or account-sharing schemes",
      "Clear upgrade or BYO-key cost path",
    ],
    toolVerdicts: {
      chatgpt:
        "Broadest free consumer assistant for writing, brainstorming, and light file questions within peak-hour caps.",
      gemini:
        "Free with any Google account and handy for quick Workspace summaries and everyday Google-ecosystem tasks.",
      notebooklm:
        "Completely free with a Google account for source-grounded PDF study, notes synthesis, and cited answers.",
      aider:
        "Free open-source terminal coding agent—you pay zero subscription markup, only your chosen model API tokens.",
      cline:
        "Free open-source VS Code coding agent with full per-request API cost transparency.",
      huggingface:
        "Free open hub for downloading model weights, testing community Spaces, and inspecting model licenses.",
      photoroom:
        "Free single-image background removal for sellers and quick catalog graphics without a subscription.",
    },
    faqs: [
      {
        question: "Are Aider and Cline actually free?",
        answer:
          "The software is 100% open-source and free to install. You only pay the underlying LLM provider (or $0 if you point them at a local model).",
      },
      {
        question: "What is the best completely free AI tool for students?",
        answer:
          "NotebookLM—it lets students upload lecture PDFs and notes for cited Q&A at no cost with a Google account.",
      },
      {
        question: "Why isn't Midjourney or Claude Code on this list?",
        answer:
          "Neither has an ongoing free tier. Kiln reserves this list for tools you can genuinely use without paying a monthly subscription.",
      },
    ],
  },
  {
    slug: "ai-agents",
    title: "Best AI agents",
    keyword: "best AI agents",
    updatedDate: "2026-11-25",
    intro:
      "An agent is a loop with tools, not a chat that says it will book your flights. Claude Code and Cline are coding agents. n8n is a workflow you can inspect. Lindy is hosted busywork. Zapier agents sit on a task meter. We do not list autonomous trading bots.",
    toolSlugs: ["claude-code", "cline", "n8n", "lindy", "zapier"],
    criteria: [
      "Can take real actions across files or APIs",
      "Exposes inspectable steps or git diffs",
      "Supports human approval or spend limits",
    ],
    toolVerdicts: {
      "claude-code":
        "Best-in-class repository coding agent that plans edits, runs tests, and proposes reviewable git diffs from the terminal.",
      cline:
        "VS Code autonomous coding agent with step-by-step approval and exact BYO-key API spend visibility.",
      n8n:
        "Inspectable workflow automation with AI agent nodes you can self-host so execution costs stay predictable.",
      lindy:
        "Hosted no-code AI agent platform geared toward inbox triage, scheduling, and CRM busywork for non-developers.",
      zapier:
        "Adds agentic layers on top of the widest SaaS connector catalog, best for teams that accept task-based billing.",
    },
    faqs: [
      {
        question: "What is the safest way to start using AI agents?",
        answer:
          "Require human approval before file writes, shell commands, or external emails, and set hard spend caps on API or task usage.",
      },
      {
        question: "Which AI agent is best for software engineering?",
        answer:
          "Claude Code (for terminal-driven repo tasks) and Cline (inside VS Code with BYO keys) are the strongest dedicated coding agents.",
      },
      {
        question: "Should operations teams pick n8n or Lindy?",
        answer:
          "Pick n8n if you want deterministic graphs you own and debug; pick Lindy if you want prebuilt hosted templates for email and CRM workflows.",
      },
    ],
  },
  {
    slug: "ai-for-students",
    title: "Best AI tools for students",
    keyword: "best AI tools for students",
    updatedDate: "2026-11-25",
    intro:
      "Students need citations, PDF brains, and a writing checker, not a ghostwriter for take-home exams. NotebookLM, Perplexity, Grammarly, and Gemini’s free tier are the honest stack. Replit helps if the laptop is weak. We will not help you cheat. Your school’s policy wins.",
    toolSlugs: ["notebooklm", "perplexity", "grammarly", "gemini", "replit-agent"],
    criteria: [
      "Free or low-cost entry tier",
      "Grounded in uploaded sources or verifiable web citations",
      "Works smoothly in a browser on a modest laptop",
    ],
    toolVerdicts: {
      notebooklm:
        "Top study companion for turning dense lecture PDFs and syllabus readings into cited Q&A and audio recaps for free.",
      perplexity:
        "Fast research console with academic corpus filters and inline source links you can open and verify yourself.",
      grammarly:
        "Essential free spelling and clarity checker for essays, emails, and lab reports without rewriting your voice.",
      gemini:
        "Convenient free assistant inside Google Docs and Drive where most student group projects already live.",
      "replit-agent":
        "Browser IDE and agent that lets CS students build and host projects on weak laptops or Chromebooks without local setup.",
    },
    faqs: [
      {
        question: "What is the best free AI tool for studying lecture PDFs?",
        answer:
          "NotebookLM—it answers strictly from the PDFs and notes you upload and links directly to the source passages.",
      },
      {
        question: "Can students use Replit Agent without a powerful laptop?",
        answer:
          "Yes. Because Replit runs the editor, code execution, and preview inside the cloud browser tab, it works well on low-spec hardware.",
      },
      {
        question: "Does Kiln recommend AI tools for writing graded essays?",
        answer:
          "No—use Grammarly for proofreading and NotebookLM/Perplexity for organizing sources, and always follow your institution's academic integrity policy.",
      },
    ],
  },
];

export function getRanking(slug: string) {
  return rankings.find((item) => item.slug === slug);
}
