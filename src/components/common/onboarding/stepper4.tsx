import React from 'react';
import Image from 'next/image';
import FolderImage from '@/assets/images/folder.png';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
const Stepper4 = () => {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
      <div className="mt-10">
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-semibold">
          Step 4 - Article generation configuration
        </h2>
        <p className="text-sm text-gray-500 mt-3">
          Generate AI supported articles for boost your SEO growth
        </p>
        <div className="mt-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label className="text-gray-400">Keyword Region</Label>
              <Select>
                <SelectTrigger className="w-full min-h-12 shadow-none">
                  <SelectValue placeholder="Bulgaria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-gray-400">Keyword Region</Label>
              <Select>
                <SelectTrigger className="w-full min-h-12 shadow-none">
                  <SelectValue placeholder="Bulgaria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <Label className="text-gray-400">Keyword Region</Label>
              <Select>
                <SelectTrigger className="w-full min-h-12 shadow-none">
                  <SelectValue placeholder="Bulgaria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center gap-2">
              <Switch className="" />
              <Label className="text-gray-400">Auto publish content</Label>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <Label className="text-gray-400">Add business link</Label>
            <Textarea
              className="h-[250px] md:text-md text-sm resize-none"
              placeholder="Add business description"
            />
          </div>
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

export default Stepper4;
