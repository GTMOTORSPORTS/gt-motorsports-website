import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader";

const commonProblems = [
  {
    title: "Engine warning light",
    copy: "A warning light can point to many different faults. Diagnostic testing helps narrow down the cause before repairs are recommended.",
    href: "/engine-diagnostics",
  },
  {
    title: "Brake noise",
    copy: "Squealing, grinding or vibration under braking should be inspected so pads, rotors, fluid and related parts can be checked.",
    href: "/brake-repairs",
  },
  {
    title: "Suspension noises",
    copy: "Knocks, clunks or loose steering can come from several suspension or steering components and should be checked before parts are replaced.",
    href: "/services/suspension-steering",
  },
  {
    title: "Battery problems",
    copy: "Slow cranking, clicking or repeated flat batteries can be tested with battery, charging and starting-system checks.",
    href: "/services/battery-charging-systems",
  },
  {
    title: "Air conditioning faults",
    copy: "Warm air, weak airflow, odours or unusual noises can be inspected so the likely air-conditioning issue can be explained.",
    href: "/services/air-conditioning",
  },
  {
    title: "Cooling system issues",
    copy: "Overheating, coolant smells or visible leaks should be assessed promptly. Contact the workshop before travelling if the vehicle is unsafe to drive.",
    href: "/services/cooling-system-repairs",
  },
  {
    title: "Oil leaks",
    copy: "Visible oil leaks or burning smells can be inspected to identify the likely source before repair options are discussed.",
    href: "/services/engine-repairs",
  },
  {
    title: "Starting problems",
    copy: "Intermittent starting can involve the battery, starter, charging system, wiring or other faults, so testing is the right first step.",
    href: "/engine-diagnostics",
  },
];

export function CommonProblems() {
  return (
    <section className="bg-black py-16 sm:py-20">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Common Problems"
          title="Common Vehicle Problems We Fix"
          copy="If your vehicle feels, sounds or behaves differently, choose the closest symptom below or contact G&T Motorsports for guidance."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {commonProblems.map((problem) => (
            <Link
              className="focus-ring rounded-md border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-brake"
              href={problem.href}
              key={problem.title}
            >
              <span className="mb-5 block h-1 w-12 bg-brake" />
              <h3 className="text-xl font-black text-white">{problem.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/66">
                {problem.copy}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
