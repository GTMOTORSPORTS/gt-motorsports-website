import { ButtonLink } from "@/components/ButtonLink";
import { PageShell } from "@/components/PageShell";

export default function NotFound() {
  return (
    <PageShell>
      <section className="bg-black py-20 sm:py-28">
        <div className="container-shell max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-brake">
            Page Not Found
          </p>
          <h1 className="text-4xl font-black leading-tight text-white sm:text-6xl">
            This page is not available.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/70">
            The page may have moved, or the address may have been entered
            incorrectly. You can return home or book a workshop enquiry.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/">Back Home</ButtonLink>
            <ButtonLink href="/book-online" variant="ghost">
              Book Online
            </ButtonLink>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
