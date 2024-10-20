import AdminPagesTitle from '@/components/dashboard/AdminPagesTitle'
import CreateCategoryForm from '@/components/dashboard/CreateCategoryForm'
import Link from 'next/link'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

export default function CreateCategory() {
  return (
    <div>
        <AdminPagesTitle text={"Create category"}/>
        <Link
          className='submitButton mt-8 max-w-max flex gap-2 items-center'
          href={'/admin'}
          >
            <FaArrowLeft/>  
          <span>Back to dashboard</span>
        </Link>
        <CreateCategoryForm action={'create'}/>
    </div>
  )
}
