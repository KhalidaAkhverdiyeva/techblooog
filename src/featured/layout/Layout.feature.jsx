import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import { useTheme } from '../../context/ThemeContext'; 

const Layout = () => {
  const { darkMode } = useTheme();

  useEffect(() => {

    document.body.style.backgroundColor = darkMode ? '#101016' : '#FFFFFF';
  }, [darkMode]);

  return (
    <div>
      <Header />
      <main className={`transition-colors duration-300 ${darkMode ? 'bg-[#101016]' : 'bg-white'}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

