import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { PageShell } from "@/components/PageShell";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

const canonical = `${site.url}/logbook-servicing`;

export const metadata: Metadata = {
  title: {
    absolute:
      "Logbook Service Clyde North | Scheduled Servicing | G&T Motorsports",
  },
  description:
    "Book logbook servicing in Clyde North for scheduled car servicing, new car servicing and manufacturer maintenance schedules at G&T Motorsports.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Logbook Service Clyde North | Scheduled Servicing | G&T Motorsports",
    description:
      "Professional logbook servicing in Clyde North for all makes and models, completed to the applicable vehicle schedule where required.",
    url: canonical,
    siteName: site.name,
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/workshop-hero.png",
        width: 1200,
        height: 800,
        alt: "Logbook servicing at G&T Motorsports in Clyde North",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Logbook Service Clyde North | Scheduled Servicing | G&T Motorsports",
    description:
      "Professional logbook servicing in Clyde North for all makes and models, completed to the applicable vehicle schedule where required.",
    images: ["/workshop-hero.png"],
  },
};

const trustCards = [
  {
    title: "Warranty Support",
    copy: "Servicing is completed according to the applicable manufacturer maintenance schedule and vehicle requirements where relevant.",
  },
  {
    title: "Quality Parts & Fluids",
    copy: "Genuine, OEM-equivalent or quality parts and the correct fluids are used as appropriate for your vehicle.",
  },
  {
    title: "Qualified Technicians",
    copy: "Your vehicle is serviced by an experienced workshop team focused on careful inspections and clear reporting.",
  },
  {
    title: "Advanced Diagnostics",
    copy: "Diagnostic scanning can be included where appropriate to check fault codes, warning lights and vehicle systems.",
  },
  {
    title: "Transparent Pricing",
    copy: "You receive clear advice before any additional work is carried out, so there are no unnecessary surprises.",
  },
  {
    title: "Fast Turnaround",
    copy: "Bookings are planned around workshop availability to help keep your service efficient and organised.",
  },
  {
    title: "Honest Advice",
    copy: "The team explains what needs attention now, what can be monitored and what your vehicle may need next.",
  },
  {
    title: "Online Booking",
    copy: "Choose a convenient booking or vehicle drop-off time online, then bring your vehicle to the Clyde North workshop.",
  },
];

const includedItems = [
  "Engine oil and filter",
  "Fluid inspections",
  "Filters where scheduled",
  "Brake checks",
  "Tyres",
  "Battery checks",
  "Cooling system",
  "Belts and hoses",
  "Scheduled inspection items",
  "Manufacturer-specified items",
  "Diagnostic scan where appropriate",
  "Road test where appropriate",
];

const whyMatters = [
  {
    title: "Warranty Support",
    copy: "Following the applicable service schedule and using suitable parts, oils and fluids helps support your vehicle's servicing records and maintenance obligations.",
  },
  {
    title: "Manufacturer Service Schedules",
    copy: "A logbook service follows the items required for your vehicle's make, model, engine, age, kilometres and service interval rather than using a one-size-fits-all checklist.",
  },
  {
    title: "Resale Value",
    copy: "Consistent service records help future buyers understand how the vehicle has been maintained.",
  },
  {
    title: "Reliability",
    copy: "Regular servicing helps identify worn parts, leaks and maintenance issues before they become larger problems.",
  },
  {
    title: "Fuel Economy",
    copy: "Clean oil, fresh filters, correct tyre pressures and well-maintained systems can help the vehicle operate efficiently.",
  },
  {
    title: "Safety",
    copy: "Brakes, tyres, steering, suspension, lights and key safety items are checked so issues can be explained early.",
  },
];

const dueItems = [
  "Dashboard service reminder",
  "Logbook kilometre interval",
  "Time-based service interval",
  "Manufacturer maintenance schedule",
  "Vehicle age and service history",
  "Long-distance driving",
  "Towing or heavy use",
];

const schedulePoints = [
  "Vehicle make and model",
  "Engine and drivetrain",
  "Age and kilometres",
  "Previous service history",
  "Driving conditions",
  "Applicable maintenance schedule",
];

const documentationPoints = [
  "Clear record of completed service work",
  "Physical service book updated where applicable",
  "Service items explained before extra work proceeds",
  "Mercedes-Benz owners can use the dedicated Mercedes-Benz Service page for Digital Service Record information",
];

const comparisonCards = [
  {
    title: "General Car Service",
    copy: "A general service is useful for routine maintenance, oil and filter servicing, basic checks and practical condition advice between major service intervals.",
    href: "/services/general-car-servicing",
  },
  {
    title: "Logbook Service",
    copy: "A logbook service follows the applicable scheduled service requirements for your specific vehicle, based on time, kilometres and manufacturer maintenance information where relevant.",
    href: "/logbook-servicing",
  },
];

const vehicleTypes = [
  "European",
  "Japanese",
  "Korean",
  "Australian",
  "SUV",
  "4WD",
  "Passenger Cars",
  "Light Commercial",
];

