import React from 'react';
import StarCount from '../StarCount/StarCount';
import ForkMenuSection from '../ForkMenuSection/ForkMenuSection';
import RepositoryOwnerData from '../RepositoryOwnerData/RepositoryOwnerData';
import BtnExternalLink from '../BtnExternalLink/BtnExternalLink';

type InnerProps = {
  stargazersCount: number;
  htmlUrl: string;
  cloneUrl: string;
  sshUrl: string;
  login: string;
  avatarUrl: string;
};

const RepositoryListItemFooter = ({ stargazersCount, htmlUrl, cloneUrl, sshUrl, login, avatarUrl }: InnerProps) => (
  <footer className="flex flex-wrap items-center justify-between w-full px-2 py-1 bg-gray-100 border border-gray-300 rounded dark:border-gray-500 transition-colors dark:bg-gray-600 gap-2 animate-slide">
    <RepositoryOwnerData avatarUrl={avatarUrl} login={login} />
    <StarCount stargazersCount={stargazersCount} />
    <div className="flex items-center justify-between">
      <ForkMenuSection cloneUrl={cloneUrl} sshUrl={sshUrl} />
      <BtnExternalLink htmlUrl={htmlUrl} />
    </div>
  </footer>
);

export default RepositoryListItemFooter;
