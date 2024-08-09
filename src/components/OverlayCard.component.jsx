import React from 'react'

const OverlayCard = ({url,date, text}) => {
  return (
        <div className='relative mb-[80px] flex-1 object-contain'>
          <div className='relative w-full h-full'>
            <img className='rounded-[20px] w-full h-[190px]' src={url} alt="" />
          </div>
          <div className='bg-black p-[15px] mx-[18px] absolute bottom-[-75px] left-0'>
            <p className='text-white text-[16px] font-[700] mb-[15px] hover:text-[#3C3FDE] transition-colors duration-300'>{text}</p>
            <div className='flex gap-3 items-center'>
              <div className='flex gap-3 items-center'>
                <p className='text-white text-[12px]'>Shane Doe</p>
              </div>
              <div className='text-white text-[12px]'>{date}</div>
          </div>
          
          </div>
        </div>
 
  )
}

export default OverlayCard