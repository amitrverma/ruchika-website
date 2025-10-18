"use client";

import { useState } from "react";

type Item = { question: string; answer: string };

export default function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              className="w-full text-left px-5 py-4 flex items-center justify-between"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-medium">{item.question}</span>
              <span className="ml-4">{isOpen ? "–" : "+"}</span>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-gray-600">
                <p className="leading-relaxed">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
