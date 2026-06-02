import { ImageResponse } from "next/og";

// Edge runtime uses @vercel/og's edge build, avoiding the Node build's
// fileURLToPath font-loading crash that broke `next build` (and every deploy).
export const runtime = "edge";

export const alt = "AutoGrowth AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #ecfdf5 0%, #ffffff 55%, #ffffff 100%)",
          padding: "80px",
          fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 160,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            color: "#111827",
            lineHeight: 1,
            display: "flex",
          }}
        >
          <span>Auto</span>
          <span style={{ color: "#4F46E5" }}>Growth</span>
        </div>
        <div
          style={{
            marginTop: "32px",
            fontSize: 36,
            color: "#4b5563",
            fontWeight: 500,
            textAlign: "center",
            maxWidth: "900px",
            lineHeight: 1.3,
          }}
        >
          AI growth platform for local service businesses
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "60px",
            fontSize: 24,
            color: "#9ca3af",
            fontWeight: 500,
          }}
        >
          autogrowthai.co
        </div>
      </div>
    ),
    { ...size },
  );
}
