import { comparisons } from "@/data/comparisons";
import { categories } from "@/data/categories";
import { guides } from "@/data/guides";
import { rankings } from "@/data/rankings";
import { tools } from "@/data/tools";

/**
 * Single-source deployment configuration & placeholder constants.
 * Update via environment variables in Vercel or edit the fallback constants below.
 */
export const GA4_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID ?? "";
export const GOOGLE_SITE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "";
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "hello@toolfolio.page";
export const NEWSLETTER_URL = process.env.NEXT_PUBLIC_NEWSLETTER_URL ?? "";

export const site = {
  name: "Kiln",
  domain: "kiln.toolfolio.page",
  tagline: "AI tools, fired and dated.",
  description:
    "Kiln is an independent AI tools directory: hand-verified prices, skip-if notes, and honest comparisons. We are not the vendor.",
};

export function absUrl(path: string) {
  return `https://${site.domain}${path}`;
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export function relatedForTool(slug: string) {
  return {
    rankings: rankings.filter((item) => item.toolSlugs.includes(slug)),
    comparisons: comparisons.filter((item) => item.tools.includes(slug)),
  };
}

export function lastVerifiedForPath(path: string) {
  if (path.startsWith("/tools/")) {
    return tools.find((tool) => `/tools/${tool.slug}` === path)?.lastVerified;
  }
  if (path.startsWith("/blog/")) {
    const guide = guides.find((item) => `/blog/${item.slug}` === path);
    return guide?.updatedDate ?? guide?.date;
  }
  if (path.startsWith("/compare/")) {
    return comparisons.find((item) => `/compare/${item.slug}` === path)?.updatedDate;
  }
  if (path.startsWith("/best/")) {
    const ranking = rankings.find((item) => `/best/${item.slug}` === path);
    if (ranking?.updatedDate) return ranking.updatedDate;
    const dates = ranking?.toolSlugs
      .map((slug) => tools.find((tool) => tool.slug === slug)?.lastVerified)
      .filter(Boolean) as string[];
    return dates.sort().at(-1);
  }
  return undefined;
}

export function allIndexablePaths() {
  return [
    "/",
    "/tools",
    "/categories",
    "/best",
    "/compare",
    "/blog",
    "/about",
    "/contact",
    "/privacy",
    "/terms",
    "/newsletter",
    "/submit",
    "/methodology",
    "/disclosure",
    ...tools.map((tool) => `/tools/${tool.slug}`),
    ...categories.map((category) => `/categories/${category.slug}`),
    ...rankings.map((ranking) => `/best/${ranking.slug}`),
    ...comparisons.map((comparison) => `/compare/${comparison.slug}`),
    ...guides.map((guide) => `/blog/${guide.slug}`),
  ];
}
