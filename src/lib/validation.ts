import { z } from "zod";

export const optionalString = z.string().trim().optional().or(z.literal(""));

export const generateInfoSchema = z.object({
  title: optionalString,
  description: optionalString,
});

export type GenerateInfoValues = z.infer<typeof generateInfoSchema>;

export const PersonalInfoSchema = z.object({
  photo: z
    .custom<File | undefined>()
    .refine(
      (file) =>
        !file || (file instanceof File && file.type.startsWith("image/")),
      "Only image files are allowed",
    )
    .refine(
      (file) => !file || file.size <= 4 * 1024 * 1024,
      "File size must be less than 4MB",
    ),
  firstName: optionalString,
  lastName: optionalString,
  jobTitle: optionalString,
  city: optionalString,
  country: optionalString,
  phone: optionalString,
  email: optionalString,
  website: optionalString,
});

export type PersonalInfoValues = z.infer<typeof PersonalInfoSchema>;
