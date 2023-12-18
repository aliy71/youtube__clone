'use client'

import { List } from '@/common'
import { SidebarData } from '@/constants'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='px-3 overflow-x-auto'>
        <ul>
            { SidebarData.map(({ label, icon, path }) => (
                <List label={label} icon={icon} path={path} key={label} />
            )) }
        </ul>
    </div>
  )
}

export default Sidebar