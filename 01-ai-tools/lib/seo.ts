import type { Metadata } from "next";
import { absUrl, site } from "@/lib/site";

const googleBot = {
  index: true,
  follow: true,
  "max-image-preview": "large" as const,
  "max-snippet": -1,
  "max-video-preview": -1,
};

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  const sliced = text.slice(0, maxLength - 1);
  const lastSpace = sliced.lastIndexOf(" ");
  return `${(lastSpace > maxLength * 0.6 ? sliced.slice(0, lastSpace) : sliced).trim()}…`;
}

export function pageMeta({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  modifiedTime,
  absoluteTitle,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  absoluteTitle?: string;
}): Metadata {
  const url = absUrl(path);
  const cleanDescription = truncateText(description, 158);
  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description: cleanDescription,
    alternates: { canonical: url },
    openGraph: {
      title: absoluteTitle ?? `${title} · ${site.name}`,
      description: cleanDescription,
      url,
      siteName: site.name,
      locale: "en_US",
      type,
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: absoluteTitle ?? `${title} · ${site.name}`,
      description: cleanDescription,
    },
    robots: { index: true, follow: true, googleBot },
  };
}
