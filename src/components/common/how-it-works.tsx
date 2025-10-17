import { explainItems } from '@/mocks/how-it-works-data';
import Image from 'next/image';
import React from 'react';

const HowItWorks = () => {
  return (
    <section className="pt-20">
      <div className="siteContainer">
        <div className="flex flex-col items-center">
          <h2 className="md:text-4xl text-3xl max-w-[424px] tracking-tighter font-semibold text-center">
            How it works? How we boost your business?
          </h2>
          <p className="md:text-md text-sm text-gray-400 max-w-[410px] mt-3 text-center">
            We handle the SEO heavy lifting. Relax while we create daily ranking
            content to keep you ahead of the competition.
          </p>
        </div>
        <div className="mt-10 flex flex-col items-center">
          <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-5 ">
            {explainItems.map((item) => (
              <div className="flex flex-col" key={item.id}>
                <div className="relative h-[275px] rounded-2xl overflow-hidden object-cover">
                  <Image src={item?.image} alt={item.name} fill />
                </div>
                <h5 className="mt-4 md:text-2xl text-xl font-semibold tracking-tighter">
                  {item.name}
                </h5>
                <p className="mt-3 md:text-md text-sm font-normal">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
