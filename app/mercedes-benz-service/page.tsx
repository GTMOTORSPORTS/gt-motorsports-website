import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { PageShell } from "@/components/PageShell";
import { SectionHeader } from "@/components/SectionHeader";
import { customerReviews } from "@/lib/reviews";
import { site } from "@/lib/site";

const canonical = `${site.url}/mercedes-benz-service`;

export const metadata: Metadata = {
  title: "Mercedes-Benz Service Melbourne | Mercedes Specialist | G&T Motorsports",
  description:
    "Looking for a trusted Mercedes-Benz specialist? G&T Motorsports provides Mercedes servicing, diagnostics, repairs and Mercedes Digital Service History updates using professional equipment and experienced technicians.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Mercedes-Benz Service Melbourne | Mercedes Specialist | G&T Motorsports",
    description:
      "Looking for a trusted Mercedes-Benz specialist? G&T Motorsports provides Mercedes servicing, diagnostics, repairs and Mercedes Digital Service History updates using professional equipment and experienced technicians.",
    url: canonical,
    siteName: site.name,
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/workshop-hero.png",
        width: 1200,
        height: 800,
        alt: "Mercedes-Benz servicing inside the G&T Motorsports workshop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mercedes-Benz Service Melbourne | Mercedes Specialist | G&T Motorsports",
    description:
      "Looking for a trusted Mercedes-Benz specialist? G&T Motorsports provides Mercedes servicing, diagnostics, repairs and Mercedes Digital Service History updates using professional equipment and experienced technicians.",
    images: ["/workshop-hero.png"],
  },
};

const whyChoose = [
  {
    title: "Mercedes Specialists",
    copy: "Mercedes-Benz owners receive focused service advice from an independent workshop familiar with scheduled servicing, diagnostics and mechanical care.",
  },
  {
    title: "Digital Service History Updates",
    copy: "Eligible Mercedes-Benz Digital Service History records can be updated after supported scheduled servicing is completed.",
  },
  {
    title: "Factory Scheduled Servicing",
    copy: "Service work is planned around the relevant maintenance schedule, vehicle condition and the way the vehicle is used.",
  },
  {
    title: "Advanced Diagnostics",
    copy: "Professional diagnostic equipment helps identify warning lights, electronic faults and performance concerns before parts are replaced.",
  },
  {
    title: "OEM & Genuine Parts",
    copy: "Genuine and OEM-quality options are used where appropriate, with suitable oils and fluids selected for the vehicle.",
  },
  {
    title: "Transparent Pricing",
    copy: "Findings are explained clearly and additional work is discussed before repairs proceed.",
  },
  {
    title: "Experienced Technicians",
    copy: "The workshop team approaches Mercedes servicing with attention to detail, practical testing and careful workmanship.",
  },
  {
    title: "Personal Service",
    copy: "You deal with a local workshop that takes time to explain the vehicle, the work required and the next maintenance step.",
  },
];

