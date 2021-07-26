import React from 'react';
import RepositoryListItem from '../../common/RepositoryListItem/RepositoryListItem';
import RepositoryListItemFooter from '../../common/RepositoryListItemFooter/RepositoryListItemFooter';

type InnerProps = {
  repositories: {
    id: string;
    stargazers_count: number;
    name: string;
    html_url: string;
    clone_url: string;
    ssh_url: string;
    owner: {
      login: string;
      avatar_url: string;
    };
  }[];
};

const RepositoriesList = ({ repositories }: InnerProps) => (
  <ul className="flex flex-col items-center justify-center w-11/12 py-1 xl:w-8/12">
    {repositories.map(({ id, name, stargazers_count, html_url, clone_url, ssh_url, owner: { login, avatar_url } }) => (
      <RepositoryListItem key={id} name={name}>
        <RepositoryListItemFooter
          stargazersCount={stargazers_count}
          htmlUrl={html_url}
          cloneUrl={clone_url}
          sshUrl={ssh_url}
          login={login}
          avatarUrl={avatar_url}
        />
      </RepositoryListItem>
    ))}
  </ul>
);

export default RepositoriesList;
