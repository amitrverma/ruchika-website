import Hero from "./components/Home/Hero";
import PositioningSection from "./components/Home/PositioningSection";
import MessagingSection from "./components/Home/MessagingSection";
import AboutIntroSection from "./components/Home/AboutIntroSection";
import ProcessHighlightSection from "./components/Home/ProcessHighlightSection";
import BeliefSection from "./components/Home/BeliefSection";
import ServicesOverviewSection from "./components/Home/ServicesOverviewSection";
import TestimonialSection from "./components/Home/TestimonialSection";
import FitSection from "./components/Home/FitSection";
import FinalCTASection from "./components/Home/FinalCTASection";

export default function HomePage() {
  const Divider = () => (
    <div className="w-full h-px bg-gradient-to-r from-transparent via-brandDark to-transparent" />
  );

  return (
    <main className="flex flex-col">
      <Hero />
      <Divider />
      <PositioningSection />
      <Divider />
      <MessagingSection />
      <Divider />
      <AboutIntroSection />
      <Divider />
      <ProcessHighlightSection />
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
      <Divider />
    </main>
  );
}
