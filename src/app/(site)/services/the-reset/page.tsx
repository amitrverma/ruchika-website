import Link from "next/link";
import Image from "next/image";
import DetailFAQAccordion from "../../../components/Services/DetailFAQAccordion";
import { CTAButton } from "../../../components/ui/CTAButton";

export const metadata = {
  title: "The Reset | Ruchika Copy Solutions",
  description:
    "Offer structure, offer messaging, and strategic social content for service providers whose business has moved beyond the early stage.",
};

const earlyStage = [
  "You may have started by taking the work that came your way,",
  "Setting initial rates to build momentum,",
  "Relying on referrals,",
  "And posting on social media to keep inquiries coming in.",
];

const marketShift = [
  "When every service provider sounds exactly the same, it's difficult for prospective clients to notice.",
  "Eventually, when they are ready to hire, they simply compare prices and choose whoever is the most affordable.",
];

const currentSignals = [
  "Inquiries focus on pricing rather than the value you provide.",
  "Content gets polite engagement, but rarely leads to serious conversations.",
  "Social media no longer feels as effective as it once did.",
];

const focusAreas = [
  {
    title: "Structuring the offer",
    body: [
      "As a service provider, you are selling your expertise, which can be harder to package than a straightforward product. It can be difficult to shape it in a way that feels easy to explain and easy for the right client to understand.",
      "I refine your offer so it clearly communicates what you do and why it is valuable.",
      "This makes it easier for the right client to recognise why it is the right choice for what they need right now.",
    ],
  },
  {
    title: "Resetting the messaging around it",
    body: [
      "Once the offer is clear, I work on how it should be communicated online.",
      "That may include shifting away from beginner-stage pain point messaging, making your value easier to recognise, showing the thinking behind your work, and helping potential clients understand why your approach is worth investing in.",
    ],
  },
  {
    title: "Creating content that tests the new direction",
    body: [
      "Content becomes more useful when it is built on clear strategy.",
      "Instead of posting simply to stay active, you use content to communicate your offer, share your point of view, and see how the market responds to the new messaging.",
      "This gives you insight into what resonates with the right people.",
    ],
  },
];

const included = [
  {
    title: "Research + Strategy Work",
    body: [
      "The strategic groundwork for your offer structure, messaging, and content.",
      "This includes:",
    ],
    bullets: [
      "Current and past client surveys (3 to 5 where possible) to understand why people hire you and what they value most.",
      "Audience research through forums and online communities to uncover real language, needs, and buying motivations.",
      "Competitor study to identify common messaging patterns and where stronger differentiation is possible.",
      "This ensures your messaging is built on real market insight, not guesswork.",
    ],
  },
  {
    title: "Offer Structure Document",
    subtitle: "Internal document presented as Word doc",
    body: [
      "A practical document that clarifies your offer so it is easier to explain, easier to market, and more aligned with the stage your business is in now.",
    ],
    bullets: [
      "The Offer + Outcome: I'll help clarify exactly what you are selling and the bigger problem or result it helps solve.",
      "Focus Areas (What's Included): I'll organise your expertise into clear focus areas so clients can understand the full value of your support without feeling overwhelmed by unnecessary detail.",
      "Investment + Scope: I'll recommend pricing, boundaries, and scope in a way that feels commercially sensible for your current stage of business.",
    ],
  },
  {
    title: "Messaging Foundation Document",
    subtitle: "Internal document presented as Word doc",
    body: [
      "A focused messaging foundation document built around your offer and the specific audience it is meant to attract.",
      "This gives you clarity on how to position the offer, communicate its value, and speak to the people most likely to hire now.",
      "This includes:",
    ],
    bullets: [
      "Your Right-Fit Client Profile: who this offer is best suited for, what stage they are in, and what they care about right now.",
      "Positioning: I'll help you clarify your positioning around your offer for your right-fit clients.",
      "Value Proposition: the outcome your client gets from working with you.",
      "Differentiation: what makes you and your offer a stronger fit than other available options.",
      "Messaging Pillars: the key ideas, angles, and your POV that guide your content on social.",
    ],
  },
  {
    title: "Strategic Social Media Posts",
    bullets: [
      "8 long-form posts created to bring your new messaging into the market.",
      "These posts are designed to help you talk about your offer with more clarity, attract better-fit attention, and understand what is resonating with the audience you want to reach.",
      "You can repurpose them across the social media platform of your choice and adapt them into different formats.",
    ],
  },
  {
    title: "Profile Copy Updates",
    body: [
      "To support stronger first impressions and inquiries, I'll also refine key profile touchpoints where relevant.",
      "This may include:",
    ],
    bullets: ["Instagram bio", "LinkedIn headline", "LinkedIn About section"],
    footnote: "The number of posts can be increased based on your requirements.",
  },
];

