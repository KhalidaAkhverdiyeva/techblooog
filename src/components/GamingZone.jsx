import React from 'react';
import { useTheme } from '../context/ThemeContext';

const GamingZone = () => {
  const { darkMode } = useTheme();

  return (
    <div>
      <div className='relative'>
        <img
          className={`relative rounded-[10px] ${darkMode ? 'brightness-[60%]' : ''}`}
          src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_422755408_xl-2015-1-450x225.jpg"
          alt=""
        />
        <button
          className={`text-white text-[12px] py-[5px] px-[8px] rounded-[7px] font-[600] absolute top-0 left-0 ${
            darkMode ? 'bg-[#E40666]' : 'bg-[#E40666]'
          }`}
        >
          GAMING
        </button>
      </div>
      <div className={`my-[20px] ${darkMode ? 'text-white' : 'text-black'}`}>
        <div className='font-[600] text-[19px] mb-[10px]'>
          PS5 vs Xbox Series XS vs Switch Launch Sales Comparison
        </div>
        <div className={`text-[12px] flex gap-[10px] ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <div>Shane Doe</div>
          <div>Sep 8, 2020</div>
        </div>
      </div>
    </div>
  );
};

export default GamingZone;