const faqs = [
  {
    question: "What is a logbook service?",
    answer:
      "A logbook service is scheduled maintenance completed according to the relevant manufacturer service schedule where applicable. It usually includes specific checks, replacement items, fluids and inspections based on the vehicle's age, kilometres and service interval.",
  },
  {
    question: "How is logbook servicing different from a general service?",
    answer:
      "A general service covers routine maintenance and condition checks. A logbook service follows the applicable scheduled service requirements for your specific vehicle based on the manufacturer maintenance schedule where relevant.",
  },
  {
    question: "Do you service different makes and models?",
    answer:
      "Yes. G&T Motorsports services a wide range of makes and models, including family vehicles, work vehicles, four-wheel drives, European vehicles and everyday passenger cars.",
  },
  {
    question: "Does the service schedule depend on kilometres or time?",
    answer:
      "Often it depends on both. The exact requirements can vary by vehicle make, model, engine, age, kilometres, service history and applicable maintenance schedule.",
  },
  {
    question: "What happens if additional repairs are found?",
    answer:
      "If additional maintenance or repairs are identified, G&T Motorsports explains the findings and seeks approval before additional work proceeds.",
  },
  {
    question: "Do you provide service records and documentation?",
    answer:
      "Yes. Completed service work can be documented, and a physical service book can be updated where applicable. Keep your service records with the vehicle for future reference.",
  },
  {
    question: "Should I bring my physical service book?",
    answer:
      "Yes, bring your physical service book if you have one. It helps the workshop check previous servicing and update records where applicable.",
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
        name: "Logbook Servicing",
        item: canonical,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: "Logbook Servicing",
    serviceType: "Logbook service Clyde North",
    url: canonical,
    description:
      "Professional logbook servicing in Clyde North for all makes and models, completed according to manufacturer service schedules where applicable using suitable parts, oils and fluids.",
    provider: {
      "@id": `${site.url}/#business`,
    },
    areaServed: site.areas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Logbook service inclusions",
      itemListElement: includedItems.map((item) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: item,
        },
      })),
    },
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

