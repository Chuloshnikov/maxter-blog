import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { PostInfoModel } from '@/models/Post';


export async function GET(request: Request, { params }: { params: { _id: string } }) {
  const { _id } = params;
  await mongoose.connect(process.env.MONGODB_URI as string);
  const post = await PostInfoModel.findById(_id);
  return NextResponse.json(post);
}


export async function PUT(request: Request, { params }: { params: { _id: string } }) {
  const { _id } = params;

  try {
    await mongoose.connect(process.env.MONGODB_URI as string);

    await PostInfoModel.findByIdAndUpdate(_id, { $inc: { views: 1 } });

    return NextResponse.json({ message: 'View count incremented' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update view count' }, { status: 500 });
  }
}