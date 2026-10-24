import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { PageShell } from "@/components/PageShell";
import { SectionHeader } from "@/components/SectionHeader";
import { pageMetadata } from "@/lib/seo";
import { rwcService, rwcArrangement } from "@/lib/roadworthy";
import { site } from "@/lib/site";
const canonical = site.url + "/roadworthy-certificate";
export const metadata = pageMetadata({
  title: rwcService.metadataTitle,
  description: rwcService.metadataDescription,
  path: "/roadworthy-certificate",
});
const checked = [
  "Wheels and tyres",
  "Steering, suspension and brakes",
  "Seats and seatbelts",
  "Lights, reflectors and glazing",
  "Vehicle structure and safety-related items",
];
export default function RoadworthyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": canonical + "#service",
    name: "Roadworthy inspection arrangement service",
    description: rwcArrangement,
    url: canonical,
    provider: { "@id": site.url + "/#business" },
  };
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "RWC Inspection Arrangements",
        item: canonical,
      },
    ],
  };
  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <section className="bg-black py-14 sm:py-20">
        <div className="container-shell">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-white/70">
            <Link className="focus-ring underline" href="/">
              Home
            </Link>{" "}
            / RWC Inspection Arrangements
          </nav>
          <SectionHeader
            as="h1"
            eyebrow="Roadworthy enquiries"
            title={rwcService.title}
            copy={rwcArrangement}
          />
          <p className="mt-5 max-w-3xl rounded-md border border-white/15 p-5 text-base font-bold leading-7 text-white">
            {rwcService.specialNotice}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact">Discuss RWC Arrangements</ButtonLink>
            <ButtonLink href={site.phoneHref} variant="secondary">
              Call {site.phone}
            </ButtonLink>
          </div>
        </div>
      </section>
      <section className="bg-white py-12 text-asphalt sm:py-16">
        <div className="container-shell grid gap-8 lg:grid-cols-2">
          <div>
            <SectionHeader
              title="What the Licensed Tester Checks"
              tone="light"
              copy="The tester checks relevant safety-related items against the applicable Victorian roadworthiness requirements."
            />
            <ul className="mt-5 space-y-3">
              {checked.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-black/15 p-4"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-black">
              Confirm the Arrangements First
            </h2>
            <ol className="mt-5 list-inside list-decimal space-y-4 text-sm leading-7 text-black/75">
              <li>
                Tell us your vehicle details and why an inspection is needed.
              </li>
              <li>
                Confirm the inspection location, timing and total charges with
                us.
              </li>
              <li>
                The independent licensed tester performs the inspection and
                determines the result.
              </li>
              <li>
                Any suitable repairs are quoted separately and require approval.
              </li>
            </ol>
            <p className="mt-5 text-sm leading-7 text-black/75">
              A roadworthy certificate is not a guarantee of a vehicle's ongoing
              reliability. Contact the tester about inspection findings or
              reinspection requirements.
            </p>
            <a
              href="https://transport.vic.gov.au/road-and-active-transport/registration-and-licensing/registration/roadworthy-certification/roadworthy-certificate"
              className="focus-ring mt-5 inline-block font-bold underline underline-offset-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Victorian roadworthy information
            </a>
          </div>
        </div>
      </section>
      <section className="bg-asphalt py-12 sm:py-16">
        <div className="container-shell">
          <SectionHeader title="Roadworthy Arrangement FAQs" />
          <div className="mt-7 grid gap-4 lg:grid-cols-2">
            {rwcService.faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-md border border-white/15 p-5"
              >
                <summary className="focus-ring cursor-pointer text-lg font-bold">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-7 text-white/75">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-5 text-sm font-bold">
            <Link
              className="focus-ring underline underline-offset-4"
              href="/brake-repairs"
            >
              Brake Repairs
            </Link>
            <Link
              className="focus-ring underline underline-offset-4"
              href="/services/suspension-steering"
            >
              Suspension Repairs
            </Link>
            <Link
              className="focus-ring underline underline-offset-4"
              href="/contact"
            >
              Contact G&T Motorsports
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
