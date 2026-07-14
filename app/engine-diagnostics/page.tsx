import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { PageShell } from "@/components/PageShell";
import { Reviews } from "@/components/Reviews";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

const canonical = `${site.url}/engine-diagnostics`;

export const metadata: Metadata = {
  title: {
    absolute:
      "Engine Diagnostics Clyde North | Warning Light & Fault Diagnosis | G&T Motorsports",
  },
  description:
    "Engine warning light on? G&T Motorsports provides professional vehicle diagnostics, fault-code scanning and mechanical testing near Clyde North for all makes and models.",
  alternates: {
    canonical,
  },
  openGraph: {
    title:
      "Engine Diagnostics Clyde North | Warning Light & Fault Diagnosis | G&T Motorsports",
    description:
      "Engine warning light on? G&T Motorsports provides professional vehicle diagnostics, fault-code scanning and mechanical testing near Clyde North for all makes and models.",
    url: canonical,
    siteName: site.name,
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/workshop-hero.png",
        width: 1200,
        height: 800,
        alt: "Vehicle diagnostics inside the G&T Motorsports workshop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Engine Diagnostics Clyde North | Warning Light & Fault Diagnosis | G&T Motorsports",
    description:
      "Engine warning light on? G&T Motorsports provides professional vehicle diagnostics, fault-code scanning and mechanical testing near Clyde North for all makes and models.",
    images: ["/workshop-hero.png"],
  },
};

const diagnosticTriggers = [
  "Check engine light",
  "ABS warning light",
  "Airbag warning light",
  "Battery or charging light",
  "Vehicle entering limp mode",
  "Rough idle",
  "Engine misfire",
  "Poor acceleration",
  "Hard starting",
  "Excessive fuel use",
  "Unexpected stalling",
  "Electrical faults",
];

const diagnosticServices = [
  {
    title: "Fault-code scanning",
    href: "/services/vehicle-diagnostics",
    copy: "Stored fault codes and control-module data can provide a useful starting point for diagnosis.",
  },
  {
    title: "Live data analysis",
    href: "/services/vehicle-diagnostics",
    copy: "Sensor values and operating data can be reviewed while the vehicle is running where appropriate.",
  },
  {
    title: "Warning-light diagnosis",
    href: "/services/vehicle-diagnostics",
    copy: "Engine, ABS, airbag and charging-system warning lights can be investigated with suitable testing.",
  },
  {
    title: "Engine performance testing",
    href: "/services/engine-repairs",
    copy: "Running concerns may require checks beyond a scan, including mechanical and electrical testing.",
  },
  {
    title: "Misfire diagnosis",
    href: "/services/engine-repairs",
    copy: "Misfires can involve ignition, fuel, air, compression, wiring or control-system issues.",
  },
  {
    title: "Charging system testing",
    href: "/services/battery-charging-systems",
    copy: "Battery, alternator and charging concerns can be checked before replacement decisions are made.",
  },
  {
    title: "Battery testing",
    href: "/services/battery-charging-systems",
    copy: "Battery condition can be tested when starting faults or warning lights point to power-supply concerns.",
  },
  {
    title: "Sensor and actuator testing",
    href: "/services/vehicle-diagnostics",
    copy: "Component operation may need to be tested rather than replaced based only on a stored code.",
  },
  {
    title: "Electrical fault tracing",
    href: "/services/vehicle-diagnostics",
    copy: "Wiring, connector and circuit checks can help locate faults that appear intermittently.",
  },
  {
    title: "Smoke testing where applicable",
    href: "/services/engine-repairs",
    copy: "Vacuum and intake leaks may require additional testing when symptoms or data point that way.",
  },
  {
    title: "Road testing where safe",
    href: "/services/vehicle-diagnostics",
    copy: "Some concerns need to be confirmed under real driving conditions if the vehicle is safe to drive.",
  },
  {
    title: "Post-repair verification",
    href: "/services/general-car-servicing",
    copy: "Faults can be cleared and rechecked after approved repairs to confirm the concern has been addressed.",
  },
];

const diagnosisSteps = [
  "Customer symptom discussion",
  "Initial vehicle inspection",
  "Diagnostic scan",
  "Testing and fault tracing",
  "Explain findings",
  "Quote recommended repairs",
  "Complete approved work",
  "Clear faults and verify repair",
];

const testingMethods = [
  "Visual inspection",
  "Electrical testing",
  "Mechanical testing",
  "Live data comparison",
  "Pressure or vacuum testing",
  "Component testing",
  "Road testing",
];

