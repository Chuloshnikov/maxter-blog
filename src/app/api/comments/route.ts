import { NextResponse, NextRequest } from 'next/server';
import mongoose from "mongoose";
import { CommentsModel } from '@/models/Comment';
import {ProfileInfoModel} from "@/models/ProfileInfo";
import {authOptions} from "@/lib/authOptions";
import {getServerSession} from "next-auth";


export async function GET(request: Request, { params }: { params: CommentParams}) {
  const { 
    authorName, 
    authorAvatarUrl, 
    authorEmail, 
    desc, 
    postId
   } = params;
  await mongoose.connect(process.env.MONGODB_URI as string);
  const posts = await CommentsModel.find({ });
  return NextResponse.json(posts);
}

export async function POST(request: NextRequest) {
    await mongoose.connect(process.env.MONGODB_URI as string);

    try {
        const data = await request.json();

        const session = await getServerSession(authOptions);
        if (!session) throw 'you need to be logged in';
        const email = session.user?.email;

        const profileInfoDoc = await ProfileInfoModel.findOne({email});
        const { displayName, avatarUrl} = profileInfoDoc;

        const commentDoc = data.push(email, {authorName: displayName}, {authorAvatarUrl: avatarUrl});

        await CommentsModel.create(commentDoc);

        return true;
    } catch (error) {
        NextResponse.json(error);
    }

}