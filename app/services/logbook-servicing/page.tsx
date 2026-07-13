import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PageShell } from "@/components/PageShell";
import { SectionHeader } from "@/components/SectionHeader";
import { mercedesDigitalServiceRecord } from "@/lib/digital-service-records";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Logbook Servicing Clyde North | G&T Motorsports",
  description:
    "Book professional logbook servicing in Clyde North for all makes and models, including eligible Mercedes-Benz Digital Service Record updates. Clear advice, quality parts and convenient online booking.",
  alternates: {
    canonical: "https://gtmotorsports.com.au/services/logbook-servicing",
  },
};

const trustItems = [
  "All Makes and Models",
  "Mercedes-Benz Digital Service Record Updates",
  "Quality Oils and Parts",
  "Clear Quotes Before Work Begins",
];

const includedItems = [
  "Engine oil and filter replacement",
  "Fluid level and condition checks",
  "Brake inspection",
  "Tyre condition and pressure checks",
  "Steering and suspension inspection",
  "Battery and charging-system check",
  "Cooling-system inspection",
  "Lights, wipers and general safety checks",
  "Diagnostic scan where appropriate",
  "Service-book update where applicable",
  "Clear report of any recommended repairs",
];

const reasons = [
  "Helps maintain reliability",
  "Can identify developing faults early",
  "Supports accurate service history",
  "Helps protect resale value",
  "Keeps maintenance aligned with scheduled intervals",
  "Reduces the risk of preventable breakdowns",
];

const whyChoose = [
  {
    title: "Honest Advice",
    copy: "We explain what is due now, what may be required soon and what can wait.",
  },
  {
    title: "Quality Workmanship",
    copy: "Every service is completed carefully using suitable oils, filters and parts.",
  },
  {
    title: "Clear Communication",
    copy: "Any additional work is discussed before it proceeds.",
  },
  {
    title: "Convenient Booking",
    copy: "Book online, call ahead or visit as a walk-in when workshop availability allows.",
  },
];

const faqs = [
  {
    question: "What is a logbook service?",
    answer:
      "A logbook service is scheduled maintenance completed in line with the relevant manufacturer service schedule. It usually includes checks, replacements and inspections based on the vehicle's age, kilometres and service requirements.",
  },
  {
    question: "Can an independent mechanic carry out logbook servicing?",
    answer:
      "An independent mechanic can carry out logbook servicing when the work is completed in line with the relevant manufacturer schedule using suitable parts, oils and fluids. G&T Motorsports can discuss what is due for your vehicle before work begins.",
  },
  {
    question: "How often should I book a logbook service?",
    answer:
      "Service intervals vary by vehicle and may depend on kilometres travelled, time since the last service, driving conditions and the manufacturer schedule. Check your service book or contact the workshop for guidance.",
  },
  {
    question: "What happens if extra repairs are found?",
    answer:
      "If additional work is recommended, the team will explain what has been found and discuss the next step before extra repairs proceed.",
  },
  {
    question: "Do you service all makes and models?",
    answer:
      "Yes. G&T Motorsports services all makes and models, including family vehicles, work vehicles, four-wheel drives and performance vehicles.",
  },
  {
    question: "Can you update my Mercedes-Benz online service history?",
    answer:
      "Yes. G&T Motorsports can update the Mercedes-Benz Digital Service Record (DSR) for eligible vehicles after completing the required scheduled service. Contact us before your appointment if you would like us to confirm compatibility with your vehicle.",
  },
  {
    question: "Can I wait while my vehicle is serviced?",
    answer:
      "Waiting may be possible for some services, depending on the work required and current workshop workload. Booking ahead is recommended so the team can advise what to expect.",
  },
  {
    question: "Do you accept walk-ins?",
    answer:
      "Walk-ins are welcome, but wait times depend on the work required and current workshop availability. Booking ahead is recommended.",
  },
];

const nearbySuburbs = [
  "Clyde North",
  "Clyde",
  "Cranbourne",
  "Berwick",
  "Officer",
  "Narre Warren",
  "Hampton Park",
  "Pakenham",
];

function StructuredData() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}/services/logbook-servicing#service`,
    name: "Logbook servicing in Clyde North",
    description:
      "Logbook servicing completed in line with the relevant manufacturer schedule using suitable parts, oils and fluids, with eligible Mercedes-Benz Digital Service Record updates available after required scheduled servicing.",
    provider: {
      "@type": "AutoRepair",
      "@id": `${site.url}/#business`,
      name: site.name,
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
    },
    areaServed: nearbySuburbs.map((suburb) => ({
      "@type": "Place",
      name: suburb,
    })),
    serviceType: "Logbook servicing",
    url: `${site.url}/services/logbook-servicing`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: site.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${site.url}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Logbook Servicing",
        item: `${site.url}/services/logbook-servicing`,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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

