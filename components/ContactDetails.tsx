import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

export function ContactDetails() {
  return (
    <section className="bg-white py-16 text-asphalt sm:py-20">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeader
          eyebrow="Contact"
          title="Visit the workshop or get in touch."
          copy="Call, email or book online. If you are unsure what your vehicle needs, tell us what you are experiencing and we will point you in the right direction."
          tone="light"
        />
        <div className="grid gap-4">
          <a className="focus-ring rounded-md border border-black/10 p-5 hover:border-brake" href={site.phoneHref}>
            <span className="block text-xs font-bold uppercase tracking-[0.22em] text-black/45">Phone</span>
            <span className="mt-2 block text-2xl font-black">{site.phone}</span>
          </a>
          <a className="focus-ring rounded-md border border-black/10 p-5 hover:border-brake" href={site.emailHref}>
            <span className="block text-xs font-bold uppercase tracking-[0.22em] text-black/45">Email</span>
            <span className="mt-2 block text-lg font-black">{site.email}</span>
          </a>
          <a className="focus-ring rounded-md border border-black/10 p-5 hover:border-brake" href={site.mapHref} target="_blank">
            <span className="block text-xs font-bold uppercase tracking-[0.22em] text-black/45">Address</span>
            <span className="mt-2 block text-lg font-black">{site.address}</span>
          </a>
          <div className="rounded-md border border-black/10 p-5">
            <span className="block text-xs font-bold uppercase tracking-[0.22em] text-black/45">Hours</span>
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
    </section>
  );
}
