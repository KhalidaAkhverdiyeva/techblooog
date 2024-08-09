import React from 'react'

const TrendingSmallCard = ({text,url}) => {
  return (
    <div className='flex gap-[20px] mb-[34px]'>
        <div className='w-[67%] flex flex-col gap-[10px]'>
            <p className='mb-[10px] text-[17px] font-[600]'>{text}</p>
            <div className='flex gap-3 items-center'>
                <div className='flex gap-3 items-center'>
               
                <p className='text-white text-[12px]'>Shane Doe</p>
                </div>
                <div className='text-gray-400 text-[12px]'>Jan 12, 2020</div>
            </div>
        </div>
        <div className='w-[33%]'><img className='rounded-[10px]' src={url} alt="" /></div>
    </div>
  )
}

export default TrendingSmallCard