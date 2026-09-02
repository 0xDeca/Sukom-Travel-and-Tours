import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import DestinationsPreview from "@/components/home/DestinationsPreview";
import VisaExperience from "@/components/home/VisaExperience";
import ToursPreview from "@/components/home/ToursPreview";
import Trust from "@/components/home/Trust";
import Vision from "@/components/home/Vision";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <DestinationsPreview />
      <VisaExperience />
      <ToursPreview />
      <Trust />
      <Vision />
      <FinalCTA />
    </>
  );
}
