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
        const { displayName, avatarUrl} = profileInfoDoc;
        
        let authorName:any = '';
        if (displayName) {
            authorName = displayName;
        } else {
            authorName = name;
        }

        const commentDoc = ({authorEmail: email, authorName, authorAvatarUrl: avatarUrl, ...data});

        const createComment = await CommentsModel.create(commentDoc);

        return new NextResponse(createComment);
    } catch (error) {
        NextResponse.json(error);
    }

}