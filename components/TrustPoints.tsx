const points = [
  {
    title: "Honest Advice",
    copy: "Clear recommendations before work begins, with practical guidance you can trust.",
  },
  {
    title: "Advanced Diagnostics",
    copy: "Modern fault-finding support for warning lights, performance issues and vehicle checks.",
  },
  {
    title: "Quality Workmanship",
    copy: "Careful servicing, repairs and maintenance with attention to the details that matter.",
  },
  {
    title: "All Makes & Models",
    copy: "Professional care for everyday drivers across a wide range of vehicles.",
  },
];

export function TrustPoints() {
  return (
    <section className="relative z-10 -mt-16 pb-12 sm:-mt-20 sm:pb-16">
      <div className="container-shell grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {points.map((point, index) => (
          <div
            className="feature-card rounded-md border border-white/10 bg-graphite/95 p-5 shadow-2xl backdrop-blur transition hover:-translate-y-2 hover:border-brake"
            key={point.title}
            style={{ animationDelay: `${index * 120}ms` }}
          >
            <span className="mb-5 block h-1 w-12 bg-brake" />
            <h2 className="text-xl font-black text-white">{point.title}</h2>
            <p className="mt-3 text-sm leading-6 text-white/66">{point.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
