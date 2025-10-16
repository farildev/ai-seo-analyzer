import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import Flash from '@/assets/images/flash.png';
import Image from 'next/image';

const OfferCard = () => {
  return (
    <div className="py-20">
      <div className="siteContainer">
        <div className="w-full md:p-16 sm:p-12 p-8 rounded-[24px] bg-gradient-to-r from-[#189a0f] via-[#16A34A]  border border-custom-border to-[#6DDE97] grid md:grid-cols-2 grid-cols-1 gap-5">
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold lg:text-5xl sm:text-4xl text-3xl md:leading-12 leading-normal text-white">
              Create your automated content today, get the results instantly
            </h4>
            <Button className="mt-5 bg-white text-black hover:bg-gray-100 w-fit cursor-pointer">
              Create Personalized Automation
              <ArrowRight />
            </Button>
          </div>
          <div className="w-full h-full md:flex hidden items-center justify-center relative">
            <Image src={Flash} alt="Flash" className="object-contain" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
