import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { PostInfoModel } from '@/models/Post';

export async function POST(request, { params }) {
    await mongoose.connect(process.env.MONGODB_URI as string);
    const { id } = params;
    const { userId } = await request.json();
  
    const post = await PostInfoModel.findById({ _id: id, });
    if (!post) return NextResponse.json({ message: 'Post not found' }, { status: 404 });
  
    // Убираем лайк, если он есть
    if (post.usersLiked.includes(userId)) {
      post.likes -= 1;
      post.usersLiked.pull(userId);
    }
  
    if (post.usersDisliked.includes(userId)) {
      post.dislikes -= 1;
      post.usersDisliked.pull(userId);
    } else {
      post.dislikes += 1;
      post.usersDisliked.push(userId);
    }
  
    await post.save();
    return NextResponse.json(post);
  }