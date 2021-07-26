import React from 'react';
import { XIcon } from '@heroicons/react/solid';
import { UseFormReset, UseFormSetFocus } from 'react-hook-form';
import { Inputs } from '../../features/SearchBar/SearchBar';
import { toast } from 'react-toastify';

type InnerProps = {
  reset: UseFormReset<Inputs>;
  setFocus: UseFormSetFocus<Inputs>;
};

const BtnSearchClear = ({ reset, setFocus }: InnerProps) => {
  const handleReset = async () => {
    try {
      await reset();
      setFocus('query');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <button
      type="button"
      onClick={handleReset}
      className="absolute text-black rounded right-4 dark:text-white transition-colors focus:outline-none focus:ring focus:ring-red-500"
    >
      <XIcon className="w-5 h-5" />
    </button>
  );
};

export default BtnSearchClear;
