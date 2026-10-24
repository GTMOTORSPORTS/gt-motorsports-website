import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { PageShell } from "@/components/PageShell";
import { SectionHeader } from "@/components/SectionHeader";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { IntegrityWarranty } from "@/components/IntegrityWarranty";
export const metadata: Metadata = pageMetadata({
  title: "About G&T Motorsports | Clyde North Workshop",
  description:
    "Visit G&T Motorsports at 47B Palladium Circuit, Clyde North for car servicing, diagnostics and mechanical repairs, with clear advice before additional work.",
  path: "/about",
});
export default function AboutPage() {
  return (
    <PageShell>
      <section className="bg-black py-14 sm:py-20">
        <div className="container-shell">
          <SectionHeader
            as="h1"
            eyebrow="About G&T Motorsports"
            title="Your Workshop in Clyde North"
            copy="G&T Motorsports is an independent automotive workshop at 47B Palladium Circuit, Clyde North VIC 3978. We welcome drivers from nearby suburbs for servicing, diagnostics and mechanical repairs."
          />
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href="/book-online">Book Online</ButtonLink>
            <ButtonLink href={site.phoneHref} variant="secondary">
              Call {site.phone}
            </ButtonLink>
          </div>
        </div>
      </section>
      <section className="bg-white py-12 text-asphalt sm:py-16">
        <div className="container-shell grid items-center gap-8 lg:grid-cols-2">
          <Image
            src="/images/workshop/gt-motorsports-workshop-service-clyde-north.jpg.jpeg"
            alt="Technician working beneath a vehicle at the G&T Motorsports workshop"
            width={900}
            height={600}
            sizes="(max-width: 1024px) 100vw, 560px"
            className="h-auto w-full rounded-md"
          />
          <div>
            <SectionHeader
              title="Clear Advice Before Work Proceeds"
              tone="light"
              copy="Tell us your vehicle details and the concern you want checked. We explain findings and recommended work, and seek approval before additional repairs."
            />
            <p className="mt-4 leading-7 text-black/70">
              Our services include routine and logbook servicing, engine
              diagnostics, brake repairs, Mercedes-Benz servicing and intake
              carbon cleaning for eligible engines. Scope and pricing depend on
              the vehicle and agreed work.
            </p>
            <Link
              className="focus-ring mt-5 inline-block font-bold underline underline-offset-4"
              href="/services"
            >
              Explore all services
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-asphalt py-12 sm:py-16">
        <div className="container-shell grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-black">
              One Workshop, Serving Nearby Drivers
            </h2>
            <p className="mt-4 leading-7 text-white/75">
              All workshop servicing and repairs take place in Clyde North.
              Customers travel from Cranbourne, Berwick, Narre Warren, Officer,
              Pakenham and nearby areas.
            </p>
            <Link
              className="focus-ring mt-5 inline-block font-bold underline underline-offset-4"
              href="/locations"
            >
              Areas We Serve
            </Link>
          </div>
          <div>
            <h2 className="text-2xl font-black">
              Roadworthy Inspection Arrangements
            </h2>
            <p className="mt-4 leading-7 text-white/75">
              Roadworthy inspections are arranged through an independent
              licensed vehicle tester. Contact G&T Motorsports to confirm
              arrangements, availability and pricing.
            </p>
            <Link
              className="focus-ring mt-5 inline-block font-bold underline underline-offset-4"
              href="/roadworthy-certificate"
            >
              How RWC arrangements work
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-black py-12 sm:py-16">
        <div className="container-shell grid items-center gap-8 lg:grid-cols-2">
          <div>
            <SectionHeader
              title="Plan Your Visit"
              copy="Appointments help us plan drop-off and initial assessment. Walk-ins are welcome subject to availability; a drop-off time does not guarantee completion at that time."
            />
            <p className="mt-4 leading-7 text-white/75">{site.address}</p>
            <a
              className="focus-ring mt-5 inline-block font-bold underline underline-offset-4"
              href={site.directionsHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
            </a>
          </div>
          <Image
            src="/images/workshop/gt-motorsports-vehicle-inspection-clyde-north.jpg.jpeg"
            alt="Vehicle inspection in the G&T Motorsports Clyde North workshop"
            width={900}
            height={600}
            sizes="(max-width: 1024px) 100vw, 560px"
            className="h-auto w-full rounded-md"
          />
        </div>
      </section>
      <section className="bg-asphalt py-12 sm:py-16"><div className="container-shell"><IntegrityWarranty /></div></section>
    </PageShell>
  );
}
