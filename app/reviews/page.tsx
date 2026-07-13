import type { Metadata } from "next";
import { BookingCTA } from "@/components/BookingCTA";
import { PageShell } from "@/components/PageShell";
import { Reviews } from "@/components/Reviews";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Review information for G&T Motorsports in Clyde North. Verified customer reviews can be added when supplied.",
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
