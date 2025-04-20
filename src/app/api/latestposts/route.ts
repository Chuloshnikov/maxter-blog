import { NextResponse } from 'next/server';
import { PostInfoModel } from '@/models/Post';
import { dbConnect } from '@/lib/dbConnect';

export async function GET() {
    await dbConnect();
    try {
        const posts = await PostInfoModel.find().sort({ createdAt: -1 }).limit(10);
        return NextResponse.json(posts);
    } catch (error) {
        return NextResponse.json(error);
    }
}
