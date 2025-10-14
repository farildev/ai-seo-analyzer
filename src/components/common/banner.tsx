import React from 'react';
import { Ripple } from '../ui/ripple';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="w-full min-h-dvh py-[110px] flex items-center justify-center overflow-hidden">
      <Ripple mainCircleSize={600} mainCircleOpacity={0.3} numCircles={12} />
      <div className="siteContainer">
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-[832px]">
            <h1 className="md:text-6xl sm:text-5xl text-4xl w-full text-center font-bold">
              <span className="text-main">AI Supported</span> Organic Traffic
              Analyzer
            </h1>
          </div>
          <p className="max-w-[490px] mt-6 text-gray-500 text-center md:text-md text-sm">
            Get recommended by ChatGPT & Rank on Google, all through Blog Posts,
            Backlinks, and Free Tools built for you, while you sleep.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <Button className="bg-gray-50 border border-gray-100 hover:bg-gray-100 shadow-none text-black cursor-pointer">
              <Image
                src={'/google-logo.svg'}
                alt="Google"
                width={20}
                height={20}
              />
              Join with Google
            </Button>
            <Button className="bg-main hover:bg-main-hover cursor-pointer">
              Start for free <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
