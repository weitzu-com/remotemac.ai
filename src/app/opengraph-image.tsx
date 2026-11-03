import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#07080b",
          color: "#f3f1ea",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 420,
            height: 420,
            borderRadius: 420,
            background: "rgba(112, 224, 196, 0.12)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "64px 72px",
            width: "100%",
            height: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.18)",
                background: "#161922",
                display: "flex",
                justifyContent: "flex-end",
                padding: 8,
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 8,
                  background: "#70e0c4",
                }}
              />
            </div>
            <div style={{ fontSize: 28, letterSpacing: -0.4 }}>
              {site.name}
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div
              style={{
                fontSize: 18,
                letterSpacing: 4,
                color: "#70e0c4",
                textTransform: "uppercase",
              }}
            >
              Pilot · United States · Bare metal
            </div>
            <div
              style={{
                fontSize: 58,
                lineHeight: 1.05,
                letterSpacing: -1.6,
                maxWidth: 920,
              }}
            >
              Dedicated Apple Silicon Mac mini rental.
            </div>
            <div
              style={{
                fontSize: 24,
                color: "#a7abb6",
                maxWidth: 760,
                lineHeight: 1.4,
              }}
            >
              Exclusive machines in the United States — not shared, not
              virtualized.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 28,
              fontSize: 18,
              color: "#a7abb6",
            }}
          >
            <span>Apple Silicon</span>
            <span>Bare metal</span>
            <span>US-hosted</span>
            <span>24h minimum</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
