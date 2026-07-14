import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { PageShell } from "@/components/PageShell";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

const canonical = `${site.url}/performance-upgrades`;

export const metadata: Metadata = {
  title: { absolute: "Performance Upgrades Melbourne | G&T Motorsports" },
  description:
    "Looking for performance upgrades in Melbourne? G&T Motorsports offers performance modifications, engine upgrades and supporting mechanical work for a wide range of vehicles, completed with quality workmanship and attention to detail.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Performance Upgrades Melbourne | G&T Motorsports",
    description:
      "Looking for performance upgrades in Melbourne? G&T Motorsports offers performance modifications, engine upgrades and supporting mechanical work for a wide range of vehicles, completed with quality workmanship and attention to detail.",
    url: canonical,
    siteName: site.name,
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/workshop-hero.png",
        width: 1200,
        height: 800,
        alt: "Performance vehicle inside the G&T Motorsports workshop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Performance Upgrades Melbourne | G&T Motorsports",
    description:
      "Looking for performance upgrades in Melbourne? G&T Motorsports offers performance modifications, engine upgrades and supporting mechanical work for a wide range of vehicles, completed with quality workmanship and attention to detail.",
    images: ["/workshop-hero.png"],
  },
};

const upgradeServices = [
  {
    title: "Performance upgrade consultations",
    href: "/book-online",
    copy: "Discuss your goals, current setup, intended use and the supporting work your vehicle may need before parts are installed.",
  },
  {
    title: "Supporting engine modifications",
    href: "/services/engine-repairs",
    copy: "Mechanical support for upgrades that place extra demand on the engine, cooling, ignition and related systems.",
  },
  {
    title: "Cooling system upgrades",
    href: "/services/cooling-system-repairs",
    copy: "Cooling improvements and inspections for vehicles that need better heat management or reliability support.",
  },
  {
    title: "Suspension upgrades",
    href: "/services/suspension-steering",
    copy: "Suspension-related mechanical work for improved control, stability and confidence when suitable for the vehicle.",
  },
  {
    title: "Brake upgrades",
    href: "/services/brake-repairs",
    copy: "Brake system inspections and upgrade support for vehicles where stopping performance needs to match the setup.",
  },
  {
    title: "Engine reliability upgrades",
    href: "/services/engine-repairs",
    copy: "Reliability-focused work for vehicles being prepared for future modifications or harder everyday use.",
  },
  {
    title: "Turbo supporting modifications",
    href: "/services/vehicle-diagnostics",
    copy: "Supporting mechanical checks and installation work for turbo vehicles where reliability and system health matter.",
  },
  {
    title: "Performance servicing",
    href: "/services/logbook-servicing",
    copy: "Servicing for performance vehicles and modified cars, with attention to fluids, checks and maintenance needs.",
  },
  {
    title: "General mechanical work for modified vehicles",
    href: "/services/general-car-servicing",
    copy: "Mechanical servicing and repair support for vehicles with existing modifications or planned upgrades.",
  },
];

const projectExamples = [
  {
    title: "Reliability Upgrades",
    copy: "Reliability-focused mechanical upgrades and supporting work for vehicles that may be modified, used under higher load or require preventative improvements.",
  },
  {
    title: "Engine Supporting Upgrades",
    copy: "Supporting engine modifications completed after inspection and suitability assessment for the individual vehicle.",
  },
  {
    title: "Valvetrain Upgrades",
    copy: "Selected valvetrain upgrades for suitable vehicles as part of a properly planned performance or reliability package.",
  },
  {
    title: "Performance Cooling",
    copy: "Cooling system inspections and upgrades designed to support modified, harder-working or higher-load vehicles.",
  },
  {
    title: "Pre-Modification Servicing",
    copy: "Baseline servicing and inspection before upgrades so existing faults, leaks or maintenance concerns can be identified first.",
  },
  {
    title: "Brake Upgrades",
    copy: "Suitable brake pad, rotor, fluid and supporting brake upgrades for selected road and performance vehicles.",
  },
  {
    title: "Suspension Upgrades",
    copy: "Suspension improvements for handling, ride control, vehicle use and individual customer goals.",
  },
];

const whyChoose = [
  "Experienced technicians",
  "Quality workmanship",
  "Attention to detail",
  "Transparent communication",
  "Professional diagnostics",
  "Reliable workmanship",
  "Supporting modifications completed correctly",
];

