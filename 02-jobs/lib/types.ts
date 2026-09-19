export type JobSource = "remoteok" | "himalayas" | "arbeitnow";

export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  remote: boolean;
  employmentType: string;
  salary: string;
  excerpt: string;
  description: string;
  applyUrl: string;
  source: JobSource;
  sourceLabel: string;
  sourceHome: string;
  postedAt: string;
  expiresAt: string | null;
  tags: string[];
  seniority: string;
};

export type Hub = {
  slug: string;
  path: string;
  title: string;
  headline: string;
  intro: string;
  keywords: string[];
  kind: "role" | "geo" | "filter";
};

export type CareerPage = {
  slug: string;
  title: string;
  summary: string;
  body: string[];
};
