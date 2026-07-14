import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";
import { servicePages } from "@/lib/service-pages";

const featuredServiceSlugs = [
  "logbook-servicing",
  "vehicle-diagnostics",
  "brake-repairs",
  "roadworthy-certificate",
  "cooling-system-repairs",
  "suspension-steering",
  "air-conditioning",
  "battery-charging-systems",
  "clutch-transmission",
  "general-car-servicing",
  "mercedes-benz-servicing",
];

const featuredServices = featuredServiceSlugs
  .map((slug) => {
    const service = servicePages.find((item) => item.slug === slug);

    if (!service) {
      return null;
    }

    return {
      name:
        {
          "vehicle-diagnostics": "Engine Diagnostics",
          "suspension-steering": "Suspension Repairs",
          "battery-charging-systems": "Battery Services",
          "clutch-transmission": "Clutch & Transmission Repairs",
          "general-car-servicing": "General Mechanical Repairs",
          "mercedes-benz-servicing": "Mercedes-Benz Service",
        }[service.slug] || service.name,
      description: service.shortDescription,
      href:
        service.slug === "roadworthy-certificate"
          ? "/roadworthy-certificate"
          : service.slug === "mercedes-benz-servicing"
            ? "/mercedes-benz-service"
            : `/services/${service.slug}`,
    };
  })
  .filter((service): service is { name: string; description: string; href: string } =>
    Boolean(service),
  )
  .concat([
    {
      name: "Performance Upgrades",
      description:
        "Performance upgrade consultations and supporting mechanical work for a range of suitable vehicles.",
      href: "/performance-upgrades",
    },
  ]);

export function ServicesGrid() {
  return (
    <section className="bg-black py-16 sm:py-20">
      <div className="container-shell">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Services"
            title="Mechanical services for all makes and models."
            copy="Book routine maintenance, inspections, diagnostics or repairs with a workshop that keeps the process clear from start to finish."
          />
          <ButtonLink href="/services" variant="ghost" className="w-fit">
            View All Services
          </ButtonLink>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredServices.map((service, index) => (
            <article
              className="rounded-md border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-brake"
              key={service.href}
            >
              <p className="text-xs font-black uppercase tracking-[0.22em] text-brake">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-6 text-lg font-black text-white">{service.name}</h3>
              <p className="mt-3 text-sm leading-6 text-white/65">
                {service.description}
              </p>
              <Link
                className="focus-ring mt-5 inline-flex rounded-md border border-white/20 px-4 py-3 text-xs font-black uppercase tracking-wide text-white transition hover:border-brake hover:bg-brake"
                href={service.href}
              >
                Learn More
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
