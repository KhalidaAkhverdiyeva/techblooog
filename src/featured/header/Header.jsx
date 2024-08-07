import React from 'react'
import { Link } from 'react-router-dom';
import { FaRegMoon } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { TfiMenu } from "react-icons/tfi";
import { FiChevronDown } from "react-icons/fi";





const Header = () => {
  return (

    <header className='border-b-[1px] border-b-[#efefef] h-[70px]' >
      <div className='flex justify-between w-full max-w-[1240px] mx-auto items-center '>
      <div className='flex items-center'>
        <div className='mr-[15px]'><TfiMenu className='text-[20px]' /></div>
        <div className='py-[10px] mr-[35px]'><img  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/1techblog-logo.png" alt="" /></div>
        <div className='flex'>
          <div className='font-[600] px-[15px]'>Home</div>
          <div className='flex items-center px-[15px]' ><span className='font-[600] pr-1 '>Features</span> <FiChevronDown /></div>
          <div className='flex items-center px-[15px]'><span className='font-[600] pr-1 '>Technology</span> <FiChevronDown /></div>
          <div className='font-[600] px-[15px]'>Gadgets</div>
          <div className='flex items-center px-[15px]'><span className='font-[600] pr-1'>Phones</span> <FiChevronDown /></div>
          <div className='font-[600] px-[15px]'>Buy Theme</div>
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <button className='bg-[#3C3FDE] text-white text-xs rounded-md font-bold h-[34px] leading-[34px] pl-[14px] pr-[14px]'>SUBSCRIBE</button>
        <div><FaRegMoon /></div>
        <div><IoSearch className='text-[20px]' /></div>
      </div>
      </div>
      
    </header>
     
    
   
  )
}

export default Header