const strongFit = [
  "You are getting clients through referrals, repeat work, or word of mouth.",
  "Your business is generating consistent revenue.",
  "You have a growing understanding of where your strengths lie and what clients value most about working with you.",
  "You are showing up online and have some visibility or credibility in your space.",
  "You have a clearer idea of who you want to work with and who you no longer want to attract.",
  "Your skills and expertise have grown, but your current messaging has not fully caught up.",
  "You know your business is capable of charging more or attracting stronger-fit clients, though your online presence is not fully reflecting that yet.",
];

const lookingTo = [
  "Increase your rates with stronger positioning",
  "Be seen as a founder or expert, not just another freelancer",
  "Communicate your work more clearly and more confidently",
  "Attract better-fit clients who value your expertise",
  "Refine an existing offer or introduce a new one",
  "Create content that leads to inquiries from right-fit clients",
];

const notBestFit = [
  "Service providers who are still in the very early stages of building their business.",
  "Those whose revenue is not yet consistent and who are still focused on building initial traction.",
  "Those who are still gaining clarity on their offer or the audience they want to serve.",
  "Those who have not yet worked with enough clients to identify patterns in their strengths or best-fit work.",
  "Those expecting their positioning, offer, and messaging to be built entirely from scratch.",
];

const steps = [
  {
    title: "Step 1: Your Business Deep Dive",
    body: [
      "Once you book, I'll send you a detailed questionnaire to understand your business, current offers, client patterns, strengths, goals, and where your messaging feels unclear or outdated.",
      "You do not need to have everything figured out before filling it in. We'll go through the process together, and anything that feels unclear or difficult to answer on your own, we'll work through together.",
    ],
  },
  {
    title: "Step 2: Research + Strategy Work",
    body: [
      "Once I receive your questionnaire, I begin the strategic research that helps shape stronger positioning and messaging.",
      "This includes:",
    ],
    bullets: [
      "Current and past client surveys (minimum 3 to 5) to understand why people hire you, what they value most, and what keeps them referring or returning.",
      "Forum / group research to uncover how your audience talks about their problems, goals, frustrations, and buying decisions in their own words.",
      "Competitor study to identify common messaging patterns in your market and where there is room to position you differently.",
      "This research helps me build messaging that is grounded in real market insight, not guesswork.",
    ],
  },
  {
    title: "Step 3: Offer Structure",
    body: [
      "Using the research gathered, I build a clearer structure for your offer so it is easier to explain, and easier for the right clients to understand.",
      "This includes:",
    ],
    bullets: ["The Offer + Outcome", "Focus Areas (What's Included)", "Investment + Scope"],
  },
  {
    title: "Step 4: Offer Messaging Foundation",
    body: ["I then build your messaging foundation document around your offer.", "This includes:"],
    bullets: [
      "Your Right-Fit Client Profile",
      "Positioning",
      "Value Proposition",
      "Differentiation",
      "Messaging Pillars",
    ],
  },
  {
    title: "Step 5: Strategic Content Creation",
    body: [
      "Once the messaging direction is clear, I write 8 strategic long-form posts designed to bring the new messaging into the market.",
      "These posts help you talk about your offer with more clarity, attract better-fit attention, and see how the market responds.",
      "You can repurpose them into the content format and platform of your choice.",
    ],
  },
  {
    title: "Step 6: Delivery",
    body: ["You'll receive:"],
    bullets: [
      "A Word document with your Offer Structure + Messaging Foundation",
      "A Word document with your 8 strategic social media posts",
      "You leave with clearer positioning, stronger messaging, and content that supports the next stage of growth.",
    ],
  },
];

