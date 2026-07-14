import type { Metadata } from "next";
import { BookingCTA } from "@/components/BookingCTA";
import { PageShell } from "@/components/PageShell";
import { SectionHeader } from "@/components/SectionHeader";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Our Clyde North Mechanic Workshop",
  description:
    "Learn about G&T Motorsports, a Clyde North mechanic workshop providing servicing, diagnostics and repairs for all makes and models.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageShell>
      <section className="bg-black py-16 sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="About G&T Motorsports"
            title="A premium local mechanic workshop for everyday drivers."
            copy="Based in Clyde North, G&T Motorsports provides servicing, diagnostics and repairs for all makes and models with a focus on clear communication and dependable workmanship."
          />
          <div className="mt-10 grid gap-5 text-sm leading-7 text-white/70 md:grid-cols-3">
            <p>
              We help customers stay on top of routine servicing, warning lights,
              mechanical repairs and general vehicle safety without overcomplicating
              the process.
            </p>
            <p>
              You can expect straightforward advice, practical recommendations and
              a team that respects your time from booking through to collection.
            </p>
            <p>
              Our workshop is located at 47B Palladium Circuit, Clyde North VIC
              3978, serving drivers across the south-east.
            </p>
          </div>
        </div>
      </section>
      <BookingCTA />
    </PageShell>
  );
}
