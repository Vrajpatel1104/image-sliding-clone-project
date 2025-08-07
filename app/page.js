import Header from '@/components/Header'
import ImageSlider from '@/components/ImageSlider'
import React from 'react'

function page() {
  return (
    <div>
      <Header />
      <ImageSlider />
      <div className='bg-gray-50 h-21 w-full'></div>
    </div>
  )
}

export default page