import type { Metadata } from "next";
import { ContactDetails } from "@/components/ContactDetails";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact G&T Motorsports in Clyde North VIC.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <ContactDetails />
    </PageShell>
  );
}
