import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";
import { customerReviews } from "@/lib/reviews";
import { site } from "@/lib/site";
export function Reviews({
  showPageLink = false,
  compact = false,
  pageHeading = false,
}: {
  showPageLink?: boolean;
  compact?: boolean;
  pageHeading?: boolean;
}) {
  return (
    <section
      id={compact ? "home-reviews" : undefined}
      className="bg-asphalt py-12 sm:py-16"
    >
      <div className="container-shell">
        <SectionHeader
          as={pageHeading ? "h1" : "h2"}
          eyebrow="Customer reviews"
          title="What Our Customers Say"
          copy="Short excerpts from customer reviews on our Google business listing."
        />
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {customerReviews.map((review) => (
            <article
              key={review.name}
              className="rounded-md border border-white/15 bg-white/[0.04] p-6"
            >
              <p className="text-xs font-bold uppercase tracking-wide text-white/70">
                Google review excerpt
              </p>
              <blockquote className="mt-4 text-lg leading-8 text-white/90">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <p className="mt-5 font-bold">{review.name}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-5 text-sm font-bold">
          <a
            className="focus-ring underline decoration-brake underline-offset-4"
            href={site.googleReviewsHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Our Google Reviews
          </a>
          {!compact ? (
            <a
              className="focus-ring underline underline-offset-4"
              href={site.googleWriteReviewHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Leave a Google Review
            </a>
          ) : null}
          {compact || showPageLink ? (
            <Link
              className="focus-ring underline underline-offset-4"
              href="/reviews"
            >
              View Reviews Page
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
