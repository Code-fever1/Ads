import type { Job, JobSource } from "@/lib/types";
export { matchesHub } from "@/lib/match";

const UA = "Rolepaper/1.0 (job aggregator; https://rolepaper.toolfolio.page)";
const MAX_AGE_MS = 1000 * 60 * 60 * 24 * 30;

const TECH =
  /\b(software|developer|engineer|devops|frontend|front-end|backend|back-end|full[\s-]?stack|sre|python|javascript|typescript|react|node\.?js|golang|rust|java\b|kotlin|swift|ios|android|mobile|data scientist|data engineer|machine learning|ml engineer|ai engineer|cyber|security|electrical|embedded|firmware|cloud|aws|azure|gcp|qa engineer|quality assurance|site reliability|web developer|php|ruby|scala|kubernetes|platform engineer)\b/i;

function sourceMeta(source: JobSource) {
  if (source === "remoteok") {
    return { sourceLabel: "Remote OK", sourceHome: "https://remoteok.com" };
  }
  if (source === "himalayas") {
    return { sourceLabel: "Himalayas", sourceHome: "https://himalayas.app" };
  }
  return { sourceLabel: "Arbeitnow", sourceHome: "https://www.arbeitnow.com" };
}

function makeId(source: JobSource, raw: string) {
  const cleaned = raw.replace(/https?:\/\//g, "").replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-|-$/g, "");
  return `${source}-${cleaned.slice(0, 96)}`.toLowerCase();
}

function isoFromEpoch(value: number | string | undefined) {
  if (!value) return new Date().toISOString();
  if (typeof value === "string" && value.includes("T")) return new Date(value).toISOString();
  const n = Number(value);
  if (!Number.isFinite(n)) return new Date().toISOString();
  const ms = n > 10_000_000_000 ? n : n * 1000;
  return new Date(ms).toISOString();
}

function stripHtml(html: string) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function salaryText(min?: number | null, max?: number | null, currency = "USD") {
  if (!min && !max) return "Not listed";
  const fmt = (n: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(n);
  if (min && max) return `${fmt(min)} – ${fmt(max)}`;
  return fmt((min || max) as number);
}

function stillLive(postedAt: string, expiresAt: string | null) {
  const posted = new Date(postedAt).getTime();
  if (Number.isFinite(posted) && Date.now() - posted > MAX_AGE_MS) return false;
  if (expiresAt && new Date(expiresAt).getTime() < Date.now()) return false;
  return true;
}

async function getJson(url: string) {
  const response = await fetch(url, {
    headers: { "User-Agent": UA, Accept: "application/json" },
    next: { revalidate: 300 },
  });
  if (!response.ok) {
    throw new Error(`${url} failed ${response.status}`);
  }
  return response.json();
}

function isTechJob(title: string, tags: string[]) {
  if (TECH.test(title)) return true;
  const strongTags = tags.filter(
    (tag) =>
      TECH.test(tag) &&
      !/^(developer|engineer|engineering|operations|technical)$/i.test(tag.trim()),
  );
  return strongTags.length >= 2;
}

async function fromRemoteOK(): Promise<Job[]> {
  const payload = (await getJson("https://remoteok.com/api")) as Record<string, unknown>[];
  return payload
    .filter((row) => row.position && !row.legal)
    .map((row) => {
      const title = String(row.position);
      const tags = Array.isArray(row.tags) ? row.tags.map(String) : [];
      const postedAt = isoFromEpoch(row.date ? String(row.date) : Number(row.epoch));
      const meta = sourceMeta("remoteok");
      const job: Job = {
        id: makeId("remoteok", String(row.id ?? title)),
        title,
        company: String(row.company ?? "Unknown"),
        location: String(row.location || "Remote"),
        remote: true,
        employmentType: "Full-time",
        salary: salaryText(Number(row.salary_min) || null, Number(row.salary_max) || null),
        excerpt: stripHtml(String(row.description ?? "")).slice(0, 280),
        description: stripHtml(String(row.description ?? "")).slice(0, 4000),
        applyUrl: String(row.url ?? row.apply_url ?? meta.sourceHome),
        source: "remoteok",
        ...meta,
        postedAt,
        expiresAt: null,
        tags,
        seniority: tags.includes("senior") ? "Senior" : tags.includes("junior") ? "Junior" : "Unspecified",
      };
      return job;
    })
    .filter((job) => isTechJob(job.title, job.tags) && stillLive(job.postedAt, job.expiresAt));
}

async function fromHimalayas(): Promise<Job[]> {
  const jobs: Job[] = [];
  let cursor = "";
  for (let page = 0; page < 8; page += 1) {
    const url = new URL("https://himalayas.app/jobs/api");
    url.searchParams.set("limit", "20");
    if (cursor) url.searchParams.set("nextCursor", cursor);
    const payload = (await getJson(url.toString())) as {
      nextCursor?: string;
      jobs?: Record<string, unknown>[];
    };
    for (const row of payload.jobs ?? []) {
      const title = String(row.title ?? "");
      const tags = [
        ...(Array.isArray(row.categories) ? row.categories.map(String) : []),
        ...(Array.isArray(row.parentCategories) ? row.parentCategories.map(String) : []),
      ];
      if (!isTechJob(title, tags)) continue;
      const postedAt = isoFromEpoch(Number(row.pubDate));
      const expiresAt = row.expiryDate ? isoFromEpoch(Number(row.expiryDate)) : null;
      if (!stillLive(postedAt, expiresAt)) continue;
      const location = Array.isArray(row.locationRestrictions)
        ? row.locationRestrictions.map(String).join(", ") || "Remote"
        : "Remote";
      const excerpt = stripHtml(String(row.excerpt ?? row.description ?? "")).slice(0, 280);
      jobs.push({
        id: makeId("himalayas", String(row.guid ?? title)),
        title,
        company: String(row.companyName ?? "Unknown"),
        location,
        remote: true,
        employmentType: String(row.employmentType ?? "Full-time"),
        salary: salaryText(
          (row.minSalary as number) || null,
          (row.maxSalary as number) || null,
          String(row.currency ?? "USD"),
        ),
        excerpt,
        description: stripHtml(String(row.description ?? row.excerpt ?? "")).slice(0, 4000),
        applyUrl: String(row.applicationLink ?? row.guid ?? ""),
        source: "himalayas",
        ...sourceMeta("himalayas"),
        postedAt,
        expiresAt,
        tags,
        seniority: Array.isArray(row.seniority) ? row.seniority.map(String).join(", ") : "Unspecified",
      });
    }
    cursor = payload.nextCursor ?? "";
    if (!cursor) break;
  }
  return jobs;
}

async function fromArbeitnow(): Promise<Job[]> {
  const payload = (await getJson("https://www.arbeitnow.com/api/job-board-api?page=1")) as {
    data?: Record<string, unknown>[];
  };
  return (payload.data ?? [])
    .map((row) => {
      const title = String(row.title ?? "");
      const tags = Array.isArray(row.tags) ? row.tags.map(String) : [];
      const types = Array.isArray(row.job_types) ? row.job_types.map(String) : [];
      const postedAt = isoFromEpoch(Number(row.created_at));
      const job: Job = {
        id: makeId("arbeitnow", String(row.slug ?? title)),
        title,
        company: String(row.company_name ?? "Unknown"),
        location: String(row.location ?? ""),
        remote: Boolean(row.remote),
        employmentType: types.join(", ") || "Unspecified",
        salary: "Not listed",
        excerpt: stripHtml(String(row.description ?? "")).slice(0, 280),
        description: stripHtml(String(row.description ?? "")).slice(0, 4000),
        applyUrl: String(row.url ?? ""),
        source: "arbeitnow",
        ...sourceMeta("arbeitnow"),
        postedAt,
        expiresAt: null,
        tags: [...tags, ...types],
        seniority: types.find((item) => /entry|intern|senior|experienced/i.test(item)) ?? "Unspecified",
      };
      return job;
    })
    .filter((job) => isTechJob(job.title, job.tags) && stillLive(job.postedAt, job.expiresAt));
}

function dedupe(jobs: Job[]) {
  const seen = new Set<string>();
  const out: Job[] = [];
  for (const job of jobs) {
    const key = `${job.title.toLowerCase()}|${job.company.toLowerCase()}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(job);
  }
  return out;
}

async function loadLiveJobs(limit = 100): Promise<Job[]> {
  const settled = await Promise.allSettled([fromRemoteOK(), fromHimalayas()]);
  const merged: Job[] = [];
  for (const result of settled) {
    if (result.status === "fulfilled") merged.push(...result.value);
  }
  if (merged.length < limit) {
    try {
      merged.push(...(await fromArbeitnow()));
    } catch {
      // Arbeitnow payloads are large and optional.
    }
  }
  return dedupe(merged)
    .sort((a, b) => +new Date(b.postedAt) - +new Date(a.postedAt))
    .slice(0, limit);
}

let memo: { at: number; jobs: Job[] } | null = null;

export async function fetchLiveJobs(limit = 100): Promise<Job[]> {
  if (memo && Date.now() - memo.at < 300_000) {
    return memo.jobs.slice(0, limit);
  }
  const jobs = await loadLiveJobs(100);
  memo = { at: Date.now(), jobs };
  return jobs.slice(0, limit);
}

export async function fetchJobById(id: string) {
  const jobs = await fetchLiveJobs(100);
  return jobs.find((job) => job.id === id) ?? null;
}
