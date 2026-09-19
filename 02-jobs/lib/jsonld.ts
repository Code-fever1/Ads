import type { CareerPage, Hub, Job } from "@/lib/types";
import { absUrl, site } from "@/lib/site";

export const rolepaperOrg = {
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
    ...rolepaperOrg,
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
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: absUrl(item.path),
    })),
  };
}

export function hubListJsonLd(hub: Hub, jobs: Job[]) {
  return itemListJsonLd(
    hub.title,
    hub.path,
    jobs.slice(0, 20).map((job) => ({
      name: `${job.title} at ${job.company}`,
      path: `/job/${job.id}`,
    })),
  );
}

export function articleJsonLd(page: CareerPage) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.summary,
    datePublished: "2026-09-19",
    dateModified: "2026-09-19",
    inLanguage: "en",
    author: rolepaperOrg,
    publisher: rolepaperOrg,
    mainEntityOfPage: absUrl(`/career/${page.slug}`),
    image: absUrl("/mark.png"),
  };
}

function mapEmployment(raw: string) {
  const types: string[] = [];
  const s = raw.toLowerCase();
  if (/full/.test(s)) types.push("FULL_TIME");
  if (/part/.test(s)) types.push("PART_TIME");
  if (/contract|freelance/.test(s)) types.push("CONTRACTOR");
  if (/intern/.test(s)) types.push("INTERN");
  if (/temp/.test(s)) types.push("TEMPORARY");
  return types.length === 1 ? types[0] : types.length ? types : "OTHER";
}

function parseSalary(salary: string) {
  if (!salary || /not listed/i.test(salary)) return undefined;
  const nums = [...salary.matchAll(/[\d,]+(?:\.\d+)?/g)]
    .map((match) => Number(match[0].replace(/,/g, "")))
    .filter((n) => n >= 1000);
  if (!nums.length) return undefined;
  const currency = /€/.test(salary) ? "EUR" : /£/.test(salary) ? "GBP" : "USD";
  return {
    "@type": "MonetaryAmount",
    currency,
    value: {
      "@type": "QuantitativeValue",
      minValue: nums[0],
      maxValue: nums[1] ?? nums[0],
      unitText: "YEAR",
    },
  };
}

const COUNTRY_ALIASES: [RegExp, string][] = [
  [/\b(united states|usa|u\.s\.a\.|u\.s\.)\b/i, "US"],
  [/\b(united kingdom|uk|england|scotland|wales)\b/i, "GB"],
  [/\b(germany|deutschland)\b/i, "DE"],
  [/\bcanada\b/i, "CA"],
  [/\baustralia\b/i, "AU"],
  [/\bindia\b/i, "IN"],
  [/\bpakistan\b/i, "PK"],
  [/\b(uae|united arab emirates|dubai|abu dhabi)\b/i, "AE"],
  [/\b(netherlands|holland)\b/i, "NL"],
  [/\bfrance\b/i, "FR"],
  [/\bspain\b/i, "ES"],
  [/\bireland\b/i, "IE"],
  [/\bsingapore\b/i, "SG"],
  [/\bpoland\b/i, "PL"],
  [/\bbrazil\b/i, "BR"],
  [/\bmexico\b/i, "MX"],
  [/\bjapan\b/i, "JP"],
  [/\bportugal\b/i, "PT"],
  [/\bsweden\b/i, "SE"],
];

function countriesFromLocation(location: string) {
  return COUNTRY_ALIASES.filter(([pattern]) => pattern.test(location)).map(([, code]) => code);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function validThrough(job: Job) {
  if (job.expiresAt) return job.expiresAt;
  const date = new Date(job.postedAt);
  date.setUTCDate(date.getUTCDate() + 30);
  return date.toISOString();
}

export function jobPostingJsonLd(job: Job) {
  const remoteCopy = job.remote
    ? "<p>This listing is advertised as remote. Country eligibility, if any, is on the original posting.</p>"
    : "";
  const description = `${remoteCopy}<p>${escapeHtml(job.description || job.excerpt)}</p><p>Rolepaper is not the employer. Apply on the original posting.</p>`;
  const countries = countriesFromLocation(job.location);
  const salary = parseSalary(job.salary);

  const locationBlock = job.remote
    ? {
        jobLocationType: "TELECOMMUTE",
        applicantLocationRequirements: countries.length
          ? countries.map((code) => ({ "@type": "Country", name: code }))
          : { "@type": "Country", name: job.location || "Remote" },
      }
    : {
        jobLocation: {
          "@type": "Place",
          address: {
            "@type": "PostalAddress",
            addressLocality: job.location || undefined,
            addressCountry: countries[0] || job.location || "US",
          },
        },
      };

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description,
    identifier: {
      "@type": "PropertyValue",
      name: "Rolepaper",
      value: job.id,
    },
    datePosted: job.postedAt,
    validThrough: validThrough(job),
    employmentType: mapEmployment(job.employmentType),
    hiringOrganization: {
      "@type": "Organization",
      name: job.company,
    },
    industry: "Software",
    directApply: false,
    url: absUrl(`/job/${job.id}`),
    ...locationBlock,
    ...(salary ? { baseSalary: salary } : {}),
  };
}
