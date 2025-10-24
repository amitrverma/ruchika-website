"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialSection() {
  const testimonials = [
    {
      image: "/tanishq.jpg",
      quote:
        "The final copy not only captured my vision, but also provided a clear path for my audience to take action.",
      body: "With a few years in the business and experience working with multiple clients, I knew it was time to create a website that truly resonated with my ideal audience. Ruchika brought so much clarity to the process. Her in-depth research and ability to deeply understand my target audience helped craft messaging that feels genuine and speaks directly to my clients.",
      name: "Tanishq Jha",
      title: "Founder, Tanishqjha.co — OBM & VA",
      logo: "/logo-tanishq.svg",
    },
    {
      image: "/testimonial-green-trinkets.png",
      quote:
        "Her knowledge, professionalism, and commitment to delivering exceptional results make her an invaluable asset for any business.",
      body: "Throughout our collaboration, Ruchika showed exceptional understanding of our business goals and target audience. Her deep research and clarity helped us refine our brand voice and strengthen our messaging foundation.",
      name: "Shatakshi",
      title: "Founder, Green Trinkets",
      logo: "/logo-green-trinkets.svg",
    },
    {
      image: "/testimonial-another.png",
      quote:
        "Ruchika has a rare ability to translate complex thoughts into words that connect and convert.",
      body: "Working with her felt effortless — her process is structured but deeply human. The copy we developed not only resonates with our audience but also elevated our brand’s presence across channels.",
      name: "Amit Verma",
      title: "Founder, Xaltris Technologies",
      logo: "/logo-xaltris.svg",
    },
  ];

  const [index, setIndex] = useState(0);
  const controls = useAnimation();

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };
  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const current = testimonials[index];

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      <div className="container max-w-5xl">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="bg-brand-accent/10 rounded-3xl shadow-md p-10 md:p-14 grid md:grid-cols-[1fr_2fr] items-center gap-10 md:gap-16"
        >
          {/* Image */}
          <div className="relative w-[180px] h-[180px] mx-auto md:mx-0">
            <Image
              src={current.image}
              alt={current.name}
              fill
              className="object-cover rounded-full border-[6px] border-white shadow-lg ring-4 ring-brand-accent/30"
            />
          </div>

          {/* Testimonial text */}
          <div className="text-brand-dark">
            <div className="relative mb-6">
              <Quote className="absolute -top-10 -left-4 w-12 h-12 text-brand-accent/30" />
              <p className="text-xl md:text-2xl font-serif italic leading-snug relative z-10">
                “{current.quote}”
              </p>
            </div>

            <p className="text-brand-dark/90 leading-relaxed mb-4">{current.body}</p>

            <div className="border-t border-brand-accent/20 pt-4">
              <p className="font-semibold text-brand-dark text-lg">{current.name}</p>
              <p className="text-sm text-brand-dark/70">{current.title}</p>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-6 mt-10">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full border border-brand-accent/30 hover:bg-brand-accent/20 transition-all"
          >
            <ChevronLeft className="w-5 h-5 text-brand-dark" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`w-2.5 h-2.5 rounded-full ${
                  i === index ? "bg-brand-accent" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full border border-brand-accent/30 hover:bg-brand-accent/20 transition-all"
          >
            <ChevronRight className="w-5 h-5 text-brand-dark" />
          </button>
        </div>
      </div>
    </section>
  );
}
