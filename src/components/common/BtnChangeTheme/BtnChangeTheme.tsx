import React from 'react';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { selectTheme, setTheme } from '../../../app/themeSlice';

const BtnChangeTheme = () => {
  const theme = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  const handleThemeSwitcher = () => {
    if (theme === 'dark') {
      localStorage.setItem('theme', 'light');
      dispatch(setTheme('light'));
    } else {
      localStorage.setItem('theme', 'dark');
      dispatch(setTheme('dark'));
    }
  };

  return (
    <button
      onClick={handleThemeSwitcher}
      className="relative w-12 h-6 bg-gray-700 border-2 border-gray-900 transition-colors dark:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-3xl"
    >
      <div className="absolute rounded-full top-1/2 transform -translate-y-1/2 transition-transform duration-500 translate-x-6 dark:translate-x-1">
        <div className="w-4 h-4 bg-yellow-100 rounded-full dark:bg-yellow-500 transition-colors duration-500"></div>
      </div>
    </button>
  );
};

export default BtnChangeTheme;