const resetIncludes = [
  "Your Business Deep Dive",
  "Research + Strategy Work",
  "Offer Structure Document",
  "Messaging Foundation Document",
  "8 Strategic Social Media Posts",
  "Instagram bio, LinkedIn headline, and About section updates where relevant",
];

const payment = [
  "50% upfront to secure your project slot and begin the process",
  "50% after you review the first draft and before final delivery",
];

const notes = [
  "This pricing is for one offer + one audience segment",
  "If your business has multiple offers or very different audience segments, the investment may vary based on scope",
  "A minimum of 8 long-form posts is included. Additional content can be added on request for additional investment",
  "This is an introductory rate for the first 3 clients only. Pricing will increase after that",
  "Most projects are completed within around 6 weeks, depending on survey response times, communication turnaround, and feedback timelines",
];

const faqs = [
  {
    question: "I'm not fully clear on my offer yet. Can I still book?",
    answer: [
      "Yes, as long as you already have an existing service and some client experience behind you. You do not need perfect clarity before we begin. Part of this process is helping shape what is already there into a clearer, stronger offer.",
    ],
  },
  {
    question: "Is this for brand new businesses?",
    answer: [
      "This offer is better suited to service providers who already have traction, client experience, and proof that their work creates results. If you are still validating your first offer, a different kind of support may be more useful first.",
    ],
  },
  {
    question: "Is this a copywriting or messaging strategy?",
    answer: [
      "Both, with strategy first.",
      "We begin by clarifying your offer, positioning, value proposition, and messaging direction. Once that foundation is clear, I create content built on that strategy.",
    ],
  },
  {
    question: "What will I receive?",
    answer: ["You'll receive:"],
    bullets: [
      "A Word document with your Offer Structure + Offer Messaging Foundation",
      "A Word document with 8 strategic long-form social media posts",
    ],
  },
  {
    question: "How long does the process take?",
    answer: [
      "Most projects are completed within around 6 weeks. This can vary slightly depending on survey response times, communication turnaround, and feedback timelines.",
    ],
  },
  {
    question: "What if I have more than one service or work with different types of clients?",
    answer: [
      "Different offers and different audiences usually need different messaging.",
      "When you try to speak to everyone at once, the message often becomes too broad and less compelling to the people you most want to reach.",
      "That is why The Reset focuses on one offer + one audience segment first.",
      "We start by building a strong foundation for the offer you most want to grow right now. This gives you a clear home base for your marketing.",
      "If you have other services that are very different or target a completely different group of people, we can discuss additional scope or a custom plan.",
    ],
  },
  {
    question: "I'm already getting referrals. Do I still need stronger messaging?",
    answer: [
      "Referrals are valuable, but they often rely on how someone else explains what you do, and they can be inconsistent as a growth channel.",
      "Strong messaging helps when a referral lands on your profile, website, or content and wants to understand quickly why you are the right-fit.",
      "It also reduces the need to repeatedly explain your value on calls and helps create a business that is easier to choose without relying entirely on word of mouth.",
    ],
  },
  {
    question: "What if I'm not fully sure who my right-fit client is yet?",
    answer: [
      "That is more common than you think.",
      "Most founders already have useful clues through past clients, favourite projects, repeat work, and the kind of people they naturally do their best work with.",
      "Part of this process is helping identify those patterns and turn them into clearer messaging.",
    ],
  },
  {
    question: "How is this different from hiring a social media manager?",
    answer: [
      "A social media manager usually helps with consistency, execution, and staying visible online.",
      "This offer focuses on the strategy underneath the content.",
      "Before creating posts, we clarify your offer, positioning, and messaging so the content has something stronger to communicate.",
      "Without that foundation, it is possible to post regularly and still attract the wrong people.",
    ],
  },
  {
    question: "Will I need to change my entire business model?",
    answer: [
      "Not at all.",
      "This is usually less about changing what you do, and more about changing how clearly it is positioned and communicated.",
      "Many founders are already doing stronger work than their current messaging reflects.",
    ],
  },
  {
    question: "Do I need to be active on social media already?",
    answer: [
      "Not necessarily, but this offer is especially valuable if social media is one of your growth channels and you want better-fit inquiries from it.",
    ],
  },
  {
    question: "Will you guarantee leads or clients?",
    answer: [
      "No ethical strategist can guarantee that.",
      "What I help improve is how clearly your offer is understood, positioned, and communicated so it has a stronger chance of attracting the right people.",
    ],
  },
  {
    question: "Can I request more content?",
    answer: ["Yes. Additional posts can be added based on your needs for additional investment."],
  },
  {
    question: "Do I have to use the 8 posts on one specific platform?",
    answer: [
      "No. The posts are written as strategic pieces that can be tailored to the platform you want to focus on, whether that is LinkedIn, Instagram, email, or another channel.",
      "Each post is written to the character limit of your primary platform, up to 2200 characters for Instagram or up to 3000 characters for LinkedIn. During our discovery call, we'll confirm which platform you want to focus on.",
      "You can also repurpose them into shorter captions, carousels, video scripts, newsletters, or other formats.",
    ],
  },
  {
    question: "Do you offer content support without The Reset package?",
    answer: [
      "Yes. I also take on content-only projects for businesses that already have clear offers and messaging in place.",
      "This is best suited for founders who need strategic content creation rather than offer or messaging support.",
    ],
  },
  {
    question: "Are revisions included?",
    answer: [
      "Yes. One round of revisions is included for the 8 strategic posts after you review the first draft. These revisions are for edits and refinements, not full rewrites.",
      "For the Offer Structure and Messaging Foundation documents, I'll make any needed corrections or clarifications during the process.",
    ],
  },
];

