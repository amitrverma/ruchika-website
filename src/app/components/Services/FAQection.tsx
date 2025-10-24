"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const faqs = [
    {
      q: "How much do your services cost?",
      a: "Every project is unique, so pricing depends on scope, deliverables, and timeline. After our discovery call, I’ll send you a detailed proposal with transparent pricing tailored to your goals.",
    },
    {
      q: "How long does a typical project take?",
      a: "It depends on scope, but a Brand Messaging project typically takes 3–4 weeks; Website Copy projects take 4–6 weeks depending on complexity and revisions.",
    },
    {
      q: "Do you work with clients outside India?",
      a: "Yes! I work with clients globally via email and Zoom. Time zones are never an issue — clarity and communication make collaboration smooth.",
    },
    {
      q: "Do you offer payment plans?",
      a: "Yes, payment is split 50% upfront and 50% on completion. Larger retainers or long-term projects can have structured milestone payments.",
    },
    {
      q: "Which service should I start with?",
      a: "If you’re unsure, start with Brand Messaging. It sets the foundation for every other copy asset — website, email, or sales page.",
    },
    {
      q: "What if I need revisions?",
      a: "All projects include up to two rounds of revisions to ensure your copy feels right. My goal is always to make sure the message feels authentically yours.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="bg-white py-20">
      <div className="container max-w-3xl text-brand-dark leading-relaxed">
        <h2 className="text-2xl md:text-3xl font-serif text-center mb-12">
          Like to know a little more before you say hi? I get it.
          <br />
          <span className="text-base font-normal">
            I’ve answered your FAQs below ↓
          </span>
        </h2>

        <div className="divide-y divide-gray-200 border border-gray-100 rounded-2xl shadow-sm bg-gray-50/50">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="px-6 py-5 cursor-pointer hover:bg-gray-100/70 transition-colors"
              onClick={() => toggle(i)}
            >
              <div className="flex justify-between items-center">
                <h4 className="font-medium text-brand-dark text-base md:text-lg">
                  {item.q}
                </h4>
                <ChevronDown
                  className={`w-5 h-5 text-brand-accent transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </div>

              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                  openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="mt-3 text-gray-700 text-sm md:text-base">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
