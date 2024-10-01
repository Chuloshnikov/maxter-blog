import { z } from "zod";

export const ContactsFormSchema = z.object({
    name: z.string().min(3, {message: 'Name must be at least 3 characters long'}).max(50, "Name must be at most 50 characters"),
    email: z.string().email('Email is not correct'),
    phone: z.string().refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
    message: z.string().min(10, { message: "Message must be at least 10 characters long" }).max(1000, { message: "Message must be less than 1000 characters" }),
});

export const validateContactForm = (data: any) => {
    try {
        ContactsFormSchema.parse(data);
      return "Validation successful";
    } catch (ev) {
      return (`Error: ${ev.errors}`);
    }
};