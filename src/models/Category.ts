import { Schema, model, models } from 'mongoose';

export type CategoryInfo = {
    _id?: FormDataEntryValue;
    slug: string;
    title: string;
    img: string,
    createdAt?: Date;
  };

const categorySchema = new Schema({
  slug: { type: String, required: true },
  title: { type: String, required: true },
  img: { type: String, required: true },
}, {timestamps: true});

const Category = models.Category || model<CategoryInfo>('Category', categorySchema);

export default Category;