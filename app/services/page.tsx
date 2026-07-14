import type { Metadata } from "next";
import Link from "next/link";
import { BookingCTA } from "@/components/BookingCTA";
import { ButtonLink } from "@/components/ButtonLink";
import { PageShell } from "@/components/PageShell";
import { SectionHeader } from "@/components/SectionHeader";
import { pageMetadata } from "@/lib/seo";
import { servicePages } from "@/lib/service-pages";

export const metadata: Metadata = pageMetadata({
  title: "Mechanic Services",
  description:
    "Mechanic services in Clyde North including logbook servicing, diagnostics, brake repairs, suspension, cooling-system repairs and general mechanical repairs.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <PageShell>
      <section className="bg-black py-16 sm:py-24">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.45fr] lg:items-end">
            <SectionHeader
              eyebrow="Services"
              title="Mechanical services for daily drivers, work vehicles and family cars."
              copy="G&T Motorsports is an independent automotive workshop in Clyde North servicing all makes and models. Explore dedicated service pages below, or contact the workshop if you are not sure which service your vehicle needs."
            />
            <div className="rounded-md border border-white/10 bg-white/[0.04] p-5">
              <h2 className="text-xl font-black text-white">
                Not sure which service you need?
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Tell us what your vehicle is doing and our team can help arrange
                an inspection.
              </p>
              <div className="mt-5">
                <ButtonLink href="/book-online" className="w-full sm:w-auto">
                  Book Online
                </ButtonLink>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {servicePages.map((service) => (
              <article
                className="flex rounded-md border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-brake sm:flex-col"
                key={service.slug}
              >
                <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-brake text-sm font-black text-white sm:mb-6 sm:mr-0">
                  {service.icon}
                </div>
                <div className="flex min-w-0 flex-1 flex-col">
                  <h3 className="text-xl font-black">{service.name}</h3>
                  <p className="mt-4 text-sm leading-6 text-white/65">
                    {service.shortDescription}
                  </p>
                  {service.slug === "logbook-servicing" ? (
                    <p className="mt-3 text-xs font-bold uppercase leading-5 tracking-wide text-brake">
                      Eligible Mercedes-Benz Digital Service Record updates are
                      available after scheduled servicing.
                    </p>
                  ) : null}
                  <Link
                    className="focus-ring mt-6 inline-flex w-fit rounded-md border border-white/20 px-4 py-3 text-xs font-black uppercase tracking-wide text-white transition hover:border-brake hover:bg-brake"
                    href={`/services/${service.slug}`}
                  >
                    Learn More About {service.name}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <BookingCTA />
    </PageShell>
  );
}
