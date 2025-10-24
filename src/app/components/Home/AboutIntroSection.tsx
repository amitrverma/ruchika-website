import Image from "next/image";

export default function AboutIntroSection() {
  return (
    <section className="bg-brandAccent py-20">
      <div className="container grid md:grid-cols-[3fr_2fr] items-center gap-12">
        {/* Text column */}
        <div className="space-y-5">
          <h2 className="text-3xl md:text-4xl font-serif text-brandDark leading-snug">
            Hi, I’m Ruchika — your strategic partner for brand messaging
            and copywriting services
          </h2>

          <p className="text-brandDark italic text-lg">
            When there are many amazing copywriters out there, why choose me?{" "}
            <span className="text-brandDark text-base">(And I’m only comparing myself to other HUMANS)</span>
          </p>

          <h3 className="font-semibold text-brandDark">
            With my marketing background and copywriting skills, I’ve got your back.
            Here’s what I bring:
          </h3>

          <p className="text-brandDark leading-relaxed">
            After earning my master’s in marketing, I spent 9 years in marketing,
            writing, and managing content across websites, emails, and social media
            in the corporate world.
          </p>

          <p className="text-brandDark leading-relaxed">
            I understand how a marketing funnel works and how to integrate SEO keywords
            strategically. I structure copy for the best user experience and apply
            marketing psychology to craft messages that engage and drive results.
          </p>

          <p className="text-brandDark leading-relaxed">
            <strong className="font-semibold text-brandDark">
              I’m a Copyhackers certified copywriter.
            </strong>{" "}
            While marketing and copywriting overlap in research, analysis, and strategy,
            copywriters have a special skill — they craft messages that resonate deeply
            and inspire action.
          </p>

          <p className="text-brandDark leading-relaxed">
            So I decided to learn the art of copywriting and brand messaging & tone of voice
            from top experts in this field.
          </p>
        </div>

        {/* Image column */}
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="relative w-[280px] h-[280px] rounded-2xl overflow-hidden border border-gray-200 shadow-md">
            <Image
              src="/assets/ruchika-profile.png" // replace with your actual image path
              alt="Ruchika Ratna - Copywriter and Brand Messaging Specialist"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Certification badges */}
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Image
              src="/assets/badge-webcopy.png"
              alt="Copyhackers Web Copy Certificate"
              width={100}
              height={100}
              className="object-contain"
            />
            <Image
              src="/assets/badge-emails.png"
              alt="Copyhackers Email Copy Certificate"
              width={100}
              height={100}
              className="object-contain"
            />
            <Image
              src="/assets/badge-brandvoice.png"
              alt="Conversion Copywriting Brand Voice Certificate"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
