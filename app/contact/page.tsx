import type { Metadata } from "next";
import { ContactDetails } from "@/components/ContactDetails";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact G&T Motorsports at 47B Palladium Circuit, Clyde North VIC 3978 for mechanic servicing, diagnostics and repairs.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <PageShell>
      <ContactDetails />
    </PageShell>
  );
}
