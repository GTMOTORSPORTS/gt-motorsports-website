import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";

export function AreasServiced() {
  return (
    <section className="bg-black py-16 sm:py-20">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Areas We Serve"
          title="One Clyde North Workshop, Welcoming Nearby Drivers"
          copy="Based in Clyde North, we welcome drivers from Cranbourne, Berwick, Narre Warren, Officer, Pakenham and surrounding suburbs. All servicing takes place at our workshop at 47B Palladium Circuit, Clyde North VIC 3978."
        />
        <div className="mt-8">
          <Link
            className="focus-ring inline-flex rounded-md border border-white/20 px-5 py-3 text-sm font-black uppercase tracking-wide text-white transition hover:border-brake hover:bg-brake"
            href="/locations"
          >
            Explore Areas We Serve
          </Link>
        </div>
      </div>
    </section>
  );
}
