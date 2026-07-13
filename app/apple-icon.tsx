import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#111111",
          border: "12px solid #d71920",
          color: "#ffffff",
          display: "flex",
          fontSize: 64,
          fontWeight: 900,
          height: "100%",
          justifyContent: "center",
          letterSpacing: 0,
          width: "100%",
        }}
      >
        GT
      </div>
    ),
    size,
  );
}
