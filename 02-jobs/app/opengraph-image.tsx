import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Rolepaper — live software and electrical jobs.";

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
          background: "#f4eee3",
          color: "#2a2118",
          padding: "72px",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 4, textTransform: "uppercase" }}>Rolepaper</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 68, lineHeight: 1.05, fontWeight: 700, maxWidth: 940 }}>
            Live software and electrical jobs.
          </div>
          <div style={{ fontSize: 28, maxWidth: 860 }}>
            Third-party listings from public APIs. We are not the employer.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
