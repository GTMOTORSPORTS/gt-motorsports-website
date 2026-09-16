import Link from "next/link";

const points = [
  {
    title: "Honest Advice",
    copy: "Clear explanations and practical recommendations before repairs are carried out.",
  },
  {
    title: "Advanced Diagnostics",
    copy: "Professional diagnostic equipment to accurately identify mechanical and electrical faults.",
  },
  {
    title: "Quality Workmanship",
    copy: "Repairs and servicing completed with attention to detail and quality parts.",
  },
  {
    title: "All Makes & Models",
    copy: "Servicing and repairs for Australian, Japanese, Korean and European vehicles.",
  },
  {
    title: "Mercedes-Benz Servicing",
    copy: "Specialist Mercedes-Benz servicing with Digital Service Record updates available for eligible vehicles.",
    href: "/mercedes-benz-service",
  },
];

export function TrustPoints() {
  return (
    <section className="relative z-10 -mt-16 pb-12 sm:-mt-20 sm:pb-16">
      <div className="container-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {points.map((point, index) => {
          const cardContent = (
            <>
              <span className="mb-5 block h-1 w-12 bg-brake" />
              <h2 className="text-xl font-black text-white">{point.title}</h2>
              <p className="mt-3 text-sm leading-6 text-white/66">{point.copy}</p>
            </>
          );
          const className =
            "feature-card rounded-md border border-white/10 bg-graphite/95 p-5 shadow-2xl backdrop-blur transition hover:-translate-y-2 hover:border-brake";

          return point.href ? (
            <Link
              className={className}
              href={point.href}
              key={point.title}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {cardContent}
            </Link>
          ) : (
            <div
              className={className}
              key={point.title}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {cardContent}
            </div>
          );
        })}
      </div>
    </section>
  );
}
