"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";

type DetailFAQ = {
  question: string;
  answer: string[];
  bullets?: string[];
  after?: string[];
};

export default function DetailFAQAccordion({
  faqs,
  title = "Like to know a little more before you say hi?",
  kicker = "I've answered your FAQs below ↓",
}: {
  faqs: DetailFAQ[];
  title?: string;
  kicker?: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="relative bg-brandPrimary py-30">
      <div className="container max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-serif text-center mb-12 text-brandDark">
          {title}
          {kicker && (
            <>
              <br />
              <span className="text-sm font-base text-gray-600">{kicker}</span>
            </>
          )}
        </h2>

        <div className="divide-y divide-brandSecondary/30">
          {faqs.map((item, i) => (
            <div
              key={item.question}
              className="py-5 cursor-pointer select-none"
              onClick={() => toggle(i)}
            >
              <div className="flex items-center justify-between gap-6">
                <h4 className="font-medium text-brandDark text-md md:text-lg">
                  {item.question}
                </h4>
                <span className="shrink-0 text-xl text-brandSecondary">
                  {openIndex === i ? (
                    <Minus strokeWidth={2} />
                  ) : (
                    <Plus strokeWidth={2} />
                  )}
                </span>
              </div>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openIndex === i ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="space-y-4 rounded-lg p-4 text-md leading-relaxed text-brandDark md:text-base">
                  {item.answer.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                  {item.bullets && (
                    <ul className="list-disc space-y-2 pl-5">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                  {item.after?.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
