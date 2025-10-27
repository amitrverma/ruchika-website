export default function PurposeSection() {
  return (
     <section className="relative bg-brandSecondary py-30">

      <div className="container relative z-10 max-w-4xl px-6">
        <h3 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-8 leading-snug">
          My deeper purpose behind doing what I do
          <br />
          <span className="text-brandSecondary font-normal">
            (clear messaging and strategic copy)
          </span>
        </h3>

        <div className="mx-auto text-white/90 space-y-6 text-lg md:text-[1.125rem] eading-relaxed">
          <p>
            When service providers have the support they need, they create the impactful
            businesses they dreamed of. And in turn, they help their audiences find new
            awareness, community, and solutions.
          </p>

          <p className="font-bold">
            They create wealth doing work they love. They live balanced, healthy lives.
</p>
<p>

            That’s the ripple effect I’m here for.
          </p>
        </div>

        {/* Ripple visual divider */}
        <div className="relative w-full flex justify-center my-12">
          <div className="w-24 h-[2px] bg-white/40 rounded-full" />
        </div>

        {/* Centered button */}
        <div className="flex justify-center">
          <a
            href="/services"
            className="inline-block bg-brandDark text-white px-8 py-3 rounded-full font-medium tracking-wide hover:bg-brandDark/90 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          >
            READY FOR MESSAGING & COPYWRITING SUPPORT
          </a>
        </div>
      </div>
    </section>
  );
}
