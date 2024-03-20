import { z } from 'zod';

export const SettingSchema = z.object({
  image: z
    .string()
    .min(1, 'Image is required')
    .url({ message: 'Invalid image url' }),
  bio: z.string(),
  email: z
    .string()
    .min(1, 'Email address is required')
    .email('Invalid email address'),
  password: z.string(),
});

export const ArticleSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  body: z.string().min(1, 'Article content is required'),
  tagList: z.string().array().optional(),
});
