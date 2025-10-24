import Image from "next/image";
import Link from "next/link";
import ServicesOverview from "../components/Services/ServicesOverview";
import FAQSection from "../components/Services/FAQection";
import ProcessSection from "../components/Services/ProcessSection";
import GuaranteeSection from "../components/Services/GuaranteeSection";
import TestimonialSection from "../components/Home/TestimonialSection";

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
      <section className="relative bg-gray-100">
        <Image
          src="/services-hero.jpg" // replace with your hero image
          alt="Laptop and workspace"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="relative container max-w-3xl py-32 text-center">
          <h1 className="text-3xl md:text-4xl font-serif text-brandDark mb-4">
            1:1 Copywriting Services to Launch, Rebrand, or Optimize
          </h1>
          <p className="text-lg text-brandDark mb-8">
            Everything you need to position yourself as an expert to attract the right-fit clients
            who are ready to invest.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#c0654f] text-white px-8 py-3 rounded-md font-medium tracking-wide hover:bg-brandDark transition-colors"
          >
            LET’S TALK
          </Link>
        </div>
      </section>

      {/* ============================= */}
      {/*  CLIENT READINESS SECTION */}
      {/* ============================= */}
      <section className="bg-white py-20">
        <div className="container max-w-3xl space-y-6 text-brandDark leading-relaxed">
          <h2 className="text-2xl font-serif text-brandDark text-center">
            What makes ready-to-invest clients say “yes”?
          </h2>
          <p>
            As a service provider — whether you’re a coach, consultant, designer, or photographer —
            ready-to-invest clients aren’t just looking for a service; they’re looking for trust,
            clarity, and alignment. They want to know you truly understand them and your offer
            matches their needs.
          </p>
          <p>
            They’re asking, “Does this person get me? Do they have a clear point of view? Can I
            trust them to deliver the results I’m after?”
          </p>
          <p>
            That’s where I come in. When your message speaks to their deeper desires and positions
            you as the go-to expert, your clients are ready to invest — not just price-shop.
          </p>
        </div>
      </section>

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
