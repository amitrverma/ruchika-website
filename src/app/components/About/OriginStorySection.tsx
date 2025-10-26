export default function OriginStorySection() {
  return (
    <section className="relative bg-brandPrimary py-30">
      {/* Background motif */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-brand-accent/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-accent/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="container relative z-10 max-w-4xl px-6 text-brandDark leading-relaxed">
        <h3 className="text-2xl md:text-3xl font-serif mb-10 text-center md:text-left">
          Ruchika Copy Solutions believes in building a business that supports your life —{" "}
          <span className="text-brand-accent font-semibold">not the other way around.</span>
        </h3>

        <div className="space-y-6 text-lg md:text-[1.125rem] max-w-3xl">
          <p>
            After my master’s in marketing, I spent 9 years working full-time in corporate.
          </p>
          <p>
           In 2017, I took a break. Like, a loooong break.
          </p>

          <p>
           My health had taken a hit, I had a young child to care for, and I was completely
overwhelmed. I felt drained—physically and mentally. So I chose to press pause.
          </p>

          <p>
I focused on healing, moving my body, and eating better. And for the first time in a long
while, I just felt better.
          </p>

          <p>
            I wanted to get back to work, but not the 8-to-10-hour grind. Not at the cost of my
well-being.
          </p>
            <p>
            Even with all the doubts in my head—especially after such a long gap—I took the first
step. I chose to reinvent myself. To freelance.
          </p>

          <p className="border-l-4 border-brand-accent/50 pl-5 italic text-brandSecondary/90">
            I believe that everyone has the ability to reinvent themselves, no matter what they've
been through. It's never too late.
          </p>
        </div>

        <div className="mt-12 w-20 h-[2px] bg-brand-accent/40 mx-auto md:mx-0" />
      </div>
    </section>
  );
}
