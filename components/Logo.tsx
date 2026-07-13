import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

type LogoProps = {
  priority?: boolean;
  placement?: "header" | "footer" | "hero";
};

const logoSizes = {
  header:
    "h-[52px] w-[127px] md:h-[60px] md:w-[146px] lg:h-[68px] lg:w-[166px]",
  footer: "h-[52px] w-[127px] md:h-[60px] md:w-[146px]",
  hero: "h-16 w-[156px] md:h-[75px] md:w-[183px]",
};

export function Logo({ priority = false, placement = "header" }: LogoProps) {
  return (
    <Link
      aria-label="G&T Motorsports home"
      className="focus-ring inline-flex w-fit items-center"
      href="/"
      title={site.name}
    >
      <span className={`relative block shrink-0 ${logoSizes[placement]}`}>
        <Image
          src="/gt-motorsports-logo.webp"
          alt="G&T Motorsports"
          title="G&T Motorsports"
          fill
          priority={priority}
          sizes={
            placement === "header"
              ? "(min-width: 1024px) 183px, (min-width: 768px) 146px, 117px"
              : "(min-width: 768px) 183px, 156px"
          }
          className="object-contain"
        />
      </span>
    </Link>
  );
}
