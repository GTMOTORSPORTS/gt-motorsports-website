import type { Metadata } from "next";
import { BookingCTA } from "@/components/BookingCTA";
import { PageShell } from "@/components/PageShell";
import { Reviews } from "@/components/Reviews";

export const metadata: Metadata = {
  title: "Reviews",
  description: "Customer review highlights for G&T Motorsports in Clyde North.",
};

export default function ReviewsPage() {
  return (
    <PageShell>
      <Reviews />
      <BookingCTA />
    </PageShell>
  );
}
