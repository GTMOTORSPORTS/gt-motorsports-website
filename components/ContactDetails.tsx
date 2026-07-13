import { ButtonLink } from "@/components/ButtonLink";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

const contactCards = [
  {
    label: "Click to Call",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    label: "Click to Email",
    value: site.email,
    href: site.emailHref,
  },
];

export function ContactDetails() {
  return (
    <section className="bg-white py-16 text-asphalt sm:py-20">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              eyebrow="Contact"
              title="Visit the workshop or get in touch."
              copy="Call, email or send a secure enquiry. Appointments are recommended. Walk-ins are welcome; waiting times depend on the work required and current workshop availability."
              tone="light"
            />
            <div className="mt-8 grid gap-4">
              {contactCards.map((card) => (
                <a
                  className="focus-ring rounded-md border border-black/10 p-5 transition hover:border-brake"
                  href={card.href}
                  key={card.label}
                >
                  <span className="block text-xs font-bold uppercase tracking-[0.22em] text-black/45">
                    {card.label}
                  </span>
                  <span className="mt-2 block text-xl font-black">{card.value}</span>
                </a>
              ))}
              <a
                className="focus-ring rounded-md border border-black/10 p-5 transition hover:border-brake"
                href={site.mapHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="block text-xs font-bold uppercase tracking-[0.22em] text-black/45">
                  Address
                </span>
                <span className="mt-2 block text-lg font-black">{site.address}</span>
              </a>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-md border border-black/10 p-5">
                  <span className="block text-xs font-bold uppercase tracking-[0.22em] text-black/45">
                    Appointments Recommended
                  </span>
                  <p className="mt-3 text-sm leading-6 text-black/65">
                    Booking ahead helps the workshop plan your drop-off and
                    initial assessment.
                  </p>
                </div>
                <div className="rounded-md border border-black/10 p-5">
                  <span className="block text-xs font-bold uppercase tracking-[0.22em] text-black/45">
                    Walk-ins Welcome
                  </span>
                  <p className="mt-3 text-sm leading-6 text-black/65">
                    Walk-ins are welcome, subject to workshop workload and wait
                    times.
                  </p>
                </div>
              </div>
              <div className="rounded-md border border-black/10 p-5">
                <span className="block text-xs font-bold uppercase tracking-[0.22em] text-black/45">
                  Business Hours
                </span>
                <dl className="mt-3 grid gap-2 text-sm">
                  {site.hours.map(([day, hours]) => (
                    <div className="flex justify-between gap-6" key={day}>
                      <dt className="font-bold">{day}</dt>
                      <dd className="text-black/65">{hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/book-online">Book Online</ButtonLink>
                <ButtonLink href={site.phoneHref} variant="ghost" className="border-black/20 text-asphalt hover:text-white">
                  Call Now
                </ButtonLink>
              </div>
            </div>
          </div>
          <div className="rounded-md border border-white/10 bg-asphalt p-5 shadow-2xl sm:p-6">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.24em] text-brake">
              Secure Enquiry
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