const mercedesServices = [
  {
    title: "Mercedes Logbook Service",
    href: "/services/logbook-servicing",
    copy: "Scheduled servicing completed according to the relevant Mercedes-Benz maintenance requirements.",
  },
  {
    title: "Service A",
    href: "/services/mercedes-benz-servicing",
    copy: "Routine scheduled maintenance for eligible Mercedes-Benz vehicles, including checks based on service requirements.",
  },
  {
    title: "Service B",
    href: "/services/mercedes-benz-servicing",
    copy: "More comprehensive scheduled servicing based on the vehicle's age, kilometres and maintenance plan.",
  },
  {
    title: "Brake Repairs",
    href: "/services/brake-repairs",
    copy: "Brake pad, rotor, hydraulic and warning-light concerns inspected before repair approval.",
  },
  {
    title: "Transmission Service",
    href: "/services/clutch-transmission",
    copy: "Transmission, clutch and driveline symptoms assessed with clear recommendations.",
  },
  {
    title: "Engine Diagnostics",
    href: "/services/vehicle-diagnostics",
    copy: "Warning lights, drivability issues and engine concerns checked with diagnostic equipment.",
  },
  {
    title: "Cooling System Repairs",
    href: "/services/cooling-system-repairs",
    copy: "Coolant leaks, overheating symptoms and cooling-system faults investigated carefully.",
  },
  {
    title: "Suspension Repairs",
    href: "/services/suspension-steering",
    copy: "Suspension knocks, steering feel and worn components inspected for safe, confident driving.",
  },
  {
    title: "Battery Replacement",
    href: "/services/battery-charging-systems",
    copy: "Battery, starting and charging-system checks for reliable Mercedes-Benz operation.",
  },
  {
    title: "Air Conditioning Service",
    href: "/services/air-conditioning",
    copy: "Weak cooling, airflow faults and cabin comfort concerns assessed before repairs.",
  },
  {
    title: "General Repairs",
    href: "/services/general-car-servicing",
    copy: "Mechanical repairs and maintenance support for Mercedes-Benz vehicles and all makes and models.",
  },
  {
    title: "Electrical Diagnostics",
    href: "/services/vehicle-diagnostics",
    copy: "Electrical symptoms, warning messages and system faults checked with a staged diagnostic process.",
  },
];

const differences = [
  "Independent specialist workshop with personal customer service",
  "Professional diagnostic equipment for Mercedes-Benz systems",
  "High-quality workmanship across servicing, diagnosis and repairs",
  "Honest recommendations based on inspection findings",
  "Competitive pricing compared with dealership servicing",
  "Efficient booking and turnaround guidance where workshop workload allows",
];

const models = [
  "A-Class",
  "B-Class",
  "C-Class",
  "CLA",
  "CLS",
  "E-Class",
  "GLA",
  "GLB",
  "GLC",
  "GLE",
  "GLS",
  "G-Class",
  "AMG Models",
  "V-Class",
  "Sprinter",
];

const processSteps = [
  "Book Online",
  "Vehicle Inspection",
  "Digital Diagnostics",
  "Quote Approval",
  "Professional Repair",
  "Quality Check",
  "Vehicle Collection",
];

const galleryItems = [
  {
    title: "Mercedes servicing",
    alt: "Mercedes-Benz servicing at G&T Motorsports in Clyde North",
  },
  {
    title: "Mercedes diagnostics",
    alt: "Mercedes-Benz diagnostic inspection using professional equipment",
  },
  {
    title: "Brake repairs",
    alt: "Mercedes-Benz brake repair inspection at G&T Motorsports",
  },
  {
    title: "Engine repairs",
    alt: "Mercedes-Benz engine repair inspection in a professional workshop",
  },
  {
    title: "Vehicle inspection",
    alt: "Mercedes-Benz vehicle inspection at G&T Motorsports",
  },
  {
    title: "Technician working",
    alt: "Technician working on a vehicle inside G&T Motorsports workshop",
  },
];

