import React from 'react';
import { FaRegEnvelope } from "react-icons/fa";
import { useTheme } from '../context/ThemeContext'; 

const Subscribe = ({ 
  bgColor = 'black', 
  textColor = '#ECECEC',
  inputBgColor = '#1A1A1A', 
  inputBorderColor = '#333', 
  buttonBgColor = '#3C3FDE',
  radius = "none",
  borderColor = "black 1px solid",
  showEnvelope = false
}) => {
  const { darkMode } = useTheme();

  return (
    <div 
      className={`p-[35px] relative ${darkMode ? 'bg-black' : `bg-${bgColor}`}`}
      style={{ 
        backgroundColor: darkMode ? 'black' : bgColor, 
        borderRadius: radius, 
        border: 'black' 
      }}
    >
      <h2 
        className={`text-center font-[700] text-[24px] mb-[8px]`} 
        style={{ color: darkMode ? '#FFFFFF' : textColor }}
      >
        Subscribe to Updates
      </h2>
      <p 
        className={`text-[#FFFFFFCC] text-[14px] text-center mb-[22px]`} 
        style={{ color: darkMode ? '#CCCCCC' : textColor }}
      >
        Get the latest creative news from FooBar about art, design and business.
      </p>
      <input 
        type="text" 
        className={`w-full h-[44px] border-[1px] placeholder:text-center mb-[13px]`} 
        placeholder='Your email address..' 
        style={{ backgroundColor: darkMode ? '#222' : inputBgColor, borderColor: darkMode ? '#555' : inputBorderColor }}
      />
      <button 
        className={`w-full border-transparent text-[12px] px-[20px] py-[10px] text-white font-[700] mb-[13px]`} 
        style={{ backgroundColor: darkMode ? '#4A4A4A' : buttonBgColor }}
      >
        SUBSCRIBE
      </button>
      <div className='flex items-start mt-[20px]'>
        <input className='mt-1' type="checkbox" />
        <div 
          className={`text-[13px] text-center ${darkMode ? 'text-gray-400' : 'text-[#888888]'}`}
          style={{ color: darkMode ? '#CCCCCC' : textColor }}
        >
          By signing up, you agree to our terms and our Privacy Policy agreement.
        </div>
      </div>

      {showEnvelope && (
        <div 
          className={`absolute top-[-40px] left-[130px] px-4 rounded-full ${darkMode ? 'bg-transparent' : 'bg-transparent'}`}
          style={{ backgroundColor: darkMode ? '#000000' : '#FFFFFF' }}
        >
          <div 
            className={`p-[14px] rounded-full`} 
            style={{ backgroundColor: darkMode ? '#4A4A4A' : '#0000FF' }}
          >
            <FaRegEnvelope className="text-white text-[40px]" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Subscribe;
