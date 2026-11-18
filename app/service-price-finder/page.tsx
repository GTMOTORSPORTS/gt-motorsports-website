import { PageShell } from "@/components/PageShell";
import { ServicePriceFinder } from "@/components/ServicePriceFinder";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({ title: "Find Your Service Price | Clyde North", description: "Eligible minor services from $149 and major packages from $599 including GST. Enter your vehicle details for a confirmed service quote. Wash/vacuum costs extra.", path: "/service-price-finder" });
export default function FinderPage() { return <PageShell><section className="container-shell py-12 sm:py-20"><h1 className="text-4xl font-black">Find Your Service Price</h1><p className="mt-5 max-w-3xl text-lg leading-8">Compare eligible minor service estimates from $149 and major service packages from $599 including GST. Wash and vacuum are optional at extra cost. We confirm eligibility and inclusions before booking.</p><ServicePriceFinder /></section></PageShell>; }
