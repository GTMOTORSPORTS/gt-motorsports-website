import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { PageShell } from "@/components/PageShell";
import { SectionHeader } from "@/components/SectionHeader";
import type { LocationPage } from "@/lib/location-pages";
import { getLocationPage, locationCanonicalUrl } from "@/lib/location-pages";
import { site } from "@/lib/site";

const mapEmbedUrl =
  "https://www.google.com/maps?q=47B%20Palladium%20Circuit%2C%20Clyde%20North%20VIC%203978&output=embed";

const coreServices = [
  {
    label: "Logbook servicing",
    href: "/services/logbook-servicing",
    copy: "Scheduled servicing completed according to the relevant manufacturer service schedule using suitable parts, oils and fluids.",
  },
  {
    label: "General car servicing",
    href: "/services/general-car-servicing",
    copy: "Routine maintenance, oil and filter servicing, safety checks and condition reporting for everyday vehicles.",
  },
  {
    label: "Brake repairs",
    href: "/services/brake-repairs",
    copy: "Inspection and repair support for brake noise, vibration, reduced braking performance and worn components.",
  },
  {
    label: "Vehicle diagnostics",
    href: "/services/vehicle-diagnostics",
    copy: "Fault finding for warning lights, starting issues, rough running, charging faults and electrical concerns.",
  },
  {
    label: "Mercedes-Benz servicing",
    href: "/services/mercedes-benz-servicing",
    copy: "Independent Mercedes-Benz servicing with eligible Digital Service Record updates after required scheduled servicing.",
  },
  {
    label: "Cooling, suspension and engine repairs",
    href: "/services",
    copy: "Mechanical inspections and repairs for overheating, suspension noises, oil leaks and related vehicle concerns.",
  },
];

export function generateLocationMetadata(slug: string): Metadata {
  const location = getLocationPage(slug);

  if (!location) {
    return {};
  }

  return {
    title: location.title,
    description: location.description,
    alternates: {
      canonical: locationCanonicalUrl(location.slug),
    },
    openGraph: {
      title: location.title,
      description: location.description,
      url: locationCanonicalUrl(location.slug),
      siteName: site.name,
      locale: "en_AU",
      type: "website",
      images: [
        {
          url: "/gt-motorsports-logo.webp",
          width: 1073,
          height: 440,
          alt: "G&T Motorsports",
        },
      ],
    },
  };
}

