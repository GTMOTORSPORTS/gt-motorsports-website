import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";

const pricingItems = [
  { service: "General Car Service", price: "From $149" },
  { service: "SUV / 4x4 Service", price: "From $220" },
  { service: "Van / Light Commercial Service", price: "From $249" },
  { service: "Major Service", price: "From $599" },
  { service: "European Car Service", price: "From $249" },
  { service: "Mercedes-Benz Service A", price: "From $299" },
  { service: "Mercedes-Benz Service B", price: "From $549" },
];

export function ServicePricing() {
  return (
    <section className="bg-asphalt py-16 sm:py-20">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Pricing"
          title="Straightforward Service Pricing"
          copy="Quality servicing with clear starting prices. Final pricing depends on your vehicle, oil requirements, filters and manufacturer specifications."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pricingItems.map((item, index) => (
            <article
              className="rounded-md border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-brake"
              key={item.service}
            >
              <p className="text-xs font-black uppercase tracking-[0.22em] text-brake">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-6 text-lg font-black text-white">{item.service}</h3>
              <p className="mt-3 text-2xl font-black text-white">{item.price}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-md border border-white/10 bg-black/35 p-5 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <p className="text-sm leading-6 text-white/70">
            Need an exact price for your vehicle? Send us your registration or
            vehicle details and we'll confirm what's required.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:mt-0 sm:flex-row sm:shrink-0">
            <ButtonLink href="/book-online">Book a Service</ButtonLink>
            <ButtonLink href="/contact" variant="ghost">
              Get a Quote
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
