import { AboutPreview } from "@/components/AboutPreview";
import { AreasServiced } from "@/components/AreasServiced";
import { BookingCTA } from "@/components/BookingCTA";
import { CommonProblems } from "@/components/CommonProblems";
import { ContactDetails } from "@/components/ContactDetails";
import { GalleryPreview } from "@/components/GalleryPreview";
import { Hero } from "@/components/Hero";
import { HomeBooking } from "@/components/HomeBooking";
import { HomeFAQ } from "@/components/HomeFAQ";
import { MapSection } from "@/components/MapSection";
import { PageShell } from "@/components/PageShell";
import { Reviews } from "@/components/Reviews";
import { ServicePricing } from "@/components/ServicePricing";
import { ServicesGrid } from "@/components/ServicesGrid";
import { TrustPoints } from "@/components/TrustPoints";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <PageShell>
      <Hero />
      <TrustPoints />
      <AboutPreview />
      <ServicesGrid />
      <ServicePricing />
      <WhyChooseUs />
      <CommonProblems />
      <Reviews showPageLink />
      <AreasServiced />
      <HomeBooking />
      <MapSection />
      <GalleryPreview />
      <HomeFAQ />
      <BookingCTA />
      <ContactDetails />
    </PageShell>
  );
}
