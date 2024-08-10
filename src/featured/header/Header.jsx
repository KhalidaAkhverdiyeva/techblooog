import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegMoon } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { TfiMenu } from "react-icons/tfi";
import { FiChevronDown } from "react-icons/fi";
import { BiChevronRight } from "react-icons/bi";
import Sidebar from '../sidebar/sidebar';
import HeroCardSmall from '../../components/HeroCardSmall';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isPostStylesOpen, setIsPostStylesOpen] = useState(false);
  const [isTechnologyOpen, setIsTechnologyOpen] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleFeaturesHover = () => {
    setIsFeaturesOpen(true);
  };

  const handleFeaturesLeave = () => {
    setIsFeaturesOpen(false);
    setIsSubmenuOpen(false);
    setIsPostStylesOpen(false);
  };

  const handleSubmenuHover = () => {
    setIsSubmenuOpen(true);
  };

  const handleSubmenuLeave = () => {
    setIsSubmenuOpen(false);
  };

  const handlePostStylesHover = () => {
    setIsPostStylesOpen(true);
  };

  const handlePostStylesLeave = () => {
    setIsPostStylesOpen(false);
  };

  const handleTechnologyHover = () => {
    setIsTechnologyOpen(true);
  };

  const handleTechnologyLeave = () => {
    setIsTechnologyOpen(false);
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > lastScrollTop) {
   
      setIsHeaderVisible(false);
    } else {
   
      setIsHeaderVisible(true);
    }
    setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);
  return (
    <header className={`border-b-[1px] border-b-[#efefef] h-[70px] sticky top-0 z-50 bg-black md:bg-white transition-transform duration-300 px-[20px] md:px-[20px] ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className='flex justify-between w-full max-w-[1240px] mx-auto items-center'>
        <div className='flex items-center h-[70px]'>
          <div className='mr-[15px] cursor-pointer' onClick={toggleSidebar}>
            <TfiMenu className='text-white md:text-black text-[20px]' />
          </div>
          <Link to='/'>
            <div className='py-[10px] mr-[35px]'>
            <img src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/1techblog-logo.png" alt="Logo" className='hidden md:block' />
            <img src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/techblog-logo-dark@2x.png" alt="Logo" className='w-[207px] ml-[60px] block md:hidden' />
            </div>
          </Link>
          <div className='hidden h-[70px] items-center md:flex'>
            <Link to='/' className='h-full flex items-center'>
              <div className='font-[600] mx-[15px] h-full flex items-center border-b-[2px] border-b-[#3C3FDE] cursor-pointer'>
                Home
              </div>
            </Link>
            <div className='relative flex items-center mx-[15px] h-full cursor-pointer' 
                 onMouseEnter={handleFeaturesHover} 
                 onMouseLeave={handleFeaturesLeave}>
              <span className='h-full flex items-center font-[600] pr-1 border-b-[2px] border-transparent hover:border-[#3C3FDE] cursor-pointer transition-all'>
                Features
              </span> 
              <FiChevronDown />
              {isFeaturesOpen && (
                <div className='absolute top-full left-0 w-[200px]  bg-white border border-[#efefef] shadow-lg z-10'>
                  <div className='p-2 cursor-pointer' onMouseEnter={handleSubmenuHover} onMouseLeave={handleSubmenuLeave}>
                    <div className='px-[20px] text-[14px] flex justify-between items-center'>50+ Unique Demos <BiChevronRight className='text-blue-700' /></div>
                    {isSubmenuOpen && (
                      <div className='absolute top-0 left-full w-[150px] bg-white border border-[#efefef] shadow-lg'>
                        <div className='p-2 cursor-pointer px-[20px] text-[14px] '>Good News</div>
                        <div className='p-2 cursor-pointer px-[20px] text-[14px]'>Tech1: iGadgets</div>
                        <div className='p-2 cursor-pointer px-[20px] text-[14px]'>Tech2: The Wire</div>
                        <div className='p-2 cursor-pointer px-[20px] text-[14px]'>TechBlog</div>
                        <div className='p-2 cursor-pointer px-[20px] text-[14px]'> The Zine</div>
                      </div>
                    )}
                  </div>
                  <div className='p-2 cursor-pointer px-[30px] text-[14px] flex justify-between items-center'
                  onMouseEnter={handlePostStylesHover} 
                  onMouseLeave={handlePostStylesLeave}>
                  Post Styles <BiChevronRight className='text-blue-700' /></div>
                  {isPostStylesOpen && (
                      <div className='absolute top-0 left-full w-[150px] bg-white border border-[#efefef] shadow-lg'>
                        <div className='p-2 cursor-pointer px-[20px] text-[14px]'>Good News 2</div>
                        <div className='p-2 cursor-pointer px-[20px] text-[14px]'>Tech1: iGadgets 2</div>
                        <div className='p-2 cursor-pointer px-[20px] text-[14px]'>Tech2: The Wir 2</div>
                        <div className='p-2 cursor-pointer px-[20px] text-[14px]'>TechBlog 2</div>
                        <div className='p-2 cursor-pointer px-[20px] text-[14px]'>The Zine 2</div>
                      </div>
                    )}
                  <div className='p-2 cursor-pointer px-[30px] text-[14px]'>Category Layouts</div>
                  <div className='p-2 cursor-pointer px-[30px] text-[14px] '>Header Styles</div>
                  <div className='p-2 cursor-pointer px-[30px] text-[14px] '>Homepage Blocks</div>
                  <div className='p-2 cursor-pointer px-[30px] text-[14px] whitespace-nowrap '>Featured Grids/Sliders</div>
                  <div className='p-2 cursor-pointer px-[30px] text-[14px]'>12+ Premium Widgets</div>
                  <div className='p-2 cursor-pointer px-[30px] text-[14px] '>Review Posts</div>
                  <div className='p-2 cursor-pointer px-[30px] text-[14px] whitespace-nowrap '> Pages & Templates</div>
                  <div className='p-2 cursor-pointer px-[30px] text-[14px]'>Gutenberg Styles</div>
                </div>
              )}
            </div>
            <div className='relative flex items-center mx-[15px] h-full cursor-pointer' 
                 onMouseEnter={handleTechnologyHover} 
                 onMouseLeave={handleTechnologyLeave}>
              <span className='h-full flex items-center font-[600] pr-1 border-b-[2px] border-transparent hover:border-[#3C3FDE] cursor-pointer transition-all'>
                Technology
              </span>
              <FiChevronDown />
              {isTechnologyOpen && (
                <div className='absolute w-[1240px] top-full left-[-480px]  bg-white border border-[#efefef] shadow-lg z-10'>
                  <div className='flex p-[30px] gap-[30px]'>
                  <HeroCardSmall
                    progress='92'
                    imageHeight='176px'
                    title='A Review of the Venus Optics Argus 18mm f/0.95 MFT APO Lens'
                    imageUrl='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/pexels-leon-3636001-2-450x300.jpg'
                    />
                    <HeroCardSmall
                    btnText='GADGETS'
                    progress='50'
                    buttonBgColor= '#AB07AB'
                    imageHeight='176px'
                    title='DJI Avata Review: Immersive FPV Flying For Drone Enthusiasts'
                    imageUrl='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/surya-devarakonda-lnEM5jOu-mc-unsplash-450x300.jpg'
                    />
                    <HeroCardSmall
                    imageHeight='176px'
                    progress='78'
                    buttonBgColor= '#AB07AB'
                    btnText='GADGETS'
                    title='Bose QuietComfort Earbuds II: Noise-Cancellation Kings Reviewed'
                    imageUrl='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/omid-armin-gSZCLsE7ysc-unsplash-450x300.jpg'
                    />
                    <HeroCardSmall
                    progress='61'
                    imageHeight='176px'
                    title='AMD Ryzen 9 7900X Review: Zen 4 Has a Pricing Problem'
                    imageUrl='https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/42996726655_0df7830ab6_b-1-450x253.jpg'
                    />
                  </div>
                </div>
              )}
            </div>
            <Link to='/gadgets' className='h-full flex items-center'>
              <div className='flex items-center mx-[15px] h-full cursor-pointer'>
                <span className='h-full flex items-center font-[600] pr-1 border-b-[2px] border-transparent hover:border-[#3C3FDE] cursor-pointer transition-all'>
                  Gadgets
                </span>
              </div>
            </Link>
            <div className='flex items-center mx-[15px] cursor-pointer h-full'>
              <span className='font-[600] flex h-full items-center pr-1 border-b-[2px] border-transparent hover:border-[#3C3FDE] cursor-pointer transition-all'>
                Phones
              </span>
              <FiChevronDown />
            </div>
            <div className='font-[600] mx-[15px] flex items-center h-full border-b-[2px] border-transparent hover:border-[#3C3FDE] cursor-pointer transition-all'>
              Buy Theme
            </div>
          </div>
        </div>
        <div className='flex items-center gap-3'>
        <button className='bg-[#3C3FDE] cursor-pointer text-white text-xs rounded-md font-bold h-[34px] leading-[34px] pl-[14px] pr-[14px] transition-colors duration-300 ease-in-out hover:bg-black hover:text-white hidden md:flex'>
            SUBSCRIBE
          </button>
          <div className='cursor-pointer hidden md:flex'>
            <FaRegMoon  className='hover:text-[#3C3FDE] transition-colors duration-300'/>
          </div>
          <div>
          <IoSearch className='text-white md:text-black hover:text-[#3C3FDE] transition-colors duration-300 text-[20px]' />
          </div>
        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </header>
  );
};

export default Header;
