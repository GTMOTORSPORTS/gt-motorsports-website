export const pricingCategories = [
  { id: "petrol", name: "Small/medium petrol", minor: 199, major: 449 },
  { id: "petrol-suv", name: "Petrol SUV / larger 4-cylinder", minor: 229, major: 479 },
  { id: "hybrid", name: "Petrol hybrid", minor: 229, major: 479 },
  { id: "six-petrol", name: "Six-cylinder petrol", minor: 279, major: 549 },
  { id: "diesel-car", name: "Diesel passenger car / compact SUV", minor: 279, major: 549 },
  { id: "diesel-ute", name: "Diesel ute / medium 4WD", minor: 299, major: 599 },
  { id: "large-diesel", name: "Larger diesel engines", minor: 349, major: 649 },
  { id: "4wd", name: "Large 4WD", minor: 399, major: 749 },
  { id: "v8", name: "V8 petrol passenger car", minor: 329, major: 599 },
  { id: "small-euro", name: "Small European 3/4-cylinder", minor: 299, major: 599 },
  { id: "medium-euro", name: "Medium European / SUV 4-cylinder", minor: 349, major: 649 },
  { id: "six-euro", name: "European six-cylinder", minor: 399, major: 749 },
  { id: "van", name: "Commercial diesel van", minor: 349, major: 699 },
  { id: "performance", name: "Performance, prestige and unusual imports", minor: null, major: null },
  { id: "ev", name: "Fully electric vehicles", minor: null, major: null },
] as const;
export type VehicleRecord = { id: string; make: string; model: string; yearFrom: number; yearTo: number; engine: string; fuelType: string; pricingCategory: string; verificationStatus: "pending" | "verified"; notes: string };
// Category examples are not verified vehicle mappings.
export const vehicleRecords: VehicleRecord[] = [];
export const minorInclusions = ["Engine oil meeting the vehicle's required specification and manufacturer approval where applicable", "Quality oil filter and drain washer/seal where required", "Labour, waste-oil disposal and GST", "Basic accessible brake, tyre, steering, suspension, leak and fluid checks", "Battery test and tyre pressure adjustment", "Service reminder reset where supported and a record of work completed", "Complimentary quick exterior wash and interior vacuum"];
export const majorExtras = ["Engine air filter replacement", "Cabin filter replacement where fitted", "Brake fluid replacement", "Diagnostic fault-code scan and report"];
export const majorConditions = "This is our defined Major Service Package. Manufacturer-scheduled maintenance varies with vehicle age, kilometres and service history. Additional items due are quoted separately.";
export const exclusions = "Spark plugs, diesel fuel filters, transmission/differential/transfer-case oils, coolant replacement, timing belts or chains, repairs and diagnostic investigation beyond the included scan are excluded unless separately quoted and authorised.";
export const priceCondition = "Starting price only. We confirm your vehicle's oil requirements, parts and any additional scheduled work before confirming your total.";
export const washOffer = "Complimentary quick exterior wash and interior vacuum with every minor and major service.";
export const washScope = "Includes a light exterior wash and vacuum of accessible footwells and mats. Detailing, stain removal and heavy mud or pet-hair removal are excluded.";
export const minorOffer = "Quality engine oil and oil filter, essential vehicle checks, and a complimentary quick exterior wash and interior vacuum. Vehicle-specific pricing applies.";
export function categoryEstimate(id: string, packageName: string) {
  const category = pricingCategories.find(item => item.id === id);
  return category && (packageName === "minor" || packageName === "major") ? category[packageName] : null;
}
export const featuredServiceOffers = [
  {
    service: "Minor Service",
    price: "From $199 including GST",
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
