import { Schema, model, models } from 'mongoose';

export type CategoryInfo = {
    slug: string;
    title: string;
    img: string
  };

const categorySchema = new Schema({
  slug: { type: String, required: true },
  title: { type: String, required: true },
  img: { type: String, required: true },
}, {timestamps: true});

const Category = models.Category || model<CategoryInfo>('Category', categorySchema);

export default Category;