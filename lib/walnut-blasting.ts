import type { ServicePage } from "@/lib/service-pages";

export const walnutPath = "/services/walnut-blasting-intake-cleaning-clyde-north";
export const walnutQuotePath = "/contact?service=walnut-blasting";
export const walnutSubject = "Walnut Blasting / Intake Carbon Cleaning";
export const pricingDisclaimer = "All prices are starting prices in AUD including GST. Final pricing depends on vehicle model, engine code, intake manifold access, carbon buildup, replacement gaskets and seals, and additional work required. Vehicle suitability must be confirmed before booking. Additional repairs and parts are quoted separately.";

export type CleaningPrice = { name: string; price?: number; diesel?: boolean };
export const enginePrices: CleaningPrice[] = [
  { name: "3-cylinder petrol", price: 699 },
  { name: "4-cylinder petrol", price: 699 },
  { name: "4-cylinder turbo / direct injection", price: 749 },
  { name: "5-cylinder petrol", price: 899 },
  { name: "6-cylinder inline petrol", price: 999 },
  { name: "V6 petrol", price: 1099 },
  { name: "V8 petrol", price: 1399 },
  { name: "4-cylinder diesel intake cleaning", price: 899, diesel: true },
  { name: "6-cylinder diesel intake cleaning", price: 1199, diesel: true },
  { name: "V8 diesel intake cleaning", price: 1599, diesel: true },
  { name: "Complex European performance engines" },
];
export const vehiclePrices: CleaningPrice[] = [
  { name: "VW Golf GTI / Golf R, selected EA888", price: 799 },
  { name: "Audi A3 / S3 2.0 TFSI", price: 799 },
  { name: "BMW selected 4-cylinder petrol", price: 799 },
  { name: "BMW N54 / N55 six-cylinder", price: 999 },
  { name: "BMW 320d diesel", price: 949, diesel: true },
  { name: "BMW 330d diesel", price: 1199, diesel: true },
  { name: "BMW X5 / X6", price: 1499 },
  { name: "Mercedes-Benz selected 4-cylinder petrol", price: 899 },
  { name: "Mercedes-Benz selected V6 petrol", price: 1199 },
  { name: "Mercedes-AMG V8", price: 2199 },
  { name: "MINI Cooper selected 4-cylinder", price: 799 },
  { name: "Holden Commodore SIDI V6", price: 999 },
  { name: "Mazda selected 4-cylinder petrol", price: 799 },
  { name: "Toyota LandCruiser V8 diesel", price: 1599, diesel: true },
];
export function formatCleaningPrice(price?: number) {
  return price === undefined ? "Custom quote" : `From $${price.toLocaleString("en-AU")}`;
}

