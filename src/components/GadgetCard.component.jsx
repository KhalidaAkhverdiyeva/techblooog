import React from 'react';
import { useTheme } from '../context/ThemeContext';
import AuthorDateCardText from './AuthorDateCardText';

const GadgetCard = ({ 
  imageWidthMobile = '100%', 
  imageWidthDesktop = '55%', 
  textWidth = 'full', 
  showButton = true,
  borderColor,
  boxShadow,
  url, text, cardText,
  btnText = 'GADGETS',
  btnBg = '#B400B4'
}) => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`flex flex-col md:flex-row gap-[20px] overflow-hidden rounded-[15px] h-auto md:h-[282px] ${
        darkMode ? 'bg-[#101016] text-white' : 'bg-white text-black'
      }`}
      style={{
        border: borderColor ? `1px solid ${darkMode ? '#333' : borderColor}` : 'none',
        boxShadow: boxShadow || 'none'
      }}
    >
      <div 
        className={`relative w-full md:w-[${imageWidthDesktop}]`}
      >
        <img
          className='h-full w-full rounded-[13px] object-cover'
          src={url}
          alt=""
        />
        <button
          className='absolute bottom-0 left-0 text-[12px] text-white py-1 px-3 rounded border-b-2'
          style={{ backgroundColor: btnBg }}
        >
          {btnText}
        </button>
      </div>
      <div 
        className={`flex flex-col justify-center p-[10px] ${textWidth === 'full' ? 'w-full md:w-[65%]' : 'w-full'}`}
      >
        <p className='text-[22px] font-[700] mb-[20px] hover:text-[#3C3FDE] transition-colors duration-300 cursor-pointer'>
          {text}
        </p>
        <div className='flex gap-3 items-center'>
          <AuthorDateCardText />
          <div className={`text-[12px] ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Jan 12, 2020
          </div>
        </div>
        <div className='my-[10px]'>
          {cardText}
        </div>
        {showButton && (
          <button className='text-[#3C3FDE] text-left'>
            Read More
          </button>
        )}
      </div>
    </div>
  );
}

export default GadgetCard;
