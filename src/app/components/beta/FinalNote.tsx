import { Heart } from "lucide-react";

export default function FinalNote() {
  return (
    <section id="final-note" className="bg-brandPrimary">
      <div className="container py-14 md:py-20 text-brandDark">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-brandSecondary" />
            <h2 className="text-2xl md:text-3xl font-serif">A final note</h2>
          </div>

          <p className="text-base md:text-lg leading-relaxed">
            I know investing in your website is not a small decision.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            For many service providers, a website sits at the intersection of
            identity, growth, and visibility.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            It is not just about pages or words. It is about how clearly your
            work, thinking, and standards come across when someone is deciding
            whether to trust you.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            This beta offering exists because I want to do this work
            thoughtfully, with businesses that are clear about where they are
            headed and want their website to reflect that direction.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            If this page resonated, it likely means you are already thinking
            seriously about how your website should support your next stage, not
            just exist online.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            If it feels aligned, I would be glad to explore working together.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            And if it does not feel like the right timing yet, that clarity
            matters too.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            Either way, I appreciate you taking the time to read through this.
          </p>

          <p className="text-base md:text-lg leading-relaxed">Ruchika</p>
        </div>
      </div>
    </section>
  );
}
