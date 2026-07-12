import { ButtonLink } from "@/components/ButtonLink";
import { site } from "@/lib/site";

export function BookingCTA() {
  return (
    <section className="bg-brake py-12 text-white">
      <div className="container-shell flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/80">
            Ready to book?
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
            Secure a service, inspection or repair appointment today.
          </h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/book-online" variant="secondary">
            Book Online
          </ButtonLink>
          <ButtonLink href={site.phoneHref} variant="ghost">
            Call Now
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
