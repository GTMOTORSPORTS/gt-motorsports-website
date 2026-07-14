import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { PageShell } from "@/components/PageShell";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SectionHeader } from "@/components/SectionHeader";
import { customerReviews } from "@/lib/reviews";
import { site } from "@/lib/site";

const canonical = `${site.url}/mechanic-berwick`;

export const metadata: Metadata = {
  title: { absolute: "Mechanic Berwick | G&T Motorsports" },
  description:
    "Looking for a trusted mechanic near Berwick? G&T Motorsports provides expert logbook servicing, Mercedes-Benz servicing, diagnostics, brake repairs and complete vehicle maintenance for all makes and models.",
  alternates: {
    canonical,
  },
  openGraph: {
    title: "Mechanic Berwick | G&T Motorsports",
    description:
      "Looking for a trusted mechanic near Berwick? G&T Motorsports provides expert logbook servicing, Mercedes-Benz servicing, diagnostics, brake repairs and complete vehicle maintenance for all makes and models.",
    url: canonical,
    siteName: site.name,
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/workshop-hero.png",
        width: 1200,
        height: 800,
        alt: "Technician working inside the G&T Motorsports workshop near Berwick",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mechanic Berwick | G&T Motorsports",
    description:
      "Looking for a trusted mechanic near Berwick? G&T Motorsports provides expert logbook servicing, Mercedes-Benz servicing, diagnostics, brake repairs and complete vehicle maintenance for all makes and models.",
    images: ["/workshop-hero.png"],
  },
};

const mapEmbedUrl =
  "https://www.google.com/maps?q=47B%20Palladium%20Circuit%2C%20Clyde%20North%20VIC%203978&output=embed";

const trustItems = [
  "Family-Owned Business",
  "Qualified Technicians",
  "Mercedes Specialists",
  "European Vehicle Experts",
  "Latest Diagnostic Equipment",
  "Genuine & OEM Parts",
  "Honest Advice",
  "Fast Turnaround",
];

const brands = [
  { name: "Mercedes-Benz", href: "/services/mercedes-benz-servicing" },
  { name: "BMW", href: "/services" },
  { name: "Audi", href: "/services" },
  { name: "Volkswagen", href: "/services" },
  { name: "Skoda", href: "/services" },
  { name: "Porsche", href: "/services" },
  { name: "Toyota", href: "/services" },
  { name: "Honda", href: "/services" },
  { name: "Mazda", href: "/services" },
  { name: "Nissan", href: "/services" },
  { name: "Ford", href: "/services" },
  { name: "Hyundai", href: "/services" },
  { name: "Kia", href: "/services" },
  { name: "Subaru", href: "/services" },
  { name: "Lexus", href: "/services" },
];

const services = [
  {
    title: "Logbook Servicing",
    href: "/services/logbook-servicing",
    copy: "Scheduled maintenance completed to the relevant manufacturer service requirements.",
  },
  {
    title: "Mercedes-Benz Service",
    href: "/services/mercedes-benz-servicing",
    copy: "Independent Mercedes-Benz servicing with eligible Digital Service Book updates.",
  },
  {
    title: "Brake Repairs",
    href: "/services/brake-repairs",
    copy: "Brake noise, vibration, pads, rotors and braking performance concerns inspected.",
  },
  {
    title: "Engine Diagnostics",
    href: "/services/vehicle-diagnostics",
    copy: "Warning lights and drivability issues checked with modern diagnostic equipment.",
  },
  {
    title: "Transmission Service",
    href: "/services/clutch-transmission",
    copy: "Transmission, clutch and driveline concerns assessed before repair approval.",
  },
  {
    title: "Suspension Repairs",
    href: "/services/suspension-steering",
    copy: "Steering feel, suspension noise and worn components inspected carefully.",
  },
  {
    title: "Cooling System Repairs",
    href: "/services/cooling-system-repairs",
    copy: "Cooling leaks, overheating symptoms and coolant system faults investigated.",
  },
  {
    title: "Battery Replacement",
    href: "/services/battery-charging-systems",
    copy: "Battery, starter and charging checks for reliable everyday starting.",
  },
  {
    title: "Air Conditioning Service",
    href: "/services/air-conditioning",
    copy: "Airflow, cooling performance and air-conditioning fault symptoms assessed.",
  },
  {
    title: "General Mechanical Repairs",
    href: "/services/general-car-servicing",
    copy: "Practical servicing and repair support for all makes and models.",
  },
];

