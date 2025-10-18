import Hero from "./components/Hero";
import PositioningSection from "./components/PositioningSection";
import AboutIntroSection from "./components/AboutIntroSection";
import BeliefSection from "./components/BeliefSection";
import ServicesOverviewSection from "./components/ServicesOverviewSection";
import TestimonialSection from "./components/TestimonialSection";
import FitSection from "./components/FitSection";
import FinalCTASection from "./components/FinalCTASection";

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Hero />
      <PositioningSection />
      <AboutIntroSection />
      <BeliefSection />
      <ServicesOverviewSection />
      <TestimonialSection />
      <FitSection />
      <FinalCTASection  />
    </main>
  );
}
