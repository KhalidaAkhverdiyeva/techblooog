import React from 'react';
import { CircularProgress } from '@mui/material';
import { useTheme } from '../context/ThemeContext';

const HeroCardSmall = ({ 
  imageUrl, title,  
  buttonBgColor = '#2E32F1', 
  btnText = "TECHNOLOGY",
  imageHeight = '230px',
  progress 
}) => {
  const { darkMode } = useTheme();

  return (
    <div 
      className={`shadow-lg rounded-lg overflow-hidden mb-[40px] md:mb-[0px] ${
        darkMode ? 'bg-black' : 'bg-white'
      }`}
    >
      <div className="relative rounded-[10px] overflow-hidden group">
        <div 
          className={`bg-cover bg-center relative transition-all duration-300 ease-in-out group-hover:opacity-90 ${
            darkMode ? 'bg-gray-800' : 'bg-gray-200'
          }`}
          style={{ 
            backgroundImage: `url(${imageUrl})`,
            height: imageHeight 
          }}
        >
          <button 
            className="absolute text-[12px] bottom-0 left-4 font-[600] py-1 px-3 rounded"
            style={{ 
              backgroundColor: buttonBgColor, 
              color: darkMode ? 'white' : 'black',
            }}
          >
            {btnText}
          </button>
          {progress !== undefined && (
            <div className='absolute top-4 right-4 flex items-center justify-center'>
              <CircularProgress
                variant="determinate"
                value={progress}
                size={40} 
                thickness={3} 
                sx={{
                  color: darkMode ? '#3C3FDE' : '#3C3FDE'
                }}
              />
              <div
                className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-[12px] z-10'
              >
                {progress}%
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={`p-[26px] ${darkMode ? 'text-white' : 'text-black'}`}>
        <p className={`font-[600] text-[18px] mb-[15px] hover:text-[#3C3FDE] transition-colors duration-300 ${
          darkMode ? 'text-white' : 'text-[#161616]'
        }`}>
          {title}
        </p>
        <div className='flex gap-3 items-center'>
          <div className='flex gap-3 items-center'>
            <p className={`font-[600] text-[12px] ${darkMode ? 'text-gray-300' : 'text-[#191919]'}`}>
              Shane Doe
            </p>
          </div>
          <div className={`text-gray-400 font-[600] text-[12px] ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            Jan 12, 2020
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCardSmall;
