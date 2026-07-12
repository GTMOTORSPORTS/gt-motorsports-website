import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

export function MapSection() {
  return (
    <section className="bg-white py-16 text-asphalt sm:py-24">
      <div className="container-shell">
        <div className="mb-9 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            eyebrow="Find Us"
            title="G&T Motorsports in Clyde North."
            copy="Visit the workshop at 47B Palladium Circuit, Clyde North VIC 3978."
            tone="light"
          />
          <a
            className="focus-ring w-fit rounded-md border border-black/15 px-5 py-3 text-sm font-black uppercase tracking-wide transition hover:border-brake hover:bg-brake hover:text-white"
            href={site.mapHref}
            target="_blank"
          >
            Open in Google Maps
          </a>
        </div>
        <div className="overflow-hidden rounded-md border border-black/10 bg-neutral-100 shadow-2xl">
          <iframe
            aria-label="Google map placeholder for G&T Motorsports"
            className="h-[380px] w-full grayscale sm:h-[460px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=47B%20Palladium%20Circuit%2C%20Clyde%20North%20VIC%203978&output=embed"
            title="G&T Motorsports map"
          />
        </div>
      </div>
    </section>
  );
}
