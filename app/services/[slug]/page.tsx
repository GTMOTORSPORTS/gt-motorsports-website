import {
  generateServiceMetadata,
  ServicePageLayout,
} from "@/components/ServicePageLayout";
import { servicePageSlugs } from "@/lib/service-pages";

type ServiceRouteProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return servicePageSlugs
    .filter(
      (slug) =>
        slug !== "logbook-servicing" &&
        slug !== "mercedes-benz-servicing" &&
        slug !== "roadworthy-certificate",
    )
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServiceRouteProps) {
  const { slug } = await params;
  return generateServiceMetadata(slug);
}

export default async function ServiceRoutePage({ params }: ServiceRouteProps) {
  const { slug } = await params;
  return <ServicePageLayout slug={slug} />;
}
