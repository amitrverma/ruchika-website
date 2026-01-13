"use client";

export default function FinalCTA() {
  const openModal = () => {
    window.dispatchEvent(new Event("open-beta-interest-form"));
  };

  return (
    <section id="final-cta" className="bg-white">
      <div className="container py-14 md:py-20 text-brandDark">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-base md:text-lg leading-relaxed font-semibold text-brandSecondary">
            If this resonates with where your business is:
          </p>

          <p className="text-xl md:text-2xl leading-relaxed font-semibold">
            You are invited to join as a beta client for website messaging and
            copywriting.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            Two beta spots - 50% off - First half of 2026 launch.
          </p>

          <button
            type="button"
            onClick={openModal}
            className="inline-flex items-center justify-center gap-2 px-7 py-3 font-semibold tracking-wide rounded-full text-white bg-brandSecondary hover:bg-brandDark shadow-md hover:shadow-lg transition-all duration-200 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-brandSecondary cursor-pointer"
          >
            CLICK HERE TO EXPRESS INTEREST IN THE BETA SPOT
          </button>

          <p className="text-base md:text-lg leading-relaxed">
            Two spots are available at the beta rate. Once the spots are filled,
            I will close the form.
          </p>

          <p className="text-base md:text-lg leading-relaxed">
            Sharing your details shows interest only. We will connect on a call
            before anything is finalized.
          </p>
        </div>
      </div>
    </section>
  );
}
