import Image from "next/image";
import Link from "next/link";
import ServicesOverview from "../components/Services/ServicesOverview";
import FAQSection from "../components/Services/FAQection";
import ProcessSection from "../components/Services/ProcessSection";
import GuaranteeSection from "../components/Services/GuaranteeSection";
import TestimonialSection from "../components/Home/TestimonialSection";
import ClientReadinessSection from "../components/Services/ClientReadinessSection";
import ServicesHero from "../components/Services/ServicesHero";

export const metadata = {
  title: "Services | Ruchika Copy Solutions",
  description:
    "Explore Ruchika’s copywriting and brand messaging services — for service providers ready to attract right-fit clients with clarity, confidence, and authority.",
};

export default function ServicesPage() {
  return (
    <main>
      {/* ============================= */}
      {/*  HERO SECTION */}
      {/* ============================= */}
      <ServicesHero />

      {/* ============================= */}
      {/*  CLIENT READINESS SECTION */}
      {/* ============================= */}
      <ClientReadinessSection />

      {/* ============================= */}
      {/*  TESTIMONIAL SECTION */}
      {/* ============================= */}
      <TestimonialSection />

      {/* ============================= */}
      {/*  SERVICES OVERVIEW */}
      {/* ============================= */}
      <ServicesOverview />

      {/* ============================= */}
      {/*  PROCESS SECTION */}
      {/* ============================= */}
      <ProcessSection />

      {/* ============================= */}
      {/*  GUARANTEE SECTION */}
      {/* ============================= */}
      <GuaranteeSection />

      {/* ============================= */}
      {/*  FAQ SECTION */}
      {/* ============================= */}
      <FAQSection />
    </main>
  );
}
