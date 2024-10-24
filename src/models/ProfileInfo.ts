import {model, models, Schema} from 'mongoose';

export type ProfileInfo = {
  _id?: FormDataEntryValue;
  email: string;
  username: string;
  displayName: string;
  bio: string;
  avatarUrl: string;
  coverUrl: string;
  admin: boolean;
  createdAt?: Date
};

const profileInfoSchema = new Schema<ProfileInfo>({
  email: {type: String, unique: true, required: true},
  username: {type: String, unique: true, required: true},
  displayName: {type: String},
  bio: {type: String},
  avatarUrl: {type: String},
  coverUrl: {type: String},
  admin: {type: Boolean, default: false}
}, {timestamps: true});

export const ProfileInfoModel = models?.ProfileInfo || model<ProfileInfo>('ProfileInfo', profileInfoSchema);