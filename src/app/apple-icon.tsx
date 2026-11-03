import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#07080b",
        }}
      >
        <div
          style={{
            width: 124,
            height: 124,
            borderRadius: 32,
            background: "#161922",
            border: "2px solid #3a3f4a",
            display: "flex",
            justifyContent: "flex-end",
            padding: 20,
          }}
        >
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 18,
              background: "#70e0c4",
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
