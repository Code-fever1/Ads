import type { Job } from "@/lib/types";

export function matchesHub(job: Job, keywords: string[]) {
  const blob = `${job.title} ${job.company} ${job.location} ${job.tags.join(" ")} ${job.excerpt}`.toLowerCase();
  return keywords.some((keyword) => blob.includes(keyword.toLowerCase()));
}
