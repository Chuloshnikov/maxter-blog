import {model, models, Schema} from 'mongoose';

export type ContactsTypes = {
  name: string;
  email: string;
  phone: string;
  message: string;
  read: boolean;
};

const contactsSchema = new Schema<ContactsTypes>({
  name: {type: String, required: true},
  email: {type: String, required: true},
  phone: {type: String, required: true},
  message: {type: String, required: true},
  read: {type: Boolean, default: false},
}, {timestamps: true});

export const ContactsModel = models?.Contact || model<ContactsTypes>('Contact', contactsSchema);