import { ButtonLink } from "@/components/ButtonLink";

export function IntegrityWarranty() {
  return (
    <article id="integrity-warranty" className="rounded-md border border-white/15 bg-white/[0.04] p-6 lg:col-span-2 sm:p-8">
      <h2 className="text-2xl font-black sm:text-3xl">Integrity Extended Warranties Authorised Repairer</h2>
      <p className="mt-4 leading-7 text-white/75">G&T Motorsports is an authorised repairer for Integrity Extended Warranties in Clyde North.</p>
      <p className="mt-3 leading-7 text-white/75">Have an Integrity warranty and need repairs? Contact us before bringing your vehicle in so we can discuss the issue and arrange a booking.</p>
      <p className="mt-3 text-sm leading-6 text-white/70">Warranty repairs are subject to your policy terms and Integrity’s claim approval.</p>
      <div className="mt-6"><ButtonLink href="/contact?service=integrity-warranty#contact-form">Enquire About Warranty Repairs</ButtonLink></div>
    </article>
  );
}
