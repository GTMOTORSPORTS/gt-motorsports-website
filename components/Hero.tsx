import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { site } from "@/lib/site";
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-[url('/workshop-hero.webp')] bg-cover bg-center"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/55"
        aria-hidden="true"
      />
      <div className="container-shell relative py-14 sm:py-20 lg:py-24">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brake">
          G&T Motorsports • Clyde North
        </p>
        <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-5xl lg:text-7xl">
          Trusted Mechanic in Clyde North
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">
          Car servicing, diagnostics and mechanical repairs at our workshop at
          47B Palladium Circuit. Clear advice and approval before additional
          work.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/book-online">Book Online</ButtonLink>
          <ButtonLink href={site.phoneHref} variant="secondary">
            Call Now: {site.phone}
          </ButtonLink>
        </div>
        <Link
          href="/about"
          className="focus-ring mt-6 inline-block text-sm font-bold text-white/75 underline decoration-brake underline-offset-4"
        >
          Meet your local workshop
        </Link>
      </div>
    </section>
  );
}