const faqs = [
  {
    question: "Do you install customer-supplied performance parts?",
    answer:
      "Customer-supplied parts may be considered depending on the part, vehicle, condition, suitability and workshop approval. G&T Motorsports will discuss fitment risks and suitability before work proceeds.",
  },
  {
    question: "Can you inspect my vehicle before modifications?",
    answer:
      "Yes. A pre-upgrade inspection is recommended so existing faults, leaks, cooling issues, brake wear or maintenance needs can be identified before performance work begins.",
  },
  {
    question: "Do you perform supporting modifications?",
    answer:
      "Yes. G&T Motorsports can assist with supporting mechanical modifications such as cooling, brake, suspension, servicing and reliability-focused work where suitable for the vehicle.",
  },
  {
    question: "Can you help improve reliability?",
    answer:
      "Yes. Reliability-focused upgrades and maintenance can be discussed based on the vehicle, current condition, intended use and future modification goals.",
  },
  {
    question: "Can I book a consultation?",
    answer:
      "Yes. You can book online or call G&T Motorsports to discuss your vehicle, current setup and performance upgrade goals.",
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
        name: "Performance Upgrades",
        item: canonical,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: "Performance Upgrades",
    serviceType: "Performance vehicle upgrades and supporting mechanical work",
    url: canonical,
    description:
      "Performance upgrade consultations, supporting mechanical modifications, engine reliability work, cooling improvements, brake upgrades, suspension upgrades and performance servicing from G&T Motorsports.",
    provider: {
      "@id": `${site.url}/#business`,
    },
    areaServed: site.areas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Performance upgrade services",
      itemListElement: upgradeServices.map((service) => ({
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

export default function PerformanceUpgradesPage() {
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
            Performance Upgrades
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
            Professional Performance Upgrades for Street & Performance Vehicles
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] text-white sm:text-6xl">
            Performance Upgrades & Performance Workshop
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
            Whether you&apos;re improving reliability, supporting increased
            power or preparing your vehicle for future modifications, G&T
            Motorsports provides quality performance upgrade installation and
            mechanical expertise tailored to your goals.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/book-online">Book a Consultation</ButtonLink>
            <ButtonLink href={site.phoneHref} variant="secondary">
              Call Now
            </ButtonLink>
          </div>
          <p className="mt-6 max-w-2xl text-xs leading-5 text-white/52">
            G&T Motorsports is an independent automotive workshop. The workshop
            does not manufacture parts and does not claim authorised dealer
            status for any brand.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="What we can help with"
            title="Performance Support Built Around the Whole Vehicle"
            copy="Good performance work starts with understanding the vehicle, its current condition and the purpose behind the upgrade. G&T Motorsports can help plan and install supporting modifications with a practical mechanical focus."
            tone="light"
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {upgradeServices.map((service) => (
              <Link
                className="focus-ring rounded-md border border-black/10 bg-neutral-50 p-5 transition hover:-translate-y-1 hover:border-brake"
                href={service.href}
                key={service.title}
              >
                <span className="mb-5 block h-1 w-12 bg-brake" />
                <h2 className="text-xl font-black">{service.title}</h2>
                <p className="mt-3 text-sm leading-6 text-black/65">
                  {service.copy}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-16 sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Featured projects"
            title="Performance and Reliability Work"
            copy="G&T Motorsports can assist with the types of supporting performance work below across suitable vehicles. Recommendations depend on inspection findings, vehicle condition, intended use and approved scope."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {projectExamples.map((project) => (
              <article
                className="flex min-h-[15rem] flex-col rounded-md border border-white/10 bg-white/[0.04] p-[clamp(1.25rem,2.5vw,2rem)] transition hover:-translate-y-1 hover:border-brake"
                key={project.title}
              >
                <p className="text-[0.875rem] font-semibold uppercase tracking-[0.22em] text-brake">
                  Capability
                </p>
                <h2 className="mt-5 text-[clamp(1.35rem,2vw,2rem)] font-bold leading-[1.15] text-white [hyphens:auto] [overflow-wrap:anywhere]">
                  {project.title}
                </h2>
                <p className="mt-4 text-[clamp(0.95rem,1.2vw,1.1rem)] font-normal leading-[1.65] text-white/66">
                  {project.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-asphalt py-16 sm:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeader
            eyebrow="Why choose us"
            title="Performance Work With Clear Advice and Careful Execution"
            copy="Performance enthusiasts need more than parts fitted quickly. They need a workshop that checks the baseline, explains the supporting work and respects the details that affect reliability."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {whyChoose.map((item) => (
              <div
                className="rounded-md border border-white/10 bg-black/35 p-5"
                key={item}
              >
                <span className="mb-4 block h-1 w-10 bg-brake" />
                <h2 className="text-lg font-black leading-6 text-white">
                  {item}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Process"
            title="A Measured Process for Performance Upgrades"
            copy="The best upgrade path depends on the individual vehicle. G&T Motorsports works through inspection, recommendation and approval before installation begins."
            tone="light"
            align="center"
          />
          <ProcessSteps tone="light" />
        </div>
      </section>

      <section className="bg-black py-16 sm:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeader
            eyebrow="Important disclaimer"
            title="Performance Modifications Need the Right Plan"
            copy="Modification suitability depends on the individual vehicle, its current condition, intended use and applicable Australian road laws. Customers should discuss goals, parts, expectations and road-use requirements with the workshop before any work is carried out."
          />
          <div className="rounded-md border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-2xl font-black text-white">
              Practical, factual advice before work begins
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/70">
              G&T Motorsports can inspect the vehicle, discuss supporting
              modifications and explain known considerations before approved
              work proceeds. No performance result is guaranteed on this page,
              and recommendations may change after inspection.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/book-online">Book a Consultation</ButtonLink>
              <ButtonLink href="/contact" variant="ghost">
                Contact the Workshop
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="FAQ"
            title="Performance Upgrades FAQs"
            copy="Useful answers before booking a performance consultation or upgrade inspection."
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
              Ready to talk?
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
              Thinking About Performance Upgrades?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/85">
              Whether you&apos;re planning reliability improvements, supporting
              modifications or performance upgrades, talk with G&T Motorsports
              about the best solution for your vehicle and goals.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/book-online" variant="secondary">
              Book Consultation
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
