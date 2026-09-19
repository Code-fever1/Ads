import type { MetadataRoute } from "next";
import { careerPages } from "@/data/career";
import { hubs } from "@/data/hubs";
import { absUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/jobs",
    "/career",
    "/sources",
    ...hubs.map((hub) => hub.path),
    ...careerPages.map((page) => `/career/${page.slug}`),
  ];
  return paths.map((path) => ({
    url: absUrl(path),
    changeFrequency: path === "/jobs" ? "hourly" : "weekly",
    priority: path === "/" || path === "/jobs" ? 1 : 0.7,
  }));
}
