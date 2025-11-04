'use client';
import React, { useMemo, useState } from 'react';
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
import { Input } from '@/components/ui/input';
import { articleImageStyles } from '@/mocks/enchancement-styles';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useOnboardingStore } from '@/store/useOnboardingStore';

const REGIONS = [
  { value: 'bulgaria', label: 'Bulgaria' },
  { value: 'usa', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'germany', label: 'Germany' },
  { value: 'azerbaijan', label: 'Azerbaijan' },
];

const LANGUAGES = [
  { value: 'english', label: 'English' },
  { value: 'french', label: 'French' },
  { value: 'turkish', label: 'Turkish' },
  { value: 'russian', label: 'Russian' },
  { value: 'german', label: 'German' },
];

const TONES = [
  { value: 'fancy', label: 'Fancy' },
  { value: 'traditional', label: 'Traditional' },
  { value: 'professional', label: 'Professional' },
  { value: 'informative', label: 'Informative' },
  { value: 'modern', label: 'Modern' },
];

const Stepper4 = () => {
  const prevStep = useOnboardingStore((state) => state.prevStep);
  const nextStep = useOnboardingStore((state) => state.nextStep);
  const updateStep4 = useOnboardingStore((state) => state.updateStep4);
  const step4Data = useOnboardingStore((state) => state.data.step4);

  const [error, setError] = useState('');

  const keywordRegion = useMemo(
    () => step4Data?.keywordRegion || '',
    [step4Data],
  );
  const contentLanguage = useMemo(
    () => step4Data?.contentLanguage || '',
    [step4Data],
  );
  const articleTone = useMemo(() => step4Data?.articleTone || '', [step4Data]);
  const autoPublish = useMemo(
    () => step4Data?.autoPublish ?? false,
    [step4Data],
  );
  const brandColor = useMemo(
    () => step4Data?.brandColor || '#3b82f6',
    [step4Data],
  );
  const globalArticleConfiguration = useMemo(
    () => step4Data?.globalArticleConfiguration || '',
    [step4Data],
  );
  const articleImageStyle = useMemo(
    () => step4Data?.articleImageStyle || '',
    [step4Data],
  );
  const addYoutubeVideo = useMemo(
    () => step4Data?.addYoutubeVideo ?? true,
    [step4Data],
  );
  const addCTA = useMemo(() => step4Data?.addCTA ?? true, [step4Data]);
  const includeInfographics = useMemo(
    () => step4Data?.includeInfographics ?? true,
    [step4Data],
  );
  const includeEmojis = useMemo(
    () => step4Data?.includeEmojis ?? true,
    [step4Data],
  );

  const handleNext = () => {
    if (
      !keywordRegion ||
      !contentLanguage ||
      !articleTone ||
      !articleImageStyle
    ) {
      setError('Bütün vacib sahələri doldurun');
      return;
    }
    setError('');
    nextStep();
  };

  return (
    <div className="flex justify-between gap-5 h-full">
      {/* Sol Taraf - Scrollable Form */}
      <div className="lg:w-1/2 w-full py-5">
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
                <Select
                  value={keywordRegion}
                  onValueChange={(val) => updateStep4({ keywordRegion: val })}
                >
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
                <Label className="text-gray-400">Language</Label>
                <Select
                  value={contentLanguage}
                  onValueChange={(val) => updateStep4({ contentLanguage: val })}
                >
                  <SelectTrigger className="w-full min-h-12 shadow-none">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    {LANGUAGES.map((lang) => (
                      <SelectItem key={lang.value} value={lang.value}>
                        {lang.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-gray-400">Text tone</Label>
                <Select
                  value={articleTone}
                  onValueChange={(val) => updateStep4({ articleTone: val })}
                >
                  <SelectTrigger className="w-full min-h-12 shadow-none">
                    <SelectValue placeholder="Article text tone" />
                  </SelectTrigger>
                  <SelectContent>
                    {TONES.map((tone) => (
                      <SelectItem key={tone.value} value={tone.value}>
                        {tone.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-2">
                <Switch
                  checked={autoPublish}
                  onCheckedChange={(checked) =>
                    updateStep4({ autoPublish: checked })
                  }
                />
                <Label className="text-gray-400">Auto publish content</Label>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <Label className="text-gray-400">
                Global article configuration
              </Label>
              <Textarea
                className="h-[250px] md:text-md text-sm resize-none"
                placeholder="Article configurations for all (e.g Always add promise to the blogs)"
                value={globalArticleConfiguration}
                onChange={(e) =>
                  updateStep4({ globalArticleConfiguration: e.target.value })
                }
              />
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-xl font-semibold">Enhancements</h3>
            <p className="text-sm font-normal text-gray-400">
              Article image style
            </p>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 mt-5">
              {articleImageStyles.map((article) => (
                <div
                  key={article.id}
                  onClick={() => updateStep4({ articleImageStyle: article.id })}
                  className={`min-h-[322px] rounded-xl p-4 border cursor-pointer transition-all ${
                    articleImageStyle === article.id
                      ? 'border-main bg-main/50'
                      : 'border-custom-border hover:border-main/30'
                  }`}
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

            {/* Brand Color Picker */}
            <div className="flex flex-col gap-2 mt-5">
              <Label className="text-gray-400">Brand Color</Label>
              <div className="flex items-center gap-3">
                <Input
                  type="color"
                  value={brandColor}
                  onChange={(e) => updateStep4({ brandColor: e.target.value })}
                  className="w-20 h-12 cursor-pointer"
                />
                <Input
                  type="text"
                  value={brandColor}
                  onChange={(e) => updateStep4({ brandColor: e.target.value })}
                  placeholder="#3b82f6"
                  className="h-12 flex-1"
                />
              </div>
              <p className="text-xs text-gray-500">Generated brand images</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-10">
              <div className="flex flex-col gap-2">
                <Label className="text-gray-400">Add Youtube video</Label>
                <Select
                  value={addYoutubeVideo ? 'yes' : 'no'}
                  onValueChange={(val) =>
                    updateStep4({ addYoutubeVideo: val === 'yes' })
                  }
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
              <div className="flex flex-col gap-2">
                <Label className="text-gray-400">Add CTA</Label>
                <Select
                  value={addCTA ? 'yes' : 'no'}
                  onValueChange={(val) =>
                    updateStep4({ addCTA: val === 'yes' })
                  }
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
              <div className="flex flex-col gap-2">
                <Label className="text-gray-400">Include Infographics</Label>
                <Select
                  value={includeInfographics ? 'yes' : 'no'}
                  onValueChange={(val) =>
                    updateStep4({ includeInfographics: val === 'yes' })
                  }
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
              <div className="flex flex-col gap-2">
                <Label className="text-gray-400">Include Emojis</Label>
                <Select
                  value={includeEmojis ? 'yes' : 'no'}
                  onValueChange={(val) =>
                    updateStep4({ includeEmojis: val === 'yes' })
                  }
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

            {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

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
