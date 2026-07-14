type ProcessStep = {
  title: string;
  copy: string;
};

export const standardWorkshopProcess: ProcessStep[] = [
  {
    title: "Consultation",
    copy: "We discuss your vehicle, concerns and goals.",
  },
  {
    title: "Vehicle Inspection",
    copy: "We inspect the vehicle and identify relevant faults or requirements.",
  },
  {
    title: "Recommendation",
    copy: "We explain the suitable service, repair or upgrade options.",
  },
  {
    title: "Quote Approval",
    copy: "No additional work begins until the quote is approved.",
  },
  {
    title: "Professional Work",
    copy: "Approved servicing, repairs or upgrades are completed carefully.",
  },
  {
    title: "Quality Inspection",
    copy: "The work is checked before vehicle collection.",
  },
  {
    title: "Road Test",
    copy: "A road test is completed where safe, appropriate and required.",
  },
];

type ProcessStepsProps = {
  steps?: ProcessStep[];
  tone?: "dark" | "light";
};

export function ProcessSteps({
  steps = standardWorkshopProcess,
  tone = "dark",
}: ProcessStepsProps) {
  const isLight = tone === "light";

  return (
    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => (
        <article
          className={`flex min-h-[13rem] flex-col rounded-md p-[clamp(1.25rem,2.5vw,2rem)] ${
            isLight
              ? "border border-black/10 bg-neutral-50"
              : "border border-white/10 bg-black/35"
          }`}
          key={step.title}
        >
          <p className="text-[0.875rem] font-semibold uppercase tracking-[0.22em] text-brake">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3
            className={`mt-5 text-[clamp(1.2rem,1.8vw,1.65rem)] font-bold leading-[1.15] [hyphens:auto] [overflow-wrap:anywhere] ${
              isLight ? "text-asphalt" : "text-white"
            }`}
          >
            {step.title}
          </h3>
          <p
            className={`mt-4 text-[clamp(0.95rem,1.2vw,1.05rem)] font-normal leading-[1.65] ${
              isLight ? "text-black/65" : "text-white/66"
            }`}
          >
            {step.copy}
          </p>
        </article>
      ))}
    </div>
  );
}