const galleryItems = [
  {
    title: "Brake Repairs",
    alt: "Brake repair work at G&T Motorsports near Berwick",
  },
  {
    title: "Mercedes Diagnostics",
    alt: "Mercedes-Benz diagnostic inspection at G&T Motorsports",
  },
  {
    title: "Logbook Service",
    alt: "Logbook servicing for Berwick drivers at G&T Motorsports",
  },
  {
    title: "Engine Repairs",
    alt: "Engine repair inspection inside the G&T Motorsports workshop",
  },
  {
    title: "Suspension Repairs",
    alt: "Suspension repair assessment at G&T Motorsports",
  },
  {
    title: "Vehicle Inspection",
    alt: "Vehicle inspection at G&T Motorsports near Berwick",
  },
];

const faqs = [
  {
    question: "Do you service vehicles for Berwick residents?",
    answer:
      "Yes. G&T Motorsports regularly welcomes customers from Berwick and nearby south-east Melbourne suburbs for servicing, diagnostics and mechanical repairs.",
  },
  {
    question: "How far is your workshop from Berwick?",
    answer:
      "The workshop is located at 47B Palladium Circuit, Clyde North, only a short drive from Berwick depending on traffic and your starting point.",
  },
  {
    question: "Can you update Mercedes Digital Service History?",
    answer:
      "Yes. G&T Motorsports can update eligible Mercedes-Benz Digital Service Book records online after the required scheduled service is completed.",
  },
  {
    question: "Do you perform logbook servicing?",
    answer:
      "Yes. Logbook servicing is available for all makes and models and is completed according to the relevant manufacturer schedule.",
  },
  {
    question: "Do you repair brakes?",
    answer:
      "Yes. Brake repairs can include inspection of pads, rotors, hydraulic components, brake noise, vibration and braking performance concerns.",
  },
  {
    question: "Can I book online?",
    answer:
      "Yes. You can book online for vehicle drop-off or an initial assessment, or call G&T Motorsports directly on 0414 901 666.",
  },
  {
    question: "Do you work on European vehicles?",
    answer:
      "Yes. The workshop services Mercedes-Benz and European vehicles, while also servicing a broad range of other makes and models.",
  },
  {
    question: "What brands do you service?",
    answer:
      "G&T Motorsports services all makes and models, including Mercedes-Benz, BMW, Audi, Volkswagen, Toyota, Honda, Mazda, Nissan, Ford, Hyundai, Kia, Subaru and Lexus.",
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
        name: "Mechanic Berwick",
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

export default function MechanicBerwickPage() {
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
            Mechanic Berwick
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
          className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60"
          aria-hidden="true"
        />
        <div className="container-shell relative">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-brake">
            Professional Car Service for Berwick Drivers
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] text-white sm:text-6xl">
            Trusted Mechanic Near Berwick
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/78">
            If you&apos;re looking for an experienced mechanic near Berwick,
            G&T Motorsports offers dealership-quality servicing without the
            dealership price. From routine maintenance to advanced diagnostics
            and Mercedes-Benz servicing, our experienced technicians help keep
            your vehicle safe, reliable and performing at its best.
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
            title="Why Berwick Drivers Choose G&T Motorsports"
            copy="The workshop combines clear communication, careful workmanship and modern diagnostic support for Berwick drivers who want a dependable local alternative for vehicle care."
            tone="light"
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item) => (
              <article
                className="rounded-md border border-black/10 bg-neutral-50 p-5"
                key={item}
              >
                <span
                  aria-hidden="true"
                  className="mb-5 flex h-10 w-10 items-center justify-center rounded-md bg-brake text-lg font-black text-white"
                >
                  &#10003;
                </span>
                <h3 className="text-lg font-black">{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-asphalt py-16 sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Brands we service"
            title="All Makes and Models Welcome"
            copy="G&T Motorsports services European, Japanese, Korean and everyday family vehicles. Brand tiles below link to the current services hub until dedicated manufacturer pages are published."
          />
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {brands.map((brand) => (
              <Link
                className="focus-ring rounded-md border border-white/10 bg-white/[0.04] px-4 py-5 text-center text-sm font-black uppercase tracking-wide text-white transition hover:-translate-y-1 hover:border-brake"
                href={brand.href}
                key={brand.name}
              >
                {brand.name}
              </Link>
            ))}
          </div>
          <p className="mt-5 text-sm leading-6 text-white/55">
            G&T Motorsports is an independent workshop and does not claim
            manufacturer affiliation or endorsement.
          </p>
        </div>
      </section>

      <section className="bg-black py-16 sm:py-24">
        <div className="container-shell">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              eyebrow="Our services"
              title="Car Service Berwick Drivers Can Book Online"
              copy="Choose the closest service category below, or contact the workshop if your vehicle needs diagnosis before a repair pathway is clear."
            />
            <ButtonLink href="/services" variant="ghost" className="w-fit">
              View All Services
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

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeader
            eyebrow="European vehicles"
            title="Mercedes and European Vehicle Specialists"
            copy="European vehicles often need the right tooling, service information and inspection process. G&T Motorsports supports Mercedes-Benz and European vehicle owners while still servicing all other makes and models."
            tone="light"
          />
          <div className="rounded-md border border-black/10 bg-neutral-50 p-6">
            <ul className="grid gap-4 text-sm leading-6 text-black/68 sm:grid-cols-2">
              <li>Mercedes Online Service History updates for eligible vehicles</li>
              <li>Factory scheduled servicing requirements followed where applicable</li>
              <li>Advanced diagnostics for warning lights and performance concerns</li>
              <li>Preventative maintenance to help reduce avoidable repair surprises</li>
              <li>OEM quality parts and suitable fluids selected for the vehicle</li>
              <li>Clear recommendations before extra work proceeds</li>
            </ul>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/services/mercedes-benz-servicing">
                Mercedes Service Berwick
              </ButtonLink>
              <ButtonLink
                href="/services/vehicle-diagnostics"
                variant="ghost"
                className="border-black/20 text-asphalt hover:text-white"
              >
                Diagnostics
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-asphalt py-16 sm:py-24">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              eyebrow="Convenient for Berwick"
              title="Only Minutes from Berwick"
              copy="G&T Motorsports is located in Clyde North, making it a convenient choice for Berwick residents who want professional servicing without travelling deep into the city."
            />
            <p className="mt-6 text-sm leading-7 text-white/68">
              The workshop is also easy to reach from Clyde North, Cranbourne,
              Officer, Beaconsfield, Narre Warren, Hallam and Pakenham. Book
              online for vehicle drop-off, or call ahead if your vehicle is
              unsafe to drive.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={site.directionsHref}>Get Directions</ButtonLink>
              <ButtonLink href="/contact" variant="ghost">
                Contact Us
              </ButtonLink>
            </div>
          </div>
          <div className="overflow-hidden rounded-md border border-white/10 bg-black/30">
            <iframe
              className="h-[420px] w-full border-0 sm:h-[520px]"
              src={mapEmbedUrl}
              title="Google Map showing G&T Motorsports near Berwick"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Process"
            title="How Our Process Works"
            copy="A simple, transparent process helps Berwick customers understand what happens from the first booking through to collection."
            tone="light"
            align="center"
          />
          <ProcessSteps tone="light" />
        </div>
      </section>

      <section className="bg-black py-16 sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Workshop gallery"
            title="Inside the Workshop"
            copy="A look at common service and repair areas handled by G&T Motorsports."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item) => (
              <article
                className="overflow-hidden rounded-md border border-white/10 bg-white/[0.04]"
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

      <section className="bg-asphalt py-16 sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Customer reviews"
            title="Google Reviews From G&T Motorsports Customers"
            copy="Genuine customer feedback currently displayed on the website."
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
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md bg-brake px-5 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-glow transition hover:bg-white hover:text-asphalt"
              href={site.googleReviewsHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More Reviews
              <ExternalIcon />
            </a>
            <a
              className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md border border-white/20 bg-white px-5 py-3 text-sm font-bold uppercase tracking-wide text-asphalt transition hover:border-brake hover:bg-brake hover:text-white"
              href={site.googleReviewsHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Leave a Review
              <ExternalIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-asphalt sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="FAQ"
            title="Mechanic Berwick FAQs"
            copy="Helpful answers for Berwick drivers before booking with G&T Motorsports."
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
              Looking for a Reliable Mechanic Near Berwick?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/85">
              Whether you need routine servicing, diagnostics, brake repairs or
              Mercedes-Benz maintenance, G&T Motorsports delivers honest advice,
              quality workmanship and exceptional customer service for drivers
              across Berwick and Melbourne&apos;s south-east.
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
