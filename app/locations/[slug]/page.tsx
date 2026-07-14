import {
  generateLocationMetadata,
  LocationPageLayout,
} from "@/components/LocationPageLayout";
import { locationPages } from "@/lib/location-pages";

type LocationRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return locationPages.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: LocationRouteProps) {
  const { slug } = await params;
  return generateLocationMetadata(slug);
}

export default async function LocationRoutePage({ params }: LocationRouteProps) {
  const { slug } = await params;
  return <LocationPageLayout slug={slug} />;
}
