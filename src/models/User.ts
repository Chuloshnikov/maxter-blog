import { Schema, Document, models, model } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  image: string;
  emailVerified: Date | null;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    emailVerified: { type: Date, default: null },
  },
  { timestamps: true }
);

// Prevent model overwrite upon hot-reload
export const UserModel = models.User || model<IUser>("User", UserSchema);