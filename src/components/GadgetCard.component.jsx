import React from 'react'
import AuthorDateCardText from './AuthorDateCardText'

const GadgetCard = ({
  cardHeight='282px', 
  imageWidth= '78%', 
  textWidth='full', 
  showButton ='true',
  borderColor,
  boxShadow,
  url, text, cardText,
  btnText ='GADGETS',
  btnBg = '#B400B4'
}) => {
  return (
    <div className='flex gap-[20px] overflow-hidden border-[#EFEFEF] border-[1px] shadow rounded-[15px]'
    style={{
      height: cardHeight,
      border: borderColor ? `1px solid ${borderColor}` : 'none',
      boxShadow: boxShadow || 'none'
    }}>
      <div className='relative   '
      style={{ width: imageWidth }}
      >
        <img
          className='h-full w-full rounded-[13px] object-cover'
          src={url}
          alt=""
        />
        <button
          className='absolute bottom-0 left-0  text-[12px] text-white py-1 px-3 rounded border-b-2 ' 
          style={{ backgroundColor: btnBg }}
        >
          {btnText}
        </button>
      </div>
      <div className='flex flex-col justify-center p-[10px]'
      style={{ width: textWidth }}
      >
        <p className='text-[22px] font-[700] mb-[20px]'>
          {text}
        </p>
        <div className='flex gap-3 items-center'>
          <AuthorDateCardText/>
          <div className='text-gray-500 text-[12px]'>Jan 12, 2020</div>
        </div>
        <div className='my-[10px] text-[#474747]'>
          {cardText}
        </div>
        {showButton && (
        <button className='text-[#3C3FDE] text-left'>
          Read More
        </button>
      )}
      </div>
    </div>
  )
}

export default GadgetCard
