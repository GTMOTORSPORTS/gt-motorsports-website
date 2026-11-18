export const pricingCategories = [
  { id: "petrol", name: "Selected small 4-cylinder petrol cars, including eligible European models", minor: 149, major: 599 },
  { id: "six-petrol", name: "6-cylinder petrol cars", minor: 199, major: 599 },
  { id: "petrol-suv", name: "Petrol SUVs", minor: 220, major: 599 },
  { id: "diesel-car", name: "Diesel cars / compact diesel SUVs", minor: 249, major: 599 },
  { id: "diesel-ute", name: "Diesel utes / medium 4WDs", minor: 279, major: 599 },
  { id: "4wd", name: "Large 4WDs / high oil-capacity engines", minor: 329, major: 599 },
  { id: "petrol-van", name: "Petrol vans / light commercial", minor: 249, major: 599 },
  { id: "diesel-van", name: "Diesel vans / light commercial", minor: 299, major: 599 },
  { id: "euro", name: "Other European vehicles", minor: 249, major: 599 },
  { id: "performance", name: "V8 / performance vehicles", minor: null, major: null },
  { id: "hybrid", name: "Hybrid / unsure of category", minor: null, major: null },
  { id: "ev", name: "Fully electric vehicles", minor: null, major: null },
] as const;
export type VehicleRecord = { id: string; make: string; model: string; yearFrom: number; yearTo: number; engine: string; fuelType: string; pricingCategory: string; verificationStatus: "pending" | "verified"; notes: string };
// Category examples are not verified vehicle mappings.
export const vehicleRecords: VehicleRecord[] = [];
export const minorInclusions = ["Engine oil meeting the vehicle's required specification and manufacturer approval where applicable", "Quality oil filter and drain washer/seal where required", "Labour, waste-oil disposal and GST", "Basic accessible brake, tyre, steering, suspension, leak and fluid checks", "Battery test and tyre pressure adjustment", "Service reminder reset where supported and a record of work completed"];
export const majorExtras = ["Engine air filter replacement", "Cabin filter replacement where fitted", "Brake fluid replacement", "Diagnostic fault-code scan and report"];
export const majorConditions = "This is our defined Major Service Package. Manufacturer-scheduled maintenance varies with vehicle age, kilometres and service history. Additional items due are quoted separately.";
export const exclusions = "Spark plugs, diesel fuel filters, transmission/differential/transfer-case oils, coolant replacement, timing belts or chains, repairs and diagnostic investigation beyond the included scan are excluded unless separately quoted and authorised.";
export const priceCondition = "Starting price only. We confirm your vehicle's oil requirements, parts and any additional scheduled work before confirming your total.";
export const washOffer = "Quick exterior wash and interior vacuum are optional at extra cost.";
export { cleaningScope as washScope } from "@/lib/cleaning";
export const minorOffer = "Includes correct-specification engine oil, oil filter replacement and essential vehicle checks. Available for selected small petrol vehicles, including eligible European models. Send your registration, state and current kilometres for a confirmed quote.";
export function categoryEstimate(id: string, packageName: string) {
  const category = pricingCategories.find(item => item.id === id);
  return category && (packageName === "minor" || packageName === "major") ? category[packageName] : null;
}
export const featuredServiceOffers = [
  {
    service: "General Car Servicing",
    price: "From $149 including GST",
    href: "/services/general-car-servicing",
    copy: minorOffer,
  },
  {
    service: "Mercedes-Benz Service A",
    price: "From $299 including GST",
    href: "/mercedes-benz-service",
    copy: "Eligible models: up to 5L of approved oil, quality oil filter, base Service A checks and service record update. Parts and labour included; conditions apply.",
  },
];
export const walnutStartingOffer = {
  service: "Walnut Blasting",
  price: "From $699 including GST",
  href: "/services/walnut-blasting-intake-cleaning-clyde-north",
  copy: "Eligible base-engine applications only. Engine and vehicle-specific prices apply; suitability and final quote confirmed first.",
};
export const homePrices = [
  ...featuredServiceOffers,
  walnutStartingOffer,
];
