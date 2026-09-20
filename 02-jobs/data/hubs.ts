import type { Hub } from "@/lib/types";

export const hubs: Hub[] = [
  {
    slug: "software-jobs",
    path: "/software-jobs",
    title: "Software jobs",
    headline: "Engineers who build and ship production software across modern stacks",
    intro:
      "Software engineering encompasses backend architecture, frontend user interfaces, fullstack product delivery, and systems infrastructure. This hub indexes technical engineering roles across modern programming languages and distributed platforms. Every listing displayed is verified against active public feeds (Remote OK, Himalayas, and Arbeitnow), verified for recency, and linked directly to the employer's official application form. Listings older than 30 days are purged automatically so you never waste time on ghost openings.",
    keywords: ["software", "developer", "engineer", "full stack", "fullstack", "programmer"],
    kind: "role",
  },
  {
    slug: "frontend-developer-jobs",
    path: "/frontend-developer-jobs",
    title: "Frontend developer jobs",
    headline: "UI engineers: React, Next.js, CSS, and browser performance",
    intro:
      "Frontend engineering requires deep command of modern component architectures, browser rendering pipelines, and accessible user interfaces. We curate openings focusing on React, Next.js, TypeScript, and modern design systems. Every row links directly to the original hiring team's application page. Check requirements for state management, server-side rendering, and responsive performance directly on the origin listing.",
    keywords: ["frontend", "front-end", "front end", "react", "next.js", "ui engineer", "css"],
    kind: "role",
  },
  {
    slug: "backend-developer-jobs",
    path: "/backend-developer-jobs",
    title: "Backend developer jobs",
    headline: "APIs, data stores, and scalable service architectures",
    intro:
      "Backend hiring centers around scalable systems, database design, and asynchronous API communication built with Node.js, Python, Go, and Java. This hub aggregates verified backend openings refreshed from public developer feeds. When hiring companies disclose compensation bands, we display them transparently; when unlisted, we state so honestly rather than guessing.",
    keywords: ["backend", "back-end", "back end", "api", "node", "golang", "java", "python"],
    kind: "role",
  },
  {
    slug: "fullstack-developer-jobs",
    path: "/fullstack-developer-jobs",
    title: "Full stack developer jobs",
    headline: "Engineers covering product UI, application logic, and database persistence",
    intro:
      "Fullstack engineers bridge user-facing interfaces with server-side architecture and data persistence. From early-stage product teams looking for high-velocity builders to established squads running Next.js and Postgres, this desk aggregates versatile fullstack openings. Review the specific tech stack and team structure on the primary application link.",
    keywords: ["full stack", "fullstack", "full-stack"],
    kind: "role",
  },
  {
    slug: "devops-jobs",
    path: "/devops-jobs",
    title: "DevOps and platform jobs",
    headline: "CI/CD pipelines, Kubernetes clusters, and infrastructure reliability",
    intro:
      "DevOps and platform engineering ensure software deploys smoothly and runs reliably at scale. We group SRE, platform, and infrastructure positions requiring Terraform, Kubernetes, Docker, and cloud automation. Every listing is dated and links directly to the employer's official job description.",
    keywords: ["devops", "sre", "site reliability", "platform engineer", "kubernetes", "terraform"],
    kind: "role",
  },
  {
    slug: "data-engineer-jobs",
    path: "/data-engineer-jobs",
    title: "Data engineer jobs",
    headline: "Warehouses, ETL pipelines, and distributed data platform architecture",
    intro:
      "Data engineering is the foundation powering modern analytics and machine learning: building resilient ETL/ELT pipelines, managing distributed data warehouses (Snowflake, BigQuery, ClickHouse), and maintaining data modeling tools like dbt and Apache Spark. This hub isolates verified data platform, infrastructure, and pipeline engineering roles from generic spreadsheet positions.",
    keywords: ["data engineer", "etl", "warehouse", "spark", "dbt"],
    kind: "role",
  },
  {
    slug: "data-scientist-jobs",
    path: "/data-scientist-jobs",
    title: "Data scientist jobs",
    headline: "Statistical modeling, exploratory analysis, and applied machine learning",
    intro:
      "Data science roles focus on transforming complex datasets into actionable business intelligence and predictive models. We track verified openings for data scientists, statisticians, and applied research analysts. Review specific modeling libraries (PyTorch, scikit-learn) and domain requirements on the primary application link.",
    keywords: ["data scientist", "data science", "statistician"],
    kind: "role",
  },
  {
    slug: "machine-learning-jobs",
    path: "/machine-learning-jobs",
    title: "Machine learning jobs",
    headline: "Applied machine learning, neural networks, and production MLOps",
    intro:
      "Machine learning engineers build, fine-tune, and deploy models that operate under real-world latency and cost constraints. This desk tracks verified ML engineering, inference optimization, and MLOps roles. We filter out promotional get-rich AI spam so you only see genuine technical hiring opportunities.",
    keywords: ["machine learning", "ml engineer", "mlops"],
    kind: "role",
  },
  {
    slug: "ai-engineer-jobs",
    path: "/ai-engineer-jobs",
    title: "AI engineer jobs",
    headline: "LLM integration, retrieval systems, evaluation frameworks, and agentic workflows",
    intro:
      "AI engineering bridges generative AI foundation models with production software products: designing retrieval-augmented generation (RAG) pipelines, building prompt evaluation suites, and orchestrating multi-agent systems. This desk curates technical AI application roles from live developer feeds.",
    keywords: ["ai engineer", "llm", "generative", "prompt", "applied ai"],
    kind: "role",
  },
  {
    slug: "cybersecurity-jobs",
    path: "/cybersecurity-jobs",
    title: "Cybersecurity jobs",
    headline: "Application security, penetration testing, threat detection, and cloud defense",
    intro:
      "Cybersecurity protects software infrastructure, user data, and networks from sophisticated adversaries. This desk focuses on verified technical security engineering, AppSec, and incident response roles. We link directly to hiring organizations and exclude promotional training funnels.",
    keywords: ["cyber", "security", "appsec", "infosec", "soc"],
    kind: "role",
  },
  {
    slug: "qa-engineer-jobs",
    path: "/qa-engineer-jobs",
    title: "QA engineer jobs",
    headline: "Test automation, CI verification, and software quality architecture",
    intro:
      "Quality assurance and SDET (Software Development Engineer in Test) professionals design end-to-end automation test suites, integration tests, and performance benchmarks that ensure dependable releases. We track dedicated QA engineering and test automation positions refreshed hourly.",
    keywords: ["qa", "quality assurance", "sdet", "test engineer"],
    kind: "role",
  },
  {
    slug: "mobile-developer-jobs",
    path: "/mobile-developer-jobs",
    title: "Mobile developer jobs",
    headline: "Native iOS, Android, and cross-platform mobile engineering",
    intro:
      "Mobile engineering demands expertise in native operating system lifecycles, memory constraints, and fluid client-side rendering. This hub tracks native Swift/Kotlin positions alongside cross-platform Flutter and React Native openings across global hiring boards.",
    keywords: ["mobile", "ios", "android", "kotlin", "swift", "react native", "flutter"],
    kind: "role",
  },
  {
    slug: "react-developer-jobs",
    path: "/react-developer-jobs",
    title: "React developer jobs",
    headline: "Production React and Next.js web application engineering",
    intro:
      "React remains the dominant frontend library for production web applications, especially paired with Next.js, TypeScript, and modern component frameworks. This desk filters live listings for developers building complex user interfaces, component design systems, and performant web clients.",
    keywords: ["react", "next.js", "nextjs"],
    kind: "role",
  },
  {
    slug: "python-developer-jobs",
    path: "/python-developer-jobs",
    title: "Python developer jobs",
    headline: "Backend services, data infrastructure, and automation with Python",
    intro:
      "Python powers a vast array of modern software, from FastAPI and Django backend APIs to data pipelines and automated workflows. This hub filters live developer postings specifically requiring Python engineering capabilities.",
    keywords: ["python", "django", "fastapi"],
    kind: "role",
  },
  {
    slug: "nodejs-developer-jobs",
    path: "/nodejs-developer-jobs",
    title: "Node.js developer jobs",
    headline: "Asynchronous backend microservices and fullstack JavaScript runtimes",
    intro:
      "Node.js bridges the gap between frontend flexibility and scalable server-side architecture. This hub highlights engineering roles building microservices, real-time event-driven APIs, and high-throughput backend systems using Node, NestJS, and Express.",
    keywords: ["node", "node.js", "nodejs", "nest"],
    kind: "role",
  },
  {
    slug: "typescript-developer-jobs",
    path: "/typescript-developer-jobs",
    title: "TypeScript developer jobs",
    headline: "Type-safe JavaScript for scalable web and backend codebases",
    intro:
      "TypeScript has become the industry standard for robust, maintainable codebases across fullstack, frontend, and serverless architectures. This desk aggregates openings requiring strong typing disciplines, API contracts, and scalable codebase structure.",
    keywords: ["typescript"],
    kind: "role",
  },
  {
    slug: "java-developer-jobs",
    path: "/java-developer-jobs",
    title: "Java developer jobs",
    headline: "Enterprise platforms, high-throughput financial services, and Spring Boot",
    intro:
      "Enterprise backend infrastructure at financial institutions, telecommunications providers, and large distributed systems continues to rely heavily on Java, Spring Boot, and Kotlin. This hub tracks active enterprise service, API, and platform engineering roles.",
    keywords: ["java", "spring", "kotlin"],
    kind: "role",
  },
  {
    slug: "golang-developer-jobs",
    path: "/golang-developer-jobs",
    title: "Go developer jobs",
    headline: "Systems programming, cloud-native services, and high-concurrency tooling",
    intro:
      "Go (Golang) has become the engine of cloud infrastructure, distributed microservices, network tooling, and Kubernetes platforms. This hub surfaces live engineering opportunities prioritizing high concurrency, low latency, and systems-level backend engineering.",
    keywords: ["golang", "go developer", "go engineer"],
    kind: "role",
  },
  {
    slug: "electrical-engineer-jobs",
    path: "/electrical-engineer-jobs",
    title: "Electrical engineer jobs",
    headline: "Hardware, power systems, PCB layout, and embedded electronics engineering",
    intro:
      "Electrical engineering spans circuit design, power systems, microelectronics, and hardware prototyping. This desk aggregates technical hardware, circuit, and electronics engineering roles from public feeds, connecting hardware specialists with industrial and technology employers.",
    keywords: ["electrical", "electronics", "power engineer", "ee "],
    kind: "role",
  },
  {
    slug: "embedded-engineer-jobs",
    path: "/embedded-engineer-jobs",
    title: "Embedded engineer jobs",
    headline: "Firmware, real-time operating systems (RTOS), and hardware interfaces",
    intro:
      "Embedded engineers write the software that brings physical hardware to life: microcontrollers, real-time operating systems (RTOS), Linux kernel drivers, and IoT devices. This desk curates verified firmware and embedded software openings.",
    keywords: ["embedded", "firmware", "rtos", "iot", "microcontroller"],
    kind: "role",
  },
  {
    slug: "cloud-engineer-jobs",
    path: "/cloud-engineer-jobs",
    title: "Cloud engineer jobs",
    headline: "AWS, Azure, and GCP architecture, infrastructure as code, and scaling",
    intro:
      "Cloud engineering focuses on designing, provisioning, and maintaining resilient infrastructure across AWS, Microsoft Azure, and Google Cloud Platform using Infrastructure as Code (Terraform, CloudFormation, Pulumi). This desk isolates cloud architecture and reliability roles.",
    keywords: ["cloud", "aws", "azure", "gcp", "terraform"],
    kind: "role",
  },
  {
    slug: "product-manager-jobs",
    path: "/product-manager-jobs",
    title: "Technical product manager jobs",
    headline: "Technical product strategy, roadmap delivery, and engineering collaboration",
    intro:
      "Technical product managers partner directly with engineering squads to translate complex technical capabilities into intuitive user experiences. We track verified TPM and product roles embedded in engineering and developer tooling organizations.",
    keywords: ["product manager", "product lead", "technical product"],
    kind: "role",
  },
  {
    slug: "web-developer-jobs",
    path: "/web-developer-jobs",
    title: "Web developer jobs",
    headline: "Fullstack web applications, CMS architecture, and digital interfaces",
    intro:
      "Web development covers a versatile spectrum from agency product builds to fullstack CMS development, responsive landing experiences, and e-commerce platforms. This hub aggregates roles requiring strong HTML, CSS, JavaScript, and modern web application frameworks.",
    keywords: ["web developer", "web engineer", "wordpress", "php"],
    kind: "role",
  },
  {
    slug: "internships",
    path: "/internships",
    title: "Software internships",
    headline: "Verified software engineering internships and student opportunities",
    intro:
      "Engineering internships provide foundational industry experience in production codebases. This desk filters live feeds for student, intern, and trainee listings. We encourage applicants to review team requirements and mentorship structures on the primary employer application.",
    keywords: ["intern", "internship", "student", "trainee"],
    kind: "filter",
  },
  {
    slug: "entry-level-jobs",
    path: "/entry-level-jobs",
    title: "Entry-level software jobs",
    headline: "Junior, graduate, and associate engineer positions with growth tracks",
    intro:
      "Breaking into software engineering requires finding teams actively hiring junior, graduate, and associate engineers. This desk filters out senior roles so early-career developers can focus their applications on positions designed for mentorship and rapid technical growth.",
    keywords: ["junior", "entry", "graduate", "associate", "entry-level"],
    kind: "filter",
  },
  {
    slug: "remote-jobs",
    path: "/remote-jobs",
    title: "Remote software jobs",
    headline: "Distributed engineering positions with remote-friendly teams worldwide",
    intro:
      "Distributed software development allows engineers to contribute to global teams from anywhere. This hub aggregates verified remote openings from developer-focused platforms. Note that some employers enforce specific timezone overlap requirements or country payroll restrictions; verify eligibility on the primary apply form.",
    keywords: ["remote", "distributed", "anywhere"],
    kind: "filter",
  },
  {
    slug: "pakistan",
    path: "/locations/pakistan",
    title: "Software jobs open to Pakistan",
    headline: "Engineering opportunities welcoming talent based in Pakistan",
    intro:
      "Pakistan is home to a rapidly expanding ecosystem of software engineers, systems programmers, and remote technical talent. This desk filters global developer feeds and direct employer feeds for listings that welcome Pakistani residents, remote contracts, or local hybrid offices. Review timezone overlap and compensation structures on the original posting.",
    keywords: ["pakistan", "pk", "pakistani"],
    kind: "geo",
  },
  {
    slug: "lahore",
    path: "/locations/lahore",
    title: "Jobs in and around Lahore",
    headline: "Software, product, and engineering opportunities in Lahore",
    intro:
      "Lahore is Pakistan’s historic hub for product development, IT services, and high-growth technology startups in DHA, Gulberg, and Johar Town. This page tracks live listings mentioning Lahore alongside remote teams actively recruiting engineering talent from the provincial capital.",
    keywords: ["lahore"],
    kind: "geo",
  },
  {
    slug: "karachi",
    path: "/locations/karachi",
    title: "Jobs based in Karachi",
    headline: "Fintech, enterprise engineering, and software roles based in Karachi",
    intro:
      "As Pakistan’s financial capital and industrial center, Karachi hosts major fintech hubs, banking institutions, and enterprise engineering offices from Clifton to Shahrah-e-Faisal. This desk isolates openings specifically referencing Karachi or remote contracts open to local engineering talent.",
    keywords: ["karachi"],
    kind: "geo",
  },
  {
    slug: "islamabad",
    path: "/locations/islamabad",
    title: "Jobs in Islamabad & Rawalpindi",
    headline: "Technology, telecom, and software engineering across Islamabad & Rawalpindi",
    intro:
      "The twin cities of Islamabad and Rawalpindi house major telecom headquarters, aerospace and R&D organizations, and modern software development houses around the Blue Area and I-9 sectors. This desk filters active listings for the capital region.",
    keywords: ["islamabad", "rawalpindi", "isb"],
    kind: "geo",
  },
  {
    slug: "dubai",
    path: "/locations/dubai",
    title: "Jobs in Dubai and the UAE",
    headline: "Gulf technology hiring, regional headquarters, and remote UAE contracts",
    intro:
      "Dubai and the broader United Arab Emirates have become premier technology hubs for financial services, logistics, and multinational regional headquarters. This desk tracks verified technology openings open to local residents or international engineers exploring relocation.",
    keywords: ["dubai", "uae", "abu dhabi", "united arab"],
    kind: "geo",
  },
  {
    slug: "saudi",
    path: "/locations/saudi",
    title: "Jobs in Saudi Arabia",
    headline: "Technology transformation and engineering opportunities in Saudi Arabia",
    intro:
      "Major infrastructure projects and digital transformation initiatives across Riyadh and Jeddah are driving significant demand for cloud architects, software engineers, and cybersecurity specialists. We curate verified engineering openings across the Kingdom.",
    keywords: ["saudi", "riyadh", "jeddah", "ksa"],
    kind: "geo",
  },
  {
    slug: "ios-developer-jobs",
    path: "/ios-developer-jobs",
    title: "iOS developer jobs",
    headline: "Native Swift, SwiftUI, and Apple ecosystem application development",
    intro:
      "iOS engineering requires fine-tuned knowledge of Swift, SwiftUI, UIKit, and Apple design guidelines. We aggregate verified native iOS development opportunities, from consumer mobile apps to enterprise mobile products.",
    keywords: ["ios", "swift", "iphone"],
    kind: "role",
  },
  {
    slug: "android-developer-jobs",
    path: "/android-developer-jobs",
    title: "Android developer jobs",
    headline: "Native Kotlin, Jetpack Compose, and modern Android architecture",
    intro:
      "Android development focuses on building responsive, modular mobile applications using modern Kotlin, Jetpack Compose, and asynchronous coroutines. This desk filters live public developer feeds for dedicated Android engineering roles.",
    keywords: ["android", "kotlin"],
    kind: "role",
  },
  {
    slug: "rust-developer-jobs",
    path: "/rust-developer-jobs",
    title: "Rust developer jobs",
    headline: "Memory-safe systems programming, blockchain, and high-performance services",
    intro:
      "Rust has earned a vital place in production software where performance, memory safety, and concurrency control are non-negotiable. This desk filters live listings for Rust specialists building operating system components, cryptographic networks, web assembly runtimes, and high-throughput distributed engines.",
    keywords: ["rust"],
    kind: "role",
  },
  {
    slug: "security-analyst-jobs",
    path: "/security-analyst-jobs",
    title: "Security analyst jobs",
    headline: "Security Operations Center (SOC), SIEM monitoring, and vulnerability analysis",
    intro:
      "Security analysts monitor threat landscapes, investigate security incidents, configure SIEM dashboards, and ensure compliance with security standards. This desk tracks active analyst, SOC, and blue-team security opportunities.",
    keywords: ["security analyst", "soc", "siem", "blue team"],
    kind: "role",
  },
  {
    slug: "engineering-jobs",
    path: "/engineering-jobs",
    title: "Engineering jobs",
    headline: "Comprehensive index of software, data, and hardware engineering disciplines",
    intro:
      "Engineering on Rolepaper covers the full spectrum of modern digital and hardware engineering: software architecture, cloud platforms, machine learning systems, and electrical hardware design. This parent desk provides an overview of all active engineering disciplines on the live board.",
    keywords: ["engineer", "engineering"],
    kind: "role",
  },
  {
    slug: "remote-pakistan",
    path: "/locations/remote-pakistan",
    title: "Remote jobs workable from Pakistan",
    headline: "Distributed international roles with timezone compatibility for Pakistan",
    intro:
      "Navigating international remote work requires understanding regional contract eligibility. This desk filters specifically for distributed roles that accept applicants in South Asian timezones (UTC+5), using platforms like Deel, Remote, or direct cross-border contractor agreements. Confirm country eligibility on the primary employer application page.",
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
