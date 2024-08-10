import React from 'react';
import { MdOutlineAccessTime } from "react-icons/md";


const RoundedCard = ({textColor, text, headline,image}) => {
  return (
    <div className="border-t-[1px] border-gray-300 max-w-3xl py-[15px] mx-auto">
         <h2 className="text-[12px] font-[600] "
         style={{ color: textColor}}
         >{text}</h2>
        <div className="flex ">
            <div>
            <p className='font-[700] text-[#161616] text-[18px] my-[12px] hover:text-[#3C3FDE] transition-colors duration-300 cursor-pointer'>{headline}</p>
            <div className='flex gap-3 items-center'>
            <div className='flex gap-3 items-center'>
              <p className='text-[#191919] font-[600] text-[12px]'>Shane Doe</p>
            </div>
            <div className='text-gray-400 font-[600] text-[12px] flex items-center'><MdOutlineAccessTime className='mr-[5px] text-[16px]' />
            6 Mins Read</div>
          </div>
            </div>
          
        <div className=" flex justify-center items-center ml-[35px]">
        <div className="w-[90px] h-[90px] relative ">
        <img
            src={image}
            alt="Technology"
            className="absolute shadow-xl inset-0 w-full h-full object-cover rounded-full"
        />
        </div>
        </div>
      </div>
    </div>
  );
};

export default RoundedCard;