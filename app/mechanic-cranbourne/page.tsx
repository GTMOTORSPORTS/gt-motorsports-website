import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { PageShell } from "@/components/PageShell";
import { SectionHeader } from "@/components/SectionHeader";
import { customerReviews } from "@/lib/reviews";
import { site } from "@/lib/site";

const canonical = `${site.url}/mechanic-cranbourne`;

export const metadata: Metadata = {
  title: "Mechanic Cranbourne | Car Service & Mercedes Specialist | G&T Motorsports",
  description:
    "Looking for a trusted mechanic in Cranbourne? G&T Motorsports provides logbook servicing, Mercedes servicing, brake repairs, diagnostics and complete vehicle maintenance for all makes and models.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Mechanic Cranbourne | Car Service & Mercedes Specialist | G&T Motorsports",
    description:
      "Looking for a trusted mechanic in Cranbourne? G&T Motorsports provides logbook servicing, Mercedes servicing, brake repairs, diagnostics and complete vehicle maintenance for all makes and models.",
    url: canonical,
    siteName: site.name,
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/workshop-hero.png",
        width: 1200,
        height: 800,
        alt: "G&T Motorsports workshop serving Cranbourne drivers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mechanic Cranbourne | Car Service & Mercedes Specialist | G&T Motorsports",
    description:
      "Looking for a trusted mechanic in Cranbourne? G&T Motorsports provides logbook servicing, Mercedes servicing, brake repairs, diagnostics and complete vehicle maintenance for all makes and models.",
    images: ["/workshop-hero.png"],
  },
};

const mapEmbedUrl =
  "https://www.google.com/maps?q=47B%20Palladium%20Circuit%2C%20Clyde%20North%20VIC%203978&output=embed";

const whyChoose = [
  {
    title: "Experienced Workshop Team",
    copy: "Customers receive practical advice from a team focused on careful inspections, clear communication and professional workmanship.",
  },
  {
    title: "Mercedes Online Service History",
    copy: "Eligible Mercedes-Benz service records can be updated online after scheduled servicing is completed.",
  },
  {
    title: "Quality Parts and Fluids",
    copy: "Genuine and OEM-quality options are used where appropriate, with parts and fluids selected to suit the vehicle and service schedule.",
  },
  {
    title: "Modern Diagnostic Equipment",
    copy: "Fault-finding combines electronic diagnostics with hands-on testing so recommendations are based on evidence.",
  },
  {
    title: "Transparent Pricing",
    copy: "The team explains findings and discusses additional work before repairs proceed, helping you make informed decisions.",
  },
  {
    title: "Friendly Customer Service",
    copy: "Bookings, inspections and repair updates are handled with straightforward communication from drop-off to collection.",
  },
];

const services = [
  {
    title: "Logbook Servicing",
    href: "/services/logbook-servicing",
    copy: "Scheduled servicing for all makes and models using the relevant manufacturer service requirements.",
  },
  {
    title: "Mercedes-Benz Servicing",
    href: "/services/mercedes-benz-servicing",
    copy: "Independent Mercedes-Benz servicing, maintenance and eligible Digital Service Book updates.",
  },
  {
    title: "Brake Repairs",
    href: "/services/brake-repairs",
    copy: "Brake noise, vibration, pad wear, rotor concerns and braking performance inspections.",
  },
  {
    title: "Engine Diagnostics",
    href: "/services/vehicle-diagnostics",
    copy: "Warning lights, rough running and drivability concerns checked with diagnostic equipment.",
  },
  {
    title: "Suspension Repairs",
    href: "/services/suspension-steering",
    copy: "Knocks, clunks, steering feel and suspension wear inspected before repair recommendations.",
  },
  {
    title: "Transmission Servicing",
    href: "/services/clutch-transmission",
    copy: "Inspection and servicing guidance for clutch, transmission and driveline concerns.",
  },
  {
    title: "Air Conditioning Service",
    href: "/services/air-conditioning",
    copy: "Weak cooling, airflow issues, odours and air-conditioning faults assessed clearly.",
  },
  {
    title: "Battery Replacement",
    href: "/services/battery-charging-systems",
    copy: "Battery, starter and charging-system checks for slow cranking and starting issues.",
  },
  {
    title: "Cooling System Repairs",
    href: "/services/cooling-system-repairs",
    copy: "Overheating, coolant leaks and cooling-system concerns inspected before repairs.",
  },
  {
    title: "General Mechanical Repairs",
    href: "/services/general-car-servicing",
    copy: "Routine maintenance and mechanical repair advice for family cars, work vehicles and performance vehicles.",
  },
];

