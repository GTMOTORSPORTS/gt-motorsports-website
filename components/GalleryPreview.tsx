import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";

const galleryItems = [
  {
    title: "Workshop Bay",
    copy: "A clean, organised workshop environment for servicing and repairs.",
    src: "/images/workshop/gt-motorsports-workshop-service-clyde-north.jpg.jpeg",
    alt: "G&T Motorsports technician working underneath a vehicle on a workshop hoist",
    position: "center",
  },
  {
    title: "Diagnostics",
    copy: "Modern diagnostic checks to help identify faults accurately.",
    src: "/images/workshop/gt-motorsports-diagnostics-clyde-north.jpg.jpeg",
    alt: "Vehicle diagnostic work at G&T Motorsports in Clyde North",
    position: "60% center",
  },
  {
    title: "Brake Service",
    copy: "Careful inspection and repair work for braking performance and safety.",
    src: "/images/workshop/gt-motorsports-brake-suspension-repair-clyde-north.jpg.jpeg",
    alt: "Brake and suspension repair work at G&T Motorsports in Clyde North",
    position: "75% center",
  },
  {
    title: "Vehicle Care",
    copy: "Professional workmanship for family vehicles, work vehicles and performance cars.",
    src: "/images/workshop/gt-motorsports-mechanical-repair-clyde-north.jpg.jpeg",
    alt: "Mechanical repair work at G&T Motorsports in Clyde North",
    position: "35% center",
  },
  {
    title: "Inspection",
    copy: "Clear advice after every service, inspection or mechanical repair.",
    src: "/images/workshop/gt-motorsports-vehicle-inspection-clyde-north.jpg.jpeg",
    alt: "Vehicle inspection work at G&T Motorsports in Clyde North",
    position: "50% center",
  },
];

export function GalleryPreview() {
  return (
    <section className="bg-asphalt py-16 sm:py-24">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Gallery"
          title="Inside G&T Motorsports."
          copy="A look at the workshop environment where vehicles are serviced, diagnosed and repaired with care."
          align="center"
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-6">
          {galleryItems.map((item, index) => (
            <article
              className={`group relative min-h-[260px] overflow-hidden rounded-md border border-white/10 bg-black ${
                index === 0 ? "lg:col-span-3 lg:row-span-2 lg:min-h-[536px]" : "sm:min-h-[300px] lg:col-span-3 lg:min-h-[260px]"
              }`}
              key={item.title}
            >
              <Image
                alt={item.alt}
                className="object-cover transition duration-700 group-hover:scale-105"
                fill
                sizes={
                  index === 0
                    ? "(min-width: 1024px) 560px, calc(100vw - 32px)"
                    : "(min-width: 1024px) 560px, (min-width: 640px) calc(50vw - 24px), calc(100vw - 32px)"
                }
                src={item.src}
                style={{ objectPosition: item.position }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" aria-hidden="true" />
              <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/10" aria-hidden="true" />
              <div className="relative flex h-full min-h-[inherit] flex-col justify-between p-5 sm:p-6">
                <span className="text-xs font-black uppercase tracking-[0.24em] text-white/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-2xl font-black text-white">{item.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-white/72">{item.copy}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/gallery" variant="ghost">
            View Gallery
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
