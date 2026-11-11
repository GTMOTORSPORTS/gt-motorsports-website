"use client";
import { useState } from "react";
import { BookingForm } from "@/components/BookingForm";
import { pricingCategories, minorInclusions, majorExtras, majorConditions, exclusions, priceCondition, washOffer, washScope } from "@/lib/service-pricing";

const inputClass = "focus-ring mt-2 min-h-12 w-full min-w-0 rounded-md border border-white/20 bg-black px-3 text-white";
export function ServicePriceFinder() {
  const [vehicle, setVehicle] = useState({ make: "", model: "", year: "", engine: "" });
  const [categoryId, setCategoryId] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  const category = pricingCategories.find(item => item.id === categoryId);
  const complete = Object.values(vehicle).every(value => value.trim()) && /^(19|20)\d{2}$/.test(vehicle.year);
  const quoteOnly = !category || category.minor === null || /electric|\bev\b|performance|prestige|import/i.test(vehicle.engine);
  const price = !quoteOnly && category ? (selectedPackage === "minor" ? category.minor : category.major) : null;
  const packageLabel = selectedPackage === "minor" ? "Minor Service" : selectedPackage === "major" ? "Major Service Package" : "Service quote";
  function updateVehicle(key: keyof typeof vehicle, value: string) {
    setVehicle(current => ({ ...current, [key]: value, ...(key === "make" ? { model: "", year: "", engine: "" } : key === "model" ? { year: "", engine: "" } : key === "year" ? { engine: "" } : {}) }));
    setCategoryId(""); setSelectedPackage("");
  }
  return <div>
    <p className="mt-6 leading-7 text-white/80">Enter your vehicle details and choose its category for a starting-price estimate. We confirm the category and vehicle requirements before quoting. If you are unsure, request a quote.</p>
    <div className="mt-8 grid gap-5 sm:grid-cols-2">
      {([['make', 'Make'], ['model', 'Model'], ['year', 'Year'], ['engine', 'Engine / fuel type']] as const).map(([key, label], index) => <label key={key} className="min-w-0 font-bold">{label}<input className={inputClass} value={vehicle[key]} onChange={event => updateVehicle(key, event.target.value)} disabled={index > 0 && !vehicle[(['make', 'model', 'year'] as const)[index - 1]]} inputMode={key === "year" ? "numeric" : undefined} maxLength={key === "year" ? 4 : 80} /></label>)}
      <label className="font-bold sm:col-span-2">Vehicle category<select aria-label="Vehicle category" className={inputClass} value={categoryId} disabled={!complete} onChange={event => { setCategoryId(event.target.value); setSelectedPackage(""); }}><option value="">Unsure - request a quote</option>{pricingCategories.map(item => <option value={item.id} key={item.id}>{item.name}</option>)}</select></label>
    </div>
    <p className="mt-5 text-sm leading-6 text-white/75">{priceCondition}</p>
    {complete && category && !quoteOnly ? <div className="mt-8 grid gap-6 md:grid-cols-2" aria-live="polite">{(["minor", "major"] as const).map(name => <article key={name} className="min-w-0 rounded-md border border-white/15 p-6"><h2 className="text-2xl font-black">{name === "minor" ? "Minor Service" : "Major Service Package"}</h2><p className="mt-4 text-2xl font-bold">From ${category[name]} including GST</p><p className="mt-2 text-sm text-white/75">Category estimate, subject to vehicle confirmation. Parts and labour included.</p><ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-6">{[...minorInclusions, ...(name === "major" ? majorExtras : [])].map(item => <li key={item}>{item}</li>)}</ul>{name === "major" ? <><p className="mt-5 text-sm leading-6">{majorConditions}</p><p className="mt-3 text-sm leading-6">{exclusions}</p></> : null}<button className="focus-ring mt-6 min-h-12 rounded-md bg-brake px-5 py-3 font-bold" onClick={() => setSelectedPackage(name)}>Request Booking</button></article>)}</div> : complete ? <p className="mt-8 rounded-md border border-white/20 p-5" role="status">{categoryId === "ev" || /electric|\bev\b/i.test(vehicle.engine) ? "Separate EV service quote required." : "Request a quote so we can confirm the appropriate service for your vehicle."}</p> : null}
    <p className="mt-8 font-bold">{washOffer}</p><p className="mt-2 text-sm leading-6 text-white/75">{washScope}</p>
    <p className="mt-3 text-sm leading-6 text-white/75">Additional oil or specialist filters are included in the total agreed before work begins. Packages do not cover every manufacturer-scheduled item and are not automatically Mercedes-Benz Service A or B.</p>
    <button className="focus-ring mt-6 min-h-12 rounded-md border border-white/25 px-5 py-3 font-bold" onClick={() => setSelectedPackage("quote")}>I can&apos;t find my vehicle / Request a confirmed quote</button>
    {selectedPackage ? <section className="mt-10 border-t border-white/20 pt-8"><h2 className="text-3xl font-black">Request a Confirmed Quote & Booking</h2><p className="my-5 leading-7">{packageLabel}{price !== null && selectedPackage !== "quote" ? ` - from $${price} including GST (category estimate)` : " - price to be confirmed"}. This is an enquiry; the workshop will confirm price and availability.</p><BookingForm key={[...Object.values(vehicle), categoryId, selectedPackage].join("|")} initialValues={{ vehicleMake: vehicle.make, vehicleModel: vehicle.model, vehicleYear: vehicle.year, serviceRequired: packageLabel, additionalNotes: `Engine / fuel: ${vehicle.engine || "Please confirm"}. Category: ${category?.name || "Please confirm"}. ${packageLabel}. ${price !== null && selectedPackage !== "quote" ? `Displayed starting estimate AUD ${price} including GST, subject to vehicle confirmation.` : "Confirmed quote requested."} Includes quick wash and vacuum with minor/major servicing only.` }} /></section> : null}
  </div>;
}
