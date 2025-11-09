import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import {
  ArrowLeftRight,
  CreditCard,
  Earth,
  Link2,
  Plus,
  Scan,
} from 'lucide-react';
import React from 'react';

const BacklinkExchange = () => {
  return (
    <div className="p-5">
      <div className="flex lg:flex-row flex-col lg:items-center items-start gap-5 justify-between">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold">Backlink Exchanges</h2>
          <p className="text-sm font-normal text-gray-400 lg:w-1/2 w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            mollitia nulla corrupti repellat officiis eaque necessitatibus
            nihil, consequatur vel maiores tenetur doloremque voluptate odit
            asperiores.
          </p>
        </div>
        <div className="bg-main/50 py-2 px-4 text-sm font-medium text-green-700 text-nowrap border border-main rounded-full">
          Your Domain Rating : 12
        </div>
      </div>
      <div className="mt-10 grid xl:grid-cols-2 gap-6">
        <div className="p-6 rounded-lg border border-custom-border">
          <div className="flex items-center gap-3 font-semibold text-2xl">
            <CreditCard size={32} />
            Backlink Credits
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-normal">Credits Available</h2>
            <span className="text-md font-normal text-gray-400">
              1 credit = 1 domain rating
            </span>
          </div>
          <span className="text-7xl font-semibold mt-2 inline-block">50</span>
          <div className="mt-8">
            <h2 className="text-2xl font-normal">Monthly Credits</h2>
            <span className="text-md font-normal text-gray-400">
              Get up 1000 credits per month{' '}
            </span>
          </div>
          <Button className="bg-main text-white font-medium h-12 w-full hover:bg-main-hover mt-7">
            <Plus size={24} />
            Get Credits
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6">
          <div className="p-6 rounded-lg border border-custom-border">
            <div className="flex items-center gap-3 font-semibold text-2xl">
              <ArrowLeftRight size={32} />
              Backlink Performance
            </div>
            <div className="grid xl:grid-cols-2 gap-3">
              <div className="">
                <div className="mt-8">
                  <h2 className="text-2xl font-normal">Total Backlinks</h2>
                  <span className="text-md font-normal text-gray-400">
                    All Time
                  </span>
                </div>
                <span className="text-7xl font-semibold mt-2 inline-block">
                  42
                </span>
              </div>
              <div className="">
                <div className="mt-8">
                  <h2 className="text-2xl font-normal">Credits Available</h2>
                  <span className="text-md font-normal text-gray-400">
                    1 credit = 1 domain rating
                  </span>
                </div>
                <span className="text-7xl font-semibold mt-2 inline-block">
                  50
                </span>
              </div>
            </div>
          </div>
          <div className="border border-custom-border p-6 rounded-lg">
            <div className="flex items-center gap-3 font-semibold text-lg">
              <Earth />
              Network Participation
            </div>
            <div className="flex items-center justify-between gap-3 mt-5">
              <div className="flex flex-col gap-1">
                <h4 className="text-md font-semibold leading-none">
                  Enable network participation
                </h4>
                <p className="text-sm font-normal text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus, aliquid?
                </p>
              </div>
              <Switch className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <div className="border border-custom-border rounded-lg p-6 mt-6">
        <div className="flex items-center gap-3 font-semibold text-2xl">
          <Scan size={32} />
          Earned Backlinks
        </div>
        <div className="flex flex-col items-center justify-center h-full p-10">
          <Link2 size={64} className="text-gray-500" />
          <span className="text-xl font-semibold text-gray-500">
            No backlinks yet
          </span>
          <p className="max-w-[480px] text-center text-sm font-normal text-gray-400 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
            perspiciatis non eos error, vitae vel?
          </p>
        </div>
      </div>
    </div>
  );
};

export default BacklinkExchange;
