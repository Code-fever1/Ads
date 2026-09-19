import type { Comparison, Guide, Ranking, Tool } from "@/lib/types";
import { absUrl, site } from "@/lib/site";

export const kilnOrg = {
  "@type": "Organization" as const,
  "@id": absUrl("/#organization"),
  name: site.name,
  url: absUrl("/"),
  logo: absUrl("/mark.png"),
  description: site.description,
  parentOrganization: {
    "@type": "Organization",
    name: "Toolfolio",
    url: "https://toolfolio.page",
  },
};

export function orgJsonLd() {
  return {
    "@context": "https://schema.org",
    ...kilnOrg,
  };
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absUrl("/#website"),
    name: site.name,
    url: absUrl("/"),
    description: site.description,
    inLanguage: "en",
    publisher: { "@id": absUrl("/#organization") },
    isPartOf: { "@id": "https://toolfolio.page/#organization" },
  };
}

export function softwareJsonLd(tool: Tool) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    url: tool.website,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    isAccessibleForFree: tool.pricing === "free" || tool.pricing === "freemium",
    offers: {
      "@type": "Offer",
      price: tool.pricing === "free" ? "0" : undefined,
      priceCurrency: "USD",
      description: tool.priceBand,
      url: tool.website,
    },
    publisher: {
      "@type": "Organization",
      name: tool.vendor,
      url: tool.website,
    },
    description: tool.summary,
    dateModified: tool.lastVerified,
    mainEntityOfPage: absUrl(`/tools/${tool.slug}`),
  };
}

export function webPageJsonLd({
  name,
  description,
  path,
  dateModified,
  about,
}: {
  name: string;
  description: string;
  path: string;
  dateModified?: string;
  about?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: absUrl(path),
    inLanguage: "en",
    isPartOf: { "@id": absUrl("/#website") },
    author: { "@id": absUrl("/#organization") },
    publisher: { "@id": absUrl("/#organization") },
    ...(dateModified ? { dateModified } : {}),
    ...(about ? { about: { "@type": "Thing", name: about } } : {}),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absUrl(item.path),
    })),
  };
}

export function itemListJsonLd(
  name: string,
  path: string,
  items: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    url: absUrl(path),
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absUrl(item.path),
    })),
  };
}

export function rankingJsonLd(ranking: Ranking, tools: Tool[]) {
  return itemListJsonLd(
    ranking.title,
    `/best/${ranking.slug}`,
    tools.map((tool) => ({ name: tool.name, path: `/tools/${tool.slug}` })),
  );
}

export function comparisonJsonLd(comparison: Comparison, a?: Tool, b?: Tool) {
  const items = [a, b]
    .filter((tool): tool is Tool => Boolean(tool))
    .map((tool) => ({ name: tool.name, path: `/tools/${tool.slug}` }));
  return itemListJsonLd(comparison.title, `/compare/${comparison.slug}`, items);
}

export function articleJsonLd(guide: Guide) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.summary,
    datePublished: guide.date,
    dateModified: guide.date,
    inLanguage: "en",
    author: kilnOrg,
    publisher: kilnOrg,
    mainEntityOfPage: absUrl(`/blog/${guide.slug}`),
    image: absUrl("/mark.png"),
  };
}
