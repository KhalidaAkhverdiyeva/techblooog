import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeSwitcher = () => {
    const { darkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme} aria-label="Toggle Theme">
            {darkMode ? <FaSun /> : <FaMoon />}
        </button>
    );
};

export default ThemeSwitcher;

