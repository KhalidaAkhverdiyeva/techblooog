import React from 'react';
import { useTheme } from '../context/ThemeContext';

const SocialsBottom = ({ text, imgUrl }) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`flex gap-[20px] h-[120px] py-[20px] overflow-hidden border-t-[1px] ${
        darkMode ? 'border-t-gray-700 bg-[#101016]' : 'border-t-gray-300 bg-white'
      }`}
    >
      <div className={`w-[70%] ${darkMode ? 'text-white' : 'text-black'}`}>
        <div className='mb-[4px] text-[16px] font-semibold cursor-pointer hover:text-[#3C3FDE] transition-colors duration-300'>
          {text}
        </div>
        <div className='text-[12px] flex gap-[10px]'>
          <div>Shane Doe</div>
          <div className={`text-gray-500 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Sep 8, 2020
          </div>
        </div>
      </div>
      <div className='w-[30%] flex items-center justify-center'>
        <img
          className='rounded-[10px] object-cover w-full h-full'
          src={imgUrl}
          alt=""
        />
      </div>
    </div>
  );
};

export default SocialsBottom;
