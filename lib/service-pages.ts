import { walnutService, walnutPath } from "@/lib/walnut-blasting";
import { mercedesDigitalServiceRecord } from "@/lib/digital-service-records";
import { site } from "@/lib/site";

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type RelatedService = {
  label: string;
  href: string;
};

export type ServicePage = {
  slug: string;
  name: string;
  icon: string;
  eyebrow: string;
  title: string;
  shortDescription: string;
  introduction: string;
  metadataTitle: string;
  metadataDescription: string;
  trustPoints: string[];
  sectionHeadings?: {
    intro?: string;
    checklist?: string;
    whyChoose?: string;
    faq?: string;
  };
  symptomsIntro: string;
  symptoms: string[];
  includedItems: string[];
  warningSigns?: string[];
  detailSections?: {
    title: string;
    copy: string;
    points?: string[];
  }[];
  processSteps: string[];
  benefits: { title: string; copy: string }[];
  faqs: ServiceFaq[];
  relatedServices: RelatedService[];
  localAreaText: string;
  ctaHeading: string;
  ctaText: string;
  primaryCtaLabel?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  specialNotice?: string;
  warrantySection?: {
    title: string;
    copy: string;
    points: string[];
  };
  digitalServiceRecordNotice?: string;
};

const allMakesTrust = [
  "Honest advice",
  "Clear communication",
  "Quality workmanship",
  "All makes and models",
];

const standardProcess = [
  "Consultation",
  "Vehicle Inspection",
  "Recommendation",
  "Quote Approval",
  "Professional Work",
  "Quality Inspection",
  "Road Test",
];

const standardBenefits = [
  {
    title: "Honest Advice",
    copy: "We explain what has been found and recommend only the work your vehicle genuinely needs.",
  },
  {
    title: "Clear Communication",
    copy: "You are kept informed about inspection results, repair options and likely next steps.",
  },
  {
    title: "Quality Workmanship",
    copy: "Servicing and repairs are completed carefully using suitable parts, fluids and equipment.",
  },
  {
    title: "Convenient Booking",
    copy: "Book online, call ahead or visit as a walk-in when workshop availability allows.",
  },
];

const localAreaText =
  "G&T Motorsports welcomes drivers from Clyde North, Clyde, Cranbourne, Berwick, Officer, Narre Warren, Hampton Park, Pakenham and nearby south-east Melbourne suburbs.";

const coreLinks = {
  general: { label: "General Car Servicing", href: "/services/general-car-servicing" },
  logbook: { label: "Logbook Servicing", href: "/logbook-servicing" },
  mercedes: { label: "Mercedes-Benz Service", href: "/mercedes-benz-service" },
  brakes: { label: "Brake Repairs", href: "/brake-repairs" },
  diagnostics: { label: "Engine Diagnostics", href: "/engine-diagnostics" },
  suspension: { label: "Suspension Repairs", href: "/services/suspension-steering" },
  cooling: { label: "Cooling System Repairs", href: "/services/cooling-system-repairs" },
  battery: { label: "Battery Services", href: "/services/battery-charging-systems" },
  engine: { label: "Engine Repairs", href: "/services/engine-repairs" },
  rwc: { label: "Roadworthy Certificate Inspections", href: "/roadworthy-certificate" },
};

const primaryServicePaths: Record<string, string> = {
  "walnut-blasting": walnutPath,
  "logbook-servicing": "/logbook-servicing",
  "mercedes-benz-servicing": "/mercedes-benz-service",
  "brake-repairs": "/brake-repairs",
  "vehicle-diagnostics": "/engine-diagnostics",
  "roadworthy-certificate": "/roadworthy-certificate",
};

