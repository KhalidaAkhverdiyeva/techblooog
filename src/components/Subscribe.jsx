import React from 'react'

const Subscribe = () => {
  return (
    <div className='bg-black border-1px border-gray-600 p-[35px]'>
        <h2 className='text-center text-[#ECECEC] font-[700] text-[24px] mb-[8px]'>Subscribe to Updates</h2>
        <p className='text-[#FFFFFFCC] text-[14px] text-center mb-[22px]'>Get the latest creative news from FooBar about art, design and business.</p>
        <input type="text" className='w-full h-[44px] border-[#333] border-[1px] bg-[#1A1A1A] placeholder:text-center mb-[13px]' placeholder='Your email address..' />
        <button className='bg-[#3C3FDE] w-full border-transparent text-[12px] px-[20px] py-[10px] text-white font-[700] mb-[]'>SUBSCRIBE</button>
        <div className='flex items-start mt-[20px]'>
            <input className=' mt-1' type="checkbox" />
            <div className='text-[#888888] text-[13px] text-center'>
                By signing up, you agree to our terms and our Privacy Policy agreement.
            </div>
        </div>
    </div>
  )
}

export default Subscribe