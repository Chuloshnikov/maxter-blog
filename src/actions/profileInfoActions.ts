'use server';
import {authOptions} from "@/lib/authOptions";
import { parseStringify } from "@/lib/utils";
import {ProfileInfoModel} from "@/models/ProfileInfo";
import mongoose from "mongoose";
import {getServerSession} from "next-auth";

export async function saveProfile(formData: FormData) {
  await mongoose.connect(process.env.MONGODB_URI as string);

  const session = await getServerSession(authOptions);
  if (!session) throw 'you need to be logged in';
  const email = session.user?.email;

  const {
    username, displayName, bio, coverUrl, avatarUrl,
  } = Object.fromEntries(formData);

  const profileInfoDoc = await ProfileInfoModel.findOne({email});
  if (profileInfoDoc) {
    profileInfoDoc.set({username, displayName, bio, coverUrl, avatarUrl});
    await profileInfoDoc.save();
  } else {
    await ProfileInfoModel.create({username, displayName, bio, email, coverUrl, avatarUrl});
  }

  return true;
}

export async function createProfile(formData: FormData) {
  await mongoose.connect(process.env.MONGODB_URI as string);
  const session = await getServerSession(authOptions);
  if (!session) throw 'you need to be logged in';
  const email = session.user?.email;

  const {
    username, avatarUrl,
  } = Object.fromEntries(formData);

  const profileInfoDoc = await ProfileInfoModel.findOne({email});

  if (profileInfoDoc) {
    return;
  } else {
    await ProfileInfoModel.create({username, email, avatarUrl});
  }
}

export async function getProfile() {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    const session = await getServerSession(authOptions);
    if (!session) throw 'you need to be logged in';
    const email = session.user?.email;
  
    const profileInfoDoc = await ProfileInfoModel.findOne({email});
    return parseStringify(profileInfoDoc);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the patient details:",
      error
    );
  }
}

export async function getAllProfiles() {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
  
    const allProfilesInfoDoc = await ProfileInfoModel.find();
    return parseStringify(allProfilesInfoDoc);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the patient details:",
      error
    );
  }
}