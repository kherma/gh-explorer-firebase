import React from 'react';
import RepositoriesList from '../../features/RepositoriesList/RepositoriesList';
import { useAppSelector } from '../../../app/hooks';
import { selectStatus, selectRepositoriesData } from '../../../app/repositoriesSlice';
import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner';
import Pagination from '../../features/Pagination/Pagination';

const Dashboard = () => {
  const status = useAppSelector(selectStatus);
  const repositories = useAppSelector(selectRepositoriesData);

  return (
    <div className="relative flex flex-col items-center min-h-full bg-gray-100 transition-colors dark:bg-gray-900">
      {!repositories.length && status === 'idle' ? (
        <h2 className="absolute w-full text-2xl text-center uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-4xl text-back transition-colors dark:text-white">
          Just search it 😃
        </h2>
      ) : null}
      {repositories.length && status === 'fulfilled' ? (
        <>
          <Pagination />
          <RepositoriesList repositories={repositories} />
          <Pagination />
        </>
      ) : null}
      {status === 'pending' ? (
        <div className="absolute w-10 h-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <LoadingSpinner />
        </div>
      ) : null}
      {!repositories.length && status === 'fulfilled' ? (
        <h2 className="absolute w-full text-2xl text-center uppercase top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:text-4xl text-back transition-colors dark:text-white">
          Nothing was found 😓
        </h2>
      ) : null}
    </div>
  );
};

export default Dashboard;
