import React from 'react';

const HeroCard = ({
  imageUrl,
  text,
  textSize,
  buttonText = 'GADGETS',
  buttonBgColor = '#B400B4',
  buttonWidth = '640px',
  bottom = '30px',
  left = '30px'
}) => {
  return (
    <div className='relative h-full mb-[40px] overflow-hidden'>
      <div className='relative w-full h-full overflow-hidden rounded-[10px]'>
      <img
        className='rounded-[10px] w-full h-full object-cover transition-transform duration-1000 ease-in-out transform hover:scale-105 '
        src={imageUrl}
        alt="Gadget Headphones"
      />
      </div>
     
      <div className='absolute' 
         style={{
          bottom: bottom,
          left: left,
          width: buttonWidth
        }}>
        <button
          className={`rounded-md text-white text-[12px] font-[600] py-[4px] px-[10px]`}
          style={{ backgroundColor: buttonBgColor }}
        >
          {buttonText}
        </button>
        <h2 className='leading-[1.85] my-[13px] w-[300px] md:w-auto '>
          <a
            href="/"
            className='bg-black py-[5px] px-[10px] font-[700] text-[20px] text-white md:text-[20px] leading-[1.85] cursor-pointer'
            style={{ fontSize: textSize }}
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
  );
};

export default HeroCard;
