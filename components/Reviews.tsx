import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";
import { customerReviews } from "@/lib/reviews";
import { site } from "@/lib/site";

type ReviewsProps = {
  showPageLink?: boolean;
};

const reasons = [
  {
    title: "Honest Advice",
    copy: "We explain our findings clearly and recommend only the work your vehicle genuinely needs.",
  },
  {
    title: "Quality Workmanship",
    copy: "Every service and repair is completed carefully using quality parts and professional equipment.",
  },
  {
    title: "Clear Communication",
    copy: "We keep customers informed about the work required, expected costs and likely turnaround time.",
  },
  {
    title: "All Makes and Models",
    copy: "We service and repair a wide variety of family vehicles, work vehicles, four-wheel drives and performance vehicles.",
  },
];

function ExternalIcon() {
  return (
    <span
      aria-hidden="true"
      className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full border border-current text-[10px] font-black"
    >
      G&#8599;
    </span>
  );
}

export function Reviews({ showPageLink = false }: ReviewsProps) {
  return (
    <section className="bg-asphalt py-16 sm:py-24">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Reviews"
          title="What Our Customers Say"
          copy="We're proud to provide honest advice, quality workmanship and reliable automotive service to drivers across Clyde North and Melbourne's south-east. Read genuine feedback from customers who have trusted G&T Motorsports with their vehicles."
          align="center"
        />
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md bg-brake px-5 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-glow transition hover:bg-white hover:text-asphalt"
            href={site.googleReviewsHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Leave a Google Review
            <ExternalIcon />
          </a>
          <a
            className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md border border-white/20 bg-white text-sm font-bold uppercase tracking-wide text-asphalt transition hover:border-brake hover:bg-brake hover:text-white"
            href={site.googleReviewsHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Our Google Reviews
            <ExternalIcon />
          </a>
          <ButtonLink href="/book-online" variant="ghost">
            Book Online
          </ButtonLink>
          {showPageLink ? (
            <ButtonLink href="/reviews" variant="ghost">
              Reviews Page
            </ButtonLink>
          ) : null}
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {customerReviews.map((review) => (
            <article
              className="rounded-md border border-white/10 bg-white/[0.045] p-6 shadow-2xl sm:p-8"
              key={review.text}
            >
              <div className="flex flex-wrap items-center gap-3">
                <div className="text-lg tracking-[0.16em] text-brake" aria-label="Five-star Google review">
                  &#9733;&#9733;&#9733;&#9733;&#9733;
                </div>
                <span className="inline-flex items-center rounded-md border border-white/10 bg-black/35 px-3 py-2 text-xs font-black uppercase tracking-wide text-white/75">
                  Google Review
                  <ExternalIcon />
                </span>
              </div>
              <blockquote className="mt-6 text-base leading-7 text-white/82">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <p className="mt-6 text-sm font-black uppercase tracking-wide text-white">
                G&T Motorsports Customer
              </p>
            </article>
          ))}
        </div>

        <section className="mt-16">
          <SectionHeader
            eyebrow="Why Customers Choose Us"
            title="A workshop experience built around trust."
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => (
              <article className="rounded-md border border-white/10 bg-black/35 p-5" key={reason.title}>
                <span className="mb-5 block h-1 w-12 bg-brake" />
                <h3 className="text-xl font-black text-white">{reason.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/66">{reason.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-md border border-white/10 bg-black/35 p-6 text-center sm:p-8">
          <h2 className="text-3xl font-black leading-tight text-white">
            Have You Visited G&T Motorsports?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/70">
            Your feedback helps us improve and helps other local drivers choose
            a mechanic they can trust.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md bg-brake px-5 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-glow transition hover:bg-white hover:text-asphalt"
              href={site.googleReviewsHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Leave a Google Review
              <ExternalIcon />
            </a>
            <ButtonLink href="/book-online" variant="ghost">
              Book Your Next Service
            </ButtonLink>
          </div>
        </section>
      </div>
    </section>
  );
}
