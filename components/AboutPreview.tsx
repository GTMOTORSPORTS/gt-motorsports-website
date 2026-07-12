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
                  A clean, capable workshop for everyday servicing, diagnostics
                  and mechanical repairs.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <SectionHeader
            eyebrow="About"
            title="A local workshop built around trust, clarity and careful workmanship."
            copy="From routine servicing to mechanical repairs, G&T Motorsports gives drivers a simple way to look after their vehicles without confusion or pressure."
          />
          <div className="mt-8 grid gap-4 text-sm leading-6 text-white/70 sm:grid-cols-2">
            <p>
              We service all makes and models, explain the work clearly and help
              you understand what matters now versus what can be planned later.
            </p>
            <p>
              Whether you are commuting, running a family car or preparing for a
              road trip, our goal is to keep your vehicle safe and dependable.
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
