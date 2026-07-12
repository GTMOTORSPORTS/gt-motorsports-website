import { BookingForm } from "@/components/BookingForm";
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
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
