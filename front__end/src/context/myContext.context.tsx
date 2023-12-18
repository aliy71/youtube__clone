'use client'

import { useState } from "react"
import { SidebarContext } from "."

const MyContext = (props: any) => {
    const [sidebarPosition, setSidebarPosition] = useState('full')

    const contextObj = {
        sidebarContext: sidebarPosition,
        sidebarPositionChangePosition: () => setSidebarPosition(prev => prev === 'full' ? 'short' : 'full')
    }
    return (
        <SidebarContext.Provider value={contextObj.sidebarContext}>
            {props}
        </SidebarContext.Provider>
    )
} 

export default MyContext