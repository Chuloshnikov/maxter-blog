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

export async function PUT(request: Request) {
  const { id, isApproved } = await request.json();

  
  // data 
  if (!id || typeof isApproved === 'undefined') {
    return NextResponse.json({ message: 'Invalid request data' }, { status: 400 });
  }

    await mongoose.connect(process.env.MONGODB_URI as string);


  try {
    const session = await JSON.parse(JSON.stringify(await getServerSession(authOptions)));
    
    if (!session) {
      return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
    }

    const email = session.user.email;
    const profile = await ProfileInfoModel.findOne({ email });
    
    if (profile && profile.admin) {
      const approvalSwitch = await PostInfoModel.findByIdAndUpdate(id, { admin: isApproved }, { new: true });
      
      if (!approvalSwitch ) {
        return NextResponse.json({ message: 'User not found' }, { status: 404 });
      }

      return NextResponse.json(approvalSwitch);
    } else {
      return NextResponse.json({ message: 'Forbidden: You do not have rights for this action' }, { status: 403 });
    }
  } catch (error) {
    console.error('Error updating user admin status:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}