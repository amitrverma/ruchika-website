import Link from "next/link";
import { Megaphone, Globe, Mail, FileText } from "lucide-react";

export default function ServicesOverview() {
  const services = [
    {
      title: "Brand Messaging & Tone of Voice Guide",
      icon: <Megaphone className="w-8 h-8 text-brand-accent" />,
      description:
        "Clarity first. Define who you are, who you serve, and how you sound — so every word feels cohesive, consistent, and strategic.",
      bullets: [
        "Brand voice guide",
        "Audience insights",
        "Messaging pillars",
        "Word phrases & examples",
        "Digital booklet (Canva)",
      ],
    },
    {
      title: "Website Copywriting",
      icon: <Globe className="w-8 h-8 text-brand-accent" />,
      description:
        "Conversion-ready web copy that blends psychology and storytelling — helping visitors trust, relate, and take action.",
      bullets: [
        "Home, About, Services pages",
        "SEO best practices",
        "Design-aligned for flow & conversion",
      ],
    },
    {
      title: "Email Copywriting",
      icon: <Mail className="w-8 h-8 text-brand-accent" />,
      description:
        "Emails that build relationships, not noise. Designed to nurture, connect, and convert.",
      bullets: ["Welcome sequences", "Launch campaigns", "Newsletters"],
    },
    {
      title: "Sales Page Copywriting",
      icon: <FileText className="w-8 h-8 text-brand-accent" />,
      description:
        "Research-driven, long-form storytelling that walks your reader from curiosity to clarity — and yes, to clicking 'buy'.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-[#fafaf9] to-white py-28 overflow-hidden">
      {/* Background visual energy */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-brand-accent/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-brand-accent/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container relative z-10 max-w-6xl text-brand-dark">
        <h2 className="text-2xl md:text-3xl font-serif text-center mb-14 leading-snug">
          Here’s how I help you attract clients who{" "}
          <span className="text-brand-accent font-semibold">value your thinking</span>
          <br />
          <span className="text-base font-normal text-brand-dark/80">
            (not just your deliverables)
          </span>
        </h2>

        {/* === Card Grid === */}
        <div className="grid gap-10 sm:grid-cols-2">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative flex flex-col justify-between bg-white/80 backdrop-blur-sm border border-brand-dark/10 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_35px_rgba(0,0,0,0.08)] transition-all duration-300 p-8 hover:-translate-y-1"
            >
              {/* Icon + Title */}
              <div>
                <div className="mb-4">{service.icon}</div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-brand-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-brand-dark/80 leading-relaxed">
                  {service.description}
                </p>

                {service.bullets && (
                  <ul className="list-disc list-inside mt-4 space-y-1 text-brand-dark/70">
                    {service.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* CTA */}
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-block bg-brand-accent text-brand-dark font-medium tracking-wide px-6 py-2.5 rounded-full hover:bg-brand-dark hover:text-white transition-all duration-300"
                >
                  INQUIRE HERE
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* === Custom Needs CTA === */}
        <div className="mt-16 text-center text-sm text-brand-dark/80">
          Need something different? Every project is customized.{" "}
          <Link
            href="/contact"
            className="text-brand-accent font-medium underline-offset-2 hover:underline hover:text-brand-dark"
          >
            Let’s talk about what’s best for your business.
          </Link>
        </div>
      </div>
    </section>
  );
}
