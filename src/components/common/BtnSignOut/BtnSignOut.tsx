import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { userSignOut, selectStatus } from '../../../app/authSlice';
import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner';

const BtnSignOut = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectStatus);

  return (
    <button
      disabled={status === 'pending'}
      onClick={() => dispatch(userSignOut())}
      className="w-full h-full rounded focus:outline-none focus:bg-blue-300 hover:bg-blue-300 transition disabled:cursor-default disabled:opacity-70"
    >
      <small className="flex items-center justify-center text-black uppercase dark:text-white transition-colors">
        {status === 'pending' ? (
          <div className="w-5 h-5 grid place-items-center">
            <LoadingSpinner />
          </div>
        ) : (
          'Sign Out'
        )}
      </small>
    </button>
  );
};

export default BtnSignOut;
