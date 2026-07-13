import { ButtonLink } from "@/components/ButtonLink";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-[url('/workshop-hero.png')] bg-cover bg-center"
        aria-label="Premium dark mechanic workshop interior representing G&T Motorsports"
        role="img"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/78 to-black/42" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/45" aria-hidden="true" />
      <div className="container-shell relative flex min-h-[720px] items-center py-20 sm:py-24 lg:min-h-[780px]">
        <div className="max-w-4xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-brake sm:text-sm">
            Clyde North Mechanic Workshop
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.94] text-white sm:text-6xl lg:text-8xl">
            Trusted Mechanic in Clyde North
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/82 sm:text-xl sm:leading-9">
            Professional servicing, diagnostics, repairs and maintenance for all
            makes and models. Honest advice, quality workmanship and dependable
            service.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/book-online" className="min-h-14 px-7">
              Book Online
            </ButtonLink>
            <ButtonLink href={site.phoneHref} variant="secondary">
              Call {site.phone}
            </ButtonLink>
          </div>
          <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
            {["Servicing", "Diagnostics", "Repairs"].map((item) => (
              <div
                className="rounded-md border border-white/14 bg-black/42 px-4 py-3 text-sm font-bold uppercase tracking-wide text-white/82 backdrop-blur"
                key={item}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
