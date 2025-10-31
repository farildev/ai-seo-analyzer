import { StepperProgess } from '@/components/common/onboarding/stepper-progress';
import Stepper1 from '@/components/common/onboarding/stepper1';
import Stepper2 from '@/components/common/onboarding/stepper2';
import Stepper3 from '@/components/common/onboarding/stepper3';
import Stepper4 from '@/components/common/onboarding/stepper4';
import Stepper5 from '@/components/common/onboarding/stepper5';
import Stepper6 from '@/components/common/onboarding/stepper6';

const Onboarding = () => {
  return (
    <div className="w-full min-h-dvh flex flex-col items-center py-12 overflow-hidden">
      <div className="siteContainer">
        <StepperProgess />
        <div className="w-full h-full ">
          {/* <Stepper1 /> */}
          {/* <Stepper2 /> */}
          {/* <Stepper3 /> */}
          <Stepper4 />
          {/* <Stepper5 /> */}
          {/* <Stepper6 /> */}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
