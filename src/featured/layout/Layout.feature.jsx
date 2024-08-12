import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Layout = () => {

  const [darkMode, setDarkMode] = useState(true);


  const toggleDarkMode = () => {
    console.log('Toggling Dark Mode. Current value:', darkMode);
    setDarkMode(prevMode => !prevMode);
  };


  console.log('Dark mode state:', darkMode);

  return (
    <div>
      <Header />

      <main  darkMode={darkMode} toggleDarkMode={toggleDarkMode}
        className={`transition-colors duration-300 ${darkMode ? 'bg-[#101016]' : 'bg-white'}`}
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
