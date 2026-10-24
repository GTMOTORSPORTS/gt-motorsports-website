import { ButtonLink } from "@/components/ButtonLink";

export function StartingServicePackage({
  mercedes = false,
}: {
  mercedes?: boolean;
}) {
  const items = mercedes
    ? [
        "Engine oil replacement using up to 5 litres of oil meeting the applicable Mercedes-Benz approval.",
        "Quality oil filter replacement.",
        "Base Service A inspections appropriate to the vehicle, including brakes, tyres, lights, fluid levels and visible leaks.",
        "Tyre-pressure adjustment.",
        "Service reminder reset and service record update, including a Digital Service Record update for eligible vehicles.",
      ]
    : [
        "Engine oil replacement using up to 5 litres of oil meeting your vehicle’s required specification.",
        "Standard oil filter replacement and fluid-level checks.",
        "Inspection of brakes, tyres, lights, battery, visible belts and hoses, and accessible steering and suspension components.",
        "Tyre-pressure adjustment.",
        "Service reminder reset where supported, service record update and a summary of findings.",
      ];
  return (
    <section id="starting-package" className="bg-asphalt py-12 sm:py-16">
      <div className="container-shell">
        <h2 className="text-3xl font-black">
          {mercedes
            ? "Mercedes-Benz Service A — from $299 including GST"
            : "General Car Service — from $149 including GST"}
        </h2>
        <p className="mt-4 leading-7 text-white/75">
          For eligible {mercedes ? "models" : "passenger vehicles"}, the
          starting price includes the following parts and labour.
        </p>
        <ul className="mt-5 list-disc space-y-2 pl-5 text-white/75">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <details className="my-6 rounded-md border border-white/20 p-5">
          <summary className="focus-ring cursor-pointer font-bold">
            Starting-price conditions and additional items
          </summary>
          <p className="mt-4 leading-7 text-white/75">
            Final pricing depends on the model, engine, oil capacity, oil
            specification and service requirements. Additional oil, specialist
            filters and extra scheduled items—such as air/cabin filters, spark
            plugs, brake fluid or transmission servicing—are quoted before work
            begins.
          </p>
          <p className="mt-3 leading-7 text-white/75">
            These starting packages do not include every maintenance item that
            may be due under your vehicle’s logbook schedule. Checks depend on
            vehicle design and accessibility. Wash and vacuum are optional and
            charged separately. Send your registration or vehicle details for a
            confirmed quote.
          </p>
        </details>
        {!mercedes ? (
          <p className="mb-6 leading-7 text-white/75">
            More than an oil change: our service combines oil and filter
            replacement with a vehicle health inspection, including visible
            leaks. You receive a clear summary of findings and advice on what
            needs attention now and what can be planned for later. Additional
            repairs or replacement items are quoted for your approval before
            work begins.
          </p>
        ) : null}
        <ButtonLink href="/contact">
          Request a Vehicle-Specific Quote
        </ButtonLink>
      </div>
    </section>
  );
}
