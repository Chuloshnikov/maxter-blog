import { PostInfoModel } from '@/models/Post';
import { ProfileInfoModel } from '@/models/ProfileInfo';
import mongoose from 'mongoose';
import React from 'react'

export default async function CheckPost({ params: { _id } }: { params: { _id: string } }) {
    await mongoose.connect(process.env.MONGODB_URI as string);
    const post = JSON.parse(JSON.stringify( await PostInfoModel.findOne({_id})));
    const user = JSON.parse(JSON.stringify( await ProfileInfoModel.findOne({ _id: post.authorId})));
    
  return (
    <div>Check post</div>
  )
}
