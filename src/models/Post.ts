import { Schema, model, models } from 'mongoose';

export type PostInfo = {
  slug: string;
  title: string;
  desc: string;
  img: string;
  views: number,
  likes: number,
  dislikes: number,
  catSlug: string,
  username: string;
  userAvatar: string;
  displayName: string;
  userEmail: string,
};

const postInfoSchema = new Schema<PostInfo>({
  slug: { type: String, required: true },
  title: { type: String, required: true },
  desc: { type: String, required: true },
  img: { type: String },
  views: { type: Number, default: 0 },
  likes: {type: Number, default: 0},
  dislikes: {type: Number, default: 0},
  catSlug: { type: String, required: true },
  username: {type: String, required: true },
  userAvatar: {type: String},
  displayName: {type: String, required: true },
  userEmail: { type: String, required: true },
});

export const PostInfoModel = models?.Post || model<PostInfo>('Post',postInfoSchema);