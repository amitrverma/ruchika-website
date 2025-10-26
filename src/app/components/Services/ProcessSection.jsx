"use client";

import { Search, Brain, PenTool, CheckCircle } from "lucide-react";

export default function ProcessSection() {
  const phases = [
    {
      title: "Phase 1: Research",
      desc: "Once we decide to work together, I’ll send you a brand questionnaire doc. where I ask you enough questions to make your head spin—but this brief will help me shape clear, strategic copy. Then as I start working on your project, I dive deep into understanding your audience. This process includes conducting customer surveys, researching competitors, and review mining. It's an essential message-finding process to truly understand your audience and what will make them say yes to your offer.",
      icon: <Search className="w-7 h-7 text-brandSecondary" />,
    },
    {
      title: "Phase 2: Analyzing & Planning",
      desc: "In this phase, I'll analyze everything I uncovered in the research phase and use it to refine your core messaging. So we can put the right message in front of your audience",
      icon: <Brain className="w-7 h-7 text-brandSecondary" />,
    },
    {
      title: "Phase 3: Copywriting & Editing",
      desc: "Here, I roll up my sleeves and use copywriting techniques and frameworks to write compelling copy that reflects your brand’s voice. I will present you the first draft to get your approval. Which leads to a wireframe (for web pages) or Google doc (for emails, sales page, etc).",
      icon: <PenTool className="w-7 h-7 text-brandSecondary" />,
    },
    {
      title: "Phase 4: Delivery & Review",
      desc: "I will email you the final copy and then get on a call to review it together.",
      icon: <CheckCircle className="w-7 h-7 text-brandSecondary" />,
    },
  ];

  return (
    <section className="relative bg-brandPrimary py-24">
      <div className="container mx-auto max-w-6xl px-6 text-brandDark">
        <h2 className="text-2xl md:text-3xl font-serif text-center mb-16">
          This is how I approach all my copywriting projects
        </h2>

        {/* === Vertical Timeline (Desktop) === */}
        <div className="hidden md:block relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 h-full w-[3px] bg-brandSecondary/30 transform -translate-x-1/2"></div>

          <div className="space-y-24">
            {phases.map((p, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={`relative flex items-start ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  {/* Connector dot */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-brandSecondary shadow-md z-10`}
                  ></div>

                  {/* Content Card */}
                  <div
                    className={`relative bg-white border border-brandSecondary/20 shadow-md rounded-xl p-6 max-w-sm ${
                      isLeft
                        ? "mr-[55%] text-left"
                        : "ml-[55%] text-right"
                    }`}
                  >
                    <div
                      className={`flex items-center gap-3 mb-2 ${
                        isLeft ? "justify-start" : "justify-end flex-row-reverse"
                      }`}
                    >
                      {p.icon}
                      <h4 className="font-semibold text-lg">{p.title}</h4>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* === Mobile Layout === */}
        <div className="md:hidden space-y-10 mt-10">
          {phases.map((p, i) => (
            <div
              key={i}
              className="relative bg-white rounded-xl shadow-md p-6 border border-brandSecondary/20"
            >
              <div className="flex items-center gap-3 mb-3">
                {p.icon}
                <h4 className="font-semibold text-brandDark text-base">{p.title}</h4>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <p className="mt-20 text-center font-medium text-brandDark">
          Also, I'm not going anywhere after your project ends. I'll be your biggest cheerleader. Your success is mine too.
          That is why every project I take on comes with my... 
        </p>
      </div>
    </section>
  );
}
