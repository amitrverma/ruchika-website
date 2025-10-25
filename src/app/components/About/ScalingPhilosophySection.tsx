export default function ScalingPhilosophySection() {
  return (
    <section className="relative bg-gradient-to-b from-white via-[#f9f9f7] to-white py-28">
      <div className="container max-w-4xl text-brandDark leading-relaxed px-6">
        {/* Opening line as a pull quote */}
        <h3 className="text-2xl md:text-3xl font-serif font-medium text-center md:text-left mb-10 md:mb-12 max-w-2xl">
          As you scale, it’s time to position yourself as{" "}
          <span className="text-brand-accent font-semibold">the expert you’re becoming.</span>
        </h3>

        <div className="space-y-6 text-lg md:text-[1.125rem]">
          <p>
            Your expertise grows. Your results are more compelling, and people want to work with you. 
            But your messaging hasn’t kept up. The right people aren’t seeing your work the way it deserves to be seen.
          </p>

          <p>
            At this stage, you’re not starting from scratch — your business isn’t just growing,
            it’s evolving. It’s gaining clarity. It’s building stronger relationships and better results.
            It’s becoming a place where the right partnerships naturally lead to the right results.
          </p>

          <p className="text-brandDark/90 italic border-l-4 border-brandSecondary pl-5 py-1">
            The next level isn’t just about more — it’s about better.
          </p>

          <p>
            You’re building your dream business, and if I can support that in any way through the power of messaging and words,
            I’d be honored.
          </p>
        </div>

        {/* Soft underline accent */}
        <div className="w-16 h-[2px] bg-brand-accent/40 mt-12 mx-auto md:mx-0" />
      </div>

      {/* Background aesthetic — quiet brand color halo */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-accent/10 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-brand-accent/15 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4" />
    </section>
  );
}
