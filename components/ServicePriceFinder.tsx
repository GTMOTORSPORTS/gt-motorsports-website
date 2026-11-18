"use client";
import { useEffect, useRef, useState } from "react";
import { BookingForm } from "@/components/BookingForm";
import { cleaningPrices, cleaningScope, cleaningEstimate } from "@/lib/cleaning";
import { pricingCategories, minorInclusions, majorExtras, majorConditions, exclusions, priceCondition, serviceEligibility } from "@/lib/service-pricing";

const inputClass = "focus-ring mt-2 min-h-12 w-full min-w-0 rounded-md border border-white/20 bg-black px-3 text-white";
export function ServicePriceFinder() {
  const [vehicle, setVehicle] = useState({ make: "", model: "", year: "", engine: "" });
  const [categoryId, setCategoryId] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  const [customerDraft, setCustomerDraft] = useState<Record<string, string>>({});
  const [addCleaning, setAddCleaning] = useState(false);
  const [cleaningBody, setCleaningBody] = useState("");
  const cleaningCost = cleaningEstimate(addCleaning, cleaningBody);
  const cleaningLabel = cleaningPrices.find(item => item.id === cleaningBody)?.label;
  const cleaningSummary = !addCleaning ? "Quick Wash & Vacuum not selected." : `Quick Wash & Vacuum requested for ${cleaningLabel || "vehicle type to confirm"}: ${cleaningCost === null ? "quote required" : `AUD ${cleaningCost} including GST`}.`;
  const [revealRequest, setRevealRequest] = useState(0);
  const bookingHeading = useRef<HTMLHeadingElement>(null);
  function requestPackage(name: string) {
    setSelectedPackage(name);
    setRevealRequest(current => current + 1);
  }
  useEffect(() => {
    if (!revealRequest) return;
    const frame = requestAnimationFrame(() => {
      const heading = bookingHeading.current;
      if (!heading) return;
      const headerHeight = document.querySelector("header")?.getBoundingClientRect().height || 0;
      heading.style.scrollMarginTop = `${headerHeight + 24}px`;
      heading.focus({ preventScroll: true });
      heading.scrollIntoView({ block: "start", behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    });
    return () => cancelAnimationFrame(frame);
  }, [revealRequest]);
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
    <p className="mt-6 leading-7 text-white/80">Tell us what you drive. Choose an estimate if you know which description fits, or leave it as unsure and ask us to confirm your price. You can enter Unknown for engine details.</p>
    <div className="mt-8 grid gap-5 sm:grid-cols-2">
      {([['make', 'Make'], ['model', 'Model'], ['year', 'Year'], ['engine', 'Engine / fuel type']] as const).map(([key, label], index) => <label key={key} className="min-w-0 font-bold">{label}<input className={inputClass} value={vehicle[key]} onChange={event => updateVehicle(key, event.target.value)} disabled={index > 0 && !vehicle[(['make', 'model', 'year'] as const)[index - 1]]} inputMode={key === "year" ? "numeric" : undefined} maxLength={key === "year" ? 4 : 80} /></label>)}
      <label className="font-bold sm:col-span-2">Choose a starting estimate (optional)<select aria-label="Choose a starting estimate" className={inputClass} value={categoryId} onChange={event => { setCategoryId(event.target.value); setSelectedPackage(""); }}><option value="">I am unsure - confirm my price</option>{pricingCategories.map(item => <option value={item.id} key={item.id}>{item.name}</option>)}</select></label>
    </div>
    <p className="mt-5 text-sm leading-6 text-white/75">{priceCondition}</p>
    <p className="mt-3 text-sm leading-6 text-white/75">{serviceEligibility} Logbook servicing and additional scheduled items are quoted separately.</p>
    {complete && category && !quoteOnly ? <div className="mt-8 grid gap-6 md:grid-cols-2" aria-live="polite">{(["minor", "major"] as const).map(name => <article key={name} className="min-w-0 rounded-md border border-white/15 p-6"><h2 className="text-2xl font-black">{name === "minor" ? "Minor Service" : "Major Service Package"}</h2><p className="mt-4 text-2xl font-bold">From ${category[name]} including GST</p><p className="mt-2 text-sm text-white/75">Category estimate, subject to vehicle confirmation. Parts and labour included.</p><p className="mt-3 font-bold" aria-live="polite">{cleaningCost === null ? "Cleaning quote required; total to be confirmed" : `Estimated total from $${category[name]! + cleaningCost} incl. GST`}</p><ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-6">{[...minorInclusions, ...(name === "major" ? majorExtras : [])].map(item => <li key={item}>{item}</li>)}</ul>{name === "major" ? <details className="mt-5 text-sm leading-6"><summary className="focus-ring cursor-pointer font-bold">Package conditions &amp; exclusions</summary><p className="mt-3">{majorConditions}</p><p className="mt-3">{exclusions}</p></details> : null}<button className="focus-ring mt-6 min-h-12 rounded-md bg-brake px-5 py-3 font-bold" onClick={() => requestPackage(name)}>Request Booking</button></article>)}</div> : complete ? <p className="mt-8 rounded-md border border-white/20 p-5" role="status">{categoryId === "ev" || /electric|\bev\b/i.test(vehicle.engine) ? "Separate EV service quote required." : "Request a quote so we can confirm the appropriate service for your vehicle."}</p> : null}
    <fieldset className="mt-8 rounded-md border border-white/20 p-5">
      <legend className="px-2 text-xl font-black">Optional Service Extra</legend>
      <label className="flex min-h-12 items-center gap-3 font-bold"><input className="h-5 w-5 accent-brake" type="checkbox" checked={addCleaning} onChange={event => setAddCleaning(event.target.checked)} />Add a Quick Wash &amp; Vacuum</label>
      <ul className="mt-3 space-y-2 text-sm">{cleaningPrices.map(item => <li key={item.id}>{item.label}: <strong>{item.addon === null ? "quote required" : `+$${item.addon}`}</strong></li>)}</ul>
      {addCleaning ? <label className="mt-4 block font-bold">Vehicle type for cleaning<select aria-label="Vehicle type for cleaning" className={inputClass} value={cleaningBody} onChange={event => setCleaningBody(event.target.value)}><option value="">Choose vehicle type</option>{cleaningPrices.map(item => <option key={item.id} value={item.id}>{item.label}</option>)}</select></label> : null}
      <p className="mt-4 text-sm leading-6 text-white/75">{cleaningScope}</p>
      <p className="mt-3 font-bold" aria-live="polite">{cleaningSummary}</p>
    </fieldset>
    <p className="mt-3 text-sm leading-6 text-white/75">Additional oil or specialist filters are included in the total agreed before work begins. Packages do not cover every manufacturer-scheduled item and are not automatically Mercedes-Benz Service A or B.</p>
    <button className="focus-ring mt-6 min-h-12 rounded-md border border-white/25 px-5 py-3 font-bold" onClick={() => requestPackage("quote")}>I can&apos;t find my vehicle / Request a confirmed quote</button>
    {selectedPackage ? <section aria-labelledby="booking-enquiry-heading" className="mt-10 border-t border-white/20 pt-8">
      <h2 id="booking-enquiry-heading" ref={bookingHeading} tabIndex={-1} className="focus-ring text-3xl font-black">Request a Confirmed Quote & Booking</h2>
      <p className="my-5 rounded-md border border-white/20 p-4 leading-7" aria-live="polite">{packageLabel}{price !== null && selectedPackage !== "quote" ? ` - from $${price} including GST (category estimate)` : " - price to be confirmed"}. This is an enquiry; the workshop will confirm price and availability.</p>
      <p className="mb-5 font-bold" aria-live="polite">{price !== null && selectedPackage !== "quote" && cleaningCost !== null ? `Estimated total from $${price + cleaningCost} incl. GST` : "Total quote required"}. {cleaningSummary}</p>
      <BookingForm onDraftChange={setCustomerDraft} initialValues={{ vehicleMake: vehicle.make, vehicleModel: vehicle.model, vehicleYear: vehicle.year, ...customerDraft, serviceRequired: packageLabel }} enquiryContext={`Engine / fuel: ${vehicle.engine || "Please confirm"}. Category: ${category?.name || "Please confirm"}. ${packageLabel}. ${price !== null && selectedPackage !== "quote" ? `Displayed starting estimate AUD ${price} including GST, subject to vehicle confirmation.` : "Confirmed quote requested."} ${cleaningSummary} ${price !== null && selectedPackage !== "quote" && cleaningCost !== null ? `Estimated total from AUD ${price + cleaningCost} including GST.` : "Total quote required."}`} />
    </section> : null}
  </div>;
}
