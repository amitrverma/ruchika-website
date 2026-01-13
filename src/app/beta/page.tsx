import BetaIntroSection from "../components/beta/BetaIntroSection";
import MeetPartner from "../components/beta/MeetPartner";
import OfferingIntro from "../components/beta/OfferingIntro";
import EvaluateFit from "../components/beta/EvaluateFit";
import WhatsIncluded from "../components/beta/WhatsIncluded";
import Testimonials from "../components/beta/Testimonials";
import FAQ from "../components/beta/FAQ";
import FinalCTA from "../components/beta/FinalCTA";
import BetaInterestForm from "../components/beta/BetaInterestForm";
import FinalNote from "../components/beta/FinalNote";
import TableOfContents from "../components/beta/TableOfContents";
export default function BetaLandingPage() {
  const Divider = () => (
    <div className="w-full h-px bg-gradient-to-r from-transparent via-brandDark to-transparent" />
  );
  return (
    <main className="flex flex-col">
      <TableOfContents />
      <BetaIntroSection />
      <Divider />
      <MeetPartner />
      <Divider />
      <OfferingIntro />
      <Divider />
      <EvaluateFit />
      <Divider />
      <WhatsIncluded />
      <Divider />
      <Testimonials />
      <Divider />
      <FAQ />
      <Divider />
      <FinalCTA />
      <Divider />
      <FinalNote />
      <Divider />
      <BetaInterestForm />
    </main>
  );
}
