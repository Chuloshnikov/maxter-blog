import AdminPagesTitle from '@/components/dashboard/AdminPagesTitle'
import CreateCategoryForm from '@/components/dashboard/CreateCategoryForm'
import Category from '@/models/Category'
import mongoose from 'mongoose'
import Link from 'next/link'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

export default async function UpdateCategory({ params: { _id } }: SearchParamProps) {
    await mongoose.connect(process.env.MONGODB_URI as string);
    const categoryDoc = JSON.parse(JSON.stringify( await Category.findOne({_id})));
  return (
    <div>
        <AdminPagesTitle text={"Update category"}/>
        <Link
          className='submitButton mt-8 max-w-max flex gap-2 items-center'
          href={'/admin'}
          >
            <FaArrowLeft/>  
          <span>Back to dashboard</span>
        </Link>
        <CreateCategoryForm category={categoryDoc} action={'update'}/>
    </div>
  )
}
