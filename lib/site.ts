export const site = {
  name: "G&T Motorsports",
  domain: "gtmotorsports.com.au",
  url: "https://gtmotorsports.com.au",
  logo: "https://gtmotorsports.com.au/gt-motorsports-logo.webp",
  phone: "0414 901 666",
  phoneInternational: "+61 414 901 666",
  phoneHref: "tel:+61414901666",
  email: "info@gtmotorsports.com.au",
  emailHref: "mailto:info@gtmotorsports.com.au",
  googleReviewsHref:
    process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL ||
    "https://g.page/r/CWLYz5owFC8BEBM/review",
  address: "47B Palladium Circuit, Clyde North VIC 3978, Australia",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=47B%20Palladium%20Circuit%2C%20Clyde%20North%20VIC%203978",
  directionsHref:
    "https://www.google.com/maps/dir/?api=1&destination=47B%20Palladium%20Circuit%2C%20Clyde%20North%20VIC%203978",
  hours: [
    ["Monday-Friday", "9:00 AM-6:00 PM"],
    ["Saturday", "9:00 AM-4:00 PM"],
    ["Sunday", "Closed"],
  ],
  areas: [
    "Clyde North",
    "Clyde",
    "Cranbourne",
    "Cranbourne East",
    "Berwick",
    "Narre Warren",
    "Officer",
    "Pakenham",
    "Hampton Park",
  ],
  services: [
    "Logbook servicing",
    "General car servicing",
    "Brake inspections and repairs",
    "Suspension and steering",
    "Vehicle diagnostics",
    "Cooling system repairs",
    "Battery and charging systems",
    "Pre-purchase inspections",
  ],
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];

export const publicRoutes = [
  {
    path: "/",
    priority: 1,
    changeFrequency: "weekly",
  },
  {
    path: "/about",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/mechanic-clyde-north",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/services",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/services/logbook-servicing",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/services/mercedes-benz-servicing",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/services/general-car-servicing",
    priority: 0.82,
    changeFrequency: "monthly",
  },
  {
    path: "/services/brake-repairs",
    priority: 0.82,
    changeFrequency: "monthly",
  },
  {
    path: "/services/vehicle-diagnostics",
    priority: 0.82,
    changeFrequency: "monthly",
  },
  {
    path: "/services/suspension-steering",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/services/cooling-system-repairs",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/services/battery-charging-systems",
    priority: 0.78,
    changeFrequency: "monthly",
  },
  {
    path: "/services/air-conditioning",
    priority: 0.76,
    changeFrequency: "monthly",
  },
  {
    path: "/services/clutch-transmission",
    priority: 0.76,
    changeFrequency: "monthly",
  },
  {
    path: "/services/engine-repairs",
    priority: 0.78,
    changeFrequency: "monthly",
  },
  {
    path: "/services/pre-purchase-inspections",
    priority: 0.76,
    changeFrequency: "monthly",
  },
  {
    path: "/services/fleet-servicing",
    priority: 0.74,
    changeFrequency: "monthly",
  },
  {
    path: "/gallery",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/reviews",
    priority: 0.6,
    changeFrequency: "monthly",
  },
  {
    path: "/contact",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/book-online",
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: "/privacy-policy",
    priority: 0.3,
    changeFrequency: "yearly",
  },
] as const;
