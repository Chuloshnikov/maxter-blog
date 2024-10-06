import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { PostInfoModel } from '@/models/Post';

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    await mongoose.connect(process.env.MONGODB_URI as string);
    const { id } = params;
    const { userId } = await request.json();
  
    const post = await PostInfoModel.findById(id);
    if (!post) return NextResponse.json({ message: 'Post not found' }, { status: 404 });

    if (!post.usersLiked) post.set('usersLiked', [], { strict: false });
    if (!post.usersDisliked) post.set('usersDisliked', [], { strict: false });
  
    // Если пользователь уже дизлайкнул, убираем дизлайк
    if (post.usersDisliked.includes(userId)) {
        post.dislikes -= 1;
        post.usersDisliked.pull(userId);
    } else {
        // Добавляем дизлайк и убираем лайк, если он есть
        post.dislikes += 1;
        post.usersDisliked.push(userId);

        if (post.usersLiked.includes(userId)) {
            post.likes -= 1;
            post.usersLiked.pull(userId);
        }
    }
  
    await post.save();
    return NextResponse.json(post);
}