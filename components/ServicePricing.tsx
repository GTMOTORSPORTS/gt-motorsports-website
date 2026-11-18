import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCategoryTable } from "@/components/ServiceCategoryTable";
import { homePrices, minorOffer, washOffer, washScope, priceCondition } from "@/lib/service-pricing";

export function ServicePricing({ allOffers = false }: { allOffers?: boolean }) {
  return <section id="service-pricing" className="bg-asphalt py-12 sm:py-16"><div className="container-shell">
    <SectionHeader eyebrow="Starting prices" title={allOffers ? "General Car Servicing — From $149 incl. GST" : "Service Starting Prices"} copy={allOffers ? minorOffer : "Compare our popular offers or request a price for your vehicle."} />
    {allOffers ? <ServiceCategoryTable /> : <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {homePrices.map(offer => <article key={offer.service} className="rounded-md border border-white/15 p-6"><h3 className="text-xl font-black">{offer.service}</h3><p className="mt-3 text-2xl font-black">{offer.price}</p><p className="mt-4 text-sm leading-6 text-white/70">{offer.copy}</p><Link className="focus-ring mt-5 inline-block underline underline-offset-4" href={offer.href}>View service details</Link></article>)}
    </div>}
    <p className="mt-6 font-bold">Major Service Package from $599 incl. GST. <Link className="underline" href="/service-pricing">View defined inclusions</Link>.</p>
    <p className="mt-3 text-sm leading-6 text-white/80"><Link className="underline" href="/logbook-servicing">Logbook service: quoted to the manufacturer&apos;s schedule</Link>. <Link className="underline" href="/mercedes-benz-service">Mercedes A/B from $299/$549 incl. GST</Link>, subject to eligibility and confirmed inclusions.</p>
    <p className="mt-4 font-bold">{washOffer}</p>
    <details className="mt-3 text-sm leading-6 text-white/75"><summary className="focus-ring cursor-pointer font-bold">Pricing and wash conditions</summary><p className="mt-3">{priceCondition}</p><p className="mt-3">{washScope} Wash and vacuum are not included in service starting prices.</p></details>
    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><ButtonLink href="/service-price-finder">Find Your Service Price</ButtonLink><ButtonLink href="/service-pricing" variant="ghost">Packages & Pricing</ButtonLink><ButtonLink href="/contact" variant="ghost">Get a Quote</ButtonLink></div>
  </div></section>;
}
