import Link from "next/link";
import Image from "next/image";
import DetailFAQAccordion from "../../../components/Services/DetailFAQAccordion";
import { CTAButton } from "../../../components/ui/CTAButton";

export const metadata = {
  title: "Website Messaging & Copywriting | Ruchika Copy Solutions",
  description:
    "Done-for-you website messaging and copywriting for service providers planning to launch or relaunch their website.",
};

const confidencePoints = [
  "Even when people find you through referrals or social media, your website is where they assess your work and decide whether to move forward.",
  "It is one of the most powerful brand assets you have, and it should reflect the caliber of work you deliver.",
  "There is a specific kind of confidence that comes from knowing your online presence carries the same weight as the results you create.",
];

const launchReasons = [
  "You are planning to launch your first website",
  "Or you might be ready to move on from a site that was built quickly to get you started.",
  "Or you may be looking at a website that once fit your business well, but now feels out of sync with the level of thinking, experience, and standards you bring today.",
];

const shifts = [
  '"Getting clients" to "attracting the right clients."',
  '"Proving your value" to "positioning yourself as an expert in your space."',
  '"Doing good work" to "building a business you are deeply proud of."',
];

const websiteRoles = [
  "It helps qualified prospects who have already set aside a budget evaluate your work and decide their next step.",
  "It is not meant for audiences who still need to be convinced that services like yours are worth investing in.",
];

const refinementCards = [
  {
    title: "Stop convincing",
    body: "Your website stops trying to convince people why your services matter and starts helping the right people see why you're the right partner for them.",
  },
  {
    title: "Make your point of view your differentiator",
    body: "You lead with how you think and how you work, instead of relying too heavily on pain points or outcome-based messaging.",
  },
  {
    title: "Focus on user experience",
    body: "Your pages become more intentional, streamlined, and easier to navigate.",
  },
  {
    title: "Let your website filter naturally",
    body: "Fewer misaligned inquiries come through, and more conversations start with people who already understand your value.",
  },
];

const approachGoals = [
  "To position themselves as the obvious choice in their space",
  "To attract right-fit clients who are ready to invest",
];

const credentials = [
  "Education: Master's in marketing",
  "Spent 9 years in corporate: writing and managing content across websites, emails, and social media",
  "Copyhackers certified copywriter: website, emails, sales page, brand messaging & voice",
];

const pointOfView = [
  "Your website should be an end-of-funnel asset, written for clients who are ready to invest and deciding between options.",
  "This means your copy focuses on why you're the right choice, your expertise, approach, and results, not on convincing people they need your type of service at all.",
];

const processFoundations = [
  "Messaging rooted in deep audience research: based on survey responses from your right-fit clients and forum/group mining.",
  'Conversion-focused copywriting: writing that moves past "what you do" and makes your value and relevance unmistakable to the right audience.',
  "Brand voice and tone: to ensure your copy has the qualities, expression, and quirks that give your brand human characteristics.",
];

const fitFeelings = [
  "Your business has evolved since you first launched, and your current website, or the lack of one, no longer reflects where you are now",
  "You want a website that serves as your main marketing asset, a single place you can confidently share with everyone",
  "Your current website feels unclear and lacks cohesion after multiple updates made at different stages of your business",
  "You're operating fully in a founder role and want a trusted partner to take ownership of your website strategy and copy",
  "You know your business needs a website, but you haven't prioritized it yet because it's hard to know where to start.",
];

const lookingFor = [
  "Website messaging that focuses on your expertise as a service provider, supported by conversion-focused copy",
  "Clear website structure with user experience in mind, so visitors know where to go next when they land on your site",
  "Copy that helps visitors evaluate fit and take the next step",
  "Fewer misaligned inquiries, leading to more relevant conversations with best-fit clients",
  "A website you can confidently share with referrals",
];

const suitedFor = [
  "You run a primarily service-based business. Digital products or courses may exist alongside it, but services remain your core offering.",
  "You clearly understand your best-fit clients and who you want your website to attract.",
  "You have an established track record of client work.",
  "Your business has moved beyond the early stage.",
];

