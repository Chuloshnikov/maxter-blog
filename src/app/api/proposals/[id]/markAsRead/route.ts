import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { ContactsModel } from "@/models/Contacts";
import { getServerSession } from 'next-auth'; 
import { authOptions } from "@/lib/authOptions";
import { ProfileInfoModel } from '@/models/ProfileInfo'; 

export async function PUT(request: Request) {
  const { id } = await request.json();

  if (!id) {
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
      const result = await ContactsModel.findByIdAndUpdate(id, { read: true }, { new: true });

      if (result) {
        return NextResponse.json({ message: 'Proposal marked as read' }, { status: 200 });
      } else {
        return NextResponse.json({ error: 'Failed to update proposal' }, { status: 400 });
      }
    } else {
      return NextResponse.json({ message: 'Forbidden: You do not have rights for this action' }, { status: 403 });
    }
  } catch (error) {
    console.error('Error updating proposal read status:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}

//GET not allowed
export async function GET() {
  return NextResponse.json({ message: 'Method not allowed' }, { status: 405 });
}