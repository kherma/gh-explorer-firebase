import React from 'react';
import { useAppSelector } from '../../../app/hooks';
import { selectNumberOfPages, selectCurrentPage } from '../../../app/repositoriesSlice';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import BtnPagination from '../../common/BtnPagination/BtnPagination';
import PaginationForm from '../PaginationForm/PaginationForm';

const Pagination = () => {
  const totalPages = useAppSelector(selectNumberOfPages);
  const page = useAppSelector(selectCurrentPage);
  return (
    <div className="flex items-center justify-end w-11/12 p-2 my-4 bg-gray-200 border border-white rounded shadow dark:border-gray-700 dark:bg-gray-800 animate-slide transition-colors">
      {page === 1 ? null : <BtnPagination btnIcon={<ChevronLeftIcon className="w-10 h-10" />} value={page - 1} />}
      <PaginationForm totalPages={totalPages} page={page} />
      {page === totalPages ? null : (
        <BtnPagination btnIcon={<ChevronRightIcon className="w-10 h-10" />} value={page + 1} />
      )}
    </div>
  );
};

export default Pagination;