export const servicePages: ServicePage[] = [
  walnutService,
  {
    slug: "general-car-servicing",
    name: "General Car Servicing",
    icon: "GS",
    eyebrow: "General servicing Clyde North",
    title: "General Car Servicing in Clyde North",
    shortDescription:
      "Routine vehicle servicing and maintenance for all makes and models, with clear advice before additional work proceeds.",
    introduction:
      "G&T Motorsports provides routine vehicle servicing and maintenance in Clyde North for a wide range of makes and models. Each vehicle is inspected based on its condition and service needs, and customers are advised before any additional repairs or maintenance proceed.",
    metadataTitle:
      "General Car Servicing in Clyde North | G&T Motorsports",
    metadataDescription:
      "Book car service in Clyde North with G&T Motorsports. General car servicing, vehicle maintenance and inspections for all makes and models.",
    trustPoints: allMakesTrust,
    sectionHeadings: {
      intro: "General Car Servicing",
      checklist: "What's Included in a Car Service?",
      whyChoose: "Why Choose G&T Motorsports for Car Servicing?",
      faq: "General Car Servicing FAQs",
    },
    symptomsIntro:
      "A general car service is a practical choice for routine maintenance, pre-trip peace of mind or when your vehicle is due for basic care. Service requirements vary depending on vehicle make, model, age, kilometres, condition and manufacturer maintenance schedule.",
    symptoms: [
      "Your vehicle is due by time or kilometres",
      "You need routine oil and filter servicing",
      "You want brakes, tyres, battery or lights checked",
      "You want a general safety and condition check",
      "The car has not been inspected recently",
      "You want developing issues explained early",
    ],
    includedItems: [
      "Engine oil and oil filter where applicable",
      "Fluid level and condition checks",
      "Brake observations",
      "Tyre condition and pressure checks",
      "Battery condition checks where relevant",
      "Lights and visible safety checks",
      "Cooling-system observations",
      "Belts and hoses where accessible",
      "Suspension and steering observations",
      "General condition report with practical advice",
    ],
    detailSections: [
      {
        title: "Why Regular Servicing Matters",
        copy:
          "Regular vehicle servicing in Clyde North helps keep maintenance up to date, supports everyday reliability and gives the workshop a chance to identify developing issues before they become more inconvenient. It can also help with safety checks, fluid condition, wear items and general vehicle health.",
        points: [
          "Routine maintenance planning",
          "Developing problems identified early",
          "Fluid and wear-item checks",
          "Useful advice for everyday reliability",
        ],
      },
      {
        title: "Service Based on Your Vehicle",
        copy:
          "Not every car service includes the same items. The right service depends on the vehicle make and model, age, kilometres, condition, driving use and relevant manufacturer maintenance schedule. G&T Motorsports explains what is suitable for your vehicle before extra work proceeds.",
        points: [
          "All makes and models serviced",
          "Vehicle-specific maintenance advice",
          "Manufacturer schedule considered where applicable",
          "No one-size-fits-all servicing claim",
        ],
      },
      {
        title: "Problems Found During Servicing",
        copy:
          "A general car service may uncover brake wear, cooling-system concerns, weak batteries, warning lights, suspension or steering observations, leaks, worn belts or hoses, tyre issues or other maintenance needs. If additional repairs are identified, you are advised before the work proceeds.",
        points: [
          "Clear findings explained",
          "Quote before additional work",
          "Related repairs discussed first",
          "Practical maintenance priorities",
        ],
      },
    ],
    processSteps: standardProcess,
    benefits: standardBenefits,
    faqs: [
      {
        question: "How often should a car be serviced?",
        answer:
          "Service intervals vary by vehicle, kilometres, age, driving conditions and manufacturer maintenance schedule. Many vehicles need servicing by time or distance, so check your service information or contact the workshop for guidance.",
      },
      {
        question: "What is the difference between general servicing and logbook servicing?",
        answer:
          "General servicing covers routine maintenance and condition checks. Logbook servicing follows the relevant scheduled service requirements for a specific vehicle, based on the manufacturer's maintenance schedule where applicable.",
      },
      {
        question: "Do you service different makes and models?",
        answer:
          "Yes. G&T Motorsports services a wide range of makes and models, including family vehicles, work vehicles, four-wheel drives, European vehicles and everyday passenger cars.",
      },
      {
        question: "What happens if additional repairs are found?",
        answer:
          "If additional repairs or maintenance are identified, G&T Motorsports will explain the findings and discuss the recommended next step before additional work proceeds.",
      },
      {
        question: "Can warning lights be investigated during servicing?",
        answer:
          "Warning lights can be noted during servicing, and diagnostic testing may be recommended if the vehicle needs further fault-finding. A fault code or warning light may require a separate diagnostic process.",
      },
      {
        question: "Is an appointment recommended for a car service?",
        answer:
          "Appointments are recommended so the workshop can plan time for your vehicle. Walk-ins are welcome when availability allows, but waiting times depend on workload and the work required.",
      },
      {
        question: "Can servicing help identify developing problems?",
        answer:
          "Yes. Routine servicing can help identify wear, leaks, fluid concerns, battery issues, brake wear or other developing problems, although it is not a guarantee that every future fault will be found.",
      },
    ],
    relatedServices: [
      coreLinks.logbook,
      coreLinks.diagnostics,
      coreLinks.brakes,
      coreLinks.cooling,
      coreLinks.battery,
      { label: "Air Conditioning Service", href: "/services/air-conditioning" },
      coreLinks.mercedes,
    ],
    localAreaText,
    ctaHeading: "Book Your Car Service",
    ctaText:
      "Keep your vehicle maintained with routine servicing, condition checks and clear advice from G&T Motorsports.",
    primaryCtaLabel: "Book a Service",
    secondaryCtaLabel: "Get a Quote",
    secondaryCtaHref: "/contact",
  },
  {
    slug: "logbook-servicing",
    name: "Logbook Servicing",
    icon: "LB",
    eyebrow: "Logbook servicing Clyde North",
    title: "Logbook Servicing in Clyde North",
    shortDescription:
      "Scheduled servicing for all makes and models, including eligible Mercedes-Benz DSR updates.",
    introduction:
      "G&T Motorsports provides logbook servicing in Clyde North for all makes and models. Services are completed according to the manufacturer's recommended schedule using quality parts, oils and fluids based on manufacturer specifications, with a full vehicle inspection and clear explanation of anything requiring attention.",
    metadataTitle: "Logbook Service Clyde North | G&T Motorsports",
    metadataDescription:
      "Professional logbook servicing in Clyde North for all makes and models. Maintain your new-car warranty with qualified servicing at G&T Motorsports. Book today.",
    trustPoints: [
      "All makes and models",
      "Manufacturer service schedules",
      "Quality oils and parts",
      "Eligible Mercedes-Benz DSR updates",
    ],
    sectionHeadings: {
      intro: "What Is a Logbook Service?",
      checklist: "What Is Included?",
      whyChoose: "Why Choose G&T Motorsports?",
      faq: "Frequently Asked Questions",
    },
    symptomsIntro:
      "Logbook servicing is suited to vehicles due for scheduled maintenance based on age, kilometres or manufacturer service requirements.",
    symptoms: [
      "Your service book shows a scheduled service is due",
      "The vehicle has reached a time or kilometre interval",
      "You want accurate service-history records",
      "You want developing faults checked early",
      "You need suitable oils, fluids and filters used",
    ],
    includedItems: [
      "Engine oil and filter replacement",
      "Fluid level and condition checks",
      "Brake, tyre, steering and suspension inspection",
      "Battery and charging-system check",
      "Cooling-system inspection",
      "Lights, wipers and general safety checks",
      "Diagnostic scan where appropriate",
      "Service-book update where applicable",
      "Clear report of recommended repairs",
    ],
    processSteps: standardProcess,
    benefits: standardBenefits,
    warrantySection: {
      title: "Will My New-Car Warranty Be Protected?",
      copy: "In Australia, customers can have scheduled logbook servicing completed by an independent workshop without automatically having to return to a dealership, provided the service is completed according to the relevant manufacturer schedule using suitable parts, oils and fluids. G&T Motorsports follows the applicable service requirements and explains any additional work before it proceeds.",
      points: [
        "Servicing completed according to the manufacturer's recommended schedule",
        "Quality parts, oils and fluids selected based on manufacturer specifications",
        "Clear records of completed service work",
        "Additional repairs discussed before work proceeds",
      ],
    },
    digitalServiceRecordNotice:
      "Mercedes-Benz customers can have eligible service records updated online through the Mercedes-Benz Digital Service Book system after the required scheduled service is completed. Mercedes-Benz digital service access is currently available at G&T Motorsports, while access for other manufacturer online service-record systems is being worked on. G&T Motorsports does not claim online service-record access for other brands at this time, and does not claim Mercedes-Benz affiliation, certification or endorsement.",
    faqs: [
      {
        question: "What is a logbook service?",
        answer:
          "A logbook service is scheduled maintenance completed according to the relevant manufacturer service schedule. It usually includes checks, replacements and inspections based on the vehicle's age, kilometres and service requirements.",
      },
      {
        question: "Can I maintain my new-car warranty without going back to the dealership?",
        answer:
          "Yes, customers can generally use an independent workshop for scheduled logbook servicing when the work is completed according to the relevant manufacturer schedule using suitable parts, oils and fluids. G&T Motorsports can discuss what is due for your vehicle before work begins.",
      },
      {
        question: "How often should I book a logbook service?",
        answer:
          "Service intervals vary by vehicle and may depend on kilometres travelled, time since the last service, driving conditions and the manufacturer schedule.",
      },
      {
        question: "What is included in logbook servicing?",
        answer:
          "The exact items depend on the vehicle and service schedule, but logbook servicing can include oil and filter replacement, fluid checks, brake and tyre checks, steering and suspension inspection, battery and cooling-system checks, diagnostic scanning where appropriate and a clear report of recommended repairs.",
      },
      {
        question: "What happens if extra repairs are found?",
        answer:
          "If additional work is recommended, the team will explain what has been found and discuss the next step before extra repairs proceed.",
      },
      {
        question: "Do you service all makes and models?",
        answer:
          "Yes. G&T Motorsports services all makes and models, including family vehicles, work vehicles, four-wheel drives and performance vehicles.",
      },
      {
        question: "Can you update my Mercedes-Benz online service history?",
        answer:
          "Yes. G&T Motorsports can update eligible Mercedes-Benz service records online through the Mercedes-Benz Digital Service Book system after completing the required scheduled service. Access for other manufacturer online service-record systems is being worked on, but is not claimed at this time.",
      },
    ],
    relatedServices: [coreLinks.general, coreLinks.mercedes, coreLinks.brakes],
    localAreaText,
    ctaHeading: "Book Your Next Logbook Service",
    ctaText:
      "Keep your vehicle maintained, reliable and ready for the road. Book online or call G&T Motorsports today.",
  },
  {
    slug: "mercedes-benz-servicing",
    name: "Mercedes-Benz Service",
    icon: "MB",
    eyebrow: "Independent Mercedes-Benz servicing",
    title: "Mercedes-Benz Service in Clyde North",
    shortDescription:
      "Independent servicing and repairs with DSR updates for eligible vehicles after scheduled servicing.",
    introduction:
      "G&T Motorsports provides scheduled servicing, maintenance and mechanical repairs for Mercedes-Benz vehicles from our Clyde North workshop. Eligible Mercedes-Benz Digital Service Records can be updated after the required scheduled service is completed.",
    metadataTitle: "Mercedes-Benz Service Clyde North | G&T Motorsports",
    metadataDescription:
      "Book Mercedes-Benz servicing in Clyde North with G&T Motorsports. Independent workshop servicing, mechanical repairs and eligible Mercedes-Benz Digital Service Record updates.",
    trustPoints: [
      "Independent workshop",
      mercedesDigitalServiceRecord.label,
      "Clear advice",
      "Quality workmanship",
    ],
    symptomsIntro:
      "Book when your Mercedes-Benz vehicle is due for scheduled servicing, needs mechanical inspection or has a concern you want assessed.",
    symptoms: [
      "Scheduled service due by time or kilometres",
      "Brake, cooling, battery or suspension concern",
      "Warning light or drivability issue",
      "You need eligible Digital Service Record updating after service",
      "You want clear advice from a local independent workshop",
    ],
    includedItems: [
      "Scheduled servicing",
      "Oil and filter servicing",
      "Brake inspections and repairs",
      "Cooling-system checks",
      "Battery and charging-system checks",
      "Suspension and steering inspections",
      "Diagnostic scanning where appropriate",
      "General mechanical repairs",
      "Digital Service Record updates for eligible vehicles",
    ],
    processSteps: standardProcess,
    benefits: [
      ...standardBenefits.slice(0, 3),
      {
        title: "Digital Service Record Capability",
        copy: "Eligible Mercedes-Benz Digital Service Records can be updated after the required scheduled service is completed.",
      },
    ],
    specialNotice:
      "G&T Motorsports is an independent automotive workshop and is not affiliated with, endorsed by or certified by Mercedes-Benz.",
    digitalServiceRecordNotice:
      "Available only for eligible Mercedes-Benz vehicles after the required scheduled service is completed. Please mention this when booking so compatibility can be confirmed.",
    faqs: [
      {
        question: "Can you update my Mercedes-Benz Digital Service Record?",
        answer:
          "Yes. G&T Motorsports can update the Mercedes-Benz Digital Service Record for eligible vehicles after completing the required scheduled service. Please mention this when booking so compatibility can be confirmed before your appointment.",
      },
      {
        question: "Are you affiliated with Mercedes-Benz?",
        answer:
          "No. G&T Motorsports is an independent automotive workshop and is not affiliated with, endorsed by or certified by Mercedes-Benz.",
      },
      {
        question: "Do you service all Mercedes-Benz models?",
        answer:
          "G&T Motorsports services Mercedes-Benz vehicles as part of its broader all makes and models servicing. Contact the workshop with your model and requirements so the team can confirm the best next step.",
      },
      {
        question: "Can I book online?",
        answer:
          "Yes. You can book online for vehicle drop-off or an initial assessment, or call the workshop if you prefer to discuss your vehicle first.",
      },
      {
        question: "Do you accept walk-ins?",
        answer:
          "Walk-ins are welcome, but wait times depend on the work required and current workshop availability. Booking ahead is recommended.",
      },
      {
        question: "What happens if additional repairs are required?",
        answer:
          "If additional repairs are recommended, G&T Motorsports will explain the findings and discuss the work before it proceeds.",
      },
    ],
    relatedServices: [coreLinks.logbook, coreLinks.general, coreLinks.diagnostics],
    localAreaText:
      "G&T Motorsports welcomes Mercedes-Benz servicing enquiries from Clyde North, Cranbourne, Berwick, Officer, Narre Warren, Pakenham and nearby south-east Melbourne suburbs.",
    ctaHeading: "Book Your Mercedes-Benz Service",
    ctaText:
      "Book online or call G&T Motorsports to arrange servicing for your Mercedes-Benz vehicle.",
  },
  {
    slug: "brake-repairs",
    name: "Brake Repairs",
    icon: "BR",
    eyebrow: "Brake repairs Clyde North",
    title: "Brake Repairs and Inspections in Clyde North",
    shortDescription:
      "Brake inspections, pads, rotors, fluid checks and careful diagnosis before quoting.",
    introduction:
      "Brake concerns should be inspected promptly by a professional. G&T Motorsports checks the braking system carefully before recommending repairs, so noisy brakes, vibration, warning lights or reduced braking performance can be assessed properly.",
    metadataTitle: "Brake Repairs Clyde North | G&T Motorsports",
    metadataDescription:
      "Book brake inspections and repairs in Clyde North, including brake pads, rotors and hydraulic-system checks for all makes and models.",
    trustPoints: allMakesTrust,
    symptomsIntro:
      "Brake symptoms can have several causes, so inspection is important before replacing parts.",
    symptoms: [
      "Brake noise or grinding",
      "Vibration through the pedal or steering wheel",
      "Brake warning light",
      "Longer stopping distance",
      "Soft or spongy pedal feel",
    ],
    warningSigns: [
      "Squealing or grinding",
      "Steering-wheel or pedal vibration",
      "Soft or spongy brake pedal",
      "Longer stopping distance",
      "Pulling while braking",
      "Brake warning light",
    ],
    includedItems: [
      "Brake-pad inspection and replacement where required",
      "Brake rotor inspection",
      "Brake-fluid condition check",
      "Caliper and hydraulic-component checks",
      "Brake noise and vibration assessment",
      "Inspection before quoting repairs",
    ],
    processSteps: standardProcess,
    benefits: standardBenefits,
    faqs: [
      { question: "How do I know if my brakes need replacing?", answer: "Noise, vibration, warning lights, reduced braking performance or a soft pedal can indicate the brakes need inspection. These symptoms do not prove one specific failure, so a proper check is recommended." },
      { question: "Why are my brakes making noise?", answer: "Brake noise can be caused by worn pads, rotor condition, contamination, hardware issues or other factors. The workshop can inspect the cause before recommending repairs." },
      { question: "Can you inspect brakes before replacing parts?", answer: "Yes. G&T Motorsports inspects the braking system before quoting replacement parts or repairs." },
      { question: "How long does a brake repair take?", answer: "Timing depends on the inspection findings, parts required and workshop workload. The team will advise expected timing once the vehicle has been assessed." },
      { question: "Do you replace brake rotors as well as pads?", answer: "Brake pads and rotors can be inspected together. Rotors are replaced or machined only when the inspection shows that work is required and approved." },
      { question: "Can I drive with a brake warning light?", answer: "A brake warning light should be treated seriously. Arrange prompt professional inspection and avoid driving if braking performance feels unsafe." },
    ],
    relatedServices: [coreLinks.general, coreLinks.suspension, coreLinks.diagnostics],
    localAreaText,
    ctaHeading: "Book a Brake Inspection",
    ctaText:
      "If your brakes feel different, noisy or uneven, book a professional inspection before the issue develops further.",
  },
  {
    slug: "vehicle-diagnostics",
    name: "Engine Diagnostics",
    icon: "DX",
    eyebrow: "Diagnostics Clyde North",
    title: "Engine Diagnostics and Fault Finding in Clyde North",
    shortDescription:
      "Warning lights and drivability concerns tested beyond simply reading fault codes.",
    introduction:
      "Modern vehicle faults need careful testing. Fault codes can guide the diagnostic process, but they do not always identify the failed component by themselves, so G&T Motorsports combines scan-tool information with practical checks and clear explanation.",
    metadataTitle: "Engine Diagnostics Clyde North | G&T Motorsports",
    metadataDescription:
      "Professional vehicle diagnostics and fault finding in Clyde North for engine, ABS, airbag, charging and electrical warning issues.",
    trustPoints: allMakesTrust,
    symptomsIntro:
      "Diagnostics can help when a warning light appears, the vehicle starts poorly or it does not drive as it should.",
    symptoms: [
      "Engine warning light",
      "ABS or airbag warning",
      "Starting problems",
      "Rough running or hesitation",
      "Electrical or charging faults",
    ],
    warningSigns: [
      "Warning lights on the dashboard",
      "Intermittent starting",
      "Rough idle or stalling",
      "Reduced power",
      "Unusual electrical behaviour",
    ],
    includedItems: [
      "Scan-tool diagnostics",
      "Fault-code interpretation",
      "Electrical and charging checks where relevant",
      "Testing beyond simply reading codes",
      "Clear explanation before repairs proceed",
    ],
    processSteps: standardProcess,
    benefits: standardBenefits,
    faqs: [
      { question: "What does a diagnostic scan show?", answer: "A diagnostic scan can show stored or current fault codes and system information. It helps guide testing but does not always prove which component has failed." },
      { question: "Does a fault code tell you exactly what is broken?", answer: "Not always. Fault codes point the diagnostic process in the right direction, but further testing is often needed before parts are replaced." },
      { question: "Can you diagnose engine warning lights?", answer: "Yes. G&T Motorsports can inspect engine warning lights and explain the recommended next step after testing." },
      { question: "Can you diagnose ABS and airbag lights?", answer: "ABS and airbag warnings can be scanned and assessed. The exact repair depends on the fault and inspection findings." },
      { question: "How long does fault finding take?", answer: "Fault-finding time varies with the issue. Some faults are straightforward, while intermittent or complex faults may require staged testing." },
      { question: "Will you repair the fault without approval?", answer: "No. Findings and repair recommendations are discussed before additional work proceeds." },
    ],
    relatedServices: [coreLinks.engine, coreLinks.battery, coreLinks.general],
    localAreaText,
    ctaHeading: "Book Diagnostic Inspection",
    ctaText:
      "Get warning lights and drivability issues checked with a clear diagnostic process.",
  },
  {
    slug: "suspension-steering",
    name: "Suspension Repairs",
    icon: "SS",
    eyebrow: "Suspension and steering Clyde North",
    title: "Suspension Repairs in Clyde North",
    shortDescription:
      "Suspension inspection, diagnosis and repair support for knocking, vibration, poor handling, worn shocks and uneven tyre wear.",
    introduction:
      "G&T Motorsports inspects, diagnoses and repairs suspension and steering-related faults for a wide range of vehicles. Suspension noises, poor handling, uneven tyre wear and steering concerns can have multiple causes, so the vehicle is checked before parts are replaced.",
    metadataTitle:
      "Suspension Repairs Clyde North | Shock Absorbers | G&T Motorsports",
    metadataDescription:
      "Book suspension repairs in Clyde North for suspension service, shock absorber replacement, suspension inspections, steering concerns and handling issues.",
    trustPoints: allMakesTrust,
    sectionHeadings: {
      intro: "Signs Your Suspension Needs Attention",
      checklist: "Suspension Inspections & Diagnosis",
      whyChoose: "Why Choose G&T Motorsports for Suspension Repairs",
      faq: "Suspension Repairs FAQs",
    },
    symptomsIntro:
      "Book a suspension inspection in Clyde North if the vehicle feels loose, noisy, unstable, uneven or is wearing tyres unevenly. Handling problems and suspension noises should be inspected before parts are replaced.",
    symptoms: [
      "Knocking or clunking noises",
      "Uneven tyre wear",
      "Excessive bouncing",
      "Poor handling",
      "Vehicle pulling to one side",
      "Steering looseness",
      "Vibration",
      "Uneven ride height",
    ],
    warningSigns: [
      "Knocking or clunking noises",
      "Uneven tyre wear",
      "Excessive bouncing",
      "Poor handling",
      "Vehicle pulling to one side",
      "Steering looseness",
      "Vibration",
      "Uneven ride height",
    ],
    includedItems: [
      "Suspension noise inspection",
      "Shock absorber and strut checks",
      "Bush, ball joint and control arm inspection",
      "Mount, link and steering component checks",
      "Wheel-bearing checks where relevant",
      "Tyre-wear and handling observations",
    ],
    detailSections: [
      {
        title: "Shock Absorbers & Struts",
        copy:
          "Shock absorber replacement in Clyde North may be recommended when worn shocks or struts affect ride control, tyre contact, braking stability or comfort. The vehicle is inspected first so replacement advice is based on the actual condition and symptoms.",
        points: [
          "Shock absorber condition checks",
          "Strut and mount inspection",
          "Excessive bounce assessment",
          "Ride-control concerns explained clearly",
        ],
      },
      {
        title: "Bushes, Ball Joints & Control Arms",
        copy:
          "Knocking, clunking, looseness or uneven tyre wear can involve bushes, ball joints, control arms, links, mounts or related hardware. These components are checked before repair recommendations are made.",
        points: [
          "Bush and joint inspection",
          "Control arm checks",
          "Suspension link assessment",
          "No unnecessary parts replacement",
        ],
      },
      {
        title: "Steering & Suspension Components",
        copy:
          "Steering and suspension symptoms often overlap. Pulling, vibration, vague steering or poor handling may involve tyres, alignment, brakes, steering components or suspension wear, so staged diagnosis helps identify the most appropriate repair path.",
        points: [
          "Steering component checks",
          "Handling and vibration assessment",
          "Related brake or tyre concerns considered",
          "Quote before approved repairs",
        ],
      },
    ],
    processSteps: standardProcess,
    benefits: standardBenefits,
    faqs: [
      {
        question: "How can I tell if my shocks are worn?",
        answer:
          "Possible signs include excessive bouncing, poor ride control, uneven tyre wear, nose-diving under braking or fluid leakage from a shock absorber. Inspection is needed before replacement is recommended.",
      },
      {
        question: "Are suspension noises dangerous?",
        answer:
          "Some suspension noises may be minor, while others can indicate worn or loose components that affect vehicle control. Arrange an inspection, especially if handling has changed or the noise is getting worse.",
      },
      {
        question: "Can worn suspension cause uneven tyre wear?",
        answer:
          "Yes. Worn suspension or steering components can contribute to uneven tyre wear, although tyres, alignment, brakes and driving conditions can also be involved.",
      },
      {
        question: "Do shocks and struts need replacing in pairs?",
        answer:
          "Often shocks or struts are recommended in axle pairs for balanced performance, but the correct advice depends on the vehicle, condition and inspection findings.",
      },
      {
        question: "What causes clunking over bumps?",
        answer:
          "Clunking can come from several suspension or steering components, including bushes, ball joints, control arms, links, mounts, struts or related hardware. Inspection is needed to identify the cause.",
      },
      {
        question: "Will I need a wheel alignment after suspension repairs?",
        answer:
          "A wheel alignment may be required after some suspension or steering repairs, depending on the components replaced and the vehicle setup. The workshop will advise based on the repair.",
      },
    ],
    relatedServices: [
      coreLinks.brakes,
      coreLinks.rwc,
      coreLinks.general,
      coreLinks.diagnostics,
    ],
    localAreaText,
    ctaHeading: "Book a Suspension Inspection",
    ctaText:
      "Have knocking, vibration, pulling, uneven tyre wear or poor handling inspected by G&T Motorsports before replacing parts unnecessarily.",
    primaryCtaLabel: "Book Suspension Inspection",
    secondaryCtaLabel: "Get a Quote",
    secondaryCtaHref: "/contact",
  },
  {
    slug: "cooling-system-repairs",
    name: "Cooling System Repairs",
    icon: "CS",
    eyebrow: "Cooling system repairs Clyde North",
    title: "Cooling System Repairs in Clyde North",
    shortDescription:
      "Cooling-system diagnosis and repairs for overheating, coolant leaks, radiators, hoses, water pumps, thermostats and cooling fans.",
    introduction:
      "G&T Motorsports diagnoses and repairs cooling-system faults that can cause overheating, coolant loss and poor engine temperature control. From radiator repair and coolant leak repair to overheating car repair in Clyde North, the cause is checked before parts are replaced.",
    metadataTitle:
      "Cooling System Repairs Clyde North | Radiator & Coolant Leaks | G&T Motorsports",
    metadataDescription:
      "Book cooling system repairs in Clyde North for radiator repair, coolant leak repair, overheating diagnosis, hoses, thermostats, water pumps and cooling fans.",
    trustPoints: allMakesTrust,
    sectionHeadings: {
      intro: "Signs of a Cooling System Problem",
      checklist: "Coolant Leaks & Pressure Testing",
      whyChoose: "Why Choose G&T Motorsports for Cooling System Repairs",
      faq: "Cooling System Repairs FAQs",
    },
    symptomsIntro:
      "If a vehicle is overheating, stop safely and avoid continuing to drive where doing so may cause damage or create a safety risk. Cooling faults should be diagnosed promptly because several components can cause similar symptoms.",
    symptoms: [
      "Engine overheating",
      "Coolant warning messages",
      "Coolant loss",
      "Visible leaks",
      "Sweet coolant smell",
      "Heater not working correctly",
      "Cooling fans not operating",
      "Temperature gauge running high",
    ],
    warningSigns: [
      "Engine overheating",
      "Coolant warning messages",
      "Coolant loss",
      "Visible leaks",
      "Sweet coolant smell",
      "Heater not working correctly",
      "Cooling fans not operating",
      "Temperature gauge running high",
    ],
    includedItems: [
      "Visual leak inspection",
      "Cooling-system pressure testing where appropriate",
      "Coolant level and condition checks",
      "Radiator and hose inspection",
      "Thermostat assessment",
      "Water pump and cooling fan checks",
    ],
    detailSections: [
      {
        title: "Radiators, Hoses & Thermostats",
        copy:
          "Radiator repair in Clyde North may involve checking the radiator core, tanks, cap, hoses, clamps and related connections. Thermostat faults can also affect warm-up and temperature control, so the cooling system is inspected before replacement parts are recommended.",
        points: [
          "Radiator condition checks",
          "Upper and lower hose inspection",
          "Thermostat fault assessment",
          "Coolant cap and connection checks",
        ],
      },
      {
        title: "Water Pumps & Cooling Fans",
        copy:
          "Water pumps and cooling fans help move coolant and control temperature, especially in traffic. If the vehicle overheats, loses coolant or the fans do not operate correctly, further testing may be required before repairs proceed.",
        points: [
          "Water pump leak and operation checks",
          "Cooling fan operation checks",
          "Electrical checks where required",
          "Advice before parts are replaced",
        ],
      },
      {
        title: "Overheating Diagnosis",
        copy:
          "Overheating can come from coolant leaks, blocked or damaged radiators, fan faults, thermostat problems, water pump concerns, coolant condition or other engine-related issues. G&T Motorsports uses a staged diagnostic approach and explains findings before repair work proceeds.",
        points: [
          "Overheating car repair in Clyde North",
          "Coolant leak repair investigation",
          "Temperature-control checks",
          "Clear quote before approved repairs",
        ],
      },
    ],
    processSteps: standardProcess,
    benefits: standardBenefits,
    faqs: [
      {
        question: "Is it safe to drive an overheating vehicle?",
        answer:
          "No. If the temperature gauge is high, steam appears or a coolant warning message is showing, stop safely and contact the workshop before travelling. Continuing to drive an overheating vehicle can cause further damage or create a safety risk.",
      },
      {
        question: "Why do my coolant levels keep dropping?",
        answer:
          "Coolant loss may be caused by external leaks, radiator or hose issues, water pump leaks, cap faults or other cooling-system concerns. The cause should be inspected before parts are replaced.",
      },
      {
        question: "Can a radiator leak be repaired?",
        answer:
          "It depends on the radiator type, leak location and condition. Some issues may be repairable, while others may require replacement. G&T Motorsports will explain the findings before repair work proceeds.",
      },
      {
        question: "How often should coolant be replaced?",
        answer:
          "Coolant replacement intervals vary by vehicle and manufacturer schedule. Coolant condition, age and vehicle requirements should be checked during servicing or when cooling symptoms appear.",
      },
      {
        question: "What causes a car to overheat?",
        answer:
          "Overheating can be caused by coolant leaks, radiator problems, thermostat faults, water pump concerns, cooling fan faults, coolant condition or other engine-related issues. Proper diagnosis is needed before conclusions are made.",
      },
      {
        question: "Can a water pump or thermostat cause overheating?",
        answer:
          "Yes. A faulty water pump or thermostat can affect coolant flow and temperature control. Testing may be needed to confirm the fault before parts are replaced.",
      },
    ],
    relatedServices: [
      coreLinks.general,
      coreLinks.diagnostics,
      coreLinks.battery,
      coreLinks.mercedes,
    ],
    localAreaText,
    ctaHeading: "Book a Cooling System Inspection",
    ctaText:
      "Do not ignore overheating, coolant loss or temperature warning messages. Arrange a cooling-system inspection with G&T Motorsports before the issue causes further damage.",
    primaryCtaLabel: "Book Cooling System Inspection",
    secondaryCtaLabel: "Get a Quote",
    secondaryCtaHref: "/contact",
  },
  {
    slug: "battery-charging-systems",
    name: "Battery Services",
    icon: "BT",
    eyebrow: "Battery and charging Clyde North",
    title: "Car Battery Replacement in Clyde North",
    shortDescription:
      "Battery testing, car battery replacement advice, charging-system checks and starting-system diagnosis.",
    introduction:
      "G&T Motorsports can test vehicle batteries and charging systems, diagnose starting and battery-related problems, and replace batteries where required. A flat or weak battery does not always mean the battery itself is faulty, so charging-system problems, parasitic electrical drains, starter faults and other electrical issues should be considered before replacement.",
    metadataTitle:
      "Car Battery Replacement Clyde North | Battery Testing | G&T Motorsports",
    metadataDescription:
      "Book car battery replacement in Clyde North, battery testing, car battery service, charging-system checks and starting-problem diagnosis at G&T Motorsports.",
    trustPoints: allMakesTrust,
    sectionHeadings: {
      intro: "Signs Your Car Battery May Need Attention",
      checklist: "Battery Testing & Diagnosis",
      whyChoose: "Why Choose G&T Motorsports for Battery Services",
      faq: "Car Battery Replacement FAQs",
    },
    symptomsIntro:
      "Battery and charging checks are useful when the vehicle is slow to start, will not start, shows warning lights or repeatedly goes flat. Similar symptoms can come from the battery, alternator, starter motor, wiring, terminals or other electrical concerns.",
    symptoms: [
      "Slow engine cranking",
      "Vehicle not starting",
      "Clicking when starting",
      "Battery warning light",
      "Electrical systems behaving unusually",
      "Repeated flat battery",
      "Stop/start system issues",
    ],
    warningSigns: [
      "Slow engine cranking",
      "Vehicle not starting",
      "Clicking when starting",
      "Battery warning light",
      "Electrical systems behaving unusually",
      "Repeated flat battery",
      "Stop/start system issues",
    ],
    includedItems: [
      "Battery testing",
      "Battery condition assessment",
      "Alternator and charging-system checks",
      "Starting-system diagnosis where applicable",
      "Terminal and connection inspection",
      "Electrical drain concerns discussed where relevant",
      "Warning light assessment where relevant",
    ],
    detailSections: [
      {
        title: "Car Battery Replacement",
        copy:
          "Car battery replacement in Clyde North can be arranged when testing shows the battery is weak or has failed and the correct replacement battery is available. G&T Motorsports checks the concern first so replacement is recommended only where appropriate.",
        points: [
          "Battery condition testing",
          "Replacement advice where required",
          "Correct battery type discussed",
          "No unnecessary replacement advice",
        ],
      },
      {
        title: "Starting & Charging System Checks",
        copy:
          "Car starting problems in Clyde North may be caused by a weak battery, alternator or charging-system fault, poor connections, starter-system concerns, parasitic electrical drain or other electrical issues. Testing helps identify the most likely next step.",
        points: [
          "Alternator and charging checks",
          "Starter-system diagnosis",
          "Terminal and cable inspection",
          "Repeated flat-battery investigation",
        ],
      },
      {
        title: "Modern Vehicle Battery Systems",
        copy:
          "Some modern vehicles may require battery registration, reset or coding after battery replacement depending on the make, model and battery-management system. Not every vehicle requires coding, so the correct process depends on the vehicle.",
        points: [
          "Battery-management system awareness",
          "Registration or reset where applicable",
          "Vehicle-specific advice",
          "Clear explanation before work proceeds",
        ],
      },
    ],
    processSteps: standardProcess,
    benefits: standardBenefits,
    faqs: [
      {
        question: "How long do car batteries typically last?",
        answer:
          "Battery life varies by vehicle, battery type, driving habits, climate, electrical load and charging-system condition. Testing is the best way to check battery health instead of relying on age alone.",
      },
      {
        question: "What are signs of a failing battery?",
        answer:
          "Common signs include slow cranking, clicking when trying to start, warning lights, repeated flat batteries, electrical systems behaving unusually or stop/start system concerns.",
      },
      {
        question: "Does a flat battery always need replacement?",
        answer:
          "No. A flat battery may be caused by charging-system issues, parasitic electrical drains, poor connections, starter faults or another electrical concern. Testing helps confirm whether replacement is required.",
      },
      {
        question: "Can the alternator cause a flat battery?",
        answer:
          "Yes. If the alternator or charging system is not working correctly, the battery may not recharge properly while driving. Charging-system checks can help identify this.",
      },
      {
        question: "Do some vehicles require battery registration or coding?",
        answer:
          "Yes. Some vehicles may require battery registration, reset or coding after replacement depending on the make, model and battery-management system. Not every vehicle requires this.",
      },
      {
        question: "Can you diagnose repeated flat-battery problems?",
        answer:
          "Yes. G&T Motorsports can test the battery, inspect connections and check charging, starting and related electrical concerns where applicable.",
      },
    ],
    relatedServices: [
      coreLinks.diagnostics,
      coreLinks.general,
      coreLinks.mercedes,
      { label: "Air Conditioning Service", href: "/services/air-conditioning" },
    ],
    localAreaText,
    ctaHeading: "Book a Battery Check",
    ctaText:
      "Get slow cranking, warning lights, repeated flat batteries or starting problems checked before replacing parts unnecessarily.",
    primaryCtaLabel: "Book Battery Check",
    secondaryCtaLabel: "Get a Quote",
    secondaryCtaHref: "/contact",
  },
  {
    slug: "air-conditioning",
    name: "Air Conditioning",
    icon: "AC",
    eyebrow: "Vehicle air conditioning Clyde North",
    title: "Car Air Conditioning Service in Clyde North",
    shortDescription:
      "Automotive air-conditioning inspection and diagnosis for weak cooling, poor airflow, odours, refrigerant loss and system faults.",
    introduction:
      "G&T Motorsports can inspect and diagnose automotive air-conditioning performance issues and carry out applicable repairs and servicing. If your car AC is not cold in Clyde North, cooling is getting weaker, airflow is poor or the system works intermittently, the fault should be diagnosed before parts are replaced or refrigerant is added.",
    metadataTitle:
      "Car Air Conditioning Clyde North | AC Repairs | G&T Motorsports",
    metadataDescription:
      "Book car air conditioning service in Clyde North for car aircon repairs, poor cooling, refrigerant loss, airflow issues and automotive AC diagnosis.",
    trustPoints: allMakesTrust,
    sectionHeadings: {
      intro: "Signs Your Car Air Conditioning Needs Attention",
      checklist: "Air Conditioning Diagnosis",
      whyChoose: "Why Choose G&T Motorsports for Air Conditioning Service",
      faq: "Car Air Conditioning Service FAQs",
    },
    symptomsIntro:
      "Air-conditioning symptoms can come from refrigerant loss, airflow, electrical, control, compressor or sealed-system faults. Diagnosis is the right starting point before assuming a regas or replacement part will solve the issue.",
    symptoms: [
      "Air not blowing cold",
      "Cooling performance getting weaker",
      "Unusual noises when AC is operating",
      "Unpleasant smells from vents",
      "Poor airflow",
      "AC working intermittently",
      "Windows not demisting effectively",
    ],
    warningSigns: [
      "Air not blowing cold",
      "Cooling performance getting weaker",
      "Unusual noises when AC is operating",
      "Unpleasant smells from vents",
      "Poor airflow",
      "AC working intermittently",
      "Windows not demisting effectively",
    ],
    includedItems: [
      "Air-conditioning performance checks",
      "Pressure and temperature checks where applicable",
      "Leak inspection pathway where required",
      "Compressor operation checks",
      "Condenser and related component checks",
      "Electrical control checks where appropriate",
      "Airflow and cabin-filter checks where relevant",
      "Clear quote before repair work proceeds",
    ],
    detailSections: [
      {
        title: "Poor Cooling & Refrigerant Loss",
        copy:
          "Poor cooling can be caused by refrigerant loss, leaks, compressor concerns, condenser performance, control faults or airflow issues. A system that needs frequent regassing may have an underlying leak or fault that should be investigated.",
        points: [
          "Poor cooling diagnosis",
          "Refrigerant-loss concerns",
          "Leak checks where applicable",
          "No assumption that regassing fixes every fault",
        ],
      },
      {
        title: "Compressor, Condenser & System Components",
        copy:
          "Automotive air-conditioning diagnosis may involve checking pressures, temperatures, leaks, compressor operation, condenser performance, electrical controls and related components as applicable to the vehicle and symptom.",
        points: [
          "Compressor operation checks",
          "Condenser performance assessment",
          "Electrical and control checks",
          "Component advice before repairs",
        ],
      },
      {
        title: "Cabin Comfort & Airflow Issues",
        copy:
          "Weak airflow, odours or poor demisting can involve cabin filters, blower operation, controls, vents, moisture or other airflow-related concerns. These symptoms should be checked before assuming the sealed AC system is the only issue.",
        points: [
          "Airflow checks",
          "Cabin filter checks where relevant",
          "Vent odour and demisting concerns",
          "Comfort-related fault finding",
        ],
      },
    ],
    processSteps: standardProcess,
    benefits: standardBenefits,
    specialNotice:
      "Air-conditioning services can vary by vehicle and system. Contact G&T Motorsports to confirm what can be completed for your vehicle. This page does not make claims about refrigerant handling licences, certifications or authorisations.",
    faqs: [
      {
        question: "Why is my car air conditioning not blowing cold?",
        answer:
          "Poor cooling can have several causes, including refrigerant loss, leaks, compressor concerns, condenser performance, electrical controls, airflow issues or other system faults. Diagnosis is recommended before repairs or refrigerant are added.",
      },
      {
        question: "Should my AC system need frequent regassing?",
        answer:
          "A healthy system should not usually need frequent regassing. If cooling drops again after a regas, there may be an underlying leak or fault that needs inspection.",
      },
      {
        question: "Can refrigerant leaks be repaired?",
        answer:
          "It depends on the leak location, component condition and vehicle system. Some components may be repairable while others may require replacement. G&T Motorsports will explain findings before repair work proceeds.",
      },
      {
        question: "Why does my AC work intermittently?",
        answer:
          "Intermittent AC can relate to electrical controls, sensors, compressor operation, pressure changes, fan operation or other faults. Testing may be required while the symptom is present.",
      },
      {
        question: "Why is airflow from the vents weak?",
        answer:
          "Weak airflow can involve cabin filters, blower operation, vent controls, restrictions or other airflow concerns. It does not always mean the system is low on refrigerant.",
      },
      {
        question: "Should diagnosis be carried out before a regas?",
        answer:
          "Yes. Poor AC performance can have multiple causes, so diagnosis helps avoid assuming that a regas alone will fix the problem.",
      },
    ],
    relatedServices: [
      coreLinks.general,
      coreLinks.diagnostics,
      coreLinks.battery,
      coreLinks.cooling,
    ],
    localAreaText,
    ctaHeading: "Book an Air Conditioning Inspection",
    ctaText:
      "Have weak cooling, odours, poor airflow or intermittent AC concerns checked before replacing parts or assuming a regas will fix the issue.",
    primaryCtaLabel: "Book Air Conditioning Inspection",
    secondaryCtaLabel: "Get a Quote",
    secondaryCtaHref: "/contact",
  },
  {
    slug: "clutch-transmission",
    name: "Clutch and Transmission",
    icon: "CT",
    eyebrow: "Clutch and transmission Clyde North",
    title: "Clutch and Transmission Services in Clyde North",
    shortDescription:
      "Inspection for slipping, difficult gear changes, shudder, leaks and driveline concerns.",
    introduction:
      "Clutch and transmission symptoms can range from simple adjustments or leaks through to more involved repairs. G&T Motorsports can inspect the vehicle, explain the findings and discuss approval before major work proceeds.",
    metadataTitle: "Clutch and Transmission Services Clyde North | G&T Motorsports",
    metadataDescription:
      "Book clutch and transmission inspections in Clyde North for slipping, difficult gear changes, noise, leaks and driveline concerns.",
    trustPoints: allMakesTrust,
    symptomsIntro:
      "Book an inspection if the clutch slips, gears are hard to select or the vehicle shudders during take-off.",
    symptoms: [
      "Clutch slipping",
      "Difficulty changing gears",
      "Shudder when taking off",
      "Unusual transmission noise",
      "Fluid leaks",
    ],
    warningSigns: [
      "Clutch slipping",
      "Difficulty changing gears",
      "Shudder when taking off",
      "Unusual transmission noise",
      "Fluid leaks",
      "Delayed engagement",
    ],
    includedItems: [
      "Clutch inspection",
      "Transmission leak assessment",
      "Transmission-fluid servicing where appropriate",
      "Driveline assessment",
      "Diagnosis before major repairs",
    ],
    processSteps: standardProcess,
    benefits: standardBenefits,
    specialNotice:
      "Major transmission work depends on the vehicle and fault. G&T Motorsports will assess and advise the suitable next step rather than promising every repair type in-house.",
    faqs: [
      { question: "What are the signs of a worn clutch?", answer: "A slipping clutch, shudder, burning smell, clutch noise or difficulty taking off can indicate clutch wear or related faults." },
      { question: "Why is it difficult to change gears?", answer: "Difficult gear selection can relate to clutch operation, linkages, fluid, internal transmission concerns or other causes. Inspection is needed." },
      { question: "Can you inspect a transmission leak?", answer: "Yes. Visible leaks can be inspected and the likely source discussed before repair work proceeds." },
      { question: "Do you service automatic transmissions?", answer: "Transmission-fluid servicing may be appropriate for some vehicles. Contact the workshop with your vehicle details so the team can advise." },
      { question: "Do you provide approval before major repairs?", answer: "Yes. Major repair recommendations are explained and require approval before work proceeds." },
      { question: "Can I drive with a slipping clutch?", answer: "A slipping clutch can worsen and may leave the vehicle unable to drive. Arrange inspection and avoid unnecessary driving if symptoms are severe." },
    ],
    relatedServices: [coreLinks.diagnostics, coreLinks.engine, coreLinks.general],
    localAreaText,
    ctaHeading: "Book Clutch or Transmission Inspection",
    ctaText:
      "Get slipping, shudder, noise or gear-selection concerns inspected before approving major repairs.",
  },
  {
    slug: "engine-repairs",
    name: "Engine Repairs",
    icon: "ER",
    eyebrow: "Engine repairs Clyde North",
    title: "Engine Diagnostics and Repairs in Clyde North",
    shortDescription:
      "Staged engine diagnosis for rough running, oil leaks, noises, smoke and performance concerns.",
    introduction:
      "Engine symptoms need careful assessment before repair recommendations are made. G&T Motorsports can inspect rough running, oil leaks, unusual noises, smoke, overheating-related concerns and reduced performance with a staged diagnostic approach.",
    metadataTitle: "Engine Repairs Clyde North | G&T Motorsports",
    metadataDescription:
      "Engine diagnosis and mechanical repairs in Clyde North for rough running, oil leaks, unusual noises, reduced performance and warning lights.",
    trustPoints: allMakesTrust,
    symptomsIntro:
      "An engine warning light does not automatically mean major damage, but symptoms should be checked before they worsen.",
    symptoms: [
      "Rough running",
      "Oil leaks",
      "Unusual engine noise",
      "Reduced performance",
      "Smoke from the exhaust or engine bay",
    ],
    warningSigns: [
      "Engine warning light",
      "Rough idle or stalling",
      "Knocking or ticking noises",
      "Visible oil leaks",
      "Smoke or overheating symptoms",
    ],
    includedItems: [
      "Engine-noise assessment",
      "Oil-leak inspection",
      "Rough-running diagnosis",
      "Overheating-related checks",
      "Compression or mechanical testing where appropriate",
      "Staged diagnosis before repair recommendations",
    ],
    processSteps: standardProcess,
    benefits: standardBenefits,
    specialNotice:
      "Engine rebuilds or replacements are not promised on this page. Extensive faults are assessed and discussed case by case.",
    faqs: [
      { question: "Why is my engine running rough?", answer: "Rough running can come from ignition, fuel, air, sensor, mechanical or other faults. Diagnosis helps narrow down the cause." },
      { question: "What causes engine oil leaks?", answer: "Oil leaks can come from seals, gaskets, covers or related components. The vehicle needs inspection to identify the source." },
      { question: "Can you diagnose engine noise?", answer: "Yes. Engine noises can be inspected, and further testing may be recommended depending on the sound and operating conditions." },
      { question: "Does an engine warning light mean serious damage?", answer: "Not always. A warning light means the vehicle has detected a fault. Prompt diagnosis helps determine how serious it is." },
      { question: "Will you inspect the vehicle before quoting?", answer: "Yes. Inspection or testing is completed before repair recommendations are quoted." },
      { question: "What happens if the repair is extensive?", answer: "The findings, likely options and next steps are discussed before any major work proceeds." },
    ],
    relatedServices: [{ label: "Intake Valve Carbon Cleaning", href: walnutPath }, coreLinks.diagnostics, coreLinks.cooling, coreLinks.general],
    localAreaText,
    ctaHeading: "Book Engine Diagnosis",
    ctaText:
      "Have engine noises, leaks, smoke or rough running assessed with clear advice before repairs.",
  },
  {
    slug: "roadworthy-certificate",
    name: "Roadworthy Certificate Inspections",
    icon: "RWC",
    eyebrow: "RWC inspections Clyde North",
    title: "Roadworthy Certificate Inspections in Clyde North",
    shortDescription:
      "Roadworthy Certificate inspections for eligible vehicles, subject to workshop availability and applicable Victorian requirements.",
    introduction:
      "G&T Motorsports provides Roadworthy Certificate inspection support for eligible vehicles in Clyde North. Inspections are carried out with reference to applicable Victorian requirements, and any findings are explained clearly before approved repairs proceed.",
    metadataTitle:
      "Roadworthy Certificate Clyde North | RWC Inspections | G&T Motorsports",
    metadataDescription:
      "Need a Roadworthy Certificate inspection near Clyde North? G&T Motorsports provides professional RWC inspections for eligible vehicles in accordance with applicable Victorian requirements.",
    trustPoints: [
      "Victorian RWC inspection support",
      "Clear findings",
      "Quote approval before repairs",
      "All makes and models",
    ],
    symptomsIntro:
      "An RWC inspection may be needed when selling, transferring or re-registering an eligible vehicle, or when you have been asked to provide a roadworthy certificate.",
    symptoms: [
      "Selling an eligible registered vehicle",
      "Transferring registration in Victoria",
      "Re-registering an eligible vehicle",
      "Responding to a roadworthy requirement",
      "Checking safety-related items before certification",
    ],
    includedItems: [
      "Brake system inspection",
      "Steering and suspension checks",
      "Tyre and wheel condition checks",
      "Lights, glazing and visible safety items",
      "Body, chassis and structural observations",
      "Engine, driveline and leak observations",
      "Findings explained before approved repairs",
    ],
    processSteps: standardProcess,
    benefits: standardBenefits,
    specialNotice:
      "Roadworthy Certificate inspections are subject to workshop availability and applicable Victorian requirements. A pass cannot be guaranteed before inspection, and repairs are not automatically included.",
    faqs: [
      {
        question: "What is a Roadworthy Certificate inspection?",
        answer:
          "A Roadworthy Certificate inspection checks eligible vehicles against applicable Victorian roadworthiness requirements. It is not a guarantee that the vehicle will pass before inspection.",
      },
      {
        question: "When might I need an RWC?",
        answer:
          "An RWC may be required when selling a vehicle, transferring registration, re-registering a vehicle or meeting a roadworthy requirement in Victoria.",
      },
      {
        question: "What happens if my vehicle does not pass?",
        answer:
          "The workshop explains the findings and can provide a quote for approved repairs where applicable. Additional work does not begin without approval.",
      },
      {
        question: "Are repairs included in the inspection?",
        answer:
          "Repairs are not automatically included. If repair work is required, G&T Motorsports will explain the findings and quote approved work separately where applicable.",
      },
      {
        question: "Do you guarantee a same-day certificate?",
        answer:
          "No same-day certificate is promised on this page. Timing depends on workshop availability, inspection findings and whether any required repairs are approved and completed.",
      },
      {
        question: "Are you affiliated with VicRoads?",
        answer:
          "No VicRoads affiliation is claimed on this website. G&T Motorsports provides roadworthy inspection support in line with applicable Victorian requirements.",
      },
    ],
    relatedServices: [
      coreLinks.brakes,
      coreLinks.suspension,
      coreLinks.diagnostics,
      coreLinks.general,
    ],
    localAreaText,
    ctaHeading: "Book an RWC Inspection",
    ctaText:
      "Arrange a Roadworthy Certificate inspection with clear findings and quote approval before additional repairs.",
  },
  {
    slug: "pre-purchase-inspections",
    name: "Pre-Purchase Inspections",
    icon: "PI",
    eyebrow: "Pre-purchase inspections Clyde North",
    title: "Pre-Purchase Vehicle Inspections in Clyde North",
    shortDescription:
      "Independent checks of accessible mechanical condition before buying a used vehicle.",
    introduction:
      "A pre-purchase inspection can help you understand a used vehicle's visible and accessible condition before you commit. It does not guarantee a fault-free vehicle, but it can identify concerns that deserve attention or further discussion.",
    metadataTitle: "Pre-Purchase Car Inspections Clyde North | G&T Motorsports",
    metadataDescription:
      "Book a pre-purchase vehicle inspection in Clyde North for an independent assessment of mechanical condition, brakes, tyres and visible faults.",
    trustPoints: allMakesTrust,
    symptomsIntro:
      "Book before buying when you want an independent workshop to check accessible mechanical and safety-related items.",
    symptoms: [
      "You are buying a used vehicle",
      "The vehicle has limited service history",
      "You want visible leaks and wear checked",
      "Warning lights are present",
      "You want a clearer view before negotiating",
    ],
    includedItems: [
      "Accessible mechanical condition checks",
      "Visible leak inspection",
      "Brake and tyre observations",
      "Suspension and steering checks",
      "Warning-light observations",
      "Diagnostic scan where appropriate",
      "Written or verbal findings based on current process",
    ],
    processSteps: [
      "You provide the vehicle details and inspection needs before booking.",
      "The vehicle is checked for accessible and observable conditions at the time.",
      "Findings are explained clearly, including items that may need further investigation.",
      "You use the information to make a more informed purchase decision.",
    ],
    benefits: standardBenefits,
    specialNotice:
      "Pre-purchase inspections are limited to accessible and observable conditions at the time of inspection and do not guarantee a fault-free vehicle.",
    faqs: [
      { question: "What is checked during a pre-purchase inspection?", answer: "Checks can include accessible mechanical condition, visible leaks, brakes, tyres, suspension, steering, warning lights and diagnostic scanning where appropriate." },
      { question: "Does the inspection guarantee the vehicle has no faults?", answer: "No. The inspection is limited to accessible and observable conditions at the time and cannot guarantee a vehicle is fault-free." },
      { question: "Can you scan the vehicle for fault codes?", answer: "A diagnostic scan can be included where appropriate, but fault codes should be interpreted alongside inspection findings." },
      { question: "Should I inspect a used car before buying it?", answer: "A pre-purchase inspection can help identify visible or accessible concerns before you make a decision." },
      { question: "How long does an inspection take?", answer: "Timing depends on the vehicle, inspection scope and workshop workload. The team can advise when booking." },
      { question: "Do I receive a report?", answer: "Findings may be provided verbally or in writing depending on the current workshop process and what is arranged at booking." },
    ],
    relatedServices: [coreLinks.diagnostics, coreLinks.general, coreLinks.brakes],
    localAreaText,
    ctaHeading: "Book a Pre-Purchase Inspection",
    ctaText:
      "Get an independent inspection before buying your next vehicle.",
  },
  {
    slug: "fleet-servicing",
    name: "Fleet Servicing",
    icon: "FL",
    eyebrow: "Fleet servicing Clyde North",
    title: "Fleet Vehicle Servicing in Clyde North",
    shortDescription:
      "Servicing support for local business vehicles, work utes, vans and company cars.",
    introduction:
      "Business vehicles need practical maintenance and clear communication. G&T Motorsports can help local businesses arrange servicing and repair coordination for work utes, vans and company cars without inventing unsupported promises about discounts, priority service or credit terms.",
    metadataTitle: "Fleet Servicing Clyde North | G&T Motorsports",
    metadataDescription:
      "Fleet vehicle servicing in Clyde North for local businesses, work utes, vans and company vehicles with clear maintenance planning and communication.",
    trustPoints: allMakesTrust,
    symptomsIntro:
      "Fleet servicing suits businesses that want to plan maintenance, understand repair needs and reduce avoidable vehicle downtime through regular care.",
    symptoms: [
      "Work vehicles due for scheduled maintenance",
      "Multiple vehicles needing coordinated servicing",
      "Utes, vans or company cars used daily",
      "Repairs that need clear approval communication",
      "A desire to plan routine maintenance ahead",
    ],
    includedItems: [
      "Scheduled maintenance for local business vehicles",
      "Servicing for work utes, vans and company cars",
      "Repair coordination and clear communication",
      "General mechanical inspections",
      "Advice on reducing avoidable downtime",
    ],
    processSteps: [
      "Discuss the vehicles, usage and servicing requirements with the workshop.",
      "Arrange bookings around workshop availability and business needs where possible.",
      "Vehicles are inspected or serviced, and required repairs are communicated clearly.",
      "Ongoing servicing arrangements can be discussed directly with the business.",
    ],
    benefits: standardBenefits,
    faqs: [
      { question: "What types of fleet vehicles do you service?", answer: "G&T Motorsports can service a wide variety of local business vehicles, including work utes, vans and company cars." },
      { question: "Can you help schedule regular servicing?", answer: "Yes. Businesses can discuss regular servicing needs with the workshop so bookings can be planned around availability." },
      { question: "How do you communicate required repairs?", answer: "The team explains inspection findings and recommended repairs before additional work proceeds." },
      { question: "Do you service work utes and vans?", answer: "Yes. Work utes and vans are included in the types of business vehicles G&T Motorsports can service." },
      { question: "Can fleet bookings be made online?", answer: "Fleet enquiries can start online, but calling the workshop is often helpful when multiple vehicles or timing requirements are involved." },
      { question: "How do businesses discuss ongoing servicing arrangements?", answer: "Contact G&T Motorsports directly to discuss vehicle details, servicing needs and how bookings should be coordinated." },
    ],
    relatedServices: [coreLinks.general, coreLinks.logbook, coreLinks.diagnostics],
    localAreaText,
    ctaHeading: "Discuss Fleet Servicing",
    ctaText:
      "Plan servicing and repairs for local business vehicles with clear communication from G&T Motorsports.",
  },
];

export const servicePageSlugs = servicePages.map((service) => service.slug);

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}

export function serviceCanonicalUrl(slug: string) {
  return `${site.url}${primaryServicePaths[slug] || `/services/${slug}`}`;
}

export function servicePath(slug: string) {
  return primaryServicePaths[slug] || `/services/${slug}`;
}
