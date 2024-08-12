import React from 'react';
import { useTheme } from '../context/ThemeContext'; 
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
  const { darkMode } = useTheme();

  return (
    <div 
      className={`shadow-custom rounded-lg p-6 w-full max-w-[600px] mx-auto ${darkMode ? 'bg-black border-gray-800' : 'bg-white border-gray-200'}`}
    >
      <div className='text-center mb-4'>
        <h2 className={`text-2xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-black'}`}>
          We're Social
        </h2>
        <div className='w-8 h-[2px] bg-[#3C3FDE] mx-auto'></div>
      </div>
      <div className='grid grid-cols-2 gap-4'>
        {socialData.map((social, index) => (
          <div 
            key={index} 
            className={`border p-2 flex items-center ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}
          >
            <div className='flex-shrink-0 text-xl mr-4'>
              {social.icon}
            </div>
            <div className='flex-grow'>
              {social.count && (
                <div className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
                  {social.count}
                </div>
              )}
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
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
