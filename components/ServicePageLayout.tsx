import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { PageShell } from "@/components/PageShell";
import { SectionHeader } from "@/components/SectionHeader";
import type { ServicePage } from "@/lib/service-pages";
import { getServicePage, serviceCanonicalUrl } from "@/lib/service-pages";
import { site } from "@/lib/site";

const serviceArea = [
  "Clyde North",
  "Clyde",
  "Cranbourne",
  "Berwick",
  "Officer",
  "Narre Warren",
  "Hampton Park",
  "Pakenham",
];

export function generateServiceMetadata(slug: string): Metadata {
  const service = getServicePage(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.metadataTitle,
    description: service.metadataDescription,
    alternates: {
      canonical: serviceCanonicalUrl(service.slug),
    },
    openGraph: {
      title: service.metadataTitle,
      description: service.metadataDescription,
      url: serviceCanonicalUrl(service.slug),
      siteName: site.name,
      locale: "en_AU",
      type: "website",
    },
  };
}

export function ServicePageLayout({ slug }: { slug: string }) {
  const service = getServicePage(slug);

  if (!service) {
    notFound();
  }

  return (
    <PageShell>
      <ServiceStructuredData service={service} />
      <ServiceHero service={service} />
      <ServiceTrustBar points={service.trustPoints} />
      <Breadcrumbs service={service} />
      <ServiceIntroSection service={service} />
      <ServiceChecklist service={service} />
      {service.warningSigns ? <WarningSignsSection service={service} /> : null}
      <ProcessSection service={service} />
      <WhyChooseUsSection service={service} />
      <ServiceFAQ service={service} />
      <RelatedServices service={service} />
      <LocalServiceArea service={service} />
      <ServiceCTA service={service} />
    </PageShell>
  );
}

