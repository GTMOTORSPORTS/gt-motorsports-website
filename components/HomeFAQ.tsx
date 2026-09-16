import { SectionHeader } from "@/components/SectionHeader";
import { site } from "@/lib/site";

const faqs = [
  {
    question: "Where is G&T Motorsports located?",
    answer:
      "G&T Motorsports is located at 47B Palladium Circuit, Clyde North VIC 3978.",
  },
  {
    question: "Do I need an appointment?",
    answer:
      "Appointments are recommended because they help the workshop plan your drop-off, inspection and communication around the work required.",
  },
  {
    question: "Do you accept walk-ins?",
    answer:
      "Walk-ins are welcome, but waiting times depend on the work required and current workshop availability. Booking ahead is recommended where possible.",
  },
  {
    question: "What makes and models do you service?",
    answer:
      "G&T Motorsports services all makes and models, including family vehicles, work vehicles, four-wheel drives and performance vehicles.",
  },
  {
    question: "Can you update a Mercedes-Benz Digital Service Record?",
    answer:
      "G&T Motorsports can update the Mercedes-Benz Digital Service Record for eligible vehicles after completing the required scheduled service. Please mention this when booking so compatibility can be checked.",
  },
  {
    question: "Will you contact me before additional repairs?",
    answer:
      "Yes. Additional repairs are discussed before work proceeds so you can make an informed decision.",
  },
];

export function HomeFAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="bg-white py-16 text-asphalt sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container-shell">
        <SectionHeader
          eyebrow="FAQ"
          title="Clyde North Mechanic FAQs"
          copy={`Helpful answers before visiting G&T Motorsports at ${site.address}.`}
          tone="light"
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {faqs.map((faq) => (
            <details
              className="group rounded-md border border-black/10 bg-neutral-50 p-5 open:border-brake"
              key={faq.question}
            >
              <summary className="focus-ring cursor-pointer list-none text-xl font-black text-asphalt">
                {faq.question}
              </summary>
              <p className="mt-4 text-sm leading-6 text-black/65">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
