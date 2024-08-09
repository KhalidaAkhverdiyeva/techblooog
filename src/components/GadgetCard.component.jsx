import React from 'react'

const GadgetCard = () => {
  return (
    <div className='flex gap-[20px]'>
      <div className='relative'>
        <img
          className='h-[282px] rounded-[10px]'
          src="https://smartmag.theme-sphere.com/tech-blog/wp-content/uploads/sites/35/2022/11/Depositphotos_286775054_xl-2015-1-768x334.jpg"
          alt=""
        />
        <button
          className='absolute bottom-2 left-2 bg-[#B400B4] text-[12px] text-white py-1 px-3 rounded border-b-2 border-[#B400B4]' 
        >
          GADGETS
        </button>
      </div>
      <div className='flex flex-col justify-center'>
        <p className='text-[22px] font-[700] mb-[20px]'>
          Oculus Founder Makes a VR Headset That Can Literally Kill You
        </p>
        <div className='flex gap-3 items-center'>
          <div className='flex gap-3 items-center'>
            <img
              className='rounded-full w-[21px] h-[21px]'
              src="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
              alt="Shane Doe"
            />
            <p className='text-black text-[12px]'>Shane Doe</p>
          </div>
          <div className='text-gray-500 text-[12px]'>Jan 12, 2020</div>
        </div>
        <div className='my-[10px] text-[#474747]'>
          To understand the new smart watched and other pro devices of recent focus, we should…
        </div>
        <button className='text-[#3C3FDE] border-b-2 border-[#3C3FDE]'>Read More</button> 
      </div>
    </div>
  )
}

export default GadgetCard
