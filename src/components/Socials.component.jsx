import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";

const Socials = () => {
  return (
    <div className='flex mb-[24px] gap-2'>
        <div className='bg-[#1D1D1D] w-[42px] h-[42px] rounded-full flex items-center justify-center'><FaFacebookF className='text-white text-[20px]' /></div>
          <div className='bg-[#1D1D1D] w-[42px] h-[42px] rounded-full flex items-center justify-center'><FaXTwitter className='text-white text-[20px]' /></div>
          <div className='bg-[#1D1D1D] w-[42px] h-[42px] rounded-full flex items-center justify-center'><FaInstagram className='text-white text-[20px]' /></div>
          <div className='bg-[#1D1D1D] w-[42px] h-[42px] rounded-full flex items-center justify-center'><FaPinterestP className='text-white text-[20px]' /></div>
    </div>
  )
}

export default Socials