"use client";

import { Sparkles, PackageOpen, PenTool } from "lucide-react";

export default function WhatsIncluded() {
  const openModal = () => {
    window.dispatchEvent(new Event("open-beta-interest-form"));
  };

  return (
    <section id="whats-included" className="bg-white">
      <div className="container py-14 md:py-20 text-brandDark">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="border border-brandDark/40 bg-brandPrimary/60 p-6 md:p-8 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-brandDark">
                <Sparkles className="h-5 w-5 text-brandSecondary" />
                <p className="text-md md:text-lg font-semibold">
                If this resonates with where your business is...
                </p>
              </div>
              <p className="text-xl md:text-2xl text-brandSecondary font-semibold">
                You&apos;re invited to join as a beta client for website messaging and copywriting.
              </p>
              <p className="text-md md:text-lg">
                Two beta spots - 50% off - First half of 2026 launch
              </p>
            </div>

            <div className="flex items-center gap-2 text-brandDark">
              <PackageOpen className="h-5 w-5 text-brandSecondary" />
              <p className="text-md md:text-lg font-semibold">What&apos;s included:</p>
            </div>

            <div className="space-y-6 text-md md:text-lg leading-relaxed">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-brandSecondary font-semibold">
                  <PenTool className="h-4 w-4" />
                  <p>
                  Strategy session: a 60 to 90 minute call to understand your business, audience, and goals.
                  </p>
                </div>
                <p>Based on that I will recommend:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>High-level website structure focused on clarity, flow, and ease of navigation.</li>
                  <li>Number of pages required and the role each page plays.</li>
                  <li>How pages should be organized if you serve different audiences.</li>
                  <li>User journey mapping to guide visitors from entry to action.</li>
                  <li>Offer positioning to ensure the right clients are directed to the right services.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <p className="font-semibold text-brandSecondary">
                  Audience research (customer surveys, competitor analysis, forum mining)
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Surveys with past or current right-fit clients.</li>
                  <li>Email templates to request survey participation.</li>
                  <li>Review of existing testimonials and client feedback.</li>
                  <li>Competitor analysis to understand positioning patterns.</li>
                  <li>
                    Forum and group research to capture how your audience talks about their needs,
                    decisions, and expectations.
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <p className="font-semibold text-brandSecondary">Website copywriting</p>
                <p>
                  Conversion-focused copywriting for four core website pages (best suited for businesses
                  with one primary audience and cohesive service offerings).
                </p>
                <p className="font-semibold">Core pages include:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Homepage</li>
                  <li>About</li>
                  <li>Services</li>
                  <li>Contact</li>
                </ul>
                <p>
                  The exact structure will be determined during our strategy session based on your business.
                  Additional pages beyond the core four are available at $150 per page if needed.
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Copywriting that uses relevant keywords naturally (no keyword stuffing).</li>
                  <li>Messaging written for right-fit clients who are evaluating fit and next steps.</li>
                  <li>Clear, direct copy aligned with your expertise and positioning.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <p className="font-semibold text-brandSecondary">Brand voice and tone</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Refinement of your brand voice for your website.</li>
                  <li>Consistency across pages.</li>
                  <li>Language that sounds like you, not generic website copy.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <p className="font-semibold text-brandSecondary">Wireframing (Canva)</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Wireframes in Canva to show how messaging flows across pages.</li>
                  <li>Guidance for layout and section order to support design or DIY build.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <p className="font-semibold text-brandSecondary">Revisions</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Structured revision rounds at key stages.</li>
                  <li>Collaborative feedback and refinement.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <p className="font-semibold text-brandSecondary">Your investment</p>
                <p>Beta rate: $450 (this is your investment)</p>
                <p>Standard rate: $850</p>
              </div>

              <div className="space-y-3">
                <p className="font-semibold text-brandSecondary">Payment structure</p>
                <p>Payment is split into two parts:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>50% upfront to secure your spot.</li>
                  <li>50% after final copy approval, before wireframing begins.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <p className="font-semibold text-brandSecondary">What happens next</p>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    <span className="font-semibold">Share your details</span>
                    <div>You will fill out a short form with a bit about your business, your website, and your timeline.</div>
                  </li>
                  <li>
                    <span className="font-semibold">We check alignment</span>
                    <div>I will go through what you shared to make sure this offering matches what you are looking for.</div>
                  </li>
                  <li>
                    <span className="font-semibold">Quick conversation</span>
                    <div>We will schedule a short call to talk through scope, expectations, and timing.</div>
                  </li>
                  <li>
                    <span className="font-semibold">Confirm and get started</span>
                    <div>Once we are both comfortable moving forward, I will share the invoice for the first 50% to secure your spot.</div>
                  </li>
                  <li>
                    <span className="font-semibold">Strategy session and work begins</span>
                    <div>We schedule the strategy session and start the website messaging and copywriting work.</div>
                  </li>
                </ol>
              </div>
            </div>

            <button
              type="button"
              onClick={openModal}
              className="block text-lg md:text-xl font-semibold text-brandSecondary underline underline-offset-4 cursor-pointer"
            >
              CLICK HERE TO FILL THE FORM AND EXPRESS INTEREST IN THE BETA SPOT
            </button>

            <ul className="list-disc pl-5 space-y-2 text-md md:text-lg leading-relaxed">
              <li>Two spots are available at the beta rate.</li>
              <li>Once the spots are filled, I&apos;ll close the form.</li>
              <li>Sharing your details shows interest only.</li>
              <li>We&apos;ll connect on a call before anything is finalized.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
