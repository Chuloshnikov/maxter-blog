'use client';

import Image from 'next/image';
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
          <h1>Categories</h1>
              <ul>
                {categories.map((category: any) => (
                  <li key={category._id}>
                    <Image src={category.img} width={200} height={200} alt='categpry'/>
                    <a href={`/categories/${category.slug}`}>{category.title}</a>
                  </li>
                ))}
              </ul>
    </div>
  )
}
