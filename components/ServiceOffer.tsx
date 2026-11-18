import { ButtonLink } from "@/components/ButtonLink";
import { minorOffer, priceCondition, serviceEligibility } from "@/lib/service-pricing";
import { CleaningPrices } from "@/components/CleaningPrices";
export function ServiceOffer({ id }: { id?: string }) {
  return <section id={id} className="bg-asphalt py-12 text-white"><div className="container-shell">
    <h2 className="text-3xl font-black">General Car Servicing — From $149 incl. GST</h2>
    <p className="mt-4 max-w-3xl leading-7 text-white/80">{minorOffer}</p>
    <p className="mt-3 max-w-3xl text-sm leading-6 text-white/75">{serviceEligibility}</p>
    <p className="mt-3 max-w-3xl leading-7">{priceCondition}</p>
    <p className="mt-3 max-w-3xl text-sm leading-6 text-white/80">Major Service Package from $599 incl. GST. Logbook servicing is quoted against the manufacturer&apos;s schedule. Mercedes A/B from $299/$549 incl. GST, subject to eligibility and confirmed inclusions.</p>
    <CleaningPrices />
    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><ButtonLink href="/service-price-finder">Find Your Service Price</ButtonLink><ButtonLink href="/service-pricing" variant="ghost">Packages & Pricing</ButtonLink></div>
  </div></section>;
}
