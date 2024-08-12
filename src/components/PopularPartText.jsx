import React from 'react';
import { FaGripfire } from "react-icons/fa6";
import { useTheme } from '../context/ThemeContext';

const PopularPartText = ({ number, viewCount, text }) => {
  const { darkMode } = useTheme();

  return (
    <div className={`flex gap-[20px] ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
      <div
        className={`text-[white] font-[700] text-[18px] bg-[#3C3FDE] flex justify-center items-center rounded-full w-[50px] h-[30px] ${
          darkMode ? 'bg-[#3C3FDE]' : 'bg-[#3C3FDE]'
        }`}
      >
        {number}
      </div>
      <div>
        <div
          className={`text-[16px] font-[600] mb-[10px] hover:text-[#3C3FDE] transition-colors duration-300 cursor-pointer ${
            darkMode ? 'text-white' : 'text-[#161616]'
          }`}
        >
          {text}
        </div>
        <div className={`flex text-[12px] gap-[10px] ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          <div>Shane Doe</div>
          <div className={`${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>Jan 14, 2021</div>
          <div className={`text-[#FF0000] flex gap-[5px] items-center ${
            darkMode ? 'text-red-400' : 'text-[#FF0000]'
          }`}>
            <FaGripfire />
            {viewCount} Views
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularPartText;
