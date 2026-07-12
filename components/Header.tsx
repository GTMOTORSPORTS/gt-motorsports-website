import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { navItems, site } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/92 backdrop-blur">
      <div className="bg-brake text-white">
        <div className="container-shell flex flex-col gap-2 py-2 text-xs font-bold uppercase tracking-wide sm:flex-row sm:items-center sm:justify-between">
          <a className="focus-ring w-fit" href={site.phoneHref}>
            Call {site.phone}
          </a>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-white/90">
            <span>Mon-Fri 9:00 AM-6:00 PM</span>
            <span>Sat 9:00 AM-4:00 PM</span>
          </div>
        </div>
      </div>
      <nav aria-label="Main navigation" className="container-shell flex items-center justify-between gap-4 py-4">
        <Link className="focus-ring flex items-center gap-3" href="/">
          <span className="flex h-11 w-11 items-center justify-center rounded-md border border-brake bg-white text-base font-black text-asphalt">
            GT
          </span>
          <span>
            <span className="block text-lg font-black leading-none">G&T</span>
            <span className="block text-xs font-bold uppercase tracking-[0.22em] text-white/60">
              Motorsports
            </span>
          </span>
        </Link>
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <Link
              className="focus-ring text-sm font-bold text-white/76 transition hover:text-white"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-3 sm:flex">
          <ButtonLink href={site.phoneHref} variant="ghost" ariaLabel="Call G&T Motorsports">
            Call Now
          </ButtonLink>
          <ButtonLink href="/book-online">Book Online</ButtonLink>
        </div>
        <ButtonLink href="/book-online" className="sm:hidden">
          Book
        </ButtonLink>
      </nav>
      <div className="border-t border-white/10 lg:hidden">
        <div className="container-shell flex gap-4 overflow-x-auto py-3">
          {navItems.map((item) => (
            <Link
              className="focus-ring shrink-0 text-sm font-bold text-white/76"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
