import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, X } from 'lucide-react';
import React from 'react';

const Invite = () => {
  return (
    <div className="p-5">
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">Invite Users</h2>
        <p className="text-sm font-normal text-gray-400 lg:w-1/2 w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          mollitia nulla corrupti repellat officiis eaque necessitatibus nihil,
          consequatur vel maiores tenetur doloremque voluptate odit asperiores.
        </p>
      </div>
      <div className="flex flex-col gap-2 w-1/2 mt-5">
        <Label className="text-gray-400">Invite User</Label>
        <div className="flex items-center gap-2">
          <Input className="h-12" placeholder="Email address" />
          <Button className="h-12 w-12 bg-main hover:bg-main-hover">
            <Plus />
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-3">
        <h5 className="text-sm font-medium ">Invited Users</h5>
        <div className="flex flex-col gap-1">
          {Array.from({ length: 3 }).map((_, index) => (
            <span
              className="text-sm font-normal flex items-center gap-1"
              key={index}
            >
              memmedovfaril@gmail.com{' '}
              <button className="cursor-pointer">
                <X />
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Invite;
