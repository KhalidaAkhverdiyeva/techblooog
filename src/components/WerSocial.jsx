import React from 'react';
import { FaFacebookF, FaTwitter, FaPinterestP, FaInstagram, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'; 

const socialData = [
  { icon: <FaFacebookF style={{ color: '#3b5998' }} />, name: 'Facebook', count: '1.1K' },
  { icon: <FaTwitter style={{ color: '#1DA1F2' }} />, name: 'Twitter', count: '29.6K' },
  { icon: <FaPinterestP style={{ color: '#E60023' }} />, name: 'Pinterest', count: '46.7K' },
  { icon: <FaInstagram style={{ color: '#C13584' }} />, name: 'Instagram', count: '73.6K' },
  { icon: <FaTelegramPlane style={{ color: '#0088CC' }} />, name: 'Telegram', count: '' },
  { icon: <FaWhatsapp style={{ color: '#25D366' }} />, name: 'Whatsapp', count: '' }
];

const WerSocial = () => {
  return (
    <div className='bg-white shadow-custom border-[1px] border-gray-200  rounded-lg p-6 w-full max-w-[600px] mx-auto'>
      <div className='text-center mb-4'>
        <h2 className='text-2xl font-bold mb-1'>We're Social</h2>
        <div className='w-8 h-[2px] bg-[#3C3FDE] mx-auto'></div>
      </div>
      <div className='grid grid-cols-2 gap-4'>
        {socialData.map((social, index) => (
          <div key={index} className='border border-gray-300  p-2 flex items-center'>
            <div className='flex-shrink-0 text-xl mr-4'>
              {social.icon}
            </div>
            <div className='flex-grow'>
              {social.count && (
                <div className='text-sm font-bold'>{social.count}</div>
              )}
              <div className='text-sm text-gray-600'>
                {social.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WerSocial;

