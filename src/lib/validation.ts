import { z } from "zod";

//CONTACTS VALIDATION

export const ContactsFormSchema = z.object({
    name: z.string().min(3, {message: 'Name must be at least 3 characters long'}).max(50, "Name must be at most 50 characters"),
    email: z.string().email('Email is not correct'),
    phone: z.string().refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
    message: z.string().min(10, { message: "Message must be at least 10 characters long" }).max(2000, { message: "Message must be less than 2000 characters" }),
});

export const validateContactForm = (data: any) => {
    try {
        ContactsFormSchema.parse(data);
        return [];
    } catch (ev) {
        if (ev instanceof z.ZodError) {
            return ev.errors.map((error, index) => `${index}: ${error.message}`);
        }
        return ["Unknown validation error"];
    }
};

//COMMENTS VALIDATION

export const CommentsFormSchema = z.object({
    desc: z.string().min(4, {message: 'Comment must be at least 4 characters long'}).max(2000, "Comment must be at most 2000 characters"),
    postId: z.string().min(5, 'post ID is required'),
});

export const validateCommentForm = (data: any) => {
    try {
        CommentsFormSchema.parse(data);
        return [];
    } catch (ev) {
        if (ev instanceof z.ZodError) {
            return ev.errors.map(error => `${error.message}`);
        }
        return ["Unknown validation error"];
    }
};