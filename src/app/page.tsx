import Hero from "./components/Home/Hero";
import PositioningSection from "./components/Home/PositioningSection";
import AboutIntroSection from "./components/Home/AboutIntroSection";
import BeliefSection from "./components/Home/BeliefSection";
import ServicesOverviewSection from "./components/Home/ServicesOverviewSection";
import TestimonialSection from "./components/Home/TestimonialSection";
import FitSection from "./components/Home/FitSection";
import FinalCTASection from "./components/Home/FinalCTASection";

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
