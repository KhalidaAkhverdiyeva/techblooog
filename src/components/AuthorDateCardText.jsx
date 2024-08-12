import React from 'react';
import { useTheme } from '../context/ThemeContext'; 

const AuthorDateCardText = () => {
  const { darkMode } = useTheme();

  return (
    <div className='flex gap-3 items-center'>
      <img
        className='rounded-full w-[21px] h-[21px]'
        src="https://cheerup.theme-sphere.com/wp-content/uploads/2016/05/bella-doe.jpg"
        alt="Shane Doe"
      />
      <p className={`text-[12px] ${darkMode ? 'text-white' : 'text-black'}`}>
        Shane Doe
      </p>
    </div>
  );
}

export default AuthorDateCardText;
