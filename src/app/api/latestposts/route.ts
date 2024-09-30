import { NextResponse } from 'next/server';
import mongoose from "mongoose";
import { PostInfoModel } from '@/models/Post';

export async function GET() {
    await mongoose.connect(process.env.MONGODB_URI as string);
    try {
        const posts = await PostInfoModel.find().sort({ createdAt: -1 }).limit(10);
        return Response.json(posts);
    } catch (error) {
        return Response.json(error);
    }
}
