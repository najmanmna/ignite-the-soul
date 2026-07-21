import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(1, "Please share your name."),
  email: z.string().trim().min(1, "Please share your email.").email("Enter a valid email address."),
  phone: z.string().trim().min(1, "Please share a phone number."),
  offering: z.string().trim().min(1, "Please let us know what you're interested in."),
  message: z.string().trim().min(1, "Tell us a little about what you're looking for."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
