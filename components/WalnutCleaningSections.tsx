import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";
import { enginePrices, vehiclePrices, formatCleaningPrice, pricingDisclaimer, walnutQuotePath, type CleaningPrice } from "@/lib/walnut-blasting";

export function WalnutCleaningButtons() {
  return <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
    <ButtonLink href="/book-online?service=walnut-blasting">Book an Inspection</ButtonLink>
    <ButtonLink href={walnutQuotePath} variant="ghost">Get a Quote</ButtonLink>
    <ButtonLink href={site.phoneHref} variant="secondary">Call {site.phone}</ButtonLink>
  </div>;
}

function PriceTable({ title, rows }: { title: string; rows: CleaningPrice[] }) {
  return <div className="min-w-0 rounded-md border border-white/15 bg-black/35 p-4 sm:p-6">
    <h3 className="text-2xl font-black">{title}</h3>
    <table className="mt-5 w-full table-fixed text-left text-sm">
      <caption className="mb-4 text-left text-xs font-bold uppercase tracking-wide text-white/65">Starting prices • AUD • GST included</caption>
      <thead><tr className="border-b border-white/20"><th scope="col" className="w-[66%] pb-3 pr-3">Engine / application</th><th scope="col" className="pb-3 text-right">From (AUD)</th></tr></thead>
      <tbody>{rows.map(row => <tr key={row.name} className="border-b border-white/10 last:border-0">
        <th scope="row" className="py-4 pr-3 font-medium leading-6 text-white/80 [overflow-wrap:anywhere]">{row.name}</th>
        <td className="py-4 text-right font-black text-white">{formatCleaningPrice(row.price)}</td>
      </tr>)}</tbody>
    </table>
    <ButtonLink href={walnutQuotePath} className="mt-6 w-full">Get a Quote</ButtonLink>
  </div>;
}

export function WalnutCleaningPricing() {
  return <section id="pricing" className="bg-asphalt py-16 sm:py-24">
    <div className="container-shell">
      <SectionHeader eyebrow="Transparent starting prices" title="Professional Engine Carbon Cleaning From $699 Including GST" copy="Petrol intake valve walnut blasting and diesel intake / EGR cleaning are assessed separately. All amounts below are starting prices in Australian dollars including GST for suitable vehicles." />
      <div className="mt-8 rounded-md border border-brake/60 bg-black/40 p-5 text-sm leading-7 text-white/85">
        <p className="font-bold">{pricingDisclaimer}</p>
        <p className="mt-3">Use the vehicle-specific starting price where applicable, instead of adding it to the general engine price. Selected variants only: model badges do not confirm engine eligibility. For overlapping categories, turbo / direct-injection pricing applies before a general four-cylinder petrol price.</p>
        <p className="mt-3">Diesel prices refer to the assessed intake-cleaning scope. EGR removal, cleaning or replacement is included only if specified in your quote. BMW X5 / X6 pricing depends on the fitted engine; confirm the engine code and scope first.</p>
      </div>
      <div className="mt-8 grid items-start gap-6 xl:grid-cols-2">
        <PriceTable title="Engine-specific starting prices" rows={enginePrices} />
        <PriceTable title="Vehicle-specific starting prices" rows={vehiclePrices} />
      </div>
      <WalnutCleaningButtons />
    </div>
  </section>;
}

export function WalnutCleaningImages() {
  return <section className="bg-black py-16 sm:py-20">
    <div className="container-shell">
      <SectionHeader eyebrow="Understand the process" title="Intake Deposits, Access and Controlled Cleaning" copy="The cleaning method and access depend on the engine. The illustration explains the process; it does not show a customer job or promise a particular result." />
      <figure className="mt-8 overflow-hidden rounded-md border border-white/15">
        <Image src="/images/walnut-cleaning-process.webp" alt="Illustration of carbon-coated and cleaned intake valves, walnut blasting equipment, a removed intake manifold and controlled cleaning with extraction" width={1536} height={1024} sizes="(max-width: 768px) 100vw, 1200px" className="h-auto w-full" />
        <figcaption className="bg-white/5 p-4 text-sm leading-6 text-white/70">AI-generated educational illustration, including a before-and-after concept. Not photographs of G&T Motorsports customer work; results vary with engine condition and cleaning scope.</figcaption>
      </figure>
      <div className="mt-6 grid items-center gap-6 md:grid-cols-2">
        <Image src="/images/workshop/gt-motorsports-vehicle-inspection-clyde-north.jpg.jpeg" alt="Vehicle inspection at the G&T Motorsports Clyde North workshop" width={900} height={600} sizes="(max-width: 768px) 100vw, 600px" className="h-auto w-full rounded-md" />
        <div><h3 className="text-2xl font-black">Inspection before a cleaning recommendation</h3><p className="mt-4 leading-7 text-white/70">We discuss symptoms, check the engine and agree the work before cleaning. The workshop photo shows vehicle inspection, not a documented walnut blasting job. Request a quote with your registration, engine details and symptoms.</p><WalnutCleaningButtons /></div>
      </div>
    </div>
  </section>;
}
