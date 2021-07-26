import React from 'react';

type InnerProps = {
  showDropdown: boolean;
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  menuIcon: string | React.ReactNode;
};

const BtnDropdown = ({ showDropdown, setShowDropdown, menuIcon }: InnerProps) => (
  <button
    className="text-black rounded dark:text-white transition-colors focus:outline-none focus:ring focus:ring-gray-400"
    onClick={() => setShowDropdown(!showDropdown)}
  >
    {menuIcon}
  </button>
);

export default BtnDropdown;
