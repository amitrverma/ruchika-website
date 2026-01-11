import Image from "next/image";
import { CheckSquare } from "lucide-react";

export default function MeetPartner() {
  return (
    <section id="meet-your-strategic-partner" className="bg-white">
      <div className="container py-14 md:py-20 text-brandDark">
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-base md:text-lg font-semibold">Meet your strategic partner</p>

          <div className="grid md:grid-cols-[3fr_2fr] border border-brandDark/40">
            <div className="bg-brandPrimary/60 p-6 md:p-8 flex items-center">
              <p className="text-base md:text-lg leading-relaxed text-brandDark">
                Hi, I am{" "}
                <span className="font-semibold text-brandSecondary">Ruchika</span>, your strategic
                partner for brand messaging and copywriting services
              </p>
            </div>
            <div className="relative min-h-[220px] md:min-h-[260px] border-l border-brandDark/40">
              <Image
                src="/assets/ruchika-profile.png"
                alt="Ruchika Ratna - Copywriter and Brand Messaging Specialist"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-base md:text-lg font-semibold text-brandSecondary">
              This is my foundation:
            </p>
            <div className="grid gap-4 md:grid-cols-3 border border-brandDark/40">
              <div className="bg-brandPrimary/60 p-4 border-b md:border-b-0 md:border-r border-brandDark/40">
                <p className="text-sm uppercase tracking-wide text-brandSecondary">Education</p>
                <p className="text-base md:text-lg leading-relaxed">Master&apos;s in marketing</p>
              </div>
              <div className="bg-brandPrimary/60 p-4 border-b md:border-b-0 md:border-r border-brandDark/40">
                <p className="text-sm uppercase tracking-wide text-brandSecondary">Experience</p>
                <p className="text-base md:text-lg leading-relaxed">
                  Spent 9 years in corporate: writing and managing content across websites, emails,
                  and social media
                </p>
              </div>
              <div className="bg-brandPrimary/60 p-4">
                <p className="text-sm uppercase tracking-wide text-brandSecondary">Certification</p>
                <p className="text-base md:text-lg leading-relaxed">
                  Copyhackers certified copywriter: websites, emails, sales page, brand messaging
                  and voice
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-base md:text-lg font-semibold text-brandSecondary">
              My point of view on website messaging and copywriting:
            </p>
            <div className="border border-brandDark/40 bg-brandPrimary/60 p-5 space-y-3">
              <div className="flex items-start gap-3">
                <CheckSquare className="mt-1 h-5 w-5 text-brandSecondary" />
                <p className="text-base md:text-lg leading-relaxed">
                  Your website should be an end-of-funnel asset written for clients who are ready to
                  invest and deciding between options.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckSquare className="mt-1 h-5 w-5 text-brandSecondary" />
                <p className="text-base md:text-lg leading-relaxed">
                  This means your copy focuses on why you are the right choice (your expertise,
                  approach, results), not on convincing people they need your type of service at all.
                </p>
              </div>
            </div>
          </div>

          <p className="text-base md:text-lg leading-relaxed">
            If you are looking for a professional and conversion-focused website copywriter to
            support your website launch in the first half of 2026, I will be honored to help.
          </p>
        </div>
      </div>
    </section>
  );
}
