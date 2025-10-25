export default function PurposeSection() {
  return (
     <section className="relative bg-brandPrimary py-30">

      <div className="container relative z-10 max-w-4xl px-6">
        <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-8 leading-snug">
          My deeper purpose behind doing what I do
          <br />
          <span className="text-brand-accent font-normal">
            (clear messaging and strategic copy)
          </span>
        </h3>

        <div className="max-w-2xl mx-auto text-brandDark/90 space-y-6 leading-relaxed">
          <p>
            When service providers have the support they need, they create the impactful
            businesses they dreamed of. And in turn, they help their audiences find new
            awareness, community, and solutions.
          </p>

          <p>
            They create wealth doing work they love. They live balanced, healthy lives.
            That’s the ripple effect I’m here for.
          </p>
        </div>

        {/* Ripple visual divider */}
        <div className="relative w-full flex justify-center my-12">
          <div className="w-24 h-[2px] bg-white/40 rounded-full" />
        </div>

        <a
          href="/services"
          className="inline-block bg-brandSecondary text-white px-8 py-3 rounded-full font-medium tracking-wide hover:bg-brandDark transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
        >
          READY FOR MESSAGING & COPYWRITING SUPPORT
        </a>
      </div>
    </section>
  );
}
