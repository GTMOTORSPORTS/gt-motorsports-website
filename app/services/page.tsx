import type { Metadata } from "next";
import { BookingCTA } from "@/components/BookingCTA";
import { PageShell } from "@/components/PageShell";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Mechanic services in Clyde North including logbook servicing, general servicing, brakes, diagnostics and repairs.",
};

export default function ServicesPage() {
  return (
    <PageShell>
      <section className="bg-black py-16 sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Services"
            title="Servicing, diagnostics and mechanical repairs."
            copy="G&T Motorsports services all makes and models. If you do not see the service you need, contact the workshop and we will help guide the next step."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {site.services.map((service) => (
              <article className="rounded-md border border-white/10 bg-white/[0.04] p-6" key={service}>
                <span className="mb-5 block h-1 w-12 bg-brake" />
                <h2 className="text-xl font-black">{service}</h2>
                <p className="mt-4 text-sm leading-6 text-white/65">
                  Book an appointment for an inspection, quote or service plan
                  tailored to your vehicle and driving needs.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <BookingCTA />
    </PageShell>
  );
}
