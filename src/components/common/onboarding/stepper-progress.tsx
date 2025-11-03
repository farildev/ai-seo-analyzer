'use client';
import * as React from 'react';
import { useOnboardingStore } from '@/store/useOnboardingStore';
import { Progress } from '@/components/ui/progress';
export function StepperProgess() {
  const currentStep = useOnboardingStore((state) => state.currentStep);
  const totalSteps = useOnboardingStore((state) => state.totalSteps);

  const totalProgress = (currentStep / totalSteps) * 100;

  return <Progress value={totalProgress} className="w-auto" />;
}
