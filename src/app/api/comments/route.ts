import { NextResponse, NextRequest } from 'next/server';
import mongoose from "mongoose";
import { CommentsModel } from '@/models/Comment';
import {ProfileInfoModel} from "@/models/ProfileInfo";
import {authOptions} from "@/lib/authOptions";
import {getServerSession} from "next-auth";


export async function POST(request: NextRequest) {
    await mongoose.connect(process.env.MONGODB_URI as string);

    try {
        const data = await request.json();

        const session = await getServerSession(authOptions);
        if (!session) throw 'you need to be logged in';
        const email = session.user?.email;
        const name = session.user?.name;

        const profileInfoDoc = await ProfileInfoModel.findOne({email});
        const { displayName, avatarUrl, _id} = profileInfoDoc;
        
        let authorName:any = '';
        if (displayName) {
            authorName = displayName;
        } else {
            authorName = name;
        }

        const commentDoc = ({authorEmail: email, authorId: _id, authorName, authorAvatarUrl: avatarUrl, ...data});

        const createComment = await CommentsModel.create(commentDoc);

        return NextResponse.json(createComment);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create comment', details: error }, { status: 500 });
    }

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
        const approvalSwitch  = await CommentsModel.findByIdAndUpdate(id, { approved: isApproved }, { new: true });
        
        if (!approvalSwitch) {
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
      await CommentsModel.deleteOne({ _id });
      return NextResponse.json({ message: 'Comment deleted successfully' }, { status: 200 });
    } else {
        return NextResponse.json({ message: 'Forbidden: You do not have rights for this action' }, { status: 403 });
    }
  }