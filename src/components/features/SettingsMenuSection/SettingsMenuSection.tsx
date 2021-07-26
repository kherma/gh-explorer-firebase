import React from 'react';
import { useAppSelector } from '../../../app/hooks';
import { selectIsUserSignedIn, selectUserData } from '../../../app/authSlice';
import UserData from '../../common/UserData/UserData';
import BtnSignOut from '../../common/BtnSignOut/BtnSignOut';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import DropdownWrapper from '../../common/DropdownWrapper/DropdownWrapper';
import { CogIcon } from '@heroicons/react/solid';

const SettingsMenuSection = () => {
  const isUserSignedIn = useAppSelector(selectIsUserSignedIn);
  const { userName, avatarUrl } = useAppSelector(selectUserData);
  return (
    <DropdownWrapper menuIcon={<CogIcon className="w-10 h-10 md:h-12 md:w-12 xl:h-10 xl:w-10" />}>
      <ul className="w-40">
        {isUserSignedIn && userName && avatarUrl ? (
          <li className="pb-2 text-center border-b border-gray-800">
            <UserData userName={userName} avatarUrl={avatarUrl} />
          </li>
        ) : null}
        <li className="py-2 text-center">
          <ThemeSwitcher />
        </li>
        {isUserSignedIn ? (
          <li className="pt-2 text-center border-t border-gray-800">
            <BtnSignOut />
          </li>
        ) : null}
      </ul>
    </DropdownWrapper>
  );
};

export default SettingsMenuSection;