export default function LogbookServicingLandingPage() {
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
          <li>
            <Link className="focus-ring hover:text-white" href="/services">
              Services
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-white" aria-current="page">
            Logbook Servicing
          </li>
        </ol>
      </nav>

      <section className="relative overflow-hidden bg-black py-16 sm:py-24">
        <Image
          src="/workshop-hero.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black via-black/92 to-black/60"
          aria-hidden="true"
        />
        <div className="container-shell relative">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-brake">
            Professional logbook service Clyde North
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] text-white sm:text-6xl">
            Logbook Servicing in Clyde North
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
            Keep your vehicle maintained to the correct service schedule with
            professional logbook servicing at G&T Motorsports in Clyde North. We
            service all makes and models and provide clear advice before any
            additional work is carried out.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/book-online">Book Logbook Service</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Get a Quote
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Logbook servicing"
            title="Logbook Servicing in Clyde North"
            copy="G&T Motorsports can service vehicles according to the applicable manufacturer maintenance schedule and vehicle requirements. The workshop services all makes and models and advises customers before additional repairs or maintenance proceed."
            tone="light"
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustCards.map((card) => (
              <article
                className="rounded-md border border-black/10 bg-neutral-50 p-5 transition hover:-translate-y-1 hover:border-brake"
                key={card.title}
              >
                <span
                  aria-hidden="true"
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-brake text-lg font-black text-white shadow-glow"
                >
                  &#10003;
                </span>
                <h3 className="text-lg font-black">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/65">
                  {card.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-16 sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="What is a logbook service?"
            title="What Is a Logbook Service?"
            copy="A logbook service is scheduled car servicing completed according to the applicable service requirements for your vehicle. It is more specific than a generic oil change because the required checks, fluids, filters and inspection items depend on the vehicle."
          />
          <div className="mt-8 rounded-md border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-2xl font-black text-white">
              What Can Be Included?
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/70">
              The exact service requirements depend on the vehicle's make,
              model, engine, age, kilometres, service history and applicable
              maintenance schedule. Items below may be checked, replaced or
              inspected where scheduled or relevant to the service, but not
              every item is replaced during every logbook service.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {includedItems.map((item) => (
              <div
                className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-5 text-center text-sm font-black uppercase tracking-wide text-white"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/services/general-car-servicing">
              General Car Servicing
            </ButtonLink>
            <ButtonLink href="/engine-diagnostics" variant="ghost">
              Diagnostics
            </ButtonLink>
            <ButtonLink href="/contact" variant="ghost">
              Ask What Is Due
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            eyebrow="Vehicle schedule"
            title="Servicing to Your Vehicle's Schedule"
            copy="New car servicing and manufacturer scheduled servicing should be matched to the vehicle rather than guessed. G&T Motorsports checks the relevant requirements and explains what is due before additional work proceeds."
            tone="light"
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {schedulePoints.map((point) => (
              <div
                className="rounded-md border border-black/10 bg-neutral-50 p-5"
                key={point}
              >
                <span className="mb-4 block h-1 w-10 bg-brake" />
                <h3 className="text-lg font-black">{point}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-asphalt py-16 sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Why it matters"
            title="Why Logbook Servicing Matters"
            copy="Regular logbook servicing gives you more than a stamp or service record. It helps support the vehicle's condition, safety checks and long-term maintenance history."
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyMatters.map((item) => (
              <article
                className="rounded-md border border-white/10 bg-black/35 p-5"
                key={item.title}
              >
                <span className="mb-5 block h-1 w-12 bg-brake" />
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/66">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeader
            eyebrow="Vehicles we service"
            title="All Makes & Models"
            copy="From family cars through to work vehicles, 4WDs and European models, G&T Motorsports services a wide range of vehicles using the relevant schedule and suitable service items."
            tone="light"
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {vehicleTypes.map((vehicle) => (
              <div
                className="rounded-md border border-black/10 bg-neutral-50 px-4 py-5 text-center text-sm font-black uppercase tracking-wide"
                key={vehicle}
              >
                {vehicle}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-asphalt py-16 sm:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            eyebrow="Records"
            title="Service Records & Documentation"
            copy="Clear service records help show what maintenance has been completed and what may need attention next. Bring your physical service book if you have one."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {documentationPoints.map((point) => (
              <div
                className="rounded-md border border-white/10 bg-black/35 p-5"
                key={point}
              >
                <span className="mb-4 block h-1 w-10 bg-brake" />
                {point.includes("Mercedes-Benz") ? (
                  <Link
                    className="focus-ring text-lg font-black text-white hover:text-brake"
                    href="/mercedes-benz-service"
                  >
                    {point}
                  </Link>
                ) : (
                  <h3 className="text-lg font-black text-white">{point}</h3>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-16 sm:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            eyebrow="Service timing"
            title="When Is Your Next Service Due?"
            copy="Your next logbook service may be due by time, kilometres, dashboard reminder or the way the vehicle is used. If you are unsure, send your registration or vehicle details and the workshop can help confirm what is required."
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {dueItems.map((item) => (
              <div
                className="rounded-md border border-white/10 bg-white/[0.04] p-5"
                key={item}
              >
                <span className="mb-4 block h-1 w-10 bg-brake" />
                <h3 className="text-lg font-black text-white">{item}</h3>
              </div>
            ))}
          </div>
          <div className="lg:col-start-2">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/brake-repairs" variant="ghost">
                Brake Repairs
              </ButtonLink>
              <ButtonLink href="/mercedes-benz-service" variant="ghost">
                Mercedes-Benz Servicing
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Service type"
            title="General Service vs Logbook Service"
            copy="Both services are useful, but they are not always the same. If you are unsure what your vehicle needs, G&T Motorsports can check your service information and advise the most suitable next step."
            tone="light"
            align="center"
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {comparisonCards.map((card) => (
              <Link
                className="focus-ring rounded-md border border-black/10 bg-neutral-50 p-6 transition hover:-translate-y-1 hover:border-brake"
                href={card.href}
                key={card.title}
              >
                <span className="mb-5 block h-1 w-12 bg-brake" />
                <h3 className="text-2xl font-black">{card.title}</h3>
                <p className="mt-4 text-sm leading-6 text-black/65">
                  {card.copy}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4 text-sm font-bold text-black/65">
            <Link className="focus-ring hover:text-black" href="/engine-diagnostics">
              Engine Diagnostics
            </Link>
            <Link className="focus-ring hover:text-black" href="/brake-repairs">
              Brake Repairs
            </Link>
            <Link className="focus-ring hover:text-black" href="/services/battery-charging-systems">
              Battery Services
            </Link>
            <Link className="focus-ring hover:text-black" href="/services/cooling-system-repairs">
              Cooling System Repairs
            </Link>
            <Link className="focus-ring hover:text-black" href="/mercedes-benz-service">
              Mercedes-Benz Service
            </Link>
            <Link className="focus-ring hover:text-black" href="/book-online">
              Book Online
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-asphalt py-16 sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Process"
            title="A Simple, Transparent Logbook Service Process"
            copy="The process is designed to help you understand what your vehicle needs before additional work is approved."
            align="center"
          />
          <ProcessSteps />
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="FAQ"
            title="Logbook Servicing FAQs"
            copy="Helpful answers about service schedules, parts, extra work and vehicles serviced."
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
                <p className="mt-4 text-sm leading-6 text-black/65">
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
              Book Your Logbook Service
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/85">
              Keep your vehicle serviced to the correct schedule with clear
              advice, quality workmanship and convenient online booking at G&T
              Motorsports.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/book-online" variant="secondary">
              Book Logbook Service
            </ButtonLink>
            <ButtonLink href="/contact" variant="ghost">
              Get a Quote
            </ButtonLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
