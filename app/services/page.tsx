import type { Metadata } from "next";
import { BookingCTA } from "@/components/BookingCTA";
import { PageShell } from "@/components/PageShell";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Mechanic Services",
  description:
    "Mechanic services in Clyde North including logbook servicing, diagnostics, brake repairs, suspension, cooling-system repairs and general mechanical repairs.",
  alternates: {
    canonical: "/services",
  },
};

const services = [
  {
    title: "Logbook servicing",
    icon: "LB",
    slug: "logbook-servicing",
    copy: "Keep your service history up to date with a clear logbook service for your vehicle. The team checks key maintenance items and explains anything that needs attention before extra work proceeds.",
  },
  {
    title: "General servicing",
    icon: "GS",
    slug: "general-servicing",
    copy: "Routine servicing helps your vehicle stay reliable for daily driving. Oil, filters and safety checks are handled with practical advice about what matters now and what can be planned later.",
  },
  {
    title: "Brake inspections and repairs",
    icon: "BR",
    slug: "brake-repairs",
    copy: "If your brakes feel soft, noisy or uneven, a proper inspection can identify worn pads, rotors, fluid issues or related concerns before they become bigger safety problems.",
  },
  {
    title: "Suspension and steering",
    icon: "SS",
    slug: "suspension-steering",
    copy: "Poor ride comfort, clunks, pulling or uneven tyre wear can point to suspension or steering faults. G&T Motorsports can inspect the cause and recommend the right next step.",
  },
  {
    title: "Diagnostics",
    icon: "DX",
    slug: "diagnostics",
    copy: "Warning lights and drivability problems need careful fault-finding. Diagnostic checks help narrow down the issue so repairs can be planned with better confidence.",
  },
  {
    title: "Cooling systems",
    icon: "CS",
    slug: "cooling-systems",
    copy: "Overheating, coolant leaks and temperature changes can quickly lead to damage. Cooling-system checks help protect the engine and keep your car ready for normal use.",
  },
  {
    title: "Battery checks and replacement",
    icon: "BT",
    slug: "battery-replacement",
    copy: "Slow starts or electrical issues can be a sign your battery is close to failing. A battery check gives you a clearer picture before you get stuck unexpectedly.",
  },
  {
    title: "Roadworthy preparation",
    icon: "RW",
    slug: "roadworthy-preparation",
    copy: "If your vehicle needs roadworthy preparation, the workshop can inspect common safety items and help you understand what may need attention before inspection.",
  },
];

export default function ServicesPage() {
  return (
    <PageShell>
      <section className="bg-black py-16 sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Services"
            title="Servicing, diagnostics and mechanical repairs."
            copy="G&T Motorsports services all makes and models. If you do not see the service you need, contact the workshop and we will help guide the next step."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article
                className="flex rounded-md border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-brake sm:flex-col"
                key={service.title}
              >
                <div className="mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-brake text-sm font-black text-white sm:mb-6 sm:mr-0">
                  {service.icon}
                </div>
                <div className="flex min-w-0 flex-1 flex-col">
                  <h3 className="text-xl font-black">{service.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-white/65">
                    {service.copy}
                  </p>
                  <a
                    className="focus-ring mt-6 inline-flex w-fit rounded-md border border-white/20 px-4 py-3 text-xs font-black uppercase tracking-wide text-white transition hover:border-brake hover:bg-brake"
                    href={`/services/${service.slug}`}
                  >
                    Learn More
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <BookingCTA />
    </PageShell>
  );
}
