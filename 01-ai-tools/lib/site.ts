import { comparisons } from "@/data/comparisons";
import { categories } from "@/data/categories";
import { guides } from "@/data/guides";
import { rankings } from "@/data/rankings";
import { tools } from "@/data/tools";

export const site = {
  name: "Kiln",
  domain: "kiln.toolfolio.page",
  tagline: "AI tools, fired and dated.",
  description:
    "A curated directory of AI software with last-verified dates, comparison tables, and honest skip-if notes. We are not the vendor.",
};

export function absUrl(path: string) {
  return `https://${site.domain}${path}`;
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function relatedForTool(slug: string) {
  return {
    rankings: rankings.filter((item) => item.toolSlugs.includes(slug)),
    comparisons: comparisons.filter((item) => item.a === slug || item.b === slug),
  };
}

export function lastVerifiedForPath(path: string) {
  if (path.startsWith("/tools/")) {
    return tools.find((tool) => `/tools/${tool.slug}` === path)?.lastVerified;
  }
  if (path.startsWith("/blog/")) {
    return guides.find((guide) => `/blog/${guide.slug}` === path)?.date;
  }
  if (path.startsWith("/best/")) {
    const ranking = rankings.find((item) => `/best/${item.slug}` === path);
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
