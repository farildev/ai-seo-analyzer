import PriceCard from '@/components/price-card';
import { Badge } from '@/components/ui/badge';
import { directorySubmission } from '@/mocks/services';
import React from 'react';

const DirectorySubmissions = () => {
  return (
    <div className="p-5">
      <div className="flex flex-col items-center justify-center">
        <Badge className="bg-main/30 text-main">Powerful Add-on</Badge>
        <div className="flex flex-col items-center">
          <h2 className="md:text-5xl text-4xl text-center font-bold text-main mt-5">
            Directory Submission Service
          </h2>
          <p className="text-sm font-medium text-gray-500 max-w-lg w-full mx-auto text-center mt-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            fugit a! Ullam a sapiente beatae reiciendis alias, inventore soluta
            ex! Odit illum enim delectus ipsa.
          </p>
        </div>
        <div className="max-w-[876px] mx-auto flex items-center justify-center mt-10 w-full">
          <PriceCard data={directorySubmission} />
        </div>
      </div>
    </div>
  );
};

export default DirectorySubmissions;
