import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { PageShell } from "@/components/PageShell";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

const canonical = `${site.url}/roadworthy-certificate`;

export const metadata: Metadata = {
  title: {
    absolute:
      "Roadworthy Certificate Clyde North | RWC Inspections | G&T Motorsports",
  },
  description:
    "Need a Roadworthy Certificate inspection near Clyde North? G&T Motorsports provides professional RWC inspections for eligible vehicles in accordance with applicable Victorian requirements.",
  alternates: {
    canonical,
  },
  openGraph: {
    title:
      "Roadworthy Certificate Clyde North | RWC Inspections | G&T Motorsports",
    description:
      "Need a Roadworthy Certificate inspection near Clyde North? G&T Motorsports provides professional RWC inspections for eligible vehicles in accordance with applicable Victorian requirements.",
    url: canonical,
    siteName: site.name,
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/workshop-hero.png",
        width: 1200,
        height: 800,
        alt: "Roadworthy inspection support at G&T Motorsports",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Roadworthy Certificate Clyde North | RWC Inspections | G&T Motorsports",
    description:
      "Need a Roadworthy Certificate inspection near Clyde North? G&T Motorsports provides professional RWC inspections for eligible vehicles in accordance with applicable Victorian requirements.",
    images: ["/workshop-hero.png"],
  },
};

const inspectedItems = [
  "Brakes and visible brake components",
  "Steering and suspension condition",
  "Tyres, wheels and visible wear",
  "Lights, indicators and basic safety items",
  "Windscreen, mirrors and glazing condition",
  "Body, chassis and structural observations",
  "Engine, driveline and leak observations",
  "Other applicable Victorian roadworthiness items",
];

const requiredSituations = [
  "Selling an eligible registered vehicle",
  "Transferring registration in Victoria",
  "Re-registering an eligible vehicle",
  "Responding to a roadworthy requirement",
  "Checking safety-related condition before certification",
];

