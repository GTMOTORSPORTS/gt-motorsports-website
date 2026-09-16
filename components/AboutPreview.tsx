import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";

export function AboutPreview() {
  return (
    <section className="bg-asphalt py-16 sm:py-20">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="rounded-md border border-white/10 bg-white/[0.04] p-5">
          <div className="aspect-[5/4] rounded-md bg-[radial-gradient(circle_at_20%_20%,rgba(215,25,32,0.35),transparent_28%),linear-gradient(135deg,#2a2b31,#080808)] p-6">
            <div className="flex h-full flex-col justify-between">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-white/70">
                47B Palladium Circuit
              </p>
              <div>
                <p className="text-5xl font-black">Clyde North</p>
                <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
                  Professional servicing, diagnostics and mechanical repairs
                  for all makes and models.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SectionHeader
            eyebrow="About"
            title="Your Local Mechanic in Clyde North"
            copy="G&T Motorsports provides professional car servicing, diagnostics and mechanical repairs for drivers in Clyde North and Melbourne's South-East."
          />
          <div className="mt-8 grid gap-4 text-sm leading-6 text-white/70 sm:grid-cols-2">
            <p>
              We service all makes and models and explain our findings clearly,
              so you know what needs attention now and what can be planned for
              later.
            </p>
            <p>
              From routine servicing and logbook maintenance to diagnostics and
              major mechanical repairs, our focus is quality workmanship and
              dependable service.
            </p>
          </div>
          <div className="mt-8">
            <ButtonLink href="/about" variant="ghost">
              Learn About Us
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
