import Image from "next/image";
import ValuesSection from "../components/About/ValuesSection"
import AboutIntroShort from "../components/About/AboutIntroShort";
import ScalingPhilosophySection from "../components/About/ScalingPhilosophySection";
import OriginStorySection from "../components/About/OriginStorySection";  
import NextChapterSection from "../components/About/NextChapterSection";
import PurposeSection from "../components/About/PurposeSection";

export const metadata = {
  title: "About | Ruchika Copy Solutions",
  description:
    "Meet Ruchika — brand messaging and copywriting specialist helping service providers confidently market their expertise and attract right-fit clients.",
};

export default function AboutPage() {
    const Divider = () => (
    <div className="w-full h-px bg-gradient-to-r from-transparent via-brandDark to-transparent" />
  );
  return (
    <main>
      {/* Section 1 — Hero / Intro */}
      <AboutIntroShort />
      <Divider />
      {/* Section 2 — Expert Positioning */}
      <ScalingPhilosophySection />
    <Divider />
      {/* Section 3 — Founding Story */}
      <OriginStorySection />
    <Divider />
      {/* Section 4 — Approach */}
      <NextChapterSection />
<Divider />
      {/* Section 5 — Purpose */}
      <PurposeSection />
<Divider />
      {/* Section 6 — Values */}
      <ValuesSection />
<div className="w-full h-px bg-gradient-to-r from-transparent via-brandDark to-transparent" />
      {/* Section 7 — Closing CTA */}
      <section className="bg-brandSecondary/50 py-20 text-center">
        <div className="container max-w-2xl">
          <h3 className="text-xl md:text-2xl font-serif text-brandDark mb-3">
            I’m so glad you’re still here!
          </h3>
          <p className="text-brandDark mb-8">
            Maybe it’s a sign from the universe :) <br />
            In that case, here’s how we can work together next.
          </p>

          <a
            href="/services"
            className="inline-block bg-[#c0654f] text-white px-8 py-3 rounded-md font-medium tracking-wide hover:bg-brandDark transition-colors"
          >
            EXPLORE MY COPYWRITING SERVICES IN DETAIL
          </a>
        </div>
      </section>
    </main>
  );
}
