import type { Guide, PricingModel, Tool, ToolPricingTier } from "@/lib/types";

const MS_PER_DAY = 86_400_000;
export const BUILD_NOW_MS = Date.now();

export function daysSince(isoDate: string, nowMs: number = BUILD_NOW_MS): number {
  const parsed = Date.parse(`${isoDate}T00:00:00Z`);
  if (!Number.isFinite(parsed)) return 999;
  const diff = nowMs - parsed;
  return Math.max(0, Math.floor(diff / MS_PER_DAY));
}

export function isStaleDate(
  isoDate: string,
  thresholdDays = 45,
  nowMs: number = BUILD_NOW_MS,
): boolean {
  return daysSince(isoDate, nowMs) > thresholdDays;
}

export function formatTierPrice(tier: ToolPricingTier): string {
  if (tier.priceUsdPerMonth === 0) return "Free";
  if (typeof tier.priceUsdPerMonth === "number") {
    const sym = tier.currency === "EUR" ? "€" : "$";
    return `${sym}${tier.priceUsdPerMonth}/mo`;
  }
  return "Check official pricing";
}

export function formatEntryPrice(tool: Tool): string {
  const paidTiers = tool.pricingTiers.filter(
    (tier) => typeof tier.priceUsdPerMonth === "number" && tier.priceUsdPerMonth > 0,
  );
  if (paidTiers.length > 0) {
    const lowest = paidTiers.reduce((min, tier) =>
      (tier.priceUsdPerMonth ?? Infinity) < (min.priceUsdPerMonth ?? Infinity) ? tier : min,
    );
    const sym = lowest.currency === "EUR" ? "€" : "$";
    return `From ${sym}${lowest.priceUsdPerMonth}/mo`;
  }
  if (tool.pricing === "usage") return "Pay-as-you-go API";
  if (tool.pricing === "free") return "Free / BYO key";
  return "Check official pricing";
}

export function formatPricingModel(model: PricingModel): string {
  switch (model) {
    case "free":
      return "Free";
    case "freemium":
      return "Freemium";
    case "paid":
      return "Paid";
    case "free-trial":
      return "Free trial";
    case "usage":
      return "Usage-based";
  }
}

export function estimateReadingTime(guide: Guide): number {
  const parts: string[] = [guide.title, guide.summary, ...guide.body];
  if (guide.sections) {
    for (const sec of guide.sections) {
      parts.push(sec.heading, ...sec.paragraphs);
      if (sec.bullets) parts.push(...sec.bullets);
      if (sec.table) {
        parts.push(...sec.table.headers);
        for (const row of sec.table.rows) parts.push(...row);
      }
    }
  }
  const words = parts.join(" ").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}
