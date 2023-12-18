'use client'
import { TagLink } from '@/common'
import { CategoryData } from '@/constants'

type Props = {}

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode } from 'swiper/modules';


const Categories = (props: Props) => {
  return (
    <div className='flex justify-start gap-2 overflow-x-auto py-2'>
      {
        CategoryData.map(({ label, icon }) => (
          <TagLink key={label} label={label} icon={icon} />
        ))
      }
    </div>
  )
}

export default Categories