export function LocationPageLayout({ slug }: { slug: string }) {
  const location = getLocationPage(slug);

  if (!location) {
    notFound();
  }

  return (
    <PageShell>
      <LocationStructuredData location={location} />
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
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap gap-2 text-sm font-bold text-white/60">
              <li>
                <Link className="focus-ring hover:text-white" href="/">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link className="focus-ring hover:text-white" href="/locations">
                  Locations
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white" aria-current="page">
                {location.suburb}
              </li>
            </ol>
          </nav>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-brake">
            {location.suburb} mechanic services
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] text-white sm:text-6xl">
            {location.h1}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">
            G&T Motorsports supports customers from {location.suburb} with
            professional vehicle servicing, diagnostics and mechanical repairs
            from our Clyde North workshop. We service all makes and models and
            focus on clear advice, quality workmanship and practical booking
            options.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/book-online">Book Online</ButtonLink>
            <ButtonLink href={site.phoneHref} variant="secondary">
              Call {site.phone}
            </ButtonLink>
            <a
              className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md border border-white/20 bg-white/5 px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:border-brake hover:bg-brake"
              href={site.directionsHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white text-asphalt">
        <div className="container-shell grid gap-3 py-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            `${location.distance} from ${location.suburb}`,
            `${location.driveTime} drive`,
            "All makes and models",
            "Mercedes-Benz DSR updates",
          ].map((item) => (
            <div className="rounded-md border border-black/10 bg-white p-4" key={item}>
              <span className="mb-3 block h-1 w-10 bg-brake" />
              <p className="text-sm font-black uppercase tracking-wide">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-asphalt py-16 sm:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="Local customers"
            title={`Servicing Customers From ${location.suburb}`}
            copy={location.localIntro}
          />
          <div className="rounded-md border border-white/10 bg-black/35 p-6">
            <p className="text-sm leading-7 text-white/72">
              {location.localContext}
            </p>
            <p className="mt-4 text-sm leading-7 text-white/72">
              The drive from {location.suburb} to G&T Motorsports is
              approximately {location.distance}, usually around{" "}
              {location.driveTime} depending on traffic, route and time of day.
              Appointments are recommended so the workshop can plan your
              drop-off or initial assessment.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-bold text-white/70">
              <Link className="focus-ring hover:text-white" href="/services">
                View services
              </Link>
              <Link className="focus-ring hover:text-white" href="/contact">
                Contact G&T Motorsports
              </Link>
              <Link className="focus-ring hover:text-white" href="/book-online">
                Book online
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-16 sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Common reasons to book"
            title={`Vehicle Servicing for ${location.suburb} Drivers`}
            copy={location.serviceAngle}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {location.customerNeeds.map((need) => (
              <article className="rounded-md border border-white/10 bg-white/[0.04] p-5" key={need}>
                <span className="mb-5 block h-1 w-12 bg-brake" />
                <h2 className="text-xl font-black text-white">{need}</h2>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Services"
            title="All Makes and Models Serviced"
            copy={`G&T Motorsports services a broad range of vehicles for ${location.suburb} customers, including family cars, work vehicles, four-wheel drives, European vehicles and performance vehicles. The workshop uses suitable parts, oils and fluids based on the vehicle and manufacturer requirements where applicable.`}
            tone="light"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((service) => (
              <Link
                className="focus-ring rounded-md border border-black/10 bg-neutral-50 p-5 transition hover:-translate-y-1 hover:border-brake"
                href={service.href}
                key={service.label}
              >
                <span className="mb-5 block h-1 w-12 bg-brake" />
                <h2 className="text-xl font-black">{service.label}</h2>
                <p className="mt-3 text-sm leading-6 text-black/65">
                  {service.copy}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-asphalt py-16 sm:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            eyebrow="Mercedes-Benz DSR"
            title="Mercedes-Benz Digital Service Record Updates"
            copy="G&T Motorsports can update eligible Mercedes-Benz Digital Service Records after the required scheduled service is completed. This access is for eligible Mercedes-Benz vehicles only; the workshop does not claim online service-record access for other manufacturers."
          />
          <div className="rounded-md border border-white/10 bg-black/35 p-6">
            <h2 className="text-2xl font-black text-white">
              Useful for eligible Mercedes-Benz owners from {location.suburb}
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/72">
              If you drive a Mercedes-Benz and need scheduled servicing, mention
              the Digital Service Record requirement when booking so
              compatibility can be checked. G&T Motorsports is an independent
              automotive workshop and does not claim Mercedes-Benz affiliation,
              dealership status or manufacturer certification.
            </p>
            <div className="mt-6">
              <ButtonLink href="/services/mercedes-benz-servicing" variant="ghost">
                Mercedes-Benz Servicing
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeader
              eyebrow="Why choose us"
              title={`Why ${location.suburb} Customers Choose G&T Motorsports`}
              copy="Customers choose G&T Motorsports for honest advice, careful workmanship and convenient communication before additional repairs proceed."
              tone="light"
            />
            <div className="mt-8 grid gap-4">
              {location.whyChoose.map((reason) => (
                <div className="rounded-md border border-black/10 bg-neutral-50 p-5" key={reason}>
                  <span className="mb-4 block h-1 w-10 bg-brake" />
                  <h2 className="text-lg font-black">{reason}</h2>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-md border border-black/10 bg-neutral-50 p-6">
            <h2 className="text-2xl font-black">What to expect when you book</h2>
            <div className="mt-5 grid gap-4 text-sm leading-7 text-black/68">
              <p>
                Book online, call the workshop or contact the team if you are
                unsure which service your vehicle needs. Share your vehicle
                make, model, registration, current kilometres and the service or
                symptom you want checked.
              </p>
              <p>
                When the vehicle arrives at 47B Palladium Circuit, Clyde North
                VIC 3978, the team can inspect the vehicle and explain the
                findings. Any additional work is discussed before it proceeds,
                helping you make an informed decision.
              </p>
              <p>
                Walk-ins are welcome when availability allows, but waiting times
                depend on the work required and current workshop workload.
                Booking ahead is recommended for customers travelling from{" "}
                {location.suburb}.
              </p>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/book-online">Book Online</ButtonLink>
              <ButtonLink
                href={site.phoneHref}
                variant="ghost"
                className="border-black/20 text-asphalt hover:text-white"
              >
                Call {site.phone}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-16 sm:py-24">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeader
              eyebrow="Find us"
              title={`Directions From ${location.suburb}`}
              copy={`G&T Motorsports is located at ${site.address}. Use the map for directions from ${location.suburb}, or call the workshop if you need help planning your visit.`}
            />
            <div className="overflow-hidden rounded-md border border-white/10 bg-neutral-100">
              <iframe
                className="h-[380px] w-full border-0 sm:h-[460px]"
                src={mapEmbedUrl}
                title={`Google Map showing G&T Motorsports for customers from ${location.suburb}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brake py-12 text-white">
        <div className="container-shell flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/80">
              Ready to book?
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
              Book a Mechanic Near {location.suburb}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/85">
              Whether your vehicle needs scheduled servicing, fault diagnosis,
              brake repairs, logbook servicing or general mechanical repairs,
              G&T Motorsports can help arrange an inspection or booking.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/book-online" variant="secondary">
              Book Online
            </ButtonLink>
            <ButtonLink href={site.phoneHref} variant="ghost">
              Call {site.phone}
            </ButtonLink>
            <ButtonLink href="/contact" variant="ghost">
              Contact
            </ButtonLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function LocationStructuredData({ location }: { location: LocationPage }) {
  const canonical = locationCanonicalUrl(location.slug);
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutoRepair"],
    "@id": `${site.url}/#business`,
    name: site.name,
    url: site.url,
    telephone: site.phoneInternational,
    email: site.email,
    logo: site.logo,
    image: `${site.url}/workshop-hero.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "47B Palladium Circuit",
      addressLocality: "Clyde North",
      addressRegion: "VIC",
      postalCode: "3978",
      addressCountry: "AU",
    },
    areaServed: {
      "@type": "Place",
      name: location.suburb,
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: `${site.url}/locations`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: location.suburb,
        item: canonical,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
