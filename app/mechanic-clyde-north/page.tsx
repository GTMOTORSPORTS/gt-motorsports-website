import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { PageShell } from "@/components/PageShell";
import { SectionHeader } from "@/components/SectionHeader";
import { customerReviews } from "@/lib/reviews";
import { servicePages } from "@/lib/service-pages";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mechanic Clyde North | Car Servicing & Repairs | G&T Motorsports",
  description:
    "Looking for a mechanic in Clyde North? G&T Motorsports provides car servicing, diagnostics, brake repairs and mechanical repairs for all makes and models. Book online today.",
  alternates: {
    canonical: "https://gtmotorsports.com.au/mechanic-clyde-north",
  },
  openGraph: {
    title: "Mechanic Clyde North | Car Servicing & Repairs | G&T Motorsports",
    description:
      "Looking for a mechanic in Clyde North? G&T Motorsports provides car servicing, diagnostics, brake repairs and mechanical repairs for all makes and models. Book online today.",
    url: "https://gtmotorsports.com.au/mechanic-clyde-north",
    siteName: site.name,
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/workshop-hero.png",
        width: 1680,
        height: 944,
        alt: "G&T Motorsports workshop in Clyde North",
      },
    ],
  },
};

const mapEmbedUrl =
  "https://www.google.com/maps?q=47B%20Palladium%20Circuit%2C%20Clyde%20North%20VIC%203978&output=embed";

const localTrustPoints = [
  "Clyde North Workshop",
  "All Makes and Models",
  "Online Booking",
  "Walk-Ins Welcome When Available",
  "Mercedes-Benz DSR Updates for Eligible Vehicles",
];

const serviceSlugs = [
  "general-car-servicing",
  "logbook-servicing",
  "brake-repairs",
  "vehicle-diagnostics",
  "suspension-steering",
  "cooling-system-repairs",
  "battery-charging-systems",
  "air-conditioning",
  "clutch-transmission",
  "engine-repairs",
  "pre-purchase-inspections",
  "mercedes-benz-servicing",
];

const localServices = serviceSlugs
  .map((slug) => servicePages.find((service) => service.slug === slug))
  .filter((service): service is (typeof servicePages)[number] => Boolean(service));

const whyChoose = [
  {
    title: "Honest Advice",
    copy: "We explain what requires attention now, what may need monitoring and what can reasonably wait.",
  },
  {
    title: "Clear Quotes",
    copy: "Additional repairs are discussed before work proceeds, helping customers make informed decisions.",
  },
  {
    title: "Quality Workmanship",
    copy: "Services and repairs are completed carefully using suitable oils, fluids, filters and replacement parts.",
  },
  {
    title: "Convenient Booking",
    copy: "Customers can book online, call the workshop or visit as a walk-in when availability allows.",
  },
  {
    title: "Modern Fault Finding",
    copy: "Diagnostic information is combined with practical testing instead of relying only on stored fault codes.",
  },
  {
    title: "All Makes and Models",
    copy: "We service a broad range of family cars, work vehicles, four-wheel drives and performance vehicles.",
  },
];

const nearbyAreas = [
  "Clyde",
  "Cranbourne",
  "Cranbourne East",
  "Berwick",
  "Officer",
  "Narre Warren",
  "Hampton Park",
  "Pakenham",
];

const bookingSteps = [
  "Choose an available booking or drop-off time online.",
  "Tell us your vehicle details and the service or issue.",
  "Bring the vehicle to the Clyde North workshop.",
  "We inspect the vehicle and discuss any additional work before proceeding.",
];

const faqs = [
  {
    question: "Where is G&T Motorsports located?",
    answer:
      "G&T Motorsports is located at 47B Palladium Circuit, Clyde North VIC 3978.",
  },
  {
    question: "Do I need an appointment?",
    answer:
      "Appointments are recommended because they help the workshop plan your drop-off, inspection and communication around the work required.",
  },
  {
    question: "Do you accept walk-ins?",
    answer:
      "Walk-ins are welcome, but waiting times depend on the work required and current workshop availability. Booking ahead is recommended where possible.",
  },
  {
    question: "What makes and models do you service?",
    answer:
      "G&T Motorsports services all makes and models, including family vehicles, work vehicles, four-wheel drives and performance vehicles.",
  },
  {
    question: "Can you update a Mercedes-Benz Digital Service Record?",
    answer:
      "G&T Motorsports can update the Mercedes-Benz Digital Service Record for eligible vehicles after completing the required scheduled service. Please mention this when booking so compatibility can be checked.",
  },
  {
    question: "Can I book online?",
    answer:
      "Yes. You can book online for a vehicle drop-off or initial assessment through the Book Online page.",
  },
  {
    question: "Will you contact me before additional repairs?",
    answer:
      "Yes. Additional repairs are discussed before work proceeds so you can make an informed decision.",
  },
  {
    question: "What areas do you service?",
    answer:
      "The workshop is based in Clyde North and also receives customers from Clyde, Cranbourne, Cranbourne East, Berwick, Officer, Narre Warren, Hampton Park, Pakenham and nearby areas.",
  },
  {
    question: "Can I wait while my vehicle is inspected?",
    answer:
      "Waiting may be possible for some inspections, depending on the work required and current workshop workload. Ask the team when booking.",
  },
  {
    question: "What should I do if I am unsure which service I need?",
    answer:
      "Tell G&T Motorsports what your vehicle is doing when you book or call the workshop. The team can help arrange an inspection and advise the next step.",
  },
];

