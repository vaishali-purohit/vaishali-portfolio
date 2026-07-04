import { ImageResponse } from "next/og"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f172a",
          color: "#f8fafc",
          fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 60, fontWeight: "bold", letterSpacing: -2 }}>
          Vaishali Purohit
        </div>
        <div style={{ fontSize: 30, marginTop: 20, opacity: 0.8 }}>
          Senior Full-Stack Engineer
        </div>
      </div>
    ),
    { ...size }
  )
}
