import { generateServiceMetadata, ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata = generateServiceMetadata("walnut-blasting");

export default function WalnutBlastingPage() {
  return <ServicePageLayout slug="walnut-blasting" />;
}