function ExternalIcon() {
  return (
    <span
      aria-hidden="true"
      className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full border border-current text-[10px] font-black"
    >
      G&#8599;
    </span>
  );
}

function LocalStructuredData() {
  const canonical = `${site.url}/mechanic-clyde-north`;
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${site.url}/#business`,
    name: site.name,
    url: canonical,
    telephone: site.phoneInternational,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "47B Palladium Circuit",
      addressLocality: "Clyde North",
      addressRegion: "VIC",
      postalCode: "3978",
      addressCountry: "AU",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
    areaServed: ["Clyde North", ...nearbyAreas].map((area) => ({
      "@type": "Place",
      name: area,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Mechanic Clyde North",
        item: canonical,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

export default function MechanicClydeNorthPage() {
  return (
    <PageShell>
      <LocalStructuredData />
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
            MECHANIC CLYDE NORTH
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] text-white sm:text-6xl">
            Trusted Mechanic in Clyde North
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">
            G&T Motorsports provides professional vehicle servicing,
            diagnostics and mechanical repairs for drivers in Clyde North and
            surrounding suburbs. From scheduled maintenance and brake repairs to
            fault finding and major mechanical work, we focus on clear advice,
            careful workmanship and dependable service for all makes and models.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/book-online">Book Online</ButtonLink>
            <ButtonLink href={site.phoneHref} variant="secondary">
              Call {site.phone}
            </ButtonLink>
            <a
              className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md border border-white/20 px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:border-brake hover:bg-brake"
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
        <div className="container-shell grid gap-3 py-6 sm:grid-cols-2 lg:grid-cols-5">
          {localTrustPoints.map((point) => (
            <div className="rounded-md border border-black/10 bg-white p-4" key={point}>
              <span className="mb-3 block h-1 w-10 bg-brake" />
              <p className="text-sm font-black uppercase tracking-wide">{point}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-asphalt py-16 sm:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="Local workshop"
            title="Your Local Automotive Workshop in Clyde North"
            copy="Based at Palladium Circuit, G&T Motorsports is convenient for local residents, families, commuters and businesses who need practical servicing and repair support close to home."
          />
          <div className="rounded-md border border-white/10 bg-black/35 p-6">
            <p className="text-sm leading-7 text-white/72">
              The workshop services and repairs a broad range of vehicles, with
              clear communication before additional work proceeds. Appointments
              are recommended, and walk-ins are welcome when availability allows.
              Wait times depend on the job, parts availability and current
              workshop workload.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-bold text-white/70">
              <Link className="focus-ring hover:text-white" href="/services">
                Explore services
              </Link>
              <Link className="focus-ring hover:text-white" href="/contact">
                Contact the workshop
              </Link>
              <Link className="focus-ring hover:text-white" href="/reviews">
                Read customer feedback
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-16 sm:py-24">
        <div className="container-shell">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              eyebrow="Services"
              title="Mechanical Services Available in Clyde North"
              copy="Choose the service that best matches your vehicle needs, or contact the team if you are unsure where to start."
            />
            <ButtonLink href="/services" variant="ghost" className="w-fit">
              View All Services
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {localServices.map((service) => (
              <Link
                className="focus-ring rounded-md border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-brake"
                href={`/services/${service.slug}`}
                key={service.slug}
              >
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-brake text-xs font-black text-white">
                  {service.icon}
                </span>
                <h3 className="text-xl font-black text-white">{service.name}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  {service.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Why choose us"
            title="Why Clyde North Drivers Choose G&T Motorsports"
            copy="A local workshop experience built around straightforward advice and careful workmanship."
            tone="light"
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item) => (
              <article className="rounded-md border border-black/10 bg-neutral-50 p-5" key={item.title}>
                <span className="mb-5 block h-1 w-12 bg-brake" />
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/65">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-asphalt py-16 sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Reviews"
            title="Feedback From G&T Motorsports Customers"
            copy="Genuine customer feedback currently displayed on the website."
            align="center"
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {customerReviews.map((review) => (
              <article
                className="rounded-md border border-white/10 bg-white/[0.045] p-6"
                key={review.text}
              >
                <div className="text-lg tracking-[0.16em] text-brake" aria-label="Five-star Google review">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>
                <blockquote className="mt-6 text-base leading-7 text-white/82">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <p className="mt-6 text-sm font-black uppercase tracking-wide text-white">
                  G&T Motorsports Customer
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md border border-white/20 bg-white px-5 py-3 text-sm font-bold uppercase tracking-wide text-asphalt transition hover:border-brake hover:bg-brake hover:text-white"
              href={site.googleReviewsHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Our Google Reviews
              <ExternalIcon />
            </a>
            <a
              className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md bg-brake px-5 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-glow transition hover:bg-white hover:text-asphalt"
              href={site.googleReviewsHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Leave a Google Review
              <ExternalIcon />
            </a>
            <ButtonLink href="/reviews" variant="ghost">
              Reviews Page
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeader
                eyebrow="Visit us"
                title="Visit Our Clyde North Workshop"
                copy="Appointments are recommended. Walk-ins are welcome, but waiting times depend on the work required and current workshop availability."
                tone="light"
              />
              <div className="mt-8 grid gap-4 text-sm">
                <a className="focus-ring rounded-md border border-black/10 p-5 hover:border-brake" href={site.directionsHref} target="_blank" rel="noopener noreferrer">
                  <span className="block text-xs font-bold uppercase tracking-[0.22em] text-black/45">
                    Address
                  </span>
                  <span className="mt-2 block text-lg font-black">{site.address}</span>
                </a>
                <a className="focus-ring rounded-md border border-black/10 p-5 hover:border-brake" href={site.phoneHref}>
                  <span className="block text-xs font-bold uppercase tracking-[0.22em] text-black/45">
                    Phone
                  </span>
                  <span className="mt-2 block text-lg font-black">{site.phone}</span>
                </a>
                <a className="focus-ring rounded-md border border-black/10 p-5 hover:border-brake" href={site.emailHref}>
                  <span className="block text-xs font-bold uppercase tracking-[0.22em] text-black/45">
                    Email
                  </span>
                  <span className="mt-2 block text-lg font-black">{site.email}</span>
                </a>
                <div className="rounded-md border border-black/10 p-5">
                  <span className="block text-xs font-bold uppercase tracking-[0.22em] text-black/45">
                    Opening Hours
                  </span>
                  <dl className="mt-3 grid gap-2">
                    {site.hours.map(([day, hours]) => (
                      <div className="flex justify-between gap-6" key={day}>
                        <dt className="font-bold">{day}</dt>
                        <dd className="text-black/65">{hours}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href={site.directionsHref} className="w-full sm:w-auto">
                    Get Directions
                  </ButtonLink>
                  <ButtonLink href="/book-online" variant="ghost" className="border-black/20 text-asphalt hover:text-white">
                    Book Online
                  </ButtonLink>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-md border border-black/10 bg-neutral-100">
              <iframe
                className="h-[420px] w-full border-0 sm:h-[520px]"
                src={mapEmbedUrl}
                title="Google Map showing G&T Motorsports at 47B Palladium Circuit, Clyde North"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-16 sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Nearby areas"
            title="Conveniently Located for Melbourne's South-East"
            copy="The Clyde North workshop also receives customers from nearby suburbs across Melbourne's south-east, including the areas below."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {nearbyAreas.map((area) => (
              <span className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-white/80" key={area}>
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-asphalt py-16 sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Booking process"
            title="Booking Your Vehicle Is Easy"
            copy="The selected online time is generally for vehicle drop-off or initial assessment. Completion time depends on the work required, parts availability and workshop workload."
            align="center"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {bookingSteps.map((step, index) => (
              <article className="rounded-md border border-white/10 bg-black/35 p-5" key={step}>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-brake">
                  Step {index + 1}
                </p>
                <h3 className="mt-5 text-lg font-black leading-6 text-white">{step}</h3>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <ButtonLink href="/book-online">Book Online</ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="FAQ"
            title="Mechanic Clyde North FAQs"
            copy="Helpful answers before visiting or booking with G&T Motorsports."
            tone="light"
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {faqs.map((faq) => (
              <details
                className="group rounded-md border border-black/10 bg-neutral-50 p-5 open:border-brake"
                key={faq.question}
              >
                <summary className="focus-ring cursor-pointer list-none text-xl font-black text-asphalt">
                  {faq.question}
                </summary>
                <p className="mt-4 text-sm leading-6 text-black/65">{faq.answer}</p>
              </details>
            ))}
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
              Book a Mechanic in Clyde North
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/85">
              Whether your vehicle needs scheduled servicing, fault diagnosis or
              mechanical repairs, contact G&T Motorsports to arrange an
              inspection or booking.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/book-online" variant="secondary">
              Book Online
            </ButtonLink>
            <ButtonLink href={site.phoneHref} variant="ghost">
              Call Now
            </ButtonLink>
            <ButtonLink href={site.directionsHref} variant="ghost">
              Get Directions
            </ButtonLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
