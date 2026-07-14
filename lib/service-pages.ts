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
  processSteps: string[];
  benefits: { title: string; copy: string }[];
  faqs: ServiceFaq[];
  relatedServices: RelatedService[];
  localAreaText: string;
  ctaHeading: string;
  ctaText: string;
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
  general: { label: "General Mechanical Repairs", href: "/services/general-car-servicing" },
  logbook: { label: "Logbook Servicing", href: "/services/logbook-servicing" },
  mercedes: { label: "Mercedes-Benz Service", href: "/services/mercedes-benz-servicing" },
  brakes: { label: "Brake Repairs", href: "/services/brake-repairs" },
  diagnostics: { label: "Engine Diagnostics", href: "/services/vehicle-diagnostics" },
  suspension: { label: "Suspension Repairs", href: "/services/suspension-steering" },
  cooling: { label: "Cooling System Repairs", href: "/services/cooling-system-repairs" },
  battery: { label: "Battery Services", href: "/services/battery-charging-systems" },
  engine: { label: "Engine Repairs", href: "/services/engine-repairs" },
  rwc: { label: "Roadworthy Certificate Inspections", href: "/roadworthy-certificate" },
};

export const servicePages: ServicePage[] = [
  {
    slug: "general-car-servicing",
    name: "General Mechanical Repairs",
    icon: "GS",
    eyebrow: "General servicing Clyde North",
    title: "General Mechanical Repairs in Clyde North",
    shortDescription:
      "Routine oil, filter, safety and condition checks for everyday reliability.",
    introduction:
      "General car servicing keeps your vehicle maintained between major repairs and helps identify wear before it becomes a larger problem. G&T Motorsports services all makes and models with clear reporting and discussion before additional repairs proceed.",
    metadataTitle: "General Mechanical Repairs Clyde North | G&T Motorsports",
    metadataDescription:
      "Book professional general car servicing in Clyde North for all makes and models. Honest advice, quality workmanship and convenient online booking.",
    trustPoints: allMakesTrust,
    symptomsIntro:
      "A general service is a practical choice for routine maintenance, pre-trip peace of mind or when your vehicle is due for basic care.",
    symptoms: [
      "Your vehicle is due by time or kilometres",
      "You want oil and filter servicing",
      "Fluids, tyres, brakes or lights need checking",
      "You want a general condition report",
      "The car has not been inspected recently",
    ],
    includedItems: [
      "Engine oil and filter service",
      "Fluid level and condition checks",
      "Tyre condition and pressure checks",
      "Brake, steering and suspension inspections",
      "Lights, wipers and visible safety checks",
      "General condition report with practical advice",
    ],
    processSteps: standardProcess,
    benefits: standardBenefits,
    faqs: [
      {
        question: "What is included in a general car service?",
        answer:
          "A general service usually includes engine oil and filter replacement, fluid checks, tyre checks and inspections of key safety items such as brakes, steering, suspension, lights and wipers.",
      },
      {
        question: "How often should I service my car?",
        answer:
          "Service intervals vary by vehicle, kilometres and driving conditions. Many vehicles need servicing by time or distance, so check your service information or contact the workshop for guidance.",
      },
      {
        question: "What is the difference between a general service and logbook service?",
        answer:
          "A general service covers routine maintenance and safety checks. A logbook service follows the relevant scheduled service requirements for your specific vehicle.",
      },
      {
        question: "Will you contact me before extra repairs?",
        answer:
          "Yes. If additional repairs are recommended, G&T Motorsports will explain the findings and discuss the work before it proceeds.",
      },
      {
        question: "Do you accept walk-ins?",
        answer:
          "Walk-ins are welcome, but waiting times depend on the work required and current workshop availability. Appointments are recommended.",
      },
      {
        question: "Can I wait during the service?",
        answer:
          "Waiting may be possible for some services, depending on the work required and workshop workload on the day. Booking ahead helps the team advise what to expect.",
      },
    ],
    relatedServices: [coreLinks.logbook, coreLinks.brakes, coreLinks.diagnostics],
    localAreaText,
    ctaHeading: "Book Online",
    ctaText:
      "Keep your vehicle maintained with routine servicing and clear advice from G&T Motorsports.",
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
      "Inspection and repair support for knocking, vibration, poor handling and uneven tyre wear.",
    introduction:
      "Suspension and steering faults can affect comfort, tyre wear and vehicle control. G&T Motorsports inspects the relevant components before recommending repairs, so the cause of noises, pulling or poor handling can be understood.",
    metadataTitle: "Suspension Repairs Clyde North | G&T Motorsports",
    metadataDescription:
      "Book suspension and steering inspections and repairs in Clyde North for worn shocks, bushes, joints, control arms and handling issues.",
    trustPoints: allMakesTrust,
    symptomsIntro:
      "Book an inspection if the vehicle feels loose, noisy, unstable or is wearing tyres unevenly.",
    symptoms: [
      "Knocking over bumps",
      "Vehicle pulling",
      "Uneven tyre wear",
      "Excessive bouncing",
      "Loose or vague steering",
    ],
    warningSigns: [
      "Knocking over bumps",
      "Vehicle pulling",
      "Uneven tyre wear",
      "Excessive bouncing",
      "Loose or vague steering",
      "Steering-wheel vibration",
    ],
    includedItems: [
      "Shock absorber and strut checks",
      "Bush, ball joint and control arm inspection",
      "Steering component checks",
      "Wheel-bearing checks where relevant",
      "Tyre-wear and handling observations",
    ],
    processSteps: standardProcess,
    benefits: standardBenefits,
    faqs: [
      { question: "What causes suspension knocking?", answer: "Knocking can come from several suspension or steering components, including bushes, joints, struts or related hardware. Inspection is needed to identify the cause." },
      { question: "Why is my car pulling to one side?", answer: "Pulling can relate to tyres, alignment, brakes, suspension or road conditions. The vehicle should be inspected before repair recommendations are made." },
      { question: "Can worn suspension damage tyres?", answer: "Worn suspension or steering components can contribute to uneven tyre wear, so timely inspection can help prevent further wear." },
      { question: "Do you inspect steering and suspension together?", answer: "Yes. Steering and suspension components are often checked together because symptoms can overlap." },
      { question: "Can I drive with a suspension noise?", answer: "Some noises may be minor and others may affect safety. Arrange an inspection, especially if handling has changed or the noise is getting worse." },
      { question: "Do you provide a quote before repairs?", answer: "Yes. Recommended repairs are explained and quoted before work proceeds." },
    ],
    relatedServices: [coreLinks.brakes, coreLinks.general, coreLinks.diagnostics],
    localAreaText,
    ctaHeading: "Book Online",
    ctaText:
      "Have knocks, vibration, pulling or tyre-wear concerns inspected by G&T Motorsports.",
  },
  {
    slug: "cooling-system-repairs",
    name: "Cooling System Repairs",
    icon: "CS",
    eyebrow: "Cooling system repairs Clyde North",
    title: "Cooling System Repairs in Clyde North",
    shortDescription:
      "Overheating, coolant leak and cooling-system diagnosis for all makes and models.",
    introduction:
      "Cooling-system faults can lead to further engine damage if ignored. G&T Motorsports can inspect overheating concerns, coolant leaks and cooling components before recommending the right repair path.",
    metadataTitle: "Cooling System Repairs Clyde North | G&T Motorsports",
    metadataDescription:
      "Cooling-system diagnosis and repairs in Clyde North for overheating, coolant leaks, radiators, water pumps, thermostats and hoses.",
    trustPoints: allMakesTrust,
    symptomsIntro:
      "If a vehicle is overheating, stop safely and avoid continuing to drive where doing so may cause damage or create a safety risk.",
    symptoms: [
      "Rising temperature gauge",
      "Coolant warning",
      "Visible coolant leak",
      "Sweet coolant smell",
      "Steam from the engine bay",
    ],
    warningSigns: [
      "Rising temperature gauge",
      "Coolant warning",
      "Visible leaks",
      "Sweet coolant smell",
      "Heater performance changes",
      "Steam from engine bay",
    ],
    includedItems: [
      "Overheating diagnosis",
      "Radiator, hose and coolant-leak checks",
      "Water pump and thermostat assessment",
      "Cooling fan checks",
      "Pressure testing where appropriate",
      "Coolant condition inspection",
    ],
    processSteps: standardProcess,
    benefits: standardBenefits,
    faqs: [
      { question: "Why is my car overheating?", answer: "Overheating can be caused by coolant leaks, fan issues, radiator problems, thermostat faults, water pump concerns or other causes. Inspection is needed before conclusions are made." },
      { question: "Can I keep driving if the temperature gauge is high?", answer: "If the gauge is high or a warning appears, stop safely and avoid continuing to drive where possible. Driving an overheating vehicle may cause damage or create a safety risk." },
      { question: "How do you find a coolant leak?", answer: "The inspection may include visual checks, coolant-condition checks and pressure testing where appropriate." },
      { question: "Do you replace radiators and water pumps?", answer: "Radiators, water pumps, thermostats, hoses and related parts can be replaced when inspection confirms the repair is required and approved." },
      { question: "How often should coolant be checked?", answer: "Coolant should be checked during routine servicing and whenever overheating, leaks or heater-performance changes are noticed." },
      { question: "Will you call before replacing parts?", answer: "Yes. Findings and replacement recommendations are discussed before parts are fitted." },
    ],
    relatedServices: [coreLinks.engine, coreLinks.general, coreLinks.diagnostics],
    localAreaText,
    ctaHeading: "Book Cooling-System Diagnosis",
    ctaText:
      "Do not ignore overheating or coolant loss. Arrange an inspection with G&T Motorsports.",
  },
  {
    slug: "battery-charging-systems",
    name: "Battery Services",
    icon: "BT",
    eyebrow: "Battery and charging Clyde North",
    title: "Battery and Charging System Services in Clyde North",
    shortDescription:
      "Battery testing, replacement advice and alternator or starting-system checks.",
    introduction:
      "Starting and charging issues can be frustrating and intermittent. G&T Motorsports can test the battery, inspect connections and check related charging or starter-system concerns before recommending the next step.",
    metadataTitle: "Battery Services Clyde North | G&T Motorsports",
    metadataDescription:
      "Battery testing, replacement and charging-system checks in Clyde North, including alternator and starting-system diagnosis.",
    trustPoints: allMakesTrust,
    symptomsIntro:
      "Battery and charging checks are useful when the vehicle is slow to start, warning lights appear or a battery repeatedly goes flat.",
    symptoms: [
      "Slow engine cranking",
      "Clicking when starting",
      "Battery warning light",
      "Frequent jump starts",
      "Repeated flat battery",
    ],
    warningSigns: [
      "Slow engine cranking",
      "Clicking when starting",
      "Battery warning light",
      "Frequent jump starts",
      "Electrical accessories behaving unusually",
      "Repeated flat battery",
    ],
    includedItems: [
      "Battery testing",
      "Battery replacement advice",
      "Alternator and charging checks",
      "Starter-system checks",
      "Terminal and connection inspection",
      "Warning light assessment where relevant",
    ],
    processSteps: standardProcess,
    benefits: standardBenefits,
    faqs: [
      { question: "How do I know if my battery is failing?", answer: "Slow cranking, clicking, frequent jump starts or repeated flat batteries can indicate a battery or charging concern. Testing helps confirm the issue." },
      { question: "Can you test the alternator?", answer: "Yes. Charging-system checks can include alternator output and related electrical checks where appropriate." },
      { question: "Why does my battery keep going flat?", answer: "A battery may go flat because of battery age, charging faults, poor connections or other electrical issues. Testing helps narrow down the cause." },
      { question: "Can you replace my battery?", answer: "Battery replacement can be arranged when testing shows replacement is required and the correct battery is available." },
      { question: "Do batteries require programming on some vehicles?", answer: "Some vehicles may require battery registration or additional steps after replacement. The workshop can advise based on the vehicle." },
      { question: "Can I visit without an appointment?", answer: "Walk-ins are welcome, subject to workshop workload and wait times. Booking ahead is recommended." },
    ],
    relatedServices: [coreLinks.diagnostics, coreLinks.general, coreLinks.engine],
    localAreaText,
    ctaHeading: "Book Battery and Charging Checks",
    ctaText:
      "Get starting and charging issues tested before they leave you stranded.",
  },
  {
    slug: "air-conditioning",
    name: "Air Conditioning",
    icon: "AC",
    eyebrow: "Vehicle air conditioning Clyde North",
    title: "Vehicle Air Conditioning Service in Clyde North",
    shortDescription:
      "Careful inspection and diagnosis for weak cooling, airflow issues, odours and system faults.",
    introduction:
      "If your vehicle air conditioning is not cooling properly, has weak airflow or makes unusual noises, G&T Motorsports can inspect the symptoms and explain the likely next step. Claims about refrigerant handling, regassing or specific gas types should be confirmed with the workshop before booking.",
    metadataTitle: "Car Air Conditioning Service Clyde North | G&T Motorsports",
    metadataDescription:
      "Book vehicle air-conditioning inspection and service in Clyde North for weak cooling, airflow problems, unusual noises and system faults.",
    trustPoints: allMakesTrust,
    symptomsIntro:
      "Air-conditioning symptoms can come from airflow, electrical, control or sealed-system faults, so inspection is the right starting point.",
    symptoms: [
      "Warm air from the vents",
      "Weak airflow",
      "Unusual odour",
      "Intermittent cooling",
      "Unusual noise when the system runs",
    ],
    warningSigns: ["Warm air", "Weak airflow", "Unusual odour", "Intermittent cooling", "Unusual noise"],
    includedItems: [
      "Air-conditioning symptom inspection",
      "Airflow and cabin-filter checks where relevant",
      "Control and electrical checks where appropriate",
      "Leak concerns discussed before further work",
      "Clear quote before repair work proceeds",
    ],
    processSteps: standardProcess,
    benefits: standardBenefits,
    specialNotice:
      "Air-conditioning services can vary by vehicle and system. Contact G&T Motorsports to confirm what can be completed for your vehicle.",
    faqs: [
      { question: "Why is my air conditioning not cold?", answer: "Poor cooling can have several causes, including airflow, electrical, control or sealed-system issues. Inspection is needed before recommending a repair." },
      { question: "Can you inspect an air-conditioning leak?", answer: "G&T Motorsports can discuss air-conditioning leak concerns and advise the appropriate inspection pathway for your vehicle." },
      { question: "How often should vehicle air conditioning be checked?", answer: "It is sensible to have the system checked when cooling performance changes, odours appear or airflow becomes weak." },
      { question: "Does poor airflow always mean low refrigerant?", answer: "No. Poor airflow may relate to cabin filters, fans, controls or other issues, so diagnosis should come before assumptions." },
      { question: "Will you quote repairs before proceeding?", answer: "Yes. Recommended repairs are explained and quoted before work proceeds." },
      { question: "Do I need to book?", answer: "Appointments are recommended. Walk-ins are welcome, but wait times depend on workshop availability." },
    ],
    relatedServices: [coreLinks.diagnostics, coreLinks.general, coreLinks.battery],
    localAreaText,
    ctaHeading: "Book Air-Conditioning Inspection",
    ctaText:
      "Have weak cooling, odours or airflow concerns checked before the weather heats up.",
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
    relatedServices: [coreLinks.diagnostics, coreLinks.cooling, coreLinks.general],
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
  return `${site.url}/services/${slug}`;
}
