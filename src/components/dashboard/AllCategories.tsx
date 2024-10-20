"use client"
import { CategoryInfo } from '@/models/Category';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react'

const AllCategories = () => {
    const [categories, setCategories] = useState<CategoryInfo[]>([]);

    useEffect(() => {
        fetch('/api/categories')
          .then((res) => res.json())
          .then((data) => setCategories(data));
      }, []);

  return (
    <div className='flex gap-4 flex-wrap items-center justify-center'>
        {categories && categories.map((cat, index) => (
            <Link
            href={`/admin/categories/update/${cat._id}`}
            className='border-2 border-accentBg p-1'
            key={index}
            >
                <Image src={cat.img} width={100} height={100} alt="category"/>
               <span className='text-lg font-semibold text-gray-600'>{cat.title}</span> 
            </Link>
            ))}
    </div>
  )
}

export default AllCategories;