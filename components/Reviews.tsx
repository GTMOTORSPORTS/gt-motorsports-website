import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeader } from "@/components/SectionHeader";

export function Reviews() {
  return (
    <section className="bg-asphalt py-16 sm:py-20">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Reviews"
          title="Real customer feedback belongs here."
          copy="Verified customer reviews can be added to this page once G&T Motorsports supplies real review data. No ratings or testimonials have been invented for this website."
          align="center"
        />
        <div className="mx-auto mt-10 max-w-2xl rounded-md border border-white/10 bg-white/[0.04] p-6 text-center">
          <p className="text-base leading-7 text-white/76">
            For now, please contact the workshop directly to discuss your vehicle
            service needs or to request a booking.
          </p>
          <div className="mt-6">
            <ButtonLink href="/contact" variant="ghost">
              Contact the Workshop
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
