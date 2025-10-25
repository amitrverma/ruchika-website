export default function NextChapterSection() {
  return (
     <section className="relative bg-white py-30">
      <div className="container relative z-10 max-w-4xl px-6 text-brand-dark leading-relaxed">
        <h3 className="text-2xl md:text-3xl font-serif text-center md:text-left mb-10">
          And here’s what happened next…
        </h3>

        <div className="space-y-6 text-lg md:text-[1.125rem] max-w-3xl text-brandDark">
          <p>
            I decided to invest in myself and upskill — because I can’t expect others to invest
            in me if I haven’t done that for myself first.
          </p>

          <p>
            I learned brand messaging and conversion copywriting from top experts in the field,
            including courses from{" "}
            <strong>Copyhackers</strong>,{" "}
            <strong>Conversion Copywriting School</strong>, and several mentoring programs.
          </p>

          <p>
            My approach blends{" "}
            <strong>clarity</strong>,{" "}
            <strong>psychology</strong>, and{" "}
            <strong>authentic tone of voice</strong>{" "}
            to craft copy that genuinely resonates with your right-fit clients.
          </p>
        </div>

        {/* Credentials bar */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
          <div className="px-5 py-2 bg-brandSecondary rounded-full text-sm font-medium text-white border border-brandDark/20">
            Certified Conversion Copywriter
          </div>
          <div className="px-5 py-2 bg-brandSecondary rounded-full text-sm font-medium text-white border border-brandDark/20">
            Brand Messaging Specialist
          </div>
          <div className="px-5 py-2 bg-brandSecondary rounded-full text-sm font-medium text-white border border-brandDark/20">
            9+ Years in Marketing
          </div>
        </div>
      </div>
    </section>
  );
}
