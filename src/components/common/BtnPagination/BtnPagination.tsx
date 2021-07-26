import React from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { fetchRepositoriesFromApi } from '../../../app/repositoriesSlice';

type InnerPropps = {
  btnIcon: React.ReactNode;
  value: number;
};

const BtnPagination = ({ btnIcon, value }: InnerPropps) => {
  const dispatch = useAppDispatch();

  return (
    <button
      className="text-gray-700 transition-colors dark:text-white hover:bg-gray-300 dark:hover:bg-gray-500 rounded-md focus:outline-none focus:ring focus:ring-gray-400"
      onClick={() => dispatch(fetchRepositoriesFromApi({ currentPage: value }))}
    >
      {btnIcon}
    </button>
  );
};

export default BtnPagination;
