import { List } from '@/common'
import React from 'react'
import { MdPrivateConnectivity, MdSecurity, MdSettings } from 'react-icons/md'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='absolute bottom-0 p-2 border-t border-t-black/5'>
        <ul className='my-2'>
            <List label='settings' path='/settings' icon={<MdSettings />}/>
            <List label='privace' path='/s/privace' icon={<MdSecurity />}/>
        </ul>
        <p className='text-[12px] text-grey'>©2023 TenX IT company</p>
    </div>
  )
}

export default Footer