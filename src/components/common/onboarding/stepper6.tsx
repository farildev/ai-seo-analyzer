import React from 'react';
import Image from 'next/image';
import FolderImage from '@/assets/images/folder.png';
import { platforms } from '@/mocks/platforms';
import { Button } from '@/components/ui/button';
const Stepper6 = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
      <div className="mt-10">
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-semibold">
          Step 6 - Create platform integration
        </h2>
        <p className="text-sm text-gray-500 mt-3">
          Integrate your platform to Analyzer and create automated content
        </p>
        <div className="mt-10 grid sm:grid-cols-4 grid-cols-2 gap-4">
          {platforms.map((platform) => (
            <div key={platform.id} className="group overflow-hidden">
              <button className="bg-gray-100 w-full rounded-lg p-5 flex items-center justify-center h-[144px] border border-custom-border cursor-pointer">
                <Image
                  src={platform.image_url}
                  alt={platform.name}
                  width={88}
                  height={88}
                />
              </button>
              <p className="text-center mt-1 text-sm font-medium">
                {platform.name}
              </p>
            </div>
          ))}
        </div>
        <Button className="h-12 bg-gray-100 hover:bg-gray-200 border border-custom-border text-black font-medium mt-5 w-full cursor-pointer">
          Skip & Integrate later
        </Button>
      </div>
      <div className="relative lg:flex hidden items-center justify-center">
        <Image
          src={FolderImage}
          alt="Folder"
          className="w-full h-full object-contain"
          fill
        />
      </div>
    </div>
  );
};

export default Stepper6;
