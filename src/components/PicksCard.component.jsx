import React from 'react';
import { useTheme } from '../context/ThemeContext'; 

const PicksCard = ({ imageSrc, buttonText, number, title, buttonColor }) => {
  const { darkMode } = useTheme();

  return (
    <div 
      className={`w-[100%] relative max-w-sm mx-auto rounded-lg overflow-hidden md:w-[25%] ${
        darkMode ? 'bg-[#101016]' : 'bg-white'
      }`}
    >
      <div className='relative'>
        <img 
          src={imageSrc} 
          alt='Card' 
          className='w-full h-[190px] object-cover rounded-[10px]'
        />
        <button 
          className='absolute top-0 left-0 font-semibold text-white text-[12px] px-2 py-1 rounded'
          style={{ backgroundColor: buttonColor }}
        >
          {buttonText}
        </button>
      </div>

      <div className={`flex py-4 ${
        darkMode ? 'text-gray-300' : 'text-gray-700'
      }`}>
        <div className={`text-4xl font-[600] mr-4 ${
          darkMode ? 'text-gray-400' : 'text-[#CCCCCC]'
        }`}>
          {number}
        </div>
        <div>
          <p className={`mb-2 text-[18px] font-bold hover:text-[#3C3FDE] transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-[#161616]'
          }`}>
            {title}
          </p>
          <div className='flex gap-3 items-center'>
            <p className={`text-[12px] font-[600] ${
              darkMode ? 'text-gray-400' : 'text-[#191919]'
            }`}>
              Shane Doe
            </p>
            <div className={`text-[12px] font-[600] ${
              darkMode ? 'text-gray-500' : 'text-gray-400'
            }`}>
              Mar 15, 2020
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PicksCard;
