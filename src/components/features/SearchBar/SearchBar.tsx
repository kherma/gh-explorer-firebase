import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useAppDispatch } from '../../../app/hooks';
import { fetchRepositoriesFromApi } from '../../../app/repositoriesSlice';
import BtnSearchQuery from '../../common/BtnSearchQuery/BtnSearchQuery';
import BtnSearchClear from '../../common/BtnSearchClear/BtnSearchClear';

export type Inputs = {
  query: string;
};

const SearchBar = () => {
  const { register, handleSubmit, reset, setFocus, watch } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = ({ query }) => {
    dispatch(fetchRepositoriesFromApi({ query }));
  };

  const dispatch = useAppDispatch();

  return (
    <form className="relative flex items-center flex-1 mr-4" onSubmit={handleSubmit(onSubmit)}>
      <input
        autoComplete="off"
        type="text"
        className={`w-full px-10 py-2 bg-transparent border-2 border-gray-500 transition-colors dark:border-white rounded-3xl focus:outline-none focus:ring text-black dark:text-white ${
          watch('query') ? 'focus:ring-green-500' : 'focus:ring-red-500'
        }`}
        {...register('query', { required: true })}
      />
      <BtnSearchQuery watch={watch} />
      {watch('query') ? <BtnSearchClear reset={reset} setFocus={setFocus} /> : null}
    </form>
  );
};

export default SearchBar;
