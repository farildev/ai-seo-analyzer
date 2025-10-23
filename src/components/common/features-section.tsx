import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';
import Works2 from '@/assets/images/works-2.svg';
const FeaturesSection = () => {
  return (
    <section className="pt-20">
      <div className="siteContainer">
        <h2 className="md:text-4xl text-2xl font-semibold">
          Boost your SEO growth
        </h2>
        <p className="max-w-[576px] text-sm font-normal text-gray-500 mt-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
          architecto ipsa quisquam reprehenderit, laudantium reiciendis ad culpa
          minima odio, a, est blanditiis iste laborum provident.
        </p>
        <div className="flex flex-col gap-4 mt-10">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="border border-custom-border rounded-2xl grid md:grid-cols-2 gap-3 p-9 relative overflow-hidden"
            >
              <div className="flex flex-col gap-2 relative z-10">
                <h3 className="text-4xl font-semibold">
                  Automate SEO analysis and keyword research
                </h3>
                <p className="text-sm font-normal text-gray-500">
                  Analyze and find the best keywords in your niche. Create
                  quality articles daily matching your business goals. Generate
                  keywords yourself anytime.
                </p>
                <Button className="bg-main hover:bg-main-hover w-fit font-semibold text-md mt-3">
                  Start for Free
                </Button>
              </div>
              <Image
                className="absolute md:block hidden top-0 right-0 -rotate-12"
                src={Works2}
                alt="Works"
                width={476}
                height={476}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
