import {model, models, Schema} from 'mongoose';

export type AdvertisementProps = {
  title: string;
  websiteUrl: string;
  displayName: string;
  coverUrl: string;
}

const advertisementSchema = new Schema<AdvertisementProps>({
  title: {type: String, required: true},
  websiteUrl: {type: String, required: true},
  coverUrl: {type: String},
}, {timestamps: true});

export const AdvertisementsModel = models?.AdvertisementInfo || model<AdvertisementProps>('AdvertisementInfo', advertisementSchema);