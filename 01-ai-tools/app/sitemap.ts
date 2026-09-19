import type { MetadataRoute } from "next";
import { absUrl, allIndexablePaths, lastVerifiedForPath } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return allIndexablePaths().map((path) => {
    const lastModified = lastVerifiedForPath(path);
    return {
      url: absUrl(path),
      lastModified: lastModified ? new Date(lastModified) : new Date(),
      changeFrequency: path.split("/").length > 2 ? "weekly" : "daily",
      priority: path === "/" ? 1 : path.startsWith("/best/") || path.startsWith("/compare/") ? 0.9 : 0.7,
    };
  });
}
