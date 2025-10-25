export default function ClientReadinessSection() {
  return (
    <section className="relative bg-gradient-to-b from-white via-[#fafaf9] to-white py-28">

      <div className="relative container max-w-4xl px-6 text-brandDark leading-relaxed z-10">
        <h2 className="text-2xl md:text-3xl font-serif text-center mb-10">
          What makes ready-to-invest clients say{" "}
          <span className="text-brand-accent font-semibold">“yes”?</span>
        </h2>

        <div className="space-y-7 text-lg md:text-[1.125rem]">
          <p>
            As a service provider — whether you’re a coach, consultant, designer, or photographer —
            ready-to-invest clients aren’t just looking for a service; they’re looking for{" "}
            <strong>trust, clarity, and alignment.</strong> They want to know you truly understand
            them and your offer matches their needs.
          </p>

          <p className="border-l-4 border-brand-accent/40 pl-5 italic text-brandDark/90">
            They’re asking: “Does this person get me? Do they have a clear point of view? Can I trust
            them to deliver the results I’m after?”
          </p>

          <p>
            That’s where I come in. When your message speaks to their deeper desires and positions
            you as the go-to expert, your clients are ready to invest — not just price-shop.
          </p>
        </div>
      </div>
    </section>
  );
}