export const walnutService: ServicePage = {
  slug: "walnut-blasting",
  name: "Walnut Blasting & Intake Valve Cleaning",
  icon: "WB",
  eyebrow: "Engine carbon cleaning • Clyde North",
  title: "Walnut Blasting & Intake Valve Cleaning in Clyde North",
  shortDescription: "Petrol intake valve walnut blasting and diesel intake cleaning from AUD $699 including GST for eligible engines. View engine and vehicle starting prices.",
  introduction: "Intake carbon cleaning starts with the right diagnosis. At G&T Motorsports, we assess your engine, explain the suitable cleaning method and confirm the total quote before work. Petrol intake valve walnut blasting and diesel intake/EGR cleaning have different scopes and starting prices.",
  metadataTitle: "Walnut Blasting & Intake Cleaning Clyde North | G&T Motorsports",
  metadataDescription: "Walnut blasting and intake valve carbon cleaning in Clyde North. Engine-specific pricing from $699 incl. GST. Request a quote from G&T Motorsports.",
  trustPoints: ["AUD prices including GST", "Engine suitability checked", "Quote approval before work", "Clyde North workshop"],
  sectionHeadings: { intro: "When should intake carbon buildup be investigated?", checklist: "What your approved cleaning service includes", faq: "Walnut Blasting & Intake Cleaning FAQs" },
  symptomsIntro: "Rough idle, hesitation, reduced response or recurring misfires can warrant an intake inspection, but do not prove carbon buildup. Ignition, injectors, air leaks, compression and sensors can cause similar symptoms. Diagnostics should come first when the cause is uncertain, warning lights are present or the engine has other faults. Not every direct-injection vehicle needs cleaning.",
  symptoms: ["Rough idle or uneven running", "Hesitation under acceleration", "Recurring misfire concerns", "Suspected intake restriction"],
  includedItems: ["Vehicle, engine code and suitability assessment", "Intake access within the agreed quote", "Petrol valve cleaning or agreed diesel intake cleaning", "Controlled deposit removal and debris extraction", "Reassembly with quoted seals and gaskets", "Post-cleaning running checks and findings explained"],
  specialNotice: "Your quote defines the parts, labour and areas included. Replacement gaskets, seals, damaged parts, additional diagnostics and repairs are quoted separately where required. Injector, combustion chamber, turbocharger, DPF and whole-engine cleaning are not automatically included. Diesel EGR removal and cleaning are included only when specified in your quote. No extra work proceeds without approval.",
  detailSections: [
    { title: "What walnut blasting does", copy: "On a suitable petrol engine, the intake manifold is removed for access and walnut shell media is directed at deposits on the intake ports and valve backs. The correct engine-specific procedure, valve position, port protection and extraction help keep media out of the cylinders. The accessible areas are inspected before reassembly; it is not a treatment for every internal engine surface." },
    { title: "Why direct-injection valves can collect carbon", copy: "Petrol direct injection delivers fuel into the cylinder, rather than washing the backs of the intake valves. Oil vapour from crankcase ventilation and other residues can collect and harden there. Engines with additional port injection may behave differently. Deposit severity depends on engine design, condition and use, so mileage alone does not establish a need for cleaning." },
    { title: "Chemical and hydrogen cleaning compared", copy: "Walnut blasting physically removes accessible deposits after dismantling. Chemical intake treatments use an engine-compatible cleaning agent and procedure; effectiveness depends on deposit type and access. Fuel-tank additives do not directly wash the intake valve backs on a direct-injection-only engine. Hydrogen treatments are a different process and are not equivalent to exposing, inspecting and mechanically cleaning those surfaces. We recommend a method after assessment rather than promising one treatment fixes every engine." },
    { title: "BMW N54 / N55 intake valve cleaning", copy: "Selected BMW direct-injection engines, including N54 and N55 six-cylinders, can develop intake valve deposits. We check engine identification, symptoms and intake access before recommending walnut blasting. N54 / N55 pricing starts at $999 including GST; selected BMW four-cylinder petrol engines start at $799. An inspection determines whether deposits are relevant to your concern." },
    { title: "VW Golf GTI, Golf R and Audi TFSI", copy: "Selected EA888 Golf GTI / Golf R and Audi A3 / S3 2.0 TFSI applications start at $799 including GST. Injection arrangements and access vary by generation and engine code. We confirm the exact vehicle and whether intake valve cleaning is appropriate; a model badge alone does not establish eligibility." },
    { title: "Mercedes-Benz and other petrol engines", copy: "Selected Mercedes-Benz four-cylinder petrol applications start at $899 including GST, selected V6 petrol at $1,199 and Mercedes-AMG V8 at $2,199. Selected MINI, Mazda and Holden SIDI applications are also listed below. These prices apply to assessed, suitable variants, with the cleaning scope confirmed before booking." },
    { title: "Diesel intake manifold and EGR cleaning", copy: "Diesel intake deposits can combine recirculated exhaust soot with oil mist. Cleaning may involve removing and cleaning the manifold and, where suitable and quoted, the EGR valve or passages. The method depends on component materials, electronics, access and condition; diesel intake cleaning is not automatically petrol-style valve walnut blasting. A faulty EGR component may require diagnosis or replacement instead of cleaning. DPF cleaning and emissions-system modification are not included." },
    { title: "Benefits with realistic limits", copy: "Removing a confirmed intake restriction may improve idle quality or response when deposits contribute to the problem. It does not repair worn components, leaking injectors, ignition faults or compression problems. No specific power gain, fuel saving or cure for a misfire is guaranteed. Deposits can recur, particularly if an underlying cause remains." },
    { title: "A local workshop with a clear scope", copy: "Visit G&T Motorsports at 47B Palladium Circuit, Clyde North VIC 3978. We explain findings, agree the scope and seek approval before additional work. We welcome customers from Cranbourne, Berwick, Narre Warren, Officer, Pakenham, Hampton Park, Lynbrook and surrounding south-east Melbourne suburbs." },
  ],
  processSteps: ["Consultation", "Vehicle Inspection", "Recommendation", "Quote Approval", "Professional Work", "Quality Inspection", "Road Test"],
  benefits: [
    { title: "Assessment first", copy: "Check whether intake deposits are relevant before approving cleaning." },
    { title: "Transparent pricing", copy: "Engine and vehicle starting prices, with a confirmed quote for your car." },
    { title: "Careful process", copy: "A suitable method, controlled removal and checks within the agreed scope." },
    { title: "Local convenience", copy: "Clyde North workshop with existing online enquiries and inspection bookings." },
  ],
  faqs: [
    { question: "What is walnut blasting?", answer: "Walnut blasting uses crushed walnut shell media and extraction to remove carbon from accessible intake ports and valve backs on suitable engines. Intake access, valve position and protection follow the engine-specific procedure. It is not a whole-engine clean." },
    { question: "How much does walnut blasting cost in Melbourne?", answer: "At G&T Motorsports in Clyde North, eligible three- and four-cylinder petrol applications start at $699 including GST. Four-cylinder turbo / direct-injection applications start at $749, with separate vehicle-specific prices where listed. All listed amounts are starting prices in AUD; suitability, access, deposits and parts determine your final quote. We do not claim these are market-wide prices." },
    { question: "Where can I get intake valve cleaning near Clyde North?", answer: "G&T Motorsports is at 47B Palladium Circuit, Clyde North VIC 3978, serving Cranbourne, Berwick, Narre Warren, Officer, Pakenham, Hampton Park, Lynbrook and nearby suburbs. Call 0414 901 666 or request a quote with your vehicle details." },
    { question: "Which BMW engines benefit from walnut blasting?", answer: "Some direct-injection BMW engines, including selected N54 and N55 applications, may benefit when intake deposits are contributing to a confirmed concern. Cleaning is not automatically required for every BMW. N54 / N55 starting pricing is $999 including GST, subject to engine and access checks." },
    { question: "Can you clean VW Golf GTI and Audi TFSI intake valves?", answer: "We assess selected EA888 Golf GTI / Golf R and Audi A3 / S3 2.0 TFSI applications, starting at $799 including GST. Engine code, generation, injection layout and intake access must be confirmed before accepting the work." },
    { question: "Can walnut blasting help with rough idling and misfires?", answer: "It may help when intake valve deposits are a contributing cause. Misfires and rough idle can also involve plugs, coils, injectors, leaks, compression or controls. Diagnostics should identify the likely cause first, and cleaning is not a guaranteed repair." },
    { question: "Is walnut blasting better than chemical carbon cleaning?", answer: "The right method depends on the engine and deposits. Walnut blasting allows direct mechanical cleaning and inspection of exposed suitable intake surfaces. Chemical treatments have different access and material requirements and may suit a different scope. Hydrogen cleaning is another process, not an equivalent to dismantling and inspecting intake valves. We do not promise one method is best for every engine." },
    { question: "How long does intake valve cleaning take?", answer: "Time varies with engine access, dismantling, deposits, parts and workshop workload. We discuss the expected timeframe when assessing your vehicle and quote. Your inspection or drop-off booking does not guarantee same-day completion." },
    { question: "Do diesel engines need walnut blasting?", answer: "Not automatically. Diesel intake soot and oil deposits may require component removal and a cleaning method suited to the manifold, EGR system and materials. We assess the engine and scope separately from petrol intake valve walnut blasting." },
    { question: "Can you clean diesel intake manifolds and EGR valves?", answer: "Yes, on suitable assessed vehicles, with manifold and EGR work specified in the quote. General diesel intake starting prices are $899 for four-cylinder, $1,199 for six-cylinder and $1,599 for V8 applications including GST, with vehicle-specific pricing where listed. EGR faults, damaged components, extra dismantling and parts can require separate work." },
    { question: "Is intake cleaning included in regular servicing?", answer: "No. Intake carbon cleaning is a separately assessed service and is not automatically part of an oil change or scheduled service. We recommend it only where the vehicle and findings justify the work." },
    { question: "Will walnut blasting improve fuel economy?", answer: "Fuel consumption may improve if intake deposits were contributing to inefficient running, but no saving is guaranteed. Driving conditions, engine health, tyres and other faults affect consumption. Cleaning is not a substitute for diagnosing high fuel use." },
    { question: "Do intake gaskets need replacing?", answer: "Some seals, gaskets or fasteners require replacement after dismantling under the relevant procedure, while other requirements depend on condition and design. Necessary parts are identified and quoted; they are not assumed to be included in every starting price." },
    { question: "How often should intake valves be cleaned?", answer: "There is no single interval suitable for every engine. Use the manufacturer's guidance and inspection findings, symptoms and engine condition. Direct injection alone does not mean cleaning is due, and repeated cleaning will not resolve an untreated underlying fault." },
    { question: "How do I book intake cleaning at G&T Motorsports?", answer: "Choose Get a Quote, Book an Inspection or call 0414 901 666. Provide registration, make, model, engine type or code, symptoms and contact details. We confirm suitability, scope, final price and availability before the cleaning booking is agreed." },
  ],
  relatedServices: [{ label: "Engine Diagnostics", href: "/engine-diagnostics" }, { label: "Engine Repairs", href: "/services/engine-repairs" }, { label: "Mercedes-Benz Service", href: "/mercedes-benz-service" }],
  localAreaText: "Our Clyde North workshop welcomes drivers from Clyde, Cranbourne, Berwick, Narre Warren, Officer, Pakenham, Hampton Park, Lynbrook and surrounding south-east Melbourne suburbs. Request a vehicle-specific quote before booking intake carbon cleaning.",
  ctaHeading: "Get a Clear Quote for Your Engine",
  ctaText: "Send your registration, make, model, engine details and symptoms. We confirm suitability, the cleaning scope and final pricing before work.",
  primaryCtaLabel: "Book an Inspection",
  secondaryCtaLabel: "Get a Quote",
  secondaryCtaHref: walnutQuotePath,
};
