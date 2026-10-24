import type { ServicePage } from "@/lib/service-pages";
export const rwcArrangement =
  "Roadworthy inspections are arranged through an independent licensed vehicle tester. Contact G&T Motorsports to confirm arrangements, availability and pricing.";
export const rwcService: ServicePage = {
  slug: "roadworthy-certificate",
  name: "RWC Inspection Arrangements",
  icon: "RWC",
  eyebrow: "RWC inspection arrangements",
  title: "Roadworthy Inspection Arrangements in Clyde North",
  shortDescription: rwcArrangement,
  introduction: rwcArrangement,
  metadataTitle:
    "Roadworthy Inspection Arrangements Clyde North | G&T Motorsports",
  metadataDescription:
    "G&T Motorsports arranges roadworthy inspections through an independent licensed vehicle tester. Contact our Clyde North workshop for arrangements and pricing.",
  trustPoints: [
    "Independent licensed tester",
    "Arrangements confirmed first",
    "Repairs quoted separately",
    "No guaranteed pass",
  ],
  symptomsIntro:
    "Contact us if you need to discuss an inspection for selling, transferring or re-registering an eligible vehicle, or another roadworthy requirement.",
  symptoms: [
    "Selling a vehicle",
    "Registration transfer",
    "Re-registration",
    "Roadworthy enquiries",
  ],
  includedItems: [
    "Inspection arrangements discussed",
    "Tester availability and pricing confirmed",
    "Separate quote for suitable repairs",
  ],
  specialNotice:
    "G&T Motorsports arranges the inspection; the independent licensed vehicle tester performs the roadworthy inspection and issues any certificate. Inspection fees, location and timing are confirmed before booking. Repairs are not automatically included and a pass is not guaranteed.",
  processSteps: [
    "Discuss your vehicle and requirement",
    "Confirm inspection arrangements",
    "Agree pricing and availability",
  ],
  benefits: [
    {
      title: "Clear arrangements",
      copy: "Confirm the inspection location, price and timing before booking.",
    },
  ],
  faqs: [
    {
      question: "Does G&T Motorsports perform the roadworthy inspection?",
      answer:
        "The roadworthy inspection is performed by an independent licensed vehicle tester. G&T Motorsports helps arrange it. The tester determines the outcome and issues any certificate.",
    },
    {
      question: "Where do I take my vehicle?",
      answer:
        "Contact G&T Motorsports before attending so the inspection location, drop-off arrangements and timing can be confirmed for your booking.",
    },
    {
      question: "How much does the inspection cost?",
      answer:
        "Ask us to confirm the inspection fee and any arrangement costs before booking. Pricing depends on the vehicle and agreed arrangements. Repairs are separately quoted.",
    },
    {
      question: "Can G&T Motorsports repair defects?",
      answer:
        "Suitable repairs can be assessed and quoted by G&T Motorsports. Additional repairs need approval and are separate from the licensed tester's inspection and any reinspection.",
    },
    {
      question: "Is a roadworthy inspection a complete mechanical inspection?",
      answer:
        "No. It checks the applicable roadworthiness requirements at the time of inspection. It does not guarantee ongoing reliability or replace a comprehensive mechanical or pre-purchase inspection.",
    },
    {
      question: "Can you guarantee a pass or same-day certificate?",
      answer:
        "No. The licensed tester decides the outcome after inspection. Availability, findings, approved repairs and reinspection requirements can affect timing.",
    },
  ],
  relatedServices: [
    { label: "Brake Repairs", href: "/brake-repairs" },
    { label: "Suspension Repairs", href: "/services/suspension-steering" },
  ],
  localAreaText:
    "Contact our Clyde North workshop to discuss roadworthy inspection arrangements for your vehicle.",
  ctaHeading: "Discuss Roadworthy Inspection Arrangements",
  ctaText: rwcArrangement,
};
