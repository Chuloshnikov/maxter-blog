import AdvertisementManagerForm from '@/components/dashboard/AdvertisementManagerForm'
import React from 'react'

export default function NewAdvertisement() {
  return (
    <div className='ml-10 xl:ml-0'>
        <AdvertisementManagerForm action={"create"}/>
    </div>
  )
}
