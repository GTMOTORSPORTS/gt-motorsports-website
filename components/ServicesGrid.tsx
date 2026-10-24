import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";
const services = [
  {
    name: "General & Logbook Servicing",
    copy: "Routine maintenance and manufacturer-scheduled servicing, with scope confirmed for your vehicle.",
    href: "/logbook-servicing",
  },
  {
    name: "Walnut Blasting",
    copy: "Intake valve carbon cleaning for eligible engines, with engine-specific starting prices.",
    href: "/services/walnut-blasting-intake-cleaning-clyde-north",
  },
  {
    name: "Engine Diagnostics",
    copy: "Investigation of warning lights, rough running and starting concerns before repair decisions.",
    href: "/engine-diagnostics",
  },
  {
    name: "Brake Repairs",
    copy: "Brake inspections and repairs for noise, vibration, wear and braking concerns.",
    href: "/brake-repairs",
  },
  {
    name: "Mercedes-Benz Service",
    copy: "Independent servicing, including digital service-record updates for eligible vehicles.",
    href: "/mercedes-benz-service",
  },
  {
    name: "Mechanical Repairs",
    copy: "Explore engine, cooling, suspension, steering and drivetrain inspection and repair services.",
    href: "/services#mechanical-repairs",
  },
];
export function ServicesGrid() {
  return (
    <section id="featured-services" className="bg-black py-12 sm:py-16">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Services"
          title="How Can We Help?"
          copy="Choose a service or explore the complete service list."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.href}
              className="flex flex-col rounded-md border border-white/15 bg-white/[0.04] p-6"
            >
              <h3 className="text-xl font-black">{service.name}</h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-white/70">
                {service.copy}
              </p>
              <Link
                className="focus-ring mt-5 inline-block w-fit text-sm font-bold underline decoration-brake underline-offset-4"
                href={service.href}
              >
                Explore {service.name}
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          <ButtonLink href="/services" variant="ghost">
            View All Services
          </ButtonLink>
          <Link
            href="/services/general-car-servicing"
            className="focus-ring self-center text-sm font-bold underline underline-offset-4"
          >
            General car service details
          </Link>
        </div>
      </div>
    </section>
  );
}
