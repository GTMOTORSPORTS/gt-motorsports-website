import { GalleryPreview } from "@/components/GalleryPreview";
import { Hero } from "@/components/Hero";
import { HomeBooking } from "@/components/HomeBooking";
import { HomeFAQ } from "@/components/HomeFAQ";
import { PageShell } from "@/components/PageShell";
import { Reviews } from "@/components/Reviews";
import { ServicePricing } from "@/components/ServicePricing";
import { ServicesGrid } from "@/components/ServicesGrid";
import { WhyChooseUs } from "@/components/WhyChooseUs";
export default function Home() {
  return (
    <PageShell>
      <Hero />
      <ServicesGrid />
      <ServicePricing />
      <WhyChooseUs />
      <Reviews compact />
      <GalleryPreview />
      <HomeFAQ />
      <HomeBooking />
    </PageShell>
  );
}
