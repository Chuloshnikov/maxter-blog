import { CommentsModel } from '@/models/Comment';
import { ProfileInfoModel } from '@/models/ProfileInfo';
import React from 'react'

export default async function CheckComment({ params: { _id } }: { params: { _id: string } }) {
    const comment = JSON.parse(JSON.stringify( await CommentsModel.findOne({_id})));
    const user = JSON.parse(JSON.stringify( await ProfileInfoModel.findOne({ _id: comment.authorId})));
  return (
    <div>Check comment</div>
  )
}
