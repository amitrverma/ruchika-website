"use client";

import { useState } from "react";

const tocItems = [
  { label: "Welcome", href: "#welcome" },
  { label: "Who this is for (and why)", href: "#who-this-is-for" },
  { label: "The shift your website needs", href: "#shift-needs" },
  {
    label: "Meet me and how I approach website messaging",
    href: "#meet-your-strategic-partner",
  },
  { label: "The solution: Website Messaging & Copywriting", href: "#introducing" },
  { label: "Evaluate the fit", href: "#evaluate-fit" },
  { label: "What's included", href: "#whats-included" },
  { label: "Client words", href: "#testimonials" },
  { label: "FAQs", href: "#faqs" },
  { label: "Express interest", href: "#final-cta" },
  { label: "Final note", href: "#final-note" },
];

export default function TableOfContents() {
  const [open, setOpen] = useState(false);

  return (
    <aside className="fixed bottom-4 left-4 right-4 z-40 rounded-xl border border-brandDark/20 bg-white/95 p-4 text-brandDark shadow-lg backdrop-blur md:bottom-auto md:left-auto md:right-6 md:top-24 md:w-80">
      <div className="flex items-center justify-between md:block">
        <div className="text-sm font-semibold uppercase tracking-wide text-brandSecondary">
          Quick Links
        </div>
        <button
          type="button"
          className="text-sm font-semibold text-brandSecondary md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-controls="beta-toc-list"
        >
          {open ? "Hide" : "Show"}
        </button>
      </div>
      <ul
        id="beta-toc-list"
        className={`mt-3 space-y-2 text-sm md:text-base md:max-h-[55vh] md:overflow-y-auto ${
          open ? "block max-h-[55vh] overflow-y-auto" : "hidden"
        } md:block`}
      >
        {tocItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="font-semibold text-brandDark hover:text-brandSecondary"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
