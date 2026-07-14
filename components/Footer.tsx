import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { Logo } from "@/components/Logo";
import { navItems, site } from "@/lib/site";

const footerServices = [
  { label: "Logbook Servicing", href: "/logbook-servicing" },
  { label: "Engine Diagnostics", href: "/engine-diagnostics" },
  { label: "Brake Repairs", href: "/brake-repairs" },
  { label: "Roadworthy Certificate Inspections", href: "/roadworthy-certificate" },
  { label: "Cooling System Repairs", href: "/services/cooling-system-repairs" },
  { label: "Suspension Repairs", href: "/services/suspension-steering" },
  { label: "Air Conditioning Service", href: "/services/air-conditioning" },
  { label: "Battery Services", href: "/services/battery-charging-systems" },
  { label: "Clutch & Transmission Repairs", href: "/services/clutch-transmission" },
  { label: "Performance Upgrades", href: "/performance-upgrades" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="container-shell grid gap-10 py-12 lg:grid-cols-[1.1fr_0.65fr_0.95fr_0.75fr]">
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
            Services
          </p>
          <div className="grid gap-3 text-sm text-white/70">
            {footerServices.map((service) => (
              <Link
                className="focus-ring w-fit hover:text-white"
                href={service.href}
                key={service.href}
              >
                {service.label}
              </Link>
            ))}
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