const inclusions = [
  {
    title: "Pre-Strategy Questionnaire",
    body: [
      "Once we decide to work together, I'll send you a detailed questionnaire to understand your business.",
      "You don't need to have everything figured out before filling it in. We'll walk through it together during the strategy session, and anything that feels unclear, we'll work through it together.",
    ],
  },
  {
    title: "Strategy session",
    body: ["A 60-90 minute call to understand your business, audience, and goals."],
    bullets: [
      "High-level website structure focused on clarity, flow, and ease of navigation",
      "Number of pages required and the role each page plays",
      "How pages should be organized if you serve different audiences",
      "User journey mapping to guide visitors from entry to action",
      "Offer positioning to ensure the right clients are directed to the right services",
    ],
  },
  {
    title: "Audience research",
    subtitle: "Customer surveys, competitor analysis, forum mining",
    bullets: [
      "Surveys with past or current right-fit clients",
      "Email templates to request survey participation",
      "Review of existing testimonials and client feedback",
      "Competitor analysis to understand positioning patterns",
      "Forum and group research to capture how your audience talks about their needs, decisions, and expectations",
    ],
  },
  {
    title: "Website copywriting",
    bullets: [
      "Conversion-focused copywriting",
      "Copywriting that uses relevant keywords naturally, with no keyword stuffing",
      "Messaging written for right-fit clients who are evaluating fit and next steps",
      "Clear, direct copy aligned with your expertise and positioning",
    ],
  },
  {
    title: "Brand voice & tone",
    bullets: [
      "Refinement of your brand voice for your website",
      "Consistency across pages",
    ],
  },
  {
    title: "Wireframing",
    subtitle: "Canva",
    bullets: ["Wireframes in Canva to show how messaging flows across pages"],
  },
  {
    title: "Revisions",
    bullets: [
      "Structured revision rounds at key stages",
      "Collaborative feedback and refinement",
    ],
  },
  {
    title: "Designer Collaboration",
    body: [
      "If you're working with a website designer, I can collaborate with them to ensure the messaging, page structure, and copy are implemented clearly and effectively.",
    ],
  },
];

const investmentFactors = [
  "One signature service vs multiple distinct services",
  "One audience vs different audience segments",
  "Straightforward offer vs layered/custom offers",
];

const paymentStructure = [
  "50% upfront to secure your spot",
  "50% after final copy approval, before wireframing begins",
];

const testimonials = [
  {
    project: "For website messaging and copywriting project",
    quote:
      "The final copy not only captured my vision, but also provided a clear path for my audience to take action.",
    name: "Tanishq Jha",
    role: "Founder, Tanishqjha.co - OBM & VA",
  },
  {
    project: "For new product launch email and landing page project",
    quote:
      "Her knowledge, professionalism, and commitment to delivering exceptional results make her an invaluable asset for any business.",
    name: "Shatakshi",
    role: "Green Trinkets",
  },
  {
    project: "For content writing project",
    quote:
      "Working with her felt effortless. Her process is structured but deeply human. The copy we developed not only resonates with our audience but also elevated our brand's presence across channels.",
    name: "Amit Verma",
    role: "Founder, Xaltris Technologies",
  },
];

