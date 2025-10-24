import Link from "next/link";
import { Calendar, Phone, FileText, Rocket } from "lucide-react";

export default function FinalCTASection() {
  const steps = [
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Inquiry",
      desc: "Fill the form — I’ll reply within 24–48 hrs (Mon–Fri) with a confirmation & call link.",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Clarity Call",
      desc: "We discuss goals, fit, and scope. You’ll get straight answers, no fluff.",
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      title: "Proposal",
      desc: "Clear deliverables, timeline, and pricing so you can decide with confidence.",
    },
    {
      icon: <Rocket className="w-5 h-5" />,
      title: "Kickoff",
      desc: "Sign + first milestone → we start. Smooth onboarding and momentum from day one.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="container max-w-5xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-dark leading-tight">
            Let’s skip to the part where your copy confidently attracts your ideal clients
          </h2>
          <p className="text-lg text-brand-dark/80 mt-4">
            Here’s the path — simple, human, and efficient
          </p>
        </div>

        {/* Stepper */}
        <div className="relative">
          {/* connector line (desktop) */}
          <div className="hidden md:block absolute top-1/2 left-16 right-16 h-[2px] bg-brand-accent/30 -translate-y-1/2" />

          <ol className="grid gap-8 md:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="relative flex md:block items-start md:text-center">
                {/* node */}
                <div className="relative z-10 flex items-center justify-center md:mx-auto w-10 h-10 rounded-full bg-brand-accent text-brand-dark font-semibold shadow-sm">
                  {i + 1}
                </div>

                {/* connector (mobile) */}
                {i < steps.length - 1 && (
                  <div className="md:hidden ml-5 pl-5 border-l-2 border-brand-accent/30 py-4" />
                )}

                {/* content */}
                <div className="mt-3 md:mt-5 md:px-4">
                  <div className="flex md:justify-center items-center gap-2 text-brand-dark mb-1">
                    <span className="text-brand-dark/90">{s.icon}</span>
                    <h3 className="text-base font-semibold">{s.title}</h3>
                  </div>
                  <p className="text-sm text-brand-dark/80 leading-relaxed">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* CTA panel */}
        <div className="mt-14">
          <div className="mx-auto max-w-3xl rounded-2xl border border-brand-accent/30 bg-brand-accent/10 p-6 md:p-8 shadow-sm">
            <p className="text-brand-dark text-center text-lg md:text-xl font-medium">
              Ready to move from “thinking about it” to <span className="underline underline-offset-4">booking better clients</span>?
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3 rounded-md bg-brand-accent text-brand-dark font-medium tracking-wide hover:bg-brand-dark hover:text-white transition-all shadow-md"
              >
                I’M IN — SCHEDULE A CALL
              </Link>
              <span className="text-sm text-brand-dark/60">or</span>
              <Link
                href="/services"
                className="text-sm underline underline-offset-4 decoration-brand-accent/60 hover:text-brand-dark"
              >
                Review services & pricing
              </Link>
            </div>

            <div className="mt-4 text-center text-xs text-brand-dark/60">
              Calendar updated weekly · No high-pressure sales · Clear next steps
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
