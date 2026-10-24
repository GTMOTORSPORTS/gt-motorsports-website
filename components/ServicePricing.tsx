import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { homePrices, servicePrices } from "@/lib/service-pricing";
export function ServicePricing({ allOffers = false }: { allOffers?: boolean }) {
  const offers = allOffers ? servicePrices : homePrices;
  const cards = (
    <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {offers.map((offer) => (
        <article
          className="rounded-md border border-white/15 bg-white/[0.04] p-6"
          key={offer.service}
        >
          <h3 className="text-xl font-black">{offer.service}</h3>
          <p className="mt-3 text-2xl font-black">{offer.price}</p>
          <p className="mt-4 text-sm leading-6 text-white/70">{offer.copy}</p>
          <Link
            className="focus-ring mt-5 inline-block text-sm font-bold underline decoration-brake underline-offset-4"
            href={offer.href}
          >
            View service details
          </Link>
        </article>
      ))}
    </div>
  );
  return (
    <section id="service-pricing" className="bg-asphalt py-12 sm:py-16">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Starting prices"
          title={
            allOffers
              ? "Service Starting Prices"
              : "Popular Service Offers"
          }
          copy="Prices are in AUD. Starting prices depend on your vehicle and the agreed work; confirm inclusions and your total quote before booking."
        />
        {allOffers ? (
          <details className="mt-6 rounded-md border border-white/15 p-5">
            <summary className="focus-ring cursor-pointer font-bold">
              View all seven servicing starting prices
            </summary>
            {cards}
          </details>
        ) : (
          cards
        )}
        <p className="mt-5 text-sm leading-6 text-white/70">
          General Car Service, Mercedes-Benz Service A and walnut blasting
          starting prices include GST. See each service page for inclusions,
          eligibility and pricing conditions. Additional work requires approval.
        </p>
        {!allOffers ? (
          <Link
            href="/services#service-pricing"
            className="focus-ring mt-5 inline-block text-sm font-bold underline underline-offset-4"
          >
            View all servicing prices
          </Link>
        ) : null}
      </div>
    </section>
  );
}
