import ValuesSection from "../../components/About/ValuesSection";
import AboutIntroShort from "../../components/About/AboutIntroShort";
import ScalingPhilosophySection from "../../components/About/ScalingPhilosophySection";
import OriginStorySection from "../../components/About/OriginStorySection";
import NextChapterSection from "../../components/About/NextChapterSection";
import PurposeSection from "../../components/About/PurposeSection";
import { CTAButton } from "../../components/ui/CTAButton";

export const metadata = {
  title: "About | Ruchika Copy Solutions",
  description:
    "Meet Ruchika's brand messaging and copywriting specialist helping service providers confidently market their expertise and attract right-fit clients.",
};

export default function AboutPage() {
  const Divider = () => (
    <div className="w-full h-px bg-gradient-to-r from-transparent via-brandDark to-transparent" />
  );
  return (
    <main>
      {/* Section 1 ƒ?" Hero / Intro */}
      <AboutIntroShort />
      <Divider />
      {/* Section 2 ƒ?" Expert Positioning */}
      <ScalingPhilosophySection />
      <Divider />
      {/* Section 3 ƒ?" Founding Story */}
      <OriginStorySection />
      <Divider />
      {/* Section 4 ƒ?" Approach */}
      <NextChapterSection />
      <Divider />
      {/* Section 5 ƒ?" Purpose */}
      <PurposeSection />
      <Divider />
      {/* Section 6 ƒ?" Values */}
      <ValuesSection />
      <div className="w-full h-px bg-gradient-to-r from-transparent via-brandDark to-transparent" />
      {/* Section 7 ƒ?" Closing CTA */}
      <section className="bg-brandPrimary py-20 text-center">
        <div className="container max-w-2xl">
          <h3 className="text-xl md:text-2xl font-serif text-brandDark mb-3">
            I&apos;m so glad you&apos;re still here!
          </h3>
          <p className="text-brandDark mb-8">
            Maybe it&apos;s a sign from the universe :) <br />
            In that case, here&apos;s how we can work together
          </p>

          <CTAButton href="/services" size="md">
            EXPLORE MY COPYWRITING SERVICES IN DETAIL
          </CTAButton>
        </div>
      </section>
      <Divider />
    </main>
  );
}
