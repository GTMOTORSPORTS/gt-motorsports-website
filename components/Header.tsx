"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { site } from "@/lib/site";

type NavItem = {
  href: string;
  label: string;
};

const serviceMenuItems: NavItem[] = [
  { href: "/logbook-servicing", label: "Logbook Servicing" },
  { href: "/engine-diagnostics", label: "Engine Diagnostics" },
  { href: "/brake-repairs", label: "Brake Repairs" },
  { href: "/roadworthy-certificate", label: "Roadworthy Certificate Inspections" },
  { href: "/mercedes-benz-service", label: "Mercedes-Benz Service" },
  { href: "/services/cooling-system-repairs", label: "Cooling System Repairs" },
  { href: "/services/suspension-steering", label: "Suspension Repairs" },
  { href: "/services/air-conditioning", label: "Air Conditioning Service" },
  { href: "/services/battery-charging-systems", label: "Battery Services" },
  { href: "/services/clutch-transmission", label: "Clutch & Transmission Repairs" },
  { href: "/performance-upgrades", label: "Performance Upgrades" },
  { href: "/services", label: "All Services" },
];

const locationMenuItems: NavItem[] = [
  { href: "/locations/cranbourne", label: "Cranbourne" },
  { href: "/locations/berwick", label: "Berwick" },
  { href: "/locations/narre-warren", label: "Narre Warren" },
  { href: "/locations/officer", label: "Officer" },
  { href: "/locations/pakenham", label: "Pakenham" },
  { href: "/locations/lynbrook", label: "Lynbrook" },
  { href: "/locations/hampton-park", label: "Hampton Park" },
  { href: "/locations/hallam", label: "Hallam" },
  { href: "/locations", label: "View All Locations" },
];

const desktopNavItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/performance-upgrades", label: "Performance" },
  { href: "/roadworthy-certificate", label: "RWC" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

const mobileNavItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/performance-upgrades", label: "Performance" },
  { href: "/roadworthy-certificate", label: "RWC" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
  { href: "/book-online", label: "Book Online" },
];

function DesktopDropdown({
  id,
  label,
  items,
  openMenu,
  setOpenMenu,
}: {
  id: "services" | "locations";
  label: string;
  items: NavItem[];
  openMenu: string | null;
  setOpenMenu: (menu: string | null) => void;
}) {
  const isOpen = openMenu === id;

  return (
    <div className="relative">
      <button
        aria-controls={`${id}-dropdown`}
        aria-expanded={isOpen}
        className="focus-ring inline-flex min-h-11 items-center gap-1 whitespace-nowrap text-[16px] font-bold leading-tight text-white/78 transition hover:text-white"
        onClick={() => setOpenMenu(isOpen ? null : id)}
        onMouseEnter={() => setOpenMenu(id)}
        type="button"
      >
        {label}
        <span aria-hidden="true" className="text-xs text-brake">
          ▼
        </span>
      </button>
      <div
        className={`absolute left-0 top-full z-50 mt-3 w-[min(36rem,calc(100vw-2rem))] rounded-md border border-white/10 bg-[#09090c] p-3 shadow-2xl transition motion-reduce:transition-none ${
          isOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-2 opacity-0"
        }`}
        id={`${id}-dropdown`}
        onMouseLeave={() => setOpenMenu(null)}
      >
        <div className="grid gap-1 sm:grid-cols-2">
          {items.map((item) => (
            <Link
              className="focus-ring whitespace-nowrap rounded-md px-4 py-3 text-sm font-bold leading-tight text-white/76 transition hover:bg-brake hover:text-white"
              href={item.href}
              key={item.href}
              onClick={() => setOpenMenu(null)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileAccordion({
  id,
  label,
  items,
  openPanel,
  setOpenPanel,
  closeMenu,
}: {
  id: "services" | "locations";
  label: string;
  items: NavItem[];
  openPanel: string | null;
  setOpenPanel: (panel: string | null) => void;
  closeMenu: () => void;
}) {
  const isOpen = openPanel === id;

  return (
    <div className="border-b border-white/10">
      <button
        aria-controls={`${id}-mobile-panel`}
        aria-expanded={isOpen}
        className="focus-ring flex min-h-12 w-full items-center justify-between py-3 text-left text-base font-bold text-white"
        onClick={() => setOpenPanel(isOpen ? null : id)}
        type="button"
      >
        {label}
        <span aria-hidden="true" className="text-brake">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <div
        className={isOpen ? "grid gap-1 pb-4" : "hidden"}
        id={`${id}-mobile-panel`}
      >
        {items.map((item) => (
          <Link
            className="focus-ring min-h-11 rounded-md px-3 py-3 text-sm font-bold text-white/72 hover:bg-white/10 hover:text-white"
            href={item.href}
            key={item.href}
            onClick={closeMenu}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openPanel, setOpenPanel] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setOpenMenu(null);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);

    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenPanel(null);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 bg-black/94 backdrop-blur transition-shadow motion-reduce:transition-none ${
        isScrolled ? "shadow-2xl shadow-black/40" : ""
      } relative`}
      ref={headerRef}
    >
      <div className="bg-brake text-white">
        <div className="container-shell flex min-h-9 flex-col gap-1 py-2 text-[11px] font-bold uppercase tracking-wide sm:min-h-10 sm:flex-row sm:items-center sm:justify-between">
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
        className={`container-shell flex items-center justify-between gap-4 transition-[padding] motion-reduce:transition-none ${
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

        <div className="ml-4 hidden min-w-0 items-center gap-4 xl:ml-8 xl:flex xl:gap-6">
          <Link
            className="focus-ring min-h-11 whitespace-nowrap text-[16px] font-bold leading-tight text-white/78 transition hover:text-white"
            href="/"
          >
            Home
          </Link>
          <DesktopDropdown
            id="services"
            items={serviceMenuItems}
            label="Services"
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
          />
          {desktopNavItems.slice(1, 5).map((item) => (
            <Link
              className="focus-ring min-h-11 whitespace-nowrap text-[16px] font-bold leading-tight text-white/78 transition hover:text-white"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
          <DesktopDropdown
            id="locations"
            items={locationMenuItems}
            label="Locations"
            openMenu={openMenu}
            setOpenMenu={setOpenMenu}
          />
          <Link
            className="focus-ring min-h-11 whitespace-nowrap text-[16px] font-bold leading-tight text-white/78 transition hover:text-white"
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

        <div className="ml-auto flex shrink-0 items-center gap-2 xl:hidden">
          <a
            aria-label="Call G&T Motorsports"
            className="focus-ring inline-flex min-h-11 items-center justify-center rounded-md border border-white/18 bg-white/[0.04] px-3 text-xs font-black uppercase tracking-wide text-white"
            href={site.phoneHref}
          >
            Call
          </a>
          <button
            aria-controls="mobile-menu"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="focus-ring inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-white/18 bg-white/[0.04] text-white"
            onClick={() => setMobileOpen((open) => !open)}
            type="button"
          >
            <span aria-hidden="true" className="text-2xl leading-none">
              {mobileOpen ? "×" : "☰"}
            </span>
          </button>
        </div>
      </nav>

      <div
        className={`absolute left-0 right-0 top-full z-40 max-h-[calc(100vh-6rem)] overflow-y-auto border-t border-white/10 bg-black px-5 pb-8 pt-4 transition xl:hidden motion-reduce:transition-none ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        id="mobile-menu"
      >
        <div className="grid gap-1">
          <Link
            className="focus-ring min-h-12 border-b border-white/10 py-3 text-base font-bold text-white"
            href="/"
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <MobileAccordion
            closeMenu={closeMobileMenu}
            id="services"
            items={serviceMenuItems}
            label="Services"
            openPanel={openPanel}
            setOpenPanel={setOpenPanel}
          />
          {mobileNavItems.slice(1, 5).map((item) => (
            <Link
              className="focus-ring min-h-12 border-b border-white/10 py-3 text-base font-bold text-white"
              href={item.href}
              key={item.href}
              onClick={closeMobileMenu}
            >
              {item.label}
            </Link>
          ))}
          <MobileAccordion
            closeMenu={closeMobileMenu}
            id="locations"
            items={locationMenuItems}
            label="Locations"
            openPanel={openPanel}
            setOpenPanel={setOpenPanel}
          />
          <Link
            className="focus-ring min-h-12 border-b border-white/10 py-3 text-base font-bold text-white"
            href="/contact"
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
          <Link
            className="focus-ring mt-4 inline-flex min-h-12 items-center justify-center rounded-md bg-brake px-5 text-sm font-black uppercase tracking-wide text-white"
            href="/book-online"
            onClick={closeMobileMenu}
          >
            Book Online
          </Link>
        </div>
      </div>
    </header>
  );
}
