import { NextResponse } from 'next/server';
import mongoose from "mongoose";
import { CommentsModel } from '@/models/Comment';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';
import { ProfileInfoModel } from '@/models/ProfileInfo';


export async function GET(request: Request, { params }: { params: { id: string }}) {
    const { id } = params;
    await mongoose.connect(process.env.MONGODB_URI as string);
    const comments = await CommentsModel.find({postId: id});
    return NextResponse.json(comments);
  }


 