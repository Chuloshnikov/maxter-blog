import { NextResponse } from 'next/server';
import { PostInfoModel } from '@/models/Post';


export async function GET( { params }: { params: Promise<{ _id: string }> }) {
  try {
    const { _id } = await params;
    const post = await PostInfoModel.findById(_id);
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch post data' }, { status: 500 });
  }
}


export async function PUT( { params }: { params: Promise<{ _id: string }> }) {
  try {
    const { _id } = await params;
    await PostInfoModel.findByIdAndUpdate(_id, { $inc: { views: 1 } });
    return NextResponse.json({ message: 'View count incremented' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update view count' }, { status: 500 });
  }
}