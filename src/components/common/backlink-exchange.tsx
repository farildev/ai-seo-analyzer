import { backlinkItems } from '@/mocks/backlink-items';
import Image from 'next/image';
import React from 'react';

const BacklinkExcangeSection = () => {
  return (
    <section className="pt-20">
      <div className="siteContainer">
        <div className="flex flex-col items-center">
          <h2 className="md:text-4xl text-3xl tracking-tighter max-w-[424px] font-semibold text-center">
            Backlink Exchange
          </h2>
          <p className="md:text-md text-sm text-gray-400 max-w-[410px] mt-3 text-center">
            Boost your domain rating with backlink exchange.
          </p>
        </div>
        <div className="mt-10 flex flex-col items-center">
          <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-5 ">
            {backlinkItems.map((item) => (
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

export default BacklinkExcangeSection;
