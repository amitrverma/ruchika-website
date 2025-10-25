import { Search, Brain, PenTool, CheckCircle } from "lucide-react";

export default function ProcessSection() {
  const phases = [
    {
      title: "Phase 1: Research",
      desc: "We start with a brand questionnaire and discovery doc to uncover your business goals, audience, and tone. I deep-dive into understanding what will make them say 'yes' to your offer.",
      icon: <Search className="w-8 h-8 text-brand-accent" />,
    },
    {
      title: "Phase 2: Analyzing & Planning",
      desc: "Here, I analyze everything uncovered in research to refine your messaging. This is where clarity starts taking shape.",
      icon: <Brain className="w-8 h-8 text-brand-accent" />,
    },
    {
      title: "Phase 3: Copywriting & Editing",
      desc: "I combine strategy and frameworks to craft copy that feels authentic and drives action. You’ll receive the first draft for feedback and refinement.",
      icon: <PenTool className="w-8 h-8 text-brand-accent" />,
    },
    {
      title: "Phase 4: Delivery & Review",
      desc: "You’ll receive the final copy and we’ll review it together. I also provide support for two weeks after delivery for small adjustments or clarifications.",
      icon: <CheckCircle className="w-8 h-8 text-brand-accent" />,
    },
  ];

  return (
    <section className="relative bg-brandPrimary py-30">
      <div className="container relative z-10 max-w-5xl text-brand-dark">
        <h2 className="text-2xl md:text-3xl font-serif text-center mb-14">
          This is how I approach all my copywriting projects
        </h2>

        {/* --- Circular layout (desktop) --- */}
        <div className="hidden md:grid grid-cols-2 gap-10 relative">
          {/* RIGHT side — Phases 1 & 2 */}
          <div className="flex flex-col items-start justify-center pl-12 space-y-12">
            {phases.slice(0, 2).map((p, i) => (
              <div key={i} className="max-w-sm">
                <div className="flex items-center gap-3 mb-2">
                  <span>{p.icon}</span>
                  <h4 className="font-semibold text-lg">{p.title}</h4>
                </div>
                <p className="text-gray-700">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* LEFT side — Phases 3 & 4 */}
          <div className="flex flex-col items-end justify-center pr-12 text-right space-y-12">
            {phases.slice(2).map((p, i) => (
              <div key={i + 2} className="max-w-sm">
                <div className="flex items-center justify-end gap-3 mb-2">
                  <span>{p.icon}</span>
                  <h4 className="font-semibold text-lg">{p.title}</h4>
                </div>
                <p className="text-gray-700">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Center circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 rounded-full bg-white text-brandSecondary flex items-center justify-center text-center font-medium shadow-lg border border-brandSecondary">
              Collaborative <br /> Process
            </div>
          </div>
        </div>

        {/* --- Mobile stacked layout --- */}
        <div className="md:hidden space-y-10">
          {phases.map((p, i) => (
            <div
              key={i}
              className="relative bg-white rounded-xl shadow-md p-6 border border-brand-accent/20"
            >
              <div className="flex items-center gap-3 mb-3">
                {p.icon}
                <h4 className="font-semibold text-brandDark text-base">{p.title}</h4>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-16 text-center font-medium text-brandDark">
          I don’t just write copy — I partner with you to create words that work hard for your
          business.
        </p>
      </div>
    </section>
  );
}
