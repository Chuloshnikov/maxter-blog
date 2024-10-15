import Author from '@/components/dashboard/Author';
import TextCheckPage from '@/components/dashboard/TextCheckPage';
import { CommentsModel } from '@/models/Comment';
import { ProfileInfoModel } from '@/models/ProfileInfo';
import mongoose from 'mongoose';
import React from 'react'

export default async function CheckComment({ params: { id } }: { params: { id: string } }) {
    await mongoose.connect(process.env.MONGODB_URI as string);
    const comment = JSON.parse(JSON.stringify( await CommentsModel.findOne({_id: id})));
    const user = JSON.parse(JSON.stringify( await ProfileInfoModel.findOne({ _id: comment?.authorId})));
    console.log(id);
    console.log(comment?.authorId);
    console.log(user);
  return (
    <div>
        <Author user={user}/>
        <TextCheckPage text={comment.desc}/>
    </div>
  )
}
