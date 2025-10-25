"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function FitSection() {
  const points = [
    "You’re a founder of a service-based business building for the long term. You know your next level requires the right partnerships.",
    "You’ve gained clarity on who you want to serve through working with ideal clients. You’re not trying to appeal to everyone — you’re focused on attracting clients who value what you do.",
    "You’ve outgrown the DIY phase. You know strategic messaging and copy require specialized skills, and you’re ready to bring in someone who’ll take the time to understand your business, your audience, and your vision.",
    "You care about who you work with — their approach, their process, and whether they truly get what you’re building. You’re looking for quality, strategy, and a partner who’s as committed to your growth as you are.",
    "You want copy that positions you as the go-to in your field and attracts the right clients, because you know your messaging is the foundation for everything else.",
  ];

  return (
    <section className="bg-brandPrimary py-14 md:py-20">

      <div className="container relative z-10 max-w-4xl text-brandSecondary">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-serif text-center mb-14"
        >
          I’m the <span className="text-brand-accent">messaging-first copywriter</span> for you if…
        </motion.h2>

        <div className="grid gap-8">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex items-start gap-4 bg-white/80 backdrop-blur-md border border-brand-accent/20 rounded-xl shadow-sm hover:shadow-md transition-all p-6"
            >
              <div className="flex-shrink-0 mt-1">
                <CheckCircle2 className="w-8 h-8 text-brandSecondary" />
              </div>
              <p className="text-gray-800 leading-relaxed">{point}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-14 text-brandDark font-medium"
        >
          If this sounds like you — we’ll make a great team.
        </motion.p>
      </div>
    </section>
  );
}
