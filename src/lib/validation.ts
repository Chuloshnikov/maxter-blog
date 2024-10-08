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
            return ev.errors.map((error, index) => `${index + 1}: ${error.message}`);
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

//POST VALIDATION

export const PostFormSchema = z.object({
    title: z.string().min(10, {message: 'Comment must be at least 10 characters long'}).max(100, "Comment must be at most 100 characters"),
    desc: z.string().min(500, {message: 'Comment must be at least 500 characters long'}).max(2000, "Comment must be at most 2000 characters"),
});

export const validatePostForm = (data: any) => {
    try {
        PostFormSchema.parse(data);
        return [];
    } catch (ev) {
        if (ev instanceof z.ZodError) {
            return ev.errors.map((error, index) => `${index + 1}: ${error.message}`);
        }
        return ["Unknown validation error"];
    }
};

//PROFILE VALIDATION

export const ProfileFormSchema = z.object({
    username: z.string().min(3, {message: 'Comment must be at least 3 characters long'}).max(20, "Comment must be at most 20 characters"),
    displayName: z.string().min(3, {message: 'Comment must be at least 500 characters long'}).max(20, "Comment must be at most 2000 characters"),
    bio: z.string().min(10, {message: 'Comment must be at least 500 characters long'}).max(1000, "Comment must be at most 2000 characters"),
});

export const validateProfileForm = (data: any) => {
    try {
        ProfileFormSchema.parse(data);
        return [];
    } catch (ev) {
        if (ev instanceof z.ZodError) {
            return ev.errors.map((error, index) => `${index + 1}: ${error.message}`);
        }
        return ["Unknown validation error"];
    }
};

//ADVERTISEMENTS VALIDATION

export const AdvertisementsFormSchema = z.object({
    title: z.string().min(10, {message: 'Title must be at least 10 characters long'}).max(70, "Title must be at most 70 characters"),
});

export const validateAdvertisementForm = (data: any) => {
    try {
        AdvertisementsFormSchema.parse(data);
        return [];
    } catch (ev) {
        if (ev instanceof z.ZodError) {
            return ev.errors.map(error => `${error.message}`);
        }
        return ["Unknown validation error"];
    }
};