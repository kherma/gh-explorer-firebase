import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '../../../app/hooks';
import { fetchRepositoriesFromApi } from '../../../app/repositoriesSlice';

type Inputs = {
  currentPage: number;
};

type InnerProps = {
  totalPages: number;
  page: number;
};

const PaginationForm = ({ totalPages, page }: InnerProps) => {
  const dispatch = useAppDispatch();

  const validateCurrentPage = (currentPage: number) => {
    return currentPage > totalPages ? totalPages : currentPage < 1 ? Math.abs(currentPage) : currentPage;
  };

  const { register, handleSubmit, watch, setValue } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = ({ currentPage }) => {
    dispatch(fetchRepositoriesFromApi({ currentPage: validateCurrentPage(currentPage) }));
  };

  useEffect(() => {
    if (isNaN(watch('currentPage'))) return;
    setValue('currentPage', validateCurrentPage(watch('currentPage')), { shouldValidate: true });
  }, [watch('currentPage')]);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center justify-end mx-2">
      <input
        autoComplete="off"
        defaultValue={page}
        type="number"
        className={`pl-2 w-14 h-10 rounded-md focus:outline-none focus:ring ${
          watch('currentPage') ? 'focus:ring-green-500' : 'focus:ring-red-500'
        }`}
        {...register('currentPage', {
          valueAsNumber: true,
          required: true,
          min: 1,
          max: totalPages,
        })}
      />
      <p className="ml-4 text-lg text-gray-800 transition-colors dark:text-white">of {totalPages}</p>
    </form>
  );
};

export default PaginationForm;
