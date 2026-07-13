import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PageShell } from "@/components/PageShell";
import { SectionHeader } from "@/components/SectionHeader";
import { mercedesDigitalServiceRecord } from "@/lib/digital-service-records";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mercedes-Benz Servicing Clyde North | G&T Motorsports",
  description:
    "Book Mercedes-Benz servicing in Clyde North with G&T Motorsports. Independent workshop servicing, mechanical repairs and eligible Mercedes-Benz Digital Service Record updates.",
  alternates: {
    canonical: "https://gtmotorsports.com.au/services/mercedes-benz-servicing",
  },
};

const serviceItems = [
  "Scheduled servicing",
  "Oil and filter servicing",
  "Brake inspections and repairs",
  "Cooling-system checks",
  "Battery and charging-system checks",
  "Suspension and steering inspections",
  "Diagnostic scanning",
  "General mechanical repairs",
  "Pre-purchase inspections",
  "Digital Service Record updates for eligible vehicles",
];

const whyChoose = [
  {
    title: "Clear Advice",
    copy: "We explain what is due, what has been found and what should happen next before additional work proceeds.",
  },
  {
    title: "Quality Workmanship",
    copy: "Servicing and repairs are completed carefully using suitable oils, fluids, filters and replacement parts.",
  },
  {
    title: "Local Clyde North Workshop",
    copy: "A convenient independent workshop for drivers in Clyde North and Melbourne's south-east.",
  },
  {
    title: "Digital Service Record Capability",
    copy: "Eligible Mercedes-Benz Digital Service Records can be updated after the required scheduled service is completed.",
  },
];

const faqs = [
  {
    question: "Can you update my Mercedes-Benz Digital Service Record?",
    answer:
      "Yes. G&T Motorsports can update the Mercedes-Benz Digital Service Record for eligible vehicles after completing the required scheduled service. Please mention this when booking so compatibility can be confirmed before your appointment.",
  },
  {
    question: "Are you affiliated with Mercedes-Benz?",
    answer:
      "No. G&T Motorsports is an independent automotive workshop and is not affiliated with, endorsed by or certified by Mercedes-Benz.",
  },
  {
    question: "Do you service all Mercedes-Benz models?",
    answer:
      "G&T Motorsports services Mercedes-Benz vehicles as part of its broader all makes and models servicing. Contact the workshop with your model and service requirements so the team can confirm the best next step.",
  },
  {
    question: "Can I book online?",
    answer:
      "Yes. You can book online for vehicle drop-off or an initial assessment, or call the workshop if you prefer to discuss your vehicle first.",
  },
  {
    question: "Do you accept walk-ins?",
    answer:
      "Walk-ins are welcome, but wait times depend on the work required and current workshop availability. Booking ahead is recommended.",
  },
  {
    question: "What happens if additional repairs are required?",
    answer:
      "If additional repairs are recommended, G&T Motorsports will explain the findings and discuss the work before it proceeds.",
  },
];

const nearbySuburbs = [
  "Clyde North",
  "Cranbourne",
  "Berwick",
  "Officer",
  "Narre Warren",
  "Pakenham",
];

function StructuredData() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.url}/services/mercedes-benz-servicing#service`,
    name: "Mercedes-Benz servicing in Clyde North",
    description:
      "Independent Mercedes-Benz servicing, mechanical repairs and eligible Mercedes-Benz Digital Service Record updates in Clyde North.",
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
    serviceType: "Mercedes-Benz servicing",
    url: `${site.url}/services/mercedes-benz-servicing`,
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
        name: "Mercedes-Benz Servicing",
        item: `${site.url}/services/mercedes-benz-servicing`,
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

export default function MercedesBenzServicingPage() {
  return (
    <PageShell>
      <StructuredData />
      <section className="relative overflow-hidden bg-black py-16 sm:py-24">
        <div className="absolute inset-0 bg-[url('/workshop-hero.png')] bg-cover bg-center opacity-20" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/92 to-black/70" aria-hidden="true" />
        <div className="container-shell relative">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-brake">
            MERCEDES-BENZ SERVICING CLYDE NORTH
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] text-white sm:text-6xl">
            Mercedes-Benz Servicing in Clyde North
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">
            G&T Motorsports provides scheduled servicing, maintenance and
            mechanical repairs for Mercedes-Benz vehicles from our Clyde North
            workshop. We can also update the Mercedes-Benz Digital Service
            Record for eligible vehicles after completing the required scheduled
            service.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/book-online">Book Mercedes-Benz Service</ButtonLink>
            <ButtonLink href={site.phoneHref} variant="secondary">
              Call {site.phone}
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Independent Workshop"
            title="Independent Mercedes-Benz Servicing"
            copy="G&T Motorsports is an independent automotive workshop and is not affiliated with or endorsed by Mercedes-Benz. We provide professional servicing and repairs for Mercedes-Benz vehicles using suitable oils, fluids, filters and replacement parts."
            tone="light"
          />
        </div>
      </section>

      <section className="bg-asphalt py-16 sm:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex rounded-md border border-brake bg-brake/10 px-4 py-3 text-xs font-black uppercase tracking-[0.2em] text-brake">
              {mercedesDigitalServiceRecord.label}
            </p>
            <SectionHeader
              eyebrow="Digital Service Record"
              title="Mercedes-Benz Digital Service Record Updates"
              copy="Available for eligible vehicles after the required scheduled service is completed."
            />
          </div>
          <div className="rounded-md border border-white/10 bg-black/35 p-6">
            <ul className="grid gap-3 text-sm leading-6 text-white/72">
              <li>Available for eligible vehicles.</li>
              <li>Updated after the required scheduled service is completed.</li>
              <li>Helps maintain online service history.</li>
              <li>Customers should mention this requirement when booking.</li>
              <li>Compatibility should be confirmed before appointment.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-black py-16 sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Services"
            title="Mercedes-Benz Services We Can Provide"
            copy="Practical maintenance and mechanical support from an independent local workshop."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceItems.map((item) => (
              <div className="rounded-md border border-white/10 bg-white/[0.04] p-5" key={item}>
                <span className="mb-4 block h-1 w-10 bg-brake" />
                <h3 className="text-lg font-black text-white">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Why Choose G&T Motorsports"
            copy="Clear advice, careful workmanship and convenient local booking."
            tone="light"
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
            eyebrow="FAQ"
            title="Mercedes-Benz Servicing FAQs"
            copy="Helpful answers before booking your Mercedes-Benz service."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {faqs.map((faq) => (
              <article className="rounded-md border border-white/10 bg-black/35 p-5" key={faq.question}>
                <h3 className="text-xl font-black text-white">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-white/66">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-16 sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Local Area"
            title="Mercedes-Benz Servicing for Clyde North and Nearby Suburbs"
            copy="G&T Motorsports welcomes Mercedes-Benz servicing enquiries from Clyde North, Cranbourne, Berwick, Officer, Narre Warren and Pakenham."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {nearbySuburbs.map((suburb) => (
              <span className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-white/80" key={suburb}>
                {suburb}
              </span>
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
              Book Your Mercedes-Benz Service
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/85">
              Book online or call G&T Motorsports to arrange servicing for your
              Mercedes-Benz vehicle.
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
