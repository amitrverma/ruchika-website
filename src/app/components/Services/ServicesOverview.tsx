import Link from "next/link";
import { Megaphone, Globe, Mail, FileText } from "lucide-react"; // lucide-react icons

export default function ServicesOverview() {
  const services = [
    {
      title: "Brand Messaging & Tone of Voice Guide",
      icon: <Megaphone className="w-8 h-8 text-brand-accent" />,
      description:
        "Get clear on who you are, who you serve, and how you communicate — so all your copy and content stays cohesive and strategic.",
      bullets: [
        "Brand voice guide",
        "Audience insights",
        "Messaging pillars",
        "Word phrases and examples",
        "Digital booklet (delivered in Canva)",
      ],
    },
    {
      title: "Website Copywriting",
      icon: <Globe className="w-8 h-8 text-brand-accent" />,
      description:
        "Strategic, conversion-focused website copy that positions you as the expert, speaks to your ideal client, and turns visitors into buyers.",
      bullets: [
        "Home, About, and Services pages",
        "SEO best practices",
        "Aligned with design for flow & conversion",
      ],
    },
    {
      title: "Email Copywriting",
      icon: <Mail className="w-8 h-8 text-brand-accent" />,
      description:
        "Sequences that nurture your audience, warm leads, and drive action — from booking calls to buying offers.",
      bullets: ["Welcome sequences", "Launch campaigns", "Newsletters"],
    },
    {
      title: "Sales Page Copywriting",
      icon: <FileText className="w-8 h-8 text-brand-accent" />,
      description:
        "Research-backed, long-form sales pages that speak to deeper desires, answer objections, and position your offer as the clear solution.",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container max-w-5xl text-brand-dark">
        <h2 className="text-2xl md:text-3xl font-serif text-center mb-12">
          Here’s how I can help you attract clients who value your thinking
          <br />
          <span className="text-base font-normal">(not just your deliverables)</span>
        </h2>

        {/* === Card Grid === */}
        <div className="grid gap-8 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-all p-8 shadow-sm"
            >
              <div>
                <div className="mb-4">{service.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>

                {service.bullets && (
                  <ul className="list-disc list-inside mt-4 space-y-1 text-gray-700">
                    {service.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-block bg-brand-accent text-white px-5 py-2 rounded-md hover:bg-brand-dark transition-colors"
                >
                  INQUIRE HERE
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* === Custom Needs === */}
        <p className="text-sm text-center mt-10">
          Need something different? Every project is customized.{" "}
          <Link href="/contact" className="text-brand-accent underline hover:text-brand-dark">
            Let’s talk about what’s best for your business.
          </Link>
        </p>
      </div>
    </section>
  );
}
