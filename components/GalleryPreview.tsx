import { SectionHeader } from "@/components/SectionHeader";

const galleryItems = [
  "Workshop Bay",
  "Diagnostics",
  "Brake Service",
  "Vehicle Care",
  "Tooling",
  "Inspection",
];

export function GalleryPreview() {
  return (
    <section className="bg-asphalt py-16 sm:py-24">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Gallery"
          title="A modern workshop experience."
          copy="Placeholder image panels are ready for real workshop photography while keeping the layout fast, responsive and polished."
          align="center"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <article
              className="group relative aspect-[4/3] overflow-hidden rounded-md border border-white/10 bg-black"
              key={item}
            >
              <div
                className="absolute inset-0 scale-105 bg-cover bg-center transition duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(5,5,5,.18), rgba(5,5,5,.82)), radial-gradient(circle at ${30 + index * 8}% ${20 + index * 7}%, rgba(215,25,32,.56), transparent 28%), linear-gradient(${120 + index * 18}deg, #2a2b31, #070707 58%, #d71920 59%, #120608)`,
                }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" aria-hidden="true" />
              <div className="relative flex h-full flex-col justify-between p-5">
                <span className="text-xs font-black uppercase tracking-[0.24em] text-white/60">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-2xl font-black text-white">{item}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
