'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, ArrowRight, Plus, X } from 'lucide-react';
import { useOnboardingStore } from '@/store/useOnboardingStore';
import { useState, useMemo } from 'react';
import { z } from 'zod';

const Stepper2 = () => {
  const prevStep = useOnboardingStore((state) => state.prevStep);
  const nextStep = useOnboardingStore((state) => state.nextStep);
  const updateStep2 = useOnboardingStore((state) => state.updateStep2);
  const step2Data = useOnboardingStore((state) => state.data.step2);

  const competitors = useMemo(() => step2Data?.competitors || [], [step2Data]);

  const [competitorUrl, setCompetitorUrl] = useState('');
  const [error, setError] = useState('');

  const urlSchema = z
    .string()
    .url('Düzgün URL daxil edin (https://example.com)');

  const handleAddCompetitor = () => {
    try {
      urlSchema.parse(competitorUrl);

      if (competitors.includes(competitorUrl)) {
        setError('Bu competitor artıq əlavə edilib');
        return;
      }

      if (competitors.length >= 10) {
        setError('Maksimum 10 competitor əlavə edə bilərsiniz');
        return;
      }

      updateStep2({ competitors: [...competitors, competitorUrl] });
      setCompetitorUrl('');
      setError('');
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.issues[0].message);
      }
    }
  };

  const handleRemoveCompetitor = (index: number) => {
    const updated = competitors.filter((_, i) => i !== index);
    updateStep2({ competitors: updated });
  };

  const handleNext = () => {
    if (competitors.length === 0) {
      setError('Ən azı 1 competitor əlavə edin');
      return;
    }
    nextStep();
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddCompetitor();
    }
  };

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
      <div className="mt-10">
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-semibold">
          Step 2 - Add your competitors
        </h2>
        <div className="mt-10 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label className="text-gray-400">Competitor URLs</Label>
            <div className="flex items-center gap-3">
              <Input
                className="h-12 md:text-md text-sm"
                placeholder="Add competitor URL (e.g https://resumebuilder.so)"
                value={competitorUrl}
                onChange={(e) => {
                  setCompetitorUrl(e.target.value);
                  setError('');
                }}
                onKeyPress={handleKeyPress}
              />
              <Button
                onClick={handleAddCompetitor}
                className="bg-main hover:bg-main-hover cursor-pointer h-12"
                type="button"
              >
                <Plus />
              </Button>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>

          {competitors.length > 0 && (
            <div className="flex flex-col gap-2">
              {competitors.map((competitor, i) => (
                <div
                  className="flex items-center gap-2 text-sm font-normal"
                  key={i}
                >
                  <span className="flex-1">{competitor}</span>
                  <button
                    className="cursor-pointer hover:text-red-500 transition-colors"
                    onClick={() => handleRemoveCompetitor(i)}
                    type="button"
                  >
                    <X size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}

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
    </div>
  );
};

export default Stepper2;
