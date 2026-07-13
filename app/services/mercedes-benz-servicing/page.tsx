import { generateServiceMetadata, ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata = generateServiceMetadata("mercedes-benz-servicing");

export default function MercedesBenzServicingPage() {
  return <ServicePageLayout slug="mercedes-benz-servicing" />;
}
