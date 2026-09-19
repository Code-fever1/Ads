import type { Metadata } from "next";
import { absUrl, site } from "@/lib/site";

const googleBot = {
  index: true,
  follow: true,
  "max-image-preview": "large" as const,
  "max-snippet": -1,
  "max-video-preview": -1,
};

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
  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: absoluteTitle ?? title,
      description,
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
      description,
    },
    robots: { index: true, follow: true, googleBot },
  };
}
