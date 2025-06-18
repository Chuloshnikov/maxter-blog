import { CATEGORIES } from '@/constants/categories';
import Link from 'next/link';
import React from 'react'

const Categories = () => {
  return (
     <section className="py-10 mt-10 bg-gradient-to-r from-gray-200 to-[#3DB4FF] spacey-1py-16 px-4 w-full p-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Explore Topics</h2>
            <p className="text-lg last:text-gray-600">Find content that matches your interests</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {CATEGORIES.map((category, index) => (
              <Link href={`/posts/${category.toLowerCase()}`} key={index} className="hover:shadow-md transition-shadow cursor-pointer group">
                <div className="p-4 text-center">
                  <div className="text-lg font-bold text-gray-700 group-hover:text-sky-800 transition-colors">
                    {category}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{Math.floor(Math.random() * 100) + 20} articles</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Categories;