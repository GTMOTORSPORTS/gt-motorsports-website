"use client";

import Link from "next/link";
import { MouseEvent, useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

type NavItem = {
  href: string;
  label: string;
};

const serviceMenuItems: NavItem[] = [
  { href: "/services/walnut-blasting-intake-cleaning-clyde-north", label: "Walnut Blasting & Intake Cleaning" },
  { href: "/logbook-servicing", label: "Logbook Servicing" },
  { href: "/roadworthy-certificate", label: "Roadworthy Certificate Inspections" },
  { href: "/brake-repairs", label: "Brake Repairs" },
  { href: "/engine-diagnostics", label: "Engine Diagnostics" },
  { href: "/mercedes-benz-service", label: "Mercedes-Benz Service" },
  { href: "/services/cooling-system-repairs", label: "Cooling System Repairs" },
  { href: "/services/suspension-steering", label: "Suspension Repairs" },
  { href: "/services/air-conditioning", label: "Air Conditioning Service" },
  { href: "/services/battery-charging-systems", label: "Battery Services" },
  { href: "/services/clutch-transmission", label: "Clutch & Transmission Repairs" },
  { href: "/services/general-car-servicing", label: "General Car Servicing" },
  { href: "/performance-upgrades", label: "Performance Upgrades" },
  { href: "/services", label: "View All Services" },
];

const desktopNavItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/roadworthy-certificate", label: "RWC" },
  { href: "/performance-upgrades", label: "Performance" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

const mobileNavItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/roadworthy-certificate", label: "RWC" },
  { href: "/performance-upgrades", label: "Performance" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
  { href: "/book-online", label: "Book Online" },
];

function DesktopDropdown({
  id,
  label,
  items,
  align = "left",
}: {
  id: "services" | "locations";
  label: string;
  items: NavItem[];
  align?: "left" | "right";
}) {
  return (
    <details
      className="group relative"
      onMouseEnter={(event) => {
        event.currentTarget.open = true;
      }}
      onMouseLeave={(event) => {
        event.currentTarget.open = false;
      }}
    >
      <summary
        aria-controls={`${id}-dropdown`}
        className="focus-ring flex min-h-11 cursor-pointer list-none items-center gap-1 whitespace-nowrap text-[15px] font-bold leading-tight text-white/78 transition hover:text-white 2xl:text-[16px] [&::-webkit-details-marker]:hidden"
      >
        {label}
        <span aria-hidden="true" className="text-xs text-brake">
          v
        </span>
      </summary>
      <div
        className={`invisible absolute top-full z-50 mt-3 w-[min(34rem,calc(100vw-2rem))] translate-y-2 rounded-md border border-white/10 bg-[#09090c] p-3 opacity-0 shadow-2xl transition group-open:visible group-open:translate-y-0 group-open:opacity-100 motion-reduce:transition-none ${
          align === "right" ? "right-0" : "left-0"
        }`}
        id={`${id}-dropdown`}
      >
        <div className="grid gap-1 sm:grid-cols-2">
          {items.map((item) => (
            <Link
              className="focus-ring whitespace-nowrap rounded-md px-4 py-3 text-sm font-bold leading-tight text-white/76 transition hover:bg-brake hover:text-white"
              href={item.href}
              key={item.href}
              onClick={(event) => closeParentDetails(event)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </details>
  );
}

function MobileAccordion({
  id,
  label,
  items,
}: {
  id: "services" | "locations";
  label: string;
  items: NavItem[];
}) {
  return (
    <details className="group border-b border-white/10">
      <summary
        aria-controls={`${id}-mobile-panel`}
        className="focus-ring flex min-h-12 cursor-pointer list-none items-center justify-between py-3 text-left text-base font-bold text-white [&::-webkit-details-marker]:hidden"
      >
        {label}
        <span aria-hidden="true" className="text-brake group-open:hidden">
          +
        </span>
        <span aria-hidden="true" className="hidden text-brake group-open:inline">
          -
        </span>
      </summary>
      <div
        className="hidden gap-1 pb-4 group-open:grid"
        id={`${id}-mobile-panel`}
      >
        {items.map((item) => (
          <Link
            className="focus-ring min-h-11 rounded-md px-3 py-3 text-sm font-bold text-white/72 hover:bg-white/10 hover:text-white"
            href={item.href}
            key={item.href}
            onClick={(event) => closeParentDetails(event)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </details>
  );
}

function closeParentDetails(event: MouseEvent<HTMLElement>) {
  let details = event.currentTarget.closest("details");

  while (details) {
    details.removeAttribute("open");
    details = details.parentElement?.closest("details") ?? null;
  }
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 bg-black/94 backdrop-blur transition-shadow motion-reduce:transition-none ${
        isScrolled ? "shadow-2xl shadow-black/40" : ""
      } relative`}
    >
      <div className="bg-brake text-white">
        <div className="header-shell flex min-h-9 flex-col gap-1 py-2 text-[11px] font-bold uppercase tracking-wide sm:min-h-10 sm:flex-row sm:items-center sm:justify-between">
          <a className="focus-ring w-fit" href={site.phoneHref}>
            CALL {site.phone}
          </a>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-white/90">
            <span>MON-FRI 9:00 AM-6:00 PM</span>
            <span>SAT 9:00 AM-4:00 PM</span>
          </div>
        </div>
      </div>

      <nav
        aria-label="Main navigation"
        className={`header-shell flex items-center justify-between gap-4 transition-[padding] motion-reduce:transition-none ${
          isScrolled ? "py-2" : "py-3"
        }`}
      >
        <div
          className={`shrink-0 transition-transform duration-200 motion-reduce:transition-none ${
            isScrolled ? "scale-90" : "scale-100"
          }`}
        >
          <Logo priority />
        </div>

        <div className="ml-4 hidden min-w-0 items-center gap-4 xl:ml-6 xl:flex 2xl:gap-5">
          <Link
            className="focus-ring min-h-11 whitespace-nowrap text-[15px] font-bold leading-tight text-white/78 transition hover:text-white 2xl:text-[16px]"
            href="/"
          >
            Home
          </Link>
          <DesktopDropdown
            id="services"
            items={serviceMenuItems}
            label="Services"
          />
          {desktopNavItems.slice(1, 5).map((item) => (
            <Link
              className="focus-ring min-h-11 whitespace-nowrap text-[15px] font-bold leading-tight text-white/78 transition hover:text-white 2xl:text-[16px]"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
          <Link
            className="focus-ring min-h-11 whitespace-nowrap text-[15px] font-bold leading-tight text-white/78 transition hover:text-white 2xl:text-[16px]"
            href="/contact"
          >
            Contact
          </Link>
        </div>

        <div className="ml-auto hidden shrink-0 items-center gap-3 xl:flex">
          <a
            aria-label="Call G&T Motorsports"
            className="focus-ring inline-flex h-[52px] items-center justify-center whitespace-nowrap rounded-md border border-white/18 bg-white/[0.04] px-5 text-sm font-black uppercase tracking-wide text-white transition hover:border-brake hover:bg-white/10"
            href={site.phoneHref}
          >
            Call Now
          </a>
          <Link
            className="focus-ring inline-flex h-[52px] items-center justify-center whitespace-nowrap rounded-md bg-brake px-5 text-sm font-black uppercase tracking-wide text-white shadow-glow transition hover:bg-white hover:text-asphalt"
            href="/book-online"
          >
            Book Online
          </Link>
        </div>

        <details className="group/mobile contents xl:hidden">
          <a
            aria-label="Call G&T Motorsports"
            className="focus-ring order-2 ml-auto inline-flex min-h-11 items-center justify-center rounded-md border border-white/18 bg-white/[0.04] px-3 text-xs font-black uppercase tracking-wide text-white"
            href={site.phoneHref}
          >
            Call
          </a>
          <summary
            aria-controls="mobile-menu"
            aria-label="Open navigation menu"
            className="focus-ring order-3 inline-flex min-h-11 min-w-11 cursor-pointer list-none items-center justify-center rounded-md border border-white/18 bg-white/[0.04] text-white [&::-webkit-details-marker]:hidden"
          >
            <span aria-hidden="true" className="text-sm font-black uppercase leading-none">
              <span className="group-open/mobile:hidden">Menu</span>
              <span className="hidden group-open/mobile:inline">Close</span>
            </span>
          </summary>

          <div
            className="invisible absolute left-0 right-0 top-full z-40 max-h-[calc(100vh-6rem)] overflow-y-auto border-t border-white/10 bg-black px-5 pb-8 pt-4 opacity-0 transition group-open/mobile:visible group-open/mobile:opacity-100 motion-reduce:transition-none"
            id="mobile-menu"
          >
            <div className="grid gap-1">
              <Link
                className="focus-ring min-h-12 border-b border-white/10 py-3 text-base font-bold text-white"
                href="/"
                onClick={(event) => closeParentDetails(event)}
              >
                Home
              </Link>
              <MobileAccordion
                id="services"
                items={serviceMenuItems}
                label="Services"
              />
              {mobileNavItems.slice(1, 5).map((item) => (
                <Link
                  className="focus-ring min-h-12 border-b border-white/10 py-3 text-base font-bold text-white"
                  href={item.href}
                  key={item.href}
                  onClick={(event) => closeParentDetails(event)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                className="focus-ring min-h-12 border-b border-white/10 py-3 text-base font-bold text-white"
                href="/contact"
                onClick={(event) => closeParentDetails(event)}
              >
                Contact
              </Link>
              <Link
                className="focus-ring mt-4 inline-flex min-h-12 items-center justify-center rounded-md bg-brake px-5 text-sm font-black uppercase tracking-wide text-white"
                href="/book-online"
                onClick={(event) => closeParentDetails(event)}
              >
                Book Online
              </Link>
            </div>
          </div>
        </details>
      </nav>
    </header>
  );
}
