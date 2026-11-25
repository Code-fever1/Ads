import { formatPricingModel } from "@/lib/format";
import type { PricingModel } from "@/lib/types";

export function PricingBadge({ model }: { model: PricingModel }) {
  return (
    <span className={`pricing-badge pricing-badge-${model}`}>
      {formatPricingModel(model)}
    </span>
  );
}
