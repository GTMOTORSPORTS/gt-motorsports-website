import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

export function AreasServiced() {
  return (
    <section className="bg-black py-16 sm:py-20">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Areas Serviced"
          title="Mechanic services for Clyde North and surrounding suburbs."
          copy="Visit G&T Motorsports at 47B Palladium Circuit, Clyde North VIC 3978 for servicing and repairs across Melbourne's south-east."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {site.areas.map((area) => (
            <span className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-white/80" key={area}>
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
