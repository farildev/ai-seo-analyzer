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

/**
 * Type export
 */
export type Step1FormData = z.infer<typeof step1Schema>;
