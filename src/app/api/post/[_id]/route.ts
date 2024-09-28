import { NextResponse } from 'next/server';
import mongoose from "mongoose";
import { PostInfoModel } from '@/models/Post';

export async function GET(request: Request, { params }: { params: { _id: string } }) {
  const { _id } = params;
  await mongoose.connect(process.env.MONGODB_URI as string);
  const post = await PostInfoModel.findById({_id});
  return NextResponse.json(post);
}