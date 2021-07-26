import React from 'react';

type InnerProps = {
  login: string;
  avatarUrl: string;
};

const RepositoryOwnerData = ({ avatarUrl, login }: InnerProps) => (
  <figure className="flex items-center w-full mt-1 md:mt-0 md:w-auto md:mr-auto">
    <img className="w-10 h-auto mr-4" src={avatarUrl} alt={login} />
    <figcaption className="text-sm font-black text-gray-700 transition-colors dark:text-gray-400">{login}</figcaption>
  </figure>
);

export default RepositoryOwnerData;
