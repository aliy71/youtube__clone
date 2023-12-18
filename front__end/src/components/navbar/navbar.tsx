'use client'

import { Logo } from "@/assets";
import { Button, IconButton } from "@/common";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='flex items-center justify-between py-2 px-4'>
        <div className="flex items-center space-x-2">
            <IconButton icon={<RxHamburgerMenu size={'24px'}/>}/>
            <Logo />
        </div>
        <div className="flex items-center space-x-4">
            <div>
                <IconButton icon={<BsThreeDotsVertical />}/>
            </div>
            <Button label="sign-in" path="sign-in" icon={<FaUser size={'20px'} />} classType="primary"/>
            <Button label="sign-up" path="sign-up" icon={<FaUser size={'20px'} />} classType="secondary"/>
        </div>
    </div>
  )
}

export default Navbar