import { ImageResponse } from "next/og";
import { getTool, tools } from "@/data/tools";
import { formatEntryPrice } from "@/lib/format";
import { formatDate } from "@/lib/site";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getTool(slug);
  const name = tool?.name ?? "Kiln Tool Profile";
  const vendor = tool?.vendor ?? "Kiln Directory";
  const price = tool ? formatEntryPrice(tool) : "Verified Pricing";
  const verified = tool ? `Verified ${formatDate(tool.lastVerified)}` : "kiln.toolfolio.page";
  const summary = tool?.summary ?? "Independent AI tool review with skip-if criteria.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6edd8",
          color: "#2b2118",
          padding: "64px 72px",
          borderTop: "16px solid #d99b26",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: "uppercase",
          }}
        >
          <span>Kiln · by Toolfolio</span>
          <span>{verified}</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 72, lineHeight: 1.05, fontWeight: 700 }}>{name}</div>
          <div style={{ fontSize: 30, color: "#574534", maxWidth: 960, lineHeight: 1.35 }}>
            {summary}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 24,
            borderTop: "2px solid #d5c7a9",
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          <span>{vendor}</span>
          <span
            style={{
              background: "#2b2118",
              color: "#f6edd8",
              padding: "10px 22px",
              borderRadius: 6,
            }}
          >
            {price}
          </span>
        </div>
      </div>
    ),
    size,
  );
}
