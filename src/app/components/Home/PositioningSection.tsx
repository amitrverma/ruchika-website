"use client";

import { motion } from "framer-motion";

export default function CelebrationSection() {
  const topPoints = [
    {
      title: "You’ve built a business with care",
      desc: "You’re already getting leads through referrals, social media and word of mouth.",
    },
    {
      title: "You’ve built a reputation through real results.",
      desc: "You’ve put in the work and it shows. Clients come back. They know you bring value every single time.",
    },
    {
      title: "You’re building intentionally. Expanding thoughtfully.",
      desc: "You’re growing in a way that feels aligned with your values and the kind of business you want to build long term.",
    },
  ];

  const bottomPoints = [
    {
      title: "You’re ready to attract more right-fit clients",
      desc: "The ones who respect your process, your time, and your expertise. In short — value YOU.",
    },
    {
      title: "You’re refining your brand’s messaging",
      desc: "Launching, updating, rebranding, optimizing to match where your business has evolved to.",
    },
    {
      title: "You’re not just doing more. You’re doing better.",
      desc: "Thinking long term. Choosing partners who value the same level of thought and strategy.",
    },
  ];

  return (
    <section className="relative bg-white py-24 text-brandDark">
      <div className="container max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-medium mb-10 leading-relaxed"
        >
          Take a moment — you’re right on the edge of something exciting.{" "}
          <span className="font-semibold">But first let's celebrate this.</span>
        </motion.h2>

        {/* Top 3 Columns */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10 mb-16"
        >
          {topPoints.map((item, i) => (
            <div key={i} className="space-y-3">
              <h3 className="font-semibold text-lg md:text-xl">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Center Divider Text */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl md:text-2xl font-medium leading-snug mb-14"
        >
          Now it’s time to own your next-level era. <br />
          Time to move from order-taker to{" "}
          <span className="text-brand-accent font-semibold underline decoration-brand-accent/50">
            boss business owner
          </span>
          .
        </motion.h3>

        {/* Bottom 3 Columns */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-10"
        >
          {bottomPoints.map((item, i) => (
            <div key={i} className="space-y-3">
              <h3 className="font-semibold text-lg md:text-xl">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
