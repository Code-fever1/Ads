import type { MetadataRoute } from "next";
import { absUrl, allIndexablePaths, lastVerifiedForPath } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date();
  return allIndexablePaths().map((path) => {
    const lastModified = lastVerifiedForPath(path);
    return {
      url: absUrl(path),
      lastModified: lastModified ? new Date(`${lastModified}T00:00:00Z`) : buildDate,
      changeFrequency: path.split("/").length > 2 ? "weekly" : "daily",
      priority:
        path === "/"
          ? 1
          : path.startsWith("/best/") || path.startsWith("/compare/")
            ? 0.9
            : 0.7,
    };
  });
}
