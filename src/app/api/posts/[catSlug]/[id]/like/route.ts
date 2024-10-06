import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { PostInfoModel } from '@/models/Post';

export async function PUT(request, { params }) {
    await mongoose.connect(process.env.MONGODB_URI as string);
    const { id } = params;
    const { userId } = await request.json();

    const post = await PostInfoModel.findOne({ _id: id });
    if (!post) return NextResponse.json({ message: 'Post not found' }, { status: 404 });

    if (post.usersDisliked.includes(userId)) {
        post.dislikes -= 1;
        post.usersDisliked.pull(userId);
    }

    if (post.usersLiked.includes(userId)) {
        post.likes -= 1;
        post.usersLiked.pull(userId);
    } else {
        post.likes += 1;
        post.usersLiked.push(userId);
    }

    await post.save();
    return NextResponse.json(post);
}