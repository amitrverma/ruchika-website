import Image from "next/image";
import Link from "next/link";

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
          <p className="text-lg text-gray-700 mb-8">
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
        <div className="container max-w-3xl space-y-6 text-gray-700 leading-relaxed">
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
      <section className="bg-gray-50 py-20">
        <div className="container max-w-4xl grid md:grid-cols-[1fr_2fr] gap-8 items-center">
          <div className="relative w-[180px] h-[180px] mx-auto rounded-md overflow-hidden shadow-sm">
            <Image
              src="/testimonial-green-trinkets.png"
              alt="Green Trinkets testimonial"
              fill
              className="object-contain"
            />
          </div>

          <div>
            <p className="text-lg italic text-gray-700 mb-4">
              “Her knowledge, professionalism, and commitment to delivering exceptional results make
              her an invaluable asset for any business.”
            </p>
            <p className="text-gray-700 leading-relaxed">
              Throughout our collaboration, Ruchika has showed exceptional understanding of our
              business goals and target audience. Her deep research and clarity helped us refine our
              brand voice and strengthen our messaging foundation.”
            </p>
            <p className="mt-4 font-semibold text-brandDark">
              — Shatakshi, Founder, Green Trinkets
            </p>
          </div>
        </div>
      </section>

      {/* ============================= */}
      {/*  SERVICES OVERVIEW */}
      {/* ============================= */}
      <section className="bg-white py-20">
        <div className="container max-w-4xl text-gray-700">
          <h2 className="text-2xl font-serif text-center text-brandDark mb-12">
            Here’s how I can help you attract clients who value your thinking
            <br />
            <span className="text-base font-normal">(not just your deliverables)</span>
          </h2>

          {/* Brand Messaging */}
          <div className="mb-12">
            <h3 className="font-semibold text-lg text-brandDark mb-2">
              Brand Messaging & Tone of Voice Guide
            </h3>
            <p>
              This is where we get clear on who you are, who you serve, and how you communicate —
              so all your copy and content stays cohesive and strategic.
            </p>
            <ul className="list-disc list-inside mt-3 mb-5">
              <li>Brand voice guide</li>
              <li>Audience insights</li>
              <li>Messaging pillars</li>
              <li>Word phrases and examples</li>
              <li>Digital booklet (delivered in Canva)</li>
            </ul>
            <Link
              href="/contact"
              className="inline-block bg-[#c0654f] text-white px-6 py-2 rounded-md hover:bg-brandDark transition-colors"
            >
              INQUIRE HERE
            </Link>
          </div>

          {/* Website Copywriting */}
          <div className="mb-12">
            <h3 className="font-semibold text-lg text-brandDark mb-2">
              Website Copywriting
            </h3>
            <p>
              Strategic, conversion-focused website copy that positions you as the expert,
              speaks directly to your ideal client, and turns curious visitors into confident buyers.
            </p>
            <ul className="list-disc list-inside mt-3 mb-5">
              <li>Home, About, and Services pages</li>
              <li>SEO best practices</li>
              <li>Alignment with web design for flow and conversion</li>
            </ul>
            <Link
              href="/contact"
              className="inline-block bg-[#c0654f] text-white px-6 py-2 rounded-md hover:bg-brandDark transition-colors"
            >
              INQUIRE HERE
            </Link>
          </div>

          {/* Email Copywriting */}
          <div className="mb-12">
            <h3 className="font-semibold text-lg text-brandDark mb-2">
              Email Copywriting
            </h3>
            <p>
              Sequences that nurture your audience, warm up leads, and drive action — whether that’s
              booking calls, buying offers, or staying engaged with your work.
            </p>
            <ul className="list-disc list-inside mt-3 mb-5">
              <li>Welcome sequences</li>
              <li>Launch campaigns</li>
              <li>Newsletters</li>
            </ul>
            <Link
              href="/contact"
              className="inline-block bg-[#c0654f] text-white px-6 py-2 rounded-md hover:bg-brandDark transition-colors"
            >
              INQUIRE HERE
            </Link>
          </div>

          {/* Sales Page Copywriting */}
          <div className="mb-12">
            <h3 className="font-semibold text-lg text-brandDark mb-2">
              Sales Page Copywriting
            </h3>
            <p>
              Research-backed, long-form sales page copy that speaks to your audience’s deeper
              desires, answers their objections, and positions your offer as the clear solution.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#c0654f] text-white px-6 py-2 rounded-md hover:bg-brandDark transition-colors"
            >
              INQUIRE HERE
            </Link>
          </div>

          {/* Custom Needs */}
          <p className="text-sm text-gray-600 mt-10">
            Need something different? Every project is customized. Let’s talk about what’s best for
            your business.{" "}
            <Link
              href="/contact"
              className="text-brandAccent underline hover:text-brandDark"
            >
              Reach out here
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ============================= */}
      {/*  PROCESS SECTION */}
      {/* ============================= */}
      <section className="bg-gray-50 py-20">
        <div className="container max-w-3xl text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-serif text-center text-brandDark mb-12">
            This is how I approach all my copywriting projects
          </h2>

          {[
            {
              phase: "Phase 1: Research",
              desc: "We start with a brand questionnaire and discovery doc to uncover your business goals, audience, and tone. I deep-dive into understanding your audience and what will make them say 'yes' to your offer.",
            },
            {
              phase: "Phase 2: Analyzing & Planning",
              desc: "Here, I analyze everything uncovered in research to refine your messaging. This is where clarity starts taking shape.",
            },
            {
              phase: "Phase 3: Conversion-Focused Copywriting & Editing",
              desc: "I combine strategy and frameworks to craft copy that feels authentic and drives action. You’ll receive the first draft for feedback and refinement.",
            },
            {
              phase: "Phase 4: Delivery & Review",
              desc: "You’ll receive the final copy and we’ll review it together on a call. I also provide support for two weeks after delivery for small adjustments or clarifications.",
            },
          ].map((p, i) => (
            <div key={i} className="mb-8">
              <h4 className="font-semibold text-brandDark mb-1">{p.phase}</h4>
              <p>{p.desc}</p>
            </div>
          ))}

          <p className="mt-8 font-medium text-brandDark">
            I don’t just write copy — I partner with you to create words that work hard for your
            business.
          </p>
        </div>
      </section>

      {/* ============================= */}
      {/*  GUARANTEE SECTION */}
      {/* ============================= */}
      <section className="bg-[#f9f7f2] py-20">
        <div className="container max-w-3xl text-gray-700 leading-relaxed text-center">
          <h2 className="text-2xl font-serif text-brandDark mb-8">
            The Copywriter-Who-Really-Cares Guarantee
          </h2>

          <div className="space-y-6 text-left">
            <div>
              <h4 className="font-semibold text-brandDark">Post-Delivery Support</h4>
              <p>
                My support doesn’t stop at delivery. You’ll receive two weeks of post-delivery
                support for any tuning or feedback needed.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-brandDark">A Partner Who Cares</h4>
              <p>
                I treat your success as my own. This is a partnership — not just a project.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-brandDark">On-Time Delivery, Every Time</h4>
              <p>
                Your deadlines matter. I honor them — unless we both agree to an adjustment.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-brandDark">Clear Communication, Always</h4>
              <p>
                You’ll always know what’s happening. No confusion, no waiting in the dark.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-block mt-10 bg-[#c0654f] text-white px-8 py-3 rounded-md font-medium tracking-wide hover:bg-brandDark transition-colors"
          >
            LET’S CONNECT TODAY
          </Link>
        </div>
      </section>

      {/* ============================= */}
      {/*  FAQ SECTION */}
      {/* ============================= */}
      <section className="bg-white py-20">
        <div className="container max-w-3xl text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-serif text-brandDark text-center mb-10">
            Like to know a little more before you say hi? I get it.
            <br />
            <span className="text-base font-normal">
              I’ve answered your FAQs below ↓
            </span>
          </h2>

          {[
            {
              q: "How much do your services cost?",
              a: "Every project is unique, so pricing depends on scope, deliverables, and timeline. After our discovery call, I’ll send you a detailed proposal with transparent pricing tailored to your goals.",
            },
            {
              q: "How long does a typical project take?",
              a: "It depends on scope, but a Brand Messaging project typically takes 3–4 weeks; Website Copy projects take 4–6 weeks depending on complexity and revisions.",
            },
            {
              q: "Do you work with clients outside India?",
              a: "Yes! I work with clients globally via email and Zoom. Time zones are never an issue — clarity and communication make collaboration smooth.",
            },
            {
              q: "Do you offer payment plans?",
              a: "Yes, payment is split 50% upfront and 50% on completion. Larger retainers or long-term projects can have structured milestone payments.",
            },
            {
              q: "Which service should I start with?",
              a: "If you’re unsure, start with Brand Messaging. It sets the foundation for every other copy asset — website, email, or sales page.",
            },
            {
              q: "What if I need revisions?",
              a: "All projects include up to two rounds of revisions to ensure your copy feels right. My goal is always to make sure the message feels authentically yours.",
            },
          ].map((item, i) => (
            <div key={i} className="mb-8">
              <h4 className="font-semibold text-brandDark mb-1">{item.q}</h4>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
