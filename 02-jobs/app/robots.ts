import type { MetadataRoute } from "next";

const aiCrawlers = [
  "Googlebot",
  "Google-Extended",
  "Bingbot",
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "anthropic-ai",
  "PerplexityBot",
  "Applebot",
  "Applebot-Extended",
  "CCBot",
  "meta-externalagent",
  "Amazonbot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: "https://rolepaper.toolfolio.page/sitemap.xml",
    host: "https://rolepaper.toolfolio.page",
  };
}
