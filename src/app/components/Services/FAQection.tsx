"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      q: "How much do your services cost?",
      a: "Every project is unique, so pricing depends on scope, deliverables, and timeline. After our discovery call, I’ll send you a detailed proposal with transparent pricing tailored to your specific needs.",
    },
    {
      q: "How long does a typical project take?",
      a: "It depends on the scope of the project. A brand messaging guide typically takes a minimum of 4 weeks. Website copy (up to 4 pages) takes a minimum of 6 weeks. Email sequences take 3–5 weeks and sales pages take 4–6 weeks, depending on length and complexity. I’ll give you a clear timeline once we discuss your specific needs.",
    },
    {
      q: "Do you work with clients outside your timezone?",
      a: "Yes! I work with clients globally. I’m based in Pune, India, and work Monday through Friday. I’m flexible with scheduling calls to accommodate different time zones. We’ll find a communication rhythm that works for both of us.",
    },
    {
      q: "How much input do I need to provide?",
      a: "I’ll need you to fill out a brand questionnaire, hop on a call with me to discuss your business and audience, and be available for any follow-up questions during the research phase. You’ll also review drafts and provide feedback within a reasonable timeframe.",
    },
    {
      q: "Do you offer payment plans?",
      a: "Yes, I offer payment plans at no extra cost. It’s 50% upfront to get started and 50% once the final draft is approved. For larger projects, we can structure payments based on project milestones.",
    },
    {
      q: "Which service should I start with?",
      a: "If you don’t have clear messaging yet, start with the Brand Messaging & Tone of Voice Guide. It’s the foundation for everything else. If your messaging is solid and you’re ready to launch or refresh your website, we can start there. Not sure? Book a call and we’ll figure out what makes the most sense for where you are now.",
    },
    {
      q: "What if I need revisions?",
      a: "Every project includes one round of revisions to ensure the copy feels right. If we need to make tweaks later, within the two-week post-delivery support period, I’m here for that too. My goal is to make sure you’re confident in the final copy.",
    },
    {
      q: "Do you do other types of copy other than you have mentioned?",
      a: "Yes! While website copy, emails, and sales pages are my core services, I can also help with blogs and social media content. If you need something specific, let’s discuss on our call.",
    },
    {
      q: "Should I hire a copywriter or a designer first for my website?",
      a: "Start with copy first. Otherwise, your designer is creating visuals without direction. They need to know what the website will say before they can decide how it should look.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="relative bg-brandPrimary py-30">
      <div className="container max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif text-center mb-12 text-brandDark">
          Like to know a little more before you say hi?
          <br />
          <span className="text-base font-normal text-gray-600">
            I’ve answered your FAQs below ↓
          </span>
        </h2>

        <div className="divide-y divide-brandSecondary/30">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="py-5 cursor-pointer select-none"
              onClick={() => toggle(i)}
            >
              <div className="flex justify-between items-center">
                <h4 className="font-medium text-brandDark text-base md:text-lg">
                  {item.q}
                </h4>
                <span className="text-brandSecondary text-xl">
                  {openIndex === i ? (
                    <Minus strokeWidth={2} />
                  ) : (
                    <Plus strokeWidth={2} />
                  )}
                </span>
              </div>

<div
  className={`transition-all duration-300 overflow-hidden ${
    openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
  }`}
>
  <p className="text-brandDark text-sm md:text-base leading-relaxed rounded-lg p-4">
    {item.a}
  </p>
</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
