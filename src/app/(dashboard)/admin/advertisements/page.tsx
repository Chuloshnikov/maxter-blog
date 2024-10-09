import AdvertisementItem from '@/components/dashboard/AdvertisementItem'
import { AdvertisementsModel } from '@/models/Advertisement';
import mongoose from 'mongoose';
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa';


export default async function Advertisements() {

    await mongoose.connect(process.env.MONGODB_URI as string);
  const advertisements = JSON.parse(JSON.stringify( await AdvertisementsModel.find()));
  return (
    <div className='flex flex-col gap-4 justify-between'>
        <Link 
        className="flex items-center justify-center py-6 px-10 bg-accentBg border-4 border-accentBg text-white text-2xl text-center hover:text-accentBg hover:bg-white duration-200  font-semibold"
        href={'/admin/advertisements/new'}
        >
          <div className="flex gap-2 items-center">
              <span>Create new advertisement</span>
              <FaArrowRight />
          </div>
        </Link>
        <div className='flex gap-16 flex-wrap max-w-screen'>
          {/*all adverts*/}
          {advertisements ? 
            advertisements?.map((item: { _id: FormDataEntryValue; title: string; websiteUrl: string; coverUrl: string }, index: number) => (
                <AdvertisementItem item={item} key={index}/>
            )
          ) : (
            <div className='w-full h-full flex flex-col items-center justify-center'>
                <div>Not found</div>
            </div>
          )}
        </div>
    </div>
  )
}
