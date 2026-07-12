import { SectionHeader } from "@/components/SectionHeader";

const reviews = [
  {
    name: "Local Customer",
    text: "Easy to book, clear about what needed doing and the car felt great afterwards.",
  },
  {
    name: "Clyde North Driver",
    text: "Professional service and good communication from drop-off through pickup.",
  },
  {
    name: "Repeat Customer",
    text: "Reliable workshop for servicing and general repairs. Straightforward and helpful.",
  },
];

export function Reviews() {
  return (
    <section className="bg-asphalt py-16 sm:py-20">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Reviews"
          title="A workshop experience built around confidence."
          copy="Here is the kind of feedback local drivers look for: clear advice, dependable servicing and a straightforward booking experience."
          align="center"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <figure className="rounded-md border border-white/10 bg-white/[0.04] p-6" key={review.name}>
              <div className="mb-5 flex gap-1 text-brake" aria-label="Five star review">
                ★★★★★
              </div>
              <blockquote className="text-base leading-7 text-white/80">
                “{review.text}”
              </blockquote>
              <figcaption className="mt-6 text-sm font-bold uppercase tracking-wide text-white">
                {review.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
