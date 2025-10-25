"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      q: "Can you recommend a designer who’s as good at design as you are at messaging?",
      a: "Yes, I collaborate with a few trusted designers who share the same approach to thoughtful, conversion-friendly design. I’ll be happy to connect you once we start working together.",
    },
    {
      q: "What about SEO? Do you do that?",
      a: "Yes — I write SEO-friendly copy that’s optimized for humans first and search engines second. If you need deep keyword research or technical SEO, I can coordinate with your SEO specialist.",
    },
    {
      q: "Who do you work with?",
      a: "Mostly service-based business owners, creative professionals, and founders who want clarity and connection in their brand voice — not hype or fluff.",
    },
    {
      q: "What’s the timeline? How soon can we start?",
      a: "Most projects are booked 2–3 weeks in advance. Once confirmed, timelines typically range from 3–6 weeks depending on the scope.",
    },
    {
      q: "What’s the process for website copywriting services?",
      a: "It starts with a discovery call → strategy questionnaire → messaging foundations → drafts and revisions → final delivery. Each step is clear and collaborative.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

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

        <div className="divide-y divide-brandSecondary">
          {faqs.map((item, i) => (
            <div key={i} className="py-5 cursor-pointer select-none" onClick={() => toggle(i)}>
              <div className="flex justify-between items-center">
                <h4 className="font-medium text-brandDark text-base md:text-lg">
                  {item.q}
                </h4>
                <span className="text-brandSecondary text-xl">
                  {openIndex === i ? <Minus strokeWidth={2} /> : <Plus strokeWidth={2} />}
                </span>
              </div>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === i ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
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
