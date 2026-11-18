import { pricingCategories, priceCondition, serviceEligibility } from "@/lib/service-pricing";

export function ServiceCategoryTable() {
  return <div className="mt-6">
    <table className="w-full table-fixed text-left text-sm sm:text-base">
      <caption className="sr-only">General car servicing starting prices including GST</caption>
      <thead><tr className="border-b border-white/20"><th scope="col" className="w-[70%] py-3 pr-4">Vehicle</th><th scope="col" className="py-3">Starting price</th></tr></thead>
      <tbody>{pricingCategories.filter(item => item.minor !== null).map(item => <tr key={item.id} className="border-b border-white/10"><th scope="row" className="py-4 pr-4 font-normal">{item.name}{item.id === "petrol" ? "*" : ""}</th><td className="py-4 font-bold">From ${item.minor}</td></tr>)}</tbody>
    </table>
    <p className="mt-4 text-sm leading-6 text-white/75">*{serviceEligibility}</p>
    <p className="mt-4 max-w-3xl leading-7"><strong>These are starting prices, not fixed prices.</strong> {priceCondition.replace("These are starting prices, not fixed prices. ", "")}</p>
  </div>;
}
