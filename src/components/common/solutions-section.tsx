import { Check } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const SolutionsSection = () => {
  return (
    <div className="pt-20">
      <div className="siteContainer">
        <div className="flex flex-col items-center justify-center">
          <h2 className="md:text-4xl text-3xl max-w-[474px] w-full font-semibold text-center">
            Our Solutions for your problems
          </h2>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-16">
            <div className="flex flex-col gap-5">
              <div className="p-5 flex items-center gap-5 bg-gradient-to-r from-white via-[#16A34A]/20 to-white border-custom-border border rounded-lg">
                <Image
                  src={'/profile.png'}
                  alt="Image"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <p>
                  Switching between ChatGPT, Weglot, Surfer, Claude losing time
                  and efficiency.
                </p>
              </div>
              <div className="p-5 flex items-center gap-5 bg-gradient-to-r from-white via-[#16A34A]/20 to-white border-custom-border border rounded-lg">
                <Image
                  src={'/profile.png'}
                  alt="Image"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <p>
                  Switching between ChatGPT, Weglot, Surfer, Claude losing time
                  and efficiency.
                </p>
              </div>
              <div className="p-5 flex items-center gap-5 bg-gradient-to-r from-white via-[#16A34A]/20 to-white border-custom-border border rounded-lg">
                <Image
                  src={'/profile.png'}
                  alt="Image"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <p>
                  Switching between ChatGPT, Weglot, Surfer, Claude losing time
                  and efficiency.
                </p>
              </div>
            </div>
            <div className="p-9 rounded-2xl bg-white relative border-custom-border border">
              <h4 className="font-semibold text-3xl text-main">
                All in one SEO platform
              </h4>
              <div className="grid grid-cols-2 gap-5 mt-7">
                <div className="flex items-center gap-2">
                  <Check size={18} />
                  Keyword Searching{' '}
                </div>
                <div className="flex items-center gap-2">
                  <Check size={18} />
                  Keyword Searching{' '}
                </div>
                <div className="flex items-center gap-2">
                  <Check size={18} />
                  Keyword Searching{' '}
                </div>
                <div className="flex items-center gap-2">
                  <Check size={18} />
                  Keyword Searching{' '}
                </div>
                <div className="flex items-center gap-2">
                  <Check size={18} />
                  Keyword Searching{' '}
                </div>
                <div className="flex items-center gap-2">
                  <Check size={18} />
                  Keyword Searching{' '}
                </div>
                <div className="flex items-center gap-2">
                  <Check size={18} />
                  Keyword Searching{' '}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsSection;
