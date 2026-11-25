export type PricingModel = "free" | "freemium" | "paid" | "free-trial" | "usage";

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

export type ToolPricingTier = {
  name: string;
  priceUsdPerMonth: number | null;
  currency?: "USD" | "EUR";
  note: string;
};

export type Tool = {
  slug: string;
  name: string;
  vendor: string;
  website: string;
  affiliateUrl: string | null;
  categories: CategorySlug[];
  tasks: string[];
  pricing: PricingModel;
  hasFreeTier: boolean;
  freeTierNote: string;
  pricingTiers: ToolPricingTier[];
  priceBand: string;
  bestFor: string;
  skipIf: string;
  keyFeatures: string[];
  limitations: string[];
  lastVerified: string;
  verifiedBy: string;
  status: "active" | "sunset";
  summary: string;
  body: string;
  notes: string[];
  alternatives: string[];
  color: string;
  featured: boolean;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Category = {
  slug: CategorySlug;
  title: string;
  headline: string;
  intro: string;
  faqs: FaqItem[];
};

export type Ranking = {
  slug: string;
  title: string;
  keyword: string;
  intro: string;
  toolSlugs: string[];
  criteria: string[];
  updatedDate: string;
  toolVerdicts: Record<string, string>;
  faqs: FaqItem[];
};

export type Comparison = {
  slug: string;
  title: string;
  tools: string[];
  intro: string;
  verdict: string;
  picks: { slug: string; pick: string }[];
  updatedDate: string;
  rows: { label: string; values: string[] }[];
  faqs: FaqItem[];
};

export type GuideSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  table?: { headers: string[]; rows: string[][] };
};

export type Guide = {
  slug: string;
  title: string;
  date: string;
  updatedDate?: string;
  summary: string;
  body: string[];
  sections?: GuideSection[];
};
