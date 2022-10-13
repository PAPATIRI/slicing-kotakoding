import ContactSection from "../components/ContactSection";
import FeatureSection from "../components/FeatureSection";
import GetHelpSection from "../components/GetHelpSection";
import Hero from "../components/HeroSection";
import InterviewedBySection from "../components/InterviewedBySection";
import ReasonSection from "../components/ReasonSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ReasonSection />
      <FeatureSection />
      <ContactSection />
      <GetHelpSection />
      <InterviewedBySection />
    </>
  );
}
