'use client';
import React, { useMemo } from 'react';
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

const REGIONS = [
  { value: 'bulgaria', label: 'Bulgaria' },
  { value: 'usa', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'germany', label: 'Germany' },
  { value: 'france', label: 'France' },
  { value: 'spain', label: 'Spain' },
  { value: 'italy', label: 'Italy' },
  { value: 'turkey', label: 'Turkey' },
  { value: 'azerbaijan', label: 'Azerbaijan' },
];

const Stepper5 = () => {
  const prevStep = useOnboardingStore((state) => state.prevStep);
  const nextStep = useOnboardingStore((state) => state.nextStep);
  const updateStep5 = useOnboardingStore((state) => state.updateStep5);
  const step5Data = useOnboardingStore((state) => state.data.step5);

  const keywordRegion = useMemo(
    () => step5Data?.keywordRegion || '',
    [step5Data],
  );
  const automaticKeywordGeneration = useMemo(
    () => step5Data?.automaticKeywordGeneration ?? true,
    [step5Data],
  );

  const handleRegionChange = (value: string) => {
    updateStep5({ keywordRegion: value });
  };

  const handleAutoGenerationChange = (value: string) => {
    updateStep5({ automaticKeywordGeneration: value === 'yes' });
  };

  const handleNext = () => {
    if (!keywordRegion) {
      // Optionally show error
      return;
    }
    nextStep();
  };

  return (
    <div className="max-w-xl w-full mx-auto flex flex-col justify-center items-center gap-5">
      <div className="mt-10 w-full">
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-semibold">
          Step 5 - Set up unique keywords
        </h2>
        <div className="mt-10 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label className="text-gray-400">Keyword Region</Label>
            <Select value={keywordRegion} onValueChange={handleRegionChange}>
              <SelectTrigger className="w-full min-h-12 shadow-none">
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent>
                {REGIONS.map((region) => (
                  <SelectItem key={region.value} value={region.value}>
                    {region.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-gray-400">
              Automatic keyword generation
            </Label>
            <Select
              value={automaticKeywordGeneration ? 'yes' : 'no'}
              onValueChange={handleAutoGenerationChange}
            >
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
            onClick={prevStep}
            className="flex items-center gap-1 bg-gray-100 hover:bg-gray-200 border border-custom-border text-black font-semibold h-12 mt-5 flex-1"
            type="button"
          >
            <ArrowLeft /> Previous step
          </Button>
          <Button
            onClick={handleNext}
            className="flex items-center gap-1 bg-main hover:bg-main-hover flex-1 text-white font-semibold h-12 mt-5"
            type="button"
          >
            Next Step <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Stepper5;
