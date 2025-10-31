import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Save, Sparkles } from 'lucide-react';
import Image from 'next/image';
import FolderImage from '@/assets/images/folder.png';
const Stepper1 = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
      <div className="mt-10 overflow-y-auto size-full flex-1 overflow-x-hidden">
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-semibold">
          Step 1 - Add information about your business
        </h2>
        <div className="mt-10 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label className="text-gray-400">Add business link</Label>
            <Input
              className="h-12 md:text-md text-sm"
              placeholder="https://resumebuilder.so/"
            />
          </div>
          <Button className="flex items-center gap-1 bg-main hover:bg-main-hover text-white font-semibold h-12">
            <Sparkles /> Fill Automatically
          </Button>
        </div>
        <div className="mt-4 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label className="text-gray-400">Add business name</Label>
            <Input
              className="h-12 md:text-md text-sm"
              placeholder="Business name"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-gray-400">Add business link</Label>
            <Textarea
              className="h-[250px] md:text-md text-sm resize-none"
              placeholder="Add business description"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-gray-400">Add target audience</Label>
            <div className="flex items-center gap-3">
              <Input
                className="h-12 md:text-md text-sm"
                placeholder="Target audience"
              />
              <Button className="bg-main hover:bg-main-hover cursor-pointer h-12">
                <Plus />
              </Button>
            </div>
          </div>
        </div>
        <Button className="flex items-center gap-1 bg-main hover:bg-main-hover text-white font-semibold h-12 mt-10 w-full">
          <Save /> Save information
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

export default Stepper1;
