import React from 'react'

const PicksCard = ({ imageSrc, buttonText, number, title, buttonColor }) => {
    return (
      <div className=' w-[100%] relative max-w-sm mx-auto rounded-lg overflow-hidden md:w-[25%]'>
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
  
        <div className='flex py-4'>
          <div className='text-[#CCCCCC] text-4xl font-[600] mr-4'>{number}</div>
          <div>
            <p className='text-[#161616] mb-2 text-[18px] font-bold hover:text-[#3C3FDE] transition-colors duration-300'>
              {title}
            </p>
            <div className='flex gap-3 items-center'>
              <p className='text-[#191919] font-[600] text-[12px]'>Shane Doe</p>
              <div className='text-gray-400 font-[600] text-[12px]'>Mar 15, 2020</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default PicksCard