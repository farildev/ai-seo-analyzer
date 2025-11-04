// types/onboarding.ts
export interface Step1Data {
  businessName: string;
  businessLink: string;
  businessDescription: string;
  targetAudiences: string[];
}

export interface Step2Data {
  competitors: string[];
}

export interface Step3Data {
  sitemapUrl: string;
  rootBlogUrl: string;
  articleExamples: string[];
  googleSearchConsole?: {
    isConnected: boolean;
    accountEmail?: string;
    propertyUrl?: string;
  };
}

export interface Step4Data {
  keywordRegion: string;
  contentLanguage: string;
  articleTone: string;
  autoPublish: boolean;
  brandColor : string;
  globalArticleConfiguration: string;
  articleImageStyle: string;
  addYoutubeVideo: boolean;
  addCTA: boolean;
  includeInfographics: boolean;
  includeEmojis: boolean;
}

export interface Step5Data {
  keywordRegion: string;
  automaticKeywordGeneration: boolean;
}

export interface Step6Data {
  selectedPlatforms: string[];
  integrationConfig: Record<string, unknown>;
}

export interface OnboardingData {
  step1?: Step1Data;
  step2?: Step2Data;
  step3?: Step3Data;
  step4?: Step4Data;
  step5?: Step5Data;
  step6?: Step6Data;
}
