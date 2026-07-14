import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { PageShell } from "@/components/PageShell";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

const canonical = `${site.url}/logbook-servicing`;

export const metadata: Metadata = {
  title:
    "Logbook Servicing Melbourne | Maintain Your New Car Warranty | G&T Motorsports",
  description:
    "Professional logbook servicing for all makes and models. Maintain your manufacturer's warranty with expert servicing, quality parts and experienced technicians at G&T Motorsports.",
  alternates: {
    canonical,
  },
  openGraph: {
    title:
      "Logbook Servicing Melbourne | Maintain Your New Car Warranty | G&T Motorsports",
    description:
      "Professional logbook servicing for all makes and models. Maintain your manufacturer's warranty with expert servicing, quality parts and experienced technicians at G&T Motorsports.",
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
    title:
      "Logbook Servicing Melbourne | Maintain Your New Car Warranty | G&T Motorsports",
    description:
      "Professional logbook servicing for all makes and models. Maintain your manufacturer's warranty with expert servicing, quality parts and experienced technicians at G&T Motorsports.",
    images: ["/workshop-hero.png"],
  },
};

const trustCards = [
  {
    title: "Warranty Protected",
    copy: "Logbook servicing is completed according to the relevant manufacturer requirements to help support your warranty obligations.",
  },
  {
    title: "Genuine & OEM Parts",
    copy: "Suitable genuine and OEM-quality options are used where appropriate, with oils and fluids selected for your vehicle.",
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
    copy: "You receive clear advice before additional work proceeds, so there are no unnecessary surprises.",
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
  "Engine Oil",
  "Oil Filter",
  "Vehicle Inspection",
  "Brake Inspection",
  "Fluid Levels",
  "Battery Check",
  "Tyres",
  "Suspension",
  "Steering",
  "Safety Inspection",
  "Diagnostic Scan",
  "Road Test",
];

const whyMatters = [
  {
    title: "Warranty Protection",
    copy: "Following the correct service schedule and using suitable parts, oils and fluids helps support your vehicle's warranty requirements.",
  },
  {
    title: "Manufacturer Service Schedules",
    copy: "A logbook service follows the items required for your vehicle's age, kilometres and service interval rather than using a one-size-fits-all checklist.",
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

const processSteps = [
  {
    title: "Book",
    copy: "Book online or call the workshop with your vehicle details, service due date and any concerns.",
  },
  {
    title: "Inspect",
    copy: "The team checks your vehicle and confirms the correct service requirements before work begins.",
  },
  {
    title: "Service",
    copy: "Scheduled service items are completed using suitable parts, oils and fluids for your vehicle.",
  },
  {
    title: "Quality Check",
    copy: "Key items are reviewed and any additional findings are explained clearly before extra work proceeds.",
  },
  {
    title: "Customer Collection",
    copy: "You receive a practical handover with service information and any future maintenance advice.",
  },
];

const faqs = [
  {
    question: "Does logbook servicing keep my warranty?",
    answer:
      "Logbook servicing can help maintain your manufacturer's warranty when the service is completed according to the relevant manufacturer schedule using suitable parts, oils and fluids. Always keep clear service records for your vehicle.",
  },
  {
    question: "Do you use genuine parts?",
    answer:
      "G&T Motorsports can use genuine and OEM-quality parts where appropriate. The right option depends on the vehicle, service requirements and customer approval.",
  },
  {
    question: "Can independent workshops perform logbook servicing?",
    answer:
      "Yes. In Australia, independent workshops can perform logbook servicing when the work follows the applicable manufacturer requirements and suitable parts and fluids are used.",
  },
  {
    question: "How often should I service my vehicle?",
    answer:
      "Service intervals vary by make, model, kilometres, age and driving conditions. Check your logbook, dashboard service reminder or contact G&T Motorsports for guidance.",
  },
  {
    question: "Can I book online?",
    answer:
      "Yes. You can book your logbook service online or call G&T Motorsports directly on 0414 901 666.",
  },
  {
    question: "Do you service European vehicles?",
    answer:
      "Yes. G&T Motorsports services European vehicles as well as Japanese, Korean, Australian, SUV, 4WD, passenger and light commercial vehicles.",
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
    serviceType: "Car logbook service and warranty service",
    url: canonical,
    description:
      "Professional logbook servicing for all makes and models, completed according to manufacturer service schedules using suitable parts, oils and fluids.",
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
          src="/workshop-hero.png"
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
            Maintain Your Warranty Without Paying Dealership Prices
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] text-white sm:text-6xl">
            Professional Logbook Servicing
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
            G&T Motorsports provides professional logbook servicing for all
            makes and models following manufacturer service schedules. Quality
            workmanship, experienced technicians and genuine or OEM quality
            parts help keep your vehicle running at its best.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/book-online">Book Online</ButtonLink>
            <ButtonLink href={site.phoneHref} variant="secondary">
              Call Now
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Why choose us"
            title="Logbook Servicing Without the Dealership Runaround"
            copy="G&T Motorsports gives customers a clear, professional way to service their vehicle according to manufacturer requirements while staying close to home in Melbourne's south-east."
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
            eyebrow="What is included"
            title="A Complete Service Based on Your Vehicle's Schedule"
            copy="Logbook servicing is not a generic oil change. The exact service items depend on your vehicle, kilometres and manufacturer schedule, but common checks and replacements can include the items below."
          />
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
            <ButtonLink href="/services/logbook-servicing">
              Detailed Service Page
            </ButtonLink>
            <ButtonLink href="/contact" variant="ghost">
              Ask What Is Due
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-asphalt py-16 sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Why it matters"
            title="Why Logbook Servicing Matters"
            copy="Regular logbook servicing gives you more than a stamp or service record. It helps protect the vehicle's condition, safety and long-term maintenance history."
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
            title="Logbook Service for All Makes and Models"
            copy="From new family cars through to work vehicles and European models, G&T Motorsports services a wide range of vehicles using the relevant schedule and suitable service items."
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

      <section className="bg-black py-16 sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Process"
            title="A Simple, Transparent Logbook Service Process"
            copy="The process is designed to help you understand what your vehicle needs before additional work is approved."
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <article
                className="rounded-md border border-white/10 bg-white/[0.04] p-5"
                key={step.title}
              >
                <p className="text-xs font-black uppercase tracking-[0.22em] text-brake">
                  Step {index + 1}
                </p>
                <h3 className="mt-5 text-xl font-black text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/66">
                  {step.copy}
                </p>
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
            copy="Helpful answers about warranty service, parts, service intervals and online booking."
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
              Book Your Logbook Service Today
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/85">
              Keep your vehicle serviced to the correct schedule with clear
              advice, quality workmanship and convenient online booking at G&T
              Motorsports.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/book-online" variant="secondary">
              Book Online
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
