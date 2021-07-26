import React from 'react';

type InnerProps = {
  name: string;
  children: React.ReactNode;
};

const RepositoryListItem = ({ name, children }: InnerProps) => (
  <li className="flex flex-col justify-between w-full p-2 my-2 bg-gray-200 border border-white rounded shadow transition-colors dark:border-gray-700 dark:bg-gray-800 animate-scale">
    <h2 className="w-full px-2 py-1 mb-2 text-2xl text-gray-900 break-words transition-colors dark:text-white">
      {name.includes('_') ? name.replaceAll('_', '-') : name}
    </h2>
    {children}
  </li>
);

export default RepositoryListItem;
