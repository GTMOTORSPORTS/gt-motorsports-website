import type { Metadata } from "next";
import Image from "next/image";
import { BookingCTA } from "@/components/BookingCTA";
import { PageShell } from "@/components/PageShell";
import { SectionHeader } from "@/components/SectionHeader";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Workshop Gallery",
  description:
    "View the G&T Motorsports workshop gallery for servicing, diagnostics and mechanical repair photos in Clyde North.",
  path: "/gallery",
  image: "/workshop-hero.png",
  imageAlt: "G&T Motorsports workshop gallery",
});

const items = [
  {
    title: "Workshop bays",
    copy: "A clean, organised workshop setup for servicing, diagnostics and repairs.",
    src: "/images/workshop/gt-motorsports-workshop-service-clyde-north.jpg.jpeg",
    alt: "G&T Motorsports technician working underneath a vehicle on a workshop hoist",
    position: "center",
  },
  {
    title: "Service checks",
    copy: "Routine service checks completed with attention to detail.",
    src: "/images/workshop/gt-motorsports-vehicle-inspection-clyde-north.jpg.jpeg",
    alt: "Vehicle inspection work at G&T Motorsports in Clyde North",
    position: "45% center",
  },
  {
    title: "Mechanical repairs",
    copy: "General mechanical repairs for all makes and models.",
    src: "/images/workshop/gt-motorsports-mechanical-repair-clyde-north.jpg.jpeg",
    alt: "Mechanical repair work at G&T Motorsports in Clyde North",
    position: "65% center",
  },
  {
    title: "Vehicle inspections",
    copy: "Clear inspections and practical advice before work begins.",
    src: "/images/workshop/gt-motorsports-vehicle-inspection-clyde-north.jpg.jpeg",
    alt: "Vehicle inspection work at G&T Motorsports in Clyde North",
    position: "35% center",
  },
  {
    title: "Brake work",
    copy: "Brake inspections and repairs focused on dependable stopping performance.",
    src: "/images/workshop/gt-motorsports-brake-suspension-repair-clyde-north.jpg.jpeg",
    alt: "Brake and suspension repair work at G&T Motorsports in Clyde North",
    position: "75% center",
  },
  {
    title: "Diagnostics",
    copy: "Diagnostic equipment used to support accurate fault finding.",
    src: "/images/workshop/gt-motorsports-diagnostics-clyde-north.jpg.jpeg",
    alt: "Vehicle diagnostic work at G&T Motorsports in Clyde North",
    position: "60% center",
  },
];

export default function GalleryPage() {
  return (
    <PageShell>
      <section className="bg-black py-16 sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Gallery"
            title="A clean, capable workshop environment."
            copy="Explore the G&T Motorsports workshop environment, built around careful workmanship, organised service bays and professional vehicle care."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <article
                className="group relative aspect-[4/3] overflow-hidden rounded-md border border-white/10 bg-black"
                key={item.title}
              >
                <Image
                  alt={item.alt}
                  className="object-cover transition duration-700 group-hover:scale-105"
                  fill
                  loading={index < 2 ? "eager" : "lazy"}
                  sizes="(min-width: 1024px) 352px, (min-width: 640px) calc(50vw - 24px), calc(100vw - 32px)"
                  src={item.src}
                  style={{ objectPosition: item.position }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/5" aria-hidden="true" />
                <div className="relative flex h-full flex-col justify-between p-5">
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-white/55">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-2xl font-black">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/72">{item.copy}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <BookingCTA />
    </PageShell>
  );
}
