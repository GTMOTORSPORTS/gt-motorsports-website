import { SectionHeader } from "@/components/SectionHeader";

const reasons = [
  [
    "Clear communication",
    "You get practical advice in plain language before work proceeds.",
  ],
  [
    "Quality workmanship",
    "Every job is approached carefully, from basic servicing to fault finding.",
  ],
  [
    "Local convenience",
    "Located in Clyde North with direct booking, phone and email options.",
  ],
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-16 text-asphalt sm:py-20">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Why Drivers Choose G&T Motorsports"
          copy="Straightforward advice, quality workmanship and professional automotive care. We explain what your vehicle needs before work proceeds and focus on repairs and servicing you can rely on."
          tone="light"
        />
        <div className="mt-7 grid gap-4 sm:grid-cols-3">
          {reasons.map(([title, copy]) => (
            <article
              className="rounded-md border border-black/10 bg-neutral-50 p-5"
              key={title}
            >
              <span className="mb-5 block h-1 w-12 bg-brake" />
              <h3 className="text-xl font-black">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-black/65">{copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
