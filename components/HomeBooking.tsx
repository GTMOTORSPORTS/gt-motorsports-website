import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

export function HomeBooking() {
  return (
    <section className="bg-black py-16 sm:py-24">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <div className="lg:sticky lg:top-32">
          <SectionHeader
            eyebrow="Book Online"
            title="Request a workshop booking."
            copy="Tell us what your vehicle needs and the workshop can confirm availability. For urgent support, call the team directly."
          />
          <a
            className="focus-ring mt-7 inline-flex text-3xl font-black text-white transition hover:text-brake"
            href={site.phoneHref}
          >
            {site.phone}
          </a>
        </div>
        <div className="rounded-md border border-white/10 bg-white/[0.045] p-5 shadow-2xl sm:p-7">
          <div className="rounded-md border border-white/10 bg-black/60 p-6">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-brake">
              Live Schedule
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-white">
              Choose an available drop-off time.
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/70">
              Book your vehicle drop-off or initial assessment through the live
              Google Calendar appointment schedule. Appointments are
              recommended, and walk-ins remain welcome subject to workshop
              availability.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/book-online">Book Online</ButtonLink>
              <ButtonLink href={site.phoneHref} variant="ghost">
                Call {site.phone}
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
