import React from 'react'
import { FaGripfire } from "react-icons/fa6";

const PopularPartText = ({number, viewCount, text}) => {
  return (
    <div className='flex gap-[20px]'>
        <div className='text-[white] font-[700] text-[18px] bg-[#3C3FDE] flex justify-center items-center rounded-full  w-[50px] h-[30px]'>{number}</div>
        <div>
            <div className='text-[16px] font-[600] mb-[10px] text-[#161616] hover:text-[#3C3FDE] transition-colors duration-300 cursor-pointer'>{text}</div>
            <div className='flex text-[12px] gap-[10px]'>
                <div>Shane Doe</div>
                <div className='text-gray-600'>Jan 14, 2021</div>
                <div className='text-[#FF0000] flex gap-[5px] items-center'> <FaGripfire/>{viewCount}Views</div>
            </div>
        </div>


    </div>
  )
}

export default PopularPartText