import { Search } from "lucide-react";

export default function EvaluateFit() {
  return (
    <section id="evaluate-fit" className="bg-white">
      <div className="container pb-14 md:pb-20 text-brandDark">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-brandDark">
              <Search className="h-5 w-5 text-brandSecondary" />
              <p className="text-base md:text-lg font-semibold">Evaluate the fit</p>
            </div>
            <p className="text-base md:text-lg font-semibold text-brandSecondary">
              Does this feel like a fit for you?
            </p>
          </div>

          <p className="text-base md:text-lg leading-relaxed">
            This is for growing service-based businesses built on referrals,
            word of mouth, and solid client work, now ready to launch (or
            relaunch) a website that amplifies your success and attracts
            right-fit clients.
          </p>

          <p className="text-base md:text-lg leading-relaxed font-semibold">
            A few things to consider as you evaluate fit:
          </p>

          <p className="text-base md:text-lg font-semibold">If you feel:</p>
          <ul className="list-disc pl-5 space-y-3 text-base md:text-lg leading-relaxed">
            <li>
              Your business has evolved since you first launched, and your
              current website, or the lack of one, no longer reflects where you
              are now.
            </li>
            <li>
              You want a website that serves as your main marketing asset, a
              single place you can confidently share with everyone.
            </li>
            <li>
              Your current website feels unclear and lacks cohesion after
              multiple updates made at different stages of your business.
            </li>
            <li>
              You are operating fully in a founder role and want a trusted
              partner to take ownership of your website strategy and copy.
            </li>
            <li>
              You know your business needs a website, but you have not
              prioritized it yet because it is hard to know where to start.
            </li>
          </ul>

          <p className="text-base md:text-lg font-semibold">You are looking for:</p>
          <ul className="list-disc pl-5 space-y-3 text-base md:text-lg leading-relaxed">
            <li>
              Website messaging that focuses on your expertise as a service
              provider, supported by conversion-focused copy.
            </li>
            <li>
              Clear website structure with user experience in mind, so visitors
              know where to go next when they land on your site.
            </li>
            <li>Copy that helps visitors evaluate fit and take the next step.</li>
            <li>
              Fewer misaligned inquiries, leading to more relevant conversations
              with best-fit clients.
            </li>
            <li>A website you can confidently share with referrals.</li>
          </ul>

          <p className="text-base md:text-lg font-semibold">
            This is best suited for businesses at a stage where:
          </p>
          <ul className="list-disc pl-5 space-y-3 text-base md:text-lg leading-relaxed">
            <li>
              You run a primarily service-based business. Digital products or
              courses may exist alongside it, but services remain your core
              offering.
            </li>
            <li>
              You clearly understand your best-fit clients and who you want your
              website to attract.
            </li>
            <li>You have an established track record of client work.</li>
            <li>Your business has moved beyond the early stage.</li>
            <li>
              This project builds on work that has already been validated
              through referrals, word of mouth, and client results.
            </li>
          </ul>

          <p className="text-base md:text-lg leading-relaxed font-semibold text-brandSecondary">
            Finally...
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            You are comfortable being an early client to help me refine my
            processes, gather testimonials, and build case studies, in exchange
            for a reduced rate.
          </p>

          <p className="text-base md:text-lg font-semibold">This means you are open to:</p>
          <ul className="list-disc pl-5 space-y-3 text-base md:text-lg leading-relaxed">
            <li>Providing feedback on the experience and process.</li>
            <li>Sharing a testimonial after the project.</li>
            <li>
              Agreeing to let this project be used as a case study on my
              website or portfolio, including relevant metrics when available.
            </li>
          </ul>

          <p className="text-base md:text-lg leading-relaxed font-semibold">
            In return, you receive 50% off my regular website messaging and copywriting rate.
          </p>
        </div>
      </div>
    </section>
  );
}
