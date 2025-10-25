"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Handshake,
  Sparkles,
  Leaf,
  Target,
} from "lucide-react";

export default function ValuesSection() {
  const values = [
    {
      icon: <Leaf className="w-8 h-8 text-brandSecondary" />,
      title: "Flexibility",
      desc: "I run my business in a way that supports my life — not the other way around. Hustling isn’t my forte. And I don’t expect you to be “always available” either. I respect your timing and mine. The work we create flows better that way.",
    },
    {
      icon: <Target className="w-8 h-8 text-brandSecondary" />,
      title: "Effort",
      desc: "I put 100% effort and intention into every project I take on. Quality means clarity, communication, and commitment to what we’re building together.",
    },
    {
      icon: <Handshake className="w-8 h-8 text-brandSecondary" />,
      title: "Collaboration",
      desc: "I believe good work gets better when we do it together. I don’t work in isolation. I ask for input and share ideas — because your insights matter as much as the strategy and the words.",
    },
    {
      icon: <Heart className="w-8 h-8 text-brandSecondary" />,
      title: "Empathy",
      desc: "Your audience comes first. Always. I approach copy as a human talking to another human, not a brand shouting at a crowd.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-brandSecondary" />,
      title: "Integrity",
      desc: "I walk my talk. I’m still learning, still growing — but always aligned with honesty, respect, and doing what feels true to both our brands.",
    },
  ];

  return (
    <section className="bg-white/10 py-20">
      <div className="container max-w-5xl text-brand-dark leading-relaxed">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-serif text-center mb-14"
        >
          The values that shape how I show up <br className="hidden md:block" />
          <span className="text-base md:text-lg font-normal">
            & guide our work together
          </span>
        </motion.h3>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 ">
          {values.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center bg-white rounded-2xl hover:shadow-md p-8 border border-brandSecondary/20 transition-all"
            >
              <div className="mb-4">{value.icon}</div>
              <h4 className="font-serif text-lg font-semibold mb-2 text-brand-dark">
                {value.title}
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                {value.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
