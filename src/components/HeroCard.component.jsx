import React from 'react'

const HeroCard = ({imageUrl,text}) => {
  return (
    <div className='relative h-[500px] mb-[40px]'>
    <img 
      className='rounded-[10px] w-full h-full object-cover' 
      src={imageUrl} 
      alt="Gadget Headphones" 
    />
    <div className='absolute bottom-[30px] left-[30px] w-[640px]'>
      <button className='bg-[#B400B4] rounded-md text-white text-[12px] font-[600] py-[4px] px-[10px]'>
        GADGETS
      </button>
      <h2 className='leading-[1.85] my-[13px]'>
        <a 
          href="/" 
          className='text-[29px] bg-black py-[5px] px-[10px] font-[700] text-white leading-[1.85]'
        >
          {text}
        </a>
      </h2>
      <div className='flex gap-3 items-center'>
        <div className='flex gap-3 items-center'>
          <img 
            className='rounded-full w-[21px] h-[21px]' 
            src="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg" 
            alt="Shane Doe" 
          />
          <p className='text-white text-[12px]'>Shane Doe</p>
        </div>
        <div className='text-white text-[12px]'>Jan 12, 2020</div>
      </div>
    </div>
  </div>
  )
}

export default HeroCard