const faqs = [
  {
    question: "Should I invest in a new website right now, even if this is my first one?",
    answer: [
      "For a service provider, a website makes sense when your business has enough clarity for people to evaluate fit and take the next step.",
      "This is usually a good time if one or more of these are true:",
    ],
    bullets: [
      "You are clear on what you offer and who you want to work with",
      "You are already getting interest through referrals or word of mouth",
      "You want a single place you can confidently send people to understand your work",
      "Your current website, or the absence of one, does not reflect the level you are operating at",
      "Clients have mentioned that your online presence doesn't reflect the work you deliver",
    ],
    after: [
      "For businesses with an existing site, this often shows up as outdated messaging, unclear structure, or a site that no longer supports your pricing or positioning.",
      "For a first website, the goal is different but just as important. It is not about doing more marketing. It is about giving interested people a clear, accurate picture of your work so they can decide whether to move forward.",
      'Even when clients find you through referrals or word of mouth, they still visit your website at a decision point. When they land there, they are asking themselves one question: "Is this right for me?"',
      "Your website either helps them feel confident about that decision or creates hesitation.",
    ],
  },
  {
    question: "What if my business might change or evolve again?",
    answer: [
      "That is normal. Most service businesses evolve over time.",
      "A strategic website is not about locking yourself into something permanent. It is about clearly reflecting where your business is now, so it can support conversations, referrals, and decisions today.",
      "There will never be a perfect time to get a new website. But to answer you honestly, if your direction is broadly clear, even if details continue to evolve, that is usually enough to move forward.",
      "If timing is what's holding you back, let's discuss it. Sometimes the hesitation is about waiting for certainty that won't arrive, and sometimes waiting is the right call. We'll figure that out together.",
    ],
  },
  {
    question: "What's the process after we decide to work together?",
    answer: [
      "Strategy call: Once we decide to work together, I'll share a questionnaire to understand your business, ideal client, goals, and voice. We'll walk through this together during the strategy call.",
      "Website structure and messaging direction: Based on the strategy call, I'll map the high-level website structure and messaging direction so we're aligned before moving forward.",
      "Audience research: Audience research is done through client surveys, forum and group mining, and any existing client feedback you already have. Client interviews are optional and available for an additional fee.",
      "Copywriting: Website copy is drafted and refined based on the agreed structure, messaging, and research.",
      "Wireframes: Once the copy is approved, wireframes are created in Canva. I'll collaborate with your designer to support implementation.",
    ],
  },
  {
    question: "What does the timeline look like?",
    answer: [
      "The typical timeline is around 8 weeks from the strategy session to final copy and wireframes.",
      "This can vary slightly based on:",
    ],
    bullets: ["Timely feedback", "Availability for surveys or reviews", "Scope of the website"],
    after: ["Exact timelines are confirmed during our call."],
  },
  {
    question: "When would we begin working together?",
    answer: [
      "Start dates depend on availability and alignment.",
      "Once we connect and confirm fit, we'll lock in a start date together.",
    ],
  },
  {
    question: "What will you need from me during the process?",
    answer: ["You'll need to:"],
    bullets: [
      "Share your questionnaire responses",
      "Be available for the strategy session",
      "Share context about your business, offers, and audience",
      "Support audience research by sharing access to past client feedback or sending surveys",
      "Provide feedback at key stages and be available for virtual check-ins to keep the work aligned.",
    ],
  },
  {
    question: "Are client interviews required?",
    answer: [
      "No.",
      "Audience research is primarily done through surveys. Client interviews are optional and can be added if needed, scoped separately.",
    ],
  },
  {
    question: "Can this still work if I'm a writer or marketer myself?",
    answer: [
      "Yes, of course. Many writers benefit from an external strategic lens, especially for their own websites.",
      "If you're unsure whether this makes sense for you, we can talk it through on the call.",
    ],
  },
  {
    question: "Should I work with a designer or a copywriter first?",
    answer: [
      "It's best to start with website messaging and copy before design.",
      "Your website's structure, flow, and page decisions should come from what needs to be communicated: who you serve, how you position your work, what questions your visitors need answered, and what actions you want them to take. That clarity makes the design process smoother, faster, and more effective.",
      "That said, design plays a crucial role.",
      "A strong website isn't just well-written. It's also easy to navigate, visually clear, and built to support how people actually move through a site.",
      "Good design makes copy shine.",
      "This is why, once your copy is approved, I create wireframes and collaborate with your designer so the final site supports both clarity and conversion.",
      "If this feels aligned, I'd be glad to explore working together.",
    ],
  },
];

