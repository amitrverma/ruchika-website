"use client";

import { motion, Variants } from "framer-motion";
import {
  HeartHandshake,
  Sparkles,
  Users,
  Smile,
  ShieldCheck,
} from "lucide-react";

export default function ValuesSection() {
  const values = [
    {
      title: "Flexibility",
      subtitle:
        "I run my business in a way that supports my life—not the other way around.",
      body: "Hustling isn’t my forte, and I don’t expect you to be “always available” either. I respect your time and mine. No pressure to reply in the evenings or on weekends. I focus on delivering quality work while keeping space for flexibility and freedom.",
      icon: <Sparkles className="w-6 h-6 text-brandSecondary" />,
    },
    {
      title: "Effort",
      subtitle: "I put 100% effort and intention into every project I take on.",
      body: "Quality is important for me. So setting realistic expectations for time and results is very important before starting a project. You’ll never get half-hearted work from me. I don't skip any part of my process. And I’ll always keep you informed where are we in terms of project.",
      icon: <HeartHandshake className="w-6 h-6 text-brandSecondary" />,
    },
    {
      title: "Collaboration",
      subtitle: "Good work gets better when we do it together.",
      body: "I don’t work in isolation. I ask for input and share ideas. Your success matters to me, and your input is essential. This is not a one-way process. It is a team effort. I believe building a business is much easier when you focus on what you are good at and lean on others for the rest.",
      icon: <Users className="w-6 h-6 text-brandSecondary" />,
    },
    {
      title: "Empathy",
      subtitle: "Your audience comes first.",
      body: "My focus is on your audience’s core values, needs, and frustrations. That’s why I don’t believe in using salesy tactics in my copy. Research is a non- negotiable part of my process because the best messaging comes from your audience, not just from a copywriter’s head.",
      icon: <Smile className="w-6 h-6 text-brandSecondary" />,
    },
    {
      title: "Integrity",
      subtitle: "Walking the talk.",
      body: "I am human, and I make mistakes. But I’m committed to learning and getting better. For me, it’s about honesty, clear communication, and following through. I focus on building trust through real conversations, realistic expectations, and copy that feels true to your brand.",
      icon: <ShieldCheck className="w-6 h-6 text-brandSecondary" />,
    },
  ];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut", // ✅ use string literal instead of cubic-bezier array
    },
  },
};

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#fafaf9] to-white py-28">
      {/* Decorative background gradient */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_20%_30%,_var(--tw-gradient-stops))] from-brandSecondary via-transparent to-transparent" />

      <div className="container mx-auto max-w-5xl px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif text-brandDark mb-16 text-center leading-snug"
        >
The values that shape how I show up & guide our work together
        </motion.h2>

        {/* === Timeline === */}
        <div className="relative border-l-2 border-brandSecondary/30 pl-8 md:pl-12 space-y-14">
          {values.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className="relative group"
            >
              {/* Dot */}
<span className="absolute -left-[11px] md:-left-[13px] top-2 w-5 h-5 bg-brandSecondary rounded-full border-4 border-white shadow-md z-20 transition-all duration-300 group-hover:scale-125" />

              {/* Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-sm border border-brandSecondary/10 hover:shadow-[0_10px_30px_-8px_rgb(0_0_0/0.1)] transition-all duration-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <h3 className="text-xl md:text-2xl font-serif font-semibold text-brandDark">
                    {item.title}
                  </h3>
                </div>

                <p className="font-medium text-brandSecondary mb-2">
                  {item.subtitle}
                </p>
                <p className="text-brandDark/80 leading-relaxed">{item.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* === Decorative closing line === */}
        <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-brandSecondary to-transparent mx-auto mt-20 rounded-full" />
      </div>
    </section>
  );
}
