import React from 'react'
import { IoMdRefresh } from "react-icons/io";


const LoadMore = () => {
  return (
    <div className='flex justify-center mb-[40px]'>
        <div className='text-white text-[13px] flex gap-[6px] items-center justify-center bg-[#3c3fde] rounded-[15px] py-[10px] font-[700] w-[270px] text-center'>LOAD MORE <IoMdRefresh className='font-[700]' />
        </div>
    </div>
    
  )
}

export default LoadMore