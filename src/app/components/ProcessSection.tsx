export default function ProcessSection() {
  const phases = [
    {
      title: "Phase 1 · Research",
      description:
        "Once we decide to work together, I’ll send you a brand questionnaire — yes, the kind that makes you think deeply about your business. I then dive into understanding your audience through surveys, competitor analysis, and review mining. This foundation ensures every word of your copy is based on real insights, not guesswork.",
    },
    {
      title: "Phase 2 · Analyze & Plan",
      description:
        "Here, I synthesize everything from the research phase to refine your messaging pillars and positioning. Together, we shape how your brand shows up — so your audience doesn’t just understand what you do, but why it matters.",
    },
    {
      title: "Phase 3 · Copywriting & Editing",
      description:
        "This is where the strategy turns into words. I write and edit using proven conversion frameworks, blending storytelling with clarity. You’ll receive the first draft (web wireframe or Google Doc) to review and provide feedback.",
    },
    {
      title: "Phase 4 · Delivery & Review",
      description:
        "Once approved, I’ll deliver the final copy in an organized format and hop on a review call with you. You also get two weeks of post-delivery support to fine-tune or adjust once the copy goes live.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-brandDark mb-14">
          My Copywriting Process
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {phases.map((phase, i) => (
            <div
              key={phase.title}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-brandDark mb-3">
                {phase.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{phase.description}</p>
            </div>
          ))}
        </div>

        {/* Guarantee Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-serif mb-4 text-brandDark">
            The Copywriter-Who-Really-Cares Guarantee
          </h3>
          <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
            <p className="mb-4">
              My support doesn’t end when your copy is delivered. Every project comes with:
            </p>
            <ul className="list-disc list-inside text-left inline-block text-gray-600 space-y-1 mb-6">
              <li>Two weeks of post-delivery support for any fine-tuning you need</li>
              <li>Clear, transparent communication throughout the project</li>
              <li>On-time delivery — always, unless we mutually agree otherwise</li>
            </ul>
            <p>
              I see every collaboration as a partnership — your success is mine too.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
