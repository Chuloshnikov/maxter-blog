'use client';

import CategoryItem from '@/components/blog/CategoryItem';
import LatestPosts from '@/components/blog/LatestPosts';
import Preloader from '@/components/ui/Preloader';
import { useEffect, useState } from 'react';

export default function BlogCategories() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('/api/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, [categories]);

  if (!categories.length) {
    <section className="flex min-w-screen min-h-[calc(100vh-21.1rem)] items-center justify-center">
      <Preloader/>
    </section>
  }

  return (
    <section className='max-w-contentContainer mx-auto flex flex-col items-center justify-center'>
      <div>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          {categories?.map((category: any) => <CategoryItem key={category._id} category={category}/>)}
        </ul>
      </div>
      <div className='min-w-full mt-8 px-4 xl:px-0'>
        <LatestPosts title="Latest posts"/>
      </div>
    </section>
  )
}