import type { MetadataRoute } from "next";
import { careerPages } from "@/data/career";
import { hubs } from "@/data/hubs";
import { fetchLiveJobs } from "@/lib/jobs";
import { absUrl } from "@/lib/site";

export const revalidate = 300;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const jobs = await fetchLiveJobs(100);
  const staticPaths = [
    "/",
    "/jobs",
    "/career",
    "/sources",
    ...hubs.map((hub) => hub.path),
    ...careerPages.map((page) => `/career/${page.slug}`),
  ];

  return [
    ...staticPaths.map((path) => ({
      url: absUrl(path),
      lastModified: new Date(),
      changeFrequency: (path === "/jobs" || path === "/" ? "hourly" : "weekly") as "hourly" | "weekly",
      priority: path === "/" || path === "/jobs" ? 1 : 0.7,
    })),
    ...jobs.map((job) => ({
      url: absUrl(`/job/${job.id}`),
      lastModified: new Date(job.postedAt),
      changeFrequency: "hourly" as const,
      priority: 0.6,
    })),
  ];
}
