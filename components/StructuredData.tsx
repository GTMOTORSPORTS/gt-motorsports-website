import { site } from "@/lib/site";

const businessWebsite = "https://www.gtmotorsports.com.au";

const serviceOffers = [
  "Logbook servicing",
  "General vehicle servicing",
  "Mercedes-Benz servicing",
  "Mercedes-Benz digital service record updates",
  "European vehicle servicing",
  "Vehicle diagnostics",
  "Brake repairs",
  "Suspension repairs",
  "Engine repairs",
  "Transmission servicing",
  "Air conditioning servicing",
  "Pre-purchase inspections",
  "Roadworthy inspection support",
];

export function StructuredData() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${site.url}/#business`,
    name: site.name,
    url: businessWebsite,
    telephone: site.phoneInternational,
    email: site.email,
    logo: `${businessWebsite}/gt-motorsports-logo.webp`,
    image: `${site.url}/workshop-hero.png`,
    priceRange: "Contact the workshop for pricing",
    description:
      "G&T Motorsports is a professional automotive workshop providing vehicle servicing, diagnostics, mechanical repairs, brake repairs, suspension repairs, air conditioning services, logbook servicing and European vehicle maintenance. We specialise in Mercedes-Benz servicing and can update eligible Mercedes-Benz digital service records online.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "47B Palladium Circuit",
      addressLocality: "Clyde North",
      addressRegion: "VIC",
      postalCode: "3978",
      addressCountry: "AU",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
    sameAs: [site.googleReviewsHref],
    areaServed: site.areas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    makesOffer: serviceOffers.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service,
      },
    })),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    publisher: {
      "@id": `${site.url}/#business`,
    },
    inLanguage: "en-AU",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
