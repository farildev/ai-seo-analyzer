import React from 'react';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import Flash from '@/assets/images/flash.png';
import Image from 'next/image';

const OfferCard = () => {
  return (
    <div className="py-20">
      <div className="siteContainer">
        <div className="w-full p-16 rounded-[24px] bg-gradient-to-r from-[#16A34A] via-[#6DDE97] to-white grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-5xl leading-12 text-white">
              Create your automated content today, get the results instantly
            </h4>
            <Button className="mt-5 bg-white text-black hover:bg-gray-100 w-fit cursor-pointer">
              Create Personalized Automation
              <ArrowRight />
            </Button>
          </div>
          <div className="w-full h-full flex items-center justify-center relative">
            <Image src={Flash} alt="Flash" className="object-contain" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
