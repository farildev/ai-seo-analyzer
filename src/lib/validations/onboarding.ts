import * as z from 'zod';

export const step1Schema = z.object({
  businessLink: z
    .string()
    .url('Düzgün URL formatı daxil edin (https://example.com)')
    .min(1, 'Business link tələb olunur'),

  businessName: z
    .string()
    .min(2, 'Business name minimum 2 simvol olmalıdır')
    .max(100, 'Business name maksimum 100 simvol ola bilər'),

  businessDescription: z
    .string()
    .min(10, 'Description minimum 10 simvol olmalıdır')
    .max(1000, 'Description maksimum 1000 simvol ola bilər'),

  targetAudiences: z
    .array(z.string().min(1, 'Hər audience minimum 1 simvol olmalıdır'))
    .min(1, 'Minimum 1 target audience əlavə edin')
    .max(10, 'Maksimum 10 target audience əlavə edə bilərsiniz')
});

export const step2Schema = z.object({
  competitors: z
    .array(z.string().url('Düzgün URL daxil edin'))
    .min(1, 'Ən azı 1 competitor əlavə edin')
    .max(10, 'Maksimum 10 competitor əlavə edə bilərsiniz')
});

export const step3Schema = z.object({
  sitemapUrl: z.string().url('Düzgün sitemap URL daxil edin'),
  rootBlogUrl: z.string().url('Düzgün blog URL daxil edin'),
  articleExamples: z
    .array(z.string().url('Düzgün article URL daxil edin'))
    .length(3, '3 article URL lazımdır'),
  googleSearchConsole: z
    .object({
      isConnected: z.boolean(),
      accountEmail: z.string().email().optional(),
      propertyUrl: z.string().url().optional(),
    })
    .optional(),
});

export const step4Schema = z.object({
  keywordRegion: z.string().min(1, 'Keyword region seçin'),
  contentLanguage: z.string().min(1, 'Dil seçin'),
  articleTone: z.string().min(1, 'Text tone seçin'),
  autoPublish: z.boolean(),
  brandColor: z.string().min(1, 'Brand color seçin'),
  globalArticleConfiguration: z.string().optional(),
  articleImageStyle: z.string().min(1, 'Image style seçin'),
  addYoutubeVideo: z.boolean(),
  addCTA: z.boolean(),
  includeInfographics: z.boolean(),
  includeEmojis: z.boolean()
});

export const step5Schema = z.object({
  keywordRegion: z.string().min(1, 'Keyword region seçin'),
  automaticKeywordGeneration: z.boolean()
});

/**
 * Type export
 */
export type Step1FormData = z.infer<typeof step1Schema>;
export type Step2FormData = z.infer<typeof step2Schema>;
export type Step3FormData = z.infer<typeof step3Schema>;
export type Step4FormData = z.infer<typeof step4Schema>;
export type Step5FormData = z.infer<typeof step5Schema>;

