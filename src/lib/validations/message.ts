import { z } from 'zod';

export const contactMessageSchema = z.object({
  name: z
    .string()
    .transform((val) => val.trim().replace(/\s+/g, ' '))
    .pipe(
      z
        .string()
        .min(1, 'Full name is required')
        .regex(/^[a-zA-Z\s]+$/, 'Only alphabets are allowed in the name')
    ),
  phone: z
    .string()
    .transform((val) => val.trim())
    .pipe(
      z
        .string()
        .min(1, 'Phone number is required')
        .regex(
          /^[6-9]\d{9}$/,
          'Please enter a valid 10-digit Indian phone number starting with 6, 7, 8, or 9'
        )
    ),
  email: z
    .string()
    .transform((val) => val.trim())
    .pipe(
      z
        .string()
        .email('Please enter a valid email address')
        .optional()
        .or(z.literal(''))
    ),
  message: z
    .string()
    .transform((val) => val.trim())
    .pipe(z.string().min(1, 'Message cannot be empty or whitespace only')),
});

export type ContactMessageInput = z.infer<typeof contactMessageSchema>;
