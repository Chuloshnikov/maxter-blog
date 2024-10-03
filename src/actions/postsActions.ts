'use server';
import {authOptions} from "@/lib/authOptions";
import { parseStringify } from "@/lib/utils";
import { PostInfoModel } from "@/models/Post";
import { ProfileInfoModel } from "@/models/ProfileInfo";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";

export async function savePost(formData: FormData) {
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

export async function createPost(formData: FormData) {
  await mongoose.connect(process.env.MONGODB_URI as string);
  const session = await getServerSession(authOptions);
  if (!session) throw 'you need to be logged in';
  const email = session.user?.email;

  const {
    title, desc, postImg, slug
  } = Object.fromEntries(formData);

  const profileInfoDoc = await ProfileInfoModel.findOne({email});
  const {username, displayName, avatarUrl, _id} = profileInfoDoc;

  let author = '';

  if (displayName) {
    author = displayName;
  } else {
    author = username
  }

  if (profileInfoDoc) {
    await PostInfoModel.create({title, desc, slug, catSlug: slug, username, displayName: author, userEmail: email, authorId: _id, img:postImg, avatarUrl});
  } else {
    throw new Error('Some error occurred');
  }
}

export async function getPosts() {
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