import React from 'react'

const TwoLinesHeaderText = ({text}) => {
  return (
    <div>
        <div className='flex items-center mb-[30px]'> 
        <div className='flex flex-col flex-1 items-center gap-[4px]'>
          <div className='bg-gray-300 h-[1px] w-full '></div>
          <div className='bg-gray-300 h-[1px] w-full'></div>
        </div>

        <div className='mx-4 text-center text-[28px] font-bold text-[#161616]'>{text}</div>

        <div className='flex flex-col flex-1 items-center gap-[4px]'>
          <div className='bg-gray-300 h-[1px] w-full  '></div>
          <div className='bg-gray-300 h-[1px] w-full'></div>
        </div>
      </div>
    </div>
  )
}

export default TwoLinesHeaderText