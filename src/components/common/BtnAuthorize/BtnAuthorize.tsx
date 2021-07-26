import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { authWithSocialMedia, selectStatus } from '../../../app/authSlice';
import { Providers } from '../../../config/firebase';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const BtnAuthorize = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatus);

  return (
    <button
      disabled={status === 'pending'}
      className="flex items-center justify-center w-full px-4 py-2 text-xl text-center text-white bg-green-500 border-b-4 border-green-600 rounded focus:outline-none sm:text-4xl xl:text-xl transition-colors hover:bg-green-700 hover:border-green-800 focus:ring-4 focus:ring-green-300 disabled:opacity-50 disabled:bg-green-700 disabled:border-green-800 disabled:cursor-default"
      onClick={() => dispatch(authWithSocialMedia(Providers.github))}
    >
      {status === 'pending' ? (
        <div className="w-7 h-7 sm:w-10 sm:h-10 xl:w-7 xl:h-7 grid place-items-center">
          <LoadingSpinner />
        </div>
      ) : (
        'Authorize'
      )}
    </button>
  );
};

export default BtnAuthorize;
