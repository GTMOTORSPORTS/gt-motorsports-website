import { ButtonLink } from "@/components/ButtonLink";
import { minorOffer, washOffer, washScope } from "@/lib/service-pricing";
export function ServiceOffer({ id }: { id?: string }) {
  return <section id={id} className="bg-asphalt py-12 text-white"><div className="container-shell">
    <h2 className="text-3xl font-black">Minor Service From $199 Including GST</h2>
    <p className="mt-4 max-w-3xl leading-7 text-white/80">{minorOffer}</p>
    <p className="mt-5 font-bold">{washOffer}</p><p className="mt-2 max-w-3xl text-sm leading-6 text-white/70">{washScope}</p>
    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap"><ButtonLink href="/service-price-finder">Find Your Service Price</ButtonLink><ButtonLink href="/service-pricing" variant="ghost">Packages & Pricing</ButtonLink></div>
  </div></section>;
}
