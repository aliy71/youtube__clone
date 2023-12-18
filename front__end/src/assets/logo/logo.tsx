import Link from 'next/link'
import React from 'react'

type Props = {}

const Logo = (props: Props) => {
  return (
    <Link href={'/'}>
        <div className='relative text-xl font-medium bg-[red] rounded-xl text-white px-1 py-1 border border-[red] overflow-hidden'>
            YouTube
            <span className='absolute bottom-0 right-0 bg-white/75 rounded-sm text-[red] text-sm font-medium px-1'>Clone</span>
        </div>
    </Link>
  )
}

export default Logo