const vehicleTypes = [
  "Mercedes-Benz and European vehicles",
  "Japanese vehicles",
  "Korean vehicles",
  "Australian vehicles",
  "Passenger cars",
  "SUVs",
  "4WDs",
  "Light commercial vehicles",
  "Modified and performance vehicles",
];

const warningLightCauses = [
  "Sensors",
  "Ignition components",
  "Fuel delivery",
  "Air intake or vacuum leaks",
  "Emissions systems",
  "Cooling systems",
  "Battery or charging systems",
  "Wiring or connectors",
  "Mechanical faults",
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
    question: "What does a check engine light mean?",
    answer:
      "A check engine light means the vehicle has detected a fault or abnormal operating condition. It may relate to sensors, ignition, fuel, emissions, intake, cooling, electrical or mechanical systems, so testing is needed before recommending repairs.",
  },
  {
    question: "Can I keep driving with the engine warning light on?",
    answer:
      "If the vehicle is running poorly, overheating, flashing a warning light, losing power or feeling unsafe, contact the workshop before continuing to drive. A steady warning light may still need prompt inspection to avoid further damage.",
  },
  {
    question: "Does a diagnostic scan tell you exactly what is wrong?",
    answer:
      "Not always. A scan tool reads fault codes and data from the vehicle, but a code usually identifies the system reporting a problem rather than proving which part has failed. Proper diagnosis may require further inspection and testing.",
  },
  {
    question: "How long does vehicle diagnosis take?",
    answer:
      "Diagnostic time depends on the symptom, vehicle system and whether the fault is present during testing. Some faults are straightforward, while intermittent or complex concerns can require additional test time.",
  },
  {
    question: "Can you diagnose intermittent faults?",
    answer:
      "Yes, intermittent faults can be investigated, although they may require repeat testing, road testing where safe, live data checks or further monitoring if the fault is not present during the first inspection.",
  },
  {
    question: "Do you diagnose European vehicles?",
    answer:
      "Yes. G&T Motorsports works on Mercedes-Benz and European vehicles using professional diagnostic equipment, while also diagnosing Japanese, Korean, Australian, 4WD, SUV and light commercial vehicles.",
  },
  {
    question: "Can you diagnose ABS and airbag warning lights?",
    answer:
      "Yes. ABS and airbag warning lights can be scanned and investigated with appropriate testing. Safety-related faults should be checked promptly.",
  },
  {
    question: "Will you provide a quote before repairs?",
    answer:
      "Yes. G&T Motorsports explains the findings and provides a quote for recommended repairs before additional approved work proceeds.",
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
        name: "Engine Diagnostics",
        item: canonical,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: "Engine Diagnostics and Fault Finding",
    serviceType: "Vehicle diagnostics, fault-code scanning and mechanical testing",
    url: canonical,
    description:
      "Professional engine diagnostics, warning-light diagnosis, fault-code scanning, live data analysis and mechanical testing for all makes and models at G&T Motorsports.",
    provider: {
      "@id": `${site.url}/#business`,
    },
    areaServed: site.areas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Vehicle diagnostic services",
      itemListElement: diagnosticServices.map((service) => ({
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

export default function EngineDiagnosticsLandingPage() {
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
            Engine Diagnostics
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
            Professional Warning Light and Fault Diagnosis
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] text-white sm:text-6xl">
            Professional Engine Diagnostics & Fault Finding
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
            Warning lights, poor performance, rough running and starting
            problems can have many possible causes. G&T Motorsports combines
            professional diagnostic equipment with mechanical testing and
            experienced fault-finding to identify the underlying issue.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/book-online">Book Diagnostic Inspection</ButtonLink>
            <ButtonLink href={site.phoneHref} variant="secondary">
              Call Now
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="When to book diagnostics"
            title="Warning Lights and Symptoms Worth Checking Early"
            copy="Faults are often easier to deal with before they create extra damage or leave the vehicle undriveable. If the vehicle feels unsafe, call the workshop before travelling."
            tone="light"
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {diagnosticTriggers.map((trigger) => (
              <article
                className="rounded-md border border-black/10 bg-neutral-50 p-5"
                key={trigger}
              >
                <span className="mb-5 block h-1 w-12 bg-brake" />
                <h2 className="text-lg font-black">{trigger}</h2>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-16 sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Diagnostic services"
            title="Vehicle Diagnostic Services"
            copy="A scan can be useful, but it is only part of the process. The right diagnostic path depends on the symptom, stored data, vehicle condition and the testing required to confirm the cause."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {diagnosticServices.map((service) => (
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
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionHeader
            eyebrow="Scan vs diagnosis"
            title="Find the Cause, Not Just the Fault Code"
            copy="A scan tool reads stored fault codes and vehicle data. A fault code identifies the system that detected a problem, but it does not always identify the failed component."
          />
          <div className="rounded-md border border-white/10 bg-black/35 p-6 sm:p-8">
            <h2 className="text-2xl font-black text-white">
              Proper diagnosis may require extra testing.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/70">
              Replacing parts based only on a fault code can waste time and
              money. G&T Motorsports uses scan data as part of a broader
              diagnostic process, then checks the vehicle carefully before
              recommending repairs.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {testingMethods.map((method) => (
                <div
                  className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-4 text-sm font-black text-white"
                  key={method}
                >
                  {method}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Diagnostic process"
            title="How Fault Finding Is Handled"
            copy="The process is designed to move from symptoms to evidence, then to clear repair advice before additional work proceeds."
            tone="light"
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {diagnosisSteps.map((step, index) => (
              <article
                className="rounded-md border border-black/10 bg-neutral-50 p-5"
                key={step}
              >
                <p className="text-xs font-black uppercase tracking-[0.22em] text-brake">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-5 text-lg font-black leading-6">{step}</h2>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-16 sm:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeader
            eyebrow="Vehicles we diagnose"
            title="Diagnostics for All Makes and Models"
            copy="G&T Motorsports investigates warning lights and running concerns across everyday vehicles, work vehicles, European models and performance-focused cars."
          />
          <div className="grid gap-3 sm:grid-cols-3">
            {vehicleTypes.map((vehicle) => (
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
                  src="/workshop-hero.png"
                  alt="Diagnostic inspection at G&T Motorsports in Clyde North"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-brake">
                  Mercedes and European diagnostics
                </p>
                <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                  Professional Diagnostic Support for European Vehicles
                </h2>
                <p className="mt-5 text-base leading-7 text-black/68">
                  G&T Motorsports works on Mercedes-Benz and European vehicles
                  using professional diagnostic equipment and practical
                  mechanical testing. Mercedes Digital Service History is
                  relevant to eligible scheduled servicing, while diagnostic
                  work remains focused on accurately investigating the current
                  symptom or warning light.
                </p>
                <p className="mt-4 text-sm leading-6 text-black/60">
                  G&T Motorsports is an independent workshop and does not claim
                  dealership affiliation or manufacturer authorisation.
                </p>
                <div className="mt-7">
                  <ButtonLink href="/mercedes-benz-service">
                    Mercedes-Benz Servicing
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
            eyebrow="Common causes"
            title="What Can Cause Warning Lights?"
            copy="Warning lights can be triggered by many systems. Inspection and testing are required before recommending repairs."
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {warningLightCauses.map((cause) => (
              <article
                className="rounded-md border border-white/10 bg-black/35 p-5"
                key={cause}
              >
                <span className="mb-5 block h-1 w-12 bg-brake" />
                <h2 className="text-lg font-black text-white">{cause}</h2>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Local service area"
            title="Car Diagnostics Near Clyde North, Cranbourne and Berwick"
            copy="Drivers visit G&T Motorsports from Clyde North and nearby suburbs for diagnostic inspections, warning-light checks and clear repair advice."
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

      <section className="bg-black py-16 sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Helpful related services"
            title="Diagnostics Often Connect to Other Vehicle Systems"
            copy="Once the cause is confirmed, the next step may involve mechanical repair, servicing, performance support or a safety-related inspection."
            align="center"
          />
          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm font-bold text-white/70">
            <Link className="focus-ring hover:text-white" href="/brake-repairs">
              Brake Repairs
            </Link>
            <Link className="focus-ring hover:text-white" href="/logbook-servicing">
              Logbook Servicing
            </Link>
            <Link
              className="focus-ring hover:text-white"
              href="/mercedes-benz-service"
            >
              Mercedes-Benz Service
            </Link>
            <Link
              className="focus-ring hover:text-white"
              href="/performance-upgrades"
            >
              Performance Upgrades
            </Link>
            <Link className="focus-ring hover:text-white" href="/services">
              All Services
            </Link>
            <Link className="focus-ring hover:text-white" href="/contact">
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
            title="Engine Diagnostics FAQs"
            copy="Helpful answers before booking a diagnostic inspection with G&T Motorsports."
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
              Warning Light On or Vehicle Running Poorly?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/85">
              Book a professional diagnostic inspection with G&T Motorsports.
              We will investigate the symptoms, explain the findings clearly
              and provide a quote before completing additional repairs.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/book-online" variant="secondary">
              Book Diagnostic Inspection
            </ButtonLink>
            <ButtonLink href={site.phoneHref} variant="ghost">
              Call G&T Motorsports
            </ButtonLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
