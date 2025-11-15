import { Button } from '@/components/ui/button';
import { Link2, Plus } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Integrations = () => {
  return (
    <div className="p-5">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">Platform Integration</h2>
        <p className="text-sm font-normal text-gray-400 lg:w-1/2 w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          mollitia nulla corrupti repellat officiis eaque necessitatibus nihil,
          consequatur vel maiores tenetur doloremque voluptate odit asperiores.
        </p>
      </div>
      <div className="mt-10 border border-custom-border rounded-xl p-10 flex gap-3 flex-col items-center flex-1 h-full justify-center">
        <Link2 size={48} className="text-gray-400" />
        <h4 className="text-2xl font-semibold text-gray-400">
          No Integrations yet
        </h4>
        <p className="text-sm max-w-[572px] mx-auto font-normal text-gray-400 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
          alias?
        </p>
        <Link href={'/dashboard/integrations/create-integration'}>
          <Button className="h-12 bg-main hover:bg-main-hover">
            <Plus />
            Create Integration
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Integrations;
