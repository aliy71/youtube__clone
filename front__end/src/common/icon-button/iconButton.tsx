'use client'

import { button } from '@nextui-org/react'
import React from 'react'

type Props = {
    icon?: React.ReactNode,
    clickHandler?: Function | any,
}

const IconButton = ({icon, clickHandler}: Props) => {
  return (
    <button className='rounded-full p-2 hover:bg-black/10 transition-all text-2xl' onClick={clickHandler}>{icon}</button>
  )
}

export default IconButton