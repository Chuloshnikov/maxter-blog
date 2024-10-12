import { Schema, model, models } from 'mongoose';

export type PostInfo = {
  _id?: FormDataEntryValue;
  slug: string,
  title: string,
  desc: string,
  img: string,
  views: number,
  likes: number,
  dislikes: number,
  catSlug: string,
  username: string,
  avatarUrl: string,
  displayName: string,
  userEmail: string,
  authorId: string,
  approved: boolean,
  usersLiked: string[],
  usersDisliked: string[],
};

const postInfoSchema = new Schema<PostInfo>({
  slug: { type: String, required: true },
  title: { type: String, required: true, unique: true },
  desc: { type: String, required: true, unique: true },
  img: { type: String },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0 },
  catSlug: { type: String, required: true },
  username: {type: String, required: true },
  avatarUrl: {type: String},
  displayName: {type: String, required: true },
  userEmail: { type: String, required: true },
  authorId: {type: String, required: true },
  approved: {type: Boolean, default: false },
  usersLiked: { type: [String], default: [] },
  usersDisliked: { type: [String], default: [] },
}, {timestamps: true});

export const PostInfoModel = models?.Post || model<PostInfo>('Post',postInfoSchema);