import type { Comparison } from "@/lib/types";

export const comparisons: Comparison[] = [
  {
    slug: "cursor-vs-claude-code",
    title: "Cursor vs Claude Code",
    tools: ["cursor", "claude-code"],
    updatedDate: "2026-11-25",
    intro:
      "These two are not strict substitutes. Cursor is where your caret lives inside a VS Code-shaped editor. Claude Code is a terminal agent you point at a repository for multi-file refactors. Plenty of working engineers pay for both.",
    verdict:
      "Pick Cursor if you want fast inline Tab completions, visual diffs, and interactive Composer edits inside your IDE. Pick Claude Code if you want a terminal agent to plan migrations, hunt bugs, and run test loops across a whole repo—or pair both at ~$40/month total.",
    picks: [
      {
        slug: "cursor",
        pick: "Pick Cursor when you want speed in the file, Tab autocomplete, and Composer inside a visual editor.",
      },
      {
        slug: "claude-code",
        pick: "Pick Claude Code when the task is a migration, a bug hunt, or an architecture pass you can describe clearly in a prompt.",
      },
    ],
    rows: [
      { label: "Format", values: ["AI-native IDE (VS Code fork)", "Terminal CLI agent"] },
      { label: "Entry paid price", values: ["Check official pricing", "Claude Pro $20/mo ($17/mo annual)"] },
      { label: "Free tier", values: ["Hobby free tier (limited)", "None (requires Claude Pro or API)"] },
      { label: "Best for", values: ["Day-to-day feature work & Tab edits", "Whole-repo refactors, migrations & CLI loops"] },
      { label: "Key strength", values: ["Fastest inline editing & Composer loop", "Deep autonomous repo context & shell test runs"] },
      { label: "Key weakness", values: ["Frontier pools trigger overage or Ultra", "No inline Tab autocomplete; heavy runs hit Max"] },
    ],
    faqs: [
      {
        question: "Should I buy Cursor Pro or Claude Pro for Claude Code?",
        answer:
          "If you only buy one and spend most of your day typing inside an editor, start with Cursor Pro. If you already use another editor like Neovim or JetBrains and want autonomous multi-file edits from the terminal, pick Claude Pro with Claude Code.",
      },
      {
        question: "Do developers actually use Cursor and Claude Code together?",
        answer:
          "Yes. Running Cursor for active file edits alongside Claude Code in the integrated terminal for migrations or test-driven bug hunts is a common ~$40/mo stack.",
      },
      {
        question: "Which one has a free tier?",
        answer:
          "Cursor offers a limited Hobby free tier. Claude Code requires a paid Claude Pro/Max subscription or pay-as-you-go Anthropic API credits.",
      },
      {
        question: "Which is cheaper under heavy daily usage?",
        answer:
          "Both start around $20/mo and both escalate under heavy agent runs—Cursor via usage/Ultra and Claude Code via Max or API billing. Check your prompt volume before committing.",
      },
    ],
  },
  {
    slug: "windsurf-vs-cursor",
    title: "Windsurf vs Cursor",
    tools: ["windsurf", "cursor"],
    updatedDate: "2026-11-25",
    intro:
      "Same species: AI-native VS Code forks hovering near the $20/month Pro band. Cursor is the established default for working developers. Windsurf is the alternative with a generous evaluation quota and a 2026 ownership transition to Cognition worth noting.",
    verdict:
      "Pick Cursor if you want the proven daily driver with the sharpest Tab autocomplete and largest community ecosystem. Pick Windsurf if you want a more generous free starter quota to test an AI-native IDE before paying.",
    picks: [
      {
        slug: "windsurf",
        pick: "Pick Windsurf to evaluate an AI IDE with a usable free quota and if you like its Cascade agent flow.",
      },
      {
        slug: "cursor",
        pick: "Pick Cursor if you want the current developer default with faster Tab completions and steadier momentum.",
      },
    ],
    rows: [
      { label: "Format", values: ["AI-native IDE (VS Code fork)", "AI-native IDE (VS Code fork)"] },
      { label: "Entry paid price", values: ["Pro $20/mo (via Devin pricing)", "Check official pricing"] },
      { label: "Free tier", values: ["Usable starter quota", "Hobby limited trial"] },
      { label: "Best for", values: ["Evaluating an AI IDE without paying upfront", "Full-time product engineering & daily Tab edits"] },
      { label: "Key strength", values: ["Accessible free quota & Cascade agent", "Best-in-class Tab autocomplete & Composer"] },
      { label: "Key weakness", values: ["2026 Cognition acquisition roadmap flux", "Included frontier pool empties fast on agents"] },
    ],
    faqs: [
      {
        question: "Is Windsurf cheaper than Cursor?",
        answer:
          "Windsurf Pro sits at $20/mo (via Devin pricing) with a free agent quota; confirm Cursor's current paid tiers directly on cursor.com/pricing before comparing invoices.",
      },
      {
        question: "Why does Kiln mention Cognition on the Windsurf page?",
        answer:
          "Windsurf moved under Cognition in 2026. Ownership transitions can change pricing, retention policies, and product roadmaps, so agencies should verify current terms.",
      },
      {
        question: "Can either editor replace JetBrains IDEs?",
        answer:
          "Both are VS Code forks. If your workflow depends on IntelliJ, PyCharm, or Rider refactoring tools, GitHub Copilot inside JetBrains is less disruptive.",
      },
    ],
  },
  {
    slug: "claude-code-vs-github-copilot",
    title: "Claude Code vs GitHub Copilot",
    tools: ["claude-code", "github-copilot"],
    updatedDate: "2026-11-25",
    intro:
      "Comparing a terminal-first autonomous agent against the cheapest ubiquitous IDE plugin. Claude Code owns multi-file refactors from the shell; GitHub Copilot owns inline autocomplete inside VS Code, JetBrains, and GitHub pull requests.",
    verdict:
      "Pick GitHub Copilot if you want affordable inline autocomplete ($10/mo Pro baseline), JetBrains support, or frictionless GitHub enterprise procurement. Pick Claude Code if you want an autonomous agent that reads your repo, runs tests, and ships multi-file changes.",
    picks: [
      {
        slug: "claude-code",
        pick: "Pick Claude Code when the bottleneck is multi-file architecture, debugging, or test-driven refactors.",
      },
      {
        slug: "github-copilot",
        pick: "Pick GitHub Copilot for $10/mo inline completions, JetBrains support, or existing GitHub org billing.",
      },
    ],
    rows: [
      { label: "Format", values: ["Terminal CLI agent", "IDE plugin (VS Code, JetBrains, Xcode)"] },
      { label: "Entry paid price", values: ["Claude Pro $20/mo ($17/mo annual)", "Pro $10/mo (~$8.33/mo annual)"] },
      { label: "Free tier", values: ["None (paid subscription or API)", "Limited free tier in VS Code"] },
      { label: "Best for", values: ["Unattended multi-file refactors & migrations", "Inline autocomplete & enterprise compliance"] },
      { label: "Key strength", values: ["Deep repo reasoning & shell execution", "Half the entry price; works in JetBrains"] },
      { label: "Key weakness", values: ["No inline editor autocomplete", "Weaker on complex autonomous repo tasks"] },
    ],
    faqs: [
      {
        question: "Why is GitHub Copilot half the price of Claude Code?",
        answer:
          "Copilot Pro's ~$10/mo baseline targets lightweight completions and chat inside your existing IDE, with extra credits metered for heavier models. Claude Code bundles with Claude Pro (~$20/mo) for heavy agentic context.",
      },
      {
        question: "Which works with JetBrains IDEs like IntelliJ or WebStorm?",
        answer:
          "GitHub Copilot has an official JetBrains plugin. Claude Code runs in any terminal alongside JetBrains rather than as an inline editor plugin.",
      },
      {
        question: "Can I use both together?",
        answer:
          "Yes—running Copilot for cheap inline completions inside your editor and Claude Code in the terminal for big refactors avoids paying for a separate AI IDE fork.",
      },
    ],
  },
  {
    slug: "cursor-vs-github-copilot",
    title: "Cursor vs GitHub Copilot",
    tools: ["cursor", "github-copilot"],
    updatedDate: "2026-11-25",
    intro:
      "Individual Pro pricing is the first fork in the road. Copilot is roughly half the seat cost of Cursor and installs inside the editor you already use. Cursor replaces the editor itself with an AI-native VS Code fork.",
    verdict:
      "Pick Cursor if you use VS Code and want multi-file Composer edits and aggressive Tab prediction as your primary workflow. Pick GitHub Copilot if you want the cheapest serious paid seat (~$10/mo), need JetBrains support, or already buy through GitHub.",
    picks: [
      {
        slug: "cursor",
        pick: "Pick Cursor for daily product work where multi-file edits and next-edit Tab prediction are the point.",
      },
      {
        slug: "github-copilot",
        pick: "Pick Copilot for the cheapest serious assistant, GitHub-native orgs, and JetBrains users.",
      },
    ],
    rows: [
      { label: "Format", values: ["AI-native IDE (VS Code fork)", "Plugin in existing IDEs"] },
      { label: "Entry paid price", values: ["Check official pricing", "Pro $10/mo (~$8.33/mo annual)"] },
      { label: "Free tier", values: ["Hobby limited trial", "Limited free monthly completions"] },
      { label: "Best for", values: ["Solo/product devs wanting deep IDE AI", "GitHub teams & JetBrains developers"] },
      { label: "Key strength", values: ["Aggressive Tab & Composer multi-file flow", "Low entry cost & corporate procurement"] },
      { label: "Key weakness", values: ["Higher cost & usage pool overages", "Feels bolted-on for big repo edits"] },
    ],
    faqs: [
      {
        question: "Is Cursor twice as good as GitHub Copilot?",
        answer:
          "For multi-file edits and Tab-predict workflows inside VS Code projects, Cursor feels noticeably tighter. For basic autocomplete or JetBrains shops, Copilot is far better value at ~$10/mo.",
      },
      {
        question: "Will switching to Cursor break my VS Code extensions?",
        answer:
          "Rarely—Cursor is a VS Code fork and imports most extensions and keybindings, though proprietary Microsoft extensions can occasionally differ.",
      },
      {
        question: "Which is easier to get approved at an enterprise?",
        answer:
          "GitHub Copilot Business/Enterprise wins easily if your company already contracts with GitHub and Microsoft.",
      },
    ],
  },
  {
    slug: "lovable-vs-bolt-new",
    title: "Lovable vs Bolt.new",
    tools: ["lovable", "bolt"],
    updatedDate: "2026-11-25",
    intro:
      "Both tools turn plain-English prompts into working web apps in the browser. Bolt.new Pro runs $25/mo ($18/mo annual); check Lovable's live pricing page directly. The key difference is how they run your code and who gets stuck first when the prototype grows.",
    verdict:
      "Pick Lovable if you are a founder or non-engineer validating an MVP and want a clean GitHub handoff path. Pick Bolt.new if you are a builder spiking a frontend in real in-browser Node.js WebContainers and want direct code control.",
    picks: [
      {
        slug: "lovable",
        pick: "Pick Lovable when a non-developer needs visual product screens fast with a clean GitHub export.",
      },
      {
        slug: "bolt",
        pick: "Pick Bolt.new when you want real WebContainers running Node in the browser for quick frontend spikes.",
      },
    ],
    rows: [
      { label: "Format", values: ["Hosted prompt-to-app builder", "In-browser WebContainers IDE & agent"] },
      { label: "Entry paid price", values: ["Check official pricing", "Pro $25/mo ($18/mo annual)"] },
      { label: "Free tier", values: ["Strict free message cap", "Daily free message & token cap"] },
      { label: "Best for", values: ["Founders validating full-stack MVP flows", "Developers spiking frontend apps in-tab"] },
      { label: "Key strength", values: ["Non-coder friendly UX & GitHub sync", "Live Node runtime inside your browser tab"] },
      { label: "Key weakness", values: ["Message caps throttle fast; needs tests", "Token burn spikes during debug loops"] },
    ],
    faqs: [
      {
        question: "Can I ship a Lovable or Bolt.new app straight to paying customers?",
        answer:
          "Treat either output as a prototype until a human developer audits auth, database rules, and tests. Both make exporting to a real repo straightforward.",
      },
      {
        question: "Why do credits run out so quickly on browser app builders?",
        answer:
          "Every fix loop re-reads large generated files. Download the code to Cursor or Claude Code once the core UI works instead of burning tokens on minor tweaks.",
      },
      {
        question: "Which has a better free tier for testing?",
        answer:
          "Bolt.new gives daily free message allowances useful for short spikes; Lovable's free tier hits message caps quickly on multi-screen apps.",
      },
    ],
  },
  {
    slug: "lovable-vs-v0",
    title: "Lovable vs v0",
    tools: ["lovable", "v0"],
    updatedDate: "2026-11-25",
    intro:
      "Both build web interfaces from chat prompts, but they solve different parts of the job. Lovable tries to generate the whole app; v0 focuses on clean React, Tailwind, and shadcn UI components for developers.",
    verdict:
      "Pick v0 if you already have a Next.js or React repository and want sharp UI components you will own in git. Pick Lovable if you want a standalone prompt-to-app environment without setting up a local codebase first.",
    picks: [
      {
        slug: "lovable",
        pick: "Pick Lovable when you want an end-to-end app prototype without touching a local IDE.",
      },
      {
        slug: "v0",
        pick: "Pick v0 when you ship React/Next.js code and want drop-in Tailwind/shadcn components.",
      },
    ],
    rows: [
      { label: "Format", values: ["Full-stack prompt-to-app builder", "Component & UI generator for React/Next.js"] },
      { label: "Entry paid price", values: ["Check official pricing", "Check official pricing"] },
      { label: "Free tier", values: ["Limited free messages", "Free monthly credits"] },
      { label: "Best for", values: ["Non-engineers & solo founders building MVPs", "Frontend/Next.js devs fixing blank-page UI"] },
      { label: "Key strength", values: ["All-in-one app flow & GitHub sync", "Clean Tailwind & shadcn code output"] },
      { label: "Key weakness", values: ["Engineers quickly outgrow the sandbox", "Not built for backend logic or non-React apps"] },
    ],
    faqs: [
      {
        question: "Should a React developer pay for Lovable or v0?",
        answer:
          "Pay for v0 (or just Cursor) if you already work in a React/Next.js repo. v0 emits modular UI components without wrapping your whole backend in a hosted builder.",
      },
      {
        question: "Does v0 handle databases and authentication?",
        answer:
          "v0 excels at frontend UI and Vercel-aligned scaffolding, whereas Lovable aims to wire up full-stack CRUD flows out of the box.",
      },
      {
        question: "Can I use v0 and Cursor together?",
        answer:
          "Yes—generating initial page layouts in v0 and refining business logic in Cursor is a fast Next.js workflow.",
      },
    ],
  },
  {
    slug: "cursor-vs-claude-code-vs-windsurf",
    title: "Cursor vs Claude Code vs Windsurf",
    tools: ["cursor", "claude-code", "windsurf"],
    updatedDate: "2026-11-25",
    intro:
      "The flagship 2026 AI coding comparison. They split across two different interfaces: AI-native VS Code forks (Cursor, Windsurf/Devin Desktop at $20/mo Pro) versus a pure terminal agent (Claude Code inside Claude Pro at $20/mo or $17/mo annual).",
    verdict:
      "Pick Cursor as the strongest everyday AI editor. Pick Windsurf if you want a generous free starter quota before paying $20/mo. Pick Claude Code if you prefer keeping your current editor and running autonomous multi-file tasks from the terminal.",
    picks: [
      {
        slug: "cursor",
        pick: "Pick Cursor for the best overall AI-native editor, Tab prediction, and daily feature velocity.",
      },
      {
        slug: "claude-code",
        pick: "Pick Claude Code for terminal-native autonomous migrations, debugging, and whole-repo refactors.",
      },
      {
        slug: "windsurf",
        pick: "Pick Windsurf if you want a usable free AI IDE tier first or prefer its Cascade workflow.",
      },
    ],
    rows: [
      { label: "Format", values: ["AI-native IDE (VS Code fork)", "Terminal CLI agent", "AI-native IDE (VS Code fork)"] },
      { label: "Entry paid price", values: ["Check official pricing", "Claude Pro $20/mo ($17/mo annual)", "Pro $20/mo (via Devin pricing)"] },
      { label: "Free tier", values: ["Hobby limited trial", "None (paid plan or API)", "Usable free starter quota"] },
      { label: "Best for", values: ["Daily full-time product engineering", "Deep multi-file refactors & CLI loops", "Evaluating an AI IDE on a free quota"] },
      { label: "Key strength", values: ["Fastest Tab + Composer workflow", "Deep repo planning & shell test runs", "Accessible free quota & Cascade agent"] },
      { label: "Key weakness", values: ["Pool overages on heavy agent runs", "No inline editor autocomplete", "2026 Cognition ownership roadmap flux"] },
    ],
    faqs: [
      {
        question: "Which single tool gives the best value at $20/month?",
        answer:
          "Cursor Pro gives the most balanced daily productivity if you use VS Code. Claude Pro (which includes Claude web chat plus Claude Code) gives the highest value if you also want top-tier prose writing alongside terminal coding.",
      },
      {
        question: "Why consider Windsurf over Cursor in 2026?",
        answer:
          "Windsurf offers a friendlier free starter quota for trying AI-native editing, though its 2026 move under Cognition makes long-term roadmap stability worth watching.",
      },
      {
        question: "Can I use Claude Code inside Cursor or Windsurf?",
        answer:
          "Yes. Because Claude Code runs in the terminal, you can launch it directly inside Cursor's or Windsurf's integrated terminal panel.",
      },
      {
        question: "Do any of these work offline or with JetBrains?",
        answer:
          "All three require cloud model APIs. None is a JetBrains plugin—though Claude Code runs happily in the JetBrains terminal.",
      },
    ],
  },
  {
    slug: "chatgpt-vs-claude",
    title: "ChatGPT vs Claude",
    tools: ["chatgpt", "claude"],
    updatedDate: "2026-11-25",
    intro:
      "This is the comparison people actually search after they leave the free tab. ChatGPT is the generalist with more consumer surfaces. Claude is the one we hand a 40-page brief or pair with Claude Code.",
    verdict:
      "Pick ChatGPT for a single all-purpose subscription covering writing, data analysis, image generation, and custom GPTs. Pick Claude when you edit long technical or editorial documents or want Claude Code bundled for terminal development.",
    picks: [
      {
        slug: "chatgpt",
        pick: "Pick ChatGPT when you want one account for writing, images, Python analysis, and broad familiarity.",
      },
      {
        slug: "claude",
        pick: "Pick Claude when the job is long, careful prose, complex specs, or about to become a Claude Code session.",
      },
    ],
    rows: [
      { label: "Format", values: ["Multimodal generalist assistant", "Long-context writing & coding assistant"] },
      { label: "Entry paid price", values: ["Go $8/mo; Plus $20/mo", "Pro $20/mo ($17/mo annual)"] },
      { label: "Free tier", values: ["Generous free tier (rate-capped)", "Free tier with daily limits"] },
      { label: "Best for", values: ["All-round tasks, spreadsheets & images", "Long-form briefs, nuanced edits & Claude Code"] },
      { label: "Key strength", values: ["Breadth of bundled tools & voice/images", "Tone control, Artifacts & terminal coding bundle"] },
      { label: "Key weakness", values: ["Prose can default to generic patterns", "Fewer consumer gadgets & no native image studio"] },
    ],
    faqs: [
      {
        question: "Which is better for coding: ChatGPT Plus or Claude Pro?",
        answer:
          "Claude Pro wins for repository work because it includes Claude Code in the terminal alongside strong long-context code reasoning.",
      },
      {
        question: "Which has better free usage?",
        answer:
          "ChatGPT's free tier is generally more permissive across mixed tasks, while Claude's free limits tighten faster on long document uploads.",
      },
      {
        question: "Are either of them good enough as a citation search engine?",
        answer:
          "Both search the web now, but Perplexity remains noticeably stronger when every claim needs clean, verifiable links.",
      },
    ],
  },
  {
    slug: "gemini-vs-chatgpt",
    title: "ChatGPT vs Gemini",
    tools: ["chatgpt", "gemini"],
    updatedDate: "2026-11-25",
    intro:
      "The files decide this matchup. If your company lives in Google Drive, Docs, and Gmail, Gemini sits inside your existing tabs. If you want an independent all-rounder with custom GPTs and Python data analysis, ChatGPT remains the default.",
    verdict:
      "Pick ChatGPT if you want the strongest standalone assistant with a broad plugin/GPT ecosystem. Pick Google Gemini if your documents, email, and calendar live in Google Workspace and you want native Drive integration.",
    picks: [
      {
        slug: "chatgpt",
        pick: "Pick ChatGPT when you want the default independent assistant and Python sandbox.",
      },
      {
        slug: "gemini",
        pick: "Pick Gemini when Google Workspace (Drive, Docs, Gmail) is already where your work lives.",
      },
    ],
    rows: [
      { label: "Format", values: ["Standalone assistant + sandbox", "Google-native assistant & Workspace add-on"] },
      { label: "Entry paid price", values: ["Go $8/mo; Plus $20/mo", "Google AI Plus $4.99/mo"] },
      { label: "Free tier", values: ["Generous free tier (rate-capped)", "Free with any Google account"] },
      { label: "Best for", values: ["Independent workflows & data analysis", "Teams operating in Gmail, Docs & Drive"] },
      { label: "Key strength", values: ["Versatile multi-tool surface", "Zero copy-paste inside Google Workspace"] },
      { label: "Key weakness", values: ["Google Drive integration is secondary", "Coding quality lags specialist IDEs"] },
    ],
    faqs: [
      {
        question: "Does Gemini replace NotebookLM for studying PDFs?",
        answer:
          "No—for strict source-grounded Q&A over uploaded PDFs with page citations, Google's NotebookLM is much sharper than general Gemini chat.",
      },
      {
        question: "Which is better for coding?",
        answer:
          "ChatGPT is slightly handier for quick standalone snippets, though neither replaces Cursor or Claude Code for real projects.",
      },
      {
        question: "How is Gemini priced?",
        answer:
          "Basic Gemini is free with a Google account; higher context and Workspace features sit inside paid Google AI / Workspace tiers (verify current pricing on Google's site).",
      },
    ],
  },
  {
    slug: "midjourney-vs-adobe-firefly",
    title: "Midjourney vs Adobe Firefly",
    tools: ["midjourney", "adobe-firefly"],
    updatedDate: "2026-11-25",
    intro:
      "Taste versus paperwork. Midjourney wins aesthetic direction and campaign look tests. Adobe Firefly wins when the asset has to open as a layered Photoshop file and Legal asks how the model was trained.",
    verdict:
      "Pick Midjourney for art-directed stills and concept exploration where visual taste comes first. Pick Adobe Firefly if you already pay for Creative Cloud and need commercially indemnified Generative Fill directly inside Photoshop layers.",
    picks: [
      {
        slug: "midjourney",
        pick: "Pick Midjourney for style-led illustration, photography look, and concept boards.",
      },
      {
        slug: "adobe-firefly",
        pick: "Pick Firefly when the deliverable is a layered PSD/Illustrator file or needs enterprise legal sign-off.",
      },
    ],
    rows: [
      { label: "Format", values: ["Web studio & Discord generator", "Creative Cloud & web generator"] },
      { label: "Entry paid price", values: ["Basic $10/mo ($8/mo annual)", "Check official pricing"] },
      { label: "Free tier", values: ["No meaningful free plan", "Small free starter credits"] },
      { label: "Best for", values: ["Art-directed stills & concept art", "Commercial brand teams inside Photoshop"] },
      { label: "Key strength", values: ["Distinctive aesthetic taste & lighting", "Editable PSD layers & commercial licensing"] },
      { label: "Key weakness", values: ["Flat image output; no free tier", "Safer, less daring artistic style"] },
    ],
    faqs: [
      {
        question: "Is Adobe Firefly really free?",
        answer:
          "Not for serious volume. A small free starter credit bucket exists, but practical production volume lives inside paid Creative Cloud subscriptions.",
      },
      {
        question: "Can Midjourney edit layers inside Photoshop?",
        answer:
          "No. Midjourney exports flat images that you must composite manually, whereas Firefly runs Generative Fill directly on Photoshop layers.",
      },
      {
        question: "What if I want open weights or an API instead?",
        answer:
          "Look at FLUX by Black Forest Labs for API integration or local weight execution.",
      },
    ],
  },
  {
    slug: "perplexity-vs-chatgpt",
    title: "Perplexity vs ChatGPT",
    tools: ["perplexity", "chatgpt"],
    updatedDate: "2026-11-25",
    intro:
      "If the job needs clickable links you can verify, open Perplexity. If the job needs a draft, spreadsheet analysis, or brainstorm, open ChatGPT. Both can browse the web now, yet only one behaves like a research console.",
    verdict:
      "Pick Perplexity for cited briefings, technical fact-checking, and shopping research where sources matter. Pick ChatGPT for drafting, Python file analysis, and multi-step assistant errands.",
    picks: [
      {
        slug: "perplexity",
        pick: "Pick Perplexity for factual briefings, academic/web source filtering, and anything you will cite.",
      },
      {
        slug: "chatgpt",
        pick: "Pick ChatGPT for writing drafts, analyzing uploaded spreadsheets, and general daily work.",
      },
    ],
    rows: [
      { label: "Format", values: ["AI answer & citation engine", "General multimodal chat assistant"] },
      { label: "Entry paid price", values: ["Pro $20/mo ($17/mo annual)", "Go $8/mo; Plus $20/mo"] },
      { label: "Free tier", values: ["Free standard search + limited Pro", "Generous free tier (rate-capped)"] },
      { label: "Best for", values: ["Sourced web & academic research", "Drafting, coding snippets & file analysis"] },
      { label: "Key strength", values: ["Inline citations & corpus filters", "Stronger writing & Python execution"] },
      { label: "Key weakness", values: ["Weaker prose writer; not for private PDFs", "Citations still need manual double-checking"] },
    ],
    faqs: [
      {
        question: "Should I replace Google Search with Perplexity?",
        answer:
          "For multi-source synthesis and quick technical lookups, yes. For local maps, live shopping inventory, or exact URL navigation, traditional search still wins.",
      },
      {
        question: "Which is better for reading my own 100-page PDF?",
        answer:
          "Neither is ideal compared to NotebookLM, which grounds every answer strictly in your uploaded documents.",
      },
      {
        question: "Are both around the same price?",
        answer:
          "Perplexity Pro is $20/mo ($17/mo annual) and ChatGPT Plus is $20/mo, though ChatGPT also offers a cheaper $8/mo Go tier below Plus.",
      },
    ],
  },
  {
    slug: "n8n-vs-zapier",
    title: "n8n vs Zapier",
    tools: ["n8n", "zapier"],
    updatedDate: "2026-11-25",
    intro:
      "Zapier is the massive no-code app catalog. n8n is the builder's automation engine you switch to when Zapier's per-task meter starts to look like rent—especially if you are happy to self-host on a small VPS.",
    verdict:
      "Pick n8n if you want code nodes, inspectable AI agent loops, or predictable self-hosted costs on your own server. Pick Zapier if a non-developer needs to connect popular SaaS tools this afternoon with zero server maintenance.",
    picks: [
      {
        slug: "n8n",
        pick: "Pick n8n if you can self-host or want JS/Python code nodes and execution-based billing.",
      },
      {
        slug: "zapier",
        pick: "Pick Zapier if a non-developer must ship today and needs the widest native SaaS app catalog.",
      },
    ],
    rows: [
      { label: "Format", values: ["Fair-code workflow engine (self-host/cloud)", "Hosted no-code SaaS automation"] },
      { label: "Entry paid price", values: ["Self-host free; Cloud by executions", "Paid plans billed by monthly tasks"] },
      { label: "Free tier", values: ["Free self-hosted Community Edition", "Free tier with basic Zaps & task cap"] },
      { label: "Best for", values: ["Builders comfortable with JSON & webhooks", "Ops & marketing teams connecting SaaS"] },
      { label: "Key strength", values: ["Predictable cost & inspectable AI nodes", "Largest native connector catalog"] },
      { label: "Key weakness", values: ["Smaller one-click catalog; ops on self-host", "Per-task bills escalate fast at volume"] },
    ],
    faqs: [
      {
        question: "How much cheaper is self-hosting n8n?",
        answer:
          "Running n8n on a modest VPS gives you flat server pricing regardless of how many loops your AI workflow executes, avoiding Zapier's per-task escalation.",
      },
      {
        question: "Can non-technical users run n8n?",
        answer:
          "n8n Cloud removes server setup, but building non-trivial flows still rewards basic familiarity with JSON, webhooks, and HTTP requests.",
      },
      {
        question: "Which has better AI agent support?",
        answer:
          "n8n exposes inspectable LLM and tool nodes directly inside the graph; Zapier layers agents cleanly on top of its huge app directory.",
      },
    ],
  },
];

export function getComparison(slug: string) {
  return comparisons.find((item) => item.slug === slug);
}