const relatedLinks = [
  { label: "Brake Repairs", href: "/brake-repairs" },
  { label: "Suspension Repairs", href: "/services/suspension-steering" },
  { label: "Engine Diagnostics", href: "/engine-diagnostics" },
  { label: "Services", href: "/services" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

const serviceAreas = [
  { label: "Clyde North", href: "/mechanic-clyde-north" },
  { label: "Cranbourne", href: "/locations/cranbourne" },
  { label: "Berwick", href: "/locations/berwick" },
  { label: "Narre Warren", href: "/locations/narre-warren" },
  { label: "Officer", href: "/locations/officer" },
  { label: "Pakenham", href: "/locations/pakenham" },
  { label: "Hallam", href: "/locations/hallam" },
  { label: "Hampton Park", href: "/locations/hampton-park" },
];

const faqs = [
  {
    question: "What is a Roadworthy Certificate inspection?",
    answer:
      "A Roadworthy Certificate inspection checks eligible vehicles against applicable Victorian roadworthiness requirements. It confirms whether the inspected vehicle meets the required standard at the time of inspection.",
  },
  {
    question: "When might I need an RWC?",
    answer:
      "An RWC may be required when selling a vehicle, transferring registration, re-registering a vehicle or meeting another roadworthy requirement in Victoria.",
  },
  {
    question: "Can you guarantee my vehicle will pass?",
    answer:
      "No. A pass cannot be guaranteed before inspection. The vehicle must be checked against applicable requirements before an outcome can be confirmed.",
  },
  {
    question: "What happens if my vehicle does not pass?",
    answer:
      "G&T Motorsports will explain the findings and can provide a quote for approved repairs where applicable. Repairs are not automatically included in the inspection.",
  },
  {
    question: "Are repairs included with the inspection?",
    answer:
      "No. If repairs are required, they are discussed and quoted separately. No additional repair work begins until the quote is approved.",
  },
  {
    question: "Can I book an RWC inspection online?",
    answer:
      "Yes. You can use the online booking page or call G&T Motorsports to discuss workshop availability for a Roadworthy Certificate inspection.",
  },
];

function StructuredData() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Roadworthy Certificate Inspections",
        item: canonical,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: "Roadworthy Certificate Inspections",
    serviceType: "Roadworthy Certificate inspection support",
    url: canonical,
    description:
      "Roadworthy Certificate inspections for eligible vehicles, subject to workshop availability and applicable Victorian requirements.",
    provider: {
      "@id": `${site.url}/#business`,
    },
    areaServed: site.areas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

export default function RoadworthyCertificatePage() {
  return (
    <PageShell>
      <StructuredData />
      <nav aria-label="Breadcrumb" className="bg-asphalt py-4">
        <ol className="container-shell flex flex-wrap gap-2 text-sm font-bold text-white/60">
          <li>
            <Link className="focus-ring hover:text-white" href="/">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-white" aria-current="page">
            Roadworthy Certificate Inspections
          </li>
        </ol>
      </nav>

      <section className="relative overflow-hidden bg-black py-16 sm:py-24">
        <Image
          src="/workshop-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/58"
          aria-hidden="true"
        />
        <div className="container-shell relative">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-brake">
            RWC inspections Clyde North
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] text-white sm:text-6xl">
            Roadworthy Certificate Inspections
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
            G&T Motorsports provides Roadworthy Certificate inspections for
            eligible vehicles, subject to workshop availability and applicable
            Victorian requirements. If a vehicle does not pass, the findings are
            explained clearly and repairs can be quoted for approval where
            applicable.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/book-online">Book RWC Inspection</ButtonLink>
            <ButtonLink href={site.phoneHref} variant="secondary">
              Call Now
            </ButtonLink>
          </div>
          <p className="mt-6 max-w-2xl text-xs leading-5 text-white/52">
            G&T Motorsports does not claim VicRoads affiliation and does not
            guarantee a pass before inspection.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="What an RWC inspection is"
            title="A Safety-Focused Inspection for Eligible Vehicles"
            copy="A Roadworthy Certificate inspection checks relevant safety-related items against applicable Victorian requirements. It is separate from a general service and does not guarantee that repairs will not be needed."
            tone="light"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {requiredSituations.map((item) => (
              <article
                className="rounded-md border border-black/10 bg-neutral-50 p-5"
                key={item}
              >
                <span className="mb-4 block h-1 w-10 bg-brake" />
                <h2 className="text-lg font-black">{item}</h2>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-16 sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="What is generally inspected"
            title="Common Roadworthy Inspection Areas"
            copy="The exact inspection depends on the vehicle and applicable requirements. The areas below are examples of common safety-related checks."
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {inspectedItems.map((item) => (
              <article
                className="rounded-md border border-white/10 bg-white/[0.04] p-5"
                key={item}
              >
                <span className="mb-4 block h-1 w-10 bg-brake" />
                <h2 className="text-lg font-black text-white">{item}</h2>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-asphalt py-16 sm:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeader
            eyebrow="If repairs are required"
            title="Clear Findings Before Approved Repairs"
            copy="If the vehicle does not pass, customers should receive clear findings. G&T Motorsports can quote approved repairs where applicable, but repairs are not automatically included in the inspection."
          />
          <div className="rounded-md border border-white/10 bg-black/35 p-6">
            <h2 className="text-2xl font-black text-white">
              No additional work without approval
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/70">
              The workshop explains what was identified, what needs attention
              and what can be quoted. Timing depends on parts availability,
              workshop workload and the repair scope.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/book-online">Book Online</ButtonLink>
              <ButtonLink href="/contact" variant="ghost">
                Contact Us
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Booking process"
            title="How RWC Inspection Bookings Are Handled"
            copy="The process keeps inspection, findings and approval clear from the first enquiry through to collection."
            tone="light"
            align="center"
          />
          <ProcessSteps tone="light" />
        </div>
      </section>

      <section className="bg-black py-16 sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Related services"
            title="Useful Services Before or After an RWC"
            copy="Some roadworthy findings can involve brakes, suspension, steering, warning lights or general mechanical concerns."
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedLinks.map((link) => (
              <Link
                className="focus-ring rounded-md border border-white/10 bg-white/[0.04] p-5 text-lg font-black text-white transition hover:-translate-y-1 hover:border-brake"
                href={link.href}
                key={link.href}
              >
                <span className="mb-4 block h-1 w-10 bg-brake" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Service area"
            title="RWC Inspections for Clyde North and Nearby Suburbs"
            copy="Customers visit G&T Motorsports from Clyde North and nearby south-east Melbourne suburbs for roadworthy inspection support."
            tone="light"
            align="center"
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {serviceAreas.map((area) => (
              <Link
                className="focus-ring rounded-md border border-black/10 bg-neutral-50 px-4 py-5 text-center text-sm font-black uppercase tracking-wide text-asphalt transition hover:-translate-y-1 hover:border-brake"
                href={area.href}
                key={area.label}
              >
                {area.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-asphalt py-16 sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="FAQ"
            title="Roadworthy Certificate Inspection FAQs"
            copy="Helpful answers before booking an RWC inspection with G&T Motorsports."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {faqs.map((faq) => (
              <details
                className="group rounded-md border border-white/10 bg-black/35 p-5 open:border-brake"
                key={faq.question}
              >
                <summary className="focus-ring cursor-pointer list-none text-xl font-black text-white">
                  {faq.question}
                </summary>
                <p className="mt-4 text-sm leading-6 text-white/66">
                  {faq.answer}
                </p>
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
              Need a Roadworthy Certificate Inspection?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/85">
              Book an RWC inspection with G&T Motorsports for clear findings,
              practical advice and quote approval before additional repairs.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/book-online" variant="secondary">
              Book RWC Inspection
            </ButtonLink>
            <ButtonLink href={site.phoneHref} variant="ghost">
              Call Now
            </ButtonLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
