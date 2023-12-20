import React from 'react'

type Props = {}

const ShortComponent = (props: Props) => {
  return (
    <div className='grid grid-cols-3 gap-4'>
        <div className='row-span-1 border h-6'>

        </div>
        <div className='row-span-2 border h-full'>

        </div>
        <div className='row-span-1 border h-6'>

        </div>
        <div className='row-span-1 border h-6'>

        </div>
        <div className='row-span-2 col-span-1 border h-full'>

        </div>
        <div className='row-span-1 border h-6'>

        </div>
        <div className='row-span-1 border h-6'>

        </div>
    </div>
  )
}

export default ShortComponent