'use client'

import { List } from '@/common'
import { SidebarData } from '@/constants'
import React from 'react'
import Footer from '../footer/footer'

const Sidebar = () => {
  return (
    <div className='relative px-3 overflow-x-auto flex flex-col min-h-[90vh]'>
        <ul>
            { SidebarData.map(({ label, icon, path }) => (
                <List label={label} icon={icon} path={path} key={label} />
            )) }
        </ul>
        <Footer />
    </div>
  )
}

export default Sidebar