import React from 'react';
import Image from 'next/image';
import FolderImage from '@/assets/images/folder.png';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { articleImageStyles } from '@/mocks/enchancement-styles';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useOnboardingStore } from '@/store/useOnboardingStore';

const Stepper4 = () => {
  const canGoNext = useOnboardingStore((state) => state.canGoNext);
  const prevStep = useOnboardingStore((state) => state.prevStep);
  const nextStep = useOnboardingStore((state) => state.nextStep);
  return (
    <div className="flex justify-between gap-5 h-full lg:overflow-hidden overflow-y-auto">
      {/* Sol Taraf - Scrollable Form */}
      <div className="lg:w-1/2 w-full lg:overflow-y-auto pr-2 py-5">
        <div className="mt-10">
          <h2 className="lg:text-4xl md:text-3xl text-2xl font-semibold">
            Step 4 - Article generation configuration
          </h2>
          <p className="text-sm text-gray-500 mt-3">
            Generate AI supported articles for boost your SEO growth
          </p>
          <div className="mt-10">
            <div className="grid md:grid-cols-2 gap-4">
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
              <div className="flex items-center gap-2">
                <Switch className="" />
                <Label className="text-gray-400">Auto publish content</Label>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <Label className="text-gray-400">Add business link</Label>
              <Textarea
                className="h-[250px] md:text-md text-sm resize-none"
                placeholder="Add business description"
              />
            </div>
            <Button className="h-12 bg-gray-100 hover:bg-gray-200 border border-custom-border text-black font-medium mt-5 w-full cursor-pointer">
              Save Instructions
            </Button>
          </div>
          <div className="mt-10">
            <h3 className="text-xl font-semibold">Enchancements</h3>
            <p className="text-sm font-normal text-gray-400">
              Article image style
            </p>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 mt-5">
              {articleImageStyles.map((article) => (
                <div
                  key={article.id}
                  className="min-h-[322px] rounded-xl p-4 border border-custom-border"
                >
                  <div className="h-[220px] relative overflow-hidden rounded-xl">
                    <Image
                      src={article.image_url}
                      alt="type"
                      fill
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <span className="mt-3 inline-block font-semibold text-md">
                    {article.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-10">
              <div className="flex flex-col gap-2">
                <Label className="text-gray-400">Add Youtube video</Label>
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
              <div className="flex flex-col gap-2">
                <Label className="text-gray-400">Add CTA</Label>
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
              <div className="flex flex-col gap-2">
                <Label className="text-gray-400">Include Infographics</Label>
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
              <div className="flex flex-col gap-2">
                <Label className="text-gray-400">Include Emojis</Label>
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
      </div>

      {/* Sağ Taraf - Sabit Resim */}
      <div className="relative flex-1 lg:flex hidden items-center justify-center h-full">
        <div className="relative w-full h-[80%]">
          <Image
            src={FolderImage}
            alt="Folder"
            className="object-contain"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default Stepper4;
