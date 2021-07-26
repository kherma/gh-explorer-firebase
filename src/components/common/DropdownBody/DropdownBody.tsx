import React from 'react';

type InnerProps = {
  className: string;
  reference: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
};

const DropdownBody = ({ className, reference, children }: InnerProps) => (
  <div className={`absolute -right-1 top-12 z-10 md:right-0 md:top-14 xl:-right-1 xl:top-12 ${className}`}>
    <div className="absolute overflow-hidden w-7 bottom-full right-2">
      <div className="w-4 h-4 bg-gray-300 dark:bg-gray-700 transform origin-bottom-left rotate-45" />
    </div>
    <div
      className="p-2 text-black bg-gray-300 rounded shadow dark:bg-gray-700 dark:text-white min-w-max animate-roll"
      ref={reference}
    >
      {children}
    </div>
  </div>
);

export default DropdownBody;
