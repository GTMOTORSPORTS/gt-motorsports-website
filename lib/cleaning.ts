export const cleaningPrices = [
  { id: "hatchback", label: "Hatchback", addon: 35, standalone: 50, standaloneFrom: true },
  { id: "sedan", label: "Sedan / wagon", addon: 40, standalone: 60, standaloneFrom: false },
  { id: "suv", label: "SUV", addon: 50, standalone: 70, standaloneFrom: false },
  { id: "large", label: "Large 4WD / 7-seater", addon: 60, standalone: 80, standaloneFrom: false },
  { id: "other", label: "Vans / other vehicles", addon: null, standalone: null, standaloneFrom: false },
] as const;
export const cleaningScope = "Includes exterior wash and dry, interior vacuum, glass cleaning and a quick dashboard wipe. Standard-condition vehicles only. Heavy dirt, pet hair, stain removal and detailing quoted separately. All prices include GST.";
export function cleaningEstimate(selected: boolean, bodyType: string) {
  if (!selected) return 0;
  return cleaningPrices.find(item => item.id === bodyType)?.addon ?? null;
}
