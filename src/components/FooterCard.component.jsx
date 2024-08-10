import React from 'react'

const FooterCard = ({ imageUrl, title, date, hasBorder = true, titleColor = 'white', author, cardHeight = 'full' }) => {
    return (
      <div className={`flex text-white py-[15px] ${hasBorder ? 'border-b-[1px] border-b-gray-800' : ''}`}
      style={{ height: cardHeight }}>
        <div className='mr-[18px] w-[23%] '>
          <img
            className='rounded-[10px] h-full w-full  '
            src={imageUrl}
            alt={title}
          />
        </div>
        <div className='w-[77%] flex flex-col justify-around'>
          <span className={`text-[16px] font-semibold hover:text-[#3C3FDE] transition-colors duration-300`} style={{ color: titleColor }}>{title}</span>
          <div className='text-white flex gap-3'>
          {author && (
            <span className='text-black text-[12px] font-[500]'>{author}</span>
          )}
            <span className='text-gray-500 text-[12px] font-semibold'>{date}</span>
          </div>
        </div>
      </div>
    );
  };
  

export default FooterCard