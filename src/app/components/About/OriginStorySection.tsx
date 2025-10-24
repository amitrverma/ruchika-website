export default function OriginStorySection() {
  return (
    <section className="relative bg-brand-accent/10 py-28">
      {/* Background motif */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-brand-accent/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-accent/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container relative z-10 max-w-4xl px-6 text-brand-dark leading-relaxed">
        <h3 className="text-2xl md:text-3xl font-serif mb-10 text-center md:text-left">
          Ruchika Copy Solutions believes in building a business that supports your life —{" "}
          <span className="text-brand-accent font-semibold">not the other way around.</span>
        </h3>

        <div className="space-y-6 text-lg md:text-[1.125rem] max-w-3xl">
          <p>
            After my master’s in marketing, I spent nine years working full-time in corporate.
            In 2021, I took a break. Like a long-overdue chai.
          </p>

          <p>
            That pause helped me reflect — I had enjoyed the work, but I’d lost connection with
            myself in the process. My identity had become tied to deliverables, not purpose.
          </p>

          <p>
            I focused on healing, moving my body, and writing again. For the first time in a
            long while, I felt at home.
          </p>

          <p>
            When I eventually returned to work, it wasn’t to the 9-to-5 grind. It was to the
            craft of writing — with more empathy, more clarity, and more purpose.
          </p>

          <p className="border-l-4 border-brand-accent/50 pl-5 italic text-brand-dark/90">
            That’s how <strong>Ruchika Copy Solutions</strong> was born — a partnership built on
            reflection, authenticity, and the belief that good copy comes from genuine understanding.
          </p>
        </div>

        <div className="mt-12 w-20 h-[2px] bg-brand-accent/40 mx-auto md:mx-0" />
      </div>
    </section>
  );
}
