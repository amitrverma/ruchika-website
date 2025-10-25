import Link from "next/link";
import { Calendar, Phone, FileText, Rocket } from "lucide-react";

export default function FinalCTASection() {
  const steps = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Inquiry",
      desc: "Fill the form — I’ll reply within 24–48 hrs (Mon–Fri) with a confirmation & call link.",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Clarity Call",
      desc: "We discuss goals, fit, and scope. You’ll get straight answers, no fluff.",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Proposal",
      desc: "Clear deliverables, timeline, and pricing so you can decide with confidence.",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Kickoff",
      desc: "Sign + first milestone → we start. Smooth onboarding and momentum from day one.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="container max-w-5xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-brandDark leading-tight">
            Let’s skip to the part where your copy confidently attracts your ideal clients
          </h2>
          <p className="text-lg text-brandDark/80 mt-4">
            Here’s the path — simple, human, and efficient
          </p>
        </div>

        {/* Stepper */}
        <div className="relative">

          <ol className="grid gap-8 md:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="relative flex md:block items-start md:text-center">
                {/* node */}
                <div className="relative z-10 flex items-center justify-center md:mx-auto w-10 h-10 rounded-full bg-white text-brandSecondary font-semibold border border-brandSecondary/30">
                  {i + 1}
                </div>

                {/* content */}
                <div className="mt-3 md:mt-5 md:px-4">
                  <div className="flex md:justify-center items-center gap-2 text-brandSecondary mb-1">
                    <span className="text-brandSecondary/90">{s.icon}</span>
                    <h3 className="text-base font-semibold">{s.title}</h3>
                  </div>
                  <p className="text-sm text-brandDark/80 leading-relaxed">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* CTA panel */}
        <div className="mt-14">
          <div className="mx-auto max-w-3xl rounded-2xl border border-brandSecondary/30 bg-white p-6 md:p-8 shadow-sm">
            <p className="text-brandDark text-center text-lg md:text-xl font-medium">
              Ready to move from “thinking about it” to <span className="underline underline-offset-4">booking better clients</span>?
            </p>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-7 py-3 rounded-md bg-brandSecondary text-white font-medium tracking-wide hover:bg-brandDark hover:text-white transition-all shadow-md"
              >
                I’M IN — SCHEDULE A CALL
              </Link>
              <span className="text-sm text-brandDark/60">or</span>
              <Link
                href="/services"
                className="text-sm underline underline-offset-4 decoration-brandSecondary/60 hover:text-brandDark"
              >
                Review services & pricing
              </Link>
            </div>

            <div className="mt-4 text-center text-xs text-brandDark/60">
              Calendar updated weekly · No high-pressure sales · Clear next steps
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
