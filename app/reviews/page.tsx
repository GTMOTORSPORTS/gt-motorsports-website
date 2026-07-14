import type { Metadata } from "next";
import { BookingCTA } from "@/components/BookingCTA";
import { PageShell } from "@/components/PageShell";
import { Reviews } from "@/components/Reviews";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Customer Reviews | G&T Motorsports Clyde North",
  description:
    "Read genuine customer feedback about G&T Motorsports in Clyde North and book your next vehicle service or repair online.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <PageShell>
      <Reviews />
      <BookingCTA />
    </PageShell>
  );
}
