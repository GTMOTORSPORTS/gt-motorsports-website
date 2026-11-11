import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";
import { homePrices, minorOffer, pricingCategories, washOffer, washScope, priceCondition } from "@/lib/service-pricing";

export function ServicePricing({ allOffers = false }: { allOffers?: boolean }) {
  return <section id="service-pricing" className="bg-asphalt py-12 sm:py-16"><div className="container-shell">
    <SectionHeader eyebrow="Starting prices" title="Minor Service From $199 Including GST" copy={minorOffer} />
    <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {allOffers ? pricingCategories.map(item => <article key={item.id} className="rounded-md border border-white/15 p-6">
        <h3 className="text-xl font-black">{item.name}</h3><p className="mt-4 font-bold">{item.minor === null ? (item.id === "ev" ? "Separate EV service quote" : "Request quote") : `Minor from $${item.minor} / Major from $${item.major}`}</p>
        <p className="mt-3 text-sm leading-6 text-white/70">AUD including GST. Category estimates subject to vehicle confirmation.</p>
      </article>) : homePrices.map(offer => <article key={offer.service} className="rounded-md border border-white/15 p-6"><h3 className="text-xl font-black">{offer.service}</h3><p className="mt-3 text-2xl font-black">{offer.price}</p><p className="mt-4 text-sm leading-6 text-white/70">{offer.copy}</p><Link className="focus-ring mt-5 inline-block underline underline-offset-4" href={offer.href}>View service details</Link></article>)}
    </div>
    <p className="mt-6 font-bold">{washOffer}</p><p className="mt-2 text-sm leading-6 text-white/70">{washScope}</p>
    <p className="mt-5 max-w-3xl text-sm leading-6 text-white/75">{priceCondition} The wash and vacuum offer applies to minor and major service packages.</p>
    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><ButtonLink href="/service-price-finder">Find Your Service Price</ButtonLink><ButtonLink href="/service-pricing" variant="ghost">Packages & Pricing</ButtonLink><ButtonLink href="/contact" variant="ghost">Get a Quote</ButtonLink></div>
  </div></section>;
}
