import { isStaleDate } from "@/lib/format";
import { formatDate } from "@/lib/site";

export function VerifiedDate({
  date,
  variant = "inline",
  referenceNowMs,
}: {
  date: string;
  variant?: "inline" | "banner";
  referenceNowMs?: number;
}) {
  const formatted = formatDate(date);
  const stale = isStaleDate(date, 45, referenceNowMs);

  if (variant === "banner") {
    return (
      <div className={stale ? "verified-banner verified-banner-stale" : "verified-banner"}>
        <p className="verified-line">
          Prices verified on <time dateTime={date}>{formatted}</time>
        </p>
        {stale ? (
          <p className="stale-warning" role="note">
            Price last checked <time dateTime={date}>{formatted}</time> — re-check on the official
            site before paying.
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <span className="verified-inline">
      <time dateTime={date}>{formatted}</time>
      {stale ? (
        <span className="stale-pill" title={`Last checked ${formatted} — re-check before paying`}>
          Check price
        </span>
      ) : null}
    </span>
  );
}
