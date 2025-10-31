import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, Save, X } from 'lucide-react';
import React from 'react';

const Stepper2 = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
      <div className="mt-10 overflow-y-auto size-full flex-1 overflow-x-hidden">
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-semibold">
          Step 2 - Add your competitors
        </h2>
        <div className="mt-10 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label className="text-gray-400">Target audience</Label>
            <div className="flex items-center gap-3">
              <Input
                className="h-12 md:text-md text-sm"
                placeholder="Add competitor URL (e.g https://resumebuilder.so)"
              />
              <Button className="bg-main hover:bg-main-hover cursor-pointer h-12">
                <Plus />
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                className="flex items-center gap-2 text-sm font-normal"
                key={i}
              >
                novoresume.com
                <button className="cursor-pointer">
                  <X />
                </button>
              </div>
            ))}
          </div>
          <Button className="flex items-center gap-1 bg-main hover:bg-main-hover text-white font-semibold h-12 mt-5 w-full">
            <Save /> Save information
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Stepper2;
