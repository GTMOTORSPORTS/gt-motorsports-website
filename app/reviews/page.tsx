import type { Metadata } from "next";
import { BookingCTA } from "@/components/BookingCTA";
import { PageShell } from "@/components/PageShell";
import { Reviews } from "@/components/Reviews";

export const metadata: Metadata = {
  title: "Customer Reviews | G&T Motorsports Clyde North",
  description:
    "Read genuine customer feedback about G&T Motorsports in Clyde North and book your next vehicle service or repair online.",
  alternates: {
    canonical: "/reviews",
  },
};

export default function ReviewsPage() {
  return (
    <PageShell>
      <Reviews />
      <BookingCTA />
    </PageShell>
  );
}
