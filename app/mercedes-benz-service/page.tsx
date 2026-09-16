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
  title: { absolute: "Mercedes-Benz Service Clyde North | Service A & B | G&T Motorsports" },
  description:
    "Mercedes-Benz service in Clyde North including Service A, Service B, diagnostics and eligible Mercedes-Benz Digital Service Record updates at G&T Motorsports.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Mercedes-Benz Service Clyde North | Service A & B | G&T Motorsports",
    description:
      "Mercedes-Benz service in Clyde North including Service A, Service B, diagnostics and eligible Mercedes-Benz Digital Service Record updates at G&T Motorsports.",
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
    title: "Mercedes-Benz Service Clyde North | Service A & B | G&T Motorsports",
    description:
      "Mercedes-Benz service in Clyde North including Service A, Service B, diagnostics and eligible Mercedes-Benz Digital Service Record updates at G&T Motorsports.",
    images: ["/workshop-hero.png"],
  },
};

const whyChoose = [
  {
    title: "Clear Advice",
    copy: "Findings are explained clearly so you understand what is due now and what can be planned for later.",
  },
  {
    title: "Digital Service Record Updates",
    copy: "Eligible Mercedes-Benz Digital Service Record updates can be completed after supported scheduled servicing is completed.",
  },
  {
    title: "Scheduled Servicing",
    copy: "Service work is planned around the relevant maintenance schedule, vehicle condition and the way the vehicle is used.",
  },
  {
    title: "Advanced Diagnostics",
    copy: "Professional diagnostic equipment helps identify warning lights, electronic faults and performance concerns before parts are replaced.",
  },
  {
    title: "Appropriate Parts & Fluids",
    copy: "Suitable genuine, OEM-equivalent or quality parts are used where appropriate, with fluids selected for the vehicle.",
  },
  {
    title: "Local Convenience",
    copy: "Clyde North customers can book online, call the workshop or request advice before arranging service.",
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
    href: "/logbook-servicing",
    copy: "Scheduled servicing completed according to the relevant Mercedes-Benz maintenance requirements.",
  },
  {
    title: "Service A",
    href: "/mercedes-benz-service",
    copy: "Routine scheduled maintenance with requirements checked against the vehicle's service schedule.",
  },
  {
    title: "Service B",
    href: "/mercedes-benz-service",
    copy: "Generally a more comprehensive scheduled service based on model, age, mileage and maintenance plan.",
  },
  {
    title: "Brake Repairs",
    href: "/brake-repairs",
    copy: "Brake pad, rotor, hydraulic and warning-light concerns inspected before repair approval.",
  },
  {
    title: "Transmission Service",
    href: "/services/clutch-transmission",
    copy: "Transmission, clutch and driveline symptoms assessed with clear recommendations.",
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
];

const serviceScheduleCards = [
  {
    title: "Mercedes-Benz Service A",
    copy:
      "Service A is typically an earlier scheduled maintenance visit focused on essential service items and inspections. The exact items vary by model, engine, age, kilometres and the vehicle's service reminder, so G&T Motorsports checks what is required for your Mercedes-Benz before work begins.",
  },
  {
    title: "Mercedes-Benz Service B",
    copy:
      "Service B is generally a more comprehensive scheduled service. Requirements vary by model, age, mileage and manufacturer schedule, and may include additional checks or replacement items depending on the vehicle. Customers are advised before extra work is carried out.",
  },
];

const diagnosticPoints = [
  "Dashboard warning messages",
  "Engine and drivetrain fault codes",
  "ABS, airbag and electronic system warnings",
  "Poor running, starting or performance concerns",
  "Battery, charging and electrical issues",
  "Vehicle-specific testing before repair recommendations",
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

const galleryItems = [
  {
    title: "Mercedes servicing",
    alt: "Mercedes-Benz servicing at G&T Motorsports in Clyde North",
    src: "/images/workshop/gt-motorsports-workshop-service-clyde-north.jpg.jpeg",
  },
  {
    title: "Mercedes diagnostics",
    alt: "Mercedes-Benz diagnostic inspection using professional equipment",
    src: "/images/workshop/gt-motorsports-diagnostics-clyde-north.jpg.jpeg",
  },
  {
    title: "Brake repairs",
    alt: "Mercedes-Benz brake repair inspection at G&T Motorsports",
    src: "/images/workshop/gt-motorsports-brake-suspension-repair-clyde-north.jpg.jpeg",
  },
  {
    title: "Engine repairs",
    alt: "Mercedes-Benz engine repair inspection in a professional workshop",
    src: "/images/workshop/gt-motorsports-mechanical-repair-clyde-north.jpg.jpeg",
  },
  {
    title: "Vehicle inspection",
    alt: "Mercedes-Benz vehicle inspection at G&T Motorsports",
    src: "/images/workshop/gt-motorsports-vehicle-inspection-clyde-north.jpg.jpeg",
  },
  {
    title: "Technician working",
    alt: "Technician working on a vehicle inside G&T Motorsports workshop",
    src: "/workshop-hero.webp",
  },
];

const mercedesProcessSteps = [
  {
    title: "Consultation",
    copy: "We discuss the service reminder, concerns and vehicle history.",
  },
  {
    title: "Vehicle Inspection",
    copy: "The vehicle is checked against the service request and inspection findings.",
  },
  {
    title: "Recommendation",
    copy: "We explain suitable servicing, diagnostic or repair options clearly.",
  },
  {
    title: "Quote Approval",
    copy: "Additional work only proceeds after the quote is approved.",
  },
  {
    title: "Professional Work",
    copy: "Approved servicing or repairs are completed with care.",
  },
  {
    title: "Quality Inspection",
    copy: "The work is checked before vehicle handover.",
  },
  {
    title: "Road Test",
    copy: "A road test is completed where safe, suitable and required.",
  },
];

const faqs = [
  {
    question: "What is the difference between Mercedes-Benz Service A and Service B?",
    answer:
      "Service A is typically an earlier scheduled service, while Service B is generally more comprehensive. Exact requirements vary by model, age, mileage, engine type and the vehicle's service schedule.",
  },
  {
    question: "Can you update the Mercedes-Benz Digital Service Record?",
    answer:
      "Yes. G&T Motorsports can update the Mercedes-Benz Digital Service Record for eligible vehicles after applicable servicing is completed. Availability depends on the vehicle and service requirements.",
  },
  {
    question: "How often should I service my Mercedes-Benz?",
    answer:
      "Service intervals vary by model, age, kilometres, driving conditions and dashboard service reminders. Follow the logbook, service reminder or manufacturer schedule, and contact G&T Motorsports if you are unsure what is due.",
  },
  {
    question: "Can you diagnose Mercedes-Benz warning messages?",
    answer:
      "Yes. Warning lights, fault messages and electronic concerns can be assessed using diagnostic scanning and practical testing before repair recommendations are made.",
  },
  {
    question: "Do I need to use a Mercedes-Benz dealership for routine servicing?",
    answer:
      "In many cases, routine servicing can be completed by an independent workshop when the correct schedule, suitable parts and appropriate fluids are used. Keep service records and ask the workshop if you are unsure about your vehicle or warranty position.",
  },
  {
    question: "Are you affiliated with Mercedes-Benz?",
    answer:
      "No. G&T Motorsports is an independent automotive workshop and does not claim Mercedes-Benz dealership status, manufacturer affiliation, certification or endorsement.",
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
    name: "Mercedes-Benz Service",
    serviceType: "Mercedes-Benz servicing, diagnostics and repairs",
    url: canonical,
    description:
      "Mercedes-Benz Service A, Service B, diagnostics, maintenance and eligible Mercedes-Benz Digital Service Record updates from G&T Motorsports in Clyde North.",
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
          src="/workshop-hero.webp"
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
            Mercedes-Benz service Clyde North
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] text-white sm:text-6xl">
            Mercedes-Benz Service in Clyde North
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
            G&T Motorsports provides Mercedes-Benz servicing, maintenance and
            diagnostics in Clyde North, including Service A and Service B.
            Mercedes-Benz Digital Service Record updates are available for
            eligible vehicles after applicable servicing is completed.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/book-online">Book a Service</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Get a Quote
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
            title="Why Choose G&T Motorsports for Your Mercedes-Benz?"
            copy="Mercedes-Benz owners choose G&T Motorsports for clear advice, appropriate fluids and parts, professional diagnostic equipment, careful workmanship and local convenience in Clyde North."
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
          <SectionHeader
            eyebrow="Service schedules"
            title="Mercedes-Benz Service A and Service B"
            copy="Your Mercedes-Benz service requirements depend on the vehicle, its service reminder and the applicable maintenance schedule."
            align="center"
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {serviceScheduleCards.map((card) => (
              <article
                className="rounded-md border border-white/10 bg-white/[0.04] p-6 shadow-2xl sm:p-8"
                key={card.title}
              >
                <span className="mb-5 block h-1 w-12 bg-brake" />
                <h2 className="text-2xl font-black leading-tight text-white sm:text-3xl">
                  {card.title}
                </h2>
                <p className="mt-4 text-base leading-7 text-white/70">
                  {card.copy}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <ButtonLink href="/logbook-servicing" variant="ghost">
              Logbook Servicing
            </ButtonLink>
            <ButtonLink href="/book-online">Book a Service</ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-asphalt py-16 sm:py-24">
        <div className="container-shell">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              eyebrow="Mercedes services"
              title="Mercedes-Benz Service, Diagnostics and Repairs"
              copy="From scheduled maintenance to complex fault finding, G&T Motorsports gives Mercedes owners a clear pathway from inspection through to approved repair."
            />
            <ButtonLink href="/mercedes-benz-service" variant="ghost" className="w-fit">
              Mercedes Service Details
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mercedesServices.map((service) => (
              <Link
                className="focus-ring rounded-md border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-brake"
                href={service.href}
                key={service.title}
              >
                <span className="mb-5 block h-1 w-12 bg-brake" />
                <h3 className="text-lg font-black leading-tight text-white sm:text-xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/66">
                  {service.copy}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-16 sm:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            eyebrow="Diagnostics"
            title="Mercedes-Benz Diagnostics"
            copy="Mercedes-Benz diagnostics can include diagnostic scanning, warning-light checks, fault investigation and vehicle-specific testing before repair recommendations are made."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {diagnosticPoints.map((item) => (
              <div
                className="rounded-md border border-white/10 bg-white/[0.04] p-5"
                key={item}
              >
                <span className="mb-4 block h-1 w-10 bg-brake" />
                <h3 className="text-lg font-black leading-6 text-white">{item}</h3>
              </div>
            ))}
          </div>
          <div className="lg:col-start-2">
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/engine-diagnostics" variant="ghost">
                Diagnostics
              </ButtonLink>
              <ButtonLink href="/brake-repairs" variant="ghost">
                Brake Repairs
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell">
          <div className="overflow-hidden rounded-md border border-black/10 bg-neutral-50">
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[320px]">
                <Image
                  src="/images/workshop/gt-motorsports-vehicle-inspection-clyde-north.jpg.jpeg"
                  alt="Mercedes-Benz service inspection at G&T Motorsports"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-brake">
                  Mercedes-Benz Digital Service Record
                </p>
                <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                  Mercedes-Benz Digital Service Record
                </h2>
                <p className="mt-5 text-base leading-7 text-black/68">
                  G&T Motorsports can update the Mercedes-Benz Digital Service
                  Record for eligible vehicles after applicable servicing is
                  completed. Keeping a complete digital service record can help
                  preserve service history, support future maintenance decisions
                  and provide useful documentation when it is time to sell or
                  trade the vehicle.
                </p>
                <p className="mt-4 text-sm leading-6 text-black/60">
                  Availability depends on the vehicle model and manufacturer
                  requirements, so please mention Digital Service Record updates
                  when booking your Mercedes-Benz service.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="/book-online">Book a Service</ButtonLink>
                  <ButtonLink
                    href="/logbook-servicing"
                    variant="secondary"
                    className="border-black/20"
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
            copy="G&T Motorsports services a broad range of Mercedes-Benz passenger and SUV model families, including A-Class, C-Class, E-Class, S-Class, CLA, GLA, GLB, GLC, GLE, GLS and V-Class vehicles. Contact the workshop if you are unsure about your model or service requirement."
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

      <section className="bg-white py-14 text-asphalt sm:py-20">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Process"
            title="A Clear Process From Booking to Collection"
            copy="The process is designed to give Mercedes owners confidence at every stage, from first contact through to handover."
            tone="light"
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-7">
            {mercedesProcessSteps.map((step, index) => (
              <article
                className="flex min-h-[13rem] flex-col rounded-md border border-black/10 bg-neutral-50 p-5 lg:p-4"
                key={step.title}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brake">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 whitespace-normal text-lg font-black leading-tight text-asphalt lg:text-[0.9rem]">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-black/65">{step.copy}</p>
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
                    src={item.src}
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
              Book Your Mercedes-Benz Service
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/85">
              Whether your Mercedes needs routine servicing, diagnostics,
              repairs or Digital Service Record updates, G&T Motorsports
              provides trusted workmanship and professional care for Mercedes
              owners across Melbourne&apos;s south-east.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/book-online" variant="secondary">
              Book a Service
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
