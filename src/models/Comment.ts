import { Schema, model, models } from 'mongoose';


export interface CommentTypes {
    authorName: string;
    authorAvatarUrl: string;
    authorEmail: string;
    desc: string;
    postId: string;
}


const commentsSchema = new Schema<CommentTypes>({
    authorName: { type: String, required: true },
    authorEmail: { type: String, required: true },
    authorAvatarUrl: { type: String },
    desc: { type: String, required: true, unique: true},
    postId: {type: String},
  }, {timestamps: true});
  
  export const CommentsModel = models?.Comment || model<CommentTypes>('Comment', commentsSchema);