import React from 'react';
import Pricing from '@/assets/images/pricing.svg';
import Image from 'next/image';
import { pricingPlan } from '@/mocks/pricing-plan';
import { Check } from 'lucide-react';
import { Button } from '../ui/button';

const PricingSection = () => {
  return (
    <section className="pt-20">
      <div className="siteContainer">
        <div className="flex flex-col relative items-center">
          <h2 className="md:text-4xl text-3xl tracking-tighter max-w-[424px] font-semibold text-center">
            Pricing
          </h2>
          <p className="md:text-md text-sm text-gray-400 max-w-[410px] mt-3 text-center">
            Grow organic traffic on AI support
          </p>
          <Image
            className="absolute lg:-top-10 -top-12 lg:right-1/3 right-24 md:block hidden"
            src={Pricing}
            alt="Pricing"
            height={120}
            width={120}
          />
        </div>

        <div className="mt-10">
          <div className="p-9 rounded-2xl border border-custom-border">
            <div className="grid lg:grid-cols-[70fr_30fr] gap-10">
              <div className="grid md:grid-cols-2 gap-4">
                {pricingPlan.map((pricing, index) => (
                  <div
                    key={index}
                    className="flex  gap-3 text-md font-medium text-gray-800"
                  >
                    <span className="flex items-center justify-center bg-main text-white w-8 h-8 rounded-full shrink-0">
                      <Check className="w-4 h-4" />
                    </span>
                    <span className="flex-1 line-clamp-2">{pricing}</span>
                  </div>
                ))}
              </div>
              <div className="lg:border-l border-custom-border flex flex-col justify-between lg:pl-6 gap-5">
                <div className="flex flex-col lg:items-end md:items-center flex-1">
                  <p className="text-xl font-semibold">Full package</p>
                  <div className="text-6xl font-bold flex items-end gap-1 mt-3">
                    $99
                    <span className="flex items-center gap-1 text-2xl font-semibold text-gray-500">
                      <span className="line-through">$200</span> / monthly
                    </span>
                  </div>
                  <p className="text-md font-medium mt-4">
                    For young and passionate enterpreneurs
                  </p>
                </div>
                <Button className="w-full py-6 bg-main font-medium text-lg hover:bg-main-hover cursor-pointer">
                  Get Started Free
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
