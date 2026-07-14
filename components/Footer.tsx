import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Logo } from "@/components/Logo";
import { navItems, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Logo placement="footer" />
          <p className="mt-4 max-w-md text-sm leading-6 text-white/65">
            Premium mechanic workshop in Clyde North, servicing all makes and
            models with clear advice, careful workmanship and easy booking.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/book-online">Book Online</ButtonLink>
            <ButtonLink href={site.phoneHref} variant="ghost">
              Call Now
            </ButtonLink>
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-white/45">
            Navigate
          </p>
          <div className="grid gap-3 text-sm text-white/70">
            {navItems.map((item) => (
              <Link className="focus-ring w-fit hover:text-white" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <Link className="focus-ring w-fit hover:text-white" href="/logbook-servicing">
              Logbook Servicing
            </Link>
            <Link className="focus-ring w-fit hover:text-white" href="/mercedes-benz-service">
              Mercedes-Benz Servicing
            </Link>
            <Link className="focus-ring w-fit hover:text-white" href="/mechanic-clyde-north">
              Mechanic Clyde North
            </Link>
            <Link className="focus-ring w-fit hover:text-white" href="/mechanic-cranbourne">
              Mechanic Cranbourne
            </Link>
            <Link className="focus-ring w-fit hover:text-white" href="/mechanic-berwick">
              Mechanic Berwick
            </Link>
            <Link className="focus-ring w-fit hover:text-white" href="/privacy-policy">
              Privacy Policy
            </Link>
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-white/45">
            Contact
          </p>
          <div className="grid gap-3 text-sm text-white/70">
            <a className="focus-ring hover:text-white" href={site.phoneHref}>
              {site.phone}
            </a>
            <a className="focus-ring hover:text-white" href={site.emailHref}>
              {site.email}
            </a>
            <a className="focus-ring hover:text-white" href={site.mapHref} target="_blank" rel="noopener noreferrer">
              {site.address}
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-shell flex flex-col gap-2 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} G&T Motorsports. All rights reserved.</p>
          <p>{site.domain}</p>
        </div>
      </div>
    </footer>
  );
}
