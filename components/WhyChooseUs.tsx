import { SectionHeader } from "@/components/SectionHeader";

const reasons = [
  ["Clear communication", "You get practical advice in plain language before work proceeds."],
  ["Quality workmanship", "Every job is approached carefully, from basic servicing to fault finding."],
  ["Local convenience", "Located in Clyde North with direct booking, phone and email options."],
  ["Safety first", "Recommendations focus on reliability, roadworthiness and what your car actually needs."],
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-16 text-asphalt sm:py-20">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="A cleaner, more confident way to look after your car."
          copy="Premium does not need to mean complicated. It means the right checks, tidy workmanship, honest communication and a workshop experience that respects your time."
          tone="light"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map(([title, copy]) => (
            <article className="rounded-md border border-black/10 bg-neutral-50 p-5" key={title}>
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
