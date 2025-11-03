import React from 'react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useOnboardingStore } from '@/store/useOnboardingStore';

const Stepper5 = () => {
  const canGoNext = useOnboardingStore((state) => state.canGoNext);
  const prevStep = useOnboardingStore((state) => state.prevStep);
  const nextStep = useOnboardingStore((state) => state.nextStep);
  return (
    <div className="max-w-xl w-full mx-auto flex flex-col justify-center items-center gap-5">
      <div className="mt-10 w-full">
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-semibold">
          Step 5 - Set up unique keywords
        </h2>
        <div className="mt-10 flex flex-col gap-4">
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
            <Label className="text-gray-400">
              Automatic keyword generation
            </Label>
            <Select>
              <SelectTrigger className="w-full min-h-12 shadow-none">
                <SelectValue placeholder="Yes" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes</SelectItem>
                <SelectItem value="no">No</SelectItem>
              </SelectContent>
            </Select>
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
    </div>
  );
};

export default Stepper5;
