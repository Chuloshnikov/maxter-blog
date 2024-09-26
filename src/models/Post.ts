import { Schema, model, models } from 'mongoose';

const postSchema = new Schema({
  slug: { type: String, required: true },
  title: { type: String, required: true },
  desc: { type: String, required: true },
  img: { type: String },
  views: { type: Number, default: 0 },
  catSlug: { type: String, required: true },
  userEmail: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Post = models.Post || model('Post', postSchema);

export default Post;