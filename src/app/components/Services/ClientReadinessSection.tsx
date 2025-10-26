export default function ClientReadinessSection() {
  return (
    <section className="relative bg-gradient-to-b from-white via-[#fafaf9] to-white py-24">
      <div className="container max-w-4xl mx-auto px-6 text-brandDark leading-relaxed">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
          What makes ready-to-invest clients say{" "}
          <span className="text-brand-accent font-semibold">"yes"?</span>
        </h2>

        <div className="space-y-6 text-[1.05rem] md:text-lg text-gray-700">
          <p>
            As a service provider, whether you're a <strong>coach, consultant, designer,
            photographer, therapist, stylist, marketer, legal or financial professional, OBM, or VA</strong>, 
            the market is crowded, and your potential clients are savvier than ever.
          </p>

          <ul className="list-disc list-outside pl-6 space-y-4">
            <li>
              They’re not comparing who talks the most about pain points or promises the biggest 
              transformation. Everyone says that.
            </li>
            <li>
              Ready-to-invest clients focus on the big picture. They evaluate your expertise, your 
              approach, whether you truly understand their needs, and whether you stand out in a sea 
              of similar options.
            </li>
          </ul>

          <p className="font-semibold text-brandDark mt-6">
            They ask:{" "}
            <span className="italic text-brandDark/90">
              Do you get me? Do you have a clear point of view? Can I trust you? Are you the best 
              person to support my long-term goals?
            </span>
          </p>

          <ul className="list-disc list-outside pl-6 space-y-4">
            <li>
              That’s where your messaging and copy matter. Every touchpoint—social media, website, 
              emails, and sales pages—either positions you as the expert or blends you into the 
              background.
            </li>
            <li>
              Shape your messaging for your ideal clients, the ones who are ready to invest.
            </li>
          </ul>

          <p className="font-semibold text-brandDark mt-8 border-t border-gray-200 pt-6">
            When your message speaks to their deeper desires and positions you as the go-to expert,{" "}
            <span className="text-brand-accent font-bold">
              you attract clients who value your expertise—not just price-shop.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
