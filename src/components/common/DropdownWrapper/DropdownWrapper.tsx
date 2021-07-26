import React, { useState, useRef, useEffect } from 'react';
import BtnDropdown from '../../common/BtnDropdown/BtnDropdown';
import DropdownBody from '../../common/DropdownBody/DropdownBody';

type InnerProps = {
  children: React.ReactNode;
  menuIcon: string | React.ReactNode;
};

const DropdownWrapper = ({ children, menuIcon }: InnerProps) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (container.current !== null && !container.current.contains(event.target as HTMLDivElement) && showDropdown) {
        setShowDropdown(false);
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [showDropdown, container]);

  return (
    <section className="relative grid place-items-center">
      <BtnDropdown showDropdown={showDropdown} setShowDropdown={setShowDropdown} menuIcon={menuIcon} />
      <DropdownBody reference={container} className={`${showDropdown ? 'visible' : 'hidden'}`}>
        {children}
      </DropdownBody>
    </section>
  );
};

export default DropdownWrapper;
