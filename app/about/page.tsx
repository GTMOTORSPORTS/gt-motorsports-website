import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { PageShell } from "@/components/PageShell";
import { Reviews } from "@/components/Reviews";
import { SectionHeader } from "@/components/SectionHeader";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const canonical = `${site.url}/about`;

export const metadata: Metadata = pageMetadata({
  title: "About G&T Motorsports | Trusted Mechanics in Clyde North",
  description:
    "Learn more about G&T Motorsports, your trusted independent workshop in Clyde North providing servicing, diagnostics, repairs and performance upgrades for all makes and models.",
  path: "/about",
  image: "/workshop-hero.png",
  imageAlt: "G&T Motorsports workshop in Clyde North",
});

const storyPoints = [
  {
    title: "Why the workshop exists",
    copy: "G&T Motorsports was built around a simple idea: customers should feel informed before repair decisions are made. Add the founder's personal story here when you are ready.",
  },
  {
    title: "Honest repair advice",
    copy: "The team focuses on explaining what has been found, what is urgent, what can be planned and what does not need to be replaced unnecessarily.",
  },
  {
    title: "Long-term customer relationships",
    copy: "The goal is not a one-off transaction. G&T Motorsports aims to become the workshop customers can return to for servicing, diagnostics and ongoing vehicle care.",
  },
  {
    title: "Quality workmanship",
    copy: "Every job is approached with care, practical testing and attention to detail, whether it is routine maintenance or more involved mechanical work.",
  },
];

const serviceCards = [
  {
    title: "Logbook Servicing",
    href: "/logbook-servicing",
    copy: "Scheduled servicing for all makes and models, completed according to the relevant manufacturer requirements.",
  },
  {
    title: "Brake Repairs",
    href: "/brake-repairs",
    copy: "Brake inspections, repairs and warning-light checks with clear advice before additional work proceeds.",
  },
  {
    title: "Engine Diagnostics",
    href: "/engine-diagnostics",
    copy: "Warning-light checks, scan data review and practical fault-finding beyond simply reading codes.",
  },
  {
    title: "Mercedes-Benz Service",
    href: "/mercedes-benz-service",
    copy: "Independent Mercedes-Benz servicing, diagnostics and eligible Digital Service History updates where supported.",
  },
  {
    title: "Performance Upgrades",
    href: "/performance-upgrades",
    copy: "Performance upgrade consultations, supporting mechanical work and reliability-focused preparation.",
  },
  {
    title: "Cooling System Repairs",
    href: "/services/cooling-system-repairs",
    copy: "Cooling-system inspections and repairs for leaks, overheating concerns and maintenance requirements.",
  },
  {
    title: "Suspension Repairs",
    href: "/services/suspension-steering",
    copy: "Suspension and steering inspections for noises, handling concerns, wear and safety-related symptoms.",
  },
  {
    title: "General Mechanical Repairs",
    href: "/services/general-car-servicing",
    copy: "Practical mechanical servicing and repairs for family cars, work vehicles, 4WDs and performance vehicles.",
  },
];

const trustCards = [
  {
    title: "Experienced Technicians",
    copy: "Vehicles are inspected by workshop staff who focus on practical diagnosis, safe repairs and clear handover advice.",
  },
  {
    title: "Transparent Quotes",
    copy: "Recommended work is explained before repairs proceed, so customers understand the reason for the quote.",
  },
  {
    title: "Quality Parts",
    copy: "Parts, oils and fluids are selected to suit the vehicle, service requirement and repair being completed.",
  },
  {
    title: "Modern Diagnostic Equipment",
    copy: "Professional diagnostic equipment supports scan data, live data review and system checks where required.",
  },
  {
    title: "Mercedes Digital Service History Updates",
    copy: "Eligible Mercedes-Benz records can be updated after supported scheduled servicing is completed.",
  },
  {
    title: "Friendly Service",
    copy: "Customers can expect direct communication, respectful service and a workshop experience that feels approachable.",
  },
  {
    title: "Performance Vehicle Experience",
    copy: "The team can assist with performance-focused servicing, supporting modifications and reliability work where suitable.",
  },
  {
    title: "Convenient Online Booking",
    copy: "Customers can book online for servicing, inspections and workshop enquiries without waiting on a call back.",
  },
];

