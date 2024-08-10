import React, { useEffect, useRef } from 'react';
import { TfiClose } from 'react-icons/tfi'; 
import Subscribe from '../../components/Subscribe';
import Socials from '../../components/Socials.component';

const Sidebar = ({ isOpen, onClose }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && isOpen) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div
      ref={sidebarRef}
      className={`fixed top-0 left-0 h-[100vh] bg-black  text-white transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-[370px]'
      } w-[370px] z-50 overflow-y-auto`} 
    >
      <div className='flex justify-end'>
        <TfiClose className='text-white text-2xl cursor-pointer bg-[#444444] w-[35px] h-[35px] p-[8px]' onClick={onClose} />
      </div>
      <div className='p-4'>
        <div className='flex justify-center items-center'>
          <img
            className='w-[207px] h-[40px]'
            src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/techblog-logo-dark@2x.png"
            alt=""
          />
        </div>
      </div>
      <div className='p-[20px]'>
        <Subscribe />
        <div className='text-white font-bold'>WHAT'S HOT</div>
      </div>
      <div className='p-[15px]'>
        <div id='cards' className='flex text-white py-[15px] border-b-[1px] border-b-gray-800'>
          <div className='mr-[18px] w-[27%] h-[70px]'>
            <img
              className='rounded-[10px] h-full'
              src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/thisisengineering-raeng-a7A9O5htrKs-unsplash-450x300.jpg"
              alt=""
            />
          </div>
          <div className='w-[73%]'>
            <span className='text-[15px] font-semibold'>Game Development This Week: Save On Essential Tools and More</span>
            <div className='text-white flex gap-3'>
              <span className='text-gray-500 text-[12px] font-semibold'>Nov 19, 2022</span>
            </div>
          </div>
        </div>

        <div id='cards' className='flex text-white py-[15px] border-b-[1px] border-b-gray-800'>
          <div className='mr-[18px] w-[27%] h-[70px]'>
            <img
              className='rounded-[10px] h-full'
              src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_242235046_xl-2015-1-450x256.jpg"
              alt=""
            />
          </div>
          <div className='w-[73%]'>
            <span className='text-[15px] font-semibold'>Is the Hyperloop Doomed? What Elon Musk’s Latest Setback Really Means</span>
            <div className='text-white flex gap-3'>
              <span className='text-gray-500 text-[12px] font-semibold'>Jan 14, 2021</span>
            </div>
          </div>
        </div>

        <div id='cards' className='flex text-white py-[15px]'>
          <div className='mr-[18px] w-[27%] h-[70px]'>
            <img
              className='rounded-[10px] h-full'
              src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/remy_loz-3vVzdb8KKIw-unsplash-450x300.jpg"
              alt=""
            />
          </div>
          <div className='w-[73%]'>
            <span className='text-[15px] font-semibold'>The Best Early Black Friday Deals on Gaming Laptops and Accessories</span>
            <div className='text-white flex gap-3'>
              <span className='text-gray-500 text-[12px] font-semibold'>Jan 14, 2021</span>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <Socials />
      </div>
    </div>
  );
};

export default Sidebar;
