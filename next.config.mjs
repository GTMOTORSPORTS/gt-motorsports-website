/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async headers() {
    return [
      {
        source:
          "/:asset(gt-motorsports-logo.webp|gt-motorsports-logo.png|favicon.ico|favicon-16x16.png|favicon-32x32.png|apple-touch-icon.png|android-chrome-192x192.png|android-chrome-512x512.png|site.webmanifest)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
