"use client";

import { HelpCircle } from "lucide-react";

export default function FAQ() {
  const openModal = () => {
    window.dispatchEvent(new Event("open-beta-interest-form"));
  };

  return (
    <section id="faqs" className="bg-brandPrimary">
      <div className="container py-14 md:py-20 text-brandDark">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-brandSecondary" />
            <h2 className="text-2xl md:text-3xl font-serif">FAQs</h2>
          </div>

          <p className="text-base md:text-lg leading-relaxed text-brandSecondary font-semibold">
            A few important questions you may have before you express interest:
          </p>

          <div className="space-y-6">
            <details className="group border-b border-brandDark/30 pb-6">
              <summary className="cursor-pointer text-lg md:text-xl font-semibold text-brandDark">
                Should I invest in a new website right now, even if this is my first one?
              </summary>
              <div className="mt-4 space-y-3 text-base md:text-lg leading-relaxed">
                <p>
                  For a service provider, a website makes sense when your business has enough
                  clarity for people to evaluate fit and take the next step.
                </p>
                <p>This is usually a good time if one or more of these are true:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>You are clear on what you offer and who you want to work with.</li>
                  <li>You are already getting interest through referrals or word of mouth.</li>
                  <li>You want a single place you can confidently send people to understand your work.</li>
                  <li>Your current website, or the absence of one, does not reflect the level you are operating at.</li>
                  <li>Clients have mentioned that your online presence does not reflect the work you deliver.</li>
                </ul>
                <p>
                  For businesses with an existing site, this often shows up as outdated messaging,
                  unclear structure, or a site that no longer supports your pricing or positioning.
                </p>
                <p>
                  For a first website, the goal is different but just as important. It is not about
                  doing more marketing. It is about giving interested people a clear, accurate
                  picture of your work so they can decide whether to move forward.
                </p>
                <p>
                  Even when clients find you through referrals or word of mouth, they still visit
                  your website at a decision point. When they land there, they are asking themselves
                  one question: "Is this right for me?"
                </p>
                <p>Your website either helps them feel confident about that decision or creates hesitation.</p>
              </div>
            </details>

            <details className="group border-b border-brandDark/30 pb-6">
              <summary className="cursor-pointer text-lg md:text-xl font-semibold text-brandDark">
                What if my business might change or evolve again?
              </summary>
              <div className="mt-4 space-y-3 text-base md:text-lg leading-relaxed">
                <p>That is normal. Most service businesses evolve over time.</p>
                <p>
                  A strategic website is not about locking yourself into something permanent. It is
                  about clearly reflecting where your business is now, so it can support
                  conversations, referrals, and decisions today.
                </p>
                <p>There will never be a "perfect" time to get a new website.</p>
                <p>
                  But to answer you honestly, if your direction is broadly clear, even if details
                  continue to evolve, that is usually enough to move forward.
                </p>
                <p>
                  If timing is what is holding you back, let's discuss it. Sometimes the hesitation
                  is about waiting for certainty that will not arrive, and sometimes waiting is the
                  right call. We will figure that out together.
                </p>
              </div>
            </details>

            <details className="group border-b border-brandDark/30 pb-6">
              <summary className="cursor-pointer text-lg md:text-xl font-semibold text-brandDark">
                What are the advantages of being a beta client?
              </summary>
              <div className="mt-4 space-y-3 text-base md:text-lg leading-relaxed">
                <p>The primary advantage is the reduced rate.</p>
                <p>
                  As a beta client, you receive the same level of strategic thinking and website
                  copywriting, offered at 50% off my standard website messaging and copywriting rate.
                </p>
                <p>For beta clients, I work with one client at a time, so the work remains focused and not rushed.</p>
              </div>
            </details>

            <details className="group border-b border-brandDark/30 pb-6">
              <summary className="cursor-pointer text-lg md:text-xl font-semibold text-brandDark">
                What is the process after I secure my spot and become a beta client?
              </summary>
              <div className="mt-4 space-y-3 text-base md:text-lg leading-relaxed">
                <div>
                  <p className="font-semibold">Strategy call</p>
                  <p>
                    Once we decide to work together, I will share a questionnaire to understand your
                    business, ideal client, goals, and voice. We will walk through this together during
                    the strategy call.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Website structure and messaging direction</p>
                  <p>
                    Based on the strategy call, I will map the high-level website structure and messaging
                    direction so we are aligned before moving forward.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Audience research</p>
                  <p>
                    Audience research is done through client surveys, forum and group mining, and any
                    existing client feedback you already have.
                  </p>
                  <p>Client interviews are optional and available for an additional fee.</p>
                </div>
                <div>
                  <p className="font-semibold">Copywriting</p>
                  <p>
                    Website copy is drafted and refined based on the agreed structure, messaging, and research.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Wireframes</p>
                  <p>
                    Once the copy is approved, wireframes are created in Canva. I will collaborate with your
                    designer to support implementation.
                  </p>
                </div>
              </div>
            </details>

            <details className="group border-b border-brandDark/30 pb-6">
              <summary className="cursor-pointer text-lg md:text-xl font-semibold text-brandDark">
                What does the timeline look like?
              </summary>
              <div className="mt-4 space-y-3 text-base md:text-lg leading-relaxed">
                <p>
                  The typical timeline is around eight weeks from the strategy session to final copy and wireframes.
                </p>
                <p>This can vary based on:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Timely feedback</li>
                  <li>Availability for surveys or reviews</li>
                  <li>Scope of the website</li>
                </ul>
                <p>Exact timelines are confirmed during our call.</p>
              </div>
            </details>

            <details className="group border-b border-brandDark/30 pb-6">
              <summary className="cursor-pointer text-lg md:text-xl font-semibold text-brandDark">
                When would we begin working together?
              </summary>
              <div className="mt-4 space-y-3 text-base md:text-lg leading-relaxed">
                <p>Start dates depend on availability and alignment.</p>
                <p>This beta offering is intended for the first half of 2026 website launches.</p>
                <p>Once we connect and confirm fit, we will lock in a start date together.</p>
              </div>
            </details>

            <details className="group border-b border-brandDark/30 pb-6">
              <summary className="cursor-pointer text-lg md:text-xl font-semibold text-brandDark">
                Does filling out the form guarantee me a beta spot? Does it mean I am committing to anything?
              </summary>
              <div className="mt-4 space-y-3 text-base md:text-lg leading-relaxed">
                <p>No.</p>
                <p>Filling out the form simply starts the conversation.</p>
                <p>It does not guarantee a beta spot, and it does not commit you to moving forward.</p>
                <p>We will speak first and decide together.</p>
              </div>
            </details>

            <details className="group border-b border-brandDark/30 pb-6">
              <summary className="cursor-pointer text-lg md:text-xl font-semibold text-brandDark">
                What are the payment options?
              </summary>
              <div className="mt-4 space-y-3 text-base md:text-lg leading-relaxed">
                <p>Payment is split into two parts:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>50% upfront to secure your spot</li>
                  <li>50% after final copy approval, before wireframing begins</li>
                </ul>
              </div>
            </details>

            <details className="group border-b border-brandDark/30 pb-6">
              <summary className="cursor-pointer text-lg md:text-xl font-semibold text-brandDark">
                What will you need from me during the process?
              </summary>
              <div className="mt-4 space-y-3 text-base md:text-lg leading-relaxed">
                <p>You will need to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Provide your questionnaire responses</li>
                  <li>Be available for the strategy session</li>
                  <li>Share context about your business, offers, and audience</li>
                  <li>Support audience research by sharing access to past client feedback or sending surveys</li>
                  <li>Provide feedback at key stages and be available for virtual check-ins to keep the work aligned</li>
                </ul>
              </div>
            </details>

            <details className="group border-b border-brandDark/30 pb-6">
              <summary className="cursor-pointer text-lg md:text-xl font-semibold text-brandDark">
                Are client interviews required?
              </summary>
              <div className="mt-4 space-y-3 text-base md:text-lg leading-relaxed">
                <p>No.</p>
                <p>Audience research is primarily done through surveys.</p>
                <p>Client interviews are optional and can be added if needed, scoped separately.</p>
              </div>
            </details>

            <details className="group border-b border-brandDark/30 pb-6">
              <summary className="cursor-pointer text-lg md:text-xl font-semibold text-brandDark">
                Can this still work if I am a writer or marketer myself?
              </summary>
              <div className="mt-4 space-y-3 text-base md:text-lg leading-relaxed">
                <p>Yes, of course.</p>
                <p>
                  Many writers benefit from an external strategic lens, especially for their own websites.
                </p>
                <p>If you are unsure whether this makes sense for you, we can talk it through on the call.</p>
              </div>
            </details>

            <details className="group border-b border-brandDark/30 pb-6">
              <summary className="cursor-pointer text-lg md:text-xl font-semibold text-brandDark">
                Should I work with a designer or a copywriter first?
              </summary>
              <div className="mt-4 space-y-3 text-base md:text-lg leading-relaxed">
                <p>It is best to start with website messaging and copy before design.</p>
                <p>
                  Your website's structure, flow, and page decisions should come from what needs to be
                  communicated: who you serve, how you position your work, what questions your visitors
                  need answered, and what actions you want them to take. That clarity makes the design
                  process smoother, faster, and more effective.
                </p>
                <p>That said, design plays a crucial role.</p>
                <p>
                  A strong website is not just well-written. It is also easy to navigate, visually clear,
                  and built to support how people actually move through a site.
                </p>
                <p>Good design makes copy shine.</p>
                <p>
                  This is why, once your copy is approved, I create wireframes and collaborate with your
                  designer so the final site supports both clarity and conversion.
                </p>
              </div>
            </details>
          </div>

          <div className="pt-6 space-y-4">
            <p className="text-base md:text-lg leading-relaxed font-semibold text-brandSecondary">
              If this resonates with where your business is:
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              You are invited to join as a beta client for website messaging and copywriting.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Two beta spots - 50% off - First half of 2026 launch.
            </p>
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center gap-2 px-7 py-3 font-semibold tracking-wide rounded-full text-white bg-brandSecondary hover:bg-brandDark shadow-md hover:shadow-lg transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandSecondary cursor-pointer"
            >
              CLICK HERE TO EXPRESS INTEREST IN THE BETA SPOT
            </button>
            <p className="text-base md:text-lg leading-relaxed">
              Two spots are available at the beta rate. Once the spots are filled, I will close the form.
            </p>
            <p className="text-base md:text-lg leading-relaxed">
              Sharing your details shows interest only. We will connect on a call before anything is finalized.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
