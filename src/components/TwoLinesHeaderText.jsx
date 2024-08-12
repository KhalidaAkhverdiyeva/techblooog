import React from 'react';
import { useTheme } from '../context/ThemeContext'; 

const TwoLinesHeaderText = ({ text }) => {
  const { darkMode } = useTheme();

  return (
    <div>
      <div className={`flex items-center mb-[30px]`}>
        <div className='flex flex-col flex-1 items-center gap-[4px]'>
          <div 
            className={`h-[1px] w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}
          ></div>
          <div 
            className={`h-[1px] w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}
          ></div>
        </div>

        <div 
          className={`mx-4 text-center text-[28px] font-bold cursor-pointer ${
            darkMode ? 'text-white' : 'text-[#161616]'
          }`}
        >
          {text}
        </div>

        <div className='flex flex-col flex-1 items-center gap-[4px]'>
          <div 
            className={`h-[1px] w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}
          ></div>
          <div 
            className={`h-[1px] w-full ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TwoLinesHeaderText;
