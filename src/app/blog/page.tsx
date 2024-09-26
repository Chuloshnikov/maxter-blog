'use client';

import CategoryItem from '@/components/blog/CategoryItem';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Categories() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/api/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className='max-w-contentContainer mx-auto flex flex-col items-center justify-center'>
      <div>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {categories?.map((category: any) => <CategoryItem key={category._id} category={category}/>)}
        </ul>
      </div>
      <div className='mt-8'>
        latest posts
      </div>
    </div>
  )
}
