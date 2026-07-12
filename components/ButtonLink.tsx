import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  ariaLabel?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  ariaLabel,
}: ButtonLinkProps) {
  const base =
    "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-bold uppercase tracking-wide transition";
  const variants = {
    primary:
      "bg-brake text-white shadow-glow hover:bg-white hover:text-asphalt",
    secondary:
      "border border-white/20 bg-white text-asphalt hover:border-brake hover:bg-brake hover:text-white",
    ghost:
      "border border-white/20 bg-white/5 text-white hover:border-brake hover:bg-brake",
  };

  return (
    <Link aria-label={ariaLabel} className={`${base} ${variants[variant]} ${className}`} href={href}>
      {children}
    </Link>
  );
}
