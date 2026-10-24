import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { PageShell } from "@/components/PageShell";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Reviews } from "@/components/Reviews";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

const canonical = `${site.url}/brake-repairs`;

export const metadata: Metadata = {
  title: {
    absolute:
      "Brake Repairs Clyde North | Brake Service | G&T Motorsports",
  },
  description:
    "Book brake repairs in Clyde North for brake service, brake pad replacement, brake inspections, rotor checks, brake fluid and ABS warning-light diagnosis.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Brake Repairs Clyde North | Brake Service | G&T Motorsports",
    description:
      "Brake inspections, brake pad replacement, rotor checks, brake fluid service and ABS warning-light diagnosis in Clyde North.",
    url: canonical,
    siteName: site.name,
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/workshop-hero.png",
        width: 1200,
        height: 800,
        alt: "Brake servicing inside the G&T Motorsports workshop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brake Repairs Clyde North | Brake Service | G&T Motorsports",
    description:
      "Brake inspections, brake pad replacement, rotor checks, brake fluid service and ABS warning-light diagnosis in Clyde North.",
    images: ["/workshop-hero.png"],
  },
};

const warningSigns = [
  "Squealing or grinding",
  "Vibration under braking",
  "Soft or spongy brake pedal",
  "Pulling under braking",
  "Reduced braking performance",
  "Brake warning lights",
  "Fluid leaks",
  "Burning smell after heavy braking",
];

const brakeServices = [
  {
    title: "Brake inspections",
    href: "/brake-repairs",
    copy: "A practical inspection of visible brake components and symptoms before repair recommendations are made.",
  },
  {
    title: "Brake pad replacement",
    href: "/brake-repairs",
    copy: "Replacement advice when pad wear, noise or braking performance indicates pads need attention.",
  },
  {
    title: "Brake rotor replacement or machining",
    href: "/brake-repairs",
    copy: "Rotor condition and measurements are checked before replacement or machining is discussed where appropriate.",
  },
  {
    title: "Brake fluid replacement",
    href: "/brake-repairs",
    copy: "Brake fluid condition can be checked and replacement discussed based on age, condition and vehicle requirements.",
  },
  {
    title: "Brake caliper inspection and repair",
    href: "/brake-repairs",
    copy: "Caliper movement, visible condition and braking behaviour can be assessed as part of fault finding.",
  },
  {
    title: "Brake hose inspection",
    href: "/brake-repairs",
    copy: "Brake hoses and visible lines can be checked for condition concerns during inspection.",
  },
  {
    title: "Brake warning light diagnostics",
    href: "/engine-diagnostics",
    copy: "Warning lights can be checked with diagnostic equipment and practical inspection where required.",
  },
  {
    title: "Electronic parking brake servicing",
    href: "/brake-repairs",
    copy: "Electronic parking brake systems can be considered during brake service planning where applicable.",
  },
  {
    title: "ABS diagnostics",
    href: "/engine-diagnostics",
    copy: "ABS-related warning lights or braking concerns can be scanned and investigated before repair approval.",
  },
  {
    title: "Performance brake upgrades",
    href: "/performance-upgrades",
    copy: "Suitable brake upgrade options can be discussed for selected street and performance vehicles.",
  },
];

const inspectionItems = [
  "Brake pad thickness",
  "Rotor condition and measurements",
  "Caliper operation",
  "Brake fluid condition",
  "Brake hoses and lines",
  "ABS fault scan where required",
  "Road test where safe and appropriate",
  "Quote before additional repairs",
];

const brakeRepairAreas = [
  {
    title: "Brake Pads & Rotors",
    copy: "Brake pad replacement in Clyde North may be recommended when pads are worn, noisy or no longer performing as they should. Rotors are checked for wear, thickness, scoring and vibration concerns before machining or replacement is discussed.",
  },
  {
    title: "Brake Fluid & Hydraulic Systems",
    copy: "Brake repairs can involve fluid condition, hoses, lines, calipers, master-cylinder concerns or other hydraulic components. G&T Motorsports checks the system and explains what needs attention before repair work proceeds.",
  },
  {
    title: "ABS & Brake Warning Lights",
    copy: "Brake warning lights and ABS faults may require diagnostic scanning as well as practical inspection. Fault codes help guide the process, but further testing may be needed before parts are replaced.",
  },
];

const whyChoose = [
  "Experienced technicians",
  "Clear inspection findings",
  "Transparent quotes",
  "Quality replacement parts",
  "Repairs for all makes and models",
  "European vehicle capability",
  "Professional diagnostic equipment",
  "Honest recommendations",
];

const vehicles = [
  "Passenger vehicles",
  "SUVs",
  "4WDs",
  "Light commercial vehicles",
  "European vehicles",
  "Japanese vehicles",
  "Korean vehicles",
  "Australian performance vehicles",
];