const nearbyAreas = [
  "Cranbourne North",
  "Cranbourne East",
  "Clyde North",
  "Berwick",
  "Narre Warren",
  "Hallam",
  "Officer",
  "Pakenham",
];

const faqs = [
  {
    question: "How often should I service my car?",
    answer:
      "Most vehicles should be serviced according to the manufacturer's time or kilometre schedule. If your vehicle is used for short trips, towing, heavy traffic or commercial driving, it may need more frequent checks.",
  },
  {
    question: "Do you service Mercedes-Benz vehicles?",
    answer:
      "Yes. G&T Motorsports provides independent Mercedes-Benz servicing and maintenance while also servicing all other makes and models.",
  },
  {
    question: "Can you update Mercedes Digital Service Book?",
    answer:
      "G&T Motorsports can update eligible Mercedes-Benz Digital Service Book records online after completing the required scheduled service. Access for other manufacturer online service-record systems is not currently claimed.",
  },
  {
    question: "Do you perform logbook servicing?",
    answer:
      "Yes. Logbook servicing is completed according to the relevant manufacturer service schedule using suitable parts, oils and fluids.",
  },
  {
    question: "Do you repair brakes?",
    answer:
      "Yes. Brake inspections and repairs can include pads, rotors, hydraulic checks and investigation of brake noise, vibration or warning lights.",
  },
  {
    question: "Can you diagnose engine warning lights?",
    answer:
      "Yes. The workshop can inspect engine warning lights using diagnostic equipment and practical testing to identify the likely cause.",
  },
  {
    question: "Do you work on European vehicles?",
    answer:
      "Yes. G&T Motorsports services European vehicles, including Mercedes-Benz, while also maintaining a wide range of Japanese, Korean, Australian and other vehicles.",
  },
  {
    question: "Can I book online?",
    answer:
      "Yes. You can use the online booking page to choose a vehicle drop-off or initial assessment time, or call the workshop directly on 0414 901 666.",
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
        name: "Mechanic Cranbourne",
        item: canonical,
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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

export default function MechanicCranbournePage() {
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
            Mechanic Cranbourne
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
          className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/65"
          aria-hidden="true"
        />
        <div className="container-shell relative">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-brake">
            Professional Mechanic Serving Cranbourne
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] text-white sm:text-6xl">
            Trusted Mechanic Near Cranbourne
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
            Looking for an experienced mechanic near Cranbourne? G&T Motorsports
            provides expert servicing, repairs and diagnostics for all makes and
            models, including Mercedes-Benz and European vehicles. Our workshop
            is only minutes from Cranbourne, making it easy to access trusted
            automotive care with honest advice and quality workmanship.
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
            title="Why Cranbourne Drivers Choose G&T Motorsports"
            copy="Cranbourne drivers choose G&T Motorsports when they want clear answers, careful servicing and a workshop that explains what their vehicle genuinely needs."
            tone="light"
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChoose.map((item) => (
              <article
                className="rounded-md border border-black/10 bg-neutral-50 p-5"
                key={item.title}
              >
                <span className="mb-5 block h-1 w-12 bg-brake" />
                <h3 className="text-xl font-black">{item.title}</h3>
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
              eyebrow="Our services"
              title="Complete Vehicle Servicing and Repairs"
              copy="From routine maintenance to warning-light diagnosis, the workshop supports Cranbourne customers with practical mechanical services for all makes and models."
            />
            <ButtonLink href="/services" variant="ghost" className="w-fit">
              View Services
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => (
              <Link
                className="focus-ring rounded-md border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-brake"
                href={service.href}
                key={service.title}
              >
                <span className="mb-5 block h-1 w-12 bg-brake" />
                <h3 className="text-lg font-black text-white">{service.title}</h3>
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
            eyebrow="European vehicles"
            title="European Vehicle Specialists"
            copy="G&T Motorsports specialises in Mercedes-Benz and European vehicle servicing while continuing to service and repair all makes and models."
          />
          <div className="rounded-md border border-white/10 bg-black/35 p-6">
            <p className="text-sm leading-7 text-white/72">
              The workshop can assist with Mercedes Online Service History
              updates for eligible vehicles after scheduled servicing, factory
              scheduled servicing requirements, electronic diagnostics and
              performance maintenance. G&T Motorsports is an independent
              workshop and does not claim manufacturer affiliation.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="/services/mercedes-benz-servicing">
                Mercedes-Benz Servicing
              </ButtonLink>
              <ButtonLink href="/services/logbook-servicing" variant="ghost">
                Logbook Servicing
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              eyebrow="Convenient location"
              title="Convenient Location for Cranbourne Drivers"
              copy="The Clyde North workshop is a short drive from Cranbourne, giving local drivers convenient access to servicing, diagnostics and mechanical repairs without needing to travel across Melbourne."
              tone="light"
            />
            <p className="mt-6 text-sm leading-7 text-black/65">
              Customers regularly visit from Cranbourne North, Cranbourne East,
              Clyde North, Berwick, Narre Warren, Hallam, Officer and Pakenham.
              Appointments are recommended, and walk-ins are welcome when
              workshop availability allows.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {nearbyAreas.map((area) => (
                <span
                  className="rounded-md border border-black/10 bg-neutral-50 px-4 py-3 text-sm font-bold"
                  key={area}
                >
                  {area}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={site.directionsHref}>Get Directions</ButtonLink>
              <ButtonLink
                href="/contact"
                variant="ghost"
                className="border-black/20 text-asphalt hover:text-white"
              >
                Contact Us
              </ButtonLink>
            </div>
          </div>
          <div className="overflow-hidden rounded-md border border-black/10 bg-neutral-100">
            <iframe
              className="h-[420px] w-full border-0 sm:h-[520px]"
              src={mapEmbedUrl}
              title="Google Map showing G&T Motorsports near Cranbourne"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="bg-asphalt py-16 sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Customer reviews"
            title="Feedback From G&T Motorsports Customers"
            copy="Read genuine customer feedback currently displayed on the website."
            align="center"
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {customerReviews.map((review) => (
              <article
                className="rounded-md border border-white/10 bg-white/[0.045] p-6"
                key={review.text}
              >
                <div
                  className="text-lg tracking-[0.16em] text-brake"
                  aria-label="Five-star Google review"
                >
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.24em] text-white/50">
                  Google Review
                </p>
                <blockquote className="mt-4 text-base leading-7 text-white/82">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <p className="mt-6 text-sm font-black uppercase tracking-wide text-white">
                  G&T Motorsports Customer
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md bg-brake px-5 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-glow transition hover:bg-white hover:text-asphalt"
              href={site.googleReviewsHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More Reviews
              <ExternalIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="FAQ"
            title="Mechanic Cranbourne FAQs"
            copy="Helpful answers before booking your vehicle with G&T Motorsports."
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
              Need a Reliable Mechanic Near Cranbourne?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/85">
              Whether you need routine servicing, diagnostics or major repairs,
              G&T Motorsports delivers professional workmanship, honest advice
              and exceptional customer service.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/book-online" variant="secondary">
              Book Online
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
