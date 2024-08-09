import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { FaRegMoon } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { TfiMenu } from "react-icons/tfi";
import { FiChevronDown } from "react-icons/fi";
import Sidebar from '../../components/SideBar.component';





const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (

    <header className='border-b-[1px] border-b-[#efefef] h-[70px]' >
      <div className='flex justify-between w-full max-w-[1240px] mx-auto items-center '>
      <div className='flex items-center'>
        <div className='mr-[15px]  cursor-pointer' onClick={toggleSidebar}><TfiMenu className='text-[20px]' /></div>
        <Link to='/'><div className='py-[10px] mr-[35px]'><img  src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/1techblog-logo.png" alt="" /></div></Link>
        <div className='flex'>
          <Link to='/'><div className='font-[600] px-[15px]  cursor-pointer'>Home</div></Link>
          <div className='flex items-center px-[15px]  cursor-pointer' ><span className='font-[600] pr-1 '>Features</span> <FiChevronDown /></div>
          <div className='flex items-center px-[15px]  cursor-pointer'><span className='font-[600] pr-1 '>Technology</span> <FiChevronDown /></div>
          <Link to='/gadgets'><div className='font-[600] px-[15px]'>Gadgets</div></Link>
          <div className='flex items-center px-[15px]  cursor-pointer'><span className='font-[600] pr-1'>Phones</span> <FiChevronDown /></div>
          <div className='font-[600] px-[15px]  cursor-pointer'>Buy Theme</div>
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <button className='bg-[#3C3FDE]  cursor-pointer text-white text-xs rounded-md font-bold h-[34px] leading-[34px] pl-[14px] pr-[14px]'>SUBSCRIBE</button>
        <div className=' cursor-pointer'><FaRegMoon /></div>
        <div><IoSearch className='text-[20px]' /></div>
      </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      
    </header>
     
    
   
  )
}

export default Header