const serviceAreas = [
  { label: "Clyde North", href: "/" },
  { label: "Cranbourne", href: "/locations/cranbourne" },
  { label: "Berwick", href: "/locations/berwick" },
  { label: "Narre Warren", href: "/locations/narre-warren" },
  { label: "Officer", href: "/locations/officer" },
  { label: "Pakenham", href: "/locations/pakenham" },
  { label: "Hampton Park", href: "/locations/hampton-park" },
  { label: "Hallam", href: "/locations/hallam" },
];

const faqs = [
  {
    question: "How long do brake pads last?",
    answer:
      "Brake pad life varies by vehicle, driving style, load, road conditions and pad type. Squealing, grinding, reduced braking performance or low pad thickness found during inspection can indicate replacement may be needed.",
  },
  {
    question: "Do brake rotors always need replacement?",
    answer:
      "No. Rotors are checked for thickness, condition, scoring, heat damage and vibration concerns before replacement or machining is recommended. Parts are not replaced unnecessarily.",
  },
  {
    question: "What does a brake warning light mean?",
    answer:
      "A brake warning light can relate to several braking or electronic systems, including fluid level, pad wear indicators, ABS faults or other concerns depending on the vehicle. Inspection and diagnosis are needed before repairs are recommended.",
  },
  {
    question: "Does brake fluid need changing?",
    answer:
      "Brake fluid replacement intervals vary by vehicle and manufacturer schedule. Fluid condition, age and vehicle requirements should be checked before recommending replacement.",
  },
  {
    question: "Are noisy brakes always unsafe?",
    answer:
      "Not always, but brake noise should not be ignored. Squealing or grinding may indicate worn pads, rotor concerns, contamination or another issue that needs inspection.",
  },
  {
    question: "Can repairs be completed after inspection?",
    answer:
      "Yes. If brake repairs are required, G&T Motorsports will explain the findings and provide a quote before repair work proceeds.",
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
        name: "Brake Repairs",
        item: canonical,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: "Brake Repairs and Brake Servicing",
    serviceType: "Brake repairs Clyde North, brake service, brake pad replacement and brake inspection",
    url: canonical,
    description:
      "Brake repairs in Clyde North, including brake inspections, brake service, brake pad replacement, rotor checks, brake fluid checks and ABS warning-light diagnosis for all makes and models at G&T Motorsports.",
    provider: {
      "@id": `${site.url}/#business`,
    },
    areaServed: site.areas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Brake repair services",
      itemListElement: brakeServices.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          url: `${site.url}${service.href}`,
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

export default function BrakeRepairsLandingPage() {
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
            Brake Repairs
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
          className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/58"
          aria-hidden="true"
        />
        <div className="container-shell relative">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-brake">
            Safe, Reliable Brake Repairs You Can Trust
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] text-white sm:text-6xl">
            Brake Repairs in Clyde North
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
            G&T Motorsports inspects, diagnoses and repairs braking systems for
            a wide range of vehicles. From brake pad replacement and rotor
            checks to brake warning lights, vibration, fluid leaks and reduced
            braking performance, our team provides clear advice before repair
            work proceeds.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/book-online">BOOK BRAKE INSPECTION</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              GET A QUOTE
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Warning signs"
            title="Signs Your Brakes Need Attention"
            copy="Brake symptoms should be checked early. If braking performance changes, arrange an inspection promptly and avoid unnecessary driving if the vehicle feels unsafe."
            tone="light"
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {warningSigns.map((sign) => (
              <article
                className="rounded-md border border-black/10 bg-neutral-50 p-5"
                key={sign}
              >
                <span className="mb-5 block h-1 w-12 bg-brake" />
                <h2 className="text-lg font-black">{sign}</h2>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-16 sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Brake services"
            title="Brake Service and Replacement Options"
            copy="Brake repairs may involve pads, rotors, calipers, hydraulic components, brake fluid or electronic ABS diagnosis depending on the fault. G&T Motorsports checks the braking system and explains repair options before additional work proceeds."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {brakeServices.map((service) => (
              <Link
                className="focus-ring rounded-md border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-brake"
                href={service.href}
                key={service.title}
              >
                <span className="mb-5 block h-1 w-12 bg-brake" />
                <h2 className="text-lg font-black text-white">{service.title}</h2>
                <p className="mt-3 text-sm leading-6 text-white/66">
                  {service.copy}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-asphalt py-16 sm:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeader
            eyebrow="Inspection process"
            title="Brake Inspections & Diagnosis"
            copy="A careful brake inspection helps separate normal wear from urgent concerns. The exact checks depend on the vehicle, symptoms and access to components."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {inspectionItems.map((item) => (
              <div
                className="rounded-md border border-white/10 bg-black/35 p-5"
                key={item}
              >
                <span className="mb-4 block h-1 w-10 bg-brake" />
                <h2 className="text-lg font-black leading-6 text-white">{item}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Brake system repairs"
            title="Pads, Rotors, Fluid and Warning Lights"
            copy="Brake faults can come from mechanical wear, hydraulic issues or electronic systems. G&T Motorsports inspects the cause before recommending parts or repairs."
            tone="light"
            align="center"
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {brakeRepairAreas.map((area) => (
              <article
                className="rounded-md border border-black/10 bg-neutral-50 p-6"
                key={area.title}
              >
                <span className="mb-5 block h-1 w-12 bg-brake" />
                <h2 className="text-2xl font-black leading-tight">
                  {area.title}
                </h2>
                <p className="mt-4 text-sm leading-6 text-black/65">
                  {area.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Why choose us"
            title="Clear Brake Advice From a Local Workshop"
            copy="G&T Motorsports focuses on practical inspection, clear explanation and quality repairs so you understand what your brakes need before work begins."
            tone="light"
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item) => (
              <article
                className="rounded-md border border-black/10 bg-neutral-50 p-5"
                key={item}
              >
                <span className="mb-5 block h-1 w-12 bg-brake" />
                <h2 className="text-lg font-black">{item}</h2>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-16 sm:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeader
            eyebrow="Vehicles we service"
            title="Brake Repairs for All Makes and Models"
            copy="G&T Motorsports assists everyday drivers, work vehicles and enthusiasts with brake inspections and repairs matched to the vehicle and its use."
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {vehicles.map((vehicle) => (
              <div
                className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-5 text-center text-sm font-black uppercase tracking-wide text-white"
                key={vehicle}
              >
                {vehicle}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell">
          <div className="overflow-hidden rounded-md border border-black/10 bg-neutral-50">
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[320px]">
                <Image
                  src="/images/workshop/gt-motorsports-brake-suspension-repair-clyde-north.jpg.jpeg"
                  alt="Brake servicing and inspection at G&T Motorsports"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-brake">
                  Performance brake upgrades
                </p>
                <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                  Brake Upgrade Support for Selected Vehicles
                </h2>
                <p className="mt-5 text-base leading-7 text-black/68">
                  G&T Motorsports can assist with suitable brake upgrades for
                  selected street and performance vehicles. Depending on the
                  vehicle and intended use, this may include upgraded pads,
                  upgraded rotors, brake fluid upgrades, supporting brake
                  inspections and vehicle suitability assessment.
                </p>
                <p className="mt-4 text-sm leading-6 text-black/60">
                  Upgrade suitability depends on the vehicle, condition, parts
                  selected and intended use. No specific stopping-distance
                  improvement is promised on this page.
                </p>
                <div className="mt-7">
                  <ButtonLink href="/performance-upgrades">
                    Performance Upgrades
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-asphalt py-16 sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Local service area"
            title="Brake Repairs for Clyde North and Nearby Suburbs"
            copy="The workshop assists customers from Clyde North, Cranbourne, Berwick, Narre Warren, Officer, Pakenham, Hampton Park and Hallam. Choose an existing location page below for local directions and booking context."
            align="center"
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {serviceAreas.map((area) => (
              <Link
                className="focus-ring rounded-md border border-white/10 bg-black/35 px-4 py-5 text-center text-sm font-black uppercase tracking-wide text-white transition hover:-translate-y-1 hover:border-brake"
                href={area.href}
                key={area.label}
              >
                {area.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Process"
            title="How Brake Repairs Are Handled"
            copy="A simple process keeps the repair decision clear, from the first inspection through to quality checks after approved repairs."
            tone="light"
            align="center"
          />
          <ProcessSteps tone="light" />
          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm font-bold text-black/65">
            <Link
              className="focus-ring hover:text-black"
              href="/engine-diagnostics"
            >
              Engine Diagnostics
            </Link>
            <Link
              className="focus-ring hover:text-black"
              href="/services/suspension-steering"
            >
              Suspension Repairs
            </Link>
            <Link
              className="focus-ring hover:text-black"
              href="/services/general-car-servicing"
            >
              General Car Servicing
            </Link>
            <Link
              className="focus-ring hover:text-black"
              href="/roadworthy-certificate"
            >
              RWC Inspection Arrangements
            </Link>
            <Link className="focus-ring hover:text-black" href="/logbook-servicing">
              Logbook Servicing
            </Link>
            <Link className="focus-ring hover:text-black" href="/mercedes-benz-service">
              Mercedes-Benz Service
            </Link>
            <Link className="focus-ring hover:text-black" href="/services">
              All Services
            </Link>
            <Link className="focus-ring hover:text-black" href="/contact">
              Contact
            </Link>
          </div>
        </div>
      </section>

      <Reviews showPageLink />

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="FAQ"
            title="Brake Repairs FAQs"
            copy="Helpful answers before booking a brake inspection with G&T Motorsports."
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
              Book a Brake Inspection
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/85">
              Do not ignore unusual brake noises, vibration, warning lights or
              changes in braking performance. Book a professional brake
              inspection with G&T Motorsports for clear advice and quality
              repairs.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/book-online" variant="secondary">
              BOOK BRAKE INSPECTION
            </ButtonLink>
            <ButtonLink href="/contact" variant="ghost">
              GET A QUOTE
            </ButtonLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
