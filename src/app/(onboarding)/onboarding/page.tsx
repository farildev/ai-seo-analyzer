'use client';
import { StepperProgess } from '@/components/common/onboarding/stepper-progress';
import Stepper1 from '@/components/common/onboarding/stepper1';
import Stepper2 from '@/components/common/onboarding/stepper2';
import Stepper3 from '@/components/common/onboarding/stepper3';
import Stepper4 from '@/components/common/onboarding/stepper4';
import Stepper5 from '@/components/common/onboarding/stepper5';
import Stepper6 from '@/components/common/onboarding/stepper6';
import { useOnboardingStore } from '@/store/useOnboardingStore';
const Onboarding = () => {
  const currentStep = useOnboardingStore((state) => state.currentStep);
  return (
    <div className="w-full h-screen flex flex-col items-center py-5">
      <div className="siteContainer">
        <StepperProgess />
        <div className="w-full flex-1">
          {currentStep === 1 && <Stepper1 />}
          {currentStep === 2 && <Stepper2 />}
          {currentStep === 3 && <Stepper3 />}
          {currentStep === 4 && <Stepper4 />}
          {currentStep === 5 && <Stepper5 />}
          {currentStep === 6 && <Stepper6 />}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
