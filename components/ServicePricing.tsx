import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";
import { minorOffer, pricingCategories, washOffer, washScope, priceCondition } from "@/lib/service-pricing";
export function ServicePricing() {
  return <section className="bg-asphalt py-16 sm:py-20"><div className="container-shell">
    <SectionHeader eyebrow="Pricing" title="Minor Service From $199 Including GST" copy={minorOffer} />
    <p className="mt-6 font-bold">{washOffer}</p><p className="mt-2 text-sm leading-6 text-white/70">{washScope}</p>
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{pricingCategories.map(item => <article key={item.id} className="rounded-md border border-white/10 bg-white/[0.04] p-5">
      <h3 className="text-lg font-black">{item.name}</h3><p className="mt-4 font-bold">{item.minor === null ? (item.id === "ev" ? "Separate EV service quote" : "Request quote") : `Minor from $${item.minor} / Major from $${item.major}`}</p>
      <p className="mt-2 text-sm text-white/70">{item.minor === null ? "Vehicle assessment required" : "AUD including GST. Category estimate, subject to vehicle confirmation."}</p>
    </article>)}</div>
    <p className="mt-6 max-w-3xl text-sm leading-6 text-white/75">{priceCondition}</p>
    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><ButtonLink href="/service-price-finder">Find Your Service Price</ButtonLink><ButtonLink href="/service-pricing" variant="ghost">Service Inclusions</ButtonLink><ButtonLink href="/contact" variant="ghost">Get a Quote</ButtonLink></div>
  </div></section>;
}
