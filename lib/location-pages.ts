import { site } from "@/lib/site";

export type LocationPage = {
  slug: string;
  suburb: string;
  title: string;
  description: string;
  h1: string;
  distance: string;
  driveTime: string;
  localIntro: string;
  localContext: string;
  customerNeeds: string[];
  serviceAngle: string;
  whyChoose: string[];
};

export const locationPages: LocationPage[] = [
  {
    slug: "cranbourne",
    suburb: "Cranbourne",
    title: "Mechanic Near Cranbourne | Car Servicing & Repairs | G&T Motorsports",
    description:
      "G&T Motorsports provides car servicing, diagnostics and mechanical repairs for Cranbourne drivers from nearby Clyde North. Book online today.",
    h1: "Mechanic Near Cranbourne",
    distance: "around 9 km",
    driveTime: "about 12 to 18 minutes",
    localIntro:
      "Cranbourne drivers have quick access to G&T Motorsports via Clyde-Five Ways Road, Berwick-Cranbourne Road and the surrounding Clyde North road network. The workshop is close enough for routine servicing, fault diagnosis and planned repairs without needing to travel across Melbourne.",
    localContext:
      "Many Cranbourne customers use their vehicles for school runs, commuting, weekend sport, shopping trips and longer drives across the south-east. Regular maintenance matters because stop-start suburban driving, traffic and short trips can be hard on brakes, batteries, tyres and cooling systems.",
    customerNeeds: [
      "Routine servicing for family cars and daily commuters",
      "Brake noise, vibration and safety inspections",
      "Warning-light diagnosis before parts are replaced",
      "Logbook servicing completed to the relevant manufacturer schedule",
    ],
    serviceAngle:
      "For Cranbourne customers, G&T Motorsports focuses on clear communication. The team explains what is due now, what should be monitored and what can reasonably wait, so you can plan servicing without surprise repairs.",
    whyChoose: [
      "Convenient Clyde North location close to Cranbourne",
      "Practical advice for daily drivers and family vehicles",
      "Online booking for easy drop-off planning",
      "All makes and models serviced",
    ],
  },
  {
    slug: "berwick",
    suburb: "Berwick",
    title: "Mechanic Near Berwick | Car Servicing & Repairs | G&T Motorsports",
    description:
      "Book car servicing, logbook servicing, diagnostics and mechanical repairs near Berwick with G&T Motorsports in Clyde North.",
    h1: "Mechanic Near Berwick",
    distance: "around 12 km",
    driveTime: "about 15 to 22 minutes",
    localIntro:
      "Berwick customers can reach G&T Motorsports in Clyde North by travelling south through the local arterial road network. The workshop is positioned well for drivers who want a professional independent mechanic without heading into busier dealership areas.",
    localContext:
      "Vehicles in Berwick often cover a mix of local suburban driving, Monash Freeway commuting and family trips across Casey. That variety can place different demands on brakes, tyres, suspension, engine oil, fluids and batteries.",
    customerNeeds: [
      "Scheduled logbook servicing for newer vehicles",
      "Suspension and steering inspections for ride or handling concerns",
      "Battery and charging-system checks before failures become inconvenient",
      "Diagnostics for engine, ABS, airbag and electrical warning lights",
    ],
    serviceAngle:
      "Berwick drivers choose G&T Motorsports when they want straightforward servicing advice. Each vehicle is assessed on its condition and service requirements, and additional work is discussed before it proceeds.",
    whyChoose: [
      "Independent workshop with clear approval before extra work",
      "Suitable oils, fluids and parts selected for the vehicle",
      "Servicing for family cars, work vehicles, four-wheel drives and performance vehicles",
      "Mercedes-Benz Digital Service Record updates for eligible vehicles",
    ],
  },
  {
    slug: "narre-warren",
    suburb: "Narre Warren",
    title: "Mechanic Near Narre Warren | G&T Motorsports Clyde North",
    description:
      "Narre Warren drivers can book servicing, brake repairs, diagnostics and mechanical repairs with G&T Motorsports in Clyde North.",
    h1: "Mechanic Near Narre Warren",
    distance: "around 17 km",
    driveTime: "about 18 to 28 minutes",
    localIntro:
      "G&T Motorsports is a practical option for Narre Warren drivers who want a professional workshop in Melbourne's south-east. The drive to Clyde North is usually straightforward, making it suitable for booked servicing, initial assessments and repair enquiries.",
    localContext:
      "Narre Warren vehicles often split time between local shopping precincts, school traffic, freeway runs and weekend travel. This makes regular inspections useful for identifying brake wear, suspension noises, cooling issues and battery concerns before they interrupt a busy week.",
    customerNeeds: [
      "General servicing for daily-use vehicles",
      "Brake repairs and inspections for noise or vibration",
      "Cooling-system checks for overheating or coolant loss",
      "Pre-purchase inspections before buying a used vehicle",
    ],
    serviceAngle:
      "The workshop takes a practical diagnostic approach. Fault codes are treated as a guide rather than a final answer, and repairs are explained before parts are replaced.",
    whyChoose: [
      "Modern fault finding with clear explanations",
      "Book online or call ahead for workshop availability",
      "Walk-ins welcome when current workload allows",
      "Service advice tailored to how the vehicle is used",
    ],
  },
  {
    slug: "officer",
    suburb: "Officer",
    title: "Mechanic Near Officer | Car Service & Repairs | G&T Motorsports",
    description:
      "G&T Motorsports services Officer customers from Clyde North with logbook servicing, diagnostics, brake repairs and general mechanical repairs.",
    h1: "Mechanic Near Officer",
    distance: "around 20 km",
    driveTime: "about 20 to 30 minutes",
    localIntro:
      "Officer drivers can reach G&T Motorsports by heading through the south-east growth corridor toward Clyde North. The workshop supports customers who want convenient online booking, clear advice and careful servicing for all makes and models.",
    localContext:
      "As Officer continues to grow, many vehicles are used for commuting, trades, family transport and regular regional driving. Keeping up with scheduled servicing helps manage reliability, safety and service history.",
    customerNeeds: [
      "Logbook servicing completed to manufacturer schedules",
      "Fleet and work-vehicle servicing enquiries",
      "Vehicle diagnostics for intermittent faults",
      "Clutch, transmission and driveline inspections",
    ],
    serviceAngle:
      "Officer customers can book a drop-off time online and provide vehicle details before visiting. The selected time is generally for drop-off or initial assessment, with completion time depending on the work required, parts availability and workshop workload.",
    whyChoose: [
      "Professional independent workshop in Clyde North",
      "Clear quotes before approved repairs proceed",
      "All makes and models serviced",
      "Helpful communication for planned maintenance",
    ],
  },
  {
    slug: "pakenham",
    suburb: "Pakenham",
    title: "Mechanic Near Pakenham | Servicing & Repairs | G&T Motorsports",
    description:
      "Pakenham customers can book car servicing, diagnostics and repairs at G&T Motorsports in Clyde North. All makes and models serviced.",
    h1: "Mechanic Near Pakenham",
    distance: "around 28 km",
    driveTime: "about 25 to 40 minutes",
    localIntro:
      "Pakenham drivers looking for a trusted independent workshop can book with G&T Motorsports in Clyde North. The location suits customers who want professional servicing and clear repair advice while travelling within Melbourne's south-east.",
    localContext:
      "Pakenham vehicles can cover longer distances than many inner-suburban cars, including freeway travel, rural-edge roads and family trips. That usage makes routine checks of brakes, tyres, fluids, cooling systems and suspension especially valuable.",
    customerNeeds: [
      "Scheduled servicing for higher-kilometre commuters",
      "Engine repairs and oil-leak inspections",
      "Cooling-system checks before long drives",
      "Brake and suspension inspections for safety and comfort",
    ],
    serviceAngle:
      "G&T Motorsports helps Pakenham customers plan maintenance around real vehicle use. The team explains current findings and likely next steps so customers can decide what to approve.",
    whyChoose: [
      "Clear servicing advice before extra repairs",
      "Quality oils, fluids, filters and parts",
      "Convenient online booking",
      "Mercedes-Benz Digital Service Record updates for eligible vehicles",
    ],
  },
  {
    slug: "lynbrook",
    suburb: "Lynbrook",
    title: "Mechanic Near Lynbrook | G&T Motorsports Clyde North",
    description:
      "Book servicing, diagnostics, brake repairs and mechanical repairs near Lynbrook with G&T Motorsports in Clyde North.",
    h1: "Mechanic Near Lynbrook",
    distance: "around 16 km",
    driveTime: "about 20 to 30 minutes",
    localIntro:
      "Lynbrook drivers can use G&T Motorsports as a nearby Clyde North workshop for servicing, diagnostics and repair enquiries. The workshop is a practical choice for customers who want an independent mechanic with online booking and clear communication.",
    localContext:
      "Many Lynbrook vehicles are used for local commuting, school traffic, shopping trips and connections through surrounding suburbs. Short trips and stop-start driving can contribute to battery wear, brake wear and fluid-condition concerns.",
    customerNeeds: [
      "General vehicle servicing and safety checks",
      "Battery testing and charging-system diagnosis",
      "Air-conditioning inspections for weak cooling or airflow concerns",
      "Diagnostics for warning lights or starting problems",
    ],
    serviceAngle:
      "The workshop can inspect symptoms first and explain what has been found. This helps Lynbrook customers avoid guesswork and understand the difference between urgent repairs and items that can be monitored.",
    whyChoose: [
      "Straightforward advice for everyday vehicles",
      "Book online or call the workshop",
      "Suitable parts and fluids used for the vehicle",
      "All makes and models welcome",
    ],
  },
  {
    slug: "hampton-park",
    suburb: "Hampton Park",
    title: "Mechanic Near Hampton Park | Car Servicing | G&T Motorsports",
    description:
      "Hampton Park drivers can book car servicing, logbook servicing, diagnostics and mechanical repairs at G&T Motorsports in Clyde North.",
    h1: "Mechanic Near Hampton Park",
    distance: "around 18 km",
    driveTime: "about 20 to 30 minutes",
    localIntro:
      "Hampton Park customers can reach G&T Motorsports in Clyde North for booked servicing, inspections and mechanical repair enquiries. The workshop provides a professional setting for customers who value clear advice before work proceeds.",
    localContext:
      "Vehicles in Hampton Park often handle dense local traffic, short trips and family duties. Regular servicing can help identify brake wear, battery weakness, steering or suspension noises and fluid issues before they become inconvenient.",
    customerNeeds: [
      "Routine servicing for family and commuter vehicles",
      "Brake inspections for noise, vibration or reduced performance",
      "Suspension and steering checks for knocking or uneven tyre wear",
      "Logbook servicing for all makes and models",
    ],
    serviceAngle:
      "G&T Motorsports keeps the process simple for Hampton Park drivers: book online, explain the concern, drop off the vehicle and receive clear communication before additional repairs are completed.",
    whyChoose: [
      "Clear communication from inspection to handover",
      "Professional servicing for a broad range of vehicles",
      "Walk-ins welcome when availability allows",
      "Convenient Clyde North location",
    ],
  },
  {
    slug: "hallam",
    suburb: "Hallam",
    title: "Mechanic Near Hallam | Servicing & Repairs | G&T Motorsports",
    description:
      "G&T Motorsports provides car servicing, diagnostics, brake repairs and mechanical repairs for Hallam customers from Clyde North.",
    h1: "Mechanic Near Hallam",
    distance: "around 22 km",
    driveTime: "about 25 to 35 minutes",
    localIntro:
      "Hallam drivers can book with G&T Motorsports in Clyde North for vehicle servicing, diagnostics and repairs. The workshop suits customers who want practical advice, careful workmanship and an independent mechanic in Melbourne's south-east.",
    localContext:
      "Hallam vehicles often see a mix of industrial-area use, commuting, freeway access and suburban travel. Those conditions can make regular inspections useful for brakes, suspension, batteries, engine fluids and cooling systems.",
    customerNeeds: [
      "Fleet, work-vehicle and daily-driver servicing enquiries",
      "Vehicle diagnostics for warning lights or drivability concerns",
      "Engine repairs, oil leaks and rough-running checks",
      "Pre-purchase inspections for used vehicles",
    ],
    serviceAngle:
      "For Hallam customers, G&T Motorsports focuses on evidence-based inspection and clear approval. The team explains what has been found and discusses options before extra repairs proceed.",
    whyChoose: [
      "Independent workshop with modern diagnostic processes",
      "All makes and models serviced",
      "Online booking and phone support",
      "Mercedes-Benz service record updates for eligible vehicles",
    ],
  },
];

export function getLocationPage(slug: string) {
  return locationPages.find((location) => location.slug === slug);
}

export function locationCanonicalUrl(slug: string) {
  return `${site.url}/locations/${slug}`;
}
