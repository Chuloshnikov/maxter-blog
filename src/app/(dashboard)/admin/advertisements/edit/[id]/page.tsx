import AdvertisementManagerForm from '@/components/dashboard/AdvertisementManagerForm'
import { AdvertisementsModel } from '@/models/Advertisement';
import mongoose from 'mongoose';
import React from 'react'

export default async function EditAdvertisement() {
    await mongoose.connect(process.env.MONGODB_URI as string);
  const advertisementsDoc = JSON.parse(JSON.stringify( await AdvertisementsModel.findOne({_id})));
  return (
    <div className='ml-10 xl:ml-0'>
        <AdvertisementManagerForm/>
    </div>
  )
}
