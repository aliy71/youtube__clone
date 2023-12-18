import React from 'react'

type Props = {
    label: string,
    icon?: React.ReactNode
}

const TagLink = ({label, icon}: Props) => {
  return (
    <button className='py-1 px-4 bg-black/5 text-black rounded-full first:bg-black first:text-white hover:bg-black/80 hover:text-white'>{label}</button>
  )
}

export default TagLink