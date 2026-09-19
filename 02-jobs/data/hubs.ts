import type { Hub } from "@/lib/types";

export const hubs: Hub[] = [
  {
    slug: "software-jobs",
    path: "/software-jobs",
    title: "Software jobs",
    headline: "The core desk: engineers who ship software, not a generic jobs homepage",
    intro:
      "Bare searches for “jobs” or “job search” belong to Indeed, LinkedIn, Glassdoor, and Google for Jobs. Rolepaper does not pretend to win those heads in Phase 1. This hub is for software engineering titles: backend, frontend, fullstack, platform, and the adjacent roles that still write code. Every row on the live table is a third-party posting with an employer name, a date, and an apply URL that leaves this site. We filter public feeds (Remote OK, Himalayas, Arbeitnow) for software language, drop listings older than 30 days, and refuse brand-keyword doorway pages. If you are looking for electrician gigs near a postcode, you are on the wrong domain. If you are looking for a software seat, start here, then open a role page for a tighter query.",
    keywords: ["software", "developer", "engineer", "full stack", "fullstack", "programmer"],
    kind: "role",
  },
  {
    slug: "frontend-developer-jobs",
    path: "/frontend-developer-jobs",
    title: "Frontend developer jobs",
    headline: "UI engineers: React, Next.js, CSS, and the browser as the workplace",
    intro:
      "Frontend roles are easy to fake in a scrape (every company wants a “React ninja”) and easy to date if you only copy a board. This page keeps unique copy: we care about people who own the interface, accessibility, and the performance of a real site. Live listings come from public APIs and are matched when the title or tags mention frontend, React, Next.js, UI, or CSS. We do not host take-home tests and we do not run your application. Apply on the employer’s page. If a posting has no date, it does not survive our 30-day expiry rule.",
    keywords: ["frontend", "front-end", "front end", "react", "next.js", "ui engineer", "css"],
    kind: "role",
  },
  {
    slug: "backend-developer-jobs",
    path: "/backend-developer-jobs",
    title: "Backend developer jobs",
    headline: "APIs, data stores, and the unglamorous work that keeps the UI honest",
    intro:
      "Backend hiring still clusters around Node, Python, Go, Java, and the cloud next to them. This hub is not a language fan club. It is a filter on live third-party posts so you can see what is actually open this week. Salary is shown when the source publishes one; Remote OK sometimes does, Himalayas sometimes does, Arbeitnow often does not. Missing salary is not “competitive.” It is missing. We will not invent a number for schema.",
    keywords: ["backend", "back-end", "back end", "api", "node", "golang", "java", "python"],
    kind: "role",
  },
  {
    slug: "fullstack-developer-jobs",
    path: "/fullstack-developer-jobs",
    title: "Full stack developer jobs",
    headline: "One human covering UI and API, usually in a small team",
    intro:
      "Full stack is a budget decision as much as a skill set. Startups use the title when they want one person to ship. Enterprises use it when they want a generalist on a squad. The live table will mix both. Read the apply page before you spend an evening on a take-home. Rolepaper only mirrors title, company, location, and a short excerpt. The employer owns the process.",
    keywords: ["full stack", "fullstack", "full-stack"],
    kind: "role",
  },
  {
    slug: "devops-jobs",
    path: "/devops-jobs",
    title: "DevOps and platform jobs",
    headline: "Pipelines, Kubernetes, and the on-call nobody puts in the tweet",
    intro:
      "DevOps, SRE, and platform engineering overlap in job ads until they do not: one posting wants Terraform, another wants you to babysit a Jenkins box. We group them because candidates search that way. Live rows must mention devops, SRE, platform, kubernetes, or similar. This is not a course seller. Career notes on certifications live under /career, not as a doorway to every city.",
    keywords: ["devops", "sre", "site reliability", "platform engineer", "kubernetes", "terraform"],
    kind: "role",
  },
  {
    slug: "data-engineer-jobs",
    path: "/data-engineer-jobs",
    title: "Data engineer jobs",
    headline: "Warehouses, pipelines, and the difference between analytics and ML ops",
    intro:
      "Data engineer is a mid-funnel keyword with real volume and less mega-board lock-in than “data scientist.” We keep this hub separate so the intro can talk about pipelines, not model papers. Listings are matched on data engineer, ETL, warehouse, and similar tags from the public feeds. If a company is hiring “data” and means a spreadsheet intern, the title usually gives it away. Read the excerpt.",
    keywords: ["data engineer", "etl", "warehouse", "spark", "dbt"],
    kind: "role",
  },
  {
    slug: "data-scientist-jobs",
    path: "/data-scientist-jobs",
    title: "Data scientist jobs",
    headline: "Analysis roles that still get posted, even after every company bought a chatbot",
    intro:
      "The title inflated, then deflated. What remains on boards is a mix of analyst, experiment designer, and applied stats. We do not promise a research lab. We show what the feeds currently label as data scientist or adjacent science roles. Salary bands, when present, are the source’s numbers, not our guess at a Pakistan vs US split. For compensation essays, use /career/salaries.",
    keywords: ["data scientist", "data science", "statistician"],
    kind: "role",
  },
  {
    slug: "machine-learning-jobs",
    path: "/machine-learning-jobs",
    title: "Machine learning jobs",
    headline: "Applied ML and ML ops, not a ranking of “prompt engineer” novelty titles",
    intro:
      "Machine learning engineer and ML ops stay in demand even when the Twitter title of the month changes. This hub matches machine learning, ML engineer, and related tags. We skip get-rich AI guru ads if they leak into a feed. Rolepaper is not an employer and not a bootcamp. Apply outbound. If you want tools rather than jobs, that is a different domain in this portfolio (Kiln).",
    keywords: ["machine learning", "ml engineer", "mlops"],
    kind: "role",
  },
  {
    slug: "ai-engineer-jobs",
    path: "/ai-engineer-jobs",
    title: "AI engineer jobs",
    headline: "LLM application work: retrieval, evals, and product features, not mysticism",
    intro:
      "AI engineer is a messy 2025–2026 title that sometimes means “Python plus an API key.” The better postings mention evaluation, retrieval, or production constraints. Our filter is the words in the live feeds, not a vibe. We will not write medical or trading advice into this hub. If a listing wants you to ship a chatbot, the apply URL is on the employer site.",
    keywords: ["ai engineer", "llm", "generative", "prompt", "applied ai"],
    kind: "role",
  },
  {
    slug: "cybersecurity-jobs",
    path: "/cybersecurity-jobs",
    title: "Cybersecurity jobs",
    headline: "Security engineering and analysis, not scare-banner training funnels",
    intro:
      "Security hiring is real and the CPC on ads is high, which is why the internet is full of fake cert mills. This page is only live third-party roles that mention security, cyber, AppSec, or similar. We are not selling a course. Career notes on certifications are editorial, not a product. Expired listings leave the table automatically.",
    keywords: ["cyber", "security", "appsec", "infosec", "soc"],
    kind: "role",
  },
  {
    slug: "qa-engineer-jobs",
    path: "/qa-engineer-jobs",
    title: "QA engineer jobs",
    headline: "Test engineering, automation, and the unfashionable work that ships quality",
    intro:
      "QA and SDET roles are under-served by “software engineer” mega-pages. We keep a dedicated hub so the copy can talk about automation, flaky tests, and product risk instead of repeating the software intro. Matches include QA, quality assurance, SDET, and test engineer. Apply off-site. We do not collect CVs.",
    keywords: ["qa", "quality assurance", "sdet", "test engineer"],
    kind: "role",
  },
  {
    slug: "mobile-developer-jobs",
    path: "/mobile-developer-jobs",
    title: "Mobile developer jobs",
    headline: "iOS, Android, and cross-platform seats that are not a React web role in disguise",
    intro:
      "Mobile listings shrink in some markets and hold in others. This hub exists so a React Native posting does not get lost inside frontend web. Keywords: iOS, Android, mobile, Kotlin, Swift, React Native, Flutter. If the live feed is thin on a given day, that is information, not a bug. We will not pad with expired rows to look busy.",
    keywords: ["mobile", "ios", "android", "kotlin", "swift", "react native", "flutter"],
    kind: "role",
  },
  {
    slug: "react-developer-jobs",
    path: "/react-developer-jobs",
    title: "React developer jobs",
    headline: "A library-specific slice of frontend, because that is how people search",
    intro:
      "React is a navigational-adjacent skill keyword: high volume, lots of duplicate listicles. Our version is a live filter plus this paragraph of unique context. We are not the React team. We are not Meta. Listings mention React or Next.js in title or tags. Pair with the frontend hub if you also write CSS for a living.",
    keywords: ["react", "next.js", "nextjs"],
    kind: "role",
  },
  {
    slug: "python-developer-jobs",
    path: "/python-developer-jobs",
    title: "Python developer jobs",
    headline: "Backend, data, and automation roles that still say Python in the title",
    intro:
      "Python is how a lot of data and backend work is still hired. This hub is not a tutorial. It is a dated feed of third-party posts. Expect overlap with data engineer and ML pages. That overlap is honest. We would rather you see the same company twice than invent extra jobs.",
    keywords: ["python", "django", "fastapi"],
    kind: "role",
  },
  {
    slug: "nodejs-developer-jobs",
    path: "/nodejs-developer-jobs",
    title: "Node.js developer jobs",
    headline: "JavaScript on the server, often next to a React hiring manager",
    intro:
      "Node listings sit at the junction of fullstack and backend. The unique copy on this page is here so Google does not see a clone of the backend hub. Live matches: node, node.js, nest, express. Salary display follows the source. If Remote OK lists a band, we show it. If Arbeitnow does not, we say not listed.",
    keywords: ["node", "node.js", "nodejs", "nest"],
    kind: "role",
  },
  {
    slug: "typescript-developer-jobs",
    path: "/typescript-developer-jobs",
    title: "TypeScript developer jobs",
    headline: "Typed JavaScript as a hiring signal, not a personality",
    intro:
      "TypeScript in a title usually means a serious frontend or Node codebase. It is a good Phase 1 page because it is specific without being a brand. We match typescript and ts-heavy tags. Internships that mention TypeScript also belong on the entry-level hub.",
    keywords: ["typescript"],
    kind: "role",
  },
  {
    slug: "java-developer-jobs",
    path: "/java-developer-jobs",
    title: "Java developer jobs",
    headline: "Enterprise backend that did not disappear when Node became fashionable",
    intro:
      "Java hiring is still a volume business in banks, telcos, and government-adjacent vendors. Our public feeds skew remote and European/US, so this hub may be thinner than a local Pakistani newspaper ad section. That is a source limit, not a reason to scrape a blocked board. Option 2 later is company ATS feeds on a VPS.",
    keywords: ["java", "spring", "kotlin"],
    kind: "role",
  },
  {
    slug: "golang-developer-jobs",
    path: "/golang-developer-jobs",
    title: "Go developer jobs",
    headline: "Infrastructure-flavored backend roles",
    intro:
      "Go shows up in cloud, observability, and performance-sensitive services. The live table is a keyword filter on title and tags. We do not have a secret Go-only API. If today is a slow Go day, the page still has this intro so it is not a thin doorway.",
    keywords: ["golang", "go developer", "go engineer"],
    kind: "role",
  },
  {
    slug: "electrical-engineer-jobs",
    path: "/electrical-engineer-jobs",
    title: "Electrical engineer jobs",
    headline: "A supporting pillar: real, mid-tier search demand, not “electrician near me”",
    intro:
      "Electrical engineer is worth a dedicated hub. It is not among the most searched job phrases on earth, and it is not a local services play. We explicitly avoid electrician-near-me intent, which is a different business (home services, Google Maps, ads for call-now). This page is for EE titles, power, electronics, and related engineering posts that appear in the same public feeds. Coverage will be thinner than software. We would rather a short honest table than a scraped pile of stale university circulars. Embedded and firmware sit next door.",
    keywords: ["electrical", "electronics", "power engineer", "ee "],
    kind: "role",
  },
  {
    slug: "embedded-engineer-jobs",
    path: "/embedded-engineer-jobs",
    title: "Embedded engineer jobs",
    headline: "Firmware, RTOS, and hardware-adjacent software",
    intro:
      "Embedded roles connect the software desk to the electrical pillar. Titles mention firmware, embedded, RTOS, IoT, or microcontrollers. Himalayas in particular carries Linux and device posts. We keep unique intro copy so this is not a clone of electrical or C++ listicles. Apply outbound. We do not broker hardware interviews.",
    keywords: ["embedded", "firmware", "rtos", "iot", "microcontroller"],
    kind: "role",
  },
  {
    slug: "cloud-engineer-jobs",
    path: "/cloud-engineer-jobs",
    title: "Cloud engineer jobs",
    headline: "AWS, Azure, GCP, and the certifications that hiring managers copy-paste",
    intro:
      "Cloud engineer overlaps DevOps. We still give it a URL because people type it. The intro’s job is to say: a cert is not a job, and this table is not AWS’s career site. Matches include cloud, AWS, Azure, GCP. Career notes on certifications live separately so listing pages stay cleaner for users and for ads policy.",
    keywords: ["cloud", "aws", "azure", "gcp", "terraform"],
    kind: "role",
  },
  {
    slug: "product-manager-jobs",
    path: "/product-manager-jobs",
    title: "Technical product manager jobs",
    headline: "PM roles that sit next to engineering, not brand management",
    intro:
      "We only keep PM listings when the feeds tag them next to software or technical product. This is not a general MBA board. If you want to manage a soap brand, look elsewhere. Remote OK in particular mixes product titles into the tech firehose. We filter, date, and link out.",
    keywords: ["product manager", "product lead", "technical product"],
    kind: "role",
  },
  {
    slug: "web-developer-jobs",
    path: "/web-developer-jobs",
    title: "Web developer jobs",
    headline: "A broader net than frontend: agencies, WordPress-adjacent, and app teams",
    intro:
      "Web developer is a slightly older search phrase that still converts. We use it as a wide filter (web, html, cms, frontend) with unique copy so it is not a duplicate of React. Agency work and product work will sit together. Read the company name. Rolepaper does not rank employers.",
    keywords: ["web developer", "web engineer", "wordpress", "php"],
    kind: "role",
  },
  {
    slug: "internships",
    path: "/internships",
    title: "Software internships",
    headline: "Intern and student roles from the same ethical feeds, not unpaid mystery gigs",
    intro:
      "Internship searches are high intent and full of junk. We only show rows the upstream APIs mark as intern, student, or similar, plus titles that say intern. We cannot verify that a company pays. The apply page must say so. Pakistan-based internships may be rare in these global feeds; that is a coverage gap we can close later with Option 2 ATS polling, not with a LinkedIn scrape.",
    keywords: ["intern", "internship", "student", "trainee"],
    kind: "filter",
  },
  {
    slug: "entry-level-jobs",
    path: "/entry-level-jobs",
    title: "Entry-level software jobs",
    headline: "Junior titles without pretending every intern posting is a career",
    intro:
      "Entry-level is where mega-boards drown you. Our version is a filter: junior, entry, graduate, associate engineer. Unique copy: we tell you the global remote feeds are biased toward mid-level. If the table is short, believe it. Padding with expired posts would be the thin-scrape pattern this site is built to avoid.",
    keywords: ["junior", "entry", "graduate", "associate", "entry-level"],
    kind: "filter",
  },
  {
    slug: "remote-jobs",
    path: "/remote-jobs",
    title: "Remote software jobs",
    headline: "Remote as a filter, not a war with Indeed for the word “remote jobs”",
    intro:
      "“Remote jobs” as a head term is dominated by giants. We still offer the page because it is a useful filter on our tech-only firehose. Remote OK is remote by definition. Himalayas is a remote-leaning board. Arbeitnow has a remote flag that we honor from the field, not from a query parameter that the API may ignore. Timezone limits, when the source sends them, appear in the excerpt when present. We are not a visa lawyer.",
    keywords: ["remote", "distributed", "anywhere"],
    kind: "filter",
  },
  {
    slug: "pakistan",
    path: "/locations/pakistan",
    title: "Software jobs mentioning Pakistan",
    headline: "A geo page with unique copy, not a doorway clone of Karachi and Lahore",
    intro:
      "Pakistan is a real talent market and a weak showing in US-centric remote APIs. This page filters the live feed for Pakistan, PK, or Pakistani timezone language. If few rows appear, that is the feed, not a hidden pile of jobs we refused to scrape from Facebook groups. Later, Option 2 can add local employer ATS links. Unique value today: the filter plus this explanation, plus career pages that actually help a candidate in Lahore write a CV.",
    keywords: ["pakistan", "pk", "pakistani"],
    kind: "geo",
  },
  {
    slug: "lahore",
    path: "/locations/lahore",
    title: "Jobs mentioning Lahore",
    headline: "City page with its own paragraph so it is not a spun clone of Karachi",
    intro:
      "Lahore’s software scene is agencies, product startups, and people working remote mornings for US standups. A mega-board city doorway would repeat the same 80 words with the city name swapped. This intro does not. We filter the live feed for Lahore. Expect sparsity. The page still exists as a legitimate geo entry and a place to say: hybrid offices in DHA or Gulberg will not show up until employers publish on the sources we are allowed to use.",
    keywords: ["lahore"],
    kind: "geo",
  },
  {
    slug: "karachi",
    path: "/locations/karachi",
    title: "Jobs mentioning Karachi",
    headline: "Port city, large private sector, same ethical feed limits",
    intro:
      "Karachi is not Lahore with the letters changed. It is a bigger corporate market, different commute, different employer mix. The live filter still depends on whether a global API mentioned the city. We will not fabricate listings from old newspaper ads. If you are searching from a kitchen table in Karachi at 7am, the remote software table may be more useful today than this geo slice. Both stay in the IA.",
    keywords: ["karachi"],
    kind: "geo",
  },
  {
    slug: "islamabad",
    path: "/locations/islamabad",
    title: "Jobs mentioning Islamabad and Rawalpindi",
    headline: "Twin cities, public sector adjacent, still not a scrape of every .edu.pk circular",
    intro:
      "Islamabad and Rawalpindi hiring includes public-sector adjacent vendors and a quieter product scene. We match Islamabad, Rawalpindi, and ISB. Thin results are acceptable. Doorway pages that exist only to capture “jobs in [city]” with no unique sentence are exactly what we are not building.",
    keywords: ["islamabad", "rawalpindi", "isb"],
    kind: "geo",
  },
  {
    slug: "dubai",
    path: "/locations/dubai",
    title: "Jobs mentioning Dubai and the UAE",
    headline: "Gulf tech hiring as a geo slice, not visa advice",
    intro:
      "Dubai and the wider UAE appear in remote-friendly and on-site tech ads. We filter for Dubai, UAE, Abu Dhabi. We do not advise on visas, Emirates ID, or tax. Career essays stay general. If a posting requires relocation, that will be on the employer’s apply page, which is the only apply path we offer.",
    keywords: ["dubai", "uae", "abu dhabi", "united arab"],
    kind: "geo",
  },
  {
    slug: "saudi",
    path: "/locations/saudi",
    title: "Jobs mentioning Saudi Arabia",
    headline: "Vision-era tech hiring in the feed, without pretending we are a KSA recruiter",
    intro:
      "Saudi listings show up when global boards mention Riyadh, Jeddah, or Saudi Arabia. Coverage is opportunistic. We will not scrape local classifieds. Unique copy on this page exists so the URL is a real geo hub: cultural and relocation details are the employer’s to explain. Rolepaper is a mirror with dates.",
    keywords: ["saudi", "riyadh", "jeddah", "ksa"],
    kind: "geo",
  },
  {
    slug: "ios-developer-jobs",
    path: "/ios-developer-jobs",
    title: "iOS developer jobs",
    headline: "Swift and Apple-platform seats",
    intro:
      "iOS is a narrower, still-valuable search. We match iOS and Swift. If the table is empty, the feeds did not have a live iOS post in the last 30 days. That emptiness is better than a two-year-old scrape.",
    keywords: ["ios", "swift", "iphone"],
    kind: "role",
  },
  {
    slug: "android-developer-jobs",
    path: "/android-developer-jobs",
    title: "Android developer jobs",
    headline: "Kotlin and Android-platform seats",
    intro:
      "Android hiring follows product cycles more than Twitter cycles. Keywords: Android, Kotlin. Same expiry rules as every other hub. Same outbound apply. Same refusal to scrape Google’s own jobs UI.",
    keywords: ["android", "kotlin"],
    kind: "role",
  },
  {
    slug: "rust-developer-jobs",
    path: "/rust-developer-jobs",
    title: "Rust developer jobs",
    headline: "A small, sharp keyword worth a page if the copy is unique",
    intro:
      "Rust roles are rare and well paid when they exist. A thin scraper would still generate the URL. We generate the URL because the intro is unique and the filter is honest. Empty states will happen. That is fine.",
    keywords: ["rust"],
    kind: "role",
  },
  {
    slug: "security-analyst-jobs",
    path: "/security-analyst-jobs",
    title: "Security analyst jobs",
    headline: "SOC and analysis titles, sibling to cybersecurity engineering",
    intro:
      "Analyst vs engineer is a real split in security hiring. This hub catches analyst, SOC, and SIEM language so it does not vanish inside the broader cyber page. Training-up-sells that look like jobs should not survive our tech regex, but we still will not list cert mills as employers.",
    keywords: ["security analyst", "soc", "siem", "blue team"],
    kind: "role",
  },
  {
    slug: "engineering-jobs",
    path: "/engineering-jobs",
    title: "Engineering jobs",
    headline: "The parent desk for software plus electrical, not a kitchen-sink mega site",
    intro:
      "Engineering on Rolepaper means software engineering and electrical/embedded engineering. It does not mean civil site-supervisor spam, and it does not mean every trade in a city. This parent hub exists so the IA matches the brief: software as core, electrical as supporting pillar. The live table is a wide tech filter. Drill into a role page when you know the title you want.",
    keywords: ["engineer", "engineering"],
    kind: "role",
  },
  {
    slug: "remote-pakistan",
    path: "/locations/remote-pakistan",
    title: "Remote jobs workable from Pakistan",
    headline: "Timezone and geo hints, not a promise that every remote US job will hire you",
    intro:
      "Many remote posts are worldwide in theory and US-only in the apply form. This hub filters for Pakistan plus remote language, and we say the quiet part: the employer’s restrictions win. We cannot see every Greenhouse hidden field from a public API. Click through. Do not pay a broker who promises a US salary for a form we did not submit.",
    keywords: ["pakistan", "remote", "worldwide", "anywhere"],
    kind: "geo",
  },
];

export function hubByPath(path: string) {
  return hubs.find((hub) => hub.path === path);
}

export function hubBySlug(slug: string) {
  return hubs.find((hub) => hub.slug === slug);
}
