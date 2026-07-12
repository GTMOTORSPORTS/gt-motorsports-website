import type { Metadata } from "next";
import "./globals.css";
import { StructuredData } from "@/components/StructuredData";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "G&T Motorsports | Mechanic Workshop in Clyde North",
    template: "%s | G&T Motorsports",
  },
  description:
    "Premium mechanic workshop in Clyde North VIC servicing all makes and models. Book online or call G&T Motorsports today.",
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    title: "G&T Motorsports",
    description:
      "Premium mechanic workshop in Clyde North servicing all makes and models.",
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
    title: "G&T Motorsports",
    description:
      "Premium mechanic workshop in Clyde North servicing all makes and models.",
    images: ["/workshop-hero.png"],
  },
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
