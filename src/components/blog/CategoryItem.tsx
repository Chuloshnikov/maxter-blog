import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface CategoryItemProps {
    _id: string;
    title: string;
    slug: string;
    img: string;
}

const CategoryItem = ({category}: {category: CategoryItemProps}) => {
  return (
    <li 
    className='w-[300px] h-[300px] relative hover:opacity-80 duration-200'
    key={category._id}
  >
    <Link href={`posts/${category.slug}`}>
      <div className='w-full h-full relative'>
        <Image 
          src={category.img} 
          className='object-cover' 
          layout='fill'
          alt={category.title} 
        />
        <h4 className='z-10 absolute px-2 py-1 right-0 bottom-0 bg-accentBg text-white'>
          {category.title}
        </h4>
      </div>
    </Link>
  </li>
  )
}

export default CategoryItem;