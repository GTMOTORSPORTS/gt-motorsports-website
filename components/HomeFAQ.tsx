import { SectionHeader } from "@/components/SectionHeader";
const faqs = [
  {
    question: "Do I need an appointment, or can I walk in?",
    answer:
      "Appointments are recommended. Walk-ins are welcome subject to workshop availability and waiting times.",
  },
  {
    question: "What vehicles and services do you offer?",
    answer:
      "We service a wide range of makes and models, with routine servicing, diagnostics and mechanical repairs. Tell us your vehicle details so we can confirm the right service.",
  },
  {
    question: "Will you contact me before additional work?",
    answer:
      "Yes. We explain recommended work and seek approval before additional repairs proceed.",
  },
];
export function HomeFAQ() {
  return (
    <section id="home-faq" className="bg-white py-12 text-asphalt sm:py-16">
      <div className="container-shell">
        <SectionHeader
          eyebrow="Before you visit"
          title="Your Questions, Answered"
          tone="light"
        />
        <div className="mt-7 grid gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="rounded-md border border-black/15 bg-neutral-50 p-5"
            >
              <summary className="focus-ring cursor-pointer text-lg font-bold">
                {faq.question}
              </summary>
              <p className="mt-3 text-sm leading-7 text-black/70">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
