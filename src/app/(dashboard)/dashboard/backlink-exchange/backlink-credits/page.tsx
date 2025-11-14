import PriceCard from '@/components/price-card';
import React from 'react';

const BacklinkCredits = () => {
  return (
    <div className="p-5">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Backlink Credits Upgrade</h2>
        <p className="w-1/2 text-sm font-normal text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
          animi quam expedita consequuntur soluta rem voluptatem corporis
          laborum dolore saepe! Accusamus dignissimos enim iusto cumque.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5 mt-5">
        <PriceCard />
        <PriceCard />
      </div>
    </div>
  );
};

export default BacklinkCredits;