const faqs = [
  {
    question: "How often should I service my Mercedes?",
    answer:
      "Mercedes-Benz service intervals vary by model, age, kilometres and driving conditions. Follow the service reminder, logbook or manufacturer schedule, and contact G&T Motorsports if you are unsure what is due.",
  },
  {
    question: "Can you update Mercedes Digital Service History?",
    answer:
      "Yes. G&T Motorsports can update Mercedes Digital Service History for supported vehicles after eligible scheduled servicing is completed. Availability depends on the model and manufacturer requirements.",
  },
  {
    question: "Do you use genuine or OEM parts?",
    answer:
      "G&T Motorsports can use genuine and OEM-quality parts where appropriate, with suitable oils and fluids selected for the vehicle and service requirements.",
  },
  {
    question: "Can you diagnose warning lights?",
    answer:
      "Yes. Warning lights and electronic faults can be assessed using diagnostic equipment and practical testing before repair recommendations are made.",
  },
  {
    question: "Do you perform Mercedes logbook servicing?",
    answer:
      "Yes. Mercedes logbook servicing is available and is completed according to the relevant scheduled servicing requirements.",
  },
  {
    question: "Are you more affordable than dealerships?",
    answer:
      "As an independent workshop, G&T Motorsports aims to provide competitive pricing and transparent advice. The exact cost depends on the vehicle, service requirements and parts needed.",
  },
  {
    question: "Can I book online?",
    answer:
      "Yes. You can book a Mercedes-Benz service online or call G&T Motorsports directly on 0414 901 666.",
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
        name: "Mercedes-Benz Service",
        item: canonical,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: "Mercedes-Benz Servicing",
    serviceType: "Mercedes-Benz servicing, diagnostics and repairs",
    url: canonical,
    description:
      "Mercedes-Benz servicing, diagnostics, mechanical repairs and eligible Mercedes Digital Service History updates from G&T Motorsports in Melbourne's south-east.",
    provider: {
      "@id": `${site.url}/#business`,
    },
    areaServed: site.areas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Mercedes-Benz services",
      itemListElement: mercedesServices.map((service) => ({
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

export default function MercedesBenzServicePage() {
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
            Mercedes-Benz Service
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
          className="absolute inset-0 bg-gradient-to-r from-black via-black/92 to-black/58"
          aria-hidden="true"
        />
        <div className="container-shell relative">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-brake">
            Mercedes-Benz Servicing Without Dealership Prices
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] text-white sm:text-6xl">
            Mercedes-Benz Service & Specialist Workshop
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
            Keep your Mercedes-Benz performing at its best with professional
            servicing, diagnostics and repairs from experienced technicians.
            G&T Motorsports offers dealership-quality workmanship, transparent
            pricing and Mercedes Digital Service History updates where
            applicable.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/book-online">Book Mercedes Service</ButtonLink>
            <ButtonLink href={site.phoneHref} variant="secondary">
              Call Now
            </ButtonLink>
          </div>
          <p className="mt-6 max-w-2xl text-xs leading-5 text-white/52">
            G&T Motorsports is an independent automotive workshop and does not
            claim Mercedes-Benz affiliation, certification or endorsement.
          </p>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Why choose us"
            title="Mercedes Care With a Premium Independent Workshop Experience"
            copy="Mercedes-Benz owners choose G&T Motorsports for focused servicing, clear communication and professional diagnostic support without the formality of a dealership visit."
            tone="light"
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item) => (
              <article
                className="rounded-md border border-black/10 bg-neutral-50 p-5 transition hover:-translate-y-1 hover:border-brake"
                key={item.title}
              >
                <span
                  aria-hidden="true"
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-brake text-sm font-black text-white shadow-glow"
                >
                  MB
                </span>
                <h3 className="text-lg font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/65">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-16 sm:py-24">
        <div className="container-shell">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              eyebrow="Mercedes services"
              title="Mercedes-Benz Servicing, Diagnostics and Repairs"
              copy="From scheduled maintenance to complex fault finding, G&T Motorsports gives Mercedes owners a clear pathway from inspection through to approved repair."
            />
            <ButtonLink href="/services/mercedes-benz-servicing" variant="ghost" className="w-fit">
              Mercedes Service Details
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {mercedesServices.map((service) => (
              <Link
                className="focus-ring rounded-md border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-brake"
                href={service.href}
                key={service.title}
              >
                <span className="mb-5 block h-1 w-12 bg-brake" />
                <h3 className="text-xl font-black text-white">{service.title}</h3>
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
            eyebrow="Independent specialist"
            title="What Makes Us Different"
            copy="A Mercedes-Benz service should feel precise, transparent and easy to understand. G&T Motorsports combines technical inspection with personal customer service."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {differences.map((item) => (
              <div
                className="rounded-md border border-white/10 bg-black/35 p-5"
                key={item}
              >
                <span className="mb-4 block h-1 w-10 bg-brake" />
                <h3 className="text-lg font-black leading-6 text-white">{item}</h3>
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
                  alt="Mercedes-Benz service inspection at G&T Motorsports"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-brake">
                  Digital Service History
                </p>
                <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                  Mercedes Digital Service History Updates
                </h2>
                <p className="mt-5 text-base leading-7 text-black/68">
                  G&T Motorsports can update Mercedes Digital Service History
                  for supported vehicles after eligible scheduled servicing is
                  completed. Keeping a complete digital service record can help
                  preserve service history, support future maintenance decisions
                  and provide useful documentation when it is time to sell or
                  trade the vehicle.
                </p>
                <p className="mt-4 text-sm leading-6 text-black/60">
                  Availability depends on the vehicle model and manufacturer
                  requirements, so please mention Digital Service History when
                  booking your Mercedes service.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="/book-online">Book Mercedes Service</ButtonLink>
                  <ButtonLink
                    href="/services/logbook-servicing"
                    variant="ghost"
                    className="border-black/20 text-asphalt hover:text-white"
                  >
                    Logbook Servicing
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-16 sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Models we service"
            title="Mercedes-Benz Models We Service"
            copy="G&T Motorsports services a broad range of Mercedes-Benz passenger, performance and commercial vehicles. Contact the workshop if you are unsure about your model or service requirement."
            align="center"
          />
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {models.map((model) => (
              <div
                className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-5 text-center text-sm font-black uppercase tracking-wide text-white"
                key={model}
              >
                {model}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Process"
            title="A Clear Process From Booking to Collection"
            copy="The process is designed to give Mercedes owners confidence at every stage, from first contact through to handover."
            tone="light"
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
            {processSteps.map((step, index) => (
              <article
                className="rounded-md border border-black/10 bg-neutral-50 p-5"
                key={step}
              >
                <p className="text-xs font-black uppercase tracking-[0.22em] text-brake">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 text-lg font-black leading-6">{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-asphalt py-16 sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Workshop gallery"
            title="Mercedes Workshop Gallery"
            copy="A premium look at the workshop environment and common service areas."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <article
                className="overflow-hidden rounded-md border border-white/10 bg-black/35"
                key={item.title}
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/workshop-hero.png"
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-black text-white">{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Reviews"
            title="Customer Feedback"
            copy="Genuine customer feedback currently displayed on the G&T Motorsports website."
            tone="light"
            align="center"
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {customerReviews.map((review) => (
              <article
                className="rounded-md border border-black/10 bg-neutral-50 p-6"
                key={review.text}
              >
                <div
                  className="text-lg tracking-[0.16em] text-brake"
                  aria-label="Five-star Google review"
                >
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.24em] text-black/45">
                  Google Review
                </p>
                <blockquote className="mt-4 text-base leading-7 text-black/72">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <p className="mt-6 text-sm font-black uppercase tracking-wide text-asphalt">
                  G&T Motorsports Customer
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md bg-brake px-5 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-glow transition hover:bg-asphalt hover:text-white"
              href={site.googleReviewsHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Reviews
              <ExternalIcon />
            </a>
            <a
              className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md border border-black/15 bg-white px-5 py-3 text-sm font-bold uppercase tracking-wide text-asphalt transition hover:border-brake hover:bg-brake hover:text-white"
              href={site.googleReviewsHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Leave Review
              <ExternalIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-black py-16 sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="FAQ"
            title="Mercedes-Benz Service FAQs"
            copy="Useful answers before booking your Mercedes-Benz service with G&T Motorsports."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {faqs.map((faq) => (
              <details
                className="group rounded-md border border-white/10 bg-white/[0.04] p-5 open:border-brake"
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
              Looking for a Mercedes Specialist?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/85">
              Whether your Mercedes needs routine servicing, diagnostics,
              repairs or Digital Service History updates, G&T Motorsports
              provides trusted workmanship and professional care for Mercedes
              owners across Melbourne&apos;s south-east.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/book-online" variant="secondary">
              Book Mercedes Service
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
