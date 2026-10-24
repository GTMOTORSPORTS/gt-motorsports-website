import type { Metadata } from "next";
import { ContactDetails } from "@/components/ContactDetails";
import { PageShell } from "@/components/PageShell";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Our Clyde North Mechanic Workshop",
  description:
    "Contact G&T Motorsports at 47B Palladium Circuit, Clyde North VIC 3978 for mechanic servicing, diagnostics and repairs.",
  path: "/contact",
});

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const { service } = await searchParams;
  return (
    <PageShell>
      <ContactDetails pageHeading cleaningEnquiry={service === "walnut-blasting"} />
    </PageShell>
  );
}
