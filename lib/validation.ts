import z from "zod";

export const contactFormSchema = z.object({
    name: z.string().min(2, "Please enter your name."),
    email: z.email("Please enter a valid email."),
    message: z
    .string()
    .min(5, "Message must be at least 5 characters long.")
    .max(1000, "Message is too long."),
});

export type contactFormSchema = z.infer<typeof contactFormSchema>;