import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Kiln — AI tools, fired and dated.";

export default function Image() {
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
          color: "#3a2a18",
          padding: "72px",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 4, textTransform: "uppercase" }}>Kiln</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 72, lineHeight: 1.05, fontWeight: 700, maxWidth: 900 }}>
            AI tools, fired and dated.
          </div>
          <div style={{ fontSize: 28, maxWidth: 820 }}>
            Skip-if notes, last-verified dates, and comparisons. We are not the vendor.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
