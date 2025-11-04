'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { useForm, useFieldArray, type FieldArrayPath } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Save, Sparkles, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useOnboardingStore } from '@/store/useOnboardingStore';
import { step1Schema, type Step1FormData } from '@/lib/validations/onboarding';
import FolderImage from '@/assets/images/folder.png';
import { Textarea } from '@/components/ui/textarea';
import { Spinner } from '@/components/ui/spinner';

const Stepper1 = () => {
  const { data, updateStep1, nextStep } = useOnboardingStore();
  const [isAutoFilling, setIsAutoFilling] = useState(false);

  const form = useForm<Step1FormData>({
    resolver: zodResolver(step1Schema),
    mode: 'onChange',
    defaultValues: {
      businessLink: data.step1?.businessLink || '',
      businessName: data.step1?.businessName || '',
      businessDescription: data.step1?.businessDescription || '',
      targetAudiences: data.step1?.targetAudiences?.length
        ? data.step1.targetAudiences
        : [''],
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    control,
    formState: { errors, isValid },
  } = form;

  const { fields, append, remove } = useFieldArray({
    control: control,
    name: 'targetAudiences' as FieldArrayPath<Step1FormData>,
  });

  const formData = watch();

  const handleAutoFill = async () => {
    const businessLink = formData.businessLink;

    if (!businessLink) {
      alert('Əvvəlcə website URL daxil edin');
      return;
    }

    setIsAutoFilling(true);

    try {
      const response = await fetch('/api/onboarding/autofill', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: businessLink }),
      });

      if (!response.ok) throw new Error('Auto-fill failed');

      const result = await response.json();
      if (result.businessName) {
        setValue('businessName', result.businessName, { shouldValidate: true });
      }

      if (result.businessDescription) {
        setValue('businessDescription', result.businessDescription, {
          shouldValidate: true,
        });
      }

      if (result.targetAudiences) {
        let audiencesArray: string[];

        if (Array.isArray(result.targetAudiences)) {
          audiencesArray = result.targetAudiences.filter(
            (item: string) => item.trim().length > 0,
          );
        } else if (typeof result.targetAudiences === 'string') {
          audiencesArray = result.targetAudiences
            .split(',')
            .map((item: string) => item.trim())
            .filter((item: string) => item.length > 0);
        } else {
          audiencesArray = [];
        }
        setValue('targetAudiences', audiencesArray, { shouldValidate: true });
      }
    } catch (error) {
      console.error('Auto-fill error:', error);
      alert('Auto-fill uğursuz oldu. Xahiş edirik manual daxil edin.');
    } finally {
      setIsAutoFilling(false);
    }
  };

  const onSubmit = (data: Step1FormData) => {
    const filteredData = {
      ...data,
      targetAudiences: data.targetAudiences.filter(
        (item: string) => item.trim().length > 0,
      ),
    };
    updateStep1(filteredData);
    nextStep();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid lg:grid-cols-2 grid-cols-1 gap-5 h-full py-10"
    >
      <div className="">
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-semibold">
          Step 1 - Add information about your business
        </h2>

        <div className="mt-10 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label className="text-gray-400">Business Website *</Label>
            <Input
              {...register('businessLink')}
              className="h-12 md:text-md text-sm"
              placeholder="https://resumebuilder.so/"
              type="url"
            />
            {errors.businessLink && (
              <p className="text-red-500 text-sm">
                {errors.businessLink.message}
              </p>
            )}
          </div>

          <Button
            type="button"
            onClick={handleAutoFill}
            disabled={isAutoFilling || !formData.businessLink}
            className="flex items-center gap-2 bg-main hover:bg-main-hover text-white font-semibold h-12 disabled:opacity-50"
          >
            {isAutoFilling ? (
              <Spinner />
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                Fill Automatically
              </>
            )}
          </Button>
        </div>

        <div className="mt-6 flex flex-col gap-2">
          <Label className="text-gray-400">Business Name *</Label>
          <Input
            {...register('businessName')}
            className="h-12 md:text-md text-sm"
            placeholder="Apollo Digital"
          />
          {errors.businessName && (
            <p className="text-red-500 text-sm">
              {errors.businessName.message}
            </p>
          )}
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <Label className="text-gray-400">Business description *</Label>
          <Textarea
            {...register('businessDescription')}
            className="h-48 resize-none shadow-none md:text-md text-sm"
            placeholder="SEO & Digital Marketing"
          />
          {errors.businessDescription && (
            <p className="text-red-500 text-sm">
              {errors.businessDescription.message}
            </p>
          )}
        </div>

        <div className="mt-4 flex flex-col gap-2">
          <Label className="text-gray-400">Target Audience *</Label>

          <div className="space-y-3">
            {fields.map((field, index) => (
              <div key={field.id} className="flex gap-2 items-start">
                <Input
                  {...register(`targetAudiences.${index}` as const)}
                  className="h-12 md:text-md text-sm flex-1"
                  placeholder={`Target audience ${index + 1}`}
                />
                {fields.length > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => remove(index)}
                    className="h-12 w-12 flex-shrink-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
          </div>

          {errors.targetAudiences && (
            <p className="text-red-500 text-sm">
              {errors.targetAudiences.message}
            </p>
          )}

          {fields.length < 10 && (
            <Button
              type="button"
              variant="outline"
              onClick={() => append('')}
              className="flex items-center gap-2 mt-2"
            >
              <Plus className="h-4 w-4" />
              Add Target Audience
            </Button>
          )}

          <p className="text-xs text-gray-400">
            Maksimum 10 target audience əlavə edə bilərsiniz
          </p>
        </div>

        <Button
          type="submit"
          disabled={!isValid}
          className="flex items-center gap-2 bg-main hover:bg-main-hover text-white font-semibold h-12 mt-10 w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Save className="w-4 h-4" />
          Save & Continue
        </Button>
      </div>

      <div className="relative lg:flex hidden items-center justify-center h-full min-h-[500px]">
        <Image src={FolderImage} alt="Folder" className="object-contain" fill />
      </div>
    </form>
  );
};

export default Stepper1;
