import Image from "next/image";

export const metadata = {
  title: "About | Ruchika Copy Solutions",
  description:
    "Meet Ruchika — brand messaging and copywriting specialist helping service providers confidently market their expertise and attract right-fit clients.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Section 1 — Hero / Intro */}
      <section className="bg-[#f9f7f2] py-20">
        <div className="container grid md:grid-cols-[2fr_1fr] gap-10 items-center max-w-6xl">
          <div>
            <h2 className="text-3xl font-serif text-brandDark mb-4">
              Hi, I am Ruchika
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              I help scaling service providers with their{" "}
              <span className="font-semibold text-brandAccent">
                brand messaging and conversion-focused copy
              </span>{" "}
              — so they can confidently market their services, connect with their
              audience, and attract right-fit clients.
            </p>
          </div>

          <div className="relative w-[260px] h-[260px] mx-auto rounded-xl overflow-hidden shadow-md">
            <Image
              src="/assets/ruchika-about.png"
              alt="Ruchika Ratna - Copywriter"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Section 2 — Expert Positioning */}
      <section className="bg-white py-20">
        <div className="container max-w-3xl space-y-5 text-gray-700 leading-relaxed">
          <h3 className="text-xl font-serif text-brandDark">
            As you scale, it’s time to position yourself as the expert you’re becoming.
          </h3>
          <p>
            Your expertise grows. Your results are more compelling, and people want to work
            with you. But your messaging hasn’t kept up. The right people aren’t seeing your
            work the way it deserves to be seen.
          </p>
          <p>
            At this stage, you’re not starting from scratch — your business isn’t just
            growing, it’s evolving. It’s gaining clarity. It’s building stronger relationships
            and better results. It’s becoming a place where the right partnerships naturally
            lead to the right results.
          </p>
          <p>The next level isn’t just about more — it’s about better.</p>
          <p>
            You’re building your dream business, and if I can support that in any way through
            the power of messaging and words, I’d be honored.
          </p>
        </div>
      </section>

      {/* Section 3 — Founding Story */}
      <section className="bg-[#f9f7f2] py-20">
        <div className="container max-w-3xl space-y-5 text-gray-700 leading-relaxed">
          <h3 className="text-xl font-serif text-brandDark">
            Ruchika Copy Solutions believes in building a business that supports your life,
            not the other way around.
          </h3>
          <p>
            After my master’s in marketing, I spent 9 years working full-time in corporate.
            In 2021, I took a break. Like a long overdue chai.
          </p>
          <p>
            That pause helped me reflect — I had enjoyed the work, for sure, but I had lost
            connection with myself in the process. My identity had become tied to deliverables,
            not purpose.
          </p>
          <p>
            I focused on healing, moving my body, and writing again. For the first time in a
            long while, I felt at home.
          </p>
          <p>
            When I eventually returned to work, it wasn’t to the 9-to-5 grind. It was to the
            craft of writing — with more empathy, more clarity, and more purpose.
          </p>
          <p>
            That’s how <strong>Ruchika Copy Solutions</strong> was born: as a partnership built
            on reflection, authenticity, and the belief that good copy comes from genuine
            understanding.
          </p>
        </div>
      </section>

      {/* Section 4 — Approach */}
      <section className="bg-white py-20">
        <div className="container max-w-3xl space-y-5 text-gray-700 leading-relaxed">
          <h3 className="text-xl font-serif text-brandDark">
            And here’s what happened next…
          </h3>
          <p>
            I decided to invest in myself and upskill — because I can’t expect others to invest
            in me if I haven’t done that for myself first.
          </p>
          <p>
            I learned brand messaging and conversion copywriting from top experts in the field,
            including courses from <strong>Copyhackers</strong>,{" "}
            <strong>Conversion Copywriting School</strong>, and several mentoring programs.
          </p>
          <p>
            My overall approach blends <strong>clarity</strong>,{" "}
            <strong>psychology</strong>, and <strong>authentic tone of voice</strong> to craft
            copy that genuinely resonates with your right-fit clients.
          </p>
        </div>
      </section>

      {/* Section 5 — Purpose */}
      <section className="bg-[#c0654f] text-white py-20 text-center">
        <div className="container max-w-3xl">
          <h3 className="text-xl md:text-2xl font-semibold mb-6">
            My deeper purpose behind doing what I do (clear messaging and strategic copy)
          </h3>
          <p className="text-white/90 leading-relaxed mb-6">
            When service providers have the support they need, they create the impactful
            businesses they dreamed of. And in turn, they help their audiences find new
            awareness, community, and solutions.
          </p>
          <p className="text-white/90 leading-relaxed mb-8">
            They create wealth doing work they love. They live balanced, healthy lives.
            That’s the ripple effect I’m here for.
          </p>
          <a
            href="/services"
            className="inline-block bg-[#5eb1bf] text-white px-8 py-3 rounded-md font-medium tracking-wide hover:bg-brandDark transition-colors"
          >
            READY FOR MESSAGING & COPYWRITING SUPPORT
          </a>
        </div>
      </section>

      {/* Section 6 — Values */}
      <section className="bg-[#f9f7f2] py-20">
        <div className="container max-w-3xl text-gray-700 leading-relaxed">
          <h3 className="text-xl font-serif text-brandDark mb-8">
            The values that shape how I show up & guide our work together
          </h3>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-brandDark">Flexibility</h4>
              <p>
                I run my business in a way that supports my life — not the other way around.
                Hustling isn’t my forte. And I don’t expect you to be “always available” either.
                I respect your timing and mine. The work we create flows better that way.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-brandDark">Effort</h4>
              <p>
                I put 100% effort and intention into every project I take on. Quality means
                clarity, communication, and commitment to what we’re building together.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-brandDark">Collaboration</h4>
              <p>
                I believe good work gets better when we do it together. I don’t work in
                isolation. I ask for input and share ideas — because your insights matter as
                much as the strategy and the words.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-brandDark">Empathy</h4>
              <p>
                Your audience comes first. Always. I approach copy as a human talking to another
                human, not a brand shouting at a crowd.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-brandDark">Integrity</h4>
              <p>
                I walk my talk. I’m still learning, still growing — but always aligned with
                honesty, respect, and doing what feels true to both our brands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 — Closing CTA */}
      <section className="bg-white py-20 text-center">
        <div className="container max-w-2xl">
          <h3 className="text-xl md:text-2xl font-serif text-brandDark mb-3">
            I’m so glad you’re still here!
          </h3>
          <p className="text-gray-700 mb-8">
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