export default function LogbookServicingPage() {
  return (
    <PageShell>
      <StructuredData />
      <section className="relative overflow-hidden bg-black py-16 sm:py-24">
        <div className="absolute inset-0 bg-[url('/workshop-hero.png')] bg-cover bg-center opacity-20" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/92 to-black/70" aria-hidden="true" />
        <div className="container-shell relative">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-brake">
            LOGBOOK SERVICING CLYDE NORTH
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] text-white sm:text-6xl">
            Professional Logbook Servicing in Clyde North
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">
            Keep your vehicle maintained in line with its scheduled service
            requirements with professional logbook servicing from G&T
            Motorsports. We service all makes and models using suitable oils,
            fluids, filters and replacement parts, with clear advice before any
            additional work is carried out.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/book-online">Book Logbook Service</ButtonLink>
            <ButtonLink href={site.phoneHref} variant="secondary">
              Call {site.phone}
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-white text-asphalt">
        <div className="container-shell grid gap-3 py-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div className="rounded-md border border-black/10 bg-white p-4" key={item}>
              <span className="mb-3 block h-1 w-10 bg-brake" />
              <p className="text-sm font-black uppercase tracking-wide">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-asphalt py-16 sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Included"
            title="What Is Included in a Logbook Service?"
            copy="Logbook servicing completed in line with the relevant manufacturer schedule using suitable parts, oils and fluids."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {includedItems.map((item) => (
              <div className="rounded-md border border-white/10 bg-white/[0.04] p-5" key={item}>
                <span className="mb-4 block h-1 w-10 bg-brake" />
                <h3 className="text-lg font-black text-white">{item}</h3>
              </div>
            ))}
          </div>
          <p className="mt-6 rounded-md border border-white/10 bg-black/35 p-5 text-sm leading-6 text-white/70">
            The exact items depend on the vehicle's age, kilometres and
            manufacturer service schedule.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeader
            eyebrow="Maintenance"
            title="Why Regular Logbook Servicing Matters"
            copy="Regular servicing gives you a clearer picture of your vehicle's condition and helps keep maintenance aligned with scheduled intervals."
            tone="light"
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div className="rounded-md border border-black/10 bg-neutral-50 p-5" key={reason}>
                <span className="mb-4 block h-1 w-10 bg-brake" />
                <h3 className="text-lg font-black">{reason}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-16 sm:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex rounded-md border border-brake bg-brake/10 px-4 py-3 text-xs font-black uppercase tracking-[0.2em] text-brake">
              {mercedesDigitalServiceRecord.label} Updates Available
            </p>
            <SectionHeader
              eyebrow="Mercedes-Benz DSR"
              title="Mercedes-Benz Digital Service Record Updates"
              copy="Own a Mercedes-Benz? G&T Motorsports can update the Mercedes-Benz Digital Service Record (DSR) for eligible vehicles after completing the required scheduled service."
            />
          </div>
          <div className="rounded-md border border-white/10 bg-white/[0.04] p-6">
            <p className="text-sm leading-6 text-white/72">
              This helps keep the vehicle's online Mercedes-Benz service
              history up to date while allowing customers to use an independent
              local workshop.
            </p>
            <p className="mt-4 text-sm leading-6 text-white/72">
              Customers should let us know when booking so we can confirm
              whether their vehicle is eligible for a Digital Service Record
              update.
            </p>
            <p className="mt-4 text-xs font-bold uppercase leading-5 tracking-wide text-white/45">
              G&T Motorsports is not claiming Mercedes-Benz affiliation,
              authorisation, certification or endorsement.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black py-16 sm:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <SectionHeader
            eyebrow="Service Timing"
            title="When Is Your Next Service Due?"
            copy="Service intervals vary by vehicle and may depend on kilometres travelled, time since the last service, driving conditions, towing or heavy-use operation and the manufacturer schedule."
          />
          <div className="rounded-md border border-white/10 bg-white/[0.04] p-6">
            <h3 className="text-2xl font-black text-white">
              Not sure when your next service is due?
            </h3>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Call us and we can help check your service schedule.
            </p>
            <div className="mt-6">
              <ButtonLink href={site.phoneHref} variant="ghost">
                Call {site.phone}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-asphalt py-16 sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Why Choose G&T Motorsports"
            copy="Straightforward advice, careful servicing and convenient booking for drivers across Clyde North and nearby suburbs."
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item) => (
              <article className="rounded-md border border-white/10 bg-black/35 p-5" key={item.title}>
                <span className="mb-5 block h-1 w-12 bg-brake" />
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/66">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="FAQ"
            title="Logbook Servicing FAQs"
            copy="Helpful answers for common logbook servicing questions."
            tone="light"
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {faqs.map((faq) => (
              <article className="rounded-md border border-black/10 bg-neutral-50 p-5" key={faq.question}>
                <h3 className="text-xl font-black">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-black/65">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-16 sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Local Service Area"
            title="Logbook Servicing for Clyde North and Nearby Suburbs"
            copy="G&T Motorsports welcomes customers from Clyde North, Clyde, Cranbourne, Berwick, Officer, Narre Warren, Hampton Park and Pakenham for scheduled servicing and practical vehicle maintenance advice."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {nearbySuburbs.map((suburb) => (
              <span className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-white/80" key={suburb}>
                {suburb}
              </span>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-4 text-sm font-bold text-white/70">
            <a className="focus-ring hover:text-white" href="/services">All Services</a>
            <a className="focus-ring hover:text-white" href="/book-online">Book Online</a>
            <a className="focus-ring hover:text-white" href="/contact">Contact</a>
            <a className="focus-ring hover:text-white" href="/reviews">Reviews</a>
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
              Book Your Next Logbook Service
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/85">
              Keep your vehicle maintained, reliable and ready for the road.
              Book online or call G&T Motorsports today.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/book-online" variant="secondary">Book Online</ButtonLink>
            <ButtonLink href={site.phoneHref} variant="ghost">Call Now</ButtonLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
