import type { Metadata } from "next";
import { BookingForm } from "@/components/BookingForm";
import { ButtonLink } from "@/components/ButtonLink";
import { PageShell } from "@/components/PageShell";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book Online",
  description:
    "Request a booking with G&T Motorsports in Clyde North for car servicing, diagnostics, repairs and maintenance.",
  alternates: {
    canonical: "/book-online",
  },
};

export default function BookOnlinePage() {
  return (
    <PageShell>
      <section className="bg-black py-16 sm:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="Book Online"
            title="Request an appointment with G&T Motorsports."
            copy="Send through your details and the workshop can confirm the best available time. For urgent bookings, calling is the fastest option."
          />
          <div className="rounded-md border border-white/10 bg-white/[0.04] p-5 sm:p-6">
            <BookingForm compact />
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={site.phoneHref} variant="ghost">
                Call Now
              </ButtonLink>
              <ButtonLink href={site.emailHref} variant="ghost">
                Email Workshop
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
