import { CircularProgress } from '@mui/material';
import React from 'react'

const HeroCardSmall = ({ 
  imageUrl, title,  
  buttonBgColor = '#2E32F1', 
  btnText = "TECHNOLOGY",
  imageHeight = '230px',
  progress }) => {
    
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden ">
        <div className="relative rounded-[10px] overflow-hidden group">
          <div 
            className="bg-cover bg-center relative transition-all duration-300 ease-in-out group-hover:opacity-90"
            style={{ 
              backgroundImage: `url(${imageUrl})`,
              height: imageHeight 
            }}
          >
            <button className="absolute text-[12px] bottom-0 left-4  font-[600] text-white py-1 px-3 rounded"
             style={{ 
              backgroundColor: buttonBgColor, 
            }}>
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
                  color: '#3C3FDE'
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
  
        <div className="p-[26px]">
          <p className="text-[#161616] font-[600] text-[18px] mb-[15px] hover:text-[#3C3FDE] transition-colors duration-300">
            {title}
          </p>
          <div className='flex gap-3 items-center'>
            <div className='flex gap-3 items-center'>
              <p className='text-[#191919] font-[600] text-[12px]'>Shane Doe</p>
            </div>
            <div className='text-gray-400 font-[600] text-[12px]'>Jan 12, 2020</div>
          </div>
        </div>
      </div>
    );
  };

export default HeroCardSmall