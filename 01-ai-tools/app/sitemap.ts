import type { MetadataRoute } from "next";
import { allIndexablePaths, absUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return allIndexablePaths().map((path) => ({
    url: absUrl(path),
    changeFrequency: path.split("/").length > 2 ? "weekly" : "daily",
    priority: path === "/" ? 1 : 0.7,
  }));
}
