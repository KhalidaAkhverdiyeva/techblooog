import React from 'react'

const HeroCardSmall = ({ imageUrl, title }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="relative rounded-[10px] overflow-hidden">
          <div 
            className="bg-cover bg-center h-[230px]"
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <button className="absolute text-[12px] bottom-0 left-4 bg-[#2E32F1] font-[600] text-white py-[2px] px-3 rounded">
              TECHNOLOGY
            </button>
          </div>
        </div>
  
        <div className="p-[26px]">
          <p className="text-[#161616] font-[600] text-[18px] mb-[15px]">
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