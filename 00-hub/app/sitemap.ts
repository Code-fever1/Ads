import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/privacy", "/disclosure"].map((route) => ({
    url: `https://toolfolio.page${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return [...routes];
}
