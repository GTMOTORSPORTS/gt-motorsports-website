import { generateServiceMetadata, ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata = generateServiceMetadata("logbook-servicing");

export default function LogbookServicingPage() {
  return <ServicePageLayout slug="logbook-servicing" />;
}
