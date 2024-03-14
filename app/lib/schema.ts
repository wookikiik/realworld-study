import { z } from 'zod';

export const settingSchema = z.object({
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
