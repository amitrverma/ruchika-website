"use client";

import { motion, Variants } from "framer-motion";
import { Search, Brain, PenTool, CheckCircle } from "lucide-react";

export default function ProcessSection() {
  const phases = [
    {
      title: "Phase 1: Strategy & Research",
      desc: "Once we decide to work together, I’ll send you a questionnaire to understand your business, ideal client, goals, and voice. We’ll go through it together during our kickoff call. \n\n Then I dive into audience research such as customer surveys, competitor analysis, and forum or online research to understand what makes your right-fit clients say “yes.",
      icon: <Search className="w-7 h-7 text-brandSecondary" />,
    },
    {
      title: "Phase 2: Analyzing & Planning",
      desc: "Before the writing begins, we’ll have a strategy call to review insights from the research phase. I’ll share my recommendations so we’re both clear on the direction and focus of the project. \n This step ensures we’re fully aligned before I start writing.",
      icon: <Brain className="w-7 h-7 text-brandSecondary" />,
    },
    {
      title: "Phase 3: Conversion-focused Copywriting & Editing",
      desc: "Here’s where I roll up my sleeves and use proven copywriting techniques and frameworks to write compelling copy that reflects your brand’s voice. \n\n You’ll first receive the draft for review and approval. Once finalized, I’ll share a wireframe (for webpages) or a Google Doc (for emails, sales pages, etc.).",
      icon: <PenTool className="w-7 h-7 text-brandSecondary" />,
    },
    {
      title: "Phase 4: Delivery & Review",
      desc: "I will email you the final copy and then get on a call to review it together. \n\n Once it feels right, I’ll be happy to communicate with your designer, marketing team, or with you to put it into action.",
      icon: <CheckCircle className="w-7 h-7 text-brandSecondary" />,
    },
  ];

  // === Motion Variants ===
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="relative overflow-hidden bg-brandPrimary py-28">
      {/* Subtle background glow */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_50%_30%,_var(--tw-gradient-stops))] from-brandSecondary via-transparent to-transparent" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto max-w-6xl px-6 text-brandDark relative z-10"
      >
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          className="text-2xl md:text-3xl font-serif text-center mb-20"
        >
          This is how I approach all my copywriting projects
        </motion.h2>

        {/* === Vertical Timeline (Desktop) === */}
        <div className="hidden md:block relative">
          {/* Animated vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute left-1/2 top-0 h-full w-[3px] bg-gradient-to-b from-brandSecondary/0 via-brandSecondary/50 to-brandSecondary/0 origin-top transform -translate-x-1/2"
          />

          <div className="space-y-14">
            {phases.map((p, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className={`relative flex items-start ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Connector dot */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: i * 0.2, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-brandSecondary shadow-md z-10"
                  ></motion.div>

                  {/* Content Card */}
                  <div
                    className={`relative bg-white/90 backdrop-blur-sm border border-brandSecondary/20 shadow-lg rounded-2xl p-6 max-w-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_-12px_rgb(0_0_0/0.2)] ${
                      isLeft ? "mr-[55%] text-left" : "ml-[55%] text-left"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-3 mb-3 ${
                        isLeft
                          ? "justify-start"
                          : "justify-end flex-row-reverse"
                      }`}
                    >
                      <div className="bg-brandPrimary/30 p-2 rounded-full">
                        {p.icon}
                      </div>
                      <h4 className="font-semibold text-lg text-brandDark">
                        {p.title}
                      </h4>
                    </div>
                    <p className=" text-md leading-relaxed whitespace-pre-line">
                      {p.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* === Mobile Layout === */}
        <div className="md:hidden space-y-10 mt-10">
          {phases.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="relative bg-white rounded-2xl shadow-lg p-6 border border-brandSecondary/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-brandPrimary/30 p-2 rounded-full">
                  {p.icon}
                </div>
                <h4 className="font-semibold text-brandDark text-base">
                  {p.title}
                </h4>
              </div>
              <p className=" text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.p
          variants={fadeUp}
          className="mt-20 text-center font-medium text-brandDark max-w-2xl mx-auto"
        >
          Also, I’m not going anywhere after your project ends. I’ll be your
          biggest cheerleader. Your success is mine too. <br />{" "}
          <span className="text-brandSecondary font-semibold">
            That is why every project I take on comes with my...
          </span>
        </motion.p>

        <div className="w-40 h-[3px] bg-gradient-to-r from-transparent via-brandSecondary to-transparent mx-auto mt-16 rounded-full" />
      </motion.div>
    </section>
  );
}
