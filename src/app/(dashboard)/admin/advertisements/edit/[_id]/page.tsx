import AdvertisementManagerForm from '@/components/dashboard/advertisements/AdvertisementManagerForm'
import { AdvertisementsModel } from '@/models/Advertisement';
import mongoose from 'mongoose';
import React from 'react'

export default async function EditAdvertisement({ params: { _id } }: SearchParamProps) {
    await mongoose.connect(process.env.MONGODB_URI as string);
    const advertisementsDoc = JSON.parse(JSON.stringify( await AdvertisementsModel.findOne({_id})));
  return (
    <div className='ml-10 xl:ml-0'>
        <AdvertisementManagerForm advertisement={advertisementsDoc} action={"update"}/>
    </div>
  )
}
