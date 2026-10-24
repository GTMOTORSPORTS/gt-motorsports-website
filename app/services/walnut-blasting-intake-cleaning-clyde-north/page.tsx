import { generateServiceMetadata, ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata = {
  ...generateServiceMetadata("walnut-blasting"),
  robots: { index: true, follow: true },
};

export default function WalnutBlastingPage() {
  return <ServicePageLayout slug="walnut-blasting" />;
}
