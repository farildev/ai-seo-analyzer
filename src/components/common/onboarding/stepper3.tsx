'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import FolderImage from '@/assets/images/folder.png';
import { useOnboardingStore } from '@/store/useOnboardingStore';
const Stepper3 = () => {
  const canGoNext = useOnboardingStore((state) => state.canGoNext);
  const prevStep = useOnboardingStore((state) => state.prevStep);
  const nextStep = useOnboardingStore((state) => state.nextStep);
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
      <div className="mt-10">
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-semibold">
          Step 3 - Add some informations about content
        </h2>
        <div className="mt-10 flex flex-col gap-4">
          <Button className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 border border-custom-border text-black font-semibold h-12">
            <Image
              src={'/google-logo.svg'}
              alt="Google"
              width={24}
              height={24}
            />{' '}
            Google Search Console integration
          </Button>
          <div className="flex flex-col gap-2">
            <Label className="text-gray-400">Add Sitemap URL</Label>
            <Input
              className="h-12 md:text-md text-sm"
              placeholder="Sitemap URL"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-gray-400">Root blog URL</Label>
            <Input
              className="h-12 md:text-md text-sm"
              placeholder="https://resumebuilder.so/blogs"
            />
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label className="text-gray-400">Article URL #1</Label>
            <Input
              className="h-12 md:text-md text-sm"
              placeholder="Article URL #1"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-gray-400">Article URL #2</Label>
            <Input
              className="h-12 md:text-md text-sm"
              placeholder="Article URL #2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-gray-400">Article URL #3</Label>
            <Input
              className="h-12 md:text-md text-sm"
              placeholder="Article URL #3"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            disabled={!canGoNext}
            onClick={prevStep}
            className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 border border-custom-border text-black font-semibold h-12 mt-5 flex-1"
          >
            <ArrowLeft /> Previous step
          </Button>
          <Button
            onClick={nextStep}
            className="flex items-center gap-1 bg-main hover:bg-main-hover flex-1 text-white font-semibold h-12 mt-5"
          >
            Next Step <ArrowRight />
          </Button>
        </div>
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

export default Stepper3;
