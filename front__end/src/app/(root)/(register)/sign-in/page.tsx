'use client'
import { Logo } from '@/assets'
import { Button, Input, TagLink } from '@/common'
import Link from 'next/link'
import React from 'react'

type Props = {}

const SignInPage = (props: Props) => {
  return (
    <div className='flex items-center justify-center min-h-[70vh] '>
      <div className='w-[40%] rounded-xl px-6 py-8 shadow-xl shadow-black-500'>
        <h2 className='text-lg capitalize font-medium text-center my-4 flex items-center justify-center gap-x-1'>
          <span>sign-in to </span>
          <Logo />
        </h2>
        <div className=''>
          <Input label='first_name' labelText='enter your first name' changeHandler={() => {}}/>
          <Input label='last_name' labelText='enter your last name' changeHandler={() => {}}/>
          <Input label='email' labelText='enter your email' inputType='email'  changeHandler={() => {}}/>
          <div className='flex justify-between gap-x-2'>
            <div className='w-[50%]'>
              <Input label='password' labelText='enter your password' inputType='password' changeHandler={() => {}}/>
            </div>
            <div className='w-[50%]'>
              <Input label='password' labelText='enter your password' inputType='password' changeHandler={() => {}}/>
            </div>
          </div>
        </div>
        <div className='mt-4 my-2 flex justify-center'>
          <Button label='register to youtube clone' classType='primary' type={'button'}/>
        </div>
        <p className='text-sm group inline-block'>
          <span>You have been allready accaunt </span>
          <Link href={'/sign-up'} className='px-[1px] rounded-sm group-hover:bg-black group-hover:text-white'>sign up</Link>
        </p>
      </div>
    </div>
  )
}

export default SignInPage