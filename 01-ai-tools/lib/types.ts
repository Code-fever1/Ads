export type PricingModel = "free" | "freemium" | "paid" | "usage";

export type CategorySlug =
  | "assistants"
  | "coding"
  | "writing"
  | "image"
  | "video"
  | "audio"
  | "productivity"
  | "automation"
  | "research"
  | "design";

export type Tool = {
  slug: string;
  name: string;
  vendor: string;
  website: string;
  categories: CategorySlug[];
  pricing: PricingModel;
  priceBand: string;
  bestFor: string;
  skipIf: string;
  lastVerified: string;
  status: "active" | "sunset";
  summary: string;
  body: string;
  notes: string[];
  alternatives: string[];
};

export type Category = {
  slug: CategorySlug;
  title: string;
  headline: string;
  intro: string;
};

export type Ranking = {
  slug: string;
  title: string;
  keyword: string;
  intro: string;
  toolSlugs: string[];
  criteria: string[];
};

export type Comparison = {
  slug: string;
  title: string;
  a: string;
  b: string;
  intro: string;
  pickA: string;
  pickB: string;
  rows: { label: string; a: string; b: string }[];
};

export type Guide = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  body: string[];
};
