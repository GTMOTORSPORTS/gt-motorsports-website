import type { Metadata } from "next";
import { BookingCTA } from "@/components/BookingCTA";
import { PageShell } from "@/components/PageShell";
import { SectionHeader } from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View the G&T Motorsports workshop gallery for servicing, diagnostics and mechanical repair placeholder imagery.",
  alternates: {
    canonical: "/gallery",
  },
};

const items = [
  "Workshop bays",
  "Service checks",
  "Mechanical repairs",
  "Vehicle inspections",
  "Brake work",
  "Diagnostics",
];

export default function GalleryPage() {
  return (
    <PageShell>
      <section className="bg-black py-16 sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Gallery"
            title="A clean, capable workshop environment."
            copy="A premium website foundation is ready for real workshop photos as they become available. These gallery spaces are designed for service bays, repair work and team imagery."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <div className="aspect-[4/3] rounded-md border border-white/10 bg-[linear-gradient(135deg,#2a2b31,#080808_58%,#d71920_59%,#9f1318)] p-5" key={item}>
                <div className="flex h-full flex-col justify-between">
                  <span className="text-xs font-black uppercase tracking-[0.24em] text-white/55">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-2xl font-black">{item}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <BookingCTA />
    </PageShell>
  );
}
