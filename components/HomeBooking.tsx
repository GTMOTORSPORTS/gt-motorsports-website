import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";
export function HomeBooking() {
  return (
    <section id="book-and-find-us" className="bg-black py-12 sm:py-16">
      <div className="container-shell grid gap-8 lg:grid-cols-2">
        <div>
          <SectionHeader
            eyebrow="Book & find us"
            title="Plan Your Workshop Visit"
            copy="Book a vehicle drop-off or initial assessment. Completion time depends on the work, parts and workshop availability."
          />
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/book-online">Book Online</ButtonLink>
            <ButtonLink href={site.phoneHref} variant="secondary">
              Call {site.phone}
            </ButtonLink>
            <ButtonLink href="/contact" variant="ghost">
              Get a Quote
            </ButtonLink>
          </div>
          <p className="mt-5 text-sm leading-6 text-white/70">
            Appointments are recommended. Walk-ins are welcome subject to
            availability.
          </p>
        </div>
        <div className="rounded-md border border-white/15 bg-white/[0.04] p-6">
          <h3 className="text-xl font-black">One Workshop in Clyde North</h3>
          <p className="mt-3 leading-7 text-white/80">{site.address}</p>
          <dl className="mt-4 grid gap-2 text-sm text-white/75">
            {site.hours.map(([day, hours]) => (
              <div key={day} className="flex justify-between gap-4">
                <dt>{day}</dt>
                <dd>{hours}</dd>
              </div>
            ))}
          </dl>
          <a
            className="focus-ring mt-5 inline-block font-bold underline decoration-brake underline-offset-4"
            href={site.directionsHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
          </a>
          <p className="mt-4 text-sm leading-6 text-white/70">
            Welcoming drivers from Cranbourne, Berwick, Narre Warren, Officer,
            Pakenham and surrounding suburbs.{" "}
            <Link
              className="focus-ring underline underline-offset-4"
              href="/locations"
            >
              Areas We Serve
            </Link>
          </p>
          <a
            className="focus-ring mt-4 inline-block text-sm underline underline-offset-4"
            href={site.emailHref}
          >
            {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
