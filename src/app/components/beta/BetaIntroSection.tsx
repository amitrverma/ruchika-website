"use client";

import { CheckSquare, X, Target, Sparkles, Layout, Filter } from "lucide-react";

export default function BetaIntroSection() {
  const openModal = () => {
    window.dispatchEvent(new Event("open-beta-interest-form"));
  };

  return (
    <section id="beta-intro" className="bg-white">
      <div className="container pt-28 pb-16 md:pt-32 md:pb-20 text-brandDark">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="space-y-4">
            <p className="text-sm md:text-base text-right">
              Visiting again?{" "}
              <button
                type="button"
                onClick={openModal}
                className="text-brandSecondary underline underline-offset-4 cursor-pointer"
              >
                Go straight to the form to express interest
              </button>
            </p>

            <p id="welcome" className="text-xs md:text-sm">
              Welcome. I am glad you are here.
            </p>

            <div className="border  border-brandDark/40 bg-brandPrimary/60 p-6 space-y-2">
              <p className="text-lg md:text-xl font-semibold text-black">
                For service providers planning a website launch in first half of 2026
              </p>
              <p className="text-lg md:text-xl font-semibold text-brandDark">
                Done-for-you website messaging and copywriting <br/>
                To attract right-fit clients who are ready to invest
              </p>
              <p className="text-lg md:text-xl font-semibold text-brandSecondary">
                Beta offer. Two spots available at 50% off the standard rate.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            <h2 id="who-this-is-for" className="text-xs md:text-sm font-serif text-brandDark">
              Who this is for (and why)
            </h2>

            <p className="text-xl md:text-2xl font-semibold text-brandSecondary">
              You already know your website matters. And what your website says matters just as much as how it looks.
            </p>

            <ul className="list-disc pl-5 space-y-3 text-base md:text-lg leading-relaxed">
              <li>
                Even when people find you through referrals or social media, your website is where
                they assess your work and decide whether to move forward.
              </li>
              <li>
                It is one of the most powerful brand assets you have, and it should reflect the
                caliber of work you deliver.
              </li>
              <li>
                There is a specific kind of confidence that comes from knowing your online presence
                carries the same weight as the results you create.
              </li>
            </ul>

            <p className="text-base md:text-lg leading-relaxed text-black font-semibold">
              Because of that,{" "}
              <span className="text-brandSecondary font-semibold">
                launching a strategic website has become an important milestone
              </span>{" "}
              for the first half of your year.
            </p>

            <ul className="list-disc pl-5 space-y-3 text-base md:text-lg leading-relaxed">
              <li>You are planning to launch your first website.</li>
              <li>Or you might be ready to move on from a site that was built quickly to get you started.</li>
              <li>
                Or you may be looking at a website that once fit your business well, but now feels
                out of sync with the level of thinking, experience, and standards you bring today.
              </li>
            </ul>

            <p className="text-base md:text-lg leading-relaxed">
              Whatever the case may be, one thing is for sure...
            </p>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-brandDark to-transparent" />

            <p id="shift-needs" className="text-xl md:text-2xl leading-relaxed font-semibold">
              You are at a stage in your business{" "}
              <span className="text-brandSecondary">
                where you are not just looking for more clients
              </span>{" "}
              who are ready to invest in your services.
            </p>

            <p className="text-base md:text-lg font-semibold">Instead...</p>

            <div className="space-y-3">
              <p className="text-base md:text-lg font-semibold">You are moving from:</p>
              <ul className="list-disc pl-5 space-y-3 text-base md:text-lg leading-relaxed">
                <li>
                  &quot;Getting clients&quot; to{" "}
                  <span className="text-brandSecondary">
                    &quot;attracting the right clients.&quot;
                  </span>
                </li>
                <li>
                  &quot;Proving your value&quot; to{" "}
                  <span className="text-brandSecondary">
                    &quot;positioning you as an expert in your space.&quot;
                  </span>
                </li>
                <li>
                  &quot;Doing good work&quot; to{" "}
                  <span className="text-brandSecondary">
                    &quot;building a business you are deeply proud of.&quot;
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-base md:text-lg leading-relaxed">Put simply...</p>

            <p className="text-base md:text-lg leading-relaxed font-semibold">
              You are{" "}
              <span className="text-brandSecondary">
                looking for right-fit clients who are ready to invest in your expertise
              </span>
              . Not just deliverables.
            </p>

            <p className="text-base md:text-lg leading-relaxed">
              And your website plays a crucial role here:
            </p>

            <div className="space-y-3 text-base md:text-lg leading-relaxed">
              <div className="flex items-start gap-3">
                <CheckSquare className="mt-1 h-5 w-5 text-green-600" />
                <p>
                  It helps qualified prospects who have already set aside a budget evaluate your work
                  and decide their next step.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <X className="mt-1 h-5 w-5 text-red-500" />
                <p>
                  It is not meant for audiences who still need to be convinced that services like
                  yours are worth investing in.
                </p>
              </div>
            </div>

            <p className="text-base md:text-lg leading-relaxed font-semibold text-black">
              This means treating your{" "}
              <span className="text-brandSecondary">website as a decision tool</span>, not an
              information or education tool.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-base md:text-lg font-semibold">So...</p>

            <div className="border border-brandDark/40 bg-brandPrimary/60 p-6 space-y-4">
              <p className="text-base md:text-lg font-semibold text-brandSecondary">
                Refine your website messaging for people who are ready to invest and hire you as a
                strategic partner
              </p>

              <div className="space-y-4 text-base md:text-lg leading-relaxed">
                <div className="flex items-start gap-3">
                  <Target className="mt-1 h-5 w-5 text-brandSecondary" />
                  <p>
                    <span className="font-semibold text-brandDark">Lean into your positioning</span>
                    <br />
                    Your website stops trying to convince people why your services matter and starts
                    helping the right people see why you are the right partner for them.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-1 h-5 w-5 text-brandSecondary" />
                  <p>
                    <span className="font-semibold text-brandDark">
                      Make your point of view your differentiator
                    </span>
                    <br />
                    You lead with how you think and how you work, instead of relying too heavily on
                    pain points or outcome-based messaging.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Layout className="mt-1 h-5 w-5 text-brandSecondary" />
                  <p>
                    <span className="font-semibold text-brandDark">Focus on user experience</span>
                    <br />
                    Your pages become more intentional, streamlined, and easier to navigate.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Filter className="mt-1 h-5 w-5 text-brandSecondary" />
                  <p>
                    <span className="font-semibold text-brandDark">Let your website filter naturally</span>
                    <br />
                    Fewer misaligned inquiries come through, and more conversations start with people
                    who already understand your value.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-base md:text-lg leading-relaxed">
              As a result, <span className="font-semibold text-black">you begin receiving inquiries from right-fit clients</span> who are ready to
              invest in your experience and expertise.
            </p>

            <div className="space-y-4">
              <p className="text-base md:text-lg leading-relaxed">
                This is{" "}
                <span className="text-brandSecondary font-semibold">my approach</span> when I take
                website messaging and copywriting projects for scaling service providers who want:
              </p>
              <div className="space-y-3 text-base md:text-lg leading-relaxed">
                <div className="flex items-start gap-3">
                  <CheckSquare className="mt-1 h-5 w-5 text-brandSecondary" />
                  <p>To position themselves as the <span className="text-black font-semibold">obvious choice </span>in their space.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckSquare className="mt-1 h-5 w-5 text-brandSecondary" />
                  <p>To attract <span className="text-black font-semibold">right-fit clients</span> who are ready to invest.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
