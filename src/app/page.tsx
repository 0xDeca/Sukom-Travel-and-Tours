import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import DestinationsPreview from "@/components/home/DestinationsPreview";
import StatsCounter from "@/components/home/StatsCounter";
import VisaExperience from "@/components/home/VisaExperience";
import ToursPreview from "@/components/home/ToursPreview";
import Testimonials from "@/components/home/Testimonials";
import Trust from "@/components/home/Trust";
import Newsletter from "@/components/home/Newsletter";
import Vision from "@/components/home/Vision";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <DestinationsPreview />
      <StatsCounter />
      <VisaExperience />
      <ToursPreview />
      <Testimonials />
      <Trust />
      <Newsletter />
      <Vision />
      <FinalCTA />
    </>
  );
}
