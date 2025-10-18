import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container grid md:grid-cols-[1fr_2fr] items-center gap-10 md:gap-16 max-w-5xl">
        {/* Image */}
        <div className="flex justify-center md:justify-start">
          <div className="relative w-[220px] h-[220px] rounded-lg overflow-hidden shadow-md">
            <Image
              src="/tanishq.jpg" // replace with your actual testimonial image
              alt="Tanishq Jha"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Testimonial text */}
        <div className="text-left space-y-5">
          <h3 className="text-xl md:text-2xl font-semibold text-brandDark leading-snug">
            “The final copy not only captured my vision, but also provided a clear path for my audience to take action”
          </h3>

          <p className="text-gray-700 leading-relaxed">
            “With a few years in the business and experience working with multiple clients, I knew it was time to
            create a website that truly resonated with my ideal audience. Ruchika brought so much clarity to the process.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Her in-depth research and ability to deeply understand my target audience helped craft messaging that feels
            genuine and speaks directly to my clients. The process was collaborative, and communication was always clear
            and timely.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The final copy not only captured my vision but also provided a clear path for my audience to take action.
          </p>
          <p className="text-gray-700 leading-relaxed">
            If you’re looking for a copywriter who’s not only skilled but also deeply invested in your success,
            Ruchika is an excellent choice!”
          </p>

          <p className="font-semibold text-brandDark">
            — Tanishq Jha, Founder of Tanishqjha.co, OBM &amp; VA
          </p>
        </div>
      </div>
    </section>
  );
}