function Section({
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
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
        {subtitle && (
          <p className="mt-3 max-w-3xl text-xl leading-relaxed text-[#666666]">
            {subtitle}
          </p>
        )}
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

function TextBlock({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((line) => (
        <p key={line}>{line}</p>
      ))}
    </>
  );
}

export default function TheResetPage() {
  return (
    <main className="bg-brandPrimary text-brandDark">
      <section className="relative overflow-hidden pt-40 pb-16 md:pt-48 md:pb-20">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brandDark/30 to-transparent" />
        <div className="container grid max-w-6xl items-end gap-10 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-4 text-lg font-semibold text-brandSecondary">
              For founders running service-based businesses
            </p>
            <h1 className="text-[2.6rem] font-semibold leading-tight text-brandDark md:text-[3.25rem]">
              {"You're showing up on social media."}
            </h1>
            <div className="mt-5 max-w-2xl space-y-4 text-xl leading-relaxed text-[#666666]">
              <p>{"But the people you most want to work with aren't reaching out."}</p>
              <p>
                {
                  "I'll help you structure your offer, reset the messaging around it, and create content that helps you see how it resonates with the right people."
                }
              </p>
            </div>
            <div className="mt-9 flex flex-wrap gap-4">
              <CTAButton href="/contact">Book a Discovery Call</CTAButton>
              <CTAButton href="mailto:hello@ruchikacopy.com" variant="outline">
                Email Me
              </CTAButton>
            </div>
          </div>
          <aside className="rounded-md border border-brandDark/10 bg-white/75 p-7">
            <p className="text-base font-semibold text-brandSecondary">
              The Reset
            </p>
            <p className="mt-4 text-2xl font-semibold leading-tight text-brandDark">
              Offer Structure + Offer Messaging + Content
            </p>
            <p className="mt-4 leading-relaxed text-brandDark/75">
              Made for service providers whose messaging still reflects the
              early-stage version of their business.
            </p>
            <p className="mt-5 font-semibold text-brandDark">
              Total Investment: ₹32,000 ($375 USD)
            </p>
          </aside>
        </div>
      </section>

      <Section
        eyebrow="Who this is for"
        title="The messaging that helped you get started early on."
        subtitle="May not be the one that helps you scale today."
      >
        <p>Does this sound familiar?</p>
        <p>Early in your business...</p>
        <BulletList items={earlyStage} />
        <p>It helped you get clients, gain experience, and build confidence in your expertise.</p>
        <p>
          Back then, your inbound strategy was straightforward: identify your
          client&apos;s pain points and focus your content on solving them.
        </p>
        <p>That was enough to stand out. It made clients feel seen and understood.</p>
        <p>
          But now, the market has changed. Everyone, including your competitors,
          is using this same approach.
        </p>
        <BulletList items={marketShift} />
        <p>You try a new content format. You rewrite your bio. You tweak your offer.</p>
        <p>And still, the people you want in your DMs are nowhere to be found.</p>
        <p>
          This isn&apos;t because your business or your expertise has changed, but
          because the market around you has.
        </p>
      </Section>

      <Section
        title="In 2026, your business has moved well beyond the early stage."
        subtitle="Your work and your results speak for themselves."
        className="bg-white/55"
      >
        <p>And yet...</p>
        <BulletList items={currentSignals} />
        <p>To reach clients who are actually ready to invest, your messaging has to shift.</p>
      </Section>

      <Section
        eyebrow="Introducing"
        title="The Reset"
        subtitle="Offer Structure + Offer Messaging + Content"
      >
        <p>
          Made for service providers whose messaging still reflects the
          early-stage version of their business.
        </p>
        <p>Designed to help you attract right-fit clients ready to invest.</p>
      </Section>

      <Section eyebrow="What I help you do" title="Three focus areas">
        <p>
          I help founders running service-based businesses close that gap by
          working on three focus areas:
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          {focusAreas.map((area) => (
            <article key={area.title} className="rounded-md border border-brandDark/10 bg-white/85 p-6">
              <h3 className="text-[1.35rem] font-semibold leading-snug text-brandDark">{area.title}</h3>
              <div className="mt-4 space-y-3 text-base text-brandDark/75">
                <TextBlock lines={area.body} />
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="What's included" title="The strategic groundwork and deliverables" className="bg-white/55">
        <div className="grid gap-5 md:grid-cols-2">
          {included.map((item) => (
            <article key={item.title} className="rounded-md border border-brandDark/10 bg-brandPrimary/80 p-6">
              <h3 className="text-[1.35rem] font-semibold leading-snug text-brandDark">{item.title}</h3>
              {item.subtitle && (
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-brandDark/55">
                  {item.subtitle}
                </p>
              )}
              {item.body && (
                <div className="mt-4 space-y-3 text-base text-brandDark/75">
                  <TextBlock lines={item.body} />
                </div>
              )}
              <div className="mt-4 text-base text-brandDark/75">
                <BulletList items={item.bullets} />
              </div>
              {item.footnote && <p className="mt-4 text-base text-brandDark/75">{item.footnote}</p>}
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Fit" title="Who this is for">
        <p>
          This is a strong fit for growing service providers who already have
          clients, proof of their work, and are now ready for the next stage of growth.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-md bg-white/80 p-6">
            <h3 className="text-[1.35rem] font-semibold leading-snug text-brandDark">This is a strong fit if:</h3>
            <div className="mt-4 text-base"><BulletList items={strongFit} /></div>
          </div>
          <div className="rounded-md bg-white/80 p-6">
            <h3 className="text-[1.35rem] font-semibold leading-snug text-brandDark">You may be looking to:</h3>
            <div className="mt-4 text-base"><BulletList items={lookingTo} /></div>
          </div>
          <div className="rounded-md bg-white/80 p-6">
            <h3 className="text-[1.35rem] font-semibold leading-snug text-brandDark">This may not be best for:</h3>
            <div className="mt-4 text-base"><BulletList items={notBestFit} /></div>
          </div>
        </div>
      </Section>

      <Section eyebrow="How it works" title="From unclear messaging to stronger positioning" className="bg-white/55">
        <p>
          This process is designed to help you move from knowing you are good at
          what you do, but struggling to communicate it clearly, to stronger
          positioning, clearer messaging, and content that reflects the level
          your business is at now.
        </p>
        <div className="grid gap-5 md:grid-cols-2">
          {steps.map((step) => (
            <article key={step.title} className="rounded-md border border-brandDark/10 bg-brandPrimary/80 p-6">
              <h3 className="text-[1.35rem] font-semibold leading-snug text-brandDark">{step.title}</h3>
              <div className="mt-4 space-y-3 text-base text-brandDark/75">
                <TextBlock lines={step.body} />
                {step.bullets && <BulletList items={step.bullets} />}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Investment"
        title="Your investment to make your offer clearer, strengthen your messaging, and create content"
        subtitle="That helps the right clients say yes."
      >
        <p>Introductory Offer (for the first 3 clients)</p>
        <p>The Reset includes:</p>
        <BulletList items={resetIncludes} />
        <div className="rounded-md border border-brandSecondary/25 bg-brandSecondary/10 p-7">
          <p className="text-2xl font-semibold text-brandDark">
            Total Investment: ₹32,000 ($375 USD)
          </p>
        </div>
        <p>Mode of Payment</p>
        <BulletList items={payment} />
        <p>Important Notes</p>
        <BulletList items={notes} />
        <div className="flex flex-wrap gap-4 pt-3">
          <CTAButton href="/contact">Click here to book a discovery call</CTAButton>
          <CTAButton href="mailto:hello@ruchikacopy.com" variant="outline">
            Or email me at hello@ruchikacopy.com
          </CTAButton>
        </div>
      </Section>

      <Section eyebrow="Client actual words" title="What it feels like to work through this">
        <p>I recently worked with an Online Business Manager + VA on her offer and messaging.</p>
        <p>Here&apos;s what she had to say:</p>
        <figure className="rounded-md border border-brandDark/10 bg-white/85 p-7">
          <blockquote className="space-y-4 text-xl leading-relaxed text-brandDark">
            <p>
              {
                '"Working with Ruchika gave me so much clarity on my offer, messaging, and how I want to show up online."'
              }
            </p>
            <p>
              {
                '"The offer structure document helped me think through my services, pricing, positioning, and what made my offer stand out.'
              }
            </p>
            <p>
              {
                'The messaging document gave me a lot of clarity around who my right-fit client is, what makes me different, and how to communicate my value with confidence.'
              }
            </p>
            <p>
              {
                "What stood out most was that she didn't just write copy. She asked smart questions, thought deeply about the business, and helped me make better decisions throughout the process."
              }
            </p>
            <p>
              {
                "The content also felt aligned with my brand and resonated with my audience."
              }
            </p>
            <p>
              {
                "I'd definitely recommend working with her if you want more clarity in your business and messaging, along with strong copywriting skills.\""
              }
            </p>
          </blockquote>
          <figcaption className="mt-6 text-brandDark/75">
            <span className="block font-semibold text-brandDark">Tanishq Jha</span>
            Founder of Tanishqjha.co
          </figcaption>
        </figure>
      </Section>

      <DetailFAQAccordion
        faqs={faqs}
        title="Important questions you may have"
        kicker="Before booking a discovery call"
      />

      <Section eyebrow="Meet the thinker behind the work" title="Hi, I'm Ruchika, founder of Ruchika Copy Solutions.">
        <div className="grid items-start gap-10 md:grid-cols-[1fr_280px]">
          <div className="space-y-5">
            <p>I strongly believe service providers are experts with strategic thinking.</p>
            <p>And we should not be viewed through the same lens as every online business.</p>
            <p>
              Many of us are often given the same advice as content creators or course
              creators when it comes to followers, offers, pricing, and growth.
            </p>
            <p>I have nothing against those business models. They simply operate differently.</p>
            <p>
              As service providers, our main offer is not a digital product, and we
              usually do not need thousands of followers to build a strong business.
            </p>
            <p>
              We are selling skill, expertise, experience, and outcomes that often
              require trust before someone decides to hire us.
            </p>
            <p>
              That means the messaging has to be different too. We cannot always adopt
              general advice given to every kind of online business.
            </p>
            <p>
              Especially for founders who are scaling and using social media as a
              major channel for visibility and leads, the structure of the offer and
              the messaging around it need to be clear.
            </p>
            <p>That is where I come in.</p>
            <p>
              I help service-based founders attract right-fit clients who are ready to
              invest through clearer offers, stronger messaging, and strategic copy.
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
        <div className="flex flex-wrap gap-4 pt-5">
          <CTAButton href="/contact">Book a Discovery Call</CTAButton>
          <CTAButton href="mailto:hello@ruchikacopy.com" variant="outline">
            Or email me at hello@ruchikacopy.com
          </CTAButton>
        </div>
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
