import AdvertisementManagerForm from '@/components/dashboard/AdvertisementManagerForm'
import React from 'react'

export default function NewAdvertisement() {
  return (
    <div>
        <AdvertisementManagerForm action={"create"}/>
    </div>
  )
}
