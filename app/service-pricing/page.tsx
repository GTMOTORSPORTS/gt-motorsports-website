import { PageShell } from "@/components/PageShell";
import { CleaningPrices } from "@/components/CleaningPrices";
import { ServicePricing } from "@/components/ServicePricing";
import { minorInclusions, majorExtras, majorConditions, exclusions } from "@/lib/service-pricing";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({ title: "Service Pricing Clyde North", description: "Eligible minor services from $149 incl. GST, major packages from $599. Mercedes A/B from $299/$549. Request a vehicle-specific quote at G&T Motorsports.", path: "/service-pricing" });
export default function PricingPage() {
  return <PageShell><div className="container-shell pt-12"><h1 className="text-4xl font-black">Service Packages & Pricing</h1></div><ServicePricing allOffers /><section className="container-shell py-12">
    <h2 className="text-3xl font-black">Minor Service Inclusions</h2><ul className="mt-5 list-disc space-y-3 pl-6">{minorInclusions.map(item => <li key={item}>{item}</li>)}</ul>
    <p className="mt-5 leading-7">Any additional oil or specialist filter cost is included in the total agreed before work begins. Oil allowances depend on the vehicle.</p>
    <h2 className="mt-10 text-3xl font-black">Major Service Package From $599 Including GST</h2><p className="mt-4">Everything in the minor service, plus:</p><ul className="mt-5 list-disc space-y-3 pl-6">{majorExtras.map(item => <li key={item}>{item}</li>)}</ul>
    <p className="mt-6 leading-7">{majorConditions}</p><p className="mt-4 leading-7">{exclusions}</p><p className="mt-4 leading-7">These packages do not cover every logbook requirement and are not automatically Mercedes-Benz Service A or Service B. We check the applicable schedule before confirming work.</p>
    <h2 className="mt-10 text-3xl font-black">Scheduled Servicing</h2><p className="mt-4 leading-7"><a className="underline" href="/logbook-servicing">Logbook servicing</a> is quoted against the manufacturer&apos;s schedule for your vehicle, age, kilometres and service history.</p><p className="mt-4 leading-7"><a className="underline" href="/mercedes-benz-service">Mercedes-Benz Service A from $299 / Service B from $549 including GST</a>, subject to eligibility and confirmed inclusions. These are separate scheduled services, not labels for our generic packages.</p>
    <CleaningPrices /><CleaningPrices standalone />
  </section></PageShell>;
}
