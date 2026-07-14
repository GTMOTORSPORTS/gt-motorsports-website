import type { Metadata, Viewport } from "next";
import "./globals.css";
import { StructuredData } from "@/components/StructuredData";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gtmotorsports.com.au"),
  title: {
    default: "Mechanic Clyde North | G&T Motorsports",
    template: "%s | G&T Motorsports",
  },
  description:
    "Trusted mechanic in Clyde North providing logbook servicing, diagnostics, brake repairs, suspension, cooling-system repairs and general mechanical repairs for all makes and models.",
  alternates: {
    canonical: "/",
    languages: {
      "en-AU": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    shortcut: [{ url: "/favicon.ico", sizes: "any" }],
    apple: [
      { url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Mechanic Clyde North | G&T Motorsports",
    description:
      "Trusted mechanic in Clyde North providing logbook servicing, diagnostics, brake repairs, suspension, cooling-system repairs and general mechanical repairs for all makes and models.",
    url: site.url,
    siteName: "G&T Motorsports",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/gt-motorsports-logo.webp",
        width: 1073,
        height: 440,
        alt: "G&T Motorsports | European Mechanic & Mercedes-Benz Specialist in Melbourne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mechanic Clyde North | G&T Motorsports",
    description:
      "Trusted mechanic in Clyde North providing logbook servicing, diagnostics, brake repairs, suspension, cooling-system repairs and general mechanical repairs for all makes and models.",
    images: ["/gt-motorsports-logo.webp"],
  },
  category: "automotive",
};

export const viewport: Viewport = {
  themeColor: "#0b0b0f",
  colorScheme: "dark light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <body>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
