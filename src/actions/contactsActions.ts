"use server"

import { ContactsModel } from "@/models/Contacts";
import mongoose from "mongoose";

export async function createContacts(formData: FormData) {
    await mongoose.connect(process.env.MONGODB_URI as string);
    
    const {
      name, email, phone, message
    } = Object.fromEntries(formData);

    await ContactsModel.create({name, email, phone, message});

}