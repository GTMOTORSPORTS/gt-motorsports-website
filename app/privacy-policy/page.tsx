import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for G&T Motorsports.",
};

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <section className="bg-black py-16 sm:py-24">
        <div className="container-shell max-w-4xl">
          <SectionHeader
            eyebrow="Privacy Policy"
            title="How G&T Motorsports handles your information."
            copy="This policy explains how information submitted through this website may be used to respond to enquiries and booking requests."
          />
          <div className="mt-10 grid gap-6 text-sm leading-7 text-white/70">
            <p>
              G&T Motorsports may collect your name, contact details, vehicle
              information and enquiry details when you contact the workshop or
              request a booking.
            </p>
            <p>
              This information is used to respond to your enquiry, arrange
              appointments, provide customer service and keep appropriate workshop
              records.
            </p>
            <p>
              We do not sell your personal information. Information may be shared
              only where required to provide a requested service, comply with legal
              obligations or protect the business and customers.
            </p>
            <p>
              To ask about your information, contact {site.email} or call{" "}
              {site.phone}.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
