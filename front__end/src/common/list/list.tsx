'use client'
import ISidebarData from '@/interface/sidebarData'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const List = ({ label, icon, path }: ISidebarData) => {
  const pathName = usePathname();
  
  return (
    <Link href={`${path}`}>
        <li className={`py-2 px-3 flex items-center space-x-4 rounded-lg hover:bg-black/5 ${pathName === path && 'bg-black/5 font-bold'}`}>
            {icon && icon}
            <span className='capitalize'>{label}</span>
        </li>
    </Link>
  )
}

export default List