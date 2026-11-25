import type {
  Comparison,
  FaqItem,
  Guide,
  Ranking,
  Tool,
  ToolPricingTier,
} from "@/lib/types";
import { absUrl, site } from "@/lib/site";

export const kilnOrg = {
  "@type": "Organization" as const,
  "@id": absUrl("/#organization"),
  name: site.name,
  url: absUrl("/"),
  logo: absUrl("/favicon.svg"),
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

function appCategoryForTool(tool: Tool): string {
  if (tool.categories.includes("coding")) return "DeveloperApplication";
  if (tool.categories.includes("design") || tool.categories.includes("image")) {
    return "DesignApplication";
  }
  if (tool.categories.includes("video") || tool.categories.includes("audio")) {
    return "MultimediaApplication";
  }
  return "BusinessApplication";
}

export function softwareJsonLd(tool: Tool) {
  const numericTiers = tool.pricingTiers.filter(
    (tier): tier is ToolPricingTier & { priceUsdPerMonth: number } =>
      typeof tier.priceUsdPerMonth === "number",
  );
  const lowestTier =
    numericTiers.length > 0
      ? numericTiers.reduce((min, tier) =>
          tier.priceUsdPerMonth < min.priceUsdPerMonth ? tier : min,
        )
      : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    url: tool.website,
    applicationCategory: appCategoryForTool(tool),
    operatingSystem: "Web",
    isAccessibleForFree: tool.hasFreeTier,
    offers: {
      "@type": "Offer",
      ...(lowestTier !== undefined ? { price: String(lowestTier.priceUsdPerMonth) } : {}),
      priceCurrency: lowestTier?.currency ?? "USD",
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

export function comparisonJsonLd(comparison: Comparison, comparedTools: Tool[]) {
  return itemListJsonLd(
    comparison.title,
    `/compare/${comparison.slug}`,
    comparedTools.map((tool) => ({ name: tool.name, path: `/tools/${tool.slug}` })),
  );
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleJsonLd(guide: Guide) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.summary,
    datePublished: guide.date,
    dateModified: guide.updatedDate ?? guide.date,
    inLanguage: "en",
    author: kilnOrg,
    publisher: kilnOrg,
    mainEntityOfPage: absUrl(`/blog/${guide.slug}`),
    image: absUrl("/opengraph-image"),
  };
}