export function ServiceHero({ service }: { service: ServicePage }) {
  return (
    <section className="relative overflow-hidden bg-black py-16 sm:py-24">
      <div
        className="absolute inset-0 bg-[url('/workshop-hero.png')] bg-cover bg-center opacity-20"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black via-black/92 to-black/70"
        aria-hidden="true"
      />
      <div className="container-shell relative">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-brake">
          {service.eyebrow}
        </p>
        <h1 className="max-w-4xl text-5xl font-black leading-[0.95] text-white sm:text-6xl">
          {service.title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76">
          {service.introduction}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/book-online">Book Online</ButtonLink>
          <ButtonLink href={site.phoneHref} variant="secondary">
            Call {site.phone}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function ServiceTrustBar({ points }: { points: string[] }) {
  return (
    <section className="bg-white text-asphalt">
      <div className="container-shell grid gap-3 py-6 sm:grid-cols-2 lg:grid-cols-4">
        {points.map((point) => (
          <div className="rounded-md border border-black/10 bg-white p-4" key={point}>
            <span className="mb-3 block h-1 w-10 bg-brake" />
            <p className="text-sm font-black uppercase tracking-wide">{point}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Breadcrumbs({ service }: { service: ServicePage }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-asphalt py-5">
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
          {service.name}
        </li>
      </ol>
    </nav>
  );
}

export function ServiceIntroSection({ service }: { service: ServicePage }) {
  return (
    <section className="bg-asphalt py-16 sm:py-24">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeader
          eyebrow="When to book"
          title={`Is ${service.name.toLowerCase()} the right service?`}
          copy={service.symptomsIntro}
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {service.symptoms.map((item) => (
            <div className="rounded-md border border-white/10 bg-black/35 p-5" key={item}>
              <span className="mb-4 block h-1 w-10 bg-brake" />
              <h3 className="text-lg font-black text-white">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceChecklist({ service }: { service: ServicePage }) {
  return (
    <section className="bg-white py-16 text-asphalt sm:py-24">
      <div className="container-shell">
        <SectionHeader
          eyebrow="What we check"
          title={`What ${service.name} Can Include`}
          copy="The exact work depends on the vehicle, inspection findings, service schedule and approved repair scope."
          tone="light"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.includedItems.map((item) => (
            <div className="rounded-md border border-black/10 bg-neutral-50 p-5" key={item}>
              <span className="mb-4 block h-1 w-10 bg-brake" />
              <h3 className="text-lg font-black">{item}</h3>
            </div>
          ))}
        </div>
        {service.specialNotice || service.digitalServiceRecordNotice ? (
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {service.specialNotice ? (
              <p className="rounded-md border border-black/10 bg-white p-5 text-sm font-bold leading-6 text-black/70">
                {service.specialNotice}
              </p>
            ) : null}
            {service.digitalServiceRecordNotice ? (
              <p className="rounded-md border border-brake/30 bg-brake/5 p-5 text-sm font-bold leading-6 text-black/70">
                {service.digitalServiceRecordNotice}
              </p>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function WarningSignsSection({ service }: { service: ServicePage }) {
  return (
    <section className="bg-black py-16 sm:py-24">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Warning signs"
          title="Signs Worth Getting Checked"
          copy="These symptoms do not prove one specific failure, but they are good reasons to arrange a professional inspection."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.warningSigns?.map((sign) => (
            <article className="rounded-md border border-white/10 bg-white/[0.04] p-5" key={sign}>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-brake">
                Check
              </p>
              <h3 className="mt-4 text-xl font-black text-white">{sign}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection({ service }: { service: ServicePage }) {
  return (
    <section className="bg-asphalt py-16 sm:py-24">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Process"
          title="How the Workshop Handles It"
          copy="A clear process helps you understand what is being checked, what has been found and what needs approval."
          align="center"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {service.processSteps.map((step, index) => (
            <article className="rounded-md border border-white/10 bg-black/35 p-5" key={step}>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-brake">
                Step {index + 1}
              </p>
              <h3 className="mt-5 text-lg font-black leading-6 text-white">{step}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyChooseUsSection({ service }: { service: ServicePage }) {
  return (
    <section className="bg-white py-16 text-asphalt sm:py-24">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Why choose us"
          title="Why Choose G&T Motorsports"
          copy="Straightforward advice, careful workmanship and convenient booking for local drivers."
          tone="light"
          align="center"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {service.benefits.map((item) => (
            <article className="rounded-md border border-black/10 bg-neutral-50 p-5" key={item.title}>
              <span className="mb-5 block h-1 w-12 bg-brake" />
              <h3 className="text-xl font-black">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-black/65">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceFAQ({ service }: { service: ServicePage }) {
  return (
    <section className="bg-black py-16 sm:py-24">
      <div className="container-shell">
        <SectionHeader
          eyebrow="FAQ"
          title={`${service.name} FAQs`}
          copy="Helpful answers before you book."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {service.faqs.map((faq) => (
            <details
              className="group rounded-md border border-white/10 bg-white/[0.04] p-5 open:border-brake"
              key={faq.question}
            >
              <summary className="focus-ring cursor-pointer list-none text-xl font-black text-white">
                {faq.question}
              </summary>
              <p className="mt-4 text-sm leading-6 text-white/66">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RelatedServices({ service }: { service: ServicePage }) {
  return (
    <section className="bg-asphalt py-16 sm:py-24">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeader
          eyebrow="Related services"
          title="You May Also Need"
          copy="Useful internal links for common service combinations and next steps."
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {service.relatedServices.map((related) => (
            <Link
              className="focus-ring rounded-md border border-white/10 bg-black/35 p-5 transition hover:-translate-y-1 hover:border-brake"
              href={related.href}
              key={related.href}
            >
              <span className="mb-4 block h-1 w-10 bg-brake" />
              <span className="text-lg font-black text-white">{related.label}</span>
            </Link>
          ))}
          <Link
            className="focus-ring rounded-md border border-white/10 bg-black/35 p-5 transition hover:-translate-y-1 hover:border-brake"
            href="/reviews"
          >
            <span className="mb-4 block h-1 w-10 bg-brake" />
            <span className="text-lg font-black text-white">Customer Reviews</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function LocalServiceArea({ service }: { service: ServicePage }) {
  return (
    <section className="bg-white py-16 text-asphalt sm:py-24">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Local service area"
          title={`${service.name} for Clyde North and Nearby Suburbs`}
          copy={service.localAreaText}
          tone="light"
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {serviceArea.map((suburb) => (
            <span
              className="rounded-md border border-black/10 bg-neutral-50 px-4 py-3 text-sm font-bold text-black/70"
              key={suburb}
            >
              {suburb}
            </span>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-4 text-sm font-bold text-black/65">
          <Link className="focus-ring hover:text-black" href="/services">
            All Services
          </Link>
          <Link className="focus-ring hover:text-black" href="/book-online">
            Book Online
          </Link>
          <Link className="focus-ring hover:text-black" href="/contact">
            Contact Us
          </Link>
          <Link className="focus-ring hover:text-black" href="/reviews">
            Reviews
          </Link>
        </div>
      </div>
    </section>
  );
}

export function ServiceCTA({ service }: { service: ServicePage }) {
  return (
    <section className="bg-brake py-12 text-white">
      <div className="container-shell flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/80">
            Ready to book?
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
            {service.ctaHeading}
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-white/85">
            {service.ctaText}
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/book-online" variant="secondary">
            Book Online
          </ButtonLink>
          <ButtonLink href={site.phoneHref} variant="ghost">
            Call Now
          </ButtonLink>
          <ButtonLink href="/contact" variant="ghost">
            Contact Us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

export function ServiceStructuredData({ service }: { service: ServicePage }) {
  const canonical = serviceCanonicalUrl(service.slug);
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical}#service`,
    name: service.title,
    description: service.shortDescription,
    serviceType: service.name,
    url: canonical,
    provider: {
      "@type": "AutoRepair",
      "@id": `${site.url}/#business`,
      name: site.name,
      telephone: site.phoneInternational,
      email: site.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: "47B Palladium Circuit",
        addressLocality: "Clyde North",
        addressRegion: "VIC",
        postalCode: "3978",
        addressCountry: "AU",
      },
    },
    areaServed: serviceArea.map((suburb) => ({
      "@type": "Place",
      name: suburb,
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
      { "@type": "ListItem", position: 3, name: service.name, item: canonical },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
