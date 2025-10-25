export default function BeliefSection() {
  return (
    <section className="bg-brandSecondary/50 py-28 text-white">
      <div className="container max-w-4xl text-center px-6">
        <h2 className="text-3xl md:text-5xl font-serif font-semibold leading-tight mb-6">
          I believe good copywriting <br className="hidden md:block" /> is good marketing.
        </h2>

        <div className="mx-auto w-16 h-[2px] bg-brandDark/50 mb-8" />

        <p className="text-lg md:text-xl leading-relaxed text-brandDark font-light">
          Every project I take on begins with <span className="font-medium">audience research</span>,
          strategic insight, and <span className="font-medium">messaging clarity</span>.{" "}
          You’re not just getting a writer — you’re gaining a <span className="font-medium">
          partner</span> who helps your business grow with authority and attract the right-fit clients.
        </p>
      </div>
    </section>
  );
}
