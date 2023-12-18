import { Categories, MainField } from '@/components'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className='px-2'>
      <Categories />
      <MainField />
    </div>
  )
}

export default Page