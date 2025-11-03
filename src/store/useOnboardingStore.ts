// store/useOnboardingStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { OnboardingData } from '@/types/onboardings';

interface OnboardingStore {
  currentStep: number;
  totalSteps: number;

  data: OnboardingData;

  nextStep: () => void;
  prevStep: () => void;
  goToStep: (step: number) => void;

  updateStep1: (data: Partial<OnboardingData['step1']>) => void;
  updateStep2: (data: Partial<OnboardingData['step2']>) => void;
  updateStep3: (data: Partial<OnboardingData['step3']>) => void;
  updateStep4: (data: Partial<OnboardingData['step4']>) => void;
  updateStep5: (data: Partial<OnboardingData['step5']>) => void;
  updateStep6: (data: Partial<OnboardingData['step6']>) => void;

  isSubmitting: boolean;
  submitOnboarding: () => Promise<void>;

  resetOnboarding: () => void;
}

export const useOnboardingStore = create<OnboardingStore>()(
  persist(
    (set, get) => ({
      currentStep: 1,
      totalSteps: 6,
      data: {},
      isSubmitting: false,

      nextStep: () => set((state) => ({
        currentStep: Math.min(state.currentStep + 1, state.totalSteps)
      })),

      prevStep: () => set((state) => ({
        currentStep: Math.max(state.currentStep - 1, 1)
      })),

      goToStep: (step) => set(() => ({
        currentStep: Math.max(1, Math.min(step, get().totalSteps))
      })),

      updateStep1: (data) => set((state) => ({
        data: {
          ...state.data,
          step1: { ...state.data.step1, ...data } as never
        }
      })),

      updateStep2: (data) => set((state) => ({
        data: {
          ...state.data,
          step2: { ...state.data.step2, ...data } as never
        }
      })),

      updateStep3: (data) => set((state) => ({
        data: {
          ...state.data,
          step3: { ...state.data.step3, ...data } as never
        }
      })),

      updateStep4: (data) => set((state) => ({
        data: {
          ...state.data,
          step4: { ...state.data.step4, ...data } as never
        }
      })),

      updateStep5: (data) => set((state) => ({
        data: {
          ...state.data,
          step5: { ...state.data.step5, ...data } as never
        }
      })),

      updateStep6: (data) => set((state) => ({
        data: {
          ...state.data,
          step6: { ...state.data.step6, ...data } as never
        }
      })),

      submitOnboarding: async () => {
        set({ isSubmitting: true });

        try {
          const allData = get().data;

          const response = await fetch('/api/onboarding/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(allData)
          });

          if (!response.ok) throw new Error('Failed to submit');

          const result = await response.json();

          await fetch('/api/onboarding/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              onboardingId: result.id,
              data: allData
            })
          });

          return result;
        } catch (error) {
          console.error('Onboarding submission error:', error);
          throw error;
        } finally {
          set({ isSubmitting: false });
        }
      },

      resetOnboarding: () => set({
        currentStep: 1,
        data: {},
        isSubmitting: false
      })
    }),
    {
      name: 'onboarding-storage',
      partialize: (state) => ({
        currentStep: state.currentStep,
        data: state.data
      })
    }
  )
);
