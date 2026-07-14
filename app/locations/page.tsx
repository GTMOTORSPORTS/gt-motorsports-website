import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { PageShell } from "@/components/PageShell";
import { SectionHeader } from "@/components/SectionHeader";
import { locationPages } from "@/lib/location-pages";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Locations Serviced | G&T Motorsports Clyde North",
  description:
    "G&T Motorsports services customers from Cranbourne, Berwick, Narre Warren, Officer, Pakenham, Lynbrook, Hampton Park and Hallam.",
  alternates: {
    canonical: "/locations",
  },
  openGraph: {
    title: "Locations Serviced | G&T Motorsports Clyde North",
    description:
      "Find mechanic services near Melbourne's south-east suburbs with G&T Motorsports in Clyde North.",
    url: `${site.url}/locations`,
    siteName: site.name,
    locale: "en_AU",
    type: "website",
  },
};

export default function LocationsPage() {
  return (
    <PageShell>
      <section className="relative overflow-hidden bg-black py-16 sm:py-24">
        <div
          className="absolute inset-0 bg-[url('/workshop-hero.png')] bg-cover bg-center opacity-20"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black via-black/92 to-black/70"
          aria-hidden="true"
        />
        <div className="container-shell relative">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-brake">
            Locations serviced
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] text-white sm:text-6xl">
            Mechanic Services Across Melbourne's South-East
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">
            G&T Motorsports is located in Clyde North and welcomes customers
            from nearby suburbs for servicing, diagnostics, logbook servicing,
            brake repairs and general mechanical repairs.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/book-online">Book Online</ButtonLink>
            <ButtonLink href={site.phoneHref} variant="secondary">
              Call {site.phone}
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Suburb pages"
            title="Find Your Local Service Area"
            copy="Choose your suburb to learn about approximate travel time, available services and how to book with G&T Motorsports."
            tone="light"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {locationPages.map((location) => (
              <Link
                className="focus-ring rounded-md border border-black/10 bg-neutral-50 p-5 transition hover:-translate-y-1 hover:border-brake"
                href={`/locations/${location.slug}`}
                key={location.slug}
              >
                <span className="mb-5 block h-1 w-12 bg-brake" />
                <h2 className="text-xl font-black">{location.suburb}</h2>
                <p className="mt-3 text-sm leading-6 text-black/65">
                  {location.distance}, usually {location.driveTime} from the
                  workshop depending on traffic.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brake py-12 text-white">
        <div className="container-shell flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/80">
              Need help choosing a service?
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
              Contact G&T Motorsports
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/85">
              Tell us what your vehicle is doing and we can help arrange an
              inspection, service booking or repair enquiry.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/services" variant="secondary">
              View Services
            </ButtonLink>
            <ButtonLink href="/contact" variant="ghost">
              Contact
            </ButtonLink>
            <ButtonLink href="/book-online" variant="ghost">
              Book Online
            </ButtonLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
