import { platforms } from '@/mocks/platforms';
import Image from 'next/image';
import React from 'react';

const CreateIntegration = () => {
  return (
    <div className="p-5">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">Create Platform Integration</h2>
        <p className="text-sm font-normal text-gray-400 lg:w-1/2 w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          mollitia nulla corrupti repellat officiis eaque necessitatibus nihil,
          consequatur vel maiores tenetur doloremque voluptate odit asperiores.
        </p>
      </div>
      <div className="mt-10 grid sm:grid-cols-6 grid-cols-2 gap-4">
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
    </div>
  );
};

export default CreateIntegration;
