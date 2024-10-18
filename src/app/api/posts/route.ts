import { authOptions } from "@/lib/authOptions";
import { PostInfoModel } from "@/models/Post";
import { ProfileInfoModel } from "@/models/ProfileInfo";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

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
        const approvalSwitch = await PostInfoModel.findByIdAndUpdate(id, { approved: isApproved }, { new: true });
        
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


  export async function DELETE(request: Request) {
    await mongoose.connect(process.env.MONGODB_URI as string);
    const session = await JSON.parse(JSON.stringify(await getServerSession(authOptions)));;

    const email = session.user.email;
    const profile = await ProfileInfoModel.findOne({ email });
    const url = new URL(request.url);
    const _id = url.searchParams.get('_id');
    if (profile && profile.admin) {
      await PostInfoModel.deleteOne({ _id });
      return NextResponse.json({ message: 'Post deleted successfully' }, { status: 200 });
    } else {
        return NextResponse.json({ message: 'Forbidden: You do not have rights for this action' }, { status: 403 });
    }
  }