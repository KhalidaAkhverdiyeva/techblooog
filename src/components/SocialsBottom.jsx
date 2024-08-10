import React from 'react';

const SocialsBottom = ({ text, imgUrl }) => {
  return (
    <div className='flex gap-[20px] h-[120px] py-[20px]   overflow-hidden border-t-[1px] border-t-gray-300'>
      <div className='w-[70%]'>
        <div className='mb-[4px] text-[16px] font-semibold cursor-pointer'>{text}</div>
        <div className='text-[12px] flex gap-[10px]'>
          <div>Shane Doe</div>
          <div className='text-gray-500'>Sep 8, 2020</div>
        </div>
      </div>
      <div className='w-[30%] flex items-center justify-center'>
        <img 
          className='rounded-[10px] object-cover w-full h-full' 
          src={imgUrl} 
          alt="" 
        />
      </div>
    </div>
  );
};

export default SocialsBottom;
