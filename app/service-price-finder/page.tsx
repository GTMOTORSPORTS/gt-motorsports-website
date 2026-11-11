import { PageShell } from "@/components/PageShell";
import { ServicePriceFinder } from "@/components/ServicePriceFinder";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({ title: "Find Your Service Price | Clyde North", description: "See minor and major service category estimates including GST and a quick wash and vacuum. Enter your vehicle details for a confirmed quote from G&T Motorsports.", path: "/service-price-finder" });
export default function FinderPage() { return <PageShell><section className="container-shell py-12 sm:py-20"><h1 className="text-4xl font-black">Find Your Service Price</h1><p className="mt-5 max-w-3xl text-lg leading-8">Choose your vehicle to see minor and major service starting prices. All prices include GST and a complimentary quick wash and vacuum.</p><ServicePriceFinder /></section></PageShell>; }
