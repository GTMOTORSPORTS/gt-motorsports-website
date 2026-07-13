import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

const badges = [
  "Honest Advice",
  "Quality Workmanship",
  "Transparent Pricing",
  "All Makes & Models",
];

export function Reviews() {
  return (
    <section className="bg-asphalt py-16 sm:py-24">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Reviews"
          title="Customer feedback, ready for real Google reviews."
          copy="G&T Motorsports is set up to feature verified customer feedback when real Google reviews are supplied. No review ratings, testimonials or awards have been invented on this website."
          align="center"
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-md border border-white/10 bg-white/[0.045] p-6 shadow-2xl sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-brake">
              Featured Reviews
            </p>
            <h2 className="mt-5 text-3xl font-black leading-tight text-white">
              A premium review section without fake review data.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/70">
              This space is prepared for genuine Google reviews, including
              customer name, review text and verified rating details when they
              are available from a real source.
            </p>
            <div className="mt-7 rounded-md border border-dashed border-white/20 bg-black/40 p-5">
              <h3 className="text-lg font-black text-white">
                Real Google reviews can be added here.
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/64">
                Review structured data will only be added once verified review
                content is supplied.
              </p>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={site.googleReviewHref} variant="secondary">
                Leave a Google Review
              </ButtonLink>
              <ButtonLink href="/contact" variant="ghost">
                Contact the Workshop
              </ButtonLink>
            </div>
          </article>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {badges.map((badge) => (
              <div className="rounded-md border border-white/10 bg-black/35 p-5" key={badge}>
                <span className="mb-4 block h-1 w-12 bg-brake" />
                <h3 className="text-xl font-black text-white">{badge}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
