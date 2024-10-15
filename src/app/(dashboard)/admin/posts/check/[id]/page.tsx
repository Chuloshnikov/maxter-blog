import Author from '@/components/dashboard/Author';
import TextCheckPage from '@/components/dashboard/TextCheckPage';
import { PostInfoModel } from '@/models/Post';
import { ProfileInfoModel } from '@/models/ProfileInfo';
import mongoose from 'mongoose';
import React from 'react'

export default async function CheckPost({ params: { id } }: { params: { id: string } }) {
    await mongoose.connect(process.env.MONGODB_URI as string);
    const post = JSON.parse(JSON.stringify( await PostInfoModel.findOne({_id: id})));
    const user = JSON.parse(JSON.stringify( await ProfileInfoModel.findOne({ _id: post?.authorId})));
    console.log(id);
    console.log(post?.authorId);
    console.log(user);
  return (
    <div>
        <Author user={user}/>
        <TextCheckPage text={post.desc}/>
    </div>
  )
}
