'use client'

import { IInput } from '@/interface/input.interface'

const Input = ({ label, labelText, inputType = 'text', changeHandler }: IInput) => {
  return (
    <div className='relative group mt-4'>
        <label htmlFor={label} className='absolute text-sm text-grey px-1 bg-white rounded-sm top-[7px] left-1 group-hover:top-[-10px] group-hover:text-[12px] transition-all'>{labelText}</label>
        <input type={inputType} id={label} className='w-full py-1 px-2 border-b rounded-sm outline-black-300' onChange={changeHandler}/>
    </div>
  )
}

export default Input
