import { cleaningPrices, cleaningScope } from "@/lib/cleaning";

export function CleaningPrices({ standalone = false }: { standalone?: boolean }) {
  return <section className="mt-8 border-t border-white/15 pt-6" aria-label={standalone ? "Cleaning-only prices" : "Optional service cleaning prices"}>
    <h2 className="text-2xl font-black">{standalone ? "Cleaning-Only Prices" : "Optional Quick Wash & Vacuum"}</h2>
    <p className="mt-3 text-sm text-white/75">{standalone ? "Separate from vehicle servicing." : "Add to a service at extra cost. Not included unless selected."}</p>
    <dl className="mt-4 grid gap-3 sm:grid-cols-2">{cleaningPrices.map(item => <div key={item.id} className="flex justify-between gap-4 border-b border-white/10 py-3"><dt>{item.label}</dt><dd className="shrink-0 font-bold">{(standalone ? item.standalone : item.addon) === null ? "Quote required" : `${standalone ? (item.standaloneFrom ? "From " : "") : "+"}$${standalone ? item.standalone : item.addon}`}</dd></div>)}</dl>
    <p className="mt-4 max-w-3xl text-sm leading-6 text-white/75">{cleaningScope}</p>
  </section>;
}
