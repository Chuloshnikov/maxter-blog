import { NextResponse } from 'next/server';
import mongoose from "mongoose";
import { CommentsModel } from '@/models/Comment';


export async function GET(request: Request, { params }: { params: { id: string }}) {
    const { id } = params;
    await mongoose.connect(process.env.MONGODB_URI as string);
    const comments = await CommentsModel.find({postId: id});
    return NextResponse.json(comments);
  }