const brands = [
  { name: "Mercedes-Benz", href: "/mercedes-benz-service" },
  { name: "BMW" },
  { name: "Audi" },
  { name: "Volkswagen" },
  { name: "Toyota" },
  { name: "Ford" },
  { name: "Mazda" },
  { name: "Hyundai" },
  { name: "Kia" },
  { name: "Nissan" },
  { name: "Honda" },
  { name: "Subaru" },
  { name: "Mitsubishi" },
  { name: "Lexus" },
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

const galleryItems = [
  {
    title: "Workshop",
    alt: "G&T Motorsports workshop space in Clyde North",
  },
  {
    title: "Diagnostics",
    alt: "Vehicle diagnostic inspection at G&T Motorsports",
  },
  {
    title: "Brake Repairs",
    alt: "Brake repair work at G&T Motorsports",
  },
  {
    title: "Performance Work",
    alt: "Performance vehicle work at G&T Motorsports",
  },
  {
    title: "Mercedes Service",
    alt: "Mercedes-Benz service inspection at G&T Motorsports",
  },
  {
    title: "Engine Repairs",
    alt: "Engine repair inspection inside the G&T Motorsports workshop",
  },
  {
    title: "Team",
    alt: "G&T Motorsports workshop team placeholder",
  },
  {
    title: "Finished Vehicles",
    alt: "Finished vehicle ready for customer collection at G&T Motorsports",
  },
];

const faqs = [
  {
    question: "What vehicles do you service?",
    answer:
      "G&T Motorsports services all makes and models, including family vehicles, European cars, 4WDs, light commercial vehicles and performance vehicles.",
  },
  {
    question: "Do you specialise in Mercedes-Benz?",
    answer:
      "G&T Motorsports provides Mercedes-Benz servicing and can update eligible Mercedes-Benz Digital Service History records after supported scheduled servicing. The workshop is independent and does not claim manufacturer affiliation or dealership status.",
  },
  {
    question: "Do you perform logbook servicing?",
    answer:
      "Yes. Logbook servicing is available for all makes and models and is completed according to the relevant manufacturer service schedule using suitable parts, oils and fluids.",
  },
  {
    question: "Can I book online?",
    answer:
      "Yes. Customers can use the online booking page to choose a suitable drop-off or enquiry time, or call the workshop directly.",
  },
  {
    question: "Do you carry out performance upgrades?",
    answer:
      "Yes. G&T Motorsports can discuss performance upgrades, reliability improvements and supporting mechanical work based on the vehicle, condition and intended use.",
  },
  {
    question: "Where is G&T Motorsports located?",
    answer:
      "G&T Motorsports is located at 47B Palladium Circuit, Clyde North VIC 3978, serving customers from Clyde North and surrounding south-east Melbourne suburbs.",
  },
];

function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    logo: site.logo,
    email: site.email,
    telephone: site.phoneInternational,
    address: {
      "@type": "PostalAddress",
      streetAddress: "47B Palladium Circuit",
      addressLocality: "Clyde North",
      addressRegion: "VIC",
      postalCode: "3978",
      addressCountry: "AU",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "About", item: canonical },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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

export default function AboutPage() {
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
            About
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
            About G&T Motorsports
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] text-white sm:text-6xl">
            About G&T Motorsports
          </h1>
          <p className="mt-5 max-w-4xl text-3xl font-black leading-tight text-white sm:text-4xl">
            Quality Workmanship. Honest Advice. Local Experience.
          </p>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
            At G&T Motorsports we believe every customer deserves clear
            communication, quality workmanship and professional service. Whether
            you drive a family vehicle, European car, 4WD or performance
            vehicle, our goal is to keep your vehicle safe, reliable and
            performing at its best.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/book-online">Book Online</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Our story"
            title="A Workshop Built Around Clear Advice and Careful Work"
            copy="G&T Motorsports is an independent automotive workshop in Clyde North. The page below keeps the story factual while leaving room for the business to add personal details as they are confirmed."
            tone="light"
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {storyPoints.map((point) => (
              <article
                className="rounded-md border border-black/10 bg-neutral-50 p-5"
                key={point.title}
              >
                <span className="mb-5 block h-1 w-12 bg-brake" />
                <h2 className="text-xl font-black">{point.title}</h2>
                <p className="mt-3 text-sm leading-6 text-black/65">
                  {point.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-16 sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="What we do"
            title="Servicing, Diagnostics, Repairs and Performance Support"
            copy="The workshop supports everyday drivers and enthusiasts with practical servicing, careful diagnosis and repair advice for all makes and models."
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCards.map((service) => (
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
        <div className="container-shell">
          <SectionHeader
            eyebrow="Why customers choose us"
            title="A Practical Workshop Experience Built Around Trust"
            copy="Customers choose G&T Motorsports for communication, attention to detail and a straightforward approach to servicing and repairs."
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustCards.map((card) => (
              <article
                className="rounded-md border border-white/10 bg-black/35 p-5"
                key={card.title}
              >
                <div
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-md border border-brake/60 bg-brake/10 text-sm font-black text-brake"
                  aria-hidden="true"
                >
                  GT
                </div>
                <h2 className="text-lg font-black text-white">{card.title}</h2>
                <p className="mt-3 text-sm leading-6 text-white/66">
                  {card.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative min-h-[360px] overflow-hidden rounded-md border border-black/10">
            <Image
              src="/workshop-hero.png"
              alt="Clean professional workshop environment at G&T Motorsports"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeader
              eyebrow="Our workshop"
              title="Professional Equipment, Clean Work Areas and Careful Handover"
              copy="The workshop approach is simple: inspect properly, communicate clearly and check the vehicle before collection."
              tone="light"
            />
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {[
                "Professional equipment",
                "Clean working environment",
                "Attention to detail",
                "Customer communication",
                "Quality control before vehicle collection",
                "Clear advice before additional repairs",
              ].map((item) => (
                <div
                  className="rounded-md border border-black/10 bg-neutral-50 p-4 text-sm font-black uppercase tracking-wide text-asphalt"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-16 sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Brands we service"
            title="All Makes and Models Welcome"
            copy="G&T Motorsports services a broad range of European, Japanese, Korean and everyday vehicles. No manufacturer affiliation is claimed."
            align="center"
          />
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
            {brands.map((brand) =>
              brand.href ? (
                <Link
                  className="focus-ring rounded-md border border-white/10 bg-white/[0.04] px-3 py-5 text-center text-sm font-black uppercase tracking-wide text-white transition hover:-translate-y-1 hover:border-brake"
                  href={brand.href}
                  key={brand.name}
                >
                  {brand.name}
                </Link>
              ) : (
                <div
                  className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-5 text-center text-sm font-black uppercase tracking-wide text-white"
                  key={brand.name}
                >
                  {brand.name}
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Service areas"
            title="Local Workshop for Clyde North and Nearby Suburbs"
            copy="Customers visit G&T Motorsports from Clyde North, Cranbourne, Berwick, Narre Warren, Officer, Pakenham, Hallam and Hampton Park."
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
            eyebrow="Workshop gallery"
            title="A Gallery Ready for Real Workshop Images"
            copy="The current gallery uses the available workshop image as a polished placeholder until more real images are supplied."
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {galleryItems.map((item) => (
              <article
                className="overflow-hidden rounded-md border border-white/10 bg-black/35"
                key={item.title}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/workshop-hero.png"
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-black text-white">{item.title}</h2>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Reviews showPageLink />

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="FAQ"
            title="About G&T Motorsports FAQs"
            copy="Helpful answers before booking with the workshop."
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
              Looking for a Workshop You Can Trust?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/85">
              Whether your vehicle needs routine servicing, diagnostics, repairs
              or performance upgrades, G&T Motorsports is committed to quality
              workmanship and honest advice.
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
