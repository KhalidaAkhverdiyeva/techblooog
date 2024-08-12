import React from 'react';
import { useTheme } from '../context/ThemeContext';

const FooterCard = ({ 
  imageUrl, 
  title, 
  date, 
  hasBorder = true, 
  titleColor = 'white', 
  author, 
  cardHeight = 'full', 
  forceDarkMode = false 
}) => {
  const { darkMode } = useTheme();

 
  const isDarkMode = forceDarkMode || darkMode;

  return (
    <div
      className={`flex py-[15px] ${hasBorder ? 'border-b-[1px] border-b-gray-800' : ''}`}
      style={{ 
        height: cardHeight, 
        backgroundColor: isDarkMode ? '#101016' : '#fff' 
      }}
    >
      <div className='mr-[18px] w-[23%]'>
        <img
          className='rounded-[10px] h-full w-full'
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className='w-[77%] flex flex-col justify-around'>
        <span
          className={`text-[16px] font-semibold hover:text-[#3C3FDE] transition-colors duration-300`}
          style={{ color: isDarkMode ? (titleColor === 'white' ? 'white' : 'white') : titleColor }}
        >
          {title}
        </span>
        <div className='flex gap-3'>
          {author && (
            <span className={`text-[12px] font-[500] ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>
              {author}
            </span>
          )}
          <span className={`text-[12px] font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            {date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterCard;
