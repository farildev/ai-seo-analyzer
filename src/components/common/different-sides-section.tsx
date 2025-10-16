import { differentSides } from '@/mocks/different-sides';
import React from 'react';

const DifferentSidesSection = () => {
  return (
    <section className="pt-20">
      <div className="siteContainer">
        <div className="flex flex-col items-center justify-center">
          <h2 className="md:text-4xl text-3xl  w-full font-semibold text-center">
            Our different sides
          </h2>
          <p className="text-sm font-normal text-gray-400 mt-3">
            If you can&apos;t find what you&apos;re looking for, feel free to
            reach out!
          </p>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-10">
          {differentSides.map((data) => (
            <div
              className="bg-main even:bg-white even:text-black group text-white border border-custom-border lg:p-9 sm:p-6 p-5 rounded-2xl"
              key={data.id}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white text-main group-even:bg-main group-even:text-white">
                {data?.icon}
              </div>
              <h4 className="sm:text-2xl text-xl font-semibold mt-9">
                {data.title}
              </h4>
              <p className="mt-3 sm:text-md text-sm font-normal">
                {data.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentSidesSection;
