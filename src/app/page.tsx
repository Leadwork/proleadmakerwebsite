import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import ServicesPreview from "@/components/home/ServicesPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import WhoWeHelp from "@/components/home/WhoWeHelp";
import Process from "@/components/home/Process";
import FreeSampleOffer from "@/components/home/FreeSampleOffer";
import StatsSection from "@/components/home/StatsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import VideoSection from "@/components/shared/VideoSection";
import CalendlyBooking from "@/components/home/CalendlyBooking";
import MiniCTA from "@/components/home/MiniCTA";
import FAQ from "@/components/home/FAQ";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesPreview />
      <MiniCTA
        heading="See Our Data Quality Before You Order"
        sub="Get FREE Sample Leads delivered in 24 hours — no credit card required."
      />
      <WhyChooseUs />
      <WhoWeHelp />
      <Process />
      <FreeSampleOffer />
      <StatsSection />
      <TestimonialsSection />
      <MiniCTA
        heading="Start Growing Your Outreach Today"
        sub="Join 617+ businesses already running outbound with Pro Lead Maker's signal-based prospect data."
      />
      <VideoSection />
      <CalendlyBooking />
      <FAQ />
      <CTASection />
    </>
  );
}
