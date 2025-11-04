'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import FolderImage from '@/assets/images/folder.png';
import { useOnboardingStore } from '@/store/useOnboardingStore';
import { useState, useMemo } from 'react';

const Stepper3 = () => {
  const prevStep = useOnboardingStore((state) => state.prevStep);
  const nextStep = useOnboardingStore((state) => state.nextStep);
  const updateStep3 = useOnboardingStore((state) => state.updateStep3);
  const step3Data = useOnboardingStore((state) => state.data.step3);

  const [isGscModalOpen, setIsGscModalOpen] = useState(false);
  const [gscEmail, setGscEmail] = useState('');
  const [gscProperty, setGscProperty] = useState('');
  const [error, setError] = useState('');

  const sitemapUrl = useMemo(() => step3Data?.sitemapUrl || '', [step3Data]);
  const rootBlogUrl = useMemo(() => step3Data?.rootBlogUrl || '', [step3Data]);
  const articleExamples = useMemo(
    () => step3Data?.articleExamples || ['', '', ''],
    [step3Data],
  );
  const isGscConnected = useMemo(
    () => step3Data?.googleSearchConsole?.isConnected || false,
    [step3Data],
  );

  const handleArticleChange = (index: number, value: string) => {
    const updated = [...articleExamples];
    updated[index] = value;
    updateStep3({ articleExamples: updated });
  };

  const handleGscConnect = () => {
    if (!gscEmail || !gscProperty) {
      return;
    }

    updateStep3({
      googleSearchConsole: {
        isConnected: true,
        accountEmail: gscEmail,
        propertyUrl: gscProperty,
      },
    });
    setIsGscModalOpen(false);
    setGscEmail('');
    setGscProperty('');
  };

  const handleNext = () => {
    // Validate required fields
    if (!sitemapUrl) {
      setError('Sitemap URL daxil edin');
      return;
    }
    if (!rootBlogUrl) {
      setError('Root blog URL daxil edin');
      return;
    }
    if (articleExamples.some((url) => !url)) {
      setError('3 article URL-i doldurun');
      return;
    }

    setError('');
    nextStep();
  };

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
      <div className="mt-10">
        <h2 className="lg:text-4xl md:text-3xl text-2xl font-semibold">
          Step 3 - Add some informations about content
        </h2>
        <div className="mt-10 flex flex-col gap-4">
          <Dialog open={isGscModalOpen} onOpenChange={setIsGscModalOpen}>
            <DialogTrigger asChild>
              <Button
                className={`flex items-center gap-2 h-12 font-semibold ${
                  isGscConnected
                    ? 'bg-green-100 hover:bg-green-200 border border-green-300 text-green-700'
                    : 'bg-gray-100 hover:bg-gray-200 border border-custom-border text-black'
                }`}
                type="button"
              >
                <Image
                  src={'/google-logo.svg'}
                  alt="Google"
                  width={24}
                  height={24}
                />
                {isGscConnected ? (
                  <>
                    <CheckCircle2 size={18} />
                    Connected to GSC
                  </>
                ) : (
                  'Google Search Console integration'
                )}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Connect Google Search Console</DialogTitle>
                <DialogDescription>
                  Integrate your Google Search Console to get better insights
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex flex-col gap-2">
                  <Label>Google Account Email</Label>
                  <Input
                    type="email"
                    placeholder="example@gmail.com"
                    value={gscEmail}
                    onChange={(e) => setGscEmail(e.target.value)}
                    className="h-12"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>Search Console Property URL</Label>
                  <Input
                    type="url"
                    placeholder="https://example.com"
                    value={gscProperty}
                    onChange={(e) => setGscProperty(e.target.value)}
                    className="h-12"
                  />
                </div>
                <Button
                  onClick={handleGscConnect}
                  disabled={!gscEmail || !gscProperty}
                  className="bg-main hover:bg-main-hover h-12 mt-2"
                >
                  Connect
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <div className="flex flex-col gap-2">
            <Label className="text-gray-400">Add Sitemap URL</Label>
            <Input
              className="h-12 md:text-md text-sm"
              placeholder="https://example.com/sitemap.xml"
              value={sitemapUrl}
              onChange={(e) => {
                updateStep3({ sitemapUrl: e.target.value });
                setError('');
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-gray-400">Root blog URL</Label>
            <Input
              className="h-12 md:text-md text-sm"
              placeholder="https://resumebuilder.so/blogs"
              value={rootBlogUrl}
              onChange={(e) => {
                updateStep3({ rootBlogUrl: e.target.value });
                setError('');
              }}
            />
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label className="text-gray-400">Article URL #1</Label>
            <Input
              className="h-12 md:text-md text-sm"
              placeholder="https://example.com/article-1"
              value={articleExamples[0]}
              onChange={(e) => {
                handleArticleChange(0, e.target.value);
                setError('');
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-gray-400">Article URL #2</Label>
            <Input
              className="h-12 md:text-md text-sm"
              placeholder="https://example.com/article-2"
              value={articleExamples[1]}
              onChange={(e) => {
                handleArticleChange(1, e.target.value);
                setError('');
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label className="text-gray-400">Article URL #3</Label>
            <Input
              className="h-12 md:text-md text-sm"
              placeholder="https://example.com/article-3"
              value={articleExamples[2]}
              onChange={(e) => {
                handleArticleChange(2, e.target.value);
                setError('');
              }}
            />
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
      <div className="relative lg:flex hidden items-center justify-center">
        <Image
          src={FolderImage}
          alt="Folder"
          className="w-full h-full object-contain"
          fill
        />
      </div>
    </div>
  );
};

export default Stepper3;
