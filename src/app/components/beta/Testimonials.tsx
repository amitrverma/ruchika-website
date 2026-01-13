import Image from "next/image";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white">
      <div className="container py-14 md:py-20 text-brandDark">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-xl md:text-2xl font-serif text-brandSecondary">
            What past clients have said about working together
          </h2>

          <p className="text-base md:text-lg leading-relaxed">
            These are from past clients I&apos;ve worked with across messaging, copy, and content. They
            reflect how I work, think, and support clients.
          </p>

          <div className="space-y-8">
            <div className="border border-brandDark/40">
              <div className="grid md:grid-cols-[160px_1fr]">
                <div className="relative h-40 md:h-full border-b md:border-b-0 md:border-r border-brandDark/40">
                  <Image
                    src="/assets/tanishq.jpg"
                    alt="Tanishq Jha"
                    fill
                    sizes="160px"
                    className="object-cover object-[center_15%]"
                  />
                </div>
                <div className="p-5 space-y-3">
                  <p className="text-sm font-semibold text-brandSecondary">
                    For Website messaging and copywriting project
                  </p>
                  <blockquote className="text-base md:text-lg leading-relaxed italic">
                  &quot;The final copy not only captured my vision, but also provided a clear path for
                  my audience to take action.&quot;
                  </blockquote>
                  <p className="font-semibold">Tanishq Jha</p>
                  <p className="text-sm md:text-base">Founder, Tanishqjha.co - OBM and VA</p>
                </div>
              </div>
            </div>

            <div className="border border-brandDark/40">
              <div className="grid md:grid-cols-[160px_1fr]">
                <div className="flex items-center justify-center p-4 border-b md:border-b-0 md:border-r border-brandDark/40">
                  <Image
                    src="/assets/trinklet.png"
                    alt="Green Trinkets"
                    width={140}
                    height={70}
                    className="object-contain"
                  />
                </div>
                <div className="p-5 space-y-3">
                  <p className="text-sm font-semibold text-brandSecondary">
                    For new product Launch Email and landing page project
                  </p>
                  <blockquote className="text-base md:text-lg leading-relaxed italic">
                  &quot;Her knowledge, professionalism, and commitment to delivering exceptional
                  results make her an invaluable asset for any business.&quot;
                  </blockquote>
                  <p className="font-semibold">Shatakshi</p>
                  <p className="text-sm md:text-base">Green Trinkets</p>
                </div>
              </div>
            </div>

            <div className="border border-brandDark/40">
              <div className="grid md:grid-cols-[160px_1fr]">
                <div className="flex items-center justify-center p-4 border-b md:border-b-0 md:border-r border-brandDark/40">
                  <Image
                    src="/assets/xaltris.png"
                    alt="Xaltris Technologies"
                    width={140}
                    height={70}
                    className="object-contain"
                  />
                </div>
                <div className="p-5 space-y-3">
                  <p className="text-sm font-semibold text-brandSecondary">
                    For Content writing project
                  </p>
                  <blockquote className="text-base md:text-lg leading-relaxed italic">
                  &quot;Working with her felt effortless - her process is structured but deeply
                  human. The copy we developed not only resonates with our audience but also
                  elevated our brand presence across channels.&quot;
                  </blockquote>
                  <p className="font-semibold">Amit Verma</p>
                  <p className="text-sm md:text-base">Founder, Xaltris Technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
