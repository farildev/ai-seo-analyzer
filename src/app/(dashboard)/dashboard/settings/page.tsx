import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
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
import Image from 'next/image';
import React from 'react';
import { articleImageStyles } from '@/mocks/enchancement-styles';

const Settings = () => {
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
  return (
    <div className="p-5">
      <div className="flex lg:flex-row flex-col lg:items-center items-start gap-5 justify-between">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold">Project Settings</h2>
          <p className="text-sm font-normal text-gray-400 lg:w-1/2 w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            mollitia nulla corrupti repellat officiis eaque necessitatibus
            nihil, consequatur vel maiores tenetur doloremque voluptate odit
            asperiores.
          </p>
        </div>
      </div>
      <div>
        <h4 className="text-xl font-medium mt-10">Content & SEO</h4>
        <div className="mt-5">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <Label className="text-gray-400">Keyword Region</Label>
              <Select>
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
              <Select>
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
              <Select>
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
              <Switch />
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
            />
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-xl font-semibold">Enhancements</h3>
          <p className="text-sm font-normal text-gray-400">
            Article image style
          </p>
          <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-3 mt-5">
            {articleImageStyles.map((article) => (
              <div
                key={article.id}
                className={`min-h-[322px] border-custom-border hover:border-main/30 rounded-xl p-4 border cursor-pointer transition-all
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
              <Input type="color" className="w-20 h-12 cursor-pointer" />
              <Input
                type="text"
                placeholder="#3b82f6"
                className="h-12 flex-1"
              />
            </div>
            <p className="text-xs text-gray-500">Generated brand images</p>
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
        </div>
        <Button
          className="flex items-center gap-1 bg-main hover:bg-main-hover w-full flex-1 text-white font-semibold h-12 mt-5"
          type="button"
        >
          Save Settings
        </Button>
      </div>
    </div>
  );
};

export default Settings;
