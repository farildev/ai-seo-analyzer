import {create} from "zustand";

interface OnboardingStore{
  currentStep : number;
  totalSteps: number;

  nextStep : () => void;
  prevStep: () => void;
  goToStep : (step: number) => void;
  canGoNext: boolean;
  canGoPrev : boolean;
}

export const useOnboardingStore = create<OnboardingStore>((set, get) => ({
  currentStep: 1,
  totalSteps: 6,

  nextStep: () => set((state) => ({
    currentStep: state.currentStep < state.totalSteps
      ? state.currentStep + 1
      : state.currentStep
  })),

  prevStep: () => set((state) => ({
    currentStep: state.currentStep > 1
      ? state.currentStep - 1
      : state.currentStep
  })),

  goToStep: (step) => set((state) => ({
    currentStep: step >= 1 && step <= state.totalSteps ? step : state.currentStep
  })),

  get canGoNext() {
    return get().currentStep < get().totalSteps;
  },

  get canGoPrev() {
    return get().currentStep > 1;
  }
}));
