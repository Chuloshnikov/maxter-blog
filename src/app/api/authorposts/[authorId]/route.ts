import { NextResponse } from 'next/server';
import mongoose from "mongoose";
import { PostInfoModel } from '@/models/Post';

export async function GET(request: Request, { params }: { params: { authorId: string } }) {
  const { authorId } = params;
  await mongoose.connect(process.env.MONGODB_URI as string);
  const posts = await PostInfoModel.find({ authorId });
  return NextResponse.json(posts);
}
