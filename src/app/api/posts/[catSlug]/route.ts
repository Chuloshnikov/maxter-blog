import { NextResponse } from 'next/server';
import mongoose from "mongoose";
import { PostInfoModel } from '@/models/Post';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { ProfileInfoModel } from '@/models/ProfileInfo';

export async function GET(request: Request, { params }: { params: { catSlug: string } }) {
  const { catSlug } = params;
  await mongoose.connect(process.env.MONGODB_URI as string);
  const posts = await PostInfoModel.find({ catSlug });
  return NextResponse.json(posts);
}
