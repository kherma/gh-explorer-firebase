import React from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { resetTheme } from '../../../app/themeSlice';
import { ColorSwatchIcon } from '@heroicons/react/solid';

const BtnUseSystemTheme = () => {
  const dispatch = useAppDispatch();

  const handleUseSystemTheme = () => {
    localStorage.removeItem('theme');
    dispatch(resetTheme());
  };

  return (
    <button className="focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md" onClick={handleUseSystemTheme}>
      <ColorSwatchIcon className="w-6 h-6 text-gray-700 transition-colors dark:text-gray-50" />
    </button>
  );
};

export default BtnUseSystemTheme;
