'use client'
import { button } from '@nextui-org/react'
import Link from 'next/link'
import React from 'react'

type Props = {
  label?: string,
  icon?: React.ReactNode,
  path?: string,
  type?: string,
  classType: string,
  clickHandler?: () => {},
}

const chooseType = (type: string) => {
  switch (type) {
    case 'primary':
      return 'bg-black text-white hover:bg-black/80'
    case 'secondary':
      return 'bg-[transparent] text-black hover:bg-black hover:text-white'
  }
}

const Button = ({ 
  label, 
  icon, 
  path, 
  type = 'link', 
  classType, 
  clickHandler
 } : Props) => {

  const choisedType = chooseType(classType)

  return (
    type === 'link' ? (
      <Link href={`/${path}`}>
        <button className={`py-2 px-3 border border-black rounded-full flex items-center space-x-2 ${choisedType}`}>
          {icon && icon}
          <span>{label}</span>
        </button>
      </Link>
    ) : (
      <button 
        className={`py-2 px-3 border border-black rounded-full flex items-center space-x-2 ${choisedType}`} 
        onClick={clickHandler}
        >
        {icon && icon}
        <span>{label}</span>
      </button>
    )
  )
}

export default Button