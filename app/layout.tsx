import type { Metadata } from "next";
import "./globals.css";
import { StructuredData } from "@/components/StructuredData";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://gtmotorsports.com.au"),
  title: {
    default: "Mechanic Clyde North | Car Servicing & Repairs | G&T Motorsports",
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
    icon: [{ url: "/icon", type: "image/png", sizes: "32x32" }],
    shortcut: [{ url: "/icon", type: "image/png", sizes: "32x32" }],
    apple: [{ url: "/apple-icon", type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Mechanic Clyde North | Car Servicing & Repairs | G&T Motorsports",
    description:
      "Trusted mechanic in Clyde North providing logbook servicing, diagnostics, brake repairs, suspension, cooling-system repairs and general mechanical repairs for all makes and models.",
    url: site.url,
    siteName: "G&T Motorsports",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/workshop-hero.png",
        width: 1680,
        height: 944,
        alt: "Premium mechanic workshop interior for G&T Motorsports",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mechanic Clyde North | Car Servicing & Repairs | G&T Motorsports",
    description:
      "Trusted mechanic in Clyde North providing logbook servicing, diagnostics, brake repairs, suspension, cooling-system repairs and general mechanical repairs for all makes and models.",
    images: ["/workshop-hero.png"],
  },
  category: "automotive",
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
