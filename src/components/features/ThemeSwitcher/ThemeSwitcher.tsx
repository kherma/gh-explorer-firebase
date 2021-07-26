import React, { useEffect } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { selectTheme } from '../../../app/themeSlice';
import BtnChangeTheme from '../../common/BtnChangeTheme/BtnChangeTheme';
import BtnUseSystemTheme from '../../common/BtnUseSystemTheme/BtnUseSystemTheme';

const ThemeSwitcher = () => {
  const theme = useAppSelector(selectTheme);

  useEffect(() => {
    theme === 'dark'
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [theme]);

  return (
    <div className="flex items-center justify-evenly">
      <BtnChangeTheme />
      <BtnUseSystemTheme />
    </div>
  );
};

export default ThemeSwitcher;
