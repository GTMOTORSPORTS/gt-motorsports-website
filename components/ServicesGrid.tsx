import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

const descriptions = [
  "Manufacturer-aligned servicing that helps protect your vehicle history.",
  "Oil, filters, safety checks and routine care for everyday reliability.",
  "Brake pad, rotor and fluid checks with clear recommendations.",
  "Comfort, handling and tyre-wear checks for a better drive.",
  "Fault finding and warning light checks using modern diagnostic processes.",
  "Cooling system inspections, leak checks and overheating support.",
  "Battery health checks and replacement advice before you get stuck.",
  "Pre-checks and repairs to help prepare your vehicle for inspection.",
];

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
            View Services
          </ButtonLink>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {site.services.map((service, index) => (
            <article className="rounded-md border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-brake" key={service}>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-brake">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-6 text-lg font-black text-white">{service}</h3>
              <p className="mt-3 text-sm leading-6 text-white/65">
                {descriptions[index]}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
