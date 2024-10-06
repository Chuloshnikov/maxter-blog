import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { PostInfoModel } from '@/models/Post';

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    await mongoose.connect(process.env.MONGODB_URI as string);
    const { id } = params;
    const { userId } = await request.json();

    const post = await PostInfoModel.findOne({ _id: id });
    if (!post) return NextResponse.json({ message: 'Post not found' }, { status: 404 });

    if (!post.usersLiked) post.usersLiked = [];
    if (!post.usersDisliked) post.usersDisliked = [];

    // Если пользователь уже лайкнул, убираем лайк
    if (post.usersLiked.includes(userId)) {
        post.likes -= 1;
        post.usersLiked.pull(userId);
    } else {
        // Добавляем лайк и убираем дизлайк, если он есть
        post.likes += 1;
        post.usersLiked.push(userId);

        if (post.usersDisliked.includes(userId)) {
            post.dislikes -= 1;
            post.usersDisliked.pull(userId);
        }
    }

    await post.save();
    return NextResponse.json(post);
}