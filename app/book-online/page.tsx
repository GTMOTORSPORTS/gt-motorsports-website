import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PageShell } from "@/components/PageShell";
import { SectionHeader } from "@/components/SectionHeader";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Book Online for Vehicle Service",
  description:
    "Request a booking with G&T Motorsports in Clyde North for car servicing, diagnostics, repairs and maintenance.",
  path: "/book-online",
});

export default function BookOnlinePage() {
  return (
    <PageShell>
      <section className="bg-black py-16 sm:py-24">
        <div className="container-shell">
          <SectionHeader
            eyebrow="Book Online"
            title="Book Your Vehicle Drop-Off"
            copy="Choose an available time for vehicle drop-off or an initial assessment. Your selected time does not guarantee completion at that time. Service and repair timeframes depend on the work required, parts availability and current workshop workload."
          />
          <div className="mt-8 rounded-md border border-white/10 bg-white/[0.04] p-4 shadow-2xl sm:p-6">
            <p className="mb-5 rounded-md border border-white/10 bg-black/70 p-4 text-sm font-bold leading-6 text-white/78">
              Appointments are recommended. Walk-ins are welcome, but waiting
              times may apply.
            </p>
            <div className="w-full overflow-hidden rounded-md border border-white/10 bg-white">
              <iframe
                className="block h-[720px] w-full max-w-full border-0 sm:h-[760px] lg:h-[820px]"
                height="600"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ15t6EeGWqIQj3IuTXL3qAA7S3kqVc8fEA7eTnJfygwmY2nF5hf80AcxCwvwiDenf3gVo5AtiK0?gv=true"
                title="G&T Motorsports Google Calendar appointment schedule"
                width="100%"
              />
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={site.phoneHref} variant="secondary">
                Call {site.phone}
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
