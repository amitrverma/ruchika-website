import Hero from "./components/Home/Hero";
import PositioningSection from "./components/Home/PositioningSection";
import AboutIntroSection from "./components/Home/AboutIntroSection";
import BeliefSection from "./components/Home/BeliefSection";
import ServicesOverviewSection from "./components/Home/ServicesOverviewSection";
import TestimonialSection from "./components/Home/TestimonialSection";
import FitSection from "./components/Home/FitSection";
import FinalCTASection from "./components/Home/FinalCTASection";

export default function HomePage() {
  const Divider = () => (
    <div className="w-full h-px bg-gradient-to-r from-transparent via-brandDark to-transparent my-16 md:my-24" />
  );

  return (
    <main className="flex flex-col">
      <Hero />
      <Divider />
      <PositioningSection />
      <Divider />
      <AboutIntroSection />
      <Divider />
      <BeliefSection />
      <Divider />
      <ServicesOverviewSection />
      <Divider />
      <TestimonialSection />
      <Divider />
      <FitSection />
      <Divider />
      <FinalCTASection />
    </main>
  );
}
