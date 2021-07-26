import React from 'react';
import { useAppSelector } from '../../../app/hooks';
import { selectIsUserSignedIn } from '../../../app/authSlice';
import Logo from '../../features/Logo/Logo';
import SettingsMenuSection from '../../features/SettingsMenuSection/SettingsMenuSection';
import SearchBar from '../../features/SearchBar/SearchBar';

const Header = () => {
  const isUserSignedIn = useAppSelector(selectIsUserSignedIn);
  return (
    <header className="relative z-10 flex items-center justify-between w-full px-6 py-4 bg-gray-200 shadow transition-colors dark:bg-black dark:text-white">
      {isUserSignedIn ? <SearchBar /> : <Logo />}
      <SettingsMenuSection />
    </header>
  );
};

export default Header;
