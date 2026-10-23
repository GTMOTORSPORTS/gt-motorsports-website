/** @type {import('next').NextConfig} */
const isDevelopment = process.env.NODE_ENV === "development";
const scriptSrc = [
  "'self'",
  "'unsafe-inline'",
  ...(isDevelopment ? ["'unsafe-eval'"] : []),
  "https://calendar.google.com",
  "https://www.google.com",
  "https://maps.googleapis.com",
].join(" ");
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src ${scriptSrc}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://www.google.com https://maps.gstatic.com https://calendar.google.com",
  "frame-src https://calendar.google.com https://www.google.com",
  "connect-src 'self'",
  "font-src 'self' data:",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig = {
  poweredByHeader: false,
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/services/walnut-blasting",
        destination: "/walnut-blasting-clyde-north",
        permanent: true,
      },
      {
        source: "/services/logbook-servicing",
        destination: "/logbook-servicing",
        permanent: true,
      },
      {
        source: "/services/mercedes-benz-servicing",
        destination: "/mercedes-benz-service",
        permanent: true,
      },
      {
        source: "/services/brake-repairs",
        destination: "/brake-repairs",
        permanent: true,
      },
      {
        source: "/services/vehicle-diagnostics",
        destination: "/engine-diagnostics",
        permanent: true,
      },
      {
        source: "/services/roadworthy-certificate",
        destination: "/roadworthy-certificate",
        permanent: true,
      },
      {
        source: "/mechanic-cranbourne",
        destination: "/locations/cranbourne",
        permanent: true,
      },
      {
        source: "/mechanic-berwick",
        destination: "/locations/berwick",
        permanent: true,
      },
      {
        source: "/mechanic-clyde-north",
        destination: "/",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(self), payment=(), usb=()",
          },
          {
            key: "Content-Security-Policy",
            value: contentSecurityPolicy,
          },
        ],
      },
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
