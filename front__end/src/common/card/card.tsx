import { IAuthor, IVideoCard } from '@/interface/videoCardData'
import Link from 'next/link'
import React from 'react'

interface IProps {
    label: string,
    author: IAuthor,
    views: string,
    date: string,
    detail: string,
}

const Card = ({ label, author:{userName, userImg}, views, date, detail }: IProps) => {
  return (
    <div className='w-[350px] min-w-[320px] group h-[320px]'>
        <div className='rounded-xl group-hover:rounded-none overflow-hidden transition-all'>
            <img src={detail} alt="image" className='group-hover:scale-105' />
        </div>
        <div className=' flex items-start justify-between p-2'>
            <div className='w-[40px] h-[40px] mt-1'>
                <Link href={`/user/${userName}`}>
                    <img src={userImg} alt="image" className='rounded-full w-full h-full object-cover'/>
                </Link>
            </div>
            <div className='w-[85%]'>
                <h3 className='text-xl font-bold'>
                    <Link href={`/video-detail/${label}`}>{label}</Link>
                </h3>
                <h6 className='text-grey'>
                    <Link href={`/user/${userName}`}>{userName}</Link>
                </h6>
                <p className='text-grey text-sm'>
                    <span>{views} views</span> * 
                    <span> {date} ago</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Card