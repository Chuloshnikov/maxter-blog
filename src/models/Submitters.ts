import {model, models, Schema} from 'mongoose';

export type SubmittersTypes = {
  _id?: FormDataEntryValue;
  email: string;
  createdAt?: Date
};

const submittersSchema = new Schema<SubmittersTypes>({
  email: {type: String, unique: true, required: true},
}, {timestamps: true});

export const SubmittersModel = models?.Submitter || model<SubmittersTypes>('Submitter', submittersSchema);