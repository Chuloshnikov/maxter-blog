"use server"

import { authOptions } from "@/lib/authOptions";
import { parseStringify } from "@/lib/utils";
import { AdvertisementsModel } from "@/models/Advertisement";
import { ProfileInfoModel } from "@/models/ProfileInfo";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";

export async function getAllAdvertisements() {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string);
        const advertisementsDoc = await AdvertisementsModel.find();
        return parseStringify(advertisementsDoc);
      } catch (error) {
        console.error(
          "An error occurred while retrieving the patient details:",
          error
        );
      }
}


export async function createAdvertisement(formData: FormData) {
    await mongoose.connect(process.env.MONGODB_URI as string);
    const session = await getServerSession(authOptions);
    if (!session) throw 'you need to be logged in';
    const email = session.user?.email;
  
    const {
      title, coverUrl, websiteUrl
    } = Object.fromEntries(formData);
  
    const profileInfoDoc = await ProfileInfoModel.findOne({email});
  
    if (profileInfoDoc.admin) {
        await AdvertisementsModel.create({ title, coverUrl, websiteUrl });
    } else {
      throw new Error('not an admin');
    }
  }


  export async function updateAdvertisement(formData: FormData) {
    await mongoose.connect(process.env.MONGODB_URI as string);
  
    const session = await getServerSession(authOptions);
    if (!session) throw 'you need to be logged in';
    const email = session.user?.email;
  
    const {
        title, coverUrl, websiteUrl, _id
    } = Object.fromEntries(formData);

    const advertisementId = typeof _id === 'string' ? _id : _id.toString();
  
    const profileInfoDoc = await ProfileInfoModel.findOne({email});
    const advertisementDoc = await AdvertisementsModel.findOne({ _id: advertisementId });

    if (profileInfoDoc.admin && advertisementDoc) {
        advertisementDoc.set({title, coverUrl, websiteUrl});
      await advertisementDoc.save();
    } else {
        throw new Error("not an admin or advertisement not found")
    }

    return true;
  }
  