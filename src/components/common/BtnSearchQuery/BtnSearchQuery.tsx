import React from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import { UseFormWatch } from 'react-hook-form';
import { Inputs } from '../../features/SearchBar/SearchBar';
import { useAppSelector } from '../../../app/hooks';
import { selectStatus } from '../../../app/repositoriesSlice';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

type InnerProps = {
  watch: UseFormWatch<Inputs>;
};

const BtnSearchQuery = ({ watch }: InnerProps) => {
  const status = useAppSelector(selectStatus);

  return (
    <button
      disabled={!watch('query') || status === 'pending'}
      type="submit"
      className="absolute text-black rounded left-4 focus:outline-none focus:ring disabled:opacity-40 disabled:cursor-default focus:ring-green-500 dark:text-white transition-colors"
    >
      {status === 'pending' ? (
        <div className="w-5 h-5">
          <LoadingSpinner />
        </div>
      ) : (
        <SearchIcon className="w-5 h-5" />
      )}
    </button>
  );
};

export default BtnSearchQuery;
