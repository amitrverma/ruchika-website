import Link from "next/link";
import { Megaphone, Globe, Mail, FileText } from "lucide-react";

export default function ServicesOverview() {
  const services = [
    {
      title: "Brand Messaging & Tone of Voice Guide",
      icon: <Megaphone className="w-8 h-8 text-brand-accent" />,
      description:
        "This is where we get clear on who you are, who you serve, and how you communicate, so all your copy and content stays cohesive and strategic",
      bullets: [
        "Brand values",
        "Mission statement",
        "Brand promise",
        "Brand positioning",
        "Brand story",
        "Brand archetypes",
        "Brand personality",
        "Ideal client archetypes",
        "Ideal client profiles",
        "Tone of voice",
        "Word + phrases",
        "Content pillars",
        "Digital booklet created in Canva",
      ],
    },
    {
      title: "Website Copywriting",
      icon: <Globe className="w-8 h-8 text-brand-accent" />,
      description:
        "Strategic, conversion-focused website copywriting that positions you as the expert, speaks directly to your ideal client, and turns curious visitors into confident buyers.",
      bullets: [
        "Website copy created for your brand and written with SEO best practices in mind",
        "Mini Brand messaging guide",
        "Customer/market research to get to know your target audience",
        "Communication with your website designer so your new copy fits perfectly into your website",
      ],
    },
    {
      title: "Email Copywriting",
      icon: <Mail className="w-8 h-8 text-brand-accent" />,
      description:
        "Sequences that nurture your audience, warm up leads, and drive action—whether that's booking calls, buying offers, or building long-term trust.",
      bullets: [
        "Welcome sequences", 
        "Webinar Sequences", 
        "Sales sequences",
        "Newsletters",
      ],
    },
    {
      title: "Sales Page Copywriting",
      icon: <FileText className="w-8 h-8 text-brand-accent" />,
      description:
        "Research-backed, long-form sales page copy that speaks to your audience's deeper desires, addresses their objections, and positions your offer as the solution they've been looking for.",
    },
  ];

  return (
     <section className="relative bg-brandPrimary py-30">

      <div className="container relative z-10 max-w-6xl text-brandDark">
        <h2 className="text-2xl md:text-3xl font-serif text-center mb-14 leading-snug">
          Here’s how I help you attract clients who{" "}
          <span className="text-brand-accent font-semibold">value your thinking</span>
          <br />
          <span className="text-base font-normal text-brandDark/80">
            (not just your deliverables)
          </span>
        </h2>

        {/* === Card Grid === */}
        <div className="grid gap-10 sm:grid-cols-2">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative flex flex-col justify-between bg-white/80 backdrop-blur-sm border border-brandDark/10 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_35px_rgba(0,0,0,0.08)] transition-all duration-300 p-8 hover:-translate-y-1"
            >
              {/* Icon + Title */}
              <div>
                <div className="mb-4 ">{service.icon}</div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-brand-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-brandDark/80 leading-relaxed">
                  {service.description}
                </p>

                {service.bullets && (
                  <ul className="list-disc list-inside mt-4 space-y-1 text-brandDark/70">
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
                  className="inline-block bg-brandSecondary text-white font-medium tracking-wide px-6 py-2.5 rounded-full hover:bg-brandDark hover:text-white transition-all duration-300"
                >
                  INQUIRE HERE
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* === Custom Needs CTA === */}
        <div className="mt-16 text-center text-sm text-brandDark/80">
          Need something different? All my services are project-based and can be tailored to your specific needs. If you have a
unique scope in mind or need a custom combination of services, let's talk about what works
best for your business.{" "}
          <Link
            href="/contact"
            className="text-brand-accent font-medium underline-offset-2 hover:underline hover:text-brandDark"
          >
            Inquire here
          </Link>
        </div>
      </div>
    </section>
  );
}