function Section({
  eyebrow,
  title,
  children,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-12 md:py-16 ${className}`}>
      <div className="container max-w-4xl">
        {eyebrow && (
          <p className="mb-4 text-base font-semibold text-brandSecondary md:text-lg">
            {eyebrow}
          </p>
        )}
        <h2 className="text-[2rem] font-semibold leading-tight text-brandDark md:text-[2.5rem]">
          {title}
        </h2>
        <div className="mt-8 space-y-5 text-[1.05rem] leading-[1.75] text-brandDark/85">
          {children}
        </div>
      </div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 pl-5">
      {items.map((item) => (
        <li key={item} className="list-disc marker:text-brandDark/55">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function TheResetDetailsPage() {
  return (
    <main className="bg-brandPrimary text-brandDark">
      <section className="relative overflow-hidden pt-40 pb-16 md:pt-48 md:pb-20">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brandDark/30 to-transparent" />
        <div className="container grid max-w-6xl items-end gap-10 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-4 text-lg font-semibold text-brandSecondary">
              For service providers planning to launch or re-launch their website in 2026
            </p>
            <h1 className="text-[2.6rem] font-semibold leading-tight text-brandDark md:text-[3.25rem]">
              Done-For-You Website Messaging & Copywriting.
            </h1>
            <div className="mt-5 max-w-2xl space-y-4 text-xl leading-relaxed text-[#666666]">
              <p>To attract right-fit clients who are ready to invest.</p>
              <p>
                I&apos;ll help you refine your website messaging so it reflects your
                expertise, positioning, and rates.
              </p>
            </div>
            <div className="mt-9 flex flex-wrap gap-4">
              <CTAButton href="/contact">BOOK A DISCOVERY CALL</CTAButton>
              <CTAButton href="mailto:hello@ruchikacopy.com" variant="outline">
                EMAIL ME
              </CTAButton>
            </div>
          </div>
          <aside className="rounded-md border border-brandDark/10 bg-white/75 p-7">
            <p className="text-base font-semibold text-brandSecondary">
              Investment
            </p>
            <p className="mt-4 text-2xl font-semibold leading-tight text-brandDark">
              Projects start at ₹45,000 ($500 USD)
            </p>
            <p className="mt-4 leading-relaxed text-brandDark/75">
              Final pricing is confirmed after our discovery call once I understand
              the scope, goals, and website structure required.
            </p>
          </aside>
        </div>
      </section>

      <Section eyebrow="Who this is for" title="You already know your website matters.">
        <p>And what your website says matters just as much as how it looks.</p>
        <BulletList items={confidencePoints} />
        <p>
          Because of that, launching a strategic website has become an important
          milestone for this year.
        </p>
        <BulletList items={launchReasons} />
        <p>Whatever the case may be, one thing is for sure...</p>
      </Section>

      <Section title="You're at a stage in your business" className="bg-white/55">
        <p>where you&apos;re not just looking for more clients.</p>
        <p>Instead...</p>
        <p>You are moving from:</p>
        <BulletList items={shifts} />
        <p>Put simply...</p>
        <p>
          You&apos;re looking for right-fit clients who are ready to invest in your
          expertise. Not just deliverables.
        </p>
        <p>And your website plays a crucial role here.</p>
        <BulletList items={websiteRoles} />
        <p>
          This means treating your website as a decision tool, not an information
          or education tool.
        </p>
      </Section>

      <Section
        eyebrow="Refine your website messaging"
        title="For people who are ready to invest and hire you as a strategic partner"
      >
        <div className="grid gap-5 md:grid-cols-2">
          {refinementCards.map((card) => (
            <div
              key={card.title}
              className="rounded-md border border-brandDark/10 bg-white/80 p-6"
            >
              <h3 className="text-[1.35rem] font-semibold leading-snug text-brandDark">
                {card.title}
              </h3>
              <p className="mt-3 text-brandDark/75">{card.body}</p>
            </div>
          ))}
        </div>
        <p>
          As a result, you begin receiving inquiries from right-fit clients who
          are ready to invest in your experience and expertise.
        </p>
        <p>
          This is my approach when I take website messaging and copywriting
          projects for scaling service providers who want:
        </p>
        <BulletList items={approachGoals} />
      </Section>

      <Section eyebrow="Meet the thinker behind the work" title="Hi, I'm Ruchika.">
        <div className="grid items-start gap-10 md:grid-cols-[1fr_280px]">
          <div className="space-y-5">
            <p>
              Your strategic partner focused on the messaging behind the anchor of
              your business: your website.
            </p>
            <p>This is my foundation:</p>
            <BulletList items={credentials} />
            <p>My point of view on website messaging and copywriting:</p>
            <BulletList items={pointOfView} />
            <p>
              So, if you are looking for a professional and conversion-focused website
              copywriter to support you in launching your website in 2026, I will be
              honoured.
            </p>
          </div>
          <div className="relative mx-auto h-[280px] w-[280px] rounded-[2rem] border border-gray-200 bg-white">
            <div className="relative h-full w-full overflow-hidden rounded-[1.5rem]">
              <Image
                src="/assets/ruchika-profile.png"
                alt="Ruchika Ratna - Copywriter and Brand Messaging Specialist"
                fill
                sizes="(min-width: 768px) 280px, 70vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Introducing"
        title="Website Messaging & Copywriting for Service Providers"
        className="bg-white/55"
      >
        <p>A strategic website copywriting process built on...</p>
        <BulletList items={processFoundations} />
      </Section>

      <Section eyebrow="Fit" title="Does this feel like a fit for you?">
        <p>
          This is for growing service-based businesses built on referrals, word of
          mouth, and solid client work, now ready to launch or relaunch a website
          that amplifies your success and attracts right-fit clients.
        </p>
        <p>A few things to consider as you evaluate fit:</p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-md bg-white/80 p-6">
            <h3 className="text-[1.35rem] font-semibold leading-snug text-brandDark">If you feel:</h3>
            <div className="mt-4 text-base">
              <BulletList items={fitFeelings} />
            </div>
          </div>
          <div className="rounded-md bg-white/80 p-6">
            <h3 className="text-[1.35rem] font-semibold leading-snug text-brandDark">
              You&apos;re looking for:
            </h3>
            <div className="mt-4 text-base">
              <BulletList items={lookingFor} />
            </div>
          </div>
          <div className="rounded-md bg-white/80 p-6">
            <h3 className="text-[1.35rem] font-semibold leading-snug text-brandDark">
              This is best suited for:
            </h3>
            <div className="mt-4 text-base">
              <BulletList items={suitedFor} />
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="What's included" title="A strategic process from messaging to wireframes">
        <div className="grid gap-5 md:grid-cols-2">
          {inclusions.map((item) => (
            <article
              key={item.title}
              className="rounded-md border border-brandDark/10 bg-white/85 p-6"
            >
              <h3 className="text-[1.35rem] font-semibold leading-snug text-brandDark">
                {item.title}
              </h3>
              {item.subtitle && (
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-brandDark/55">
                  {item.subtitle}
                </p>
              )}
              {item.body?.map((line) => (
                <p key={line} className="mt-4 text-brandDark/75">
                  {line}
                </p>
              ))}
              {item.bullets && (
                <div className="mt-4 text-base text-brandDark/75">
                  <BulletList items={item.bullets} />
                </div>
              )}
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Investment"
        title="Investment for one of your most powerful brand assets"
        className="bg-white/55"
      >
        <p>
          Investment depends on the complexity of your website, specifically how
          many offers, audiences, or decision paths your site needs to speak to.
        </p>
        <p>For example:</p>
        <BulletList items={investmentFactors} />
        <div className="rounded-md border border-brandSecondary/25 bg-brandSecondary/10 p-7">
          <p className="text-2xl font-semibold text-brandDark">
            Projects start at ₹45,000 ($500 USD)
          </p>
          <p className="mt-4">
            Final pricing is confirmed after our discovery call once I understand
            the scope, goals, and website structure required.
          </p>
        </div>
        <p>Payment structure: Payment is split into two parts:</p>
        <BulletList items={paymentStructure} />
        <div className="flex flex-wrap gap-4 pt-3">
          <CTAButton href="/contact">CLICK HERE TO BOOK A DISCOVERY CALL</CTAButton>
          <CTAButton href="mailto:hello@ruchikacopy.com" variant="outline">
            Or email me at hello@ruchikacopy.com
          </CTAButton>
        </div>
      </Section>

      <Section
        eyebrow="Client words"
        title="What past clients have said about working together"
      >
        <p>
          These are from past clients I&apos;ve worked with across messaging, copy, and
          content. They reflect how I work, think, and support clients.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="rounded-md border border-brandDark/10 bg-white/85 p-6"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brandSecondary">
                {testimonial.project}
              </p>
              <blockquote className="mt-4 text-xl leading-relaxed text-brandDark">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <figcaption className="mt-5 text-brandDark/75">
                <span className="block font-semibold text-brandDark">
                  {testimonial.name}
                </span>
                {testimonial.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <DetailFAQAccordion
        faqs={faqs}
        title="A few important questions you may have before you express interest"
        kicker=""
      />

      <section className="bg-brandPrimary pb-16">
        <div className="container flex max-w-3xl flex-wrap gap-4">
          <CTAButton href="/contact">CLICK HERE TO BOOK A NO OBLIGATION INTRO CALL</CTAButton>
          <CTAButton href="mailto:hello@ruchikacopy.com" variant="outline">
            Or email me at hello@ruchikacopy.com
          </CTAButton>
        </div>
      </section>

      <Section eyebrow="A final note" title="I know investing in your website is not a small decision.">
        <p>
          For many service providers, a website sits at the intersection of
          identity, growth, and visibility.
        </p>
        <p>
          It&apos;s not just about pages or words. It&apos;s about how clearly your work,
          thinking, and standards come across when someone is deciding whether to
          trust and work with you.
        </p>
        <p>
          If this page resonated, it likely means you&apos;re already thinking
          seriously about how your website should support your next stage of
          growth.
        </p>
        <p>And if it doesn&apos;t feel like the right timing yet, that clarity matters too.</p>
        <p>Either way, I appreciate you taking the time to read through this.</p>
        <p className="text-xl font-semibold text-brandSecondary">- Ruchika</p>
        <p className="pt-8">
          <Link
            href="/services"
            className="font-semibold text-brandSecondary underline-offset-4 hover:underline"
          >
            Back to services
          </Link>
        </p>
      </Section>
    </main>
  );
}
