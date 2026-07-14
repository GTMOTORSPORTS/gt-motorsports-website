import type { Metadata } from "next";
import { site } from "@/lib/site";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
};

const defaultImage = "/gt-motorsports-logo.webp";
const defaultImageAlt = "G&T Motorsports";

export function pageMetadata({
  title,
  description,
  path,
  image = defaultImage,
  imageAlt = defaultImageAlt,
}: PageMetadataInput): Metadata {
  const canonical = path === "/" ? site.url : `${site.url}${path}`;

  const metadataTitle = title.includes(site.name) ? { absolute: title } : title;

  return {
    title: metadataTitle,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: site.name,
      locale: "en_AU",
      type: "website",
      images: [
        {
          url: image,
          width: image.endsWith(".webp") ? 1073 : 1200,
          height: image.endsWith(".webp") ? 440 : 800,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
