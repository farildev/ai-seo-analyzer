import { Button } from '@/components/ui/button';
import { Import, Plus } from 'lucide-react';
import React from 'react';

const DashboardMain = () => {
  return (
    <div className="p-5">
      <div className="flex items-center justify-between">
        <div className="w-full">
          <h2 className="text-2xl font-semibold">Content Planning</h2>
          <p className="text-sm font-normal text-gray-400 w-full mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nemo.
            Tempora, sunt?
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button className="bg-gray-100 border border-custom-border hover:bg-gray-200 text-black">
            Generate Content
          </Button>
          <Button className="bg-gray-100 border border-custom-border hover:bg-gray-200 text-black">
            <Plus />
            Add Keywords
          </Button>
          <Button className="bg-gray-100 border border-custom-border hover:bg-gray-200 text-black">
            <Import />
            Import CSV
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardMain;
