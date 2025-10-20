import React from 'react';
import { MarqueeDemo } from './testimonial-marque';
import Image from 'next/image';
import TestimonialsImage from '@/assets/images/testimonials.svg';
const TestimonialsSection = () => {
  return (
    <section className="pt-20">
      <div className="siteContainer">
        <div className="flex flex-col relative items-center">
          <h2 className="md:text-4xl text-3xl tracking-tighter max-w-[424px] font-semibold text-center">
            Testimonials
          </h2>
          <p className="md:text-md text-sm text-gray-400 max-w-[410px] mt-3 text-center">
            Humans trust our tools and AI solutions.
          </p>
          <Image
            className="absolute lg:-top-10 -top-12 lg:right-1/3 right-24 md:block hidden"
            src={TestimonialsImage}
            alt="Testimonials"
            height={120}
            width={120}
          />
        </div>
        <div className="mt-10">
          <MarqueeDemo />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
