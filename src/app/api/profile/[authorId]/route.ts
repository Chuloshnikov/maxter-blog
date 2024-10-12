import { ProfileInfoModel } from '@/models/ProfileInfo';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { authorId: string } }) {
  const { authorId } = params;
  
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);

    const user = await ProfileInfoModel.findOne({ _id: authorId });

    if (user) {
      const { displayName, bio, avatarUrl, coverUrl } = user;
      const author = { displayName, bio, avatarUrl, coverUrl };
      return NextResponse.json(author);
    